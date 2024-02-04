import { StyleSheet, Text, View } from "react-native";
import { globalStyle } from "../../global/globalStyle";
const Titles = ({flexWidth}) => {

    const styles = StyleSheet.create({
        h1: {  
          fontSize: 28,
          paddingTop: 5,
          paddingBottom: 5,
          color: "#fff",
          backgroundColor: "#262626",
          textAlign: "center",
        },
        h2: {
          fontSize: 20,
          paddingVertical: 5,
          color: "#eee",
          backgroundColor: "#464646",
          textAlign: "center",
        },
        titleContainer: {
            flex: flexWidth,
          },
      });

      
  return (
    <View style={styles.titleContainer}>
      <Text style={[globalStyle.title, styles.h1]}>Classic Pocket</Text>
      <Text style={[globalStyle.title, styles.h2]}>Billetera virtual</Text>
    </View>
  );
};

export default Titles;