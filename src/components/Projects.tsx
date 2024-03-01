import React, { FC } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { Button } from "@rneui/themed";
import { FontAwesome6 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Projects: FC = function () {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Entypo
          name="tablet-mobile-combo"
          size={windowWidht > 400 ? 50 : 24}
          color="white"
        />
        <Text style={styles.title}>Projects</Text>
      </View>
      <View style={styles.projectContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../../assets/Newspaper.png")}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Newspaper is a simple App that consume the Current New's API. In the
            screen we have a Daily New who is the most recent new at the time.
            Below we have te other 4 most recent new's. That new's have one
            button that allow's display the modal with more information and his
            respective image.
          </Text>
        </View>
      </View>
    </View>
  );
};

const windowWidht = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: windowHeight > 800 ? "15%" : "20%",
  },
  projectContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  titleContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    marginLeft: 15,
    color: "white",
    fontWeight: "bold",
    marginVertical: windowHeight > 800 ? 100 : 5,
  },
  text: {
    fontSize: windowWidht > 400 ? 20 : 15,
    padding: 20,
    fontWeight: "600",
    color: "white",
  },
  image: {
    height: windowHeight > 800 ? 250 : "20%",
    width: windowWidht > 300 ? 250 : "20%",
    borderRadius: 20,
    borderWidth: 5,
    borderColor: "white",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "flex-start",
  },
  textContainer: {
    flex: 1,
    justifyContent: "flex-start",
    borderRadius: 20,
    borderWidth: 5,
    borderColor: "white",
  },
});

export default Projects;
