<template>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="202" height="42" viewBox="0 0 202 42">
  <defs>
    <clipPath >
      <rect  width="202" height="42" fill="none"/>
    </clipPath>
    <clipPath >
      <rect width="16" height="26" transform="translate(4 11.75)" fill="none"/>
    </clipPath>
    <pattern id="pattern" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 68 109">
      <image width="68" height="109" xlink:href="data:image/png;base64,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"/>
    </pattern>
  </defs>
  <path d="M57.45,9.02q-3.48.045-4.35,2.61l-.34-2.24H48.5V31.77h4.84l-.05-18.59a.544.544,0,0,1,.48-.5h6.24a.567.567,0,0,1,.53.5V31.77h4.74V13.18a.557.557,0,0,1,.53-.5h6.14a.567.567,0,0,1,.53.5V31.77h4.74V14q0-3.75-2.71-4.61a9.884,9.884,0,0,0-2.9-.37H69.43q-3.72.045-4.4,2.97c-.45-1.71-1.77-2.68-3.96-2.93-.45-.03-.92-.05-1.41-.05H57.44ZM95.4,32.14V28.35H86.74a.567.567,0,0,1-.53-.5V13.32a.566.566,0,0,1,.53-.5H95.4V9.03H88.1q-4.98,0-6.19,2.74a7.678,7.678,0,0,0-.48,2.88V26.53q0,4.155,3.19,5.16a11.506,11.506,0,0,0,3.48.46h7.3Zm7.76,8.31V31.82l6.34.04c2.93.03,4.79-.67,5.56-2.1a7.044,7.044,0,0,0,.58-3.11V14c0-2.5-.91-4.04-2.71-4.61a9.884,9.884,0,0,0-2.9-.37h-2.66c-2.48.03-3.92,1.04-4.3,3.02l-.43-2.65H98.43V40.45h4.74Zm0-27.27a.557.557,0,0,1,.53-.5h6.72a.567.567,0,0,1,.53.5V27.7a.557.557,0,0,1-.53.5l-7.25-.05Zm22.01,18.59V.94h-4.74V31.77Zm13.17.37q3.63-.045,4.3-2.88l.39,2.51h4.26l-.1-22.38h-4.74l.05,19.09h-7.21a.567.567,0,0,1-.53-.5V9.39h-4.79V27.11q0,3.84,2.9,4.71a10.571,10.571,0,0,0,2.76.32h2.71Zm25.69-4.16a.563.563,0,0,1-.48.5h-6.72a.587.587,0,0,1-.54-.5V13.5a.576.576,0,0,1,.54-.5l7.21.09V27.98Zm-.48,9.09H152.47v3.74h9.68q4.98,0,6.19-2.74a7.678,7.678,0,0,0,.48-2.88V9.39l-11.07-.14c-2.9-.03-4.74.65-5.51,2.06a6.864,6.864,0,0,0-.63,3.2v12.6c0,2.53.94,4.08,2.8,4.66a9.571,9.571,0,0,0,2.81.37h2.66c2.22-.03,3.61-.86,4.16-2.47v6.9a.553.553,0,0,1-.48.5h0Zm15.33-5.3V9.39h-4.79V31.77Zm0-26.36V1.25h-4.79V5.41Zm14.09,3.61q-3.54.045-4.3,2.7l-.39-2.33h-4.21l.05,22.38h4.74l-.05-18.59a.557.557,0,0,1,.53-.5h6.68a.567.567,0,0,1,.53.5V31.77h4.74V14c0-2.5-.91-4.04-2.71-4.61a9.884,9.884,0,0,0-2.9-.37h-2.71Zm0,0"/>
  <path d="M38.97,11.23a2.664,2.664,0,0,0-1.12-1.18L21.19,1.23a2.59,2.59,0,0,0-2.42,0L2.13,9.99a2.637,2.637,0,0,0-.68.61,2.766,2.766,0,0,0-.42.55,2.711,2.711,0,0,0-.29,1.14V29.41a2.6,2.6,0,0,0,1.43,2.31l16.64,8.75a2.6,2.6,0,0,0,1.18.34h.2a2.53,2.53,0,0,0,1.01-.27l16.64-8.75a2.625,2.625,0,0,0,1.43-2.31V12.3a2.515,2.515,0,0,0-.29-1.07h0Zm-3.12,1.55L20.17,20.54l-.18.1V37.28L4.11,28.94V12.77l.61-.33L19.98,4.43l15.83,8.32.04.03Zm0,0Zm0,0"/>
  <path d="M35.81,12.75,19.98,4.43,4.8,12.41l-.61.32,15.8,7.89.19-.09,15.68-7.76h0l-.04-.03ZM20.17,20.54l-.19.09Zm0,0Zm0,0" fill="#00fb84"/>
  <path d="M19.97,37.23l.07-16.58L4.18,12.7l-.2,16.43,16,8.1ZM4.54,27.22Zm2,3.78Zm0,0" fill="#fff"/>
  <rect width="6.5" height="1.73" transform="translate(20 28.07)" fill="#00fb84"/>
  <g  clip-path="url(#clip-path)">
    <path  d="M33.66,17.16v-4.7H29V10.5h4.66V5.84h1.98V10.5H40.3v1.96H35.64v4.7Zm0,0" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2.25"/>
  </g>
  <path d="M33.66,17.16v-4.7H29V10.5h4.66V5.84h1.98V10.5H40.3v1.96H35.64v4.7Zm0,0" fill="#00fb84"/>
  <path d="M32.08,31.75l-.02-5.35,5.13-2.57.06,5.31-5.16,2.61Zm4.99-3.23Zm-.65,1.22Zm0,0" fill="#fff"/>
  <g clip-path="url(#clip-path-2)">
    <rect width="16.08" height="26.16" transform="translate(4 11.75)" fill="url(#pattern)"/>
  </g>
</svg>

</template>

<script setup>
const loading = useLoading()

const config = useRuntimeConfig()

const api = computed(() => {
  const apiUrl = config.public.apiBaseUrl
  if (apiUrl.startsWith('https://api.modrinth.com')) {
    return 'prod'
  } else if (apiUrl.startsWith('https://staging-api.modrinth.com')) {
    return 'staging'
  } else if (apiUrl.startsWith('localhost') || apiUrl.startsWith('127.0.0.1')) {
    return 'localhost'
  }
  return 'foreign'
})
</script>

<style lang="scss" scoped>
.animate {
  .ring {
    transform-origin: center;
    transform-box: fill-box;
    animation-fill-mode: forwards;
    transition: transform 2s ease-in-out;
    &--large {
      animation: spin 1s ease-in-out infinite forwards;
    }
    &--small {
      animation: spin 2s ease-in-out infinite reverse;
    }
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
}
</style>
