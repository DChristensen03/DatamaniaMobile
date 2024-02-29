import React, { useState } from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

import { default as theme } from "./theme.json"; // <-- Import app theme
import { AppNavigator } from "./components/navigation.component";

export const GlobalContext = React.createContext(null);

export default () => {
	const [game, setGame] = useState(null);

	return (
		<>
			<IconRegistry icons={EvaIconsPack} />
			<GlobalContext.Provider value={{ game, setGame }}>
				<ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
					<AppNavigator />
				</ApplicationProvider>
			</GlobalContext.Provider>
		</>
	);
};
