import React, {useRef , useState , useEffect} from 'react';

//https://www.youtube.com/watch?v=8KB3DHI-QbM&t=35s
//React Notes App Tutorial from Scratch | A CSS and React Project you can add to your Portfolio!


function BudgetFunctionComponent(props){

const {propWidth , propColor , propText}=props;

//------------------------------------------------------------------------------
const initialExpensesBudget = [
  { id: 1, charge: "rent", amount: 1600 },
  { id: 2, charge: "car payment", amount: 400 },
  {
    id: 3,
    charge: "credit card bill ",
    amount: 1200
  }
];



const handleInitialItems=(event) =>{
  const allinitialItem=document.querySelectorAll('.initialItem');

  console.log("--- allinitialItem is : " , allinitialItem);

  for(let i=0 ; i<allinitialItem.length ; i++){
    allinitialItem[i].innerText=initialExpensesBudget[i].charge + " , "  + initialExpensesBudget[i].amount;
    allinitialItem[i].style.border='3px solid yellowgreen';
    allinitialItem[i].style.padding='1em';
    allinitialItem[i].style.margin='1em';
  }

}

//---------------------------------filter over 18--------------------------------------------------
const agesSchool = [32, 33, 16, 40 , 5 , 35 , 67 , 3 , 45 , 90 , 87];


const handleFilterMethod=(event) =>{
  console.log("you clicked the filter btn");

  function checkAdultSchoolFunc(ageSchool){
    return ageSchool >= 18;
  }

const demoFilter=document.getElementById('demoFilter');
demoFilter.style.border='3px solid cyan';
demoFilter.style.padding='0 1em';
demoFilter.style.margin='1em';
demoFilter.innerText=agesSchool.filter(checkAdultSchoolFunc).join(" , ");
}

//----------------------------------filter over 40--------------------------------------------

const handleOver40=(event) =>{
  console.log("you clicked yhe over 40 years old btn");


function checkOver40SchoolFunc(itemAge){
  if(itemAge >=40){
    return itemAge;
  }
}

  const demoFilterOver40=document.getElementById('demoFilterOver40');
  demoFilterOver40.style.border='3px solid magenta';
  demoFilterOver40.style.padding='0 1em';
  demoFilterOver40.style.margin='1em';
  demoFilterOver40.innerText=agesSchool.filter(checkOver40SchoolFunc).join(" , ");

const demoFilterOver40length=document.getElementById('demoFilterOver40length');
demoFilterOver40length.innerText=agesSchool.filter(checkOver40SchoolFunc).length;

}

//------------------------handle stringify------------------------------------------------------

const objSchool = {name: "John",
             age: 30,
             city: "New York"};

const handleStringify=(event) =>{
  console.log("you clicked the stringify btn");

const stringifyDemo=document.getElementById('stringifyDemo');
stringifyDemo.innerText=JSON.stringify(objSchool);
}

//------------------------------includes method arr-----------------------------------------------
let textSchoolIncludes = "Hello world, welcome to the universe.";

const handleIcludesSchool=(event) =>{
  console.log("you clicked the includes btn");

  const demoIncludesSchool=document.getElementById('demoIncludesSchool');
  demoIncludesSchool.innerText=textSchoolIncludes.includes("world");
}

//------------------------------------------------------------------------------

return(
  <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

<h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>function component is {propText}</h1>

<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

<button onClick={handleInitialItems}>show initial items from initialExpenses array</button>

<ul>
<li className="initialItem"></li>
<li className="initialItem"></li>
<li className="initialItem"></li>
</ul>

</article>



<p>filter array method</p>

<p>all ages from the array : <em>{agesSchool.join(" , ")}</em></p>

<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

<button onClick={handleFilterMethod}>Get every element in the array that has a value of 18 or more:</button>

<p>all ages above18 from the array : <em id="demoFilter"></em></p>

</article>

<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

<button onClick={handleOver40}>show people of 40 years old or more</button>

<p>people over 40, from the array : <em id="demoFilterOver40"></em></p>
<p>there are  <strong><em id="demoFilterOver40length"></em></strong> people over 40, from the array .</p>

</article>

<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

<h2><em>stringify : </em> Create a JSON string from a JavaScript object.</h2>

<button onClick={handleStringify}>stringify the obj</button>

<p id="stringifyDemo"></p>

</article>

<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

<h1>JavaScript Strings</h1>
<h2>The includes() Method</h2>

<p>includes() returns true if a string contains a specified string.</p>
<p>textSchoolIncludes is : <em>{textSchoolIncludes}</em></p>

<button onClick={handleIcludesSchool}>Find word "world":</button>

<p id="demoIncludesSchool"></p>

</article>

  </section>
);

}

export default BudgetFunctionComponent;
