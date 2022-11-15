import React from 'react'
import styles from "./Prize.module.scss"

const Prize = ({ prize: { category, symbol, categoryFullName, awardYear, laureate } }) => {
  return (
    <div className={`${styles.prize} card-${symbol.toLowerCase()}`}>
      <div className={styles.title}>
        <label className={styles.category}>
          {categoryFullName.en}
        </label>
        <label className={styles.awardYear}>
          {awardYear}'s
        </label>
      </div>
      <label className={styles.laureateName}>
        {laureate.knownName}
      </label>
      <label className={styles.motivation}>
        {laureate.motivation}
      </label>

      <label className={`${styles.categoryType} color-${symbol.toLowerCase()}`}>
        ประเภท: {category.en}
      </label>
    </div>
  )
}

export default Prize