import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { Ionicons } from '@expo/vector-icons';

import ChatScreen from '../Screens/ChatScreen'
import SettingsScreen from '../Screens/SettingsScreen'
import AssistanceLinksScreen from '../Screens/AssistanceLinksScreen'
import LegalDisclosureScreen from '../Screens/LegalDisclosureScreen'
import { Button, TouchableOpacity, View, Text } from 'react-native';

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

const Drawer = createDrawerNavigator();
function DrawerStack() {
    return (
        <Drawer.Navigator initialRouteName="Chat">
            <Drawer.Screen name="Chat" component={ChatScreen} />
            {/* <Drawer.Screen name="MoodHistory" component={} />
             */}
            <Drawer.Screen name="Additional Resources" component={AssistanceLinksScreen} />
            <Drawer.Screen name="Legal Disclosure" component={LegalDisclosureScreen} />
        </Drawer.Navigator>
    );
}

export default function AppNavigation() {
    return (
        <NavigationContainer >
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
                    activeTintColor: "black",
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
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}