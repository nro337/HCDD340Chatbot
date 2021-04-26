import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { ActivityIndicator, Button, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import * as Linking from 'expo-linking';
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
import get_support_professional from '../Data/persona1/get-support/professional'
import get_support_other_tools from '../Data/persona1/get-support/other-tools'
import take_assessment_low from '../Data/persona1/take-assessment/low'
import learn_more_init from '../Data/persona1/learn-more/init'
import learn_more_symptoms_init from '../Data/persona1/learn-more/symptoms/init'
import learn_more_symptoms_intro_first from '../Data/persona1/learn-more/symptoms/intro/first'
import learn_more_symptoms_examples_first from '../Data/persona1/learn-more/symptoms/examples/first'
import learn_more_symptoms_intro_second from '../Data/persona1/learn-more/symptoms/intro/second'
import learn_more_symptoms_examples_second from '../Data/persona1/learn-more/symptoms/examples/second'
import learn_more_symptoms_intro_third from '../Data/persona1/learn-more/symptoms/intro/third'
import learn_more_symptoms_examples_third from '../Data/persona1/learn-more/symptoms/examples/third'
import learn_more_symptoms_intro_fourth from '../Data/persona1/learn-more/symptoms/intro/fourth'
import learn_more_symptoms_examples_fourth from '../Data/persona1/learn-more/symptoms/examples/fourth'
import learn_more_symptoms_end from '../Data/persona1/learn-more/symptoms/end'
import learn_more_choice from '../Data/persona1/learn-more/choice'
import learn_more_repeat from '../Data/persona1/learn-more/repeat'
import learn_more_symptoms_review from '../Data/persona1/learn-more/symptoms/review'
import learn_more_facts_init from '../Data/persona1/learn-more/facts/init'
import learn_more_facts_next from '../Data/persona1/learn-more/facts/next'

import AsyncStorage from '@react-native-async-storage/async-storage';

import { Ionicons } from '@expo/vector-icons';

import { Images } from '../Themes';
import take_assessment_high from '../Data/persona1/take-assessment/high';

export default function ChatScreen({ navigation }) {
  var assessmentReplies = []
  const [link, setLink] = useState('')
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
  
  function handleUrlPress(url) {
    Linking.openURL(url);
  }


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
    if (index[0].value == "get-support/professional.js") {
      (get_support_professional[0].text === 'To learn more about treatment, visit the National Center for PTSD website.') ? setMessages(get_support_professional.reverse()) : setMessages(get_support_professional)
      setLink('https://www.ptsd.va.gov')
    }
    if (index[0].value == "get-support/other-tools.js") {
      (get_support_other_tools[0].text === 'I have some other tools that might help you.') ? setMessages(get_support_other_tools.reverse()) : setMessages(get_support_other_tools)
    }
    if (index[0].value == "take-assessment/low.js") {
      (take_assessment_low[0].text === 'CLEAR') ? setMessages(take_assessment_low.reverse()) : setMessages(take_assessment_low)
    }
    if (index[0].value == "learn-more/init.js") {
      (learn_more_init[0].text === 'CLEAR') ? setMessages(learn_more_init.reverse()) : setMessages(learn_more_init)
    }
    if (index[0].value == "learn-more/symptoms/init.js") {
      (learn_more_symptoms_init[0].text === 'CLEAR') ? setMessages(learn_more_symptoms_init.reverse()) : setMessages(learn_more_symptoms_init)
    }
    if (index[0].value == "learn-more/symptoms/intro/first.js") {
      (learn_more_symptoms_intro_first[0].text === 'CLEAR') ? setMessages(learn_more_symptoms_intro_first.reverse()) : setMessages(learn_more_symptoms_intro_first)
    }
    if (index[0].value == "learn-more/symptoms/examples/first.js") {
      (learn_more_symptoms_examples_first[0].text === 'If someone is under re-experiencing or reliving the trauma, he/she might experience: disturbing memories, nightmares, feeling or acting like the trauma is happening again, and/or becoming very upset when reminded of the trauma.') ? setMessages(learn_more_symptoms_examples_first.reverse()) : setMessages(learn_more_symptoms_examples_first)
    }
    if (index[0].value == "learn-more/symptoms/intro/second.js") {
      (learn_more_symptoms_intro_second[0].text === 'CLEAR') ? setMessages(learn_more_symptoms_intro_second.reverse()) : setMessages(learn_more_symptoms_intro_second)
    }
    if (index[0].value == "learn-more/symptoms/examples/second.js") {
      (learn_more_symptoms_examples_second[0].text === 'If someone shows persistent avoidance, he/she might experience: avoiding places, people or conversations that remind you of the trauma, and/or avoiding thoughts, feelings, or memories closely associated with traumatic events.') ? setMessages(learn_more_symptoms_examples_second.reverse()) : setMessages(learn_more_symptoms_examples_second)
    }
    if (index[0].value == "learn-more/symptoms/intro/third.js") {
      (learn_more_symptoms_intro_third[0].text === 'Third symptom is negative thoughts and moods') ? setMessages(learn_more_symptoms_intro_third.reverse()) : setMessages(learn_more_symptoms_intro_third)
    }
    if (index[0].value == "learn-more/symptoms/examples/third.js") {
      (learn_more_symptoms_examples_third[0].text === 'If someone feel negative thoughts and moods, he/she might have: feeling detached or isolating from others, negative beliefs, self-blame for the trauma, and/or trouble feeling positive emotions like happiness and love.') ? setMessages(learn_more_symptoms_examples_third.reverse()) : setMessages(learn_more_symptoms_examples_third)
    }
    if (index[0].value == "learn-more/symptoms/intro/fourth.js") {
      (learn_more_symptoms_intro_fourth[0].text === 'CLEAR') ? setMessages(learn_more_symptoms_intro_fourth.reverse()) : setMessages(learn_more_symptoms_intro_fourth)
    }
    if (index[0].value == "learn-more/symptoms/examples/fourth.js") {
      (learn_more_symptoms_examples_fourth[0].text === 'If someone feel more on-edge and reactive, he/she might experience: feeling on guard, being irritable or angry, trouble sleeping, and/or startling easily.') ? setMessages(learn_more_symptoms_examples_fourth.reverse()) : setMessages(learn_more_symptoms_examples_fourth)
    }
    if (index[0].value == "learn-more/symptoms/end.js") {
      (learn_more_symptoms_end[0].text === 'OK') ? setMessages(learn_more_symptoms_end.reverse()) : setMessages(learn_more_symptoms_end)
    }
    if (index[0].value == "learn-more/choice.js") {
      (learn_more_choice[0].text === 'Which of the following topics do you want to know more about?') ? setMessages(learn_more_choice.reverse()) : setMessages(learn_more_choice)
    }
    if (index[0].value == "learn-more/repeat.js") {
      (learn_more_repeat[0].text === 'Do you want to know about PTSD more?') ? setMessages(learn_more_repeat.reverse()) : setMessages(learn_more_repeat)
    }
    if (index[0].value == "learn-more/symptoms/review.js") {
      (learn_more_symptoms_review[0].text === 'Ok. Which symptom would you like to review?') ? setMessages(learn_more_symptoms_review.reverse()) : setMessages(learn_more_symptoms_review)
    }
    if (index[0].value == "learn-more/facts/init.js") {
      (learn_more_facts_init[0].text === 'CLEAR') ? setMessages(learn_more_facts_init.reverse()) : setMessages(learn_more_facts_init)
    }
    if (index[0].value == "learn-more/facts/next.js") {
      (learn_more_facts_next[0].text === 'Over 600,000 Veterans who used Veterans Affair services as recently as 2016 were diagnosed with PTSD') ? setMessages(learn_more_facts_next.reverse()) : setMessages(learn_more_facts_next)
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
          parsePatterns={(linkStyle) => [
            { type: 'url', style: styles.url, onPress: () => handleUrlPress(link) },
          ]}
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
  },
  url: {
    textDecorationLine: 'underline',
    color: 'blue'
  }
});