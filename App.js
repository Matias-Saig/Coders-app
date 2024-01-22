import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Classic Pocket</Text>
      <Text style={styles.h2}>Billetera virtual</Text>
      <Text style={styles.p}>Hola coders!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "ivory",
    alignItems: "center",
    justifyContent: "center",
  },
  h1: {
    fontFamily: "serif",
    fontStyle: "italic",
    fontSize: 28,
    paddingTop: 5,
    paddingBottom: 5,
    color: "#fff",
    backgroundColor: "#262626",
    width: "100%",
    textAlign: "center",
  },
  h2: {
    fontFamily: "serif",
    fontStyle: "italic",
    fontSize: 20,
    paddingVertical: 5,
    color: "#eee",
    backgroundColor: "#464646",
    width: "100%",
    textAlign: "center",
  },
  p: {
    fontSize: 24,
    color: "#444",
    fontWeight: "bold",
    marginTop: 30,
  },
});
