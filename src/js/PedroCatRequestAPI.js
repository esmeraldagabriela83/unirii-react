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


function PedroCatRequestAPI(props){

  const {propWidth , propColor , propText}=props;

  //---------------------------------fetch---------------------------------------------

// fetch("https://catfact.ninja/fact")
// .then((res) => res.json())
// .then((data) => {
//   console.log("data fetch is : " , data);
// })

//data fetch is :  {fact: 'A queen (female cat) can begin mating when she is between 5 and 9 months old.', length: 77}

  //---------------------------------------axios----------------------------------------

const [catFact , setCatFact]=useState("");

// Axios.get("https://catfact.ninja/fact")
// .then((res) => {
//   console.log("res.data axios is : " , res.data);
// })

//res.data axios is :  {fact: 'The first formal cat show was held in England in 1871; in America, in 1895.', length: 75}

//-------pt a aparea in pahina o singura data , la refresh al paginii se schimba textul -----


useEffect(() =>{

  Axios.get("https://catfact.ninja/fact")
  .then((res) => {
    console.log("res.data obj axios is : " , res.data);

      setCatFact(res.data.fact)
  })

} , []);


  //-------------------------------------------------------------------------------

  return(
    <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

  <h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>function component is {propText}</h1>
<h1>with useEffect / refresh the page to get another text about cats</h1>

<p>catFact is : <strong>{catFact}</strong></p>


  </section>
  );

}


export default PedroCatRequestAPI;
