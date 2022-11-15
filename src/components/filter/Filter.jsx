import React from 'react'
import styles from "./Filter.module.scss";

const Filter = () => {
  return (
    <div className={styles.filter}>
      <label className={`${styles.title} mb-2`}>ค้นหา </label>
      <select>
        <option defaultChecked="true">ตั้งแต่ปี</option>
        <option>ค.ศ. 1902</option>
      </select>
      <select>
        <option defaultChecked="true">จนถึงปี</option>
        <option>ค.ศ. 1902</option>
      </select>
      <select>
        <option>หมวดหมู่</option>
        <option>เคมี</option>
        <option>วิทยาศาสตร์เศรษฐกิจ</option>
        <option>วรรณกรรม</option>
        <option>สันติภาพ</option>
        <option>ฟิสิกส์</option>
        <option>สรีรวิทยา/การแพทย์</option>
      </select>
      <button className='btn-nobel outline'>ค้นหา</button>
      <div className={styles.prizeAmount}>
        <label className={styles.prizeAmountText}>
          จำนวนรางวัล
        </label>
        <label className={styles.prizeAmountValue}>
          150,782
        </label>
      </div>
      <img src="nobel-prize.png" className={styles.img} />
    </div>
  )
}

export default Filter