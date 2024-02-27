import Rect, { FC } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { Button } from "@rneui/themed";
import Ionicons from "@expo/vector-icons/Ionicons";
import { A } from "@expo/html-elements";

const ResumeCard: FC = function () {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.avatarProfile}
          source={require("../../assets/dev.png")}
        />

        {windowWidht > 600 ? (
          <Button
            size="lg"
            title="Open to work!"
            icon={
              <Ionicons
                name="logo-linkedin"
                color="white"
                size={20}
                style={{ marginRight: 10 }}
              />
            }
            buttonStyle={{
              height: 40,
              width: 175,
              borderRadius: 10,
              marginLeft: 40,
            }}
            titleStyle={{
              fontSize: 15,
              fontWeight: "bold",
            }}
          />
        ) : (
          <A style={styles.linkedinIcon} />
        )}
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
    paddingBottom: windowHeight > 800 ? "5%" : "5%",
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
    paddingHorizontal: 10,
    height: 10,
    width: 10,
    borderColor: "blue",
  },
});

export default ResumeCard;
