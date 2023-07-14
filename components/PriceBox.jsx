"use client";

import styles from "@/styles/priceBox.module.scss"
import { useState } from "react"


const PriceBox = ({headerText}) => {

  const [open, setOpen] = useState(false);

  return (
    <div className={open === true ? `${styles.priceBox} ${styles.open}` : styles.priceBox} onClick={() => {setOpen(!open)}}>
        <div className={styles.header}>
          <p className={styles.text}>{headerText}</p>
        </div>
        <div className={styles.content}>
          <table className={styles.pricesTable}>
            <thead>
              <tr>
                <th>SERVICE</th>
                <th>PRICE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Primary surgical treatment of wounds</td>
                <td>250 UAH</td>
              </tr>
              <tr>
                <td>Primary surgical treatment of wounds</td>
                <td>250 UAH</td>
              </tr>
              <tr>
                <td>Primary surgical treatment of wounds</td>
                <td>250 UAH</td>
              </tr>
              <tr>
                <td>Primary surgical treatment of wounds</td>
                <td>250 UAH</td>
              </tr>
              <tr>
                <td>Primary surgical treatment of wounds</td>
                <td>250 UAH</td>
              </tr>
              <tr>
                <td>Primary surgical treatment of wounds</td>
                <td>250 UAH</td>
              </tr>
              <tr>
                <td>Primary surgical treatment of wounds</td>
                <td>250 UAH</td>
              </tr>
              <tr>
                <td>Primary surgical treatment of wounds</td>
                <td>250 UAH</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default PriceBox