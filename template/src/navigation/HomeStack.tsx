import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'
import Home from '~screens/Home'
import HomeModal from '~screens/HomeModal'

export type HomeStackParamList = {
  Home: object | undefined
  HomeModal: object | undefined
}

export type HomeStackNavigationProp = NativeStackNavigationProp<HomeStackParamList>

const { Screen, Navigator, Group } = createNativeStackNavigator<HomeStackParamList>()

const HomeStack = () => (
  <Navigator screenOptions={{ headerShown: false }}>
    <Screen component={Home} name="Home" />
    <Group screenOptions={{ presentation: 'modal' }}>
      <Screen component={HomeModal} name="HomeModal" />
    </Group>
  </Navigator>
)

export default HomeStack
