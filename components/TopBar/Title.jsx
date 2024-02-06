import { StyleSheet, Text, View } from "react-native";
import { globalColor, globalStyles } from "../../global/globalStyles";

const Title = ({ flexWidth }) => {
  const styles = StyleSheet.create({
    h1: {
      fontSize: 26,
      color: globalColor.highLight,
    },

    titleContainer: {
      flex: flexWidth,
      justifyContent: "center",
    },
  });

  return (
    <View style={[styles.titleContainer]}>
      <Text style={[globalStyles.title, styles.h1]}>Classic Pocket</Text>
    </View>
  );
};

export default Title;
