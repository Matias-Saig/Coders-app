import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const ScreensProfileStack = () => {
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
 )
}

export default ScreensProfileStack

const styles = StyleSheet.create({})