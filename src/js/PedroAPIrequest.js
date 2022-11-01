
import React, {useRef , useState , useEffect} from 'react';
import Axios from "axios";

//axios allows to make a get request

//Axios.get("url")


//https://www.youtube.com/watch?v=rpg1jOvGCtQ
//How To Make An API Request in ReactJS With Axios and Fetch - Tutorial [2020]

function PedroAPIrequest(props){

  const {propWidth , propColor , propText}=props;

//--------------fetch--------------------------------------------------------

const [jokeFetch , setJokeFetch]=useState("");

const handleFetchJoke=(event) =>{
  console.log("/// --- fetch joke");

fetch("https://official-joke-api.appspot.com/random_joke")
  .then((response) => response.json())
  .then((data) =>{
    console.log("fetch joke data is: " , data);

//fetch data is:  {id: 156, type: 'general', setup: 'What animal is always at a game of cricket?', punchline: 'A bat.'}

    setJokeFetch("data.id: " + data.id + "..." + data.setup + "..." + data.punchline)
  })

}

//-----------------axios after npm install axios-----------------------------

const [jokeAxios , setJokeAxios]=useState("");

const handleGetJokeAxios=(event) =>{
  console.log("/// --- axios joke");

Axios.get("https://official-joke-api.appspot.com/random_joke")
.then((response) =>{
  console.log("axios joke response is : " , response);

// axios response is :  {data: {…}, status: 200, statusText: '', headers: AxiosHeaders, config: {…}, …}

setJokeAxios("response.data.id: " + response.data.id + "..." + response.data.setup + "..." + response.data.punchline)

})

}

//----------------------------------------------------------------------

return(
  <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

<h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>function component is {propText}</h1>

<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>
<p>Hello Fetch</p>

<button onClick={handleFetchJoke}>show fetch joke</button>
<h3>{jokeFetch}</h3>
</article>

<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>
<p>Hello Axios</p>

<button onClick={handleGetJokeAxios}>show axios joke</button>
<h3>{jokeAxios}</h3>
</article>

</section>
);

}

export default PedroAPIrequest;
