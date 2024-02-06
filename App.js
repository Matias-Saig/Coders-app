import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import TopBar from "./components/TopBar/TopBar";
import { globalStyles } from "./global/globalStyles";
import ContactBook from "./components/ContactBook/ContactBook";

export default function App() {
  return (
    <View style={[globalStyles.containerCenter, globalStyles.BG]}>
      <TopBar />

      <ContactBook />

      <StatusBar style="auto" />
    </View>
  );
}

// const styles = StyleSheet.create({});
