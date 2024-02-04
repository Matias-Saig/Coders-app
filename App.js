import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TopBar from "./components/TopBar/TopBar";
import { globalStyle } from "./global/globalStyle";

export default function App() {
  return (
    <View style={[globalStyle.containerCenter, styles.cont]}>
<TopBar />

      <Text style={styles.p}>texto de practica</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  p: {
    fontSize: 24,
    color: "#444",
    fontWeight: "bold",
    marginTop: 30,
  },
  cont: {
    backgroundColor:'slategray'
  }

 
});
