// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";
export default defineNuxtConfig({
  app: {
    head: {
      title: "nuxt3",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
  },
  modules: [
    // '@nuxtjs/axios',
    // '@nuxtjs/auth-next'
    "@pinia/nuxt",
    '@pinia-plugin-persistedstate/nuxt',
  ],
  imports: {
    dirs: ['./stores'],
  },
  pinia: {
    storesDirs: ["./stores/**", "./custom-folder/stores/**"],
  },
});
