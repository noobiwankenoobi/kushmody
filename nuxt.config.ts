// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  app: {
    head: {
      link: [
        {
          rel: 'preload',
          as: 'image',
          href: '/images/hero.jpg'
        },
        // Add other critical hero images here
      ]
    }
  },

  // pre-rendering routes
  // nitro: {
  //   prerender: {
  //     routes: ["/", "/music", "/visual"],
  //     ignore: ["/dynamic"],
  //   },
  // },
  modules: ["@nuxt/eslint", "@pinia/nuxt"],
})