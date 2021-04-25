import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Headline from './Components/BrandText/Headline';
import AppLoading from 'expo-app-loading';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Amatory</Text>
      <Headline />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#231A1F',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
