import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet, Text, View, Image, Dimensions, TouchableOpacity
}
    from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./home";
import SelectVaccin from "./selectVaccin";
import Formulaire from './formulaire';
const Tab = createBottomTabNavigator();
const UserNav = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: styles.bottomBar
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <FontAwesome
                                name="home"
                                size={20}
                                color={focused ? "#4799cc" : "gray"}
                            >
                            </FontAwesome>
                        </View>
                    )
                }} />
            <Tab.Screen
                name="Search"
                component={SelectVaccin}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <FontAwesome
                                name="search"
                                size={20}
                                color={focused ? "#4799cc" : "gray"}>
                            </FontAwesome>
                        </View>
                    )
                }} />

            {/* <Tab.Screen
                name="ActionButton"
                component={Emptyscreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TouchableOpacity style={{
                            backgroundColor: "#4799cc",
                            width: 50,
                            height: 50,
                            borderRadius: 50,
                            justifyContent: "center",
                            alignItems: "center",
                            marginBottom: 50,
                        }}>
                            <Text >
                                <FontAwesome
                                    name="plus"
                                    size={25}
                                    color="#fff">
                                </FontAwesome>
                            </Text>
                        </TouchableOpacity>
                    )
                }} /> */}

            <Tab.Screen
                name="not" component={Formulaire}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <FontAwesome
                                name="envelope"
                                size={20}
                                color={focused ? "#4799cc" : "gray"}>
                            </FontAwesome>
                        </View>
                    )
                }} />
            <Tab.Screen name="Setting" component={SettingsScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <FontAwesome name="user" size={20}
                                color={focused ? "#4799cc" : "gray"}>
                            </FontAwesome>
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    );
}

function SettingsScreen() {
    return (
        <Text> settings</Text>
    )
}
function Emptyscreen() {
    return <Text> home</Text>;
}

const { height } = Dimensions.get('screen');
const height_Logo = height * 0.3;

const styles = StyleSheet.create({
    bottomBar: {
        backgroundColor: "#fff",
        position: "absolute",
        height: 80,
        shadowOffset: {
            width: 0,
            height: 0
        }
    }
});


export default UserNav;