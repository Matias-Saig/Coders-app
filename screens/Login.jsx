import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Subtitle from "../components/Elements/Subtitle";
import Icons from "../components/Elements/Icons";
import { globalColor, globalStyles } from "../global/globalStyles";
import fonts from "../global/fonts";
import { useGetUsersListQuery } from "../app/Service/userAccountApi";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { useLoginMutation, useSignUpMutation } from "../app/Service/userAuth";
import { loginSchema, registerSchema } from "../Validation/authSchema";
import { setUser } from "../features/Auth/AuthSlice";
import { useDispatch } from "react-redux";
const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [triggerLogin] = useLoginMutation();
  const [triggerRegister] = useSignUpMutation();

  const { data: usersList, isLoading, isError, error } = useGetUsersListQuery();

  // console.log(result);

  const onSubmit = async () => {
    try {
      registerSchema.validateSync({ email, password });
      const { data } = await triggerRegister({ email, password });
      dispatch(
        setUser({
          email: data.email,
          idToken: data.idToken,
          localId: data.localId,
        }),
      );
    } catch (error) {
      setErrorEmail("");
      setErrorPassword("");
      //  setErrorConfirmPassword("")
      switch (error.path) {
        case "email":
          setErrorEmail(error.message);
          break;
        case "password":
          setErrorPassword(error.message);
          break;
        /* case "confirmPassword":
            setErrorConfirmPassword(error.message)
            break */
        default:
          break;
      }
    }
  }

    /*  try {

        loginSchema.validateSync({email,password})
        const {data} = await  triggerLogin({email,password})
        dispatch(setUser({email:data.email,idToken:data.idToken,localId:data.localId}))

      } catch (error) {

        setErrorEmail("")
        setErrorPassword("")

        switch(error.path){
          case "email":
            setErrorEmail(error.message)
            break
          case "password":
            setErrorPassword(error.message)
            break
          default:
            break
        }

      }
 
    } */

    // triggerSignUp({email, password})
    // console.log("la respuesta es  ", result);

    return (
      <View style={globalStyles.containerCenter}>
        <Text style={globalStyles.inputLabel}>Nombre</Text>
        <TextInput
          style={globalStyles.input}
          onChangeText={(text) => {
            setEmail(text);
          }}
          value={email}
          placeholder="Email"
        />
        {errorEmail ? <View><Text style={{color:"tomato", fontSize:24}}>{errorEmail}</Text></View> : null}


        <TextInput
          style={globalStyles.input}
          onChangeText={(text) => {
            setPassword(text);
          }}
          value={password}
          placeholder="Contraseña"
          secureTextEntry={true}
        />
        {errorPassword ? <View><Text style={{color:"tomato", fontSize:24}}>{errorPassword}</Text></View> : null}

        <View style={styles.buttonsContainer}>
          <Pressable
            onPress={onSubmit}
            style={[globalStyles.buttons, styles2.sendButton, styles2.button]}
          >
            <Text style={[globalStyles.buttonsText, styles2.sendText]}>
              revisar
            </Text>
          </Pressable>
        </View>
      </View>
      /* 
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
    </SafeAreaView> */
    );
  };

export default Login;

const styles = StyleSheet.create({
  container: {
    marginTop: "25%",
    padding: 50,
    borderRadius: 5,
    height: "45%",
    width: "90%",
    alignSelf: "center",
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

const styles2 = StyleSheet.create({
  sendButton: {
    backgroundColor: globalColor.detailLight,
    marginBottom: 20,
  },
  retryButton: {
    backgroundColor: globalColor.midShadow,
  },
  retryText: {
    color: globalColor.highShadow,
  },
  button: {
    width: "40%",
    alignSelf: "center",
    elevation: 3,
    marginBottom: 10,
  },
  sendText: {
    color: globalColor.midDark,
    fontSize: 16,
    textAlign: "center",
  },
  scroll: {
    width: "100%",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "90%",
    marginTop: 20,
  },
});
