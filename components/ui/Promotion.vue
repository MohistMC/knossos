<template>
    <div class="GBBNWLJVGRHFLYVGSZKSSKNTHFYXHMBD">
      <a
        :href="`https://cloud.devicloud.cn/`"
        rel="noopener nofollow sponsored"
        :target="target"
      ></a>
      <div class="GBBNWLJVGRHFLYVGSZKSSKNTHFYXHMBD-0">
        <div class="GBBNWLJVGRHFLYVGSZKSSKNTHFYXHMBD-1">
          <div class="GBBNWLJVGRHFLYVGSZKSSKNTHFYXHMBD-2">
            <BisectIcon class="GBBNWLJVGRHFLYVGSZKSSKNTHFYXHMBD-3" />
            <span>
              <span>使用</span>
              <strong>德威云</strong>
              <span> 搭建你的专属服务器吧！</span>
            </span>
          </div>
        </div>
        <div class="GBBNWLJVGRHFLYVGSZKSSKNTHFYXHMBD-4">
          <!-- <a rel="noopener sponsored" :target="target" href="https://adrinth.com"> Ad via Adrinth </a> -->
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue'
  import { BisectIcon } from 'omorphia'
  
  const props = withDefaults(
    defineProps<{
      external?: boolean
      queryParam?: string
    }>(),
    {
      external: true,
      queryParam: '',
    }
  )
  
  const target = computed(() => (props.external ? '_blank' : '_self'))
  </script>
  
  <style lang="scss" scoped>
  .GBBNWLJVGRHFLYVGSZKSSKNTHFYXHMBD {
    position: relative;
    margin-bottom: var(--gap-lg);
    background: var(--color-ad);
    border: 1px solid var(--color-ad-raised);
    border-radius: var(--radius-lg);
    container-type: inline-size;
    width: 100%;
  
    > a {
      position: absolute;
      inset: 0;
    }
  
    &:has(> a:first-child:active) {
      scale: 0.99;
    }
  }
  .GBBNWLJVGRHFLYVGSZKSSKNTHFYXHMBD-0 {
    font-size: 14px;
    line-height: 1.3em;
  }
  .GBBNWLJVGRHFLYVGSZKSSKNTHFYXHMBD-1 {
    color: var(--color-base);
    padding: 1em;
    text-align: left;
  }
  .GBBNWLJVGRHFLYVGSZKSSKNTHFYXHMBD-2 {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--color-base);
    margin-right: 7.5rem;
  
    &:hover {
      text-decoration: none;
    }
  }
  .GBBNWLJVGRHFLYVGSZKSSKNTHFYXHMBD-2 b,
  .GBBNWLJVGRHFLYVGSZKSSKNTHFYXHMBD-2 strong {
    color: var(--color-ad-highlight);
  }
  .GBBNWLJVGRHFLYVGSZKSSKNTHFYXHMBD-3 {
    padding-top: 1px;
    height: 1.5rem;
    width: auto;
    flex-shrink: 0;
  }
  .GBBNWLJVGRHFLYVGSZKSSKNTHFYXHMBD-4 a {
    position: absolute;
    bottom: -1px;
    right: -1px;
    text-align: center;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 0.8em;
    color: var(--color-ad-contrast);
    background: var(--color-ad-raised);
    letter-spacing: 0.1ch;
    margin: 0;
    padding: 2px 10px;
    border-top-left-radius: var(--radius-lg);
    border-bottom-right-radius: var(--radius-lg);
    display: flex;
    align-items: center;
    gap: 0.5rem;
  
    &:hover {
      text-decoration: none;
    }
  }
  @media screen and (max-width: 800px) {
    .GBBNWLJVGRHFLYVGSZKSSKNTHFYXHMBD-2 {
      margin-bottom: 0.5rem;
    }
    .GBBNWLJVGRHFLYVGSZKSSKNTHFYXHMBD-2 a {
      align-items: flex-start;
      flex-direction: column;
    }
  }
  </style>