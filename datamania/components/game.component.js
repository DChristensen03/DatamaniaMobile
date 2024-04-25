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
import FlipCard from "react-native-flip-card";
import { GlobalContext } from "../App";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";

const GameScreen = (props) => {
	const theme = useTheme();

	const { eva, style, ...restProps } = props;

	const { game, setGame } = React.useContext(GlobalContext);

	const [activeQuestion, setActiveQuestion] = useState("");

	const [modalOpen, setModalOpen] = useState(false);

	const [category, setCategory] = useState();
	const [points, setPoints] = useState();

	useEffect(() => {
		openQuestionModal();
	}, [category, points]);

	const navigateResults = () => {
		props.navigation.navigate("Results");
	};

	const openQuestionModal = () => {
		if (category && points) {
			const title = Object.keys(category)[0];
			const chosenCategory = category?.[title];
			setActiveQuestion(chosenCategory?.[points]);
			setModalOpen(true);
		}
	};

	const completeQuestion = () => {
		const title = Object.keys(category)[0];
		let newGame = { ...game };
		const index = newGame.questions.findIndex((e) => Object.keys(e)[0] === title);
		newGame.questions[index][title][points].done = true;
		setGame(newGame);

		setModalOpen(false);
	};

	const isDone = (cat, point) => {
		const title = Object.keys(cat)[0];
		const index = game.questions.findIndex((e) => Object.keys(e)[0] === title);

		return game.questions[index][title][point].done;
	};

	const Header = (props) => (
		<View {...props} style={{ height: 45 }}>
			<Button
				style={[eva.style.closeButton, style]}
				appearance="ghost"
				accessoryRight={ExitIcon}
				onPress={() => {
					setModalOpen(false);
					setCategory(), setPoints();
				}}
			></Button>
		</View>
	);

	const Footer = (props) => (
		<View {...props} style={{ padding: 3 }}>
			{game.teams.map((team, i) => (
				<View
					key={team.name + i}
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
								team.score += points;
								completeQuestion();
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
							onPress={() => completeQuestion()}
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
								team.score -= points;
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
				{game.questions.map((cat, i) => (
					<>
						<View
							key={cat + i}
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
									{Object.keys(cat)[0]}
								</Text>
							</Card>
						</View>
						<View
							key={i}
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
								onPress={() => {
									setCategory(cat);
									setPoints(100);
								}}
								disabled={isDone(cat, 100)}
							>
								<Text style={[eva.style.text, style]}>100</Text>
							</Button>
							<Button
								style={[eva.style.pointCard, style]}
								onPress={() => {
									setCategory(cat);
									setPoints(200);
								}}
								disabled={isDone(cat, 200)}
							>
								<Text style={[eva.style.text, style]}>200</Text>
							</Button>
							<Button
								style={[eva.style.pointCard, style]}
								onPress={() => {
									setCategory(cat);
									setPoints(300);
								}}
								disabled={isDone(cat, 300)}
							>
								<Text style={[eva.style.text, style]}>300</Text>
							</Button>
							<Button
								style={[eva.style.pointCard, style]}
								onPress={() => {
									setCategory(cat);
									setPoints(400);
								}}
								disabled={isDone(cat, 400)}
							>
								<Text style={[eva.style.text, style]}>400</Text>
							</Button>
							<Button
								style={[eva.style.pointCard, style]}
								onPress={() => {
									setCategory(cat);
									setPoints(500);
								}}
								disabled={isDone(cat, 500)}
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
					{game.teams.map((team, i) => (
						<Text key={team.name + i}>
							{team.name}: {team.score}
						</Text>
					))}
				</View>
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
					<Button onPress={navigateResults}>End Game</Button>
				</View>
				{/* Render the question modal only if a question has been selected */}
				{modalOpen ? (
					<Modal visible={true} style={{ width: "80%", height: "50%" }}>
						<Card
							disabled={true}
							header={Header}
							footer={Footer}
							style={{ flex: 1, margin: 2 }}
						>
							<View style={{ height: "100%", flexDirection: "column" }}>
								<View
									style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
								>
									<Text>{activeQuestion.question}</Text>
								</View>
								<FlipCard>
									{/* Face Side */}
									<View style={[eva.style.flip, style]}>
										<Text>Answer</Text>
									</View>
									{/* Back Side */}
									<View style={[eva.style.flip, style]}>
										<Text>{activeQuestion.answer}</Text>
									</View>
								</FlipCard>
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
	flip: {
		backgroundColor: theme["color-primary-400"],
		marginTop: 5,
		paddingHorizontal: 3,
		textAlign: "center",
		justifyContent: "center",
		alignItems: "center",
		flex: 1,
		width: "100%",
		borderWidth: 1,
		borderRadius: 5,
	},
}));
