import React from 'react'
import styles from "./Pagination.module.scss";
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../redux/prizes';

const PaginationItem = ({ page }) => {
  const dispatch = useDispatch();
  const pageNow = useSelector((state) => state.prizes.page);
  const selectPage = () => {
    if (pageNow == page) {
      return;
    }
    dispatch(setPage(page));
  }
  return (
    <span className={`${page == pageNow ? styles.selected : ""}`} onClick={selectPage} >{page}</span>
  )
}

export default PaginationItem