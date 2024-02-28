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
            Front-End Web Developer | Universidad de San Pablo Tucuman [ 2023 -
            2024 ]
          </Text>
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.text}>
            Update and manteinance of the university main page. My todo list
            was: update calendars, fix forms, add new visuals and +
          </Text>
        </View>
      </View>
      <View style={styles.lineBetween} />
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={styles.leftContainer}>
          <Text style={styles.subTitle}>
            Movile Developer | AsesoresGroup [ Current Work ]
          </Text>
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.text}>
            Starting a new project, making a live radio player for Play Store.
            Radio station's like "Los40", "Radio Tucuman"
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
    paddingLeft: 40,
    paddingVertical: 20,
  },
  rightContainer: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 40,
    paddingVertical: 20,
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
    fontWeight: "500",
    fontSize: windowWidht > 500 ? 23 : 16,
  },
  lineBetween: {
    alignSelf: "center",
    height: windowHeight > 800 ? 5 : 2,
    width: windowWidht > 400 ? "95%" : "90%",
    backgroundColor: "white",
    borderRadius: 1000,
  },
});

export default Experience;
