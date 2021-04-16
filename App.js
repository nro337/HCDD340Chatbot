import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions } from 'react-native';

import AppNavigation from './App/Navigation/AppNavigation'

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <View style={styles.container}>
        {/* <Text>Open up App.js to start working on your app!</Text> */}

        <AppNavigation />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',

    ...Platform.select({
      ios: {
        height: Dimensions.get("screen").height - 80,
        //marginTop: 70,
      },
      android: {
        height: Dimensions.get("window").height,
        //marginTop: 30
      },
      default: {
        paddingTop: "12%"
      }
    }),
  },
});
