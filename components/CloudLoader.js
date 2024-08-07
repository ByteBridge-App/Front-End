import { View, StyleSheet, Text } from 'react-native'
import LottieView from 'lottie-react-native'

const CloudLoader = (props) => {
    const { message } = props
    return (
      <View style={{alignItems: "center"}}>
      <LottieView
        style={styles.lottieIndicator}
        source={require('../assets/cloudLoading.json')}
        autoPlay
        loop
        speed={2}
      />
      <Text style={styles.msg}>{`${message}...`}</Text>
      </View>
    )
  }
  
  export default CloudLoader
  
  const styles = StyleSheet.create({
    msg: {
          fontSize: 30,
      },
  
  
    lottieIndicator: {
      width: 400,
      height: 400
    }
  })