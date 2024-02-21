import TopBar from "../components/TopBar/TopBar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ContactBook from "../screens/ContactBook";
import Home from "../screens/Home.jsx";
// import { View } from "react-native-web";
// import { globalStyles } from "../global/globalStyles";

const Stack = createNativeStackNavigator();

const ScreensNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={({ route, navigation }) => {
          return {
            header: () => {
              return (
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
              );
            },
          };
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ContactBook" component={ContactBook} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ScreensNavigation;
