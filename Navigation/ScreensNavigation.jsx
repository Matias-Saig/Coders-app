import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login.jsx";
import ScreensTabs from "./ScreensTabs.jsx";
import TopBar from "../components/TopBar/TopBar.jsx";
import SingUp from "../screens/SingUp.jsx";

const Stack = createNativeStackNavigator();

const ScreensNavigation = () => {
 
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={() => {
            return {
              animation: "slide_from_right",
              header: ({navigation, route}) => {
              return (
                <TopBar navigation={navigation} title={route.name}/>
              )
             }
            };
          }}
        >
           <Stack.Screen name="Login" component={Login} />
           <Stack.Screen name="Registrarse" component={SingUp} />
           <Stack.Screen name="Classic Pocket" component={ScreensTabs}/>  
         
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default ScreensNavigation;
