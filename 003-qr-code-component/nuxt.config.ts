// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png'},
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap' 
        }
      ],
    }
  }
})
