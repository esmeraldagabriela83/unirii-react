import React, {useState,useEffect} from 'react';

//https://www.w3schools.com/react/react_conditional_rendering.asp
//https://www.w3schools.com/react/showreact.asp?filename=demo2_react_conditionals_logical
//Discord
//https://discord.com/channels/942782643823603793/942782644905713680

const carsSchool = ['Ford', 'BMW', 'Audi'];
console.log("---&&& carsSchool is : " , carsSchool);
//---&&& carsSchool is :  (3) ['Ford', 'BMW', 'Audi']

function IfText(props){

const {propWidth , propColor , propText}=props;

if(carsSchool.length > 0){
  return(
    <section style={{border:`3px solid ${propColor}`}}>
    <h1 style={{color:propColor}}>from {propText} carsSchool.length is : {carsSchool.length}</h1>
  {carsSchool.map((elCar , index) =>{
    return <ul key={index}>
<li style={{textAlign:"center"}}>car is : {elCar}</li>
    </ul>
  })}
</section>
)
}else{
  return(
    <h1 style={{border:`3px solid ${propColor}`}}>carsSchool array is empty. </h1>
  )
}

}


export default IfText;
//
