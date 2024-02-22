import { Image, StyleSheet, Text, View } from "react-native";
import Subtitle from "../components/Elements/Subtitle";
import { globalColor } from "../global/globalStyles";
const About = ({ navigation }) => {
  return (
    <View style={styles.containerSup}>
      <Subtitle addStyle={styles.h2}>Invitado</Subtitle>
      <Image
        source={require("../assets/img/user_avatar.png")}
        style={styles.avatar}
      />

      <View style={styles.container}>
        <Text style={styles.subtitle}>CVU</Text>
        <Text style={styles.text}>5859039111100088318423</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.subtitle}>Alias</Text>
        <Text style={styles.text}>invitado.classicpocket</Text>
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  containerSup: {
    width: "80%",
    marginHorizontal: "10%",
  },
  container: {
    flexDirection: "row",
    gap: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  subtitle: {
    letterSpacing: 1,
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    flex: 1,
    color: globalColor.midDark,
  },
  h2: {
    fontSize: 36,
  },
  text: {
    fontSize: 18,
    color: globalColor.midLight,
    flex: 3,
    textTransform:"uppercase"
  },
  avatar: {
    alignSelf: "center",
    marginVertical: 20,
  },
});
