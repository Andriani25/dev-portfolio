import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import Home from "./src/views/Home";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <LinearGradient
            style={styles.container}
            colors={["#020024", "#6c91cc"]}
          >
            <Home />
          </LinearGradient>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 500,
    justifyContent: "center",
  },
});
