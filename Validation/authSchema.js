import { object, string, ref } from "yup";

export const registerSchema = object().shape({
  password: string()
    .required("Ingrese su contraseña")
    .min(8, "Minimo 8 caracteres"),
  email: string()
    .required("Ingrese un email")
    .email("No es un mail valido, ej.: email@email.com"),
    confirmPassword: string()
    .required("La contraseña no coincide")
    .oneOf([ref("password"), null], "La contraseña no coincide"),
});

export const loginSchema = object().shape({
  password: string()
    .required("Ingrese su contraseña")
    .min(8, "Minimo 8 caracteres"),
  email: string()
    .required("Ingrese un email")
    .email("No es un mail valido, ej.: email@email.com"),
});