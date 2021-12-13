import { Container, SubText, Code } from './styles'
import SearchSVG from '~assets/svg/search.svg'

export default function Home() {
  return (
    <Container>
      <SearchSVG height={100} width={100} stroke="#5046E4" />
      <SubText>
        Go to <Code> src/screens/Search/index.js </Code> to edit this screen.
      </SubText>
    </Container>
  )
}
