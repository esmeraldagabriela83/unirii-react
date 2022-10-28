import React, {useRef , useState , useEffect , Fragment} from 'react';
import {nanoid} from "nanoid";
//the nanoid will automatically generates an id
import data from "./mock-data.json";
import ReadOnlyRow from "././components/ReadOnlyRow.js";
import EditableRow from "././components/EditableRow";

//https://www.youtube.com/watch?v=dYjdzpZv5yc
//Create a Table in React | Learn how to view, add, delete and edit rows in a table from Scratch

//git hub source
//https://github.com/chrisblakely01/react-creating-a-table

const formStyle={
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  flexDirection:"column",
  flexWrap:"wrap",
  border:"3px dashed tomato",
  padding:"1em"
}

function CrudWithFormCataLike(props){

  const {propWidth , propColor , propText}=props;

//------------------------------------------------------------------------------

  const [contacts , setContacts]=useState(data);

//--------------------------------------------------------------------------data display info-------------------------------------------------------------------------------------------------------------
//afiseaza suma
let sumData=0;

    for(let i=0 ; i<contacts.length ; i++){
sumData = sumData + parseFloat(contacts[i].price);
    }
//--------------------------------------------------------------------------
//afiseaza suma dupa click on btn
let sumDataPrices = 0 ;

  const handleSumPricesData=(event) =>{
console.log("sumDataPrices is : " , sumDataPrices);

for(let i=0 ; i<data.length ; i++){
  sumDataPrices = sumDataPrices + parseFloat(data[i].price);
}

const allPricesSumData=document.getElementById('allPricesSumData');
allPricesSumData.innerText=sumDataPrices;
  };

  //-------------------------------------------------------------------------data display info--------------------------------------------------------------------------------------------------------

const [addFormData , setAddFormData]=useState({
  fullName:'',
  address:'',
  phoneNumber:'',
  email:'',
  price:0
});

const [editContactId , setEditContactId]=useState(null);

const [editFormData , setEditFormData]=useState(
  {
    fullName:'',
    address:'',
    phoneNumber:'',
    email:'',
    price:0
  }
);

//---------------
//functie pt onChange pe input-uri
const handleAddFormChange=(event) =>{
event.preventDefault();

const fieldName=event.target.getAttribute('name');
const fieldValue=event.target.value;

const newFormData={...addFormData};
newFormData[fieldName]=fieldValue;

setAddFormData(newFormData);
}

//----------------
//functie pt submit event

const handleAddFormSubmit=(event) =>{
  event.preventDefault();

const newContact={
  id:nanoid(),
  fullName:addFormData.fullName,
  address:addFormData.address,
  phoneNumber:addFormData.phoneNumber,
  email:addFormData.email,
  price:addFormData.price
}

const newContacts=[...contacts , newContact];
setContacts(newContacts);

}


const handleEditFormSubmit=(event) =>{
    event.preventDefault();

const editedContact={
  id:editContactId,
  fullName:editFormData.fullName,
  address:editFormData.address,
  phoneNumber:editFormData.phoneNumber,
  email:editFormData.email,
  price:editFormData.price
}

const newContacts=[...contacts];

const index=contacts.findIndex((contact) => contact.id === editContactId);

newContacts[index]=editedContact;
setContacts(newContacts);
setEditContactId(null);

}


const handleEditFormChange=(event) =>{
  event.preventDefault();

const fieldName=event.target.getAttribute("name");
const fieldValue=event.target.value;

const newFormData={...editFormData};
newFormData[fieldName]=fieldValue;

setEditFormData(newFormData);

}

//-------------------------handle edit---------------------------------------------------------------------------------------------handle edit---------------------

const handleEditClick = (event , contact) =>{
event.preventDefault();

setEditContactId(contact.id);

const formValues={
  fullName:contact.fullName,
  address:contact.address,
  phoneNumber:contact.phoneNumber,
  email:contact.email,
  price:contact.price
};

setEditFormData(formValues);

}

const handleCancelClick=(event) =>{
  setEditContactId(null);
}

//---------------handle delite-----------------------------

const handleDeliteClick=(contactId) =>{
const newContacts=[...contacts];

const index=contacts.findIndex((contact) => contact.id === contactId);

//use the splice() method to remove the element with the index from the array
//at position index remove one element

newContacts.splice(index , 1);

//update the state
setContacts(newContacts);

}

  //----------------------------------------------------------------------------

  return(
    <section style={{padding:"1em 0" , margin:"1em 0" , border:`3px solid ${propColor}`}}>

<h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>function component is {propText}</h1>

<p>crud with form cata like curs 41</p>

<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor , backgroundColor:"PapayaWhip"}}>
{data.map((personElement , indexPers) =>{
  //map are intotdeauna return
  return(
    <div key={indexPers} style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` ,  color:"MediumPurple" , textAlign:"center"}}>
  <p>person id is <strong>{personElement.id}</strong></p>
  <p>person fullName is <strong>{personElement.fullName}</strong></p>
  <p>person address is <strong>{personElement.address}</strong></p>
  <p>person tel: <strong>{personElement.phoneNumber}</strong></p>
  <p>person email is : <strong>{personElement.email}</strong></p>
  <p>person price is : <strong>{personElement.price}</strong></p>
    </div>
  );
})}

<p>sum of prices from data objects is : <strong id="sumDataPrice">{sumData}</strong></p>

<button onClick={handleSumPricesData}>add prices from all data persons / click only once</button>

<p>sum is of all prices from data arr with obj from mock-data.json is :  <strong id="allPricesSumData"></strong></p>
<p>data.length is : {data.length}</p>

</article>


<a href="https://www.youtube.com/watch?v=dYjdzpZv5yc" target="_blank"><h1>get me the tutorial</h1></a>

<a href="https://github.com/chrisblakely01/react-creating-a-table" target="_blank"><h1>get me the git hub source</h1></a>


<article style={{padding:"1em 0" , margin:"1em 0" , border:`3px solid ${propColor}` , color:propColor}}>

<div className="app-container">
<form onSubmit={handleEditFormSubmit}>
<table>

<thead>
<tr>
<th>Name</th>
<th>Address</th>
<th>Phone Number</th>
<th>Email</th>
<th>Price</th>
<th>Actions</th>
</tr>
</thead>

<tbody>

{contacts.map((contact , index) =>{
  //map are intotdeauna return
  return(
    <Fragment>
    {editContactId === contact.id ? ( <EditableRow editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick}/>)
                                  : (<ReadOnlyRow contact={contact} propColor={"coral "} handleEditClick={handleEditClick} handleDeliteClick={handleDeliteClick}/>)}


  </Fragment>
);
})}

</tbody>

</table>
</form>

<h2>Add a contact</h2>

<form style={formStyle} onSubmit={handleAddFormSubmit}>

<input type="text" name="fullName" required="required" placeholder="Enter a name..." onChange={handleAddFormChange}/>
<input type="text" name="" required="required" placeholder="Enter a address..." onChange={handleAddFormChange}/>
<input type="text" name="phoneNumber" required="required" placeholder="Enter a tel..." onChange={handleAddFormChange}/>
<input type="email" name="email" required="required" placeholder="Enter a email..." onChange={handleAddFormChange}/>
<input type="number" name="price" required="required" placeholder="Enter a price..." onChange={handleAddFormChange}/>

<button type="submit">Add</button>

</form>

</div>

</article>

    </section>
  );


}

export default CrudWithFormCataLike;
///
