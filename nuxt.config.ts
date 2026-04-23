// nuxt.config.ts — giftscored.com
// Nuxt 3, fully static via `nuxi generate`.
// Fonts: Libre Caslon Text (serif headings) + Work Sans (body/UI) via Google Fonts.
// Palette: forest #2d4a3a + chalk #f5f3ed + copper #b87333.

export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2025-04-23',
  devtools: { enabled: false },

  nitro: {
    preset: 'static',
  },

  modules: ['@nuxtjs/tailwindcss'],

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'GiftScored — rubric-based gift scoring',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:site_name', content: 'GiftScored' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&family=Work+Sans:wght@400;500;600;700&display=swap',
        },
      ],
    },
  },
});
