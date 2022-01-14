import React from 'react'
import Restaurant from './Restaurant'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const RestaurantList = () => {
    const {restaurants, loading} = useGlobalContext();

    if (loading){
      return <Loading />
    }
    
  if(restaurants.length < 1){
    return <h2 className='section-title'>
      no match, increase your radius.
    </h2>
  }
  return (
    <section className='section'>
    <h2 className='section-title'> restaurants </h2>
    <div className='restaurants-center'>
{
  restaurants.map((item) => {
  return <Restaurant key={item.id} {... item} />
    })}
    </div>

  </section>
  )
}

export default RestaurantList