import { StyleSheet, View } from "react-native";
import Logo from "./Logo";
import Titles from "./Titles";
const TopBar = () => {
  return (
    <View style={styles.container}>
      <Logo flexWidth={1} />
      <Titles flexWidth={3} />
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
  },
});
