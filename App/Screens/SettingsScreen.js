import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { human } from 'react-native-typography'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Picker} from '@react-native-picker/picker';
import { DarkTheme, useTheme } from '@react-navigation/native';

export default function SettingsScreen(props) {
  const [selectedThemeColor, setSelectedThemeColor] = useState(selectedThemeColor);

  const { colors } = useTheme();


    // Flower Color Picker Storage
    useEffect(() => {
      readSelectedThemeColorState();
      // console.log(state);
    }, [])
  
    const setSelectedThemeColorStateFromStorage = (boolean) => {
      setSelectedThemeColor(JSON.parse(boolean));
    }
  
    const storeSelectedThemeColorState = async (newBool) => {
      try {
        await AsyncStorage.setItem('selectedThemeColor', JSON.stringify(newBool))
      } catch (e) {
        console.error(e);
      }
    }
  
    const readSelectedThemeColorState = async () => {
      try {
        const storage_state = await AsyncStorage.getItem('selectedThemeColor');
        if (storage_state !== null) {
          setSelectedThemeColorStateFromStorage(storage_state);
        }
      } catch (e) {
        console.error(e);
      }
    }
  
    const addSelectedThemeColorState = (itemValue, itemIndex) => {
  
      setSelectedThemeColor(itemValue)
      storeSelectedThemeColorState(itemValue)
      //props.readThemeState()
    }



    return (
        <View style={styles.container}>
          <Text style={{
                  ...human.largeTitle,
                  textAlign: 'center',
                  paddingTop: 30,
                  color: colors.text
          }}>Theme</Text>
          <Picker
          // style={{}}
          selectedValue={selectedThemeColor}
          itemStyle={{backgroundColor: colors.primary}}
          onValueChange={(itemValue, itemIndex) => { addSelectedThemeColorState(itemValue, itemIndex) }}
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