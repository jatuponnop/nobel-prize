import React from 'react'
import Header from '../components/header/Header'
import Filter from '../components/filter/Filter'

const Home = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Filter />
      </div>
    </>
  )
}

export default Home