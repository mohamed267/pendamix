import React, { Component, useState } from 'react';
import {
    StyleSheet,
    Dimensions,
    View,
    Alert,
    Text,
    TouchableOpacity,
    ScrollView

}
    from 'react-native';

import * as Animatable from 'react-native-animatable';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MapView from 'react-native-maps';
import Calendar from "../components/Calendar";
import HourCard from "../components/hourCard";
import TopBar from "../components/topBar"
const SelectVaccin = ({ navigation }) => {
    const [hourSelected, setOurSelected] =
        useState([{ selected: false, hour: "10:00PM" },
        { selected: false, hour: "10:00PM" },
        { selected: true, hour: "10:00PM" },
        { selected: false, hour: "11:00PM" }]);
    const handleChangeSelected = (id) => {
        const selected = hourSelected;
        const selectedUpdated = selected.map((val, key) => {
            if (id === key) {
                val.selected = true;
            } else {
                val.selected = false;
            }

            return val;
        });
        setOurSelected(selectedUpdated);
    }
    const Hour = hourSelected.map((val, key) => {
        return <HourCard
            changeSelected={id => handleChangeSelected(id)}
            id={key} key={key} selected={val.selected} >
            {val.hour}  </HourCard>
    });
    return (
        <View
            style={styles.container}
        >
            <View style={styles.header} >
                <TopBar style={{
                    paddingHorizontal: 30,
                    paddingTop: 20,
                    paddingBottom: 20
                }} />
                <View style={styles.map}>
                    <MapView style={{ width: "100%", height: "100%" }}
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }} />
                </View>

            </View>


            <Animatable.View
                animation="fadeInUpBig"
                style={[styles.footer]} >
                <ScrollView style={[styles.footerScroll]}>
                    <Text style={{ fontWeight: "bold", paddingVertical: 10, paddingBottom: 5, fontSize: 20, color: "#3d3d40" }}>
                        hopital de lorem  ipsum
                    </Text>
                    <Text style={{ fontSize: 16, color: "#68686b" }}>
                        Lorem isum vaccine
                </Text>
                    <Calendar />
                    <View style={[styles.selecDates]} >
                        {Hour}
                    </View>
                    <View style={[styles.button]}>
                        <TouchableOpacity onPress={() => navigation.navigate('not', { name: 'Hamid' })}
                            style={[styles.Postuler]}
                        >
                            <Text style={styles.textPostuler}> Postuler </Text>
                        </TouchableOpacity>
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
        paddingTop: 20,
        height: 20
    },

    userAbout: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 15,
        paddingHorizontal: 30
    },
    userAboutLeft: {
        flexDirection: "row",
        alignItems: "center",
    },

    imageUser: {
        width: 20,
        height: 20,
        borderRadius: 20
    },
    map: {
        width: "100%",
        overflow: "hidden",
        height: "100%",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    footer: {
        flex: 1,
        alignItems: "flex-start",
        borderTopRightRadius: 30,
        paddingHorizontal: 30,
        paddingBottom: 90,
        borderTopLeftRadius: 30,
        backgroundColor: '#fff',
        flexDirection: "column",
        flexWrap: "nowrap"
    },
    footerScroll: {
        width: "100%"
    },
    selecDates: {
        width: "100%",
        marginTop: 10,
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between"
    },


    Postuler: {
        marginTop: 10,
        alignSelf: "center",
        width: "100%",
        alignItems: 'center',
        justifyContent: "center",
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#7589eb"
    },
    textPostuler: {
        fontSize: 17,
        fontWeight: "bold",
        color: "#fff"
    }

});


export default SelectVaccin;