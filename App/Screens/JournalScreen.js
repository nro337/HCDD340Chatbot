import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import { human } from 'react-native-typography'
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Linking from 'expo-linking';
import firestore from '../Config/FirebaseConfig';
import firebase from 'firebase';

import NewMessageModal from '../Components/NewMessageModal'
import { Ionicons } from '@expo/vector-icons';

export default function JournalScreen({ navigation }) {
    const [bottomSheetOpen, setBottomSheetOpen] = useState(0);
    const [messages, setMessages] = useState([]);

    const [bottomSheetState, setBottomSheetState] = useState(bottomSheetState);

    useEffect(() => {
        readSheetOpenState();
    })


    const reloadJournalEntries = () => {
        getMessages.child('users').child(firebase.auth().currentUser.uid.toString()).child('journal').once('value', (snapshot) => {

            setMessages(snapshot.val())
        })
    }


    useEffect(() => {
        setBottomSheetOpen(false)
        // if (bottomSheetOpen) {

        // }
        setMessages('')
        getMessages.child('users').child(firebase.auth().currentUser.uid.toString()).child('journal').once('value', (snapshot) => {

            setMessages(snapshot.val())
        })

        

        
    },[])

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
        <View style={styles.item}>
            <Text style={styles.itemDate}>{new Date(item["date"]).toLocaleString()}</Text>
            <Text>{item["message"]}</Text>
        </View>
    )


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.toggleDrawer()} title="DrawerStack" style={styles.menuButton} >
                    <Ionicons name={"menu"} size={32} color={"black"} style={{ marginLeft: 10 }} />
                </TouchableOpacity>
                <Text style={styles.pageTitle}>JournalScreen</Text>
                <TouchableOpacity onPress={addSheetState}>
                    <Ionicons name={"add-sharp"} size={32} color={'black'} style={{marginRight: 10}} />
                </TouchableOpacity>
                {/* <Button title="abc" onPress={() => navigation.toggleDrawer()}></Button> */}
            </View>
            <FlatList 
                data={Object.values(messages)}
                renderItem={renderItem}
                keyExtractor={item => item.date.toString()}
                style={styles.flatlist}
            />
            <NewMessageModal height={bottomSheetState} reloadJournalEntries={reloadJournalEntries} bottomSheetParentState={addSheetState} />
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