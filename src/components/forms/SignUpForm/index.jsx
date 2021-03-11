import React from "react";
import { Formik, Form, Field } from "formik";
import { SIGN_UP_SCHEMA } from "../../../utils/validationSchemas";
import styles from "./SignUpForm.module.scss";
import Input from "../Input";
import RadioGroup from '../RadioGroup';

const SignUpForm = (props) => {
  const initialValues = {
    firstName: "",
    lastName: "",
    displayName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    role: "",
    squadHelp: "",
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
                  <Field name={"firstName"}>
                    {(fieldProps) => (
                      <Input label={styles.inputWrapper} placeholder="First Name" {...fieldProps} />
                    )}
                  </Field>
                <Field name={"lastName"}>
                    {(fieldProps) => (
                      <Input placeholder="Last Name" {...fieldProps} />
                    )}
                  </Field>
              </div>
              <div className={styles.row}>
                <Field name={"displayName"}>
                    {(fieldProps) => (
                      <Input placeholder="Display Name" {...fieldProps} />
                    )}
                  </Field>
                <Field name={"email"}>
                    {(fieldProps) => (
                      <Input placeholder="Email adress" {...fieldProps} />
                    )}
                  </Field>
              </div>
              <div className={styles.row}>
                <Field  name={"password"}>
                    {(fieldProps) => (
                      <Input placeholder="Password" type="password" {...fieldProps} />
                    )}
                  </Field>
                <Field name={"passwordConfirmation"}>
                    {(fieldProps) => (
                      <Input placeholder="Password confirmation" type="password" {...fieldProps} />
                    )}
                  </Field>
              </div>

              <RadioGroup name={"role"}/>

              <label className={styles.labelCheckbox}>
                <Field type="checkbox" name={"squadHelp"}/>
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
