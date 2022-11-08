import React, {useRef , useState , useEffect} from 'react';
import Axios from "axios";

//axios allows to make a get request

//Axios.get("url")
//i make a request to a website and get the information from that url returns=fetch data
//the fetch function returns a promise


//https://publicapis.dev/category/public-apis/geocoding
//http://country.is/?ref=publicapis.dev
//https://api.country.is/990


function ApiGeolocation(props){

  const {propWidth , propColor , propText}=props;
  //---------------------------

  const [countryId , setCountryId]=useState(0);

  const changeNrIdCountry=(event) =>{
setCountryId(event.target.value);
  }
  //---------------------------------------------------------
const [myCountry , setMyCountry]=useState({
  country:"",
  ip:0
});


  const handleCountryBtn=(event) =>{

console.log("you clicked the show country btn");

Axios.get(`https://api.country.is/${countryId}`).
  then((response) =>{

console.log("country geolocation response" , response);
//country response {data: {…}, status: 200, statusText: '', headers: AxiosHeaders, config: {…}, …}

console.log("country geolocation response.data" , response.data);
//country response.data {country: 'JP', ip: '990'}

//----------------destructurare obiect-----------------
const newMyCountry={...myCountry , country:response.data.country , ip:response.data.ip};

setMyCountry(newMyCountry)

}).catch((error) =>{
  console.log("country geolocation error" , error);
})

  }

//--------------------------------

return(

  <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

<h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>function component is {propText}</h1>

<label forHtml="myIdCountry">write a number between 1 and 990<br></br>
<input type="number" name="myIdCountry" id="myIdCountry" placeholder="write nr" onChange={changeNrIdCountry} />
</label><br></br>

<button onClick={handleCountryBtn}>show county and it`s ip</button>

<ul>
<li>country : {myCountry.country}</li>
<li>ip : {myCountry.ip}</li>
</ul>

</section>

);

}

export default ApiGeolocation;
