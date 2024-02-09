import React from "react";
import { Button, Text, Icon, Layout } from "@ui-kitten/components";
import { SafeAreaView, StyleSheet } from "react-native";

export default ({ navigation }) => {
	const navigatePlay = () => {
		navigation.navigate("Play");
	};

	const navigateTutorial = () => {
		navigation.navigate("Tutorial");
	};

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<Text style={styles.text} category="h1">
					DataMania
				</Text>
				<Button
					style={styles.button}
					accessoryRight={PlayIcon}
					size="giant"
					onPress={navigatePlay}
				>
					Play
				</Button>
				<Button
					style={styles.button}
					accessoryRight={BulbIcon}
					size="giant"
					onPress={navigateTutorial}
				>
					Learn
				</Button>
				<Button style={styles.button} accessoryRight={SettingsIcon} size="giant">
					Options
				</Button>
			</Layout>
		</SafeAreaView>
	);
};

const PlayIcon = (props) => <Icon name="play-circle-outline" {...props} />;
const BulbIcon = (props) => <Icon name="bulb-outline" {...props} />;
const SettingsIcon = (props) => <Icon name="settings-outline" {...props} />;

const styles = StyleSheet.create({
	button: {
		fontWeight: "bold",
		margin: 10,
		width: 175,
		height: 50,
	},
	text: {
		fontWeight: "bold",
		fontStyle: "italic",
		paddingBottom: 50,
	},
});
