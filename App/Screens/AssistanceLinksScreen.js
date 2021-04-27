import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Dimensions, Platform } from 'react-native';
import { human } from 'react-native-typography'
import * as Linking from 'expo-linking';

import { Ionicons } from '@expo/vector-icons';

export default function AssistanceLinksScreen({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.toggleDrawer()} title="DrawerStack" style={styles.menuButton} >
                    <Ionicons name={"menu"} size={32} color={"black"} style={{ marginLeft: 10 }} />
                </TouchableOpacity>
                <Text style={styles.pageTitle}>Additional Resources</Text>
                <View style={styles.signOut}>
                    <Button title='Sign Out' onPress={() => signout()} ></Button>
                </View>
                {/* <Button title="abc" onPress={() => navigation.toggleDrawer()}></Button> */}
            </View>
            <View style={styles.linkContainer}>
                <View style={styles.linkRow}>
                    <Text style={styles.linkRowLabel}>National Suicide Prevention Hotline</Text>
                    <Button title="Call" onPress={() => Linking.openURL('tel: +18002738255')} ></Button>
                </View>
            </View>
            <View style={styles.linkContainer}>
                <View style={styles.linkRow}>
                    <Text style={styles.linkRowLabel}>National Domestic Violence Hotline</Text>
                    <Button title="Call" onPress={() => Linking.openURL('tel: +18007997233')} ></Button>
                </View>
            </View>
            <View style={styles.linkContainer}>
                <View style={styles.linkRow}>
                    <Text style={styles.linkRowLabel}>National Sexual Assault Hotline</Text>
                    <Button title="Call" onPress={() => Linking.openURL('tel: +18006564673')} ></Button>
                </View>
            </View>
            <View style={styles.linkContainer}>
                <View style={styles.linkRow}>
                    <Text style={styles.linkRowLabel}>SAMHSA Hotline</Text>
                    <Button title="Call" onPress={() => Linking.openURL('tel: +18006624357')} ></Button>
                </View>
            </View>
            <View style={styles.linkContainer}>
                <View style={styles.linkRow}>
                    <Text style={styles.linkRowLabel}>Free Guided Meditations</Text>
                    <Button title="Visit" onPress={() => Linking.openURL('https://www.uclahealth.org/marc/mindful-meditations')} ></Button>
                </View>
            </View>
            <View style={styles.linkContainer}>
                <View style={styles.linkRow}>
                    <Text style={styles.linkRowLabel}>Headspace Meditations</Text>
                    <Button title="Visit" onPress={() => Linking.openURL('https://www.headspace.com/covid-19')} ></Button>
                </View>
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
    signOut: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        // paddingLeft: '15%'
    },
});