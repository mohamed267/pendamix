import React, { useState } from 'react';
import { View, Button, Text, Platform, TouchableOpacity } from 'react-native';

export const HourCard = (props) => {
    let background = props.selected ? "#e6821e" : "#dedce6";
    return (
        <TouchableOpacity style={{
            padding: 10,
            backgroundColor: props.selected ? "#e6821e" : "#dedce6",
            borderRadius: 10,
            maxWidth: "32%",
            marginVertical: 10
        }} 
        onPress={() => props.changeSelected(props.id)} >
            <Text
                style={{
                    color: props.selected ? "#fff" : "#94929c",
                    fontWeight: "bold"
                }}> {props.children} </Text>
        </TouchableOpacity >
    );
};

export default HourCard;