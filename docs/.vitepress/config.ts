import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AnyUI Document",
  description: "A cute UI components library for Vue 3.",
  themeConfig: {
    i18nRouting: true,
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/examples" },
    ],

    sidebar: [
      {
        text: "Components",
        items: [
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/any-design/anyui" },
    ],
  },
});
