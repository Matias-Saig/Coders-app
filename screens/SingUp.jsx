import { useState } from "react";
import { useSignUpMutation } from "../app/Service/userAuth";
import { registerSchema } from "../Validation/authSchema";
import { setUser } from "../features/Auth/AuthSlice";
import { useDispatch } from "react-redux";
import FormInput from "../components/Elements/FormInput";
import ErrorMsg from "../components/Elements/ErrorMsg";
import FormButton from "../components/Elements/FormButton";
import FormContainer from "../components/Elements/FormContainer";
import { Alert } from "react-native";
import LoadingMsg from "../components/Elements/LoadingMsg";

const SingUp = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const [triggerRegister] = useSignUpMutation();

  const [isLoading, setIsLoading] = useState(false);

  const [loginError, setLoginError] = useState("");

  const onSubmit = async () => {
    try {
      registerSchema.validateSync({ email, password, confirmPassword });
      const { data } = await triggerRegister({ email, password });
      dispatch(
        setUser({
          email: data.email,
          idToken: data.idToken,
          localId: data.localId,
        }),
      );
      Alert.alert("Usuario registrado!");
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
      if (error.data?.error) {
        setLoginError(error.data.error);
      } else {
        setLoginError("El usuario o la contraseña no son correctos");
      }
    } finally {
      setIsLoading(false);
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

      <FormInput
        label="Repetir contraseña"
        fx={setConfirmPassword}
        value={confirmPassword}
        place="Repetir contraseña"
        password={true}
      />
      <ErrorMsg error={errorConfirmPassword} />

      <FormButton fx={onSubmit} text="Registrarme" />
      {isLoading && <LoadingMsg text="Cargando datos" />}
      {loginError && <ErrorMsg error={loginError} />}
    </FormContainer>
  );
};

export default SingUp;
