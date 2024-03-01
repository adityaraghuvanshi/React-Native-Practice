import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import DatePicker from "react-native-datepicker";

const App = () => {
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
		<View style={style.container}>
			<Text style={style.lable}>Username:</Text>
			<TextInput
				style={style.input}
				placeholder="Enter your username"
				value={username}
				onChangeText={(text) => setUsername(text)}
			/>

			<Text style={style.label}>Full Name:</Text>
			<TextInput
				style={style.input}
				placeholder="Enter your fullname:"
				value={fullname}
				onChangeText={(text) => setFullname(text)}
			/>
			<Text style={style.label}>Password:</Text>
			<TextInput
				style={style.input}
				placeholder="Enter your password:"
				value={password}
				onChangeText={(text) => setPassword(text)}
			/>
			<Text style={style.label}>Date Of Birth:</Text>
			<DatePicker
				style={style.datePicker}
				date={dob}
				mode="date"
				placeholder="Select Date"
				format="YYYY-MM-DD"
				confirmBtnText="Confirm"
				cancelBtnText="Cancel"
				onDateChange={(date) => setDob(date)}
			/>
			<Text style={style.label}>Location:</Text>
			<TextInput
				style={style.input}
				placeholder="Enter your Location"
				value={location}
				onChangeText={(text) => setLocation(text)}
			></TextInput>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingL: 16,
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

export default App;
