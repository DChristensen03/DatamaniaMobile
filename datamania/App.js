import React from "react";
import * as eva from "@eva-design/eva";
import {
	ApplicationProvider,
	IconRegistry,
	Layout,
} from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

import { Home } from "./components";

import { default as theme } from "./theme.json"; // <-- Import app theme
import { SafeAreaView } from "react-native";

export default () => (
	<>
		<IconRegistry icons={EvaIconsPack} />
		<ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
			<SafeAreaView style={{ flex: 1 }}>
				<Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
					<Home />
				</Layout>
			</SafeAreaView>
		</ApplicationProvider>
	</>
);
