<template>
  <div>
    <slot />
  </div>
</template>

<script>
import { Fragment } from 'vue-fragment'

import getDistanceFromBottom from './getDistanceFromBottom'

export default {
  components: {
    Fragment,
  },

  props: {
    bottomThreshold: Number,
    resetKey: [String, Number, Boolean, Object],
  },

  computed: {
    root() {
      const defaultSlot = this.$slots.default
      return defaultSlot && defaultSlot[0].elm || document.documentElement
    },

    scrollableElement() {
      return this.root === document.documentElement
        ? window
        : this.root
    },
  },

  watch: {
    resetKey() {
      this.reset()
    },
  },

  mounted() {
    this.init()
    this.scrollableElement.addEventListener('scroll', this.handleScroll)
  },

  beforeDestroy() {
    this.scrollableElement.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    init() {
      const { root } = this
      if (!root) {
        return
      }

      this.maxScrollTop = this.root.scrollTop
      this.lastScrollHeight = this.root.scrollHeight
      this.emitReachThresholdDisabled = false
      this.handleReachBottom()
    },

    reset() {
      if (this.root !== document.documentElement) {
        this.root.scrollTop = 0
      }
      this.init()
    },

    handleReachBottom() {
      if (!this.root) {
        return
      }

      const {
        scrollTop, // scrolled distance
        // offsetHeight, // height on the screen (including borders)
        scrollHeight, // total height (with the invisible scrolled part)
      } = this.root

      if (scrollHeight !== this.lastScrollHeight) {
        // resized (e.g. new elements have been added)
        // enable event emitting
        this.emitReachThresholdDisabled = false
        // assign new height
        this.lastScrollHeight = scrollHeight
      }

      if (scrollTop <= this.maxScrollTop) {
        // hasn't reached new low
        return
      }

      this.maxScrollTop = scrollTop
      const toBottom = getDistanceFromBottom(this.root)

      if (this.emitReachThresholdDisabled || toBottom > this.bottomThreshold) {
        // can't emit event or hasn't reached the threshold
        return
      }

      // disable event emitting
      this.emitReachThresholdDisabled = true
      this.$emit('reachThreshold')
    },

    handleScroll() {
      const { root } = this
      if (!root) {
        return
      }

      const {
        scrollTop,
        clientHeight,
        scrollHeight,
      } = root

      this.$emit('scroll', {
        scrollTop,
        clientHeight,
        scrollHeight,
        fraction: scrollTop / (scrollHeight - clientHeight),
      })

      if (scrollTop === 0) {
        this.$emit('reachTop')
      }

      if (scrollTop + clientHeight >= scrollHeight) {
        this.$emit('reachBottom')
      }

      this.handleReachBottom()
    },
  },
}
</script>
