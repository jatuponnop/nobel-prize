import React from 'react'
import styles from "./Pagination.module.scss";

const Pagination = () => {
  return (
    <div className={styles.pagination}>
      <div className={styles.wrapper}>

        <div className={styles.page}>
          <i className="fa-solid fa-chevron-left"></i>
          <span>1</span>
          <span className={styles.selected}>2</span>
          <span>3</span>
          <span>4</span>
          <span>..</span>
          <span>22</span>
          <i className="fa-solid fa-chevron-right"></i>

        </div>
      </div>
    </div>
  )
}

export default Pagination