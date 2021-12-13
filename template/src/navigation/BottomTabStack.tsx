import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs'
import HomeStack from './HomeStack'
import Profile from '~screens/Profile'
import Search from '~screens/Search'
import TabBar from './TabBar'

import HomeSVG from '~assets/svg/home.svg'
import UserSVG from '~assets/svg/user.svg'
import SearchSVG from '~assets/svg/search.svg'

import { SvgProps } from 'react-native-svg'

export type BottomTabStackParamList = {
  HomeTab: object | undefined
  SearchTab: object | undefined
  ProfileTab: object | undefined
}

export type BottomTabStackNavigationProp =
  BottomTabNavigationProp<BottomTabStackParamList>

const { Screen, Navigator } = createBottomTabNavigator<BottomTabStackParamList>()

const MainStack = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
      tabBarInactiveTintColor: '#000',
      tabBarActiveTintColor: '#5046E4',
    }}
    tabBar={props => <TabBar {...props} />}
  >
    <Screen
      component={HomeStack}
      name="HomeTab"
      options={{ tabBarIcon: (props: SvgProps) => <HomeSVG {...props} /> }}
    />
    <Screen
      component={Search}
      name="SearchTab"
      options={{ tabBarIcon: (props: SvgProps) => <SearchSVG {...props} /> }}
    />
    <Screen
      component={Profile}
      name="ProfileTab"
      options={{ tabBarIcon: (props: SvgProps) => <UserSVG {...props} /> }}
    />
  </Navigator>
)

export default MainStack
