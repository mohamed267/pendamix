import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as Animatable from 'react-native-animatable';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    TextInput
}
    from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
const SignUp = ({ navigation }) => {
    return (
        <View
            style={styles.container}
        >
            <View style={styles.header} >
                <Text style={styles.textHeader}>
                    Regitrer
            </Text>
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={styles.footer} >
                <Text style={styles.textFooter}>
                    E-mail
                </Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color="#9fa7b5"
                        size={20}
                    />
                    <TextInput
                        placeHolder="your email"
                        style={styles.textInput}
                    />


                    <View
                        animation="bounceIn"
                    >
                        <Feather
                            name="check-circle"
                            color="green"
                            size={20}
                        />
                    </View>
                </View>
                <Text style={[styles.textFooter, { marginTop: 35 }]} >
                    Password
                </Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="lock"
                        color="#9fa7b5"
                        size={20}
                    />
                    <TextInput
                        placeHolder="your password"
                        secureTextEntry={true}
                        style={styles.textInput}
                        autoCapitalize="none"
                    />
                    <Feather
                        name="eye-off"
                        color="#32a852"
                        size={15}
                    />
                </View>
                <Text style={[styles.textFooter, { marginTop: 35 }]} >
                    Confirmer Password
                </Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="lock"
                        color="#9fa7b5"
                        size={20}
                    />
                    <TextInput
                        placeHolder="Votre password"
                        secureTextEntry={true}
                        style={styles.textInput}
                        autoCapitalize="none"
                    />
                    <Feather
                        name="eye-off"
                        color="#32a852"
                        size={15}
                    />
                </View>
                <View style={styles.button}>
                    <TouchableOpacity style={[styles.signIn, styles.sign]}
                        onPress={() => navigation.navigate('Home')}
                    >
                        <Text style={styles.textSignIn}> Sign In </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity
                        style={[styles.signUp, styles.sign]}
                    >
                        <Text style={styles.textSignUp}> Sign Up </Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    )
}

const { height, width } = Dimensions.get('screen');
const height_Logo = height * 0.8;
const width_button = width - 30;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#7589eb",
    },
    header: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingBottom: 60
    },
    textHeader: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },

    footer: {
        flex: 3,
        alignItems: "flex-start",
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    textFooter: {
        color: '#05375a',
        fontSize: 13
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
        alignItems: "center"
    },
    textInput: {
        flex: 1,
        //marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },

    button: {
        marginTop: 40,
        alignSelf: "center"
    },
    sign: {
        width: width_button,
        alignItems: 'center',
        justifyContent: "center",
        padding: 10,
        borderRadius: 10,
    },
    signIn: {
        backgroundColor: "#7589eb",


    },
    textSignIn: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 17
    },
    signUp: {
        backgroundColor: "#d1d6f0"
    },
    textSignUp: {
        fontSize: 17,
        fontWeight: "bold",
        color: "#7589eb"
    }




});


export default SignUp;