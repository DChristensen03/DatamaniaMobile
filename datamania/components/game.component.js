import { Card, Layout, Text } from "@ui-kitten/components";
import { GlobalContext } from "../App";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { View, StyleSheet } from "react-native";

export default GameScreen = () => {
	const { game, setGame } = React.useContext(GlobalContext);

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Layout style={{ flex: 1 }}>
				{game.questions.map((category) => (
					<View
						style={{
							flex: 2,
							flexDirection: "row",
							justifyContent: "space-around",
							alignItems: "baseline",
						}}
					>
						<Card style={styles.card}>
							<Text
								style={{
									fontWeight: "bold",
									fontStyle: "italic",
									paddingBottom: 0,
									marginHorizontal: 0,
								}}
							>
								{Object.keys(category)[0]}
							</Text>
						</Card>
						<Card style={styles.card}>
							<Text
								style={{ fontWeight: "bold", fontStyle: "italic", paddingBottom: 20 }}
							>
								{category[Object.keys(category)[0]]["100"].question}
							</Text>
						</Card>
						<Card style={styles.card}>
							<Text
								style={{
									fontWeight: "bold",
									fontStyle: "italic",
									paddingBottom: 20,
									flexWrap: "wrap",
								}}
							>
								{category[Object.keys(category)[0]]["200"].question}
							</Text>
						</Card>
						<Card style={styles.card}>
							<Text
								style={{ fontWeight: "bold", fontStyle: "italic", paddingBottom: 20 }}
							>
								{category[Object.keys(category)[0]]["300"].question}
							</Text>
						</Card>
						<Card style={styles.card}>
							<Text
								style={{ fontWeight: "bold", fontStyle: "italic", paddingBottom: 20 }}
							>
								{category[Object.keys(category)[0]]["400"].question}
							</Text>
						</Card>
						<Card style={styles.card}>
							<Text
								style={{ fontWeight: "bold", fontStyle: "italic", paddingBottom: 20 }}
							>
								{category[Object.keys(category)[0]]["500"].question}
							</Text>
						</Card>
					</View>
				))}
			</Layout>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	card: {
		width: "15%",
	},
});
