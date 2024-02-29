import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import NavMenu from "./NavMenu";
import Home from "../screens/Home";
import ContactBook from "../screens/ContactBook";
import About from "../screens/About";

const Tab = createMaterialTopTabNavigator();

function ScreensTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      tabBar={({ navigation }) => {
        return <NavMenu navigation={navigation} />;
      }}
      tabBarPosition="bottom"
    >
      <Tab.Screen name="Inicio" component={Home} />
      <Tab.Screen name="Contactos" component={ContactBook} />
      <Tab.Screen name="Mis datos" component={About} />
    </Tab.Navigator>
  );
}

export default ScreensTabs;
