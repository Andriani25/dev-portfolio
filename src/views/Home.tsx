import React, { FC } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import Header from "../components/Header";
import ResumeCard from "../components/ResumeCard";
import Experience from "../components/Experience";
import Projects from "../components/Projects";

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
        <Projects />
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
});

export default Home;
