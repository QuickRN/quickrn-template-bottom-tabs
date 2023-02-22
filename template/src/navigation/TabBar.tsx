import { BottomTabBarProps } from '@react-navigation/bottom-tabs/lib/typescript/src/types'
import type { ReactNode } from 'react'
import { StyleSheet, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { SvgProps } from 'react-native-svg'

export default function TabBar(props: BottomTabBarProps) {
  const { navigation, state, descriptors } = props
  const { width: windowWidth } = useWindowDimensions()
  const routesLength: number = state.routes.length
  const tabWidth: number = windowWidth / routesLength
  const activeRoute: number = state.index
  const { bottom: insetBottom } = useSafeAreaInsets()

  return (
    <View style={[styles.container, { paddingBottom: insetBottom }]}>
      {state.routes.map((route: any, routeIndex: number) => {
        const focused: boolean = activeRoute === routeIndex
        const { options } = descriptors[route.key]
        const { tabBarIcon, tabBarActiveTintColor, tabBarInactiveTintColor } = options
        const tintColor =
          (focused ? tabBarActiveTintColor : tabBarInactiveTintColor) ?? '#000'
        const icon = tabBarIcon as (iconProps: SvgProps) => ReactNode
        return (
          <TouchableOpacity
            style={[styles.tab, { width: tabWidth }]}
            onPress={() => navigation.navigate(route.name)}
            key={route.key}
          >
            {icon && icon({ stroke: tintColor, height: 28, width: 28 })}
          </TouchableOpacity>
        )
      })}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#c2c2c2',
    shadowOffset: { height: -0.5, width: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 12,
    paddingBottom: 4,
  },
})
