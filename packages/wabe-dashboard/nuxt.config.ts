// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui'],
  devtools: {
    enabled: true,
  },
  css: ['~/assets/css/main.css'],
  routeRules: {
    '/api/**': {
      cors: true,
    },
  },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-07-11',
})
