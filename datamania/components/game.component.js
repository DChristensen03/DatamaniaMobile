import {
	Button,
	ButtonGroup,
	Card,
	Icon,
	Layout,
	Modal,
	Text,
	useTheme,
	withStyles,
} from "@ui-kitten/components";
import { GlobalContext } from "../App";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

const GameScreen = (props) => {
	const theme = useTheme();

	const { eva, style, ...restProps } = props;

	const { game, setGame } = React.useContext(GlobalContext);

	const [activeQuestion, setActiveQuestion] = useState("");

	const [modalOpen, setModalOpen] = useState(false);

	const openQuestionModal = (category, points) => {
		const title = Object.keys(category)[0];
		category = category?.[title];
		setActiveQuestion(category?.[points]?.question);
		setModalOpen(true);
	};

	const Header = (props) => (
		<View {...props} style={{ height: 45 }}>
			<Button
				style={[eva.style.closeButton, style]}
				appearance="ghost"
				accessoryRight={ExitIcon}
				onPress={() => setModalOpen(false)}
			></Button>
		</View>
	);

	const Footer = (props) => (
		<View {...props} style={{ padding: 3 }}>
			{game.teams.map((team) => (
				<View
					key={team.name}
					style={{ flexDirection: "row", alignItems: "center" }}
				>
					<Text>{team.name}</Text>
					<View
						style={{ marginLeft: "auto", flexDirection: "row", paddingVertical: 1 }}
					>
						<Button
							style={[
								eva.style.iconButtons,
								{
									borderTopRightRadius: 0,
									borderBottomRightRadius: 0,
									backgroundColor: theme["color-success-700"],
								},
								style,
							]}
							accessoryRight={CheckIcon}
							onPress={() => {
								team.score += 100;
								setModalOpen(false);
								console.log(team.score);
							}}
						></Button>
						<Button
							style={[
								eva.style.iconButtons,
								{
									borderRadius: 0,
									borderColor: "black",
									backgroundColor: theme["color-info-600"],
								},
								style,
							]}
							accessoryRight={DashIcon}
							status="info"
							onPress={() => setModalOpen(false)}
						></Button>
						<Button
							style={[
								eva.style.iconButtons,
								{
									borderTopLeftRadius: 0,
									borderBottomLeftRadius: 0,
									backgroundColor: theme["color-danger-600"],
								},
								style,
							]}
							status="danger"
							onPress={() => {
								team.score -= 100;
								setModalOpen(false);
								console.log(team.score);
							}}
							accessoryRight={ExitIcon}
						></Button>
					</View>
				</View>
			))}
		</View>
	);

	return (
		<Layout style={{ flex: 1 }}>
			<SafeAreaView style={{ flex: 1, paddingVertical: 10 }}>
				{game.questions.map((category) => (
					<>
						<View
							key={category}
							style={{
								flex: 1,
								flexDirection: "row",
								justifyContent: "space-around",
								alignItems: "center",
								paddingHorizontal: 30,
							}}
						>
							<Card style={[eva.style.categoryCard, style]}>
								<Text
									style={{
										fontWeight: "bold",
										fontStyle: "italic",
										paddingBottom: 0,
										marginHorizontal: 0,
									}}
								>
									{Object.keys(category)[0]}
								</Text>
							</Card>
						</View>
						<View
							style={{
								flex: 1,
								flexDirection: "row",
								justifyContent: "space-around",
								alignItems: "baseline",
								paddingHorizontal: 2,
							}}
						>
							<Button
								style={[eva.style.pointCard, style]}
								onPress={() => openQuestionModal(category, 100)}
							>
								<Text style={[eva.style.text, style]}>100</Text>
							</Button>
							<Button
								style={[eva.style.pointCard, style]}
								onPress={() => openQuestionModal(category, 200)}
							>
								<Text style={[eva.style.text, style]}>200</Text>
							</Button>
							<Button
								style={[eva.style.pointCard, style]}
								onPress={() => openQuestionModal(category, 300)}
							>
								<Text style={[eva.style.text, style]}>300</Text>
							</Button>
							<Button
								style={[eva.style.pointCard, style]}
								onPress={() => openQuestionModal(category, 400)}
							>
								<Text style={[eva.style.text, style]}>400</Text>
							</Button>
							<Button
								style={[eva.style.pointCard, style]}
								onPress={() => openQuestionModal(category, 500)}
							>
								<Text style={[eva.style.text, style]}>500</Text>
							</Button>
						</View>
					</>
				))}
				<View
					style={{
						flex: 1,
						flexDirection: "row",
						justifyContent: "space-around",
						alignItems: "baseline",
						paddingHorizontal: 2,
						paddingTop: 3,
					}}
				>
					{game.teams.map((team) => (
						<Text key={team.name}>
							{team.name}: {team.score}
						</Text>
					))}
				</View>
				{/* Render the question modal only if a question has been selected */}
				{modalOpen ? (
					<Modal visible={true} style={{ width: "80%", height: "40%" }}>
						<Card
							disabled={true}
							header={Header}
							footer={Footer}
							style={{ flex: 1, margin: 2 }}
						>
							<View style={{ height: "100%" }}>
								<Text>{activeQuestion}</Text>
							</View>
						</Card>
					</Modal>
				) : (
					""
				)}
			</SafeAreaView>
		</Layout>
	);
};

const ExitIcon = (props) => <Icon name="close-outline" {...props} />;
const CheckIcon = (props) => <Icon name="checkmark-outline" {...props} />;
const DashIcon = (props) => <Icon name="minus-outline" {...props} />;

export default ThemedGameScreen = withStyles(GameScreen, (theme) => ({
	categoryCard: {
		width: "100%",
		textAlign: "center",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: theme["color-primary-600"],
	},
	pointCard: {
		width: "18%",
		height: "100%",
		paddingHorizontal: 0,
	},
	text: {
		fontWeight: "bold",
		fontStyle: "italic",
	},
	closeButton: {
		position: "absolute",
		width: "1%",
		right: 0,
		flex: 1,
	},
	iconButtons: {
		paddingHorizontal: 3,
		borderColor: "black",
	},
}));
