
import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react';
import axios from 'axios';
const AppContext = React.createContext()


const AppProvider = ({ children }) => {
const [loading, setLoading] = useState(true);
const [searchTerm, setSearchTerm] = useState(4000);
const [restaurants, setRestaurants] = useState([]);
  navigator.geolocation.getCurrentPosition(function(position) {
    const latitiude = position.coords.latitude;
    const longitude = position.coords.longitude
    sessionStorage.setItem('lat', latitiude);
    sessionStorage.setItem('long', longitude);
 });



const fetchPlaces = useCallback(async () => {

  axios.get("/getRestaurants", {
    
     params: {
        distance: searchTerm,
        lat: sessionStorage.getItem('lat'),
        lng: sessionStorage.getItem('long'),
        keyAPI: process.env.REACT_APP_API_KEY
     }
    
   
  }).then(response => {

    if(response.data.newRestaurants){
      setRestaurants(response.data.newRestaurants);
    } else{
      setRestaurants([]);
    }
  });
    setLoading(true);
    try {
    setLoading(false);
   
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm])
  
  
  
  //  will call fetchPlaces arrow function every time the value of searchTerm changes
 
  useEffect (() => {
   fetchPlaces();
  } , [searchTerm, fetchPlaces]);


  return (
  
  <AppContext.Provider value={{
    loading, 
    restaurants,
    setSearchTerm,
  }}
  >
  {children}
  </AppContext.Provider>
  )
}

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }