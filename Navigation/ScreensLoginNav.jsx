import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login.jsx";
import TopBar from "../components/TopBar/TopBar.jsx";
import SingUp from "../screens/SingUp.jsx";

const Stack = createNativeStackNavigator();

const ScreensLoginNav = () => {
 
  return (
    <>
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
         
        </Stack.Navigator>
  </>
  );
};

export default ScreensLoginNav;
