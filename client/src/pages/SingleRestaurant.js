import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios';


const apikey = process.env.REACT_APP_API_KEY
const SingleRestaurant = () => {
  const {id} = useParams();
  const [loading, setLoading] = React.useState(false);
  const [restaurant, setRestaurant] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    async function getRestaurant(){
      axios.get("/getSingleRestaurant", {
        params: {
           keyAPI: apikey,
           placeID: id
        }
     }).then(response => {
      if(response.data){
        setRestaurant(response.data);
      } else{
        setRestaurant([]);
        }
        setLoading(false);
     });
    }
    getRestaurant();
  },[id])

  if(loading){
    return <Loading />
  }

  if(!restaurant){
    return <h2 className='section-title'>no restaurants to display</h2>
  }

  let { address, phonenumber, name, open, rating, price, 
       photoReference, response2,operatingHours1, operatingHours2,operatingHours3,
       operatingHours4,operatingHours5,operatingHours6,operatingHours7 } = restaurant;
  if(open){
    open = 'yes';
  } else {
    open = 'no'
  }

  return (
    <section className='section restaurant-section'>
      <Link to="/" className='btn btn-primary'>
        back Home
      </Link>
      <h2 className='section-title'>{name}</h2>
      <div className='place'>
        <div className='place-info'>    
        <p>
          <span className='place-data'>address :</span>
          <span className='info-text'> {address}</span>        
        </p>
        <div className='container'>

      <div className='hours place-data'>Operating Hours :</div>  

      <div className='text'>
        <span className='info-text'> {operatingHours1}</span>      
        <span className='info-text'> {operatingHours2}</span>    
        <span className='info-text'> {operatingHours3}</span>    
        <span className='info-text'> {operatingHours4}</span>    
        <span className='info-text'> {operatingHours5}</span>    
        <span className='info-text'> {operatingHours6}</span>  
        <span className='info-text'> {operatingHours7}</span>  

      </div>

      </div>

        <p>
          <span className='place-data'>phone number :</span>
          <span className='info-text'> {phonenumber}</span>       
        </p>
        <p>
          <span className='place-data'>open :</span>
          <span className='info-text'> {open}</span>        
          </p>
      
       
      
        <p>
          <span className='place-data'>rating :</span>  
          <span className='info-text'> {rating} / 5</span>
        </p>
        <p>
          <span className='place-data'>price level :</span>  
          <span className='info-text'> {price} / 4</span>        
        </p>
        </div>
      </div>

  </section>
  )
}

export default SingleRestaurant
