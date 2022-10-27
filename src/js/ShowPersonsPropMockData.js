import React, {useRef , useState , useEffect} from 'react';
import data from "./mock-data.json";
import mycats from "./cats.js";


function ShowPersonsPropMockData(props){

  const {propWidth , propColor , propText , propDogs}=props;

  //----------------------------------------------------------------------------

const [defaultArrData , setDefaultArrData]=useState(data);

//afiseaza sum of shown prices of the propAge
let justSumEm=0;

defaultArrData.forEach(functionSumPrices);

function functionSumPrices(item , index , array){
  justSumEm = justSumEm + parseFloat(item.price);
}

//------------------------------------------------------------------------------
//afiseaza sum of prices shown on the page on btn click

let sumArrPrices=0;

const sumHandleChange=(event) =>{

defaultArrData.forEach(sumPricesFunc);

function sumPricesFunc(item , index , array){
sumArrPrices = sumArrPrices + parseFloat(array[index].price);
}

const sumStrong=document.getElementById('sumStrong');

sumStrong.innerText=sumArrPrices;

}

//------------------------------------------------------------------------------

const handleChangeIntoDefaulPersons=(event) =>{
  setDefaultArrData(data);
}

const handleChangeIntoCats=(event) =>{
  setDefaultArrData(mycats);
}

const handleChangeIntoDogs=(event) =>{
  setDefaultArrData(propDogs);
}

  //----------------------------------------------------------------------------

return(

  <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

<h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>function component is {propText}</h1>

<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor , backgroundColor:"PapayaWhip"}}>

{
  defaultArrData.map((element , index) =>{
    //map are intotdeauna return
    return(
      <div key={index} style={{border:"3px dotted green" , margin:"1em" , padding:"1em"}}>
<p>{element.fullName}</p>
<p>{element.address}</p>
<p>{element.phoneNumber}</p>
<p>{element.email}</p>
<p>{element.price}</p>
      </div>
    );
  })
}

<p>sum is : <em>{justSumEm}</em></p>

<button onClick={sumHandleChange}>sum of all 5 presented once on the page</button>

<p>sum after btn click is : <strong id="sumStrong"></strong> </p>

<div style={{border:"3px solid yellowgreen" , padding:"1em" , margin:"1em"}}>

<button onClick={handleChangeIntoDefaulPersons}>change into mock-data persons</button>
<button onClick={handleChangeIntoCats}>change into cats</button>
<button onClick={handleChangeIntoDogs}>change into dogs</button>

</div>

</article>

</section>

);

}

export default ShowPersonsPropMockData;

//
