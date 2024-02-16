import React from "react";
import { Button, Text, Icon, Layout } from "@ui-kitten/components";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";

export default ({ navigation }) => {
	const navigateHome = () => {
		navigation.navigate("Home");
	};

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<View style={{ position: "absolute", top: 30, left: 5 }}>
					<Button
						style={styles.backButton}
						accessoryLeft={BackIcon}
						onPress={navigateHome}
					/>
				</View>
				<View style={{ flex: 1, justifyContent: "center", alignItems: "baseline" }}>
					<Text style={styles.text1} category="h1">
						How it Works
					</Text>
				</View>
				<View
					style={{ flex: 2, justifyContent: "flex-end", alignItems: "baseline" }}
				>
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
				</View>
				<View style={styles.videoContainer}>
					<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
						<Text style={styles.text} category="h1">
							How-to Video
						</Text>
					</View>
					<WebView
						source={{
							uri: "https://www.youtube.com/watch?v=CVsbTCdTyAM&ab_channel=TheCrazyLoopGuy",
						}}
						style={{
							flex: 3,
							maxWidth: "70%",
							marginStart: 75,
						}}
					/>
				</View>
			</Layout>
		</SafeAreaView>
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
	videoContainer: {
		width: "80%",
		aspectRatio: 16 / 9, // You can adjust the aspect ratio as needed
		marginBottom: 20,
		flex: 2,
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
