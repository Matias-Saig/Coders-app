import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { globalColor, globalStyles } from "../global/globalStyles";
import { useState } from "react";
import { useSignUpMutation } from "../app/Service/userAuth";
import { registerSchema } from "../Validation/authSchema";
import { setUser } from "../features/Auth/AuthSlice";
import { useDispatch } from "react-redux";

const SingUp = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const [triggerRegister] = useSignUpMutation();


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
      setErrorConfirmPassword("");

      switch (error.path) {
        case "email":
          setErrorEmail(error.message);
          break;
        case "password":
          setErrorPassword(error.message);
          break;
        case "confirmPassword":
          setErrorConfirmPassword(error.message);
          break;
        default:
          break;
      }
    }
  };

  
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
      {errorEmail && (
        <Text>{errorEmail}</Text>
      )}

      <TextInput
        style={globalStyles.input}
        onChangeText={(text) => {
          setPassword(text);
        }}
        value={password}
        placeholder="Contraseña"
        secureTextEntry={true}
      />
      {errorPassword && (
        <Text>{errorPassword}</Text>
      )}

      <TextInput
        style={globalStyles.input}
        onChangeText={(text) => {
          setConfirmPassword(text);
        }}
        value={confirmPassword}
        placeholder="Repetir contraseña"
        secureTextEntry={true}
      />
      {errorConfirmPassword && (
        <Text>
          {errorConfirmPassword}
        </Text>
      )}

        <Pressable
          onPress={onSubmit}
          style={[globalStyles.buttons, styles.sendButton, styles.button]}
        >
          <Text style={[globalStyles.buttonsText, styles.sendText]}>
            revisar
          </Text>
        </Pressable>
    </View>
    
  );
};

export default SingUp;


const styles = StyleSheet.create({
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
