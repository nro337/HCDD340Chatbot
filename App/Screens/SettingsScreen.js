import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { human } from 'react-native-typography'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Picker} from '@react-native-picker/picker';
import { DarkTheme } from '@react-navigation/native';

export default function SettingsScreen() {

    return (
        <View style={styles.container}>
          <Text style={styles.headerText}>Theme</Text>
          <Picker
          // style={{}}
          // selectedValue={}
          // itemStyle={{}}
          // onValueChange={}
          >
            <Picker.Item label="Light" value="light"/>
            <Picker.Item label="Dark" value="dark"/>

          </Picker>
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
    headerText: {
      ...human.largeTitle,
      textAlign: 'center',
      paddingTop: 30
    }
  });