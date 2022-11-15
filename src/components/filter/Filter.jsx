import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from "./Filter.module.scss";
import { formatNumber, genYearOptions } from "../../functions/helper";
import { getNobelPrizes } from '../../functions/nobelPrizes';
import { setPage, setPrizeAmount, setPrizes, setYear } from '../../redux/prizes';
// https://api.nobelprize.org/2.1/nobelPrizes?offset=1&limit=6&sort=asc
// https://api.nobelprize.org/2.1/nobelPrizes?sort=asc&nobelPrizeYear=1901&yearTo=1901

const Filter = () => {
  const dispatch = useDispatch();
  const yearNow = useSelector((state) => state.prizes.year);
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

  const search = async (year) => {
    try {
      let res = await getNobelPrizes(year);
      dispatch(setPrizes(res.data.nobelPrizes));
      dispatch(setPage(1));
      updatePrizeAmount(res.data.nobelPrizes);
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
    search();
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