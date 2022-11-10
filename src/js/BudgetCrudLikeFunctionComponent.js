import React, {useState , useEffect} from 'react';

import newData from "./newMock-data.json";

import personData from "./mock-data.json";



//https://www.w3schools.com/react/react_conditional_rendering.asp

//generate random color
//https://css-tricks.com/snippets/javascript/random-hex-color/

function BudgetCrudLikeFunctionComponent(props){

  const {propWidth , propColor , propText}=props;

  //--------------------------

  const handleNewData=(event) =>{
    console.log("!!!!!!!!!!!!!!!! newData" , newData);
    console.log("!!!!!!!!!!!!!!!! newData.length" , newData.length);

    console.log("!!!!!!!!!!!!!!!! personData" , personData);
    console.log("!!!!!!!!!!!!!!!! personData.length" , personData.length);
  }

  //----------------

  const [done , setDone]=useState(false);

  const [totalBudget , setTotalBudget]=useState(750);

//modify total budget background color
  let defaultTitleColor="floralWhite";

  const randomColor = Math.floor(Math.random()*16777215).toString(16);



//---------------------------------------------------------------------------

const [nContacts , setNcontacts]=useState(newData);

let totalPrices=0;
nContacts.forEach(budgetSumFunction);

function budgetSumFunction(item){
  totalPrices= totalPrices + parseFloat(item.price);
}

let remainingDifference=totalBudget - totalPrices;
//---------------------------

// const modifyBudgetByUserValueInput=(event) =>{
//   setTotalBudget(event.target.value);
// }

//from inside input tag
// onChange={modifyBudgetByUserValueInput}

//--------------

const handleEditBudget=(event) =>{
  console.log("you clicked to edit new budget");
    setDone(true);
}

//----------------

const handleSaveNewBudget=(event) =>{
  console.log("you clicked to save new budget");

const userInputBudget=document.getElementById('userInputBudget');
setTotalBudget(userInputBudget.value);

//modify total budget background color
const titleTotalBudget=document.getElementById('titleTotalBudget');
console.log("randomColor is : " , randomColor);
titleTotalBudget.style.backgroundColor= "#" + randomColor;

//modify remaining background color
const remaining=document.getElementById('remaining');

    setDone(false);
}

//--------------------------------------preia valorile din input-urile ce apartin formularului completat de user-----------------------------------------


//-------------------------------------------------------------


//------------------------------------------------------------------------------

  return(


      <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

      <button onClick={handleNewData}>show new data and person data</button>

    <h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>function component is {propText}</h1>

    <h1 id="titleTotalBudget" style={{backgroundColor:defaultTitleColor}}>your total budget : {totalBudget}</h1>

        {done ?
       <>

       <label> modify your budget<br></br>
       <input type="number" name="userInputBudget" id="userInputBudget" placeholder="write nr"/>
       </label>

       <button onClick={handleSaveNewBudget}>save modified budget</button>

         </> :
       <>

        <button onClick={handleEditBudget}>edit your budget</button>
       </> }

{remainingDifference >0 ?
  <h1 id="remaining" style={{backgroundColor:"green"}}>remaining : {remainingDifference}</h1>
                        :
    <h1 id="remaining" style={{backgroundColor:"red"}}>remaining : {remainingDifference}</h1>
}



  <h1 id="titleTotalPrices">Spent so far : {totalPrices}</h1>


<div className="app-container">

<table>

<thead>
<th>name</th>
<th>price</th>
</thead>

<tbody>

{nContacts.map((nContact , index) =>{
  //map are intotdeauna return
return(
  <tr key={index}>
  <td>{nContact.name}</td>
  <td>{nContact.price}</td>
  </tr>
);
})}

</tbody>

</table>

<h2>add an activity</h2>

<form>
<input type="text" name="name" id="name" required="required" placeholder="write an activity"/>
<input type="number" name="price" id="price" required="required" placeholder="write it`s price"/>

<button type="submit">add activity</button>
</form>

</div>



    </section>

  );



}

export default BudgetCrudLikeFunctionComponent;
