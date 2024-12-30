import "@fontsource/material-icons";

import "vuetify/styles";
import { createVuetify, type IconSet, type ThemeDefinition } from "vuetify";
import { aliases, md } from "vuetify/iconsets/md";
import github from "~/components/icon/IconGithub.vue";
import instagram from "~/components/icon/IconInstagram.vue";

export default defineNuxtPlugin((app) => {
  const light: ThemeDefinition = {
    colors: {
      primary: "#009fe3",
    },
    dark: false,
  };

  const dark: ThemeDefinition = {
    ...light,
    dark: true,
  };

  const customIcons: { [key: string]: typeof github } = {
    github,
    instagram,
  };

  const customIconSet: IconSet = {
    component: (props) =>
      h(props.tag, [
        h(customIcons[props.icon as string], { class: "v-icon__svg" }),
      ]),
  };

  const vuetify = createVuetify({
    defaults: {
      VTextField: {
        color: "primary",
        variant: "underlined",
      },
    },
    icons: {
      defaultSet: "md",
      aliases,
      sets: {
        md,
        custom: customIconSet,
      },
    },
    theme: {
      defaultTheme: "light",
      themes: {
        light,
        dark,
      },
    },
  });
  app.vueApp.use(vuetify);
});
