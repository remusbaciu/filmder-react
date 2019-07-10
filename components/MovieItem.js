import React from "react";
import styles from "../assets/styles";

import { Text, View, Image, Dimensions, TouchableOpacity } from "react-native";

const MovieItem = ({
	actions,
	description,
	image,
	rating,
	name,
	onPressLeft,
	onPressRight,
	variant
}) => {

	const fullWidth = Dimensions.get("window").width;
	const imageStyle = [
		{
			borderRadius: 8,
			width: variant ? fullWidth / 2 - 30 : fullWidth - 80,
			height: variant ? 170 : 350,
			margin: variant ? 0 : 20
		}
	];

	const nameStyle = [
		{
			paddingTop: variant ? 10 : 15,
			paddingBottom: variant ? 5 : 7,
			color: "#363636",
			fontSize: variant ? 15 : 30
		}
	];

	return (
		<View style={styles.containerMovieItem}>

			<Image source={image} style={imageStyle} />

			{rating && (
				<View style={styles.matchesMovieItem}>
					<Text style={styles.matchesTextMovieItem}>
						 {rating} Rating
					</Text>
				</View>
			)}

			{/* NAME */}
			<Text style={nameStyle}>{name}</Text>

			{/* DESCRIPTION */}
			{description && (
				<Text style={styles.descriptionMovieItem}>{description}</Text>
			)}

			{/* ACTIONS */}
			{actions && (
				<View style={styles.actionsMovieItem}>
					<TouchableOpacity style={styles.button} onPress={() => onPressLeft()}>
						<Text style={styles.like}>
							YES
						</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.button}
						onPress={() => onPressRight()}
					>
						<Text style={styles.dislike}>
							NO
						</Text>
					</TouchableOpacity>
				</View>
			)}
		</View>
	);
};

export default MovieItem;
