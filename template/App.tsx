import { StatusBar, useColorScheme } from 'react-native'
import BottomTabStack from './src/navigation/BottomTabStack'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: '#fff',
    flex: 1,
  }

  return (
    <NavigationContainer>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <SafeAreaProvider style={backgroundStyle}>
        <BottomTabStack />
      </SafeAreaProvider>
    </NavigationContainer>
  )
}

export default App
