// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    baseURL: '/learn-vue/004-blog-preview-card',
    head: {
      title: 'Blog Preview Card',
      link: [
        { rel: 'icon', type: 'image/png', href: '/images/favicon-32x32.png'},
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap'
        }
      ],
    }
  },
  nitro: {
    preset: 'github_pages',
  }
})
