import React from "react";
import styles from "./HeaderStyle.module.scss";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className={styles.header}>
      <img
        className={styles.logo}
        src="https://www.squadhelp.com/img/logo.png"
        alt="img"
      />
      <Link to={props.to} className={styles.button}>{props.text}
      </Link>
    </div>
  );
};

export default Header;
