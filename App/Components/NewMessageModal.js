import React, { useState, useCallback, useMemo, useRef, useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Button, Dimensions, TextInput, Keyboard } from "react-native";
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { human } from "react-native-typography";
import { useTheme } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '../Config/FirebaseConfig';
import firebase from 'firebase';

const NewMessageModal = (props) => {
    const [bottomSheetState, setBottomSheetState] = useState(bottomSheetState);
    const [inputText, setInputText] = useState("")

    const { colors } = useTheme()

    useEffect(() => {
        //console.log("bottomSheetOpen: " + props.bottomSheetParentState())
        //readSheetOpenState();
    })

    useEffect(() => {
        if (props.height === false) {
            handleSnapPress(0)
        }

        if (props.height === true) {
            //StyleSheet.compose(styles.container, styles.container2)
            handleSnapPress(2)


        }
        console.log("Bottom sheet open: " + props.bottomSheetState)
    })

    const textInput = useRef(null)

    function postJournalEntry(userId, message) {
        firebase.database().ref('users/' + userId + '/journal/' + Date.now()).set({
            date: Date.now(),
            message: message
        })

        textInput.current.clear()
        props.reloadJournalEntries()
        props.bottomSheetParentState()
        //handleSnapPress(0)
    }
    // const [textFocus, setTextFocus] = useState(false)
    // const textInput = useRef(null);
    // const bottomSheet = useRef(this);

    // if(textFocus === true) {
    //     textInput.current.focus();
    // }

    // if(!textFocus) {
    //     Keyboard.dismiss();
    // }

    // const setSheetStateFromStorage = (boolean) => {
    //     setBottomSheetState(JSON.parse(boolean));
    // }

    // const storeSheetOpenState = async (newBool) => {
    //     try {
    //         await AsyncStorage.setItem('bottomSheetState', JSON.stringify(newBool))
    //     } catch (e) {
    //         console.error(e)
    //     }
    // }

    // const readSheetOpenState = async () => {
    //     try {
    //         const storage_state = await AsyncStorage.getItem('bottomSheetState');
    //         if (storage_state !== null) {
    //             setSheetStateFromStorage(storage_state);
    //         }
    //     } catch (e) {
    //         console.error(e);
    //     }
    // }

    // const addSheetState = () => {
    //     const e = bottomSheetState;

    //     if (e === undefined) {
    //         setBottomSheetState(true)
    //         storeSheetOpenState(true)
    //     }
    //     if (e === false) {
    //         setBottomSheetState(true)
    //         storeSheetOpenState(true)
    //     }
    //     if (e === true) {
    //         setBottomSheetState(false)
    //         storeSheetOpenState(false)
    //     }
    //     console.log("Sheet---" + bottomSheetState)
    // }




    //Example utilized directly with credit from https://gorhom.github.io/react-native-bottom-sheet/scrollables#bottomsheetview
    //console.log(props.height)
    // hooks
    const sheetRef = useRef(<BottomSheet />);

    // variables
    // const data = useMemo(
    //     () =>
    //         Array(50)
    //             .fill(0)
    //             .map((_, index) => `index-${index}`),
    //     []
    // );



    const snapPoints = useMemo(() => [0, '10%', '100%'], []);

    // callbacks
    const handleSheetChange = useCallback(index => {
        console.log('handleSheetChange', index);
    }, []);
    const handleSnapPress = useCallback(index => {
        sheetRef.current?.snapTo(index);
    }, []);
    const handleClosePress = useCallback(() => {
        sheetRef.current?.close();
    }, []);

    // if (bottomSheetState === true) {
    //     handleSnapPress(2)
    // }
    // if (bottomSheetState === false) {
    //     handleSnapPress(0)
    // }

    // if (props.height == 1) {
    //     handleSnapPress(2)

    // }
    // if (props.height == 0) {
    //     //handleSnapPress(0)
    // }

    // console.log(props.height + "1")
    // console.log(bottomSheetState + "2")
    // if(bottomSheetState === false) {
    //     props.height = false;
    // }

    // render
    const renderItem = useCallback(
        item => (
            <View style={styles.itemContainer}>
                <Text>{item}</Text>
            </View>
        ),
        []
    );
    return (
        <View style={styles.container}>
            {/* <Button title="Snap To 90%" onPress={() => handleSnapPress(2)} />
            <Button title="Snap To 50%" onPress={() => handleSnapPress(1)} />
            <Button title="Snap To 25%" onPress={() => handleSnapPress(0)} />
            <Button title="Close" onPress={() => handleClosePress()} /> */}

            <BottomSheet
                ref={sheetRef}
                index={0}
                snapPoints={snapPoints}
                onChange={handleSheetChange}
            >
                <BottomSheetView style={{
                    backgroundColor: colors.background,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <View style={{backgroundColor: colors.background}}>
                        <Text style={{
                            ...human.title1,
                            textAlign: 'center',
                            color: colors.text
                        }}>New Journal Entry</Text>
                        <Button title='Close' onPress={props.bottomSheetParentState}></Button>
                        <TextInput
                            placeholder="Enter journal entry here..."
                            editable={true}
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
                                borderBottomColor: colors.text
                            }}
                            onChangeText={setInputText}
                            // onFocus={() => setTextFocus(true)}
                            ref={textInput}
                            onSubmitEditing={Keyboard.dismiss}

                        />
                        <Button title="Post" onPress={() => postJournalEntry(firebase.auth().currentUser.uid, inputText.trim())}></Button>
                        {/* () => postJournalEntry(firebase.auth().currentUser.uid, 'Wow what a message__') */}
                    </View>

                    {/* {data.map(renderItem)} */}
                </BottomSheetView>
            </BottomSheet>
        </View>
    );






    // const [modalVisible, setModalVisible] = useState(false);

    // if (props.setModalVisible) {

    //     return (
    //         <View style={styles.centeredView}>
    //             <Modal
    //                 animationType="slide"
    //                 transparent={true}
    //                 visible={modalVisible}
    //                 onRequestClose={() => {
    //                     Alert.alert("Modal has been closed.");
    //                     setModalVisible(!modalVisible);
    //                 }}
    //             >
    //                 <View style={styles.centeredView}>
    //                     <View style={styles.modalView}>
    //                         <Text style={styles.modalText}>Hello World!</Text>
    //                         <Pressable
    //                             style={[styles.button, styles.buttonClose]}
    //                             onPress={() => setModalVisible(!modalVisible)}
    //                         >
    //                             <Text style={styles.textStyle}>Hide Modal</Text>
    //                         </Pressable>
    //                     </View>
    //                 </View>
    //             </Modal>
    //         </View>
    //     );
    // }

    // return (
    //     <View style={styles.centeredView}>
    //         <Modal
    //             animationType="slide"
    //             transparent={true}
    //             visible={modalVisible}
    //             onRequestClose={() => {
    //                 Alert.alert("Modal has been closed.");
    //                 setModalVisible(!modalVisible);
    //             }}
    //         >
    //             <View style={styles.centeredView}>
    //                 <View style={styles.modalView}>
    //                     <Text style={styles.modalText}>Hello World!</Text>
    //                     <Pressable
    //                         style={[styles.button, styles.buttonClose]}
    //                         onPress={() => setModalVisible(!modalVisible)}
    //                     >
    //                         <Text style={styles.textStyle}>Hide Modal</Text>
    //                     </Pressable>
    //                 </View>
    //             </View>
    //         </Modal>
    //     </View>
    // );
};

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        //display: "none",
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 1.2,
        paddingTop: 0,
        //paddingBottom: 50
    },
    container2: {
        ...StyleSheet.absoluteFill,
        top: 120,
        left: 50,
        width: 100,
        height: 100,
        backgroundColor: 'blue'

        // //flex: 1,
        // display: "flex",
        // width: Dimensions.get('screen').width,
        // height: Dimensions.get('screen').height * 1.2,
        // paddingTop: 0,
        // //paddingBottom: 50
    },
    contentContainer: {
        //position: "absolute",
        //zIndex: 5,
        backgroundColor: 'white',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    itemContainer: {
        padding: 6,
        margin: 6,
        backgroundColor: '#eee',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    bottomSheetHeader: {
        ...human.title1,
        textAlign: 'center',
    },
    messageText: {
        height: Dimensions.get('screen').height * 0.3,
        width: Dimensions.get('screen').width * 0.8,
        backgroundColor: "white",
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 8
    }
});

export default NewMessageModal;