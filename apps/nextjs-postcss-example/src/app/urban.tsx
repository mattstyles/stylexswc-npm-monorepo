// import { theme } from "@urban-ui/theme/dist/tokens/theme.stylex"
import { theme } from '@urban-ui/theme/theme.stylex'
import { Text } from "@urban-ui/text"
import {Flex} from '@urban-ui/flex'
import stylex from '@stylexjs/stylex'

const styles = stylex.create({
  container: {
    color: theme.primary,
    padding: 8,
    borderColor: theme.secondary,
    borderWidth: 1,
    borderStyle: 'solid',
    margin: 0
  }
})

export function UrbanCounter(props: React.PropsWithChildren) {
  return (
    <div {...stylex.props(styles.container)}>
      <Text>{props.children}</Text>
      <Flex>Hello world flex</Flex>
    </div>
  )
}