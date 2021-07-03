import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet, Text, View, Image, Dimensions, TouchableHighlight
}
    from 'react-native';
const Choose = ({ navigation }) => {
    return (
        <View
            style={styles.container}
        >
            <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => navigation.navigate('Login')}
                style={[styles.box, styles.patientBox]}>
                <View >
                    <Text> Patient </Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#DDDDDD"
                onPress={() => navigation.navigate('Login')}
                style={[styles.box, styles.medecinBox]}>
                <View >
                    <Text> Medecin </Text>
                </View>
            </TouchableHighlight>


        </View>
    )
}

const { height, width } = Dimensions.get('screen');
const height_Logo = height * 0.3;
const box_width = width * 0.8;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    box: {
        width: box_width,
        margin: 10,
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 10
    },
    patientBox: {
        backgroundColor: "#499cab"
    },
    medecinBox: {
        backgroundColor: "#155e6b"
    },



});


export default Choose;