import { StyleSheet, Text, View } from "react-native";
import { globalColor } from "../../global/globalStyles";
import fonts from "../../global/fonts";
const HomeDisplay = () => {
  return (
    <View style={styles.containerDisplay}>
      <View style={styles.coinContainer}>
        <Text style={[styles.coinNumber, styles.coinColor, styles.text]}>
          $1234
        </Text>
        <Text style={[styles.coinSpan, styles.coinColor, styles.text]}>56</Text>
      </View>
      <Text style={[styles.textDetail, styles.text]}>Dinero disponible</Text>
    </View>
  );
};

export default HomeDisplay;

const styles = StyleSheet.create({
  containerDisplay: {
    marginVertical: 20,
  },
  text: {
    fontFamily: fonts.serif,
    fontWeight: "bold",
  },
  textDetail: {
    fontSize: 14,
    textAlign: "center",
    fontStyle: "italic",
    color: globalColor.midLight,
  },
  coinContainer: {
    flexDirection: "row",
    gap: 2,
    justifyContent: "center",
  },
  coinNumber: {
    fontSize: 46,
  },
  coinSpan: {
    fontSize: 12,
    textAlignVertical: "top",
  },
  coinColor: {
    color: globalColor.lowLight,
  },
});
