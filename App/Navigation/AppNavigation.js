import React, { useEffect, useState } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer, DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Ionicons } from '@expo/vector-icons';

import ChatScreen from '../Screens/ChatScreen'
import SettingsScreen from '../Screens/SettingsScreen'
import AssistanceLinksScreen from '../Screens/AssistanceLinksScreen'
import LegalDisclosureScreen from '../Screens/LegalDisclosureScreen'
import JournalScreen from '../Screens/JournalScreen'
import { Button, TouchableOpacity, View, Text } from 'react-native';
import EditEntries from '../Screens/EditEntries';


const Tab = createBottomTabNavigator();

function HomeTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Chat" component={ChatScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
}

const Stack = createStackNavigator();
function HomeStack({ navigation }) {
    return (
        <Stack.Navigator
            screenOptions={{
                // headerStyle: {backgroundColor: "white"},
            }}
        >
            <Stack.Screen
                name="Chat"
                component={DrawerStack}
                options={{
                    headerShown: false,
                }}
            />
            {/* <Stack.Screen name="Details" component={DetailsScreen} />
            <Stack.Screen name="List" component={Plants} /> */}
            
        </Stack.Navigator>
    );
}

const Stack2 = createStackNavigator()
function JournalStack() {
    return (
        <Stack2.Navigator
          screenOptions={{
            // headerStyle: {backgroundColor: "white"},
          }}
        >
            <Stack2.Screen name="Journaling" component={JournalScreen} />
            <Stack2.Screen name="EditEntries" component={EditEntries} />
        </Stack2.Navigator>
      );
}

const Drawer = createDrawerNavigator();
function DrawerStack() {
    return (
        <Drawer.Navigator initialRouteName="Chat">
            <Drawer.Screen name="Chat" component={ChatScreen} />
            {/* <Drawer.Screen name="MoodHistory" component={} />
             */}
            <Drawer.Screen name="Additional Resources" component={AssistanceLinksScreen} />
            <Drawer.Screen name="Legal Disclosure" component={LegalDisclosureScreen} />
            {/* <Drawer.Screen name="Journaling" component={JournalScreen} /> */}
            <Drawer.Screen name="Journaling" component={JournalStack} />
        </Drawer.Navigator>
    );
}

export default function AppNavigation() {
    const [currentTheme, setCurrentTheme] = useState(DefaultTheme)
    var loadState = currentTheme;

    const readThemeState = async () => {
        try {
          const storage_state = await AsyncStorage.getItem('selectedThemeColor');
          //console.log(storage_state)
          if (storage_state === '"light"') {
              setCurrentTheme(DefaultTheme)
              console.log("---")
              console.log(storage_state)
              console.log(currentTheme)
            //setVegetableStateFromStorage(storage_state);
            //console.log(storage_state)
          } else if (storage_state == '"dark"') {
              setCurrentTheme(DarkTheme)
              console.log("nice")
          }
        } catch (e) {
          console.error(e);
        }
      }
    
    useEffect(() => {
        readThemeState()
    })
    useEffect(() => {
        console.log(loadState.colors.text + "qwerty")
        if (loadState.dark === true) {
            console.log("Update!")
        }
    })


    return (
        <NavigationContainer theme={currentTheme} >
            <Tab.Navigator
                initialRouteName='Chat'
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Chat') {
                            iconName = focused ? 'chatbox' : 'chatbox-outline';
                            //console.log("Plants")
                        } else if (route.name === 'Settings') {
                            iconName = focused ? 'settings' : 'settings-outline';
                            //console.log('Settings')
                        }

                        // You can return any component that you like here!
                        // return <Entypo name={iconName} size={Metrics.icons.medium} color={color} />;
                        return <Ionicons name={iconName} size={size} color={color} />
                    },
                })}
                // tabBar={PlantsScreen}
                tabBarOptions={{
                    activeTintColor: currentTheme.colors.text,
                    showLabel: true,
                    // ...Platform.select({
                    //   ios: {
                    //     safeAreaInsets: {
                    //       bottom: 50
                    //     }
                    //   },
                    //   android: {
                    //     safeAreaInsets: {
                    //       bottom: 10
                    //     }
                    //   },
                    //   default: {
                    //     safeAreaInsets: {
                    //       bottom: 15
                    //     }
                    //   }
                    // })


                    // safeAreaInsets: {
                    //   bottom: 10,
                    //   //top: 30
                    // },
                    //tabStyle: {marginBottom: 30}
                }}>
                <Tab.Screen name="Chat" component={HomeStack} />
                <Tab.Screen name="Settings" component={SettingsScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}