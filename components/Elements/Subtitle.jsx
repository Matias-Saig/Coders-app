import { Text } from "react-native";
import { globalStyles } from "../../global/globalStyles";
const Subtitle = ({children}) => {
  return (
      <Text style={[globalStyles.subtitle]}>{children}</Text>
  );
};

export default Subtitle;
