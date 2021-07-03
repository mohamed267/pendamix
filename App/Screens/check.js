import React, {
    useState,
    useEffect,
    useRef
} from 'react';
import {
    StyleSheet,
    Dimensions,
    View,
    Text,
    Alert,
    TouchableOpacity,
    Picker,
    ScrollView,
    Animated
}
    from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';



const Check = ({ navigation }) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 500
        }).start();
        setTimeout(function () {
            navigation.navigate("Home");
        }, 100);
    })

    return (
        <Animated.View option={{ useNativeDriver: true }} style={[styles.container, {
            opacity: fadeAnim
        }]}
        >
            <FontAwesome name="check" size={50} color="green" />
        </Animated.View>
    )




}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

    }

});


export default Check;