import { Pressable, StyleSheet, Text, View } from "react-native";
import { globalColor, globalStyles } from "../global/globalStyles";
import { useState } from "react";
import { useLoginMutation } from "../app/Service/userAuth";
import { loginSchema } from "../Validation/authSchema";
import { setUser } from "../features/Auth/AuthSlice";
import { useDispatch } from "react-redux";
import ErrorMsg from "../components/Elements/ErrorMsg";
import FormInput from "../components/Elements/FormInput";
import FormButton from "../components/Elements/FormButton";
import FormContainer from "../components/Elements/FormContainer";
const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const [triggerLogin] = useLoginMutation();

  const onSubmit = async () => {
    try {
      loginSchema.validateSync({ email, password });
      const { data } = await triggerLogin({ email, password });
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

      switch (error.path) {
        case "email":
          setErrorEmail(error.message);
          break;
        case "password":
          setErrorPassword(error.message);
          break;
        default:
          break;
      }
    }
  };

  return (
    <FormContainer>
      <FormInput label="Email" fx={setEmail} value={email} place="Email" />
      <ErrorMsg error={errorEmail} />

      <FormInput
        label="Contraseña"
        fx={setPassword}
        value={password}
        place="Contraseña"
        password={true}
      />
      <ErrorMsg error={errorPassword} />

      <FormButton fx={onSubmit} text="Ingresar" icon={true} iconName="login" />

      <Pressable onPress={() => navigation.navigate("Registrarse")}>
        <Text style={[globalStyles.paragraph, styles.singUp]}>
          No tienes usuario? aquí puedes registrarte
        </Text>
      </Pressable>
    </FormContainer>
  );
};

export default Login;

const styles = StyleSheet.create({
  singUp: {
    color: globalColor.alert,
    marginTop: 20,
    fontWeight: "600",
    borderBottomWidth: 2,
    borderBottomColor: globalColor.detailDark,
  },
});
