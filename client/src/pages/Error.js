import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='error-page section'>
    <div className='error-container'>
      <h2>oops! this page does not exist</h2>
      <Link to="/" className='btn'>
        back home
      </Link>
    </div>
    </section>
   
  )
}

export default Error
