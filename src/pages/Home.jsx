import React from 'react'
import Header from '../components/header/Header'
import Filter from '../components/filter/Filter'
import Detail from '../components/detail/Detail'

const Home = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Filter />
        <Detail />
      </div>
    </>
  )
}

export default Home