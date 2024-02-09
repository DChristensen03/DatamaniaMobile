import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Play, Tutorial } from "./index";

const { Navigator, Screen } = createNativeStackNavigator();

const HomeNavigator = () => (
	<Navigator screenOptions={{ headerShown: false }}>
		<Screen name="Home" component={Home} />
		<Screen name="Play" component={Play} />
		<Screen name="Tutorial" component={Tutorial} />
	</Navigator>
);

export const AppNavigator = () => (
	<NavigationContainer>
		<HomeNavigator />
	</NavigationContainer>
);
