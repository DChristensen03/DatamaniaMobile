import React from "react";
import { Button, Text, Icon, Layout } from "@ui-kitten/components";
import { SafeAreaView, StyleSheet, View } from "react-native";

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
        }}
      >
        <View style={{ position: "absolute", top: 30, left: 5 }}>
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
            marginBottom: 0,
            marginTop: 0,
          }}
        >
          <Text style={styles.text1} category="h1">
            Results
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "baseline",
            flexDirection: "column",
            marginBottom: 300,
          }}
        >
          <Text style={styles.text} category="h5">
            [Team1]: [point total] points
          </Text>
          <Text style={styles.text} category="h5">
            [Team2]: [point total] points
          </Text>
          <Text style={styles.text} category="h5">
            [Team3]: [point total] points
          </Text>
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

  backButton: {
    fontWeight: "bold",
    margin: 0,
    width: 15,
    height: 15,
  },
});
