import React, { FC } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import Header from "../components/Header";
import ResumeCard from "../components/ResumeCard";
import Experience from "../components/Experience";

const Home: FC = function () {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={styles.scrollContainer}
        StickyHeaderComponent={Header}
        stickyHeaderIndices={[0]}
      >
        <Header />
        <ResumeCard />
        <Experience />
        <Text style={styles.text}>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem nemo totam provident dolorum alias incidunt
          perspiciatis earum dolor tempora suscipit? Itaque quos ipsum nisi
          aperiam assumenda voluptatibus beatae ad! Repellat!
        </Text>
        <Text style={styles.text}>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem nemo totam provident dolorum alias incidunt
          perspiciatis earum dolor tempora suscipit? Itaque quos ipsum nisi
          aperiam assumenda voluptatibus beatae ad! Repellat!
        </Text>
      </ScrollView>
    </View>
  );
};

const windowHeight = Dimensions.get("window").height;
const windowWidht = Dimensions.get("window").width;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    paddingHorizontal: windowWidht > 600 ? "20%" : "5%",
  },
  text: {
    fontSize: 16,
    height: 900,
    color: "white",
  },
});

export default Home;
