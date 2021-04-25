import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { ActivityIndicator, Button, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import welcome from '../Data/persona1/welcome';
import startconversation from '../Data/persona1/start-conversation';
import endconversation from '../Data/persona1/end-conversation';
import menu from '../Data/persona1/menu'
import daily_check_init from '../Data/persona1/daily-check/init'
import activities from '../Data/persona1/activities'
import manage_symptoms_init from '../Data/persona1/manage-symptoms/init'
import manage_symptoms_perspective_change_init from '../Data/persona1/manage-symptoms/perspective-change/init'
import manage_symptoms_perspective_change_1 from '../Data/persona1/manage-symptoms/perspective-change/1'
import manage_symptoms_perspective_change_2 from '../Data/persona1/manage-symptoms/perspective-change/2'
import manage_symptoms_perspective_change_3 from '../Data/persona1/manage-symptoms/perspective-change/3'
import manage_symptoms_perspective_change_4 from '../Data/persona1/manage-symptoms/perspective-change/4'
import manage_symptoms_perspective_change_5 from '../Data/persona1/manage-symptoms/perspective-change/5'
import manage_symptoms_feel_good from '../Data/persona1/manage-symptoms/feel-good'
import get_support_tool_list from '../Data/persona1/get-support/tool-list'
import take_assessment_start from '../Data/persona1/take-assessment/start'
import take_assessment_survey from '../Data/persona1/take-assessment/survey'
import take_assessment_score from '../Data/persona1/take-assessment/score'
import take_assessment_result from '../Data/persona1/take-assessment/result'
import get_support_immediate from '../Data/persona1/get-support/immediate'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Ionicons } from '@expo/vector-icons';

import { Images } from '../Themes';
import take_assessment_high from '../Data/persona1/take-assessment/high';

export default function ChatScreen({ navigation }) {
  var assessmentReplies = []
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
      //       avatar: Images.robot,
      //     },
      //   },
      // ]
    );
    assessmentReplies = []
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])


  function fetchFile(index) {
    console.log(index[0].value)
    console.log(index)
    if (index[0].value === "not_at_all" || index[0].value === "a_little_bit" || index[0].value === "moderately" || index[0].value === "quite_a_bit" || index[0].value === "extremely") {
      assessmentReplies.push(index[0].value)
      console.log(assessmentReplies)
    }

    if (index[0].value == "welcome.js") {
      (welcome[0].text === 'CLEAR') ? setMessages(welcome.reverse()) : setMessages(welcome)
    }
    if (index[0].value == "start-conversation.js") {
      (startconversation[0].text === 'CLEAR') ? setMessages(startconversation.reverse()) : setMessages(startconversation)
    }
    if (index[0].value == "end-conversation.js") {
      (endconversation[0].text === 'It was nice meeting you!') ? setMessages(endconversation.reverse()) : setMessages(endconversation)
    }
    if (index[0].value == "menu.js") {
      (menu[0].text === 'CLEAR') ? setMessages(menu.reverse()) : setMessages(menu)
    }
    if (index[0].value == "daily-check/init.js") {
      (daily_check_init[0].text === 'CLEAR') ? setMessages(daily_check_init.reverse()) : setMessages(daily_check_init)
    }
    if (index[0].value == "activities.js") {
      (activities[0].text === 'CLEAR') ? setMessages(activities.reverse()) : setMessages(activities)
    }
    if (index[0].value == "manage-symptoms/init.js") {
      (manage_symptoms_init[0].text === 'CLEAR') ? setMessages(manage_symptoms_init.reverse()) : setMessages(manage_symptoms_init)
    }
    if (index[0].value == "manage-symptoms/perspective-change/init.js") {
      (manage_symptoms_perspective_change_init[0].text === 'Changing the way you think can change the way you feel') ? setMessages(manage_symptoms_perspective_change_init.reverse()) : setMessages(manage_symptoms_perspective_change_init)
    }
    if (index[0].value == "manage-symptoms/perspective-change/1.js") {
      (manage_symptoms_perspective_change_1[0].text === 'CLEAR') ? setMessages(manage_symptoms_perspective_change_1.reverse()) : setMessages(manage_symptoms_perspective_change_1)
    }
    if (index[0].value == "manage-symptoms/perspective-change/2.js") {
      (manage_symptoms_perspective_change_2[0].text === 'CLEAR') ? setMessages(manage_symptoms_perspective_change_2.reverse()) : setMessages(manage_symptoms_perspective_change_2)
    }
    if (index[0].value == "manage-symptoms/perspective-change/3.js") {
      (manage_symptoms_perspective_change_3[0].text === 'CLEAR') ? setMessages(manage_symptoms_perspective_change_3.reverse()) : setMessages(manage_symptoms_perspective_change_3)
    }
    if (index[0].value == "manage-symptoms/perspective-change/4.js") {
      (manage_symptoms_perspective_change_4[0].text === 'CLEAR') ? setMessages(manage_symptoms_perspective_change_4.reverse()) : setMessages(manage_symptoms_perspective_change_4)
    }
    if (index[0].value == "manage-symptoms/perspective-change/5.js") {
      (manage_symptoms_perspective_change_5[0].text === 'CLEAR') ? setMessages(manage_symptoms_perspective_change_5.reverse()) : setMessages(manage_symptoms_perspective_change_5)
    }
    if (index[0].value == "manage-symptoms/feel-good.js") {
      (manage_symptoms_feel_good[0].text === 'Great!') ? setMessages(manage_symptoms_feel_good.reverse()) : setMessages(manage_symptoms_feel_good)
    }
    if (index[0].value == "get-support/tool-list.js") {
      (get_support_tool_list[0].text === 'CLEAR') ? setMessages(get_support_tool_list.reverse()) : setMessages(get_support_tool_list)
    }
    if (index[0].value == "take-assessment/start.js") {
      (take_assessment_start[0].text === "Great! Let's get started.") ? setMessages(take_assessment_start.reverse()) : setMessages(take_assessment_start)
    }
    if (index[0].value == "take-assessment/survey.js") {
      (take_assessment_survey[0].text === 'CLEAR') ? setMessages(take_assessment_survey.reverse()) : setMessages(take_assessment_survey)
    }
    if (index[0].value == "take-assessment/score.js") {
      (take_assessment_score[0].text === 'Thank you for answering the questions!') ? setMessages(take_assessment_score.reverse()) : setMessages(take_assessment_score)
    }
    if (index[0].value == "take-assessment/result.js") {
      (take_assessment_result[0].text === 'CLEAR') ? setMessages(take_assessment_result.reverse()) : setMessages(take_assessment_result)
    }
    if (index[0].value == "take-assessment/high.js") {
      (take_assessment_high[0].text === 'CLEAR') ? setMessages(take_assessment_high.reverse()) : setMessages(take_assessment_high)
    }
    if (index[0].value == "get-support/immediate.js") {
      (get_support_immediate[0].text === 'I would like to provide contacts that you could get some immediate support.') ? setMessages(get_support_immediate.reverse()) : setMessages(get_support_immediate)
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