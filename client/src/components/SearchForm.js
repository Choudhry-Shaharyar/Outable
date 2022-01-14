import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef(0);

  React.useEffect(() => {
    searchValue.current.focus()
  } , [])


  // prevents page from reloading when cocktail is entered.
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const searchRestaurant = () => {
    setSearchTerm(searchValue.current.value);
  }
  return (
    <section className='section search'>
      <form className='search-form' onSubmit= {handleSubmit}>
      <div className= 'form-control'>
        <label htmlFor='name'>Enter a distance in meters</label>  
        <input type = 'text' id='name' ref={searchValue} onChange=
        {searchRestaurant} /> 
         {/* onchange call searchRest function */}
      </div>      
      </form>
  
    </section>
  )
}

export default SearchForm
