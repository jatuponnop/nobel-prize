import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from "./Filter.module.scss";
import { formatNumber, genYearOptions } from "../../functions/helper";
import { getAllNobelPrizes } from '../../functions/nobelPrizes';
import { setAllPrizes, setPage, setPrizeAmount, setPrizes, setYear } from '../../redux/prizes';

const Filter = () => {
  const dispatch = useDispatch();
  const yearNow = useSelector((state) => state.prizes.year);
  const allPrizes = useSelector((state) => state.prizes.allPrizes);
  const prizeAmount = useSelector((state) => state.prizes.prizeAmount);
  const [year, setYearState] = useState("none");
  const handleSearch = (e) => {
    e.preventDefault();
    if (year == yearNow) {
      return;
    }
    dispatch(setYear(year));
    search(year);
  }

  const init = async () => {
    let res = await getAllNobelPrizes("none");
    dispatch(setAllPrizes(res.data.nobelPrizes));
    dispatch(setPrizes(res.data.nobelPrizes));
    dispatch(setPage(1));
    updatePrizeAmount(res.data.nobelPrizes);
  }

  const search = async (year) => {
    try {
      // 
      if (year == "none" || year == undefined) {
        dispatch(setPrizes(allPrizes));
        dispatch(setPage(1));
        updatePrizeAmount(allPrizes);
      } else {
        let filterPrizes = allPrizes.filter((prize) => prize.awardYear == year);
        dispatch(setPrizes(filterPrizes));
        dispatch(setPage(1));
        updatePrizeAmount(filterPrizes);
      }
    } catch (err) {
      console.error(err);
    }
  }

  const updatePrizeAmount = async (prizes) => {
    let allAmount = 0;
    prizes.forEach(prize => {
      allAmount = allAmount + prize.prizeAmount;
    });

    dispatch(setPrizeAmount(allAmount));
  }
  useEffect(() => {
    init();
  }, []);

  return (
    <div className={styles.filter}>
      <label className={`${styles.title} mb-2`}>รางวัล </label>
      <select className='outline'
        value={year}
        onChange={(e) => setYearState(e.target.value)}
      >
        <option value={"none"} defaultChecked="true">ปี ค.ศ.</option>
        {genYearOptions()}
      </select>

      <button className='btn-nobel outline' onClick={handleSearch}>ค้นหา</button>
      <div className={styles.prizeAmount}>
        <label className={styles.prizeAmountText}>
          เงินรางวัล
        </label>
        <label className={styles.prizeAmountValue}>
          {formatNumber(prizeAmount)}$
        </label>
      </div>
      <img src="https://cdn-icons-png.flaticon.com/512/2132/2132061.png" className={styles.img} />
    </div>
  )
}

export default Filter