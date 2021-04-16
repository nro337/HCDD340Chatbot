import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Ionicons } from '@expo/vector-icons';

import { Images } from '../Themes';

export default function ChatScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()} title="DrawerStack" style={styles.menuButton} >
          <Ionicons name={"menu"} size={32} color={"black"} style={{ marginLeft: 10 }} />
        </TouchableOpacity>
        <Image source={Images.robot} style={styles.logo} />
        {/* <Button title="abc" onPress={() => navigation.toggleDrawer()}></Button> */}
      </View>
      <View style={styles.messageContainer}>
        <Text>Messages here!</Text>
      </View>

    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: Dimensions.get("screen").height * 0.1,
    width: Dimensions.get("window").width,
    backgroundColor: "white"
  },
  menuButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingRight: '30%'
  },
  logo: {
    width: "20%",
    height: "70%",
  },
  messageContainer: {
    backgroundColor: '#6CEDFF',
  }
});