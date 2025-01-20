'use client'

import stylex from '@stylexjs/stylex'
import { colors } from '@stylexjs/open-props/lib/colors.stylex'

export function Counter() {
  return (
    <div {...stylex.props(styles.container)}>
      <h1>Hello world</h1>
    </div>
  )
}

const styles = stylex.create({
  container: {
    padding: 8,
    background: 'gainsboro',
    color: colors.red7
  }
})
