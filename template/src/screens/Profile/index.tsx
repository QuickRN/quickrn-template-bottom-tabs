import { Container, SubText, Code } from './styles'
import UserSVG from '~assets/svg/user.svg'

export default function Home() {
  return (
    <Container>
      <UserSVG height={100} width={100} stroke="#5046E4" />
      <SubText>
        Go to <Code> src/screens/Profile/index.js </Code> to edit this screen.
      </SubText>
    </Container>
  )
}
