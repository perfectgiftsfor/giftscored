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
    prerender: {
      // Explicit route list with trailing slashes prevents the crawler from
      // prerendering both /path and /path/ which caused a race where the
      // second write appended a stray literal `/html>` after the proper
      // `</html>` tag in generated HTML.
      crawlLinks: false,
      routes: [
        '/',
        '/methodology/',
        '/methodology/how-we-pick/',
        '/methodology/how-we-score/',
        '/methodology/quarterly-refresh/',
        '/methodology/worked-example-anniversary/',
        '/methodology/worked-example-graduation/',
        '/methodology/worked-example-mom-birthday/',
        '/masthead/',
        '/about/',
        '/editorial/',
        '/corrections/',
        '/contact/',
        '/privacy/',
        '/terms/',
      ],
    },
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
        { property: 'og:image', content: 'https://giftscored.com/og-default.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'https://giftscored.com/og-default.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'alternate', type: 'application/rss+xml', title: 'GiftScored', href: '/feed.xml' },
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
