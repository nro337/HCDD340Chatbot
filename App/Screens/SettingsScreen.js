import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SettingsScreen() {

    return (
        <View style={styles.container}>
          <Text>Settings</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
      //flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      //alignItems: 'center'
    },
  });