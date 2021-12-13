import type { ReactNode } from 'react'
import styled from '@emotion/native'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs/lib/typescript/src/types'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useWindowDimensions } from 'react-native'
import { SvgProps } from 'react-native-svg'

export default function TabBar(props: BottomTabBarProps) {
  const { navigation, state, descriptors } = props
  const { width: windowWidth } = useWindowDimensions()
  const routesLength: number = state.routes.length
  const tabWidth: number = windowWidth / routesLength
  const activeRoute: number = state.index
  const { bottom: insetBottom } = useSafeAreaInsets()

  return (
    <Container style={{ paddingBottom: insetBottom }}>
      {state.routes.map((route: any, routeIndex: number) => {
        const focused: boolean = activeRoute === routeIndex
        const { options } = descriptors[route.key]
        const { tabBarIcon, tabBarActiveTintColor, tabBarInactiveTintColor } = options
        const tintColor =
          (focused ? tabBarActiveTintColor : tabBarInactiveTintColor) ?? '#000'
        const icon = tabBarIcon as (iconProps: SvgProps) => ReactNode
        return (
          <Tab
            style={{ width: tabWidth }}
            onPress={() => navigation.navigate(route.name)}
            key={route.key}
          >
            {icon && icon({ stroke: tintColor, height: 34, width: 34 })}
          </Tab>
        )
      })}
    </Container>
  )
}

const Container = styled.View({
  width: '100%',
  backgroundColor: '#fff',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  shadowColor: '#c2c2c2',
  shadowOffset: { height: -0.5, width: 0 },
  shadowOpacity: 0.3,
  shadowRadius: 6,
})

const Tab = styled.TouchableOpacity({
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: 12,
  paddingBottom: 4,
})
