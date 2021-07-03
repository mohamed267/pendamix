import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet, Text, View, Image, Dimensions, TouchableOpacity
}
    from 'react-native';
import Login from './login';
const LandingScreen = ({ navigation }) => {
    return (
        <View
            style={styles.container}
        >
            <View style={styles.header} >
                <Image
                    source={require('../assets/logo.png')}
                    style={styles.logo}
                    resizeMode="stretch"
                /></View>
            <View style={styles.footer} >
                <Text style={styles.title}>Protoger votre familly</Text>
                <Text style={styles.text}>connecter vous a notre application</Text>
                <View style={styles.button} >
                    <TouchableOpacity
                        style={styles.buttonWrapper}
                        onPress={() => navigation.navigate('Choose')}
                    >

                        <Text style={styles.textSign}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    )
}


const { height } = Dimensions.get('screen');
const height_Logo = height * 0.3;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#7589eb"
    },
    header: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    footer: {
        flex: 1,
        backgroundColor: "#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 30,
        paddingHorizontal: 50
    },
    logo: {
        height: height_Logo,
        width: height_Logo,
        borderRadius: 65,
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop: 5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30,
    },
    buttonWrapper: {
        backgroundColor: "#7589eb",
        paddingHorizontal: 25,
        paddingVertical: 15,
        borderRadius: 20
    },

});


export default LandingScreen;