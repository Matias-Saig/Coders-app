import { StyleSheet, Text, View } from "react-native";
import { globalColor, globalStyles } from "../../global/globalStyles";

const Title = ({ flexWidth, title = "Classic Pocket", align = "left" }) => {
  const styles = StyleSheet.create({
    h1: {
      fontSize: 30,
      color: globalColor.highLight,
      textAlign: align,
    },
    titleContainer: {
      flex: flexWidth,
      justifyContent: "center",
    },
  });

  return (
    <View style={[styles.titleContainer]}>
      <Text style={[globalStyles.title, styles.h1]}>{title}</Text>
    </View>
  );
};

export default Title;
