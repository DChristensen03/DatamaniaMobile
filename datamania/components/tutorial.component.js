import React from "react";
import { Button, Text, Icon, Layout } from "@ui-kitten/components";
import { SafeAreaView, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export default (props) => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Layout style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}>
				<Text style={styles.text1} category="h1">
					How it Works
				</Text>
			</Layout>
			<Layout style={{ flex: 2, justifyContent: "flex-start", alignItems: "left" }}>
				<Text style={styles.text} category="h6">
					* There will be questions
				</Text>
				<Text style={styles.text} category="h6">
					* You will try to answer them
				</Text>
				<Text style={styles.text} category="h6">
					* You'll get a score at some point
				</Text>
				<Text style={styles.text} category="h6">
					* (Placeholder)
				</Text>
			</Layout>
			<Layout style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}>
				<Text style={styles.text} category="h1">
					How-to Video
				</Text>
			</Layout>
			<Layout style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}>
				<Layout style={styles.videoContainer}>
					<WebView source={{ uri: 'https://www.youtube.com/watch?v=CVsbTCdTyAM&ab_channel=TheCrazyLoopGuy' }} />
				</Layout>
			</Layout>
		</SafeAreaView>
	);
};

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
	videoContainer: {
		width: '100%',
		aspectRatio: 16 / 9, // You can adjust the aspect ratio as needed
		marginBottom: 20,
	},
	video: {
		flex: 1,
	}
});
