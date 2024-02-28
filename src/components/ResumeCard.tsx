import Rect, { FC } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { A } from "@expo/html-elements";
import { AntDesign } from "@expo/vector-icons";

const ResumeCard: FC = function () {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.avatarProfile}
          source={require("../../assets/dev.png")}
        />
        <A
          href="https://www.linkedin.com/in/andriani-leandro/"
          target="_blank"
          role="link"
          style={styles.linkedinContainer}
        >
          {
            <AntDesign
              name="linkedin-square"
              size={windowWidht > 400 ? 50 : 24}
              style={{ alignSelf: "center" }}
              color="white"
            />
          }
        </A>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Hi, i'm Leandro</Text>
        <Text style={styles.text}>
          I have{" "}
          {
            <Text style={[styles.text, { color: "yellow" }]}>
              +1 year programming
            </Text>
          }{" "}
          and actually interested in{" "}
          {
            <Text style={[styles.text, { color: "yellow" }]}>
              React Native + Expo + Expo Web
            </Text>
          }
        </Text>
        <Text style={styles.text}>
          {" "}
          Born in Argentina, living in Spain right now{" "}
        </Text>
      </View>
    </View>
  );
};

const windowWidht = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

console.log(windowHeight, windowWidht);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: windowHeight > 800 ? "15%" : "20%",
    marginBottom: windowHeight > 800 ? "0%" : "10%",
  },
  imageContainer: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  linkedinContainer: {
    marginLeft: windowWidht > 400 ? 50 : 25,
    height: windowHeight > 800 ? "15%" : "30%",
    width: windowWidht > 400 ? "5%" : "10%",
  },
  rightContainer: {
    flex: 1,
  },
  leftContainer: {
    flex: 1,
  },
  textContainer: {
    flexDirection: "column",
    marginTop: windowHeight > 800 ? 20 : 30,
  },
  title: {
    fontSize: windowWidht > 600 ? 60 : 40,
    fontWeight: "bold",
    color: "white",
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
  avatarProfile: {
    borderRadius: 1000,
    height: windowHeight > 800 ? 175 : 100,
    width: windowWidht > 500 ? 175 : 100,
  },
  linkedinIcon: {
    textAlign: "center",
    textAlignVertical: "center",
    color: "white",
    fontWeight: "500",
  },
});

export default ResumeCard;
