import React, { FC } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Button } from "@rneui/themed";
import { FontAwesome6 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Projects: FC = function () {
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>Projects</Text>
    </View>
  );
};

const windowWidht = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  titleContiner: {
    flex: 1,
    flexDirection: "row",
  },
  title: {
    fontSize: 25,
    marginLeft: 15,
    color: "white",
    fontWeight: "bold",
    marginVertical: windowHeight > 800 ? 100 : 5,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
});

export default Projects;
