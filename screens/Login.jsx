import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import Subtitle from "../components/Elements/Subtitle";
import Icons from "../components/Elements/Icons";
import { globalColor } from "../global/globalStyles";
import fonts from "../global/fonts";
import {  useGetUsersListQuery } from "../app/Service/userAccountApi";
import { SafeAreaView } from "react-native-safe-area-context";
const Login = ({ navigation }) => {


  const {data: usersList, isLoading, isError, error} = useGetUsersListQuery()

  console.log(usersList);
  return (
    /*   */


      <SafeAreaView style={styles.list}>
      {isError && (
        <Text
          style={{
            justifyContent: "center",
            alignItems: "center",
            fontSize: 48,
            color: "tomato",
          }}
        >
          Error de carga
        </Text>
      )}

      {isLoading ? (
        <Text
          style={{
            justifyContent: "center",
            alignItems: "center",
            fontSize: 48,
            color: "aqua",
          }}
        >
          Cargando datos
        </Text>
      ) : (
        <>
         
          <FlatList
            data={usersList}
            renderItem={({ item }) => 
            
            <View style={[styles.container, styles.text]}>
            <Subtitle addStyle={styles.subtitle}>{item}</Subtitle>
            <Pressable style={styles.button} onPress={ () => navigation.navigate("Classic Pocket")
            }>
              <Text style={styles.buttonText}> Ingresar </Text>
              <Icons refer="login" size={20} color={globalColor.white} />
            </Pressable>
          </View>
          
          
          }
            keyExtractor={(item) => item}
          />
        </>
      )}
    </SafeAreaView>
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
