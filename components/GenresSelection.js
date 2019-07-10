import React from "react";
import styles from "../assets/styles";

import { Text, TouchableOpacity } from "react-native";

const GenresSelection = () => {
	return (
		<TouchableOpacity style={styles.filters}>
			<Text style={styles.filtersText}>
				Select GENRE
			</Text>
		</TouchableOpacity>
	);
};

export default GenresSelection;
