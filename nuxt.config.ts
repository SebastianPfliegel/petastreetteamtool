// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  googleFonts: {
    families: {
      Poppins: true,
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@nuxt/eslint"],
  runtimeConfig: {
    public: {
      endpointUrl: "https://cloud.appwrite.io/v1",
      projectId: "",
    },
  },
});
