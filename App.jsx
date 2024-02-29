import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

// Variables globales
import { globalColor, globalStyles } from "./global/globalStyles";

// Fuentes
import { useFonts } from "expo-font";
import { fontsCollection } from "./global/fonts";

// Screens
import ScreensNavigation from "./Navigation/ScreensNavigation";

// Store
import { store } from "./app/store";
import { Provider } from "react-redux";

export default function App() {

  const [fontLoaded] = useFonts(fontsCollection);
  if (!fontLoaded) return null;

  return (
    <Provider store={store}>
      <View style={[globalStyles.BG, styles.container]}>
        <StatusBar
          animated={true}
          backgroundColor={globalColor.lowLight}
          style="light"
        />

        <ScreensNavigation />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignContent: "center",
  },
});
