import React, { FC } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Experience: FC = function () {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.titleContainer}>
        <FontAwesome name="briefcase" size={24} color="white" />
        <Text style={styles.title}>Experience</Text>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={styles.leftContainer}>
          <Text style={styles.subTitle}>
            Front-End Web Developer | Universidad de San Pablo Tucuman
          </Text>
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.text}>
            Update and manteinance of the university main page
          </Text>
        </View>
      </View>
    </View>
  );
};

const windowWidht = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: windowHeight > 800 ? "15%" : "20%",
  },
  leftContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "red",
  },
  rightContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "red",
  },
  title: {
    fontSize: 25,
    marginLeft: 15,
    color: "white",
    fontWeight: "bold",
    marginVertical: windowHeight > 800 ? 100 : 5,
  },
  text: {
    color: "white",
    fontSize: windowWidht > 500 ? 20 : 13,
  },
  subTitle: {
    color: "white",
    fontSize: windowWidht > 500 ? 23 : 16,
  },
});

export default Experience;
