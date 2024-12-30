// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "nuxt-appwrite"],
  appwrite: {
    project: "675dd9df0020d7f5775a",
  },
});
