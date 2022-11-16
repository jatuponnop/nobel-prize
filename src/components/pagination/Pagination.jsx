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
    let divide = parseInt(page / listPerPage);
    let mod = page % listPerPage;
    let start = (divide * listPerPage) + 1;
    if (mod == 0) {
      start = ((divide - 1) * listPerPage) + 1;
    }
    let end = (start + listPerPage) - 1;
    for (let i = start; i <= end; i++) {
      pages.push(<PaginationItem key={i} page={i} />)
    }
    return pages;
  }

  const nextPage = () => {
    let newPage = page + 1;
    if (newPage <= maxPage) {
      dispatch(setPage(newPage));
    }
  }
  const backPage = () => {
    let newPage = page - 1;
    if (newPage >= 1) {
      dispatch(setPage(newPage));
    }
  }

  return (
    <div className={styles.pagination}>
      <div className={styles.wrapper}>

        <div className={styles.page}>
          <div className={styles.number}>
            <i className={`fa-solid fa-chevron-left`} onClick={backPage}></i>
          </div>
          {
            genPagination()
          }
          <div className={styles.number}>
            <i className={`fa-solid fa-chevron-right`} onClick={nextPage}></i>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Pagination