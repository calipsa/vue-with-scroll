// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/vue'
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions'

import { WithScroll } from '../dist'

function generateItems(n) {
  const arr = []
  for (let i = 0; i < n; ++i) {
    arr.push(Math.random().toString(36).slice(2))
  }
  return arr
}

const methods = {
  onScroll: action('scroll'),
  onReachThreshold: action('reach-threshold'),
}

storiesOf('WithScroll', module)
  .add('with actions', () => ({
    components: {
      WithScroll,
    },
    template: `
      <WithScroll
        :bottomThreshold="200"
        @reachThreshold="onReachThreshold"
        @scroll="onScroll"
      >
        <ul style="max-height: 100px; overflow-y: scroll;">
          ${generateItems(50).map(i => `
            <li>${i}</li>
          `).join('')}
        </ul>
      </WithScroll>
    `,
    methods,
  }))
