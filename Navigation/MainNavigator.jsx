import ScreensLoginNav from "./ScreensLoginNav";
import ScreensTabs from "./ScreensTabs";
import { useDispatch, useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { useGetProfileImageQuery } from "../app/Service/userProfileApi";
import { useEffect } from "react";
import { setImageCam, setUser } from "../features/Auth/AuthSlice";
import { fetchSession } from "../db";
const MainNavigator = () => {
  const user = useSelector((state) => state.auth);
  // const {email,localId} = useSelector((state) => state.auth.value);
const dispatch = useDispatch()
const {data:userImage, error, isLoading} = useGetProfileImageQuery(user.localId)

useEffect( ()=>{ 
  if(userImage) { dispatch(setImageCam(userImage))}
}, [])

// SQLite
useEffect( ()=> {
  (async () => {
    try {
      const session = await fetchSession()
      console.log(session)
      if (session?.rows.lenght) {
        const user = session.rows._array[0]
        dispatch(setUser(user))
      }
    } catch (error) {
      console.log(error.message);
    }
  })()
}, [])

  return (
    <NavigationContainer>
      {user.idToken ? <ScreensTabs /> : <ScreensLoginNav />}
    </NavigationContainer>
  );
};

export default MainNavigator;