import React, {useState,useEffect} from 'react';

import mypersons from "./persons.js";
console.log(" !!!=== mypersons from IfStateText function component is : " , mypersons);
// !!!=== mypersons from IfStateText function component is :
// (5) [{…}, {…}, {…}, {…}, {…}]
// 0
// :
// {code: 1186385258, name: 'Andreea', surname: 'Iordache', urlImage: 'url(https://images.unsplash.com/photo-143876168103…Hx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)', tel: '0722000000'}
// 1
// :
// {code: 1991269451, name: 'Iulian', surname: 'Pop', urlImage: 'url(https://images.unsplash.com/photo-150004899395…Hx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80)', tel: '0722669610'}
// 2
// :
// {code: 1283420333, name: 'Ionel', surname: 'Cutare', urlImage: 'url(https://images.unsplash.com/photo-150459381142…Hx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)', tel: '0733445566'}
// 3
// :
// {code: 1643751176, name: 'Maria', surname: 'Aco', urlImage: 'url(https://images.unsplash.com/photo-159310454748…Hx8fGVufDB8fHx8&auto=format&fit=crop&w=1153&q=80)', tel: '0733445566'}
// 4
// :
// {code: 1861657713, name: 'Roxana', surname: 'Zamfirescu', urlImage: 'url(https://images.unsplash.com/photo-157314024763…Hx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)', tel: '0755667788'}
// length
// :
// 5
// [[Prototype]]
// :
// Array(0)

//https://www.w3schools.com/react/react_conditional_rendering.asp

function IfStateText(props){
  //destructurare props
  const {propWidth , propColor , propText , propState}=props;

  console.log("=== !!! propState from IfStateText is : " , propState);
  //=== !!! propState from IfStateText is :  false

  const carsSchoolIf = ['Ford', 'BMW', 'Audi'];
  console.log("---$$$ carsSchoolIf is : " , carsSchoolIf);
  //---$$$ carsSchoolIf is :  (3) ['Ford', 'BMW', 'Audi']

  const [myListCar , setMyListCar]=useState([]);

const handleFillList=(event) =>{
  console.log("myListCar is : " , myListCar);
  setMyListCar(carsSchoolIf);
}
//------------------------------------------------------------------------------
const [peopleDiscord , setPeopleDiscord]=useState([]);

const handleFillPeopleArr=(event) =>{
  setPeopleDiscord(mypersons);
}



  return(
    <section style={{border:`3px dashed ${propColor}` , padding:"1em" , margin:"1em"}}>
<h1 style={{color:propColor}}>{propText}</h1>

{myListCar.map((elCar, index) =>{
  return <ul key={index}>
<li>elCar is : {elCar}</li>
  </ul>
})}

<button onClick={handleFillList} style={{margin:"1em" , padding:"1em"}}>click to fill and show the car list</button><br></br>

{peopleDiscord.map((elPerson, index) =>{
  return <ul key={index}>
<li>
<h3 style={{color:propColor}}>{elPerson.name} {elPerson.surname} has code: {elPerson.code}</h3>
<strong style={{color:"gray"}}>{elPerson.tel}</strong>
<div style={{
  height:"300px",
  width:propWidth,
  backgroundImage:elPerson.urlImage,
  backgroundRepeat:"no-repeat",
  backgroundPosition:"center",
  backgroundSize:"cover",
  border:`3px dashed ${propColor}`
}}>photo</div>
</li>
  </ul>
})}

<button onClick={handleFillPeopleArr} style={{margin:"1em" , padding:"1em"}}>click to fill and show the people array</button>

    </section>
  );
}


export default IfStateText;
//
// height: 300px;
//  width: 100%;
//  background-repeat: no-repeat;
//  background-image: url(./images/pexels-photo-847393.jpeg);
//  background-position: center;
//
//  background-size: cover;
