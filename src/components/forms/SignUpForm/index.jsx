import React from "react";
import { Formik, Form, Field } from "formik";
import { SIGN_UP_SCHEMA } from "../../../utils/validationSchemas";
import styles from "./SignUpForm.module.scss";
import Input from "../Input";

const SignUpForm = (props) => {
  const initialValues = {
    firstName: "",
    lastName: "",
    displayName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  };

  return (
    <div className={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={props.onSubmit}
        validationSchema={SIGN_UP_SCHEMA}
      >
        {(formProps) => {
          return (
            <Form className={styles.formWrapper}>
              <div className={styles.row}>
                <div className={styles.inputWrapper}>
                  <Field name={"firstName"}>
                    {(fieldProps) => (
                      <Input placeholder="First Name" {...fieldProps} />
                    )}
                  </Field>
                </div>
                <div className={styles.inputWrapper}>
                <Field name={"lastName"}>
                    {(fieldProps) => (
                      <Input placeholder="Last Name" {...fieldProps} />
                    )}
                  </Field>
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.inputWrapper}>
                <Field name={"displayName"}>
                    {(fieldProps) => (
                      <Input placeholder="Display Name" {...fieldProps} />
                    )}
                  </Field>
                </div>
                <div className={styles.inputWrapper}>
                <Field name={"email"}>
                    {(fieldProps) => (
                      <Input placeholder="Email adress" {...fieldProps} />
                    )}
                  </Field>
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.inputWrapper}>
                <Field name={"password"}>
                    {(fieldProps) => (
                      <Input placeholder="Password" type="password" {...fieldProps} />
                    )}
                  </Field>
                </div>
                <div className={styles.inputWrapper}>
                <Field name={"passwordConfirmation"}>
                    {(fieldProps) => (
                      <Input placeholder="Password confirmation" type="password" {...fieldProps} />
                    )}
                  </Field>
                </div>
              </div>

              <label className={styles.labelRadio}>
                <input type="radio" name="group"/>
                <div>
                  <span>Join As a Buyer</span>
                  <p>
                    I am looking for a Name, Logo or Tagline for my business,
                    brand or product.
                  </p>
                </div>
              </label>

              <label className={styles.labelRadio}>
                <input type="radio" name="group" />
                <div>
                  <span>Join As a Creative or Marketplace Seller</span>
                  <p>
                    I plan to submit name ideas, Logo designs or sell names in
                    Domain Marketplace.
                  </p>
                </div>
              </label>

              <label className={styles.labelCheckbox}>
                <input type="checkbox" />
                <span>
                  Allow Squadhelp to send marketing/promotional offers from time
                  to time
                </span>
              </label>

              <Field
                type="submit"
                value="Create account"
                className={styles.button}
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default SignUpForm;
