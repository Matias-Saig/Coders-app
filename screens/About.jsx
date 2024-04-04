import { Image, StyleSheet, Text, View } from "react-native";
import Subtitle from "../components/Elements/Subtitle";
import { globalColor } from "../global/globalStyles";
import { useSelector } from "react-redux";
import { useGetProfileImageQuery } from "../app/Service/userProfileApi";
import { deleteUserSession } from "../db";
import useSessionGet from "../Hooks/useSessionGet";
import SessionButton from "../components/Elements/SessionButton";
import { useDeleteUserMutation } from "../app/Service/userAccountApi";

const About = ({ navigation }) => {
  const user = useSelector((state) => state.auth);
  const { isLoading, session } = useSessionGet();
  const [triggerDeleteUser] = useDeleteUserMutation();

  // Camera Device
  const profile = useGetProfileImageQuery(user.localId);
  const image = profile.data?.image;

  return (
    <View style={styles.containerSup}>
      {!isLoading ? (
        <>
          <Subtitle addStyle={styles.h2}>{session?.profile?.name}</Subtitle>
          <Image
            source={
              image ? { uri: image } : require("../assets/img/user_avatar.png")
            }
            style={styles.avatar}
            resizeMode="cover"
          />

          <SessionButton
            fx={async () => {
              navigation.navigate("Foto de perfil");
            }}
            text="Cambiar foto de perfil"
            icon={true}
            iconName="camera"
          />

          <View style={styles.container}>
            <Text style={styles.subtitle}>CVU</Text>
            <Text style={styles.text}>{session?.profile?.cvu}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.subtitle}>Alias</Text>
            <Text style={styles.text}>{session?.profile?.alias}</Text>
          </View>

          {/* SQLite */}
          <SessionButton
            fx={async () => {
              await deleteUserSession();
              navigation.navigate("Login");
            }}
            text="Cerrar sesión"
            icon={true}
            iconName="log-out"
            close={true}
          />

          {/*  Firebase */}
          <SessionButton
            fx={async () => {
              await triggerDeleteUser(session?.userId);
              navigation.navigate("Login");
            }}
            text="Borrar todos los datos"
            icon={true}
            iconName="cross"
            close={true}
            del={true}
          />
        </>
      ) : (
        <Text>cargando datos</Text>
      )}
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
