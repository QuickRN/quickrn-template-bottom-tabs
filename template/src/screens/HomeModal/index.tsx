import { Container, Title, Indigo, SubText, Code } from './styles'
import PhoneSVG from '~assets/svg/phone.svg'

export default function Home() {
  return (
    <Container>
      <PhoneSVG height={220} width={220} />
      <Title>
        This is a <Indigo>QuickRN</Indigo> template
      </Title>
      <SubText>
        Go to <Code> src/screens/HomeModal/index.js </Code> to edit this screen.
      </SubText>
    </Container>
  )
}
