import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { Button, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import welcome from '../Data/persona1/welcome';
import startconversation from '../Data/persona1/start-conversation';
import endconversation from '../Data/persona1/end-conversation';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Ionicons } from '@expo/vector-icons';

import { Images } from '../Themes';

export default function ChatScreen({ navigation }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages(welcome.reverse()
      // [
      //   {
      //     _id: 1,
      //     text: 'Hello developer',
      //     createdAt: new Date(),
      //     user: {
      //       _id: 2,
      //       name: 'React Native',
      //       avatar: 'https://placeimg.com/140/140/any',
      //     },
      //   },
      // ]
    )
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])


  function fetchFile(index) {
    console.log(index[0].value)
    if (index[0].value == "start-conversation.js") {
      setMessages(startconversation.reverse());
    }
    if (index[0].value == "end-conversation.js") {
      setMessages(endconversation.reverse())
    }
    
  }

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
        <GiftedChat
          messages={messages}
          onSend={messages => onSend(messages)}
          onQuickReply={(message) => fetchFile(message)}
          user={{
            _id: 1,
          }}
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#6CEDFF',
    height: '88%',
    width: '100%'
  }
});