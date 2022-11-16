import React from 'react'
import Prize from '../prize/Prize'
import styles from "./Detail.module.scss"
import { Col, Row } from 'react-bootstrap'
import Pagination from '../pagination/Pagination'
import { useSelector } from 'react-redux'
import { filterPrizes } from '../../functions/helper'

const Detail = () => {
  const allPrizes = useSelector((state) => state.prizes.prizes);
  const page = useSelector((state) => state.prizes.page);
  let prizes = filterPrizes(page, allPrizes);


  return (
    <div className={styles.detail}>
      <Row className={styles.detailRow} >
        {
          prizes.map((prize, index) => (
            <Col key={index} lg={4} md={6} sm={12} className={styles.detailCol}>
              <Prize prize={prize} />
            </Col>
          ))
        }
      </Row>
      <Pagination />
    </div>
  )
}

export default Detail