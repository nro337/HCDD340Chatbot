import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions } from 'react-native';
import firebase from 'firebase';
import "firebase/auth"

import AppNavigation from './App/Navigation/AppNavigation'
import LoginScreen from './App/Screens/LoginScreen';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  if (loggedIn) {
    return (
      <SafeAreaView>
        <StatusBar style="auto" />
        <View style={styles.container}>

          <AppNavigation updateStatus={(val) => setLoggedIn(val)} />
        </View>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView>
        <StatusBar style="auto" />
        <View style={styles.container}>

          <LoginScreen updateStatus={(val) => setLoggedIn(val)} />
        </View>
      </SafeAreaView>
    );
  }


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
