import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import NavMenu from "./NavMenu";
import Home from "../screens/Home";
import ContactBook from "../screens/ContactBook";
import ScreensProfileStack from "./ScreensProfileStack";
import { useGetUserQuery } from "../app/Service/userAccountApi";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../features/Auth/AuthSlice";
import { useEffect } from "react";

const Tab = createMaterialTopTabNavigator();

function ScreensTabs() {

  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch()
  const localId = user.localId
  const {data:session} = useGetUserQuery(localId)
  console.log("session", session);

  useEffect( ()=>{
    if (session) {
      dispatch(setUser({localId,
    session}
      ))

    }
  }, [])

  console.log("user + sesion", user);

  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      tabBar={({ navigation }) => {
        return <NavMenu navigation={navigation} />
      }}
      tabBarPosition="bottom"
    >
      <Tab.Screen name="Inicio" component={Home} />
      <Tab.Screen name="Contactos" component={ContactBook} />
      <Tab.Screen name="Mis datos" component={ScreensProfileStack} />
    </Tab.Navigator>
  );
}

export default ScreensTabs;
