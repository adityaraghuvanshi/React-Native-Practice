import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import DatePicker from "react-native-datepicker";

const MyForm = () => {
	const [username, setUsername] = useState("");
	const [fullname, setFullname] = useState("");
	const [password, setPassword] = useState("");
	const [dob, setDob] = useState("");
	const [location, setLocation] = useState("");

	const handleSubmit = () => {
		console.log("Form Submitted:", {
			username,
			fullname,
			password,
			dob,
			location,
		});
	};
	return (
		<View style={styles.form}>
			<Text style={styles.label}>Username:</Text>
			<TextInput
				style={styles.input}
				placeholder="Enter your username"
				value={username}
				onChangeText={(text) => setUsername(text)}
			/>

			<Text style={styles.label}>Full Name:</Text>
			<TextInput
				style={styles.input}
				placeholder="Enter your fullname:"
				value={fullname}
				onChangeText={(text) => setFullname(text)}
			/>
			<Text style={styles.label}>Password:</Text>
			<TextInput
				style={styles.input}
				placeholder="Enter your password:"
				value={password}
				onChangeText={(text) => setPassword(text)}
			/>
			<Text style={styles.label}>Date Of Birth:</Text>
			<DatePicker
				style={styles.datePicker}
				date={dob}
				mode="date"
				placeholder="Select Date"
				format="YYYY-MM-DD"
				confirmBtnText="Confirm"
				cancelBtnText="Cancel"
				onDateChange={(date) => setDob(date)}
			/>
			<Text style={styles.label}>Location:</Text>
			<TextInput
				style={styles.input}
				placeholder="Enter your Location"
				value={location}
				onChangeText={(text) => setLocation(text)}
			></TextInput>
		</View>
	);
};

const styles = StyleSheet.create({
	form: {
		position: "absolute",
		borderWidth: 1, // Border width
		borderColor: "black",
		padding: "20px",
	},
	label: {
		fontSize: 16,
		marginBottom: 4,
	},
	input: {
		height: 40,
		borderColor: "gray",
		borderWidth: 1,
		marginBottom: 16,
		paddingHorizontal: 8,
	},
	datePicker: {
		width: "100%",
		marginBottom: 16,
	},
});

export default MyForm;
