import { Pressable, StyleSheet, Text, View } from "react-native";
import Subtitle from "../components/Elements/Subtitle";
import Icons from "../components/Elements/Icons";
import { globalColor } from "../global/globalStyles";
import fonts from "../global/fonts";
const Login = ({ navigation }) => {
  return (
      <View style={[styles.container, styles.text]}>
        <Subtitle addStyle={styles.subtitle}>Invitado</Subtitle>
        <Pressable style={styles.button} onPress={ ()=> navigation.navigate("Classic Pocket")
        }>
          <Text style={styles.buttonText}> Ingresar </Text>
          <Icons refer="login" size={20} color={globalColor.white} />
        </Pressable>
      </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    marginTop: "25%",
    padding: 50,
    borderRadius: 5,
    height:"45%",
    width: "90%",
    alignSelf:"center"
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
    fontFamily: fonts.sans,
    fontSize: 20,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
