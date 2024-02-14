import React from "react";
import { Button, Text, Icon, Layout, Input } from "@ui-kitten/components";
import { SafeAreaView, StyleSheet, View } from "react-native";

export default ({ navigation }) => {
	const navigateHome = () => {
		navigation.navigate("Home");
	};

	const [team1, setTeam1] = React.useState("");
	const [team2, setTeam2] = React.useState("");
	const [team3, setTeam3] = React.useState("");

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<View style={{ position: "absolute", top: 30, left: 5 }}>
					<Button
						style={styles.button}
						accessoryLeft={BackIcon}
						apperance="ghost"
						onPress={navigateHome}
					/>
				</View>
				<View
					style={{ flex: 2, justifyContent: "flex-end", alignItems: "baseline" }}
				>
					<Text
						style={{ fontWeight: "bold", fontStyle: "italic", paddingBottom: 20 }}
						category="h1"
					>
						Play
					</Text>
				</View>
				<View
					style={{
						flex: 4,
						justifyContent: "space-around",
						alignItems: "center",
						marginVertical: 30,
					}}
				>
					<Text style={styles.text} category="h4">
						Teams
					</Text>
					<Input
						placeholder="Team 1..."
						value={team1}
						style={styles.input}
						onChangeText={(nextValue) => setTeam1(nextValue)}
					/>
					<Input
						placeholder="Team 2..."
						value={team2}
						style={styles.input}
						onChangeText={(nextValue) => setTeam2(nextValue)}
					/>
					<Input
						placeholder="Team 3..."
						value={team3}
						style={styles.input}
						onChangeText={(nextValue) => setTeam3(nextValue)}
					/>
				</View>
				<View
					style={{ flex: 4, justifyContent: "flex-start", alignItems: "center" }}
				>
					<Button size="giant">Start Game</Button>
				</View>
			</Layout>
		</SafeAreaView>
	);
};

const BackIcon = (props) => <Icon name="arrow-back-outline" {...props} />;

const styles = StyleSheet.create({
	button: {
		fontWeight: "bold",
		margin: 0,
		width: 15,
		height: 15,
	},
	text: {
		fontWeight: "bold",
		fontStyle: "italic",
	},
	input: {
		marginHorizontal: 20,
	},
});
