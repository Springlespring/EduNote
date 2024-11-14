import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Link} from 'expo-router';

export default function App () {
  return (
    <View className="flex-1  items-center justify bg-orange-200">
      <Image style={styles.frontpage} source={require ('../assets/423-4233207_all-in-one-health-study-ielts-hd-png-removebg-preview.png')}/>
     
      <View>
        <Text className="text-3xl font-u_regular">EduNote</Text>
      </View>
      <View>
        <Link href="home">Let's get started</Link>
      </View>
      <StatusBar style="auto" />
    </View>
    
  );
}
const styles = StyleSheet.create({
  frontpage: {
    height: 200,
    width: 200,
    marginTop: 150,
    alignItems: "center",
  }

})