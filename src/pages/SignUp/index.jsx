import React from "react";
import SignUpForm from "../../components/forms/SignUpForm";
import Header from "../../components/Header";
import styles from "./SignUp.module.scss";

const SingUp = (props) => {

  const onSubmit = values => console.log(values)

  return (
    <div className={styles.container}>
      <Header link={{to: "/", textBtn: "Login"}}  />
      <h1 className={styles.headerText}>create an account</h1>
      <span className={styles.headerSpan}>
        We always keep your name and email address private.
      </span>
      <SignUpForm onSubmit={onSubmit}/>
    </div>
  );
};

export default SingUp;
