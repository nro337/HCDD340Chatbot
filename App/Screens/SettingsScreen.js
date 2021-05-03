import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, Dimensions, TextInput } from 'react-native';
import { human } from 'react-native-typography'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';
import { DarkTheme, useTheme } from '@react-navigation/native';
import firebase from 'firebase';

export default function SettingsScreen(props) {
  const [selectedThemeColor, setSelectedThemeColor] = useState(selectedThemeColor);
  const [email, setEmail] = useState(firebase.auth().currentUser.email);
  const [password, setPassword] = useState('');

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

  const updateUserPassword = (password) => {
    var user = firebase.auth().currentUser;
    var newPassword = password;

    user.updatePassword(newPassword).then(function() {
      //Update Successful
      firebase.auth().signOut();
    }).catch(function(error) {
      console.error(error);
    })
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
        itemStyle={{ backgroundColor: colors.primary }}
        onValueChange={(itemValue, itemIndex) => { addSelectedThemeColorState(itemValue, itemIndex) }}
      >
        <Picker.Item label="Light" value="light" />
        <Picker.Item label="Dark" value="dark" />

      </Picker>
      <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <Text style={{color: colors.text, ...human.title1, textAlign: 'center', paddingTop: 20}}>Change Password</Text>
        <TextInput
          style={[styles.input, { marginTop: 50 }]}
          value={email}
          onChangeText={(email) => setEmail(email)}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          value={password}
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          placeholder="Password"
        />
      </View>

      <View style={styles.loginButton}>
        <Button
          title='Update Password'
          onPress={() => updateUserPassword(password)}
          color='black'
        />
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
    //alignItems: 'center'
  },
  headerText: {
    ...human.largeTitle,
    textAlign: 'center',
    paddingTop: 30
  },
  input: {
    width: Dimensions.get('screen').width * 0.9,
    fontSize: 20,
    marginBottom: 10,
    backgroundColor: 'whitesmoke',
    padding: 5,
    borderRadius: 5,
  },
  loginButton: {
    borderRadius: 10,
    backgroundColor: '#6CEDFF',
    paddingVertical: 5,
    paddingHorizontal: 20
  }
});