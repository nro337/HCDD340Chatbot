import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { human } from 'react-native-typography'
import * as Linking from 'expo-linking';

import { Ionicons } from '@expo/vector-icons';

export default function LegalDisclosureScreen({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.toggleDrawer()} title="DrawerStack" style={styles.menuButton} >
                    <Ionicons name={"menu"} size={32} color={"black"} style={{ marginLeft: 10 }} />
                </TouchableOpacity>
                <Text style={styles.pageTitle}>Legal Disclosures</Text>
                <View style={styles.signOut}>
                    <Button title='Sign Out' onPress={() => signout()} ></Button>
                </View>
                {/* <Button title="abc" onPress={() => navigation.toggleDrawer()}></Button> */}
            </View>
            <View style={styles.linkContainer}>
                <View style={styles.linkRow}>
                    <Text style={styles.linkRowLabel}>Privacy Policy</Text>
                    <Button title="Visit" onPress={() => Linking.openURL('https://www.freeprivacypolicy.com/live/01b105aa-0981-4e7c-8c9d-046260f1106c')} ></Button>
                </View>
            </View>
            <View style={styles.linkContainer}>
                <Text style={styles.linkRowLabel}>Medical Disclosure</Text>
                <Text style={styles.medicalDisclosureText}>Sanctry stands as a voluntary, self-help PTSD chat application. It is not intended nor should ever replace the guidance of a professional therepist, doctor or specialist. Please consult a doctor or therepist immediately if your condition becomes too challenging to maintain yourself.</Text>
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
        alignItems: 'center'
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
                marginLeft: 40,
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
});