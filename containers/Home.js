import React from "react";
import { View, ImageBackground } from "react-native";
import CardStack, { Card } from "react-native-card-stack-swiper";
import GenresSelection from "../components/GenresSelection";
import MovieItem from "../components/MovieItem";
import styles from "../assets/styles";
import MoviesDatabase from "../assets/data/movies-database.js";
import ApplicationName from "../components/ApplicationName";

const Home = () => {
	return (
		<ImageBackground
			source={require("../assets/images/background.png")}
			style={styles.bg}
		>

			<View style={styles.containerHome}>
				<View style={styles.top}>
					<ApplicationName />
					<GenresSelection />
				</View>

				<CardStack
					// loop={true}
					verticalSwipe={false}
					renderNoMoreCards={() => null}
					ref={swiper => (this.swiper = swiper)}
				>
					{MoviesDatabase.map((item, index) => (
						<Card key={index}>
							<MovieItem
								image={item.image}
								name={item.name}
								description={item.description}
								rating={item.rating}
								actions
								onPressLeft={() => this.swiper.swipeLeft()}
								onPressRight={() => this.swiper.swipeRight()}
							/>
						</Card>
					))}
				</CardStack>
			</View>
		</ImageBackground>
	);
};

export default Home;
