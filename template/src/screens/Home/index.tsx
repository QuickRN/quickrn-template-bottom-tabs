import { Container, SubText, Code } from './styles'
import HomeSVG from '~assets/svg/home.svg'
import { useNavigation } from '@react-navigation/native'
import { Button } from 'react-native'
import { BottomTabStackNavigationProp } from '~navigation/BottomTabStack'

export default function Home() {
  const { navigate } = useNavigation<BottomTabStackNavigationProp>()
  return (
    <Container>
      <HomeSVG height={100} width={100} stroke="#5046E4" />
      <SubText>
        Go to <Code> src/screens/Home/index.js </Code> to edit this screen.
      </SubText>
      <Button
        title="Go to HomeModal"
        onPress={() => navigate('HomeTab', { screen: 'HomeModal' })}
      />
    </Container>
  )
}
