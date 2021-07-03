import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    Image,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';

const Card = (props) => {
    return (
        <TouchableOpacity onPress = {props.press}
            style={[styles.secondary, { backgroundColor: props.background }]}>
            <Image
                style={{ width: 30, height: 30, marginLeft: 20 }}
                source={props.imageSource} />
            <Text style={styles.tilteSecondary}>
                {props.titleContent}
            </Text>
            <Text style={[styles.textSecondary, { color: props.textColor }]}>

                {props.textContent}
            </Text>
        </TouchableOpacity>

    )

}

const styles = StyleSheet.create({


    secondary: {
        flex: 2,
        padding: 10,
        maxWidth: "48%",
        height: 130,
        padding: 10,
        borderRadius: 20,
        justifyContent: "flex-end",
    },
    textSecondary: {
        flex: 1,
        marginTop: 10,
        fontSize: 10
    },
    tilteSecondary: {
        flex: 3,
        fontWeight: "bold",
        fontSize: 15,
        color: "#4a473f"
    },







});

export default Card;