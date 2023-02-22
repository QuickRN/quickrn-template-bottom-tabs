import { Text, View } from 'react-native'
import SearchSVG from '~assets/svg/search.svg'
import styles from './styles'

export default function Home() {
  return (
    <View style={styles.container}>
      <SearchSVG height={100} width={100} stroke="#5046E4" />
      <Text style={styles.subtext}>
        Go to <Text style={styles.code}> src/screens/Search/index.js </Text> to edit this
        screen.
      </Text>
    </View>
  )
}
