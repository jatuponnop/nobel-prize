import React from 'react'
import Prize from '../prize/Prize'
import styles from "./Detail.module.scss"
import { Container, Col, Row } from 'react-bootstrap'
import Pagination from '../pagination/Pagination'

const Detail = () => {
  let prizes = [];
  let prize = {
    category: "Physics",
    categoryFullName: "The Nobel Prize in Chemistry",
    awardYear: "2020",
    laureates: [
      {
        "knownName": {
          "en": "Emmanuelle Charpentier"
        },
        "fullName": {
          "en": "Emmanuelle Charpentier"
        },
        "motivation": {
          "en": "for his untiring and skilful directorship of the Bern Peace Bureau"
        }
      },
      {
        "knownName": {
          "en": "Jennifer A. Doudna"
        },
        "fullName": {
          "en": "Jennifer A. Doudna"
        },
        "motivation": {
          "en": "for the development of a method for genome editing"
        }
      }
    ]
  }
  let prize2 = { ...prize, category: "Economic" };
  let prize3 = { ...prize, category: "Literature" };
  let prize4 = { ...prize, category: "Medicine" };
  let prize5 = { ...prize, category: "Peace" };
  let prize6 = { ...prize, category: "Chemistry" };
  prizes.push(prize);
  prizes.push(prize2);
  prizes.push(prize3);
  prizes.push(prize4);
  prizes.push(prize5);
  prizes.push(prize6);
  return (
    <div className={styles.detail}>
      <Row className={styles.detailRow} >
        {
          prizes.map((prize) => (
            <Col lg={4} md={6} sm={12} className={styles.detailCol}>
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