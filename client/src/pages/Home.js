import React from 'react'
import RestaurantList from '../components/RestaurantList'
import SearchForm from '../components/SearchForm'

const Home = () => {
  return (
    <main>
    <SearchForm />
    <RestaurantList />
  </main>
  )
}

export default Home
