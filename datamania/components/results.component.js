import React from "react";
import { GlobalContext } from "../App";
import { Button, Text, Icon, Layout } from "@ui-kitten/components";
import { SafeAreaView, StyleSheet, View } from "react-native";

export default ({ navigation }) => {
	const { game, setGame } = React.useContext(GlobalContext);

	const navigateHome = () => {
		navigation.navigate("Home");
	};

	return (
		<Layout
			style={{
				flex: 1,
			}}
		>
			<SafeAreaView
				style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
			>
				<View style={{ position: "absolute", top: 60, left: 5 }}>
					<Button
						style={styles.backButton}
						accessoryLeft={BackIcon}
						onPress={navigateHome}
					/>
				</View>
				<View
					style={{
						flex: 1,
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "column",
						marginBottom: 0,
						marginTop: 0,
					}}
				>
					<Text style={styles.text1} category="h1">
						Results
					</Text>
				</View>
				<View
					style={{
						flex: 1,
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "column",
						marginBottom: 300,
					}}
				>
					{game.teams.map((team, i) => (
						<Text style={styles.text} category="h5" key={team.name + i}>
							{team.name}: {team.score} points
						</Text>
					))}
				</View>
			</SafeAreaView>
		</Layout>
	);
};

const BackIcon = (props) => <Icon name="arrow-back-outline" {...props} />;

const styles = StyleSheet.create({
	button: {
		fontWeight: "bold",
		margin: 10,
		width: 175,
		height: 50,
	},
	text1: {
		//alignItems: "",
		fontWeight: "bold",
		fontStyle: "italic",
		paddingTop: 50,
	},
	text: {
		fontWeight: "bold",
		//fontStyle: "italic",
		paddingBottom: 50,
	},

	backButton: {
		fontWeight: "bold",
		margin: 0,
		width: 15,
		height: 15,
	},
});
