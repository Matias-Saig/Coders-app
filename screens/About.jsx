import { Image, StyleSheet, Text, View } from "react-native";
import Subtitle from "../components/Elements/Subtitle";
import { globalColor } from "../global/globalStyles";
import { useSelector } from "react-redux";
import FormButton from "../components/Elements/FormButton";
import { useGetProfileImageQuery } from "../app/Service/userProfileApi";
import { useEffect, useState } from "react";

const About = ({ navigation }) => {
  const user = useSelector((state) => state.auth);
  const profile = useGetProfileImageQuery(user.localId);
  const [image, setImage] = useState("");
  
    
  useEffect(() => {
    setImage(user.value?.imageCam);
  }, [user, profile]);
  // const image = profile.data?.image

  return (
    <View style={styles.containerSup}>
      <Subtitle addStyle={styles.h2}>Invitado</Subtitle>
      <Image
        source={
          image ? { uri: image } : require("../assets/img/user_avatar.png")
        }
        style={styles.avatar}
        resizeMode="cover"
      />

      <FormButton
        fx={async () => {
          navigation.navigate("Foto de perfil");
        }}
        text="Cambiar foto de perfil"
        icon={true}
        iconName="camera"
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
    textTransform: "uppercase",
  },
  avatar: {
    alignSelf: "center",
    marginVertical: 20,
    width: 128,
    height: 128,
    borderRadius: 30,
  },
});
