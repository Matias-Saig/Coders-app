import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TopBar from "./components/TopBar/TopBar";
import { globalStyles } from "./global/globalStyles";
import ContactBook from "./components/ContactBook/ContactBook";

export default function App() {
  return (
    <View style={[globalStyles.containerCenter]}>
      <TopBar />

      <ContactBook />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  
});
