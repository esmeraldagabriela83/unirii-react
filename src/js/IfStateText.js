import React, {useState,useEffect} from 'react';

//https://www.w3schools.com/react/react_conditional_rendering.asp

function IfStateText(props){
  //destructurare props
  const {propWidth , propColor , propText}=props;

  const carsSchoolIf = ['Ford', 'BMW', 'Audi'];
  console.log("---$$$ carsSchoolIf is : " , carsSchoolIf);
  //---$$$ carsSchoolIf is :  (3) ['Ford', 'BMW', 'Audi']

  const [myListCar , setMyListCar]=useState([]);

const handleFillList=(event) =>{
  console.log("myListCar is : " , myListCar);
}

  return(
    <>
<h1>{propText}</h1>

<button onClick={handleFillList}>click to fill the list</button>
    </>
  );
}


export default IfStateText;
//
