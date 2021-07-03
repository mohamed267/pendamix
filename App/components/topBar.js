import React, { useState } from 'react';
import { View, StyleSheet, Image, Button, Text, Platform, TouchableOpacity } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
export const TopBar = (props) => {


    return (
        <View style={[styles.userAbout, props.style]}>
            <View>
                <FontAwesome
                    name="bars"
                    size={20}
                    color="#c1c7e3"
                >
                </FontAwesome>
            </View>
            <View style={styles.userAboutLeft}>
                <FontAwesome
                    name="bell"
                    size={20}
                    color="#c1c7e3">

                </FontAwesome>
                <TouchableOpacity style={{ borderRadius: 30, marginLeft: 10 }}>
                    <Image
                        source={require("../assets/users/user1.jpg")}
                        style={styles.imageUser}

                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    userAbout: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 15
    },
    userAboutLeft: {
        flexDirection: "row",
        alignItems: "center",
    },

    imageUser: {
        width: 20,
        height: 20,
        borderRadius: 20
    }
});


export default TopBar;
