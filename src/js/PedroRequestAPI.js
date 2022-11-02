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



function PedroRequestAPI(props){

  const {propWidth , propColor , propText}=props;

  //---------------------------------fetch---------------------------------------------

const [catFetch , setCatFetch]=useState("");

const handleFetchCatInfo=(event) =>{
  console.log("---------------fetch cat info");

fetch("https://catfact.ninja/fact")
//transforma JSON-ul in obiect JS
.then((response) => response.json())
.then((data) =>{
  console.log("fetch cat data obj JS is : " , data)

//fetch cat data is :  {fact: 'The ability of a cat to find its way home is calle…ized cells in their brains that act as compasses.', length: 216}
setCatFetch("data.fact is : " + data.fact + "   " + "// data.length is : " + data.length)
})

}

  //------------------------------axios-----------------------------------

const [catAxios , setCatAxios]=useState("");

const handleAxiosCatInfo=(event) =>{

  console.log("---------------axios cat info");

Axios.get("https://catfact.ninja/fact")
.then((response) =>{
  console.log("axios cat response is : " , response);

//axios cat response is :  {data: {…}, status: 200, statusText: '', headers: AxiosHeaders, config: {…}, …}
  setCatAxios("response.data.fact is : " + response.data.fact + "   " + "// response.data.length is : " + response.data.length)
})

}

    //-----------------------------------------------------------------

  return(
    <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

  <h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>function component is {propText}</h1>

<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>
<p>Hello Fetch</p>
<button onClick={handleFetchCatInfo}>fetch function / generate cat fact</button>
<h3>{catFetch}</h3>
</article>

<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>
<p>Hello Axios</p>
<button onClick={handleAxiosCatInfo}>axios function / generate cat fact</button>
<h3>{catAxios}</h3>
</article>


  </section>
  );

}

export default PedroRequestAPI;
