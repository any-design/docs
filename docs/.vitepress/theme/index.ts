// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import AnyUI from '@any-design/anyui';
import './style.scss'

export default {
  extends: Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.use(AnyUI);
  }
}
