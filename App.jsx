import { StyleSheet, View } from "react-native";
import { globalColor, globalStyles } from "./global/globalStyles";
import { useFonts } from "expo-font";
import { fontsCollection } from "./global/fonts";
import Login from "./screens/Login";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import ScreensNavigation from "./Navigation/ScreensNavigation";

export default function App() {
  const [isLogin, setIsLogin] = useState(false);

  const [fontLoaded] = useFonts(fontsCollection);
  if (!fontLoaded) return null;

  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };

  return (
    <View style={[globalStyles.BG, styles.container]}>
      <StatusBar
        animated={true}
        backgroundColor={globalColor.lowLight}
        style="light"
      />

      {!isLogin ? <Login fx={toggleLogin} /> : <ScreensNavigation />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignContent: "center",
  },
});
