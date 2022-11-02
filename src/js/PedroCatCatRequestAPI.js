import React, {useRef , useState , useEffect} from 'react';
import Axios from "axios";

//axios allows to make a get request

//Axios.get("url")
//i make a request to a website and get the information from that url returns=fetch data
//the fetch function returns a promise

//ReactJS Course [7] - How To Fetch Data From an API in React
//https://www.youtube.com/watch?v=je3FTTunyp4&t=1545s

//url for cats:
//https://catfact.ninja/fact



function PedroCatCatRequestAPI(props){
  const {propWidth , propColor , propText}=props;

  //-------------------------------axios---------------------------------------------

const [catFactSecond , setCatSecond]=useState("");

const handleAxiosCatFact=(event) =>{
  console.log("you clicked the axios btn to get fact cat");

  Axios.get("https://catfact.ninja/fact")
  .then((res) => {
    console.log("res.data obj axios is : " , res.data);
  setCatSecond(res.data.fact);
})
}


//-------------------------------------------------------------------------------

return(

  <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

<h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>function component is {propText}</h1>

<button onClick={handleAxiosCatFact}>show cat fact</button>

<h3>catFactSecond is : {catFactSecond}</h3>

</section>

);



}

export default PedroCatCatRequestAPI;
