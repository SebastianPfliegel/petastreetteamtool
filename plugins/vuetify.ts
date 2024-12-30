import "@fontsource/material-icons";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import { aliases, md } from "vuetify/iconsets/md";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    icons: {
      defaultSet: "md",
      aliases,
      sets: {
        md,
      },
    },
  });
  app.vueApp.use(vuetify);
});
