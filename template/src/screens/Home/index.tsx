import { useNavigation } from '@react-navigation/native'
import { Button, Text, View } from 'react-native'
import HomeSVG from '~assets/svg/home.svg'
import { BottomTabStackNavigationProp } from '~navigation/BottomTabStack'
import styles from './styles'

export default function Home() {
  const { navigate } = useNavigation<BottomTabStackNavigationProp>()
  return (
    <View style={styles.container}>
      <HomeSVG height={100} width={100} stroke="#5046E4" />
      <Text style={styles.title}>
        This is <Text style={styles.indigo}>QuickRN BottomTabs</Text> template
      </Text>
      <Text style={styles.subtext}>
        Go to <Text style={styles.code}> src/screens/Home/index.js </Text> to edit this screen.
      </Text>
      <Button
        title="Go to HomeModal"
        onPress={() => navigate('HomeTab', { screen: 'HomeModal' })}
      />
    </View>
  )
}
