import { object, string, ref } from "yup";

export const registerSchema = object().shape({
  confirmPassword: string()
    .required("Confirme su contraseña")
    .oneOf([ref("password"), null], "La contraseña no coincide"),
  password: string()
    .required("Ingrese su contraseña")
    .min(8, "Minimo 8 caracteres"),
  email: string()
    .required("Ingrese un email")
    .email("No es un mail valido, ej.: email@email.com"),
});

export const loginSchema = object().shape({
  password: string()
    .required("Ingrese su contraseña")
    .min(8, "Minimo 8 caracteres"),
  email: string()
    .required("Ingrese un email")
    .email("No es un mail valido, ej.: email@email.com"),
});
