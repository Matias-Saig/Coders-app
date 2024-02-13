import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import TopBar from "./components/TopBar/TopBar";
import { globalColor, globalStyles } from "./global/globalStyles";
import ContactBook from "./screens/ContactBook";

export default function App() {
  return (
    <View style={[globalStyles.containerCenter, globalStyles.BG]}>
      <TopBar />

      <ContactBook />

      <StatusBar
        animated={true}
        backgroundColor={globalColor.lowLight}
        barStyle="auto"

      />
    </View>
  );
}

// const styles = StyleSheet.create({});
