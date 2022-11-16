import React from 'react'
import styles from "./Prize.module.scss"

const getPrizeThaiName = (symbol) => {
  if (symbol == "che") {
    return "เคมี";
  } else if (symbol == "eco") {
    return "วิทยาศาสตร์เศรษฐกิจ";
  } else if (symbol == "lit") {
    return "วรรณกรรม";
  } else if (symbol == "pea") {
    return "สันติภาพ";
  } else if (symbol == "phy") {
    return "ฟิสิกส์";
  } else if (symbol == "med") {
    return "สรีรวิทยาหรือการแพทย์";
  }
  return "-";
}

const Prize = ({ prize: { category, symbol, categoryFullName, awardYear, laureate } }) => {
  return (
    <div className={`${styles.prize} card-${symbol.toLowerCase()}`}>
      <div className={styles.title}>
        <div className={styles.categoryWrapper}>
          <label className={styles.category}>
            {categoryFullName.en}
          </label>
        </div>
        <label className={styles.awardYear}>
          {awardYear}'s
        </label>
      </div>
      <label className={styles.laureateName}>
        {laureate.knownName}
      </label>
      <div className={styles.motivationWrapper}>
        <label className={styles.motivation}>
          {laureate.motivation}
        </label>
      </div>



      <label className={`${styles.categoryType} color-${symbol.toLowerCase()}`}>
        <span className=''> สาขา:</span> <span className='light'> {getPrizeThaiName(symbol)}</span>
      </label>
    </div>
  )
}

export default Prize