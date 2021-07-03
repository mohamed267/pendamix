import React, { useState } from 'react';

import {
    StyleSheet,
    Dimensions,
    View,
    TextView,
    ImageView,
    Alert,
    TouchableOpacity,
    Picker,
    ScrollView,
    TextInput

}
    from 'react-native'; 
    
    
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';

import * as Animatable from 'react-native-animatable';
import Calendar from "../components/Calendar";
import TopBar from "../components/topBar";
import Button from "../components/Button";
const Welcome = () => {


    return (
        <TouchableOpacity
            style={styles.container}
        >

            <View>
                <ImageView source={require("../assets/landing.jpg")} />
            </View>
            <TextView>Yes we can</TextView>
        </TouchableOpacity>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }

});


export default Welcome;