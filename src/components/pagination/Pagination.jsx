import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../redux/prizes';
import styles from "./Pagination.module.scss";
import PaginationItem from './PaginationItem';


const Pagination = () => {
  const dispatch = useDispatch();
  const prizes = useSelector((state) => state.prizes.prizes);
  const page = useSelector((state) => state.prizes.page);
  const listPerPage = 6;
  const maxPage = parseInt((prizes.length - 1) / listPerPage) + 1;

  const genPagination = () => {
    let pages = [];
    for (let i = 1; i <= maxPage; i++) {
      pages.push(<PaginationItem key={i} page={i} />)
    }
    return pages;
  }

  const nextPage = () => {
    let newPage = page + 1;
    if (newPage <= maxPage) {
      dispatch(setPage(newPage));
    } /*else {
      dispatch(setPage(1));
    }*/
  }
  const backPage = () => {
    let newPage = page - 1;
    if (newPage >= 1) {
      dispatch(setPage(newPage));
    } /*else {
      dispatch(setPage(maxPage));
    }*/
  }

  return (
    <div className={styles.pagination}>
      <div className={styles.wrapper}>

        <div className={styles.page}>
          <i className="fa-solid fa-chevron-left" onClick={backPage}></i>
          {
            genPagination()
          }
          <i className="fa-solid fa-chevron-right" onClick={nextPage}></i>

        </div>
      </div>
    </div>
  )
}

export default Pagination