import React, {useRef , useState , useEffect} from 'react';
import Axios from "axios";

//axios allows to make a get request

//Axios.get("url")
//I make a request to a website and get the information from that url returns=fetch data
//the fetch function returns a promise

//https://publicapis.dev/category/public-apis/photography
//https://github.com/M-Media-Group/Cartes.io/wiki/API

function ApiMap(props){

  const {propWidth , propColor , propText}=props;

  //---------------------------

const handleMapClickBtn=(event) =>{

console.log("you clicked show map btn");

Axios.get("https://cartes.io/api/maps/048eebe4-8dac-46e2-a947-50b6b8062fec")
.then((response) =>{

console.log("map response" , response);
//map response {data: {…}, status: 200, statusText: '', headers: AxiosHeaders, config: {…}, …}

console.log("map response.data" , response.data);
//map response.data {slug: '048eebe4-8dac-46e2-a947-50b6b8062fec', title: 'Demo map', description: 'This map is a demo map, meant to help you try out … Information on this map is not real or accurate.', privacy: 'public', users_can_create_markers: 'yes', …}

})
.catch((error) =>{
  console.log("country geolocation error" , error);
})

}

  //----------------------------------------------

return(

  <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

<h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>function component is {propText}</h1>

<button onClick={handleMapClickBtn}>show map</button>

</section>

);

}

export default ApiMap;
