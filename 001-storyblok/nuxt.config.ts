// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      title: "Storyblok + Nuxt",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1'},
        { name: 'description', content: 'An awesome blog about tech stuff, built with Nuxt and Storyblok'}
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
        { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"}
      ]
    }
  }
})
