import TOML from '@ltd/j-toml'
import JSZip from 'jszip'
import yaml from 'js-yaml'
import { satisfies } from 'semver'

export const inferVersionInfo = async function (rawFile, project, gameVersions) {
  function versionType(number) {
    if (number.includes('alpha')) {
      return 'alpha'
    } else if (
      number.includes('beta') ||
      number.match(/[^A-z](rc)[^A-z]/) || // includes `rc`
      number.match(/[^A-z](pre)[^A-z]/) // includes `pre`
    ) {
      return 'beta'
    } else {
      return 'release'
    }
  }

  function getGameVersionsMatchingSemverRange(range, gameVersions) {
    if (!range) {
      return []
    }
    const ranges = Array.isArray(range) ? range : [range]
    return gameVersions.filter((version) => {
      const semverVersion = version.split('.').length === 2 ? `${version}.0` : version // add patch version if missing (e.g. 1.16 -> 1.16.0)
      return ranges.some((v) => satisfies(semverVersion, v))
    })
  }

  function getGameVersionsMatchingMavenRange(range, gameVersions) {
    if (!range) {
      return []
    }
    const ranges = []

    while (range.startsWith('[') || range.startsWith('(')) {
      let index = range.indexOf(')')
      const index2 = range.indexOf(']')
      if (index === -1 || (index2 !== -1 && index2 < index)) {
        index = index2
      }
      if (index === -1) break
      ranges.push(range.substring(0, index + 1))
      range = range.substring(index + 1).trim()
      if (range.startsWith(',')) {
        range = range.substring(1).trim()
      }
    }

    if (range) {
      ranges.push(range)
    }

    const LESS_THAN_EQUAL = /^\(,(.*)]$/
    const LESS_THAN = /^\(,(.*)\)$/
    const EQUAL = /^\[(.*)]$/
    const GREATER_THAN_EQUAL = /^\[(.*),\)$/
    const GREATER_THAN = /^\((.*),\)$/
    const BETWEEN = /^\((.*),(.*)\)$/
    const BETWEEN_EQUAL = /^\[(.*),(.*)]$/
    const BETWEEN_LESS_THAN_EQUAL = /^\((.*),(.*)]$/
    const BETWEEN_GREATER_THAN_EQUAL = /^\[(.*),(.*)\)$/

    const semverRanges = []

    for (const range of ranges) {
      let result
      if ((result = range.match(LESS_THAN_EQUAL))) {
        semverRanges.push(`<=${result[1]}`)
      } else if ((result = range.match(LESS_THAN))) {
        semverRanges.push(`<${result[1]}`)
      } else if ((result = range.match(EQUAL))) {
        semverRanges.push(`${result[1]}`)
      } else if ((result = range.match(GREATER_THAN_EQUAL))) {
        semverRanges.push(`>=${result[1]}`)
      } else if ((result = range.match(GREATER_THAN))) {
        semverRanges.push(`>${result[1]}`)
      } else if ((result = range.match(BETWEEN))) {
        semverRanges.push(`>${result[1]} <${result[2]}`)
      } else if ((result = range.match(BETWEEN_EQUAL))) {
        semverRanges.push(`>=${result[1]} <=${result[2]}`)
      } else if ((result = range.match(BETWEEN_LESS_THAN_EQUAL))) {
        semverRanges.push(`>${result[1]} <=${result[2]}`)
      } else if ((result = range.match(BETWEEN_GREATER_THAN_EQUAL))) {
        semverRanges.push(`>=${result[1]} <${result[2]}`)
      }
    }
    return getGameVersionsMatchingSemverRange(semverRanges, gameVersions)
  }

  const simplifiedGameVersions = gameVersions
    .filter((it) => it.version_type === 'release')
    .map((it) => it.version)

  const inferFunctions = {
    // Bukkit + Other Forks
    'plugin.yml': (file) => {
      const metadata = yaml.load(file)

      return {
        name: `${project.title} ${metadata.version}`,
        version_number: metadata.version,
        version_type: versionType(metadata.version),
        // We don't know which fork of Bukkit users are using
        loaders: [],
        game_versions: gameVersions
          .filter(
            (x) => x.version.startsWith(metadata['api-version']) && x.version_type === 'release'
          )
          .map((x) => x.version),
      }
    },
    // Paper 1.19.3+
    'paper-plugin.yml': (file) => {
      const metadata = yaml.load(file)

      return {
        name: `${project.title} ${metadata.version}`,
        version_number: metadata.version,
        version_type: versionType(metadata.version),
        loaders: ['paper'],
        game_versions: gameVersions
          .filter(
            (x) => x.version.startsWith(metadata['api-version']) && x.version_type === 'release'
          )
          .map((x) => x.version),
      }
    },
    // Bungeecord + Waterfall
    'bungee.yml': (file) => {
      const metadata = yaml.load(file)

      return {
        name: `${project.title} ${metadata.version}`,
        version_number: metadata.version,
        version_type: versionType(metadata.version),
        loaders: ['bungeecord'],
      }
    },
    // Velocity
    'velocity-plugin.json': (file) => {
      const metadata = JSON.parse(file)

      return {
        name: `${project.title} ${metadata.version}`,
        version_number: metadata.version,
        version_type: versionType(metadata.version),
        loaders: ['velocity'],
      }
    },
  }

  const zipReader = new JSZip()

  const zip = await zipReader.loadAsync(rawFile)

  for (const fileName in inferFunctions) {
    const file = zip.file(fileName)

    if (file !== null) {
      const text = await file.async('text')
      return inferFunctions[fileName](text, zip)
    }
  }
}
