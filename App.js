import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{
        fontFamily: 'Dancing Script',
        fontSize: 40
      }}>Amatory</Text>
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
