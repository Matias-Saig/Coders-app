import TopBar from "../components/TopBar/TopBar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ContactBook from "../screens/ContactBook";
import Home from "../screens/Home.jsx";
import { View } from "react-native";
import NavElement from "./NavElement.jsx";
import { useState } from "react";
// import { View } from "react-native-web";
// import { globalStyles } from "../global/globalStyles";

const Stack = createNativeStackNavigator();

const ScreensNavigation = () => {
  const [isHome, setIsHome] = useState(false);
  const [isContacts, setIsContacts] = useState(false);

  const toggleActive = () => {
    setIsHome(!isHome);
    setIsContacts(!isContacts);
  };

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={({ route, navigation }) => {
            return {
              header: () => {
                return (
                  <>
                    <TopBar
                      navigation={navigation}
                      title={
                        route.name === "Home"
                          ? "Classic Pocket"
                          : route.name === "ContactBook"
                            ? "Agenda"
                            : null
                      }
                    />
                    <View
                      style={{
                        flexDirection: "row",
                      }}
                    >
              {/*         {route.name === "Home" &&  setIsHome(true)}
                      {route.name === "ContactBook" && setIsContacts(true)} */}

                      <NavElement refer="home" isActive={isHome}
                      fx={
                        () => {navigation.navigate('Home')
                     }
                      }>
                        Inicio
                      </NavElement>
                      <NavElement refer="book" isActive={isContacts}
                      fx={
                        () => {
                          
                          navigation.navigate('ContactBook')
                      }
                      }>
                        Agenda
                      </NavElement>
                    </View>
                  </>
                );
              },
            };
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ContactBook" component={ContactBook} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default ScreensNavigation;
