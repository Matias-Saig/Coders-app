import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import TopBar from "./components/TopBar/TopBar";
import { globalColor, globalStyles } from "./global/globalStyles";
import ContactBook from "./screens/ContactBook";
import { useFonts } from "expo-font";
import { fontsCollection } from "./global/fonts";
import Login from "./screens/Login";
import { useState } from "react";
import Home from "./screens/Home";
import Tab from "./components/Elements/Tab";

export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [homeActive, setHomeActive] = useState(true);
  const [contactBookActive, setContactBookActive] = useState(false);

  const [fontLoaded] = useFonts(fontsCollection);
  if (!fontLoaded) return null;

  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };

  const toggleSwitch = () => {
    setHomeActive(!homeActive)
    setContactBookActive(!contactBookActive)
  }

  return (
    <View style={[globalStyles.containerCenter, globalStyles.BG]}>
      {!isLogin ? (
        <Login fx={toggleLogin} />
      ) : (
        <>
          
          <StatusBar
            animated={true}
            backgroundColor={globalColor.midDark}
            barStyle="light-content"
          />
          <TopBar />

          <View style={styles.tabs}>
<Tab refer={"home"} fx={toggleSwitch} isActive={homeActive} > Inicio</Tab>
<Tab refer={"contacts"} fx={toggleSwitch} isActive={contactBookActive} > Agenda</Tab>
</View>

{homeActive && <Home />}

          {contactBookActive && <ContactBook /> }
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  tabs: {
    width:"80%",
    flexDirection:"row",
    gap:1,
    marginVertical:10
  }
});
