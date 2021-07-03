import React, { Component } from 'react';

import {
	StyleSheet,
	Text,
	Alert,
	TouchableOpacity,
} from 'react-native';

const Button = (props) => (
	<TouchableOpacity
		style={[styles.Button]}
		onPress={props.nextPage}
	>
		<Text style={styles.textButton}> Suivant </Text>
	</TouchableOpacity>
)
const styles = StyleSheet.create({
	Button: {
		marginTop: 30,
		alignSelf: "center",
		width: "100%",
		alignItems: 'center',
		justifyContent: "center",
		paddingVertical: 20,
		borderRadius: 10,
		backgroundColor: "#7589eb"
	},
	textButton: {
		fontSize: 17,
		fontWeight: "bold",
		color: "#fff"
	}
})


export default Button;