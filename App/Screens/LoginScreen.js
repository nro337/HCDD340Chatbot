import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View, TextInput, Button, Dimensions, Alert, Platform } from 'react-native';
import { useAccessibilityInfo } from '@react-native-community/hooks'
import { human, material } from 'react-native-typography';
import firestore from '../Config/FirebaseConfig';
import firebase from 'firebase';

export default function LoginScreen(props) {
    const [signUpName, setSignUpName] = useState('');
    const [signUpEmail, setSignUpEmail] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [errorMessageLogin, setErrorMessageLogin] = useState('');
    const [loginPage, setLoginPage] = useState(true);

    //Login Implementation pulled from in-class example and modified to meet our needs: https://snack.expo.io/@git/github.com/hcdd-340-spring-2021/firebase-authentication@work-files 

    // Check out this link to learn more about firebase.auth()
    // https://firebase.google.com/docs/reference/node/firebase.auth.Auth
    let signUp = async () => {
        try {
            const response = await firebase.auth().createUserWithEmailAndPassword(signUpEmail, signUpPassword);
            if (response.user) {
                const user = firebase.auth().currentUser;
                var userDocRef = firestore.doc('users/' + user.uid);

                // Since my document doesn't exist, userDocRef.set will
                // create the document for me
                userDocRef.set({
                    name: signUpName
                });
                props.updateStatus(true);
            }
        } catch (err) {
            console.log(err);
        }
    }

    // Check out this link to learn more about firebase.auth()
    // https://firebase.google.com/docs/reference/node/firebase.auth.Auth
    let login = async () => {
        try {
            // Note that we don't have to tell the app that the user has logged in.
            // firebase.auth().onAuthStateChanged() in App.js communicates this for us!
            await firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword)
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    props.updateStatus(true)
                }
                if (!user) {
                    props.updateStatus(false)
                }
            })
            console.log("Login pressed")
        } catch (err) {
            //Alert.alert('Error', err, [{text: 'OK', style: 'cancel', onPress: () => console.log('')}]);
            console.log(err);
        }
    }

    if (loginPage) {
        return (
            <SafeAreaView style={styles.container}>

                <Text style={styles.titleText}>SANCTRY</Text>

                <Text style={styles.subtitleText}>Login</Text>

                <View>
                    <TextInput
                        style={[styles.input, { marginTop: 50 }]}
                        value={loginEmail}
                        onChangeText={(loginEmail) => setLoginEmail(loginEmail)}
                        placeholder="Email"
                        accessible={true}
                        accessibilityLabel="Login"
                    />
                    <TextInput
                        style={styles.input}
                        value={loginPassword}
                        secureTextEntry={true}
                        onChangeText={(loginPassword) => setLoginPassword(loginPassword)}
                        placeholder="Password"
                        accessible={true}
                        accessibilityLabel="Password"
                    />
                </View>

                <View style={styles.loginButton}>
                    <Button
                        title='Login'
                        onPress={() => login()}
                        color={Platform.OS === 'ios' ? 'black' : '#6CEDFF'}
                        accessible={true}
                        accessibilityLabel="Login Button"
                        accessibilityHint="Click to login"
                    />
                </View>

                <View style={styles.toggleLoginContainer}>
                    <Text style={styles.loginLineStyle}>Don't have an account?</Text>
                    <Button 
                        title="Sign Up" 
                        onPress={() => setLoginPage(false)} 
                        accessible={true}
                        accessibilityLabel="Go to Sign Up Page"
                        accessibilityHint="Click to go to sign up page"></Button>
                </View>


            </SafeAreaView>
        );
    } else {
        return (
            <SafeAreaView style={styles.container}>

                <Text style={styles.titleText}>SANCTRY</Text>

                <Text style={styles.subtitleText}>Sign Up</Text>

                <View>
                    <TextInput
                        style={styles.input}
                        value={signUpName}
                        onChangeText={(signUpName) => setSignUpName(signUpName)}
                        placeholder="Name"
                    />
                    <TextInput
                        style={styles.input}
                        value={signUpEmail}
                        onChangeText={(signUpEmail) => setSignUpEmail(signUpEmail)}
                        placeholder="Email"
                    />
                    <TextInput
                        style={styles.input}
                        value={signUpPassword}
                        secureTextEntry={true}
                        onChangeText={(signUpPassword) => setSignUpPassword(signUpPassword)}
                        placeholder="Password"
                    />
                </View>
                <View style={styles.loginButton}>
                    <Button
                        title="Sign Up"
                        onPress={() => signUp()}
                        color={Platform.OS === 'ios' ? 'black' : '#6CEDFF'}
                    />
                </View>
                <View style={styles.toggleLoginContainer}>
                    <Text style={styles.loginLineStyle}>Already have an account?</Text>
                    <Button title="Go to Login" onPress={() => setLoginPage(true)} ></Button>
                </View>

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    input: {
        width: Dimensions.get('screen').width * 0.9,
        fontSize: 20,
        marginBottom: 10,
        backgroundColor: 'whitesmoke',
        padding: 5,
        borderRadius: 5,
    },
    button: {
        marginBottom: 50
    },
    titleText: {
        fontSize: 86,
        marginVertical: 10
    },
    subtitleText: {
        ...human.largeTitle,
        marginVertical: 10
    },
    toggleLoginContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginLineStyle: {
        textAlign: 'center',
        ...human.body,
    },
    loginButton: {
        borderRadius: 10,
        backgroundColor: '#6CEDFF',
        paddingVertical: 5,
        paddingHorizontal: 20
    }
});