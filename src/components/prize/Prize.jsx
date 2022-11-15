import React from 'react'
import styles from "./Prize.module.scss"

const Prize = ({ prize: { category, categoryFullName, awardYear, laureates } }) => {
  return (
    <div className={`${styles.prize} card-${category.toLowerCase()}`}>
      <div className={styles.title}>
        <label className={styles.category}>
          {categoryFullName}
        </label>
        <label className={styles.awardYear}>
          {awardYear}'s
        </label>
      </div>
      <label className={styles.laureateName}>
        {laureates[0].knownName.en}
      </label>
      <label className={styles.motivation}>
        {laureates[0].motivation.en}
      </label>

      <label className={`${styles.categoryType} color-${category.toLowerCase()}`}>
        ประเภท: {category}
      </label>
    </div>
  )
}

export default Prize