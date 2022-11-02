import React, {useRef , useState , useEffect} from 'react';
import Axios from "axios";

//axios allows to make a get request
//HOW TO GET DATA FROM AN API ENDPOINT

//Axios.get("url")
//i make a request to a website and get the information from that url returns=fetch data
//the fetch function returns a promise

//ReactJS Course [7] - How To Fetch Data From an API in React
//https://www.youtube.com/watch?v=je3FTTunyp4&t=1545s

//url :
//https://excuser.herokuapp.com/

//party url
//https://excuser.herokuapp.com/v1/excuse/party/

//family url
//https://excuser.herokuapp.com/v1/excuse/family/

//office url
//https://excuser.herokuapp.com/v1/excuse/office/



function PedroExcuse(props){

  const {propWidth , propColor , propText}=props;

  //------------axios party-----------------------------------------------------------
const [party , setParty]=useState("");

const handleShowExcuseParty=(event) =>{
  console.log("you clicked the party excuse btn");

Axios.get("https://excuser.herokuapp.com/v1/excuse/party/")
.then((response) =>{
  console.log("party JS obj response.data is : " , response.data);

//party  response.data is an array with JSON obj inside it  :
// [{…}]
// 0
// :
// {id: 411, excuse: "I'm rushing something before midnight, it will affect my grades.", category: 'party'}
// length
// :
// 1
// [[Prototype]]
// :
// Array(0)

console.log("excuse is : " , response.data[0].excuse);
//excuse is :  Sorry, I'm helping my friend through a really rough time now.
console.log("id is : " , response.data[0].id);
//id is :  413
console.log("category is : " , response.data[0].category);
//category is :  party

setParty(response.data[0].excuse);

})

}

//--------------


const [partyObj , setPartyObj]=useState({
  id:0,
  excuse:"",
  category:""
});


const handleShowExcusePartyObj=(event) =>{
  console.log("you clicked the btn for showing party obj");

Axios.get("https://excuser.herokuapp.com/v1/excuse/party/")
.then((response) =>{
  console.log(response.data);
  //I get an arr
  //[{…}]

console.log(response.data[0]);
//I get an obj from the arr
//{id: 402, excuse: "I have the worst migraine. Yeah, I don't think that I'll be able to make it to your party tonight.", category: 'party'}

const newCopyPartyObj={...partyObj , id:response.data[0].id ,
                                     excuse:response.data[0].excuse ,
                                     category:response.data[0].category};

setPartyObj(newCopyPartyObj);

})

}


//--------------axios ------------passing parrameters from each btn on click event-------------

const [generatedExcuse , setGeneratedExcuse]=useState("");

const fetchExcuse=(event , parameterExcuse) =>{
  console.log(`you clicked the fetch excuse ${parameterExcuse} btn`);

Axios.get(`https://excuser.herokuapp.com/v1/excuse/${parameterExcuse}/`)
  .then((response) =>{
    console.log("response.data is : " , response.data);
    console.log("response.data[0].excuse is : " , response.data[0].excuse);

    setGeneratedExcuse(response.data[0].excuse)
  })

}

//--------------axios -------------------------
const [generatedExcuseObj , setGeneratedExcuseObj]=useState({
  id:0,
  excuse:"",
  category:""
});

const fetchExcuseObj=(event , paramExcuse) =>{
  console.log(`you clicked the fetch excuse obj ${paramExcuse}`);

Axios.get(`https://excuser.herokuapp.com/v1/excuse/${paramExcuse}/`)
  .then((response) =>{
    console.log(response.data);
    console.log("response.data[0].excuse is : " , response.data[0].excuse);

    const newCopyGeneratedExcuseObj={...generatedExcuseObj ,
                                        id:response.data[0].id ,
                                        excuse:response.data[0].excuse ,
                                        category:response.data[0].category};

setGeneratedExcuseObj(newCopyGeneratedExcuseObj);

  })

}


  //-------------------------------------------------------------------------

return(
  <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

<h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>function component is {propText}</h1>

<h1>generate an excuse</h1>

<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

<button onClick={handleShowExcuseParty}>party excuse</button>
<h3>party excuse is : <em>{party}</em></h3>

<button onClick={handleShowExcusePartyObj}>party excuse obj</button>

<ul>
<li>id : {partyObj.id}</li>
<li>excuse is : <em>{partyObj.excuse}</em></li>
<li>category is : {partyObj.category}</li>
</ul>

</article>

<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

<h3>generate an excuse</h3>

<button onClick={(event) =>fetchExcuse(event , "party")}>party excuse</button>
<button onClick={(event) =>fetchExcuse(event , "family")}>family excuse</button>
<button onClick={(event) =>fetchExcuse(event , "office")}>office excuse</button>
<button onClick={(event) =>fetchExcuse(event , "children")}>children excuse</button>
<button onClick={(event) =>fetchExcuse(event , "college")}>college excuse</button>
<button onClick={(event) =>fetchExcuse(event , "funny")}>funny excuse</button>
<button onClick={(event) =>fetchExcuse(event , "unbelievable")}>unbelievable excuse</button>

<p>generatedExcuse is : <em><strong>{generatedExcuse}</strong></em></p>

</article>

<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

<h3>generate an obj excuse</h3>

<button onClick={(event) =>fetchExcuseObj(event , "party")}>party excuse</button>
<button onClick={(event) =>fetchExcuseObj(event , "family")}>family excuse</button>
<button onClick={(event) =>fetchExcuseObj(event , "office")}>office excuse</button>
<button onClick={(event) =>fetchExcuseObj(event , "children")}>children excuse</button>
<button onClick={(event) =>fetchExcuseObj(event , "college")}>college excuse</button>
<button onClick={(event) =>fetchExcuseObj(event , "funny")}>funny excuse</button>
<button onClick={(event) =>fetchExcuseObj(event , "unbelievable")}>unbelievable excuse</button>

<p>generatedExcuse obj is :</p>

<ul>
<li>id : <strong>{generatedExcuseObj.id}</strong></li>
<li>excuse : <strong>{generatedExcuseObj.excuse}</strong></li>
<li>category : <strong>{generatedExcuseObj.category}</strong></li>
</ul>

</article>

</section>
);

}

export default PedroExcuse;


//
