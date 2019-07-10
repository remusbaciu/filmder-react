import React from "react";
import { View, ImageBackground } from "react-native";
import CardStack, { Card } from "react-native-card-stack-swiper";
import GenresSelection from "../components/GenresSelection";
import MovieItem from "../components/MovieItem";
import styles from "../assets/styles";
import MoviesDatabase from "../assets/data/movies-database.js";
import ApplicationName from "../components/ApplicationName";

const WatchList = () => {
	return (
		<ImageBackground
			source={require("../assets/images/background.png")}
			style={styles.bg}
		>
        <Text>
        </Text>
		</ImageBackground>
	);
};

export default WatchList;
