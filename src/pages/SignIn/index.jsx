import React from "react";
import SignInForm from "../../components/forms/SignInForm";
import Header from "../../components/Header";
import styles from "./SignIn.module.scss";

const SingIn = (props) => {
  return (
    <div className={styles.container}>
      <Header text="Singup" to="/sing-up" />
      <h1 className={styles.headerText}>login to your account</h1>
      <SignInForm />
    </div>
  );
};

export default SingIn;
