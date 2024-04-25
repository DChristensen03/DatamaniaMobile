import React from "react";
import { Button, Text, Icon, Layout, Modal, Card } from "@ui-kitten/components";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Video } from "expo-av";
import video from "../videos/tutorial.mp4";

export default ({ navigation }) => {
	const navigateHome = () => {
		navigation.navigate("Home");
	};
	let [modalText, setModalText] = React.useState("");
	let [modalOpen, setModalOpen] = React.useState(false);

	const Header = (props) => (
		<View {...props} style={{ height: 45 }}>
			<Button
				style={styles.backButton}
				appearance="ghost"
				accessoryRight={ExitIcon}
				onPress={() => {
					setModalOpen(false);
				}}
			></Button>
		</View>
	);

	return (
		<Layout style={{ flex: 1 }}>
			<SafeAreaView
				style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
			>
				<View style={{ position: "absolute", top: 60, left: 5 }}>
					<Button
						style={{
							fontWeight: "bold",
							margin: 0,
							width: 15,
							height: 15,
						}}
						accessoryLeft={BackIcon}
						onPress={navigateHome}
					/>
				</View>
				<View
					style={{
						flex: 1,
						justifyContent: "space-around",
						alignItems: "center",
						marginTop: 90,
					}}
				>
					<Button
						style={styles.button}
						onPress={() => {
							setModalText(
								"There will be three teams with two to three members per team.\nOnce team is formed, enter team name in Play tab."
							);
							setModalOpen(true);
						}}
					>
						Making Teams
					</Button>

					<Button
						style={styles.button}
						onPress={() => {
							setModalText(
								"There will be 25 questions across five categories, with point value corresponding with difficulty\nThe game ends when all questions have been chosen and answered\nTeams take turns choosing questions by requesting the category and point values The team that chooses the first is pre-determined randomly\nContestants may not speak at any point unless their team is called on by the game moderator. Afterwards, team will have five seconds to decide their answer, even if the answer is incorrect\nThe team captain will speak for the team when selecting questions and when answering them.\nTeam members who talk without being recognized by the moderator will be penalized"
							);
							setModalOpen(true);
						}}
					>
						Choosing/Answering Questions
					</Button>

					<Button
						style={styles.button}
						onPress={() => {
							setModalText(
								"If a team fails to provide any answer, the point value of the question will be removed from that team's total points\nTHERE IS NO PENALTY FOR GIVING A WRONG ANSWER, only for providing no answer at all\nIf an incorrect answer is provided, the opportunity to answer is passed along to the next team."
							);
							setModalOpen(true);
						}}
					>
						Scoring
					</Button>
				</View>
				<View style={styles.videoContainer}>
					<View
						style={{
							flex: 4,
							alignItems: "center",
						}}
					>
						<Text style={styles.text} category="h5">
							How-to Video
						</Text>
						<Video
							source={video}
							style={{ width: 138, height: 300 }}
							useNativeControls
						/>
					</View>
				</View>
			</SafeAreaView>
			<Modal
				visible={modalOpen}
				style={{ width: "80%", height: "50%", position: "absolute" }}
			>
				<Card disabled={true} style={{ flex: 1, margin: 2 }} header={Header}>
					<Text style={styles.text}>{modalText}</Text>
				</Card>
			</Modal>
		</Layout>
	);
};

const ExitIcon = (props) => <Icon name="close-outline" {...props} />;
const BackIcon = (props) => <Icon name="arrow-back-outline" {...props} />;

const styles = StyleSheet.create({
	button: {
		fontWeight: "bold",
		margin: 5,
		width: 265,
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
	videoContainer: {
		justifyContent: "flexStart",
		width: "134%",

		//height: "2%",
		//aspectRatio: 16 / 9, // You can adjust the aspect ratio as needed
		marginBottom: 10,
		flex: 1.5,
		flexDirection: "column",
		gap: -50,
	},
	video: {
		flex: 1,
	},
	backButton: {
		fontWeight: "bold",
		margin: 0,
		width: 15,
		height: 15,
	},
});
