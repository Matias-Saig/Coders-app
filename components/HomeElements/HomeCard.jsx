import { StyleSheet, Text, View } from "react-native";
const HomeCard = ({detail, coinNumber, coinSpan}) => {
  return (
    <View styles={styles.container}>
      <Text style={styles.detailText}>{detail}</Text>
      <View style={styles.coinContainer}>
        <Text style={styles.coinNumber}>{coinNumber}</Text>
        <Text style={styles.coinSpan}>{coinSpan}</Text>
      </View>
    </View>
  );
};

export default HomeCard;

const styles = StyleSheet.create({
  
  container:{

  },
  detailText:{

  },
  coinContainer:{

  },
    coinNumber: {
        fontSize: 16,
      },
      coinSpan: {
        fontSize: 10,
        textAlignVertical: "top",
      },
});
