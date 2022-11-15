import React from 'react'
import { useSelector } from 'react-redux'
import styles from "./Header.module.scss"

const Header = () => {
  const year = useSelector((state) => state.prizes.year);
  return (
    <div className={styles.header}>
      <label className={styles.title}>Nobel Prize {year == "none" ? "" : "ประจำปี ค.ศ. " + year}</label>
    </div>
  )
}

export default Header