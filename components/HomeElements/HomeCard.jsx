import { StyleSheet, Text, View } from "react-native";
import { globalColor } from "../../global/globalStyles";
const HomeCard = ({ detail, coinNumber, coinSpan }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.detailText, styles.text]}>{detail}</Text>
      <View style={styles.coinContainer}>
        <Text style={styles.text}>{coinNumber}</Text>
        <Text style={styles.coinSpan}>{coinSpan}</Text>
      </View>
    </View>
  );
};

export default HomeCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: globalColor.highLight,
    width: "100%",
    borderRadius: 7,
    marginVertical: 5,
    flexDirection: "row",
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  detailText: {
    flex: 3,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: globalColor.midShadow,
  },
  coinContainer: {
    flexDirection: "row",
    flex: 1,
  },
  coinSpan: {
    fontSize: 10,
    textAlignVertical: "top",
    color: globalColor.midShadow,
  },
});
