import { Text, View } from 'react-native'
import UserSVG from '~assets/svg/user.svg'
import styles from './styles'

export default function Home() {
  return (
    <View style={styles.container}>
      <UserSVG height={100} width={100} stroke="#5046E4" />
      <Text style={styles.subtext}>
        Go to <Text style={styles.code}> src/screens/Profile/index.js </Text> to edit this
        screen.
      </Text>
    </View>
  )
}
