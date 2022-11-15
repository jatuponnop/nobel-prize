import React from 'react'
import Prize from '../prize/Prize'
import styles from "./Detail.module.scss"

const Detail = () => {
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
  return (
    <div className={styles.detail}>
      <div className="row">
        <div className="col-6">
          <Prize prize={prize} />
        </div>
        <div className="col-6">
          <Prize prize={prize2} />
        </div>
        <div className="col-6">
          <Prize prize={prize3} />
        </div>
        <div className="col-6">
          <Prize prize={prize4} />
        </div>
      </div>
    </div>
  )
}

export default Detail