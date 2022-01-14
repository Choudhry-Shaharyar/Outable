const express = require('express');
var request = require('request');3
const app = express()
const port = 5000
app.use(express.json());

app.get('/home', (req, res) => {
  res.send('Hello World!')
})

app.get('/getSingleRestaurant',(req, res) => {
  const APIKEY = req.query.keyAPI;
  const id = req.query.placeID;
  request('https://maps.googleapis.com/maps/api/place/details/json?place_id='+id+'&key='+APIKEY,

  function(error, response, body){
    if(!error && response.statusCode == 200) {
      var parsedBody = JSON.parse(body);
      var results = parsedBody.result;

      const{formatted_address,formatted_phone_number, opening_hours,rating,name, price_level, photos} = results;
      const newRestaurant = {
        address: formatted_address,
        phonenumber: formatted_phone_number,
        open: opening_hours,
        rating: rating,
        name: name,
        price: price_level,
        photoReference:  photos[0].photo_reference,
        operatingHours1: opening_hours.weekday_text[0],
        operatingHours2: opening_hours.weekday_text[1],
        operatingHours3: opening_hours.weekday_text[2],
        operatingHours4: opening_hours.weekday_text[3],
        operatingHours5: opening_hours.weekday_text[4],
        operatingHours6: opening_hours.weekday_text[5],
        operatingHours7: opening_hours.weekday_text[6],
        
      }
        res.send(newRestaurant);
    }
  })

});



app.get('/getRestaurants',(req, res) => {
  const distance = req.query.distance;
  const latitude = req.query.lat;
  const longitude = req.query.lng;
  const APIKEY = req.query.keyAPI;

  request('https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=outdoor%20dining&location='+latitude+','+longitude+'&radius='+distance+'&key='+APIKEY,
  function(error, response, body){
    if(!error && response.statusCode == 200) {
      var parsedBody = JSON.parse(body);
      var results = parsedBody.results;

       // assigning the attributes of each item 
       const newRestaurants= results.map((item) => {
        // colon is used to assign value to an objects attribute
        const {name, place_id, rating, vicinity} = item // created 5 attribites using object destructuring (Basic assignment)
          // conssole.log(name);
        // returning object to newRestaurant array
        return {
        id:place_id,
        name:name, 
        address:vicinity,
        rating:rating
        } // Retruning this unnamaed objectcreated attributes id, name, image ...  and assigned values to it
        
      });
      res.send({newRestaurants});
      // res.send(body);
    }
  })

});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
