import React, { FC } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { A } from "@expo/html-elements";
import { LinearGradient } from "expo-linear-gradient";

const Header: FC = function () {
  return (
    <View style={styles.container}>
      <A
        style={[
          styles.linkButton,
          { borderBottomLeftRadius: 100, borderRightWidth: 0 },
        ]}
      >
        Home
      </A>
      <A
        style={[styles.linkButton, { borderLeftWidth: 0, borderRightWidth: 0 }]}
      >
        Experience
      </A>
      <A
        style={[styles.linkButton, { borderLeftWidth: 0, borderRightWidth: 0 }]}
      >
        Projects
      </A>
      <A
        style={[
          styles.linkButton,
          { borderLeftWidth: 0, borderBottomRightRadius: 100 },
        ]}
      >
        About
      </A>
    </View>
  );
};

const windowHeight = Dimensions.get("window").height;
const windowWidht = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  linkButton: {
    paddingVertical: 10,
    height: windowWidht > 800 ? "100%" : "100%",
    width: windowWidht > 400 ? "10%" : "25%",
    color: "white",
    borderTopWidth: 0,
    textAlign: "center",
    fontSize: windowWidht > 400 ? 20 : 15,
    backgroundColor: "black",
  },
});

export default Header;
