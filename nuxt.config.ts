import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  appwrite: {
    project: "675dd9df0020d7f5775a",
  },
  build: {
    transpile: ["vuetify"],
  },
  compatibilityDate: "2024-11-01",
  css: ["~/assets/css/material-icons.css"],
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "nuxt-appwrite",
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error Plugins will not be empty
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
