import React from "react";
import { Button, Text, Icon, Layout } from "@ui-kitten/components";
import { SafeAreaView, StyleSheet } from "react-native";

export default (props) => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<Text style={styles.text} category="h1">
					Play
				</Text>
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
	text: {
		fontWeight: "bold",
		fontStyle: "italic",
		paddingBottom: 50,
	},
});
