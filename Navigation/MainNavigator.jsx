import ScreensLoginNav from "./ScreensLoginNav";
import ScreensTabs from "./ScreensTabs";
import { useDispatch, useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { useGetProfileImageQuery } from "../app/Service/userProfileApi";
import { useEffect, useState } from "react";
import { setImageCam, setUser } from "../features/Auth/AuthSlice";
import { getUserSession } from "../db";
const MainNavigator = () => {

  const [userLog, setUserLog] = useState(false);

  const user = useSelector((state) => state.auth);
  // const {email,localId} = useSelector((state) => state.auth.value);
const dispatch = useDispatch()
const {data:userImage, error, isLoading} = useGetProfileImageQuery(user.localId)

// console.log("esto es data", userImage);
useEffect( ()=>{ 
  if(userImage) { dispatch(setImageCam(userImage))}
}, [])


// SQLite
/* useEffect(()=>{
  ( async ()=>{
   const session = await fetchSession()
   
   if(session.rows.length){
    const now = Math.floor(Date.now() / 1000)
    const updateAt = session.rows._array[0].updateAt
    const sessionTime = now - updateAt
    if(sessionTime < 3600 ){
      const user = session.rows._array[0]
      dispatch(setUser(user))
    }
      
      
   }
  })()
},[]) */


  useEffect(() => {
    const checkUserSession = async () => {
      const userSession = await getUserSession();
      if (userSession) {
        // setUserLog(true);
        console.log("check");
      }
    };

    checkUserSession();
  }, []);
  


  return (
    <NavigationContainer>
      {user.idToken ? <ScreensTabs /> : <ScreensLoginNav />}
    </NavigationContainer>
  );
};

export default MainNavigator;