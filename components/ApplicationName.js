import React from "react";
import styles from "../assets/styles";

import { Text, TouchableOpacity } from "react-native";

const ApplicationName = () => {
	return (
		<TouchableOpacity style={styles.filters}>
			<Text style={styles.applicationName}>
				FILMDER - YOUR MOVIE SELECTION
			</Text>
		</TouchableOpacity>
	);
};

export default ApplicationName;
