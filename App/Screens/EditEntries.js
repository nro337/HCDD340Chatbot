import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Dimensions, FlatList, ActivityIndicator, TextInput, Keyboard } from 'react-native';
import { human } from 'react-native-typography'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import firestore from '../Config/FirebaseConfig';
import firebase from 'firebase';

import NewMessageModal from '../Components/NewMessageModal'
import { Ionicons } from '@expo/vector-icons';

export default function EditEntries({ navigation, route }) {
    const [loading, setLoading] = useState(false);
    const [bottomSheetOpen, setBottomSheetOpen] = useState(0);
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState("")

    const [bottomSheetState, setBottomSheetState] = useState(bottomSheetState);

    const { colors } = useTheme()
    const { myParam } = route.params;



    function updateJournalEntry(userId, date, message) {

        var postData = {
            date: date,
            message: message
        }

        //Get a key for updated entry
        var newKey = firebase.database().ref('users/' + userId + '/journal/' + date).push().key;

        var updates = {}
        updates['users/' + userId + '/journal/' + date] = postData;
        //navigation.goBack();

        

        return firebase.database().ref().update(updates);





        // firebase.database().ref('users/' + userId + '/journal/' + date).set({
        //     date: date,
        //     message: message
        // }, (error) => {
        //     if (error) {
        //         console.error(error);
        //     } else {
        //         //Data Updated Successfully
        //         reloadJournalEntries()
        //         //navigation.goBack();
        //         //navigation.navigate({name: 'JournalScreen', params: { message: message}, merge: true})
        //     }
        // })

        
    }

    function deleteJournalEntry(userId, date, message) {
        //firebase.database().ref('users/' + userId + '/journal/' + date).remove()
        //return firebase.database().ref('users/' + userId + '/journal/' + date).update({}, null);

        var postData = {
            date: date,
            message: message
        }

        //Get a key for updated entry
        var newKey = firebase.database().ref('users/' + userId + '/journal/' + date).push().key;

        var updates = {}
        updates['users/' + userId + '/journal/' + date] = postData;
        //navigation.goBack();

        

        firebase.database().ref('users/' + userId + '/journal/' + date).remove()
        .then(function() {
            console.log("Remove succeeded.")
          })
          .catch(function(error) {
            console.log("Remove failed: " + error.message)
          });;
    }
















    useEffect(() => {
        readSheetOpenState();
    })


    const reloadJournalEntries = () => {
        getMessages.child('users').child(firebase.auth().currentUser.uid.toString()).child('journal').once('value', (snapshot) => {
            setLoading(true);
            setMessages(snapshot.val())
            setLoading(false)
        })
    }


    useEffect(() => {
        setBottomSheetOpen(false)
        // if (bottomSheetOpen) {

        // }
        setMessages('')
        getMessages.child('users').child(firebase.auth().currentUser.uid.toString()).child('journal').once('value', (snapshot) => {
            setLoading(true)
            setMessages(snapshot.val())
            setLoading(false)
        })




    }, [])

    const setSheetStateFromStorage = (boolean) => {
        setBottomSheetState(JSON.parse(boolean));
    }

    const storeSheetOpenState = async (newBool) => {
        try {
            await AsyncStorage.setItem('bottomSheetState', JSON.stringify(newBool))
        } catch (e) {
            console.error(e)
        }
    }

    const readSheetOpenState = async () => {
        try {
            const storage_state = await AsyncStorage.getItem('bottomSheetState');
            if (storage_state !== null) {
                setSheetStateFromStorage(storage_state);
            }
        } catch (e) {
            console.error(e);
        }
    }

    const addSheetState = () => {
        const e = bottomSheetState;

        if (e === undefined) {
            setBottomSheetState(true)
            storeSheetOpenState(true)
        }
        if (e === false) {
            setBottomSheetState(true)
            storeSheetOpenState(true)
        }
        if (e === true) {
            setBottomSheetState(false)
            storeSheetOpenState(false)
        }
        console.log("Sheet:" + bottomSheetState)
    }


    const getMessages = firebase.database().ref();
    //console.log(getMessages.child('users').child(firebase.auth().currentUser.uid.toString()).child('journal').get())
    //console.log(Object.values(messages))


    // Object.values(messages).forEach(element => {
    //     console.log(element)
    // })


    const renderItem = ({ item }) => (
        //<JournalEntry title={item['message']} />
        //Resource used for converting Date in ms to Date Object: https://www.geeksforgeeks.org/how-to-convert-milliseconds-to-date-in-javascript/ 
        <TouchableOpacity style={{
            borderColor: 'black',
            borderWidth: 1,
            padding: 5,
            backgroundColor: colors.text,
        }}
            onPress={() => navigation.navigate()}

        >
            <Text style={styles.itemDate}>{new Date(item["date"]).toLocaleString()}</Text>
            <Text>{item["message"]}</Text>
        </TouchableOpacity>
    )


    return (
        <View style={styles.container}>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: Dimensions.get("screen").height * 0.1,
                width: Dimensions.get("window").width,
                backgroundColor: colors.background
            }}>
                <TouchableOpacity onPress={() => navigation.toggleDrawer()} title="DrawerStack" style={styles.menuButton} >
                    <Ionicons name={"menu"} size={32} color={colors.text} style={{ marginLeft: 10 }} />
                </TouchableOpacity>
                <Text style={{
                    ...human.title3,
                    ...Platform.select({
                        ios: {
                            marginLeft: 0,
                        },
                        android: {
                            marginLeft: 0,
                        },
                        default: {
                            marginLeft: 0,
                        }
                    }),
                    color: colors.text
                }}>Edit Entries</Text>
                <TouchableOpacity onPress={() => deleteJournalEntry(firebase.auth().currentUser.uid, myParam.date, myParam.message)}>
                    <Ionicons name={"trash-outline"} size={32} color={colors.text} style={{ marginRight: 10 }} />
                </TouchableOpacity>
                {/* <Button title="abc" onPress={() => navigation.toggleDrawer()}></Button> */}
            </View>
            <Text style={{ color: colors.text }}>{new Date(myParam.date).toLocaleString()}</Text>
            <TextInput
                placeholder="Enter journal entry here..."
                editable={true}
                defaultValue={myParam.message}
                multiline={true}
                style={{
                    height: Dimensions.get('screen').height * 0.3,
                    width: Dimensions.get('screen').width * 0.8,
                    backgroundColor: "white",
                    borderColor: 'black',
                    borderWidth: 2,
                    borderRadius: 8,
                    backgroundColor: colors.background,
                    color: colors.text,
                    borderTopColor: colors.text,
                    borderLeftColor: colors.text,
                    borderRightColor: colors.text,
                    borderBottomColor: colors.text,
                    marginTop: 10
                }}
                onChangeText={setInputText}
                // onFocus={() => setTextFocus(true)}
                //ref={textInput}
                onSubmitEditing={Keyboard.dismiss}

            />
            <Button title="Update" onPress={() => updateJournalEntry(firebase.auth().currentUser.uid, myParam.date, inputText.trim()) }></Button>
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
        justifyContent: 'space-between',
        alignItems: 'center',
        height: Dimensions.get("screen").height * 0.1,
        width: Dimensions.get("window").width,
        backgroundColor: "white"
    },
    pageTitle: {
        ...human.title3,
        ...Platform.select({
            ios: {
                marginLeft: 0,
            },
            android: {
                marginLeft: 0,
            },
            default: {
                marginLeft: 0,
            }
        })

    },
    linkContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 40
    },
    linkRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    linkRowLabel: {
        ...human.title3
    },
    medicalDisclosureContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    medicalDisclosureText: {
        textAlign: 'center',
        ...human.body,
        paddingTop: 10
    },
    signOut: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        // paddingLeft: '15%'
    },
    flatlist: {
        //height: Dimensions.get('screen').height * 0.7,
        height: '100%',
        width: '100%',
    },
    item: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 5
    },
    itemDate: {
        fontWeight: 'bold'
    }
});