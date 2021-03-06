import * as Yup from "yup";

export const NAME_SCHEMA = Yup.string()
  .matches(/^[A-ZА-Я][a-zа-я]{1,64}$/, "Enter a valid name")
  .required();

export const SIGN_IN_SCHEMA = Yup.object({
  email: Yup.string().email("Email must be a valid email").required(),
  password: Yup.string()
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,32}$/,
      "Password must contain one big letter and so on...."
    )
    .required(),
});

export const SIGN_UP_SCHEMA = Yup.object({
  firstName: NAME_SCHEMA,
  lastName: NAME_SCHEMA,
  displayName: Yup.string()
    .matches(/^[a-z0-9_-]{3,15}$/, "Display name must contain lowercase letter and numbers")
    .required(),
  email: Yup.string().email("Email must be a valid email").required(),
  password: Yup.string().matches(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
    "Password must contain one big letter and special symbols(#?!@$ %^&*-), min 8 letter."
  ).required(),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ).required(),
  role: Yup.string().oneOf(['buyer', 'creative']).required(),
});
