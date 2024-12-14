// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  appwrite: {
    project: "675dd9df0020d7f5775a",
  },
  googleFonts: {
    families: {
      Poppins: true,
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxt/eslint",
    "nuxt-appwrite",
  ],
});
