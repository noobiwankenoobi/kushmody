// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  ssr: true, // Enable server-side rendering (required for SSG)

  nitro: {
    preset: 'static',
    prerender: {
      routes: ["/", "/music", "/visual"],
      ignore: ["/dynamic"],
    },
  },


  modules: ["@nuxt/eslint"],
})
