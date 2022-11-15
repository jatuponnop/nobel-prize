import React from 'react'
import styles from "./Header.module.scss"

const Header = () => {

  return (
    <div className={styles.header}>
      <label className={styles.title}>Nobel Prize ประจำปี ค.ศ. 1902</label>
    </div>
  )
}

export default Header