import React, {useState , useEffect} from 'react';
import { nanoid } from "nanoid";

import ReadOnlyRowActivity from "./componentsActivity/ReadOnlyRowActivity.js";
import EditableRowActivity from "./componentsActivity/EditableRowActivity.js";

import newData from "./newMock-data.json";

import personData from "./mock-data.json";

//Create a Table in React | Learn how to view, add, delete and edit rows in a table from Scratch
//https://www.youtube.com/watch?v=dYjdzpZv5yc

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

const [addFormDatActivity , setAddFormDataActivity]=useState({
  name:"",
  price:0
});
//---------------

const [editFormDataActivity , setEditFormDataActivity]=useState({
  name:"",
  price:0
});

//--------------

  const [editContactIdActivity, setEditContactIdActivity] = useState(null);

//--------------

const handleAddFormChangeActivity=(event) =>{
  event.preventDefault();
//destructurare obiect
const newCopyaddFormDatActivity={...addFormDatActivity , [event.target.name]: event.target.value};

setAddFormDataActivity(newCopyaddFormDatActivity) ;
}

//------------------

const handleEditFormChangeActivity=(event) =>{

  event.preventDefault();

  const newCopyFormDataActivity={...editFormDataActivity , [event.target.name]: event.target.value}
setEditFormDataActivity(newCopyFormDataActivity);
}

//---------------------

const handleAddFormSubmitActivity=(event) =>{

  event.preventDefault();

const newContactActivity={
  id: nanoid(),
  name:addFormDatActivity.name,
  price:addFormDatActivity.price
};

console.log("newContactActivity" , newContactActivity);
//destructurare array
const newnContacts=[...nContacts, newContactActivity];
console.log("newnContacts is : " , newnContacts);

setNcontacts(newnContacts);

}


//------------------------

const handleEditFormSubmitActivity=(event) =>{

  event.preventDefault();

  const editedContactActivity={
id:editContactIdActivity,
name:editFormDataActivity.name ,
price:editFormDataActivity.price
  };

  const newnContacts=[...nContacts];

    const index = nContacts.findIndex((nContact) => nContact.id === editContactIdActivity);

    newnContacts[index]=editedContactActivity;

setNcontacts(newnContacts);
setEditContactIdActivity(null);
}

//-------------------------------------------------------------

const handleEditClickActivity=(event , nContact) =>{

  event.preventDefault();

  setEditContactIdActivity(nContact.id);

  console.log("editContactIdActivity at function handleEditClickActivity : " , editContactIdActivity);

  const formValuesActivity={
    name:nContact.name,
    price:nContact.price
  };

  setEditFormDataActivity(formValuesActivity);

  console.log("editFormDataActivity at function handleEditClickActivity : " , editFormDataActivity);

}

//------------------


const handleCancelClickActivity=(event) =>{

setEditContactIdActivity(null);

}

//------------------------

const handleDeleteClickActivity=(event , contactIdActivity) =>{

  const newnContacts=[...nContacts];

  const index = nContacts.findIndex((contact) => contact.id === contactIdActivity);

  newnContacts.splice(index, 1);

  setNcontacts(newnContacts);

}

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

<form onSubmit={handleEditFormSubmitActivity}>
<table>

<thead>
<tr>
<th>name</th>
<th>price</th>
<th>actions</th>
</tr>
</thead>

<tbody>

{nContacts.map((nContact , index) =>{
  //map are intotdeauna return
return(<>

  {editContactIdActivity === nContact.id ?
                                         <EditableRowActivity editFormDataActivityProp={editFormDataActivity} handleEditFormChangeActivityProp={handleEditFormChangeActivity} handleCancelClickActivityProp={handleCancelClickActivity}/>
                                         :
                                         <ReadOnlyRowActivity nContactProp={nContact} indexProp={index} handleEditClickActivityProp={handleEditClickActivity} handleDeleteClickActivityProp={handleDeleteClickActivity}/>}

</>);
})}

</tbody>

</table>
</form>

<h2>add an activity</h2>

<form onSubmit={handleAddFormSubmitActivity}>
<input type="text" name="name" id="name" required="required" placeholder="write an activity" onChange={handleAddFormChangeActivity}/>
<input type="number" name="price" id="price" required="required" placeholder="write it`s price" onChange={handleAddFormChangeActivity}/>

<button type="submit">add activity</button>
</form>

</div>



    </section>

  );



}

export default BudgetCrudLikeFunctionComponent;
