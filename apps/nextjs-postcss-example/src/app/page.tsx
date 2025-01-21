
import {Counter} from './counter'
import { UrbanCounter } from './urban'

export default function Page() {
  return (
    <main>
      <h1>Page</h1>
      <Counter />
      <UrbanCounter>Hello world</UrbanCounter>
    </main>
  )
}