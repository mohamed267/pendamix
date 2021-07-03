import React, { useState } from 'react';
import { View, Button, Text, Platform, TouchableOpacity } from 'react-native';
import DateTimePicker, { DateTimePickerComponent } from '@react-native-community/datetimepicker';
import Moment from 'moment';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export const DateInput = (props) => {
    return (
        <View
            style={
                {
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingVertical: 15,
                    alignItems: "center",
                    borderBottomWidth: 1,
                    borderBottomColor: "#ccc"
                }
            }
        >
            { !props.hideTit ?
            <Text
                style={
                    {
                        fontWeight: "bold",
                        color: "#68686b",
                        fontSize: 20
                    }
                }>
                Date :
                        </Text> : null }
            <Text
                style={
                    {
                        fontSize: 15,
                        color: "#4d4d4f"
                    }
                }

            > {Moment(props.date).format('DD MM YYYY')} </Text>
            {!props.hideIcon ?<FontAwesome
                name="calendar"
                size={25}
                color="#4d4d4f"
            />: null}
        </View>
    );
};

export default DateInput;