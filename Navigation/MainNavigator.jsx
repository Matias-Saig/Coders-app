import ScreensLoginNav from "./ScreensLoginNav";
import ScreensTabs from "./ScreensTabs";
import { useDispatch, useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { useGetProfileImageQuery } from "../app/Service/userProfileApi";
import { useEffect } from "react";
import { setImageCam } from "../features/Auth/AuthSlice";
const MainNavigator = () => {
  const user = useSelector((state) => state.auth);
  // const {email,localId} = useSelector((state) => state.auth.value);
const dispatch = useDispatch()
const {data:userImage, error, isLoading} = useGetProfileImageQuery(user.localId)

useEffect( ()=>{ 
  if(userImage) { dispatch(setImageCam(userImage))}
}, [])

  return (
    <NavigationContainer>
      {user.idToken ? <ScreensTabs /> : <ScreensLoginNav />}
    </NavigationContainer>
  );
};

export default MainNavigator;