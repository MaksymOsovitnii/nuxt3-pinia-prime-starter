import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
     devtools: true,
     typescript: {
          strict: true
     },
     buildModules: ['@pinia/nuxt'],
     modules: ['~/modules/init/module'],
     css: [
          '@/assets/sass/main.scss',
          'primevue/resources/themes/lara-light-indigo/theme.css',
          'primevue/resources/primevue.css',
          'primeicons/primeicons.css',
          'primeflex/primeflex.css'
     ],
     build: {
          transpile: ['primevue']
     },
     publicRuntimeConfig: { API_BASE_URL: process.env.API_BASE_URL },
     privateRuntimeConfig: {}

     // layoutTransition: false,
     // pageTransition: false
});
