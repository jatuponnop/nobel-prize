import React from 'react'
import styles from "./Filter.module.scss";

const Filter = () => {
  return (
    <div className={styles.filter}>
      <label className={`${styles.title} mb-2`}>รางวัล </label>
      <select className='outline'>
        <option defaultChecked="true">ตั้งแต่ปี</option>
        <option>ค.ศ. 1902</option>
      </select>
      <select className='outline'>
        <option defaultChecked="true">จนถึงปี</option>
        <option>ค.ศ. 1902</option>
      </select>
      <select className='outline'>
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
      <img src="https://cdn-icons-png.flaticon.com/512/2132/2132061.png" className={styles.img} />
    </div>
  )
}

export default Filter