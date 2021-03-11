import React from 'react'
import styles from './HeaderStyle.module.scss'
import { Link } from 'react-router-dom'

const Header = props => {
  const { textBtn, to } = props.link
  return (
    <div className={styles.header}>
      <a href='#'>
        <img
          className={styles.logo}
          src='https://www.squadhelp.com/img/logo.png'
          alt='img'
        />
      </a>
      <Link to={to} className={styles.button}>
        {textBtn}
      </Link>
    </div>
  )
}

export default Header
