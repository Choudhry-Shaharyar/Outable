import React from 'react'
import { Link } from 'react-router-dom'



const Restaurant = ({ name, id, rating, address}) => {
  return (
    
    <article className="restaurant"> 
    <div  className='img-container'>
      {/* <img src={image} alt = {name}></img> */}
    </div>
    <div className='restaurant-footer'>
      <h3>{name}</h3>
      {/* <h4>{id}</h4> */}
      <h4>Rating: {rating}</h4>
      <p>{address}</p>
      <Link to = {`/restaurant/${id}`} className='btn btn-primary btn-details'>details</Link>
    </div>
  </article>

  )
}


export default Restaurant
