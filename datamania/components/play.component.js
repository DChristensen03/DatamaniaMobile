import React, { useState } from "react";
import {
	Button,
	Text,
	Icon,
	Layout,
	Input,
	Select,
	SelectItem,
} from "@ui-kitten/components";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { GlobalContext } from "../App";
import Game from "../utilities/game/Game";

export default ({ navigation }) => {
	const { game, setGame } = React.useContext(GlobalContext);

	const navigateHome = () => {
		navigation.navigate("Home");
	};

	const navigateGame = () => {
		navigation.navigate("Game");
	};

	const startGame = () => {
		const teams = [team1, team2];
		if (team3) {
			teams.push(team3);
		}
		setGame(new Game(teams, index));
		navigateGame();
	};

	const [team1, setTeam1] = useState("");
	const [team2, setTeam2] = useState("");
	const [team3, setTeam3] = useState("");

	const [index, setIndex] = useState(0);
	const data = ["Game 1", "Game 2", "Game 3", "Game 4", "Game 5"];

	return (
		<Layout style={{ flex: 1 }}>
			<SafeAreaView
				style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
			>
				<View style={{ position: "absolute", top: 60, left: 5 }}>
					<Button
						style={styles.button}
						accessoryLeft={BackIcon}
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
					<Select
						style={styles.select}
						selectedIndex={index}
						onSelect={setIndex}
						value={data[index.row]}
					>
						{data.map((value) => (
							<SelectItem title={value} key={value} />
						))}
					</Select>
				</View>
				<View
					style={{ flex: 4, justifyContent: "flex-start", alignItems: "center" }}
				>
					<Button
						size="giant"
						onPress={startGame}
						disabled={!(team1 && team2 && index)}
					>
						Start Game
					</Button>
				</View>
			</SafeAreaView>
		</Layout>
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
	select: {
		minWidth: 200,
	},
});
