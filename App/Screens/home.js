import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as Animatable from 'react-native-animatable';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
    ScrollView
}
    from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import SecondaryCard from '../components/secondaryCard';
import TopBar from "../components/topBar";
const SignUp = ({ navigation }) => {
    return (
        <View
            style={styles.container}
        >
            <View style={styles.header} >
                <TopBar />
                <Text style={styles.textHeader}>
                    Bonjour Mohamed
                </Text>
                <Text style={styles.titleHeader} >
                    Welcome Back to  vaccini
                </Text>
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={[styles.footer]} >
                <ScrollView
                    style={styles.scroll} >
                    <TouchableOpacity style={styles.lastTache}>
                        <Text style={{ color: "#515257", fontSize: 12 }}>
                            Covid-19 vaccine
                        </Text>
                        <View style={styles.lastVaccInfo}>
                            <FontAwesome
                                name="check"
                                color="green"
                                size={15}
                            >

                            </FontAwesome>
                            <Text
                                style={{
                                    fontWeight: "bold",
                                    fontSize: 20,
                                    flex: 3,
                                    paddingHorizontal: 10
                                }}>
                                Vaccinée
                            </Text>
                            <Text style={{ fontSize: 13 }} >
                                15 may 2021
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{ width: "100%", justifyContent: "space-between", flexWrap: "wrap", flexDirection: "row", marginTop: 30 }} >
                        <SecondaryCard press={() => navigation.navigate('not', { name: 'Hamid' })}
                            background="#b8d5f5"
                            textColor="#033870"
                            imageSource={require('../assets/tube.png')}
                            textContent="tester-vous !"
                            titleContent="avez vous corona virus symptomes ?"

                        />
                        <SecondaryCard
                            press={() => navigation.navigate('Search')}
                            background="#f5e1ae"
                            textColor="#edae0e"
                            imageSource={require('../assets/syringe.png')}
                            textContent="vacciner-aujourd'hui  !"
                            titleContent="avez vous vacciné  contre corona virus  ?"
                        />

                    </View >
                    <View style={{ marginTop: 30 }} >
                        <Text style={styles.primaryTitle}> Information </Text>
                        <View style={{ width: "100%", justifyContent: "space-between", flexDirection: "row", marginTop: 30 }} >
                            <SecondaryCard
                                background="#e399f0"
                                textColor="#ce0ef0"
                                imageSource={require('../assets/placeholder.png')}
                                textContent="10 wilayas"
                                titleContent="Emplacement des zones effectées"

                            />
                            <SecondaryCard
                                background="#f0b4ce"
                                textColor="#ed096c"
                                imageSource={require('../assets/hospital.png')}
                                textContent="20 wilayas"
                                titleContent="Hospitalization et pharmacies"
                            />

                        </View >
                    </View>
                </ScrollView>
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
        backgroundColor: "#9d8ede",
    },
    header: {
        flex: 1,
        justifyContent: "flex-start",
        paddingHorizontal: 30,
        paddingTop: 20,
        paddingBottom: 60
    },


    textHeader: {
        color: '#c6c7cc',
        fontWeight: 'bold',
        fontSize: 15,
        paddingVertical: 10
    },
    titleHeader: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
        paddingTop: 5
    },

    footer: {
        flex: 2.5,
        alignItems: "flex-start",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: '#fff',
        paddingHorizontal: 30,
        paddingVertical: 30,
        paddingBottom: 90,
        flexDirection: "column",
        flexWrap: "nowrap"
    },
    scroll: {
        width: "100%",
    },
    lastTache: {
        width: "100%",
        backgroundColor: "#e6e9fa",
        width: "100%",
        padding: 20,
        borderRadius: 16
    },
    lastVaccInfo: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    textFooter: {
        color: '#05375a',
        fontSize: 13
    },

    primaryTitle: {
        fontWeight: "bold",
        fontSize: 20
    }

});


export default SignUp;