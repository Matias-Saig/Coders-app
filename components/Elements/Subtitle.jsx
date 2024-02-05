import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../../global/globalStyles";
const Subtitle = ({children}) => {
  return (
    <View>
      <Text style={[globalStyles.subtitle]}>{children}</Text>
    </View>
  );
};

export default Subtitle;
