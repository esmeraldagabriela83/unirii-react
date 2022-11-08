import React, {useRef , useState , useEffect} from 'react';
import Axios from "axios";

//axios allows to make a get request

//Axios.get("url")
//I make a request to a website and get the information from that url returns=fetch data
//the fetch function returns a promise

//https://publicapis.dev/category/public-apis/photography
//https://publicapis.dev/search?q=airtel

//https://sys.airtel.lv/ip2country/1.1.1.1/?full=true?ref=publicapis.dev


function ApiAirTel(props){

  const {propWidth , propColor , propText}=props;

  //--------------------------------------------------------------------------


const handleCountryCityBtn=(event)=>{

console.log("you clicked the show country and city btn");

Axios.get("https://sys.airtel.lv/ip2country/1.1.1.1/?full=true?ref=publicapis.dev")
.then((response) =>{

console.log("country and city response is : " , response);

console.log("country and city response.data is : " , response.data);

})
.catch((error) =>{
  console.log("country and city error" , error);
})

}


  //--------------------------------------------------------------------------

  return(

    <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

  <h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>function component is {propText}</h1>

  <button onClick={handleCountryCityBtn}>show country and city</button>

  </section>

  );

}

export default ApiAirTel;
