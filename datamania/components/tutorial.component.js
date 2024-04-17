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
      <Layout
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: 40,
          gap: -1,
        }}
      >
        <View style={{ position: "absolute", top: 10, left: 5 }}>
          <Button
            style={styles.backButton}
            accessoryLeft={BackIcon}
            onPress={navigateHome}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "baseline",
            marginBottom: -60,
            marginTop: -50,
          }}
        >
          <Text style={styles.text1} category="h6">
            Making Teams
          </Text>
        </View>
        <View
          style={{
            flex: 1.5,
            justifyContent: "flex-end",
            alignItems: "baseline",
            flexDirection: "column",
            marginTop: -10,
            marginBottom: -50,
            gap: -50,
          }}
        >
          <Text style={styles.text} category="h7">
            There will be three teams with two to three members per team.
          </Text>
          <Text style={styles.text} category="h7">
            Once team is formed, enter team name in Play tab.
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "baseline",
            marginBottom: 100,
            marginTop: -70,
          }}
        >
          <Text style={styles.text1} category="h6">
            Choosing and Answering Questions
          </Text>
        </View>
        <View
          style={{
            flex: 1.5,
            justifyContent: "flex-end",
            alignItems: "baseline",
            flexDirection: "column",
            marginBottom: -20,
            marginTop: 80,
            gap: -50,
          }}
        >
          <Text style={styles.text} category="h7">
            There will be 25 questions across five categories, with point value
            corresponding with difficulty
          </Text>
          <Text style={styles.text} category="h7">
            The game ends when all questions have been chosen and answered
          </Text>
          <Text style={styles.text} category="h7">
            Teams take turns choosing questions by requesting the category and
            point values The team that chooses the first is pre-determined
            randomly
          </Text>
          <Text style={styles.text} category="h7">
            Contestants may not speak at any point unless their team is called
            on by the game moderator. Afterwards, team will have five seconds to
            decide their answer, even if the answer is incorrect
          </Text>
          <Text style={styles.text} category="h7">
            The team captain will speak for the team when selecting questions
            and when answering them.
          </Text>
          <Text style={styles.text} category="h7">
            Team members who talk without being recognized by the moderator will
            be penalized
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "baseline",
            marginBottom: -30,
            marginTop: -100,
          }}
        >
          <Text style={styles.text1} category="h6">
            Scoring
          </Text>
        </View>
        <View
          style={{
            flex: 1.5,
            justifyContent: "flex-end",
            alignItems: "baseline",
            flexDirection: "column",
            marginTop: 35,
            marginBottom: -50,
            gap: -50,
          }}
        >
          <Text style={styles.text} category="h7">
            If a team fails to provide any answer, the point value of the
            question will be removed from that team's total points
          </Text>
          <Text style={styles.text} category="h7">
            THERE IS NO PENALTY FOR GIVING A WRONG ANSWER, only for providing no
            answer at all
          </Text>
          <Text style={styles.text} category="h7">
            If an incorrect answer is provided, the opportunity to answer is
            passed along to the next team.
          </Text>
        </View>
        <View style={styles.videoContainer}>
          <View
            style={{
              flex: 0.5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={styles.text} category="h5">
              How-to Video
            </Text>
          </View>
          <WebView
            source={{
              uri: "https://www.youtube.com/watch?v=CVsbTCdTyAM&ab_channel=TheCrazyLoopGuy",
            }}
            style={{
              flex: 1,
              maxWidth: "70%",
              marginStart: 80,
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
    justifyContent: "flexStart",
    width: "134%",

    //height: "2%",
    //aspectRatio: 16 / 9, // You can adjust the aspect ratio as needed
    marginBottom: 10,
    flex: 1.5,
    flexDirection: "column",
    gap: -50,
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
