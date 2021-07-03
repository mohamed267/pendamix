import React, { useState } from 'react';
import { View, Button, Text, Platform, TouchableOpacity } from 'react-native';
import DateTimePicker, { DateTimePickerComponent } from '@react-native-community/datetimepicker';
import DateInput from "./dateInput";
import Moment from 'moment';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export const Calendar = (props) => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <View
            style={{ width: "100%" }}
        >
            <View style={{ width: "100%" }} >
                <TouchableOpacity
                    style={
                        {
                            width: "100%",
                            borderBottom: 1,
                            borderColor: "#ccc"
                        }
                    }
                    onPress={showDatepicker}
                    title="Show date picker!" >
                    <DateInput hideTit={props.hideTit} hideIcon={props.hideIcon} date={date} />
                </TouchableOpacity>
            </View>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}

                    display="default"
                    is24Hour={true}
                    onChange={onChange}
                />
            )}
        </View>
    );
};

export default Calendar;