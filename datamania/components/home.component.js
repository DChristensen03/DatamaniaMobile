import React from "react";
import { Button, Text, Icon, Layout } from "@ui-kitten/components";
import { SafeAreaView, StyleSheet, View } from "react-native";

export default ({ navigation }) => {
  const navigatePlay = () => {
    navigation.navigate("Play");
  };

  const navigateTutorial = () => {
    navigation.navigate("Tutorial");
  };

  const navigateResults = () => {
    navigation.navigate("Results");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <View
          style={{ flex: 2, justifyContent: "flex-end", alignItems: "center" }}
        >
          <Text style={styles.text} category="h1">
            DataMania
          </Text>
        </View>
        <View
          style={{
            flex: 3,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Button
            style={styles.button}
            accessoryRight={PlayIcon}
            size="giant"
            onPress={navigatePlay}
          >
            Play
          </Button>
          <Button
            style={styles.button}
            accessoryRight={BulbIcon}
            size="giant"
            onPress={navigateTutorial}
          >
            Learn
          </Button>
          <Button style={styles.button} size="giant" onPress={navigateResults}>
            Results
          </Button>
        </View>
      </Layout>
    </SafeAreaView>
  );
};

const PlayIcon = (props) => <Icon name="play-circle-outline" {...props} />;
const BulbIcon = (props) => <Icon name="bulb-outline" {...props} />;

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
