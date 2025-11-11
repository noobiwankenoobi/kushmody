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

  icon: {
    mode: 'css',
    cssLayer: 'base'
  },

  // nitro: {
  //   prerender: {
  //     routes: ["/", "/music", "/visual"],
  //     ignore: ["/dynamic"],
  //   },
  // },


  modules: ["@nuxt/eslint", "@pinia/nuxt"],
})