import WithScroll from './WithScroll'

let installed = false

export default {
  install(Vue) {
    if (installed) {
      return
    }

    Vue.component('WithScroll', WithScroll)
    installed = true
  },
}

export {
  WithScroll,
}
