import { Image, StyleSheet, View } from "react-native";
import { globalStyle } from "../../global/globalStyle";
const Logo = ({ flexWidth }) => {
  const styles = StyleSheet.create({
    logo: {
      height: 64,
      width: 64
    },
    logoContainer: {
      flex: flexWidth,
    },
  });

  return (
    <View style={[styles.logoContainer, globalStyle.containerCenterFull]}>
      <Image
        style={styles.logo}
        source={require("../../assets/Logo/logoClassicPocket.png")}
      />
    </View>
  );
};

export default Logo;
