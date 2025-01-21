import { theme } from "@urban-ui/theme/theme.stylex"
import { Text } from "@urban-ui/text"
import stylex from '@stylexjs/stylex'

const styles = stylex.create({
  container: {
    color: theme.primary,
    padding: 8,
    borderColor: theme.secondary,
    borderWidth: 1,
    borderStyle: 'solid'
  }
})

export function UrbanCounter(props: React.PropsWithChildren) {
  return (
    <div {...stylex.props(styles.container)}>
      <Text>{props.children}</Text>  
    </div>
  )
}