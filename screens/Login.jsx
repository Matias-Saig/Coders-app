import { Pressable, StyleSheet, Text, View } from "react-native";
import Logo from "../components/TopBar/Logo";
import Title from "../components/TopBar/Title";
import Subtitle from "../components/Elements/Subtitle";
import Icons from "../components/Elements/icons";
import { globalColor } from "../global/globalStyles";
import fonts from "../global/fonts";
const Login = ({ fx }) => {
  return (
    <View style={{marginTop:50}}>
      <View style={[styles.container, styles.logo]}>
        <Logo />
        <Title />
      </View>

      <View style={[styles.container, styles.text]}>
        <Subtitle addStyle={styles.subtitle}>Invitado</Subtitle>
        <Pressable style={styles.button} onPress={fx}>
          <Text style={styles.buttonText}> Ingresar </Text>
          <Icons refer="login" size={20} color={globalColor.white} />
        </Pressable>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    padding: 50,
    borderRadius: 5,
  },
  logo: {
    backgroundColor: globalColor.midShadow,
  },
  subtitle: {
    fontSize: 35,
    color: globalColor.highLight,
  },
  text: {
    backgroundColor: globalColor.highDark,
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: globalColor.detailLight,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    color: globalColor.white,
    fontFamily: fonts.sansOne,
    fontSize: 20,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
