import { Platform, StatusBar, StyleSheet, View } from "react-native";
import Logo from "./Logo";
import Title from "./Title";
import { globalColor } from "../../global/globalStyles";
const TopBar = ({title = "Classic Pocket" }) => {
  return (
    <View style={styles.container}>
      <Logo flexWidth={1} />
      <Title flexWidth={3} title={title } />
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",    
    backgroundColor: globalColor.midDark,
    paddingVertical:10,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  }
});
