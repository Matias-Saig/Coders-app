import ScreensLoginNav from "./ScreensLoginNav";
import ScreensTabs from "./ScreensTabs";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
const MainNavigator = () => {
  const user = useSelector((state) => state.auth);

  return (
    <NavigationContainer>
      {user.idToken ? <ScreensTabs /> : <ScreensLoginNav />}
    </NavigationContainer>
  );
};

export default MainNavigator;