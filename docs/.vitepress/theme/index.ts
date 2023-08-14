// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import '@any-design/anyui/styles/default.scss';
import Theme from 'vitepress/theme'
import './style.scss'
import AnyUI from '@any-design/anyui';

export default {
  extends: Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.use(AnyUI);
  }
}
