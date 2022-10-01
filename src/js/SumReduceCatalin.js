import React from "react";

const secNRS=[5, 7, 8, 1, 3];
//------------------------------------------------------------------------------
const thirdArr=[10, 20, 30, 40, 50];
let sum = 0;
function sumFunction(itemNr){
  console.log("sum is : " , sum);
  return sum = sum + itemNr;
}

thirdArr.forEach(sumFunction);

//------------------------------------------------------------------------------
const fourthArr=[10, 20, 30, 40, 50];
const reduceSum=fourthArr.reduce((acc , elNr) =>{
  return acc + elNr;
});

//------------------------------------------------------------------------------

function SumReduceCatalin(props){

const {propWidth , propColor , propText , propStateTrue , propStateFalse , numbersProp}=props;

console.log("numbersProp is : " , numbersProp);
//numbersProp is :  (5) [5, 7, 8, 1, 3]

const cataSum=numbersProp.reduce((acc, elNr) =>{
  return acc + elNr;
},0);

//------------------------------------------------------------------------------

console.log("---secNRS is : " , secNRS);
const cataSumSec=secNRS.reduce((acc, elNr) =>acc + elNr,0);

  return(
    <>
<h3 style={{color:propColor , margin:"1em" , padding:"1em"}}>{propText} function component</h3>
<h3 style={{color:propColor , margin:"1em" , padding:"1em"}}>cataSum is : {cataSum}</h3>
<h3 style={{color:propColor , margin:"1em" , padding:"1em"}}>cataSumSec is : {cataSumSec}</h3>
<h3 style={{color:propColor , margin:"1em" , padding:"1em"}}>sum is : {sum}</h3>
<h3 style={{color:propColor , margin:"1em" , padding:"1em"}}>reduceSum is : {reduceSum}</h3>
    </>
  );
}

export default SumReduceCatalin;











//
