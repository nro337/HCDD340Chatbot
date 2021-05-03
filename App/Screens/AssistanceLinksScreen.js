import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Dimensions, Platform } from 'react-native';
import { human } from 'react-native-typography'
import { useTheme } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { Ionicons } from '@expo/vector-icons';

export default function AssistanceLinksScreen({ navigation }) {

    const { colors } = useTheme()

    return (
        <View style={styles.container}>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: Dimensions.get("screen").height * 0.1,
                width: Dimensions.get("window").width,
                backgroundColor: colors.background,
                ...Platform.select({
                    android: {
                      paddingTop: 30,
                      height: Dimensions.get("screen").height * 0.2
                    }
                  })
            }}>
                <TouchableOpacity onPress={() => navigation.toggleDrawer()} title="DrawerStack" style={styles.menuButton} accessible={true} accessibilityLabel="Navigation Drawer Menu Button">
                    <Ionicons name={"menu"} size={32} color={colors.text} style={{ marginLeft: 10 }} />
                </TouchableOpacity>
                <Text style={{
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
                    }),
                    color: colors.text,
                }}>Additional Resources</Text>
                <View style={styles.signOut}>
                    <Button title='Sign Out' onPress={() => signout()} accessible={true} accessibilityLabel="Sign out Button"></Button>
                </View>
                {/* <Button title="abc" onPress={() => navigation.toggleDrawer()}></Button> */}
            </View>
            <View style={styles.linkContainer}>
                <View style={styles.linkRow}>
                    <Text style={{ color: colors.text, fontSize: 20 }}>National Suicide Prevention Hotline</Text>
                    <Button title="Call" onPress={() => Linking.openURL('tel: +18002738255')} accessible={true} accessibilityLabel="National Suicide Prevention Hotline Call Button"></Button>
                </View>
            </View>
            <View style={styles.linkContainer}>
                <View style={styles.linkRow}>
                    <Text style={{ color: colors.text, fontSize: 20 }}>National Domestic Violence Hotline</Text>
                    <Button title="Call" onPress={() => Linking.openURL('tel: +18007997233')} accessibilityLabel="National Domestic Violence Hotline Call Button"></Button>
                </View>
            </View>
            <View style={styles.linkContainer}>
                <View style={styles.linkRow}>
                    <Text style={{ color: colors.text, fontSize: 20 }}>National Sexual Assault Hotline</Text>
                    <Button title="Call" onPress={() => Linking.openURL('tel: +18006564673')} accessibilityLabel="National Sexual Assult Hotline Call Button"></Button>
                </View>
            </View>
            <View style={styles.linkContainer}>
                <View style={styles.linkRow}>
                    <Text style={{ color: colors.text, fontSize: 20 }}>SAMHSA Hotline</Text>
                    <Button title="Call" onPress={() => Linking.openURL('tel: +18006624357')} accessibilityLabel="SAMHSA Hotline Call Button"></Button>
                </View>
            </View>
            <View style={styles.linkContainer}>
                <View style={styles.linkRow}>
                    <Text style={{ color: colors.text, fontSize: 20 }}>Free Guided Meditations</Text>
                    <Button title="Visit" onPress={() => Linking.openURL('https://www.uclahealth.org/marc/mindful-meditations')} accessibilityLabel="Link to Guided Meditations Resource"></Button>
                </View>
            </View>
            <View style={styles.linkContainer}>
                <View style={styles.linkRow}>
                    <Text style={{ color: colors.text, fontSize: 20 }}>Headspace Meditations</Text>
                    <Button title="Visit" onPress={() => Linking.openURL('https://www.headspace.com/covid-19')} accessibilityLabel="Link to free Headspace meditation sessions"></Button>
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
        margin: 40,
    },
    linkRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    linkRowLabel: {
        ...human.title3,
    },
    signOut: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        // paddingLeft: '15%'
    },
});