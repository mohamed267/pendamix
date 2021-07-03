import React, { useState } from 'react';
import {
    StyleSheet,
    Dimensions,
    View,
    Text,
    Alert,
    TouchableOpacity,
    Picker,
    ScrollView,
    TextInput

}
    from 'react-native';

import * as Animatable from 'react-native-animatable';
import Calendar from "../components/Calendar";
import TopBar from "../components/topBar";
import Button from "../components/Button";
const Formulaire = ({ navigation }) => {
    const [formulaire, setFormulaire] =
        useState([
            {
                title: "informations d’identité et mes coordonnées de contact",
                infos: [
                    { id: 1, nom: "nom", value: "", placeHolder: "Votre Nom", type: "input" },
                    { id: 2, nom: "prenom", value: "", placeHolder: "Votre Prenom", type: "input" },
                    { id: 3, nom: "Date de naissance", value: "", placeHolder: "Votre date ne naissance", type: "date" },
                    {
                        id: 4, nom: "Sexe", value: "", placeHolder: "votre Sexe", type: "switch",
                        selected: "Homme", options: ["Femme ", "Homme "]
                    },
                    {
                        id: 5, nom: "intervenant", value: "", placeHolder: " intervenant dans le système de santé", type: "switch",
                        selected: "Oui", options: ["Oui ", "Non "]
                    },
                    { id: 6, nom: "Numéro de sécurité sociale", value: "", placeHolder: "Votre NSS", type: "input" },
                    { id: 7, nom: "Courriel", value: "", placeHolder: "Votre E-mail", type: "input" },

                ]
            },
            {
                title: "La ou les raisons pour laquelle je me fais dépister",
                infos: [
                    {
                        id: 8,
                        nom: "Je dispose d’une prescription médicale pour réaliser un test de dépistage de la COVID-19",
                        type: "switch",
                        selected: "Oui", options: ["Oui ", "Non "]
                    },
                    {
                        id: 9,
                        nom: "J’ai des symptômes (perte de l’odorat, perte du goût, fièvre, toux, ...) et ils sont apparus :",
                        type: "switch",
                        selected: "Moins de 24h avant le prélèvement",
                        options: [
                            "Moins de 24h avant le prélèvement ",
                            "2,3 ou 4 jours avant le prélèvement ",
                            "5,6 ou 7 jours avant le prélèvement",
                            "Entre 8 et 14 jours avant le prélèvement",
                            "Entre 15 et 28 jours avant le prélèvement ",
                            "Plus de quatre semaines avant le prélèvement"
                        ]
                    },

                ]
            },

            // {
            //     title: "Les informations concernant mon hébergement",
            //     infos: [
            //         {
            //             id: 10,
            //             nom: " Je suis actuellement hébergé(e)",
            //             type: "switch",
            //             selected: "Oui", options: [
            //                 "Dans un hébergement individuel privé ",
            //                 "En milieu carcéral",
            //                 "À l’hopital",
            //                 "En EHPAD",
            //                 "Dans une autre structure d’hébergement collectif (caserne, foyer, ...)",
            //                 "Je ne sais pas ou je ne souhaite pas répondre"
            //             ]
            //         }
            //     ]
            // },


        ]);
    const [page, setPage] = useState(0);
    const formTitle = formulaire[page].title;
    const formView = formulaire[page].infos.map((val, key) => {
        if (val.type === "input") {
            return (
                <View key={val.id} >
                    <Text style={styles.textFooter}>
                        {val.nom}
                    </Text>
                    <View style={styles.action}>
                        <TextInput
                            placeholder={val.placeHolder}
                            style={styles.textInput}
                            autoCapitalize
                        />
                    </View>
                </View>
            )
        } else if (val.type === "switch") {
            const [selectedValue, setSelectedValue] = useState(...val.selected);
            const picker = val.options.map((val, key) => {
                return (
                    <Picker.Item key={key} label={val} value={val} />
                )
            });
            return (
                <View key={val.id}>
                    <Text style={styles.textFooter}>
                        {val.nom}
                    </Text>
                    <View style={styles.action}>


                        <Picker
                            selectedValue={selectedValue}
                            style={{ width: "100%" }}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            {picker}
                        </Picker>
                    </View>
                </View>
            );
        } else if (val.type === 'date') {
            return (
                <View key={val.id}>
                    <Text style={styles.textFooter}>
                        {val.nom}
                    </Text>
                    <Calendar hideTit hideIcon />
                </View>
            )
        }
    });
    const handlerPageNext = () => {
        if (page !== formulaire.length - 1) {
            setPage(page + 1);
        } else {
            navigation.navigate("Check");

        }
    }
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
                <View style={styles.wrapperTextHeader} >
                    <Text style={styles.textHeader}> {formTitle}</Text>
                </View>

            </View>


            <Animatable.View
                animation="fadeInUpBig"
                style={[styles.footer]} >
                <ScrollView style={[styles.footerScroll]}>

                    {formView}

                </ScrollView>
                <Button nextPage={handlerPageNext} />
            </Animatable.View>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#9d8ede",
    },
    header: {
        flex: .4,
        justifyContent: "flex-start",
        paddingTop: 20,
        height: 20
    },
    textFooter: {
        color: '#05375a',
        fontSize: 13,
        marginTop: 20
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
    wrapperTextHeader: {
        width: "100%",
        overflow: "hidden",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        paddingHorizontal: 30,
    },
    textHeader: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold"
    },
    footer: {
        flex: 1,
        alignItems: "flex-start",
        borderTopRightRadius: 30,
        paddingHorizontal: 30,
        paddingBottom: 90,
        borderTopLeftRadius: 30,
        backgroundColor: '#fff',
        flexWrap: "nowrap"
    },
    footerScroll: {
        width: "100%"
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        paddingVertical: 10,
        alignItems: "center",
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


export default Formulaire;