import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, Dimensions } from 'react-native';
import splash from '../../images/splash.png';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={splash}
        resizeMode="cover"
      />
      <StatusBar style="auto" />
    </View>
  )
}
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: width,
    height: height,
    position: 'absolute',
  },
});


export default SplashScreen