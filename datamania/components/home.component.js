import React from "react";
import { Button, Text, Icon } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

export default (props) => {
	return (
		<>
			<Text style={styles.text} category="h1">
				DataMania
			</Text>
			<Button style={styles.button} accessoryRight={PlayIcon} size="giant">
				Play
			</Button>
			<Button style={styles.button} accessoryRight={BulbIcon} size="giant">
				Learn
			</Button>
			<Button style={styles.button} accessoryRight={SettingsIcon} size="giant">
				Options
			</Button>
		</>
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
