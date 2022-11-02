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

function PedroAPIpersonObj(props){

  const {propWidth , propColor , propText}=props;

  //----------------axios-----------------------------------------------------

  //variable to change the name from the url, using `` and ${valueInputName}
const [nameChange , setNameChange]=useState("");
//--get the value from the input
const getValueNameChangeable=(event) =>{
  setNameChange(event.target.value);
}

//-------------------person obj

const [predictPerson , setPredictPerson]=useState({
age:0,
count:0,
name:""
});

const handleShowPersonInfo=(event) =>{

console.log("you clicked to show the person`s info btn");
Axios.get(`https://api.agify.io/?name=${nameChange}`)
  .then((response) =>{
    console.log("response.data is : " , response.data);

    //you clicked to show the person`s info btn
//PedroAPIpersonObj.js:36 response.data is :  {age: 56, count: 6153, name: 'Ion'}

const newCopyPredictPerson={...predictPerson , age:response.data.age , count:response.data.count , name:response.data.name};
setPredictPerson(newCopyPredictPerson);

  })

}


  //----------------------------------------------------------------------

  return(
    <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

  <h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>function component is {propText}</h1>

<label htmlFor="nameUserChange">write a name:
<input type="text" id="nameUserChange" name="nameUserChange" placeholder="ex: Mary" onChange={getValueNameChangeable}/>
</label>

  <button onClick={handleShowPersonInfo}>show person`s info from response.data JS obj</button>

  <ul>
<li>person age : {predictPerson.age}</li>
<li>person count : {predictPerson.count}</li>
<li>person name : {predictPerson.name}</li>
  </ul>

  </section>
  );


}

export default PedroAPIpersonObj;

//
