import React, {useRef , useState , useEffect} from 'react';
import Axios from "axios";

//axios allows to make a get request

//Axios.get("url")
//i make a request to a website and get the information from that url returns=fetch data
//the fetch function returns a promise

//ReactJS Course [7] - How To Fetch Data From an API in React
//https://www.youtube.com/watch?v=je3FTTunyp4&t=1545s

//url :
//https://api.agify.io/?name=pedro

function PedroPersonAPIrequest(props){
  const {propWidth , propColor , propText}=props;
  //----------------------------------------------------------------------

  const [changeName , setChangeName]=useState("ex : Mary");

//---changeName becomes the value from the input

const handleChangeVariablePerson=(event) =>{
  setChangeName(event.target.value)
}

//------------------person obj---------------------------------

const [personPredict , setPersonPredict]=useState(null);

//----------------------------------Axios fetch data from url with API which is a JSON--------------------------------------------

const handleShowInfoPerson=(event) =>{
  console.log("btn for showing person`s info");

Axios.get(`https://api.agify.io/?name=${changeName}`)
  .then((response) =>{
    console.log("obj response data : " , response.data);

//{age: 39, count: 13417, name: 'Roxana'}

setPersonPredict(response.data);

  })

}

  //----------------------------------------------------------------------

  return(

    <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

  <h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>function component is {propText}</h1>

<input type="text" name="changeablePerson" id="changeablePerson" value={changeName} onChange={handleChangeVariablePerson}/>
<button onClick={handleShowInfoPerson}>show person info</button>

<ul>
<li>age: {personPredict?.age}</li>
<li>count: {personPredict?.count}</li>
<li>name: {personPredict?.name}</li>
</ul>

  </section>

  );


}


export default PedroPersonAPIrequest;
//
