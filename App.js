import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';

import Headline from './Components/BrandText/Headline';
import Login from './Components/Login/Login'


export default function App() {
  return (
    <View style={styles.container}>
      <Headline />
      <Login />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#231A1F',
    alignItems: 'center',
    height: "100%",
    width: "100%"
  },
});
