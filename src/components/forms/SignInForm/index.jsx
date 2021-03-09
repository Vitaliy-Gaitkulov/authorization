import { Formik, Form, Field } from "formik";
import { SIGN_IN_SCHEMA } from "../../../utils/validationSchemas";
import Input from "../Input";
import styles from "./SignInForm.module.scss";

const SignInForm = (props) => {
  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <div className={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={props.onSubmit}
        validationSchema={SIGN_IN_SCHEMA}
      >
        {(formProps) => {
          return (
            <Form className={styles.formWrapper}>
              <div className={styles.inputWrapper}>
                <Field name={"email"}>
                  {(fieldProps) => (
                    <Input placeholder="Email adress" {...fieldProps} />
                  )}
                </Field>
              </div>
              <div className={styles.inputWrapper}>
                <Field name={"password"}>
                  {(fieldProps) => (
                    <Input
                      type="password"
                      placeholder="Password"
                      {...fieldProps}
                    />
                  )}
                </Field>
              </div>

              <Field type="submit" value="login" className={styles.button} />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default SignInForm;
