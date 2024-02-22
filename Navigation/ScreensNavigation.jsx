import TopBar from "../components/TopBar/TopBar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ContactBook from "../screens/ContactBook";
import Home from "../screens/Home.jsx";
import { View } from "react-native";
import NavElement from "./NavElement.jsx";
import { useState } from "react";
import About from "../screens/About.jsx";
import NavMenu from "./NavMenu.jsx";

const Stack = createNativeStackNavigator();

const ScreensNavigation = () => {
  const [isHome, setIsHome] = useState(false);
  const [isContacts, setIsContacts] = useState(false);
  const [isUser, setIsUser] = useState(false);

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={({ route, navigation }) => {
            return {
              animation: "slide_from_right",
              header: () => {
                return (
                  <>
                    {route.name === "Classic Pocket"
                      ? setIsHome(true)
                      : setIsHome(false)}
                    {route.name === "Contactos"
                      ? setIsContacts(true)
                      : setIsContacts(false)}
                    {route.name === "Mis datos"
                      ? setIsUser(true)
                      : setIsUser(false)}

                    <TopBar navigation={navigation} title={route.name} />
                    <NavMenu
                      navigation={navigation}
                      isContacts={isContacts}
                      isHome={isHome}
                      isUser={isUser}
                    />
                  </>
                );
              },
            };
          }}
        >
          <Stack.Screen name="Classic Pocket" component={Home} />
          <Stack.Screen name="Contactos" component={ContactBook} />
          <Stack.Screen name="Mis datos" component={About} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default ScreensNavigation;
