import React, { useState } from 'react';
import { View, Button, Text, Platform, TouchableOpacity } from 'react-native';
import DateTimePicker, { DateTimePickerComponent } from '@react-native-community/datetimepicker';
import Moment from 'moment';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export const HourCard = (props) => {
    let background = props.selected ? "#e6821e" : "#dedce6";
    return (
        <TouchableOpacity style={{
            padding: 10,
            backgroundColor: props.selected ? "#e6821e" : "#dedce6",
            borderRadius: 10,
            maxWidth: "32%",
            marginVertical: 10
        }}>
            <Text 
                style={{ 
                    color: props.selected ? "#fff" : "#94929c", 
                    fontWeight: "bold" }}> {props.children} </Text>
        </TouchableOpacity>
    );
};

export default HourCard;