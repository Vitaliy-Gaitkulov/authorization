import React from 'react'
import styles from './RadioGroup.module.scss'
import { Field } from 'formik'

const RadioGroup = props => {
  const { name } = props
  return (
    <>
      <label className={styles.labelRadio}>
        <Field type='radio' name={name} value='buyer' />
        <div>
          <span>Join As a Buyer</span>
          <p>
            I am looking for a Name, Logo or Tagline for my business, brand or
            product.
          </p>
        </div>
      </label>
      <label className={styles.labelRadio}>
        <Field type='radio' name={name} value='creative' />
        <div>
          <span>Join As a Creative or Marketplace Seller</span>
          <p>
            I plan to submit name ideas, Logo designs or sell names in Domain
            Marketplace.
          </p>
        </div>
      </label>
    </>
  )
}

export default RadioGroup
