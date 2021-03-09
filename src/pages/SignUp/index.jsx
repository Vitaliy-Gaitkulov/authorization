import React from "react";
import SignUpForm from "../../components/forms/SignUpForm";
import Header from "../../components/Header";
import styles from "./SignUp.module.scss";

const SingUp = (props) => {
  return (
    <div className={styles.container}>
      <Header to="/" text="Login" />
      <h1 className={styles.headerText}>create an account</h1>
      <span className={styles.headerSpan}>
        We always keep your name and email address private.
      </span>
      <SignUpForm />
    </div>
  );
};

export default SingUp;
