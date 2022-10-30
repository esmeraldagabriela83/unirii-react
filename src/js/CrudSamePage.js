import React, {useRef , useState , useEffect} from 'react';
import { nanoid } from "nanoid";
import data from "./mock-data.json";

console.log("data from CrudSamePage is arr: " , data);




function CrudSamePage(props){

const {propWidth , propColor , propText}=props;

    //-----------------------------------------------------------------------

    const handleConsoleData=(event) =>{
      console.log("data from CrudSamePage function component is arr : " , data);
      console.log("data.length is : " , data.length);
    }

    //--------------------------------------------------------------------------

//const [tutContacts , setTutContacts]=useState(data);
const [tutContacts , setTutContacts]=useState([]);

const [addTutFormData , setAddTutFormData]=useState({
  fullName:"",
  address:"",
  phoneNumber:"",
  email:"",
  price:""
});



//------------------take the values from the inputs and create a addTutFormData------------------------------------------------------------

const handleTutAddFormChange=(event) =>{
   event.preventDefault();

   //destructurare object cata ultimul curs andrei
  //setAddTutFormData({...addTutFormData, [event.target.name]: event.target.value});

  //sau tot cu destructurare obj
  const newAddTutFormData={...addTutFormData , [event.target.name]: event.target.value};
  setAddTutFormData(newAddTutFormData);
}

//------------------------------------------------------------------------------


//--------------------------------add the new obj contact to the tutContacts arr------------------------------------------

const handleTutAddFormSubmit=(event) =>{
event.preventDefault();

const newTutContact={
  id:nanoid(),
  fullName:addTutFormData.fullName,
  address:addTutFormData.address,
  phoneNumber:addTutFormData.phoneNumber,
  email:addTutFormData.email,
  price:addTutFormData.price
};

//update the state of contacts
//destructurare array
const newTutContacts=[...tutContacts , newTutContact];
setTutContacts(newTutContacts);

}

//------------------------------------------------------------------------------







//------------------------------delete-----------------------------------------

const handleDeleteOnePage=(event , indexDeleteRowPerson) =>{
  console.log("you clicked thedelete btn");

  const newcontacts=[...tutContacts];
  newcontacts.splice(indexDeleteRowPerson , 1);
  //update the state of tutContacts array

  setTutContacts(newcontacts);

}


//--------------------------------------------------------------------------

return(

  <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

<h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>function component is {propText}</h1>

<button onClick={handleConsoleData}>click to show data arr in console</button>


<div className="app-container">

<table>

<thead>
<tr>
<th>Name</th>
<th>Address</th>
<th>Tel</th>
<th>email</th>
<th>price$</th>
<th>Actions</th>
</tr>
</thead>

<tbody>
{tutContacts.map((tutContact , tutIndex) =>{
  //map are intotdeauna return
return(
  <tr key={tutIndex} style={{border:`5px solid green` , margin:"1em" , padding:"1em"}}>
  <td>{tutContact.fullName}</td>
  <td>{tutContact.address}</td>
  <td>{tutContact.phoneNumber}</td>
  <td>{tutContact.email}</td>
  <td>{tutContact.price}</td>
  <td><button onClick={(event) =>handleDeleteOnePage(event , tutIndex)}>delete</button></td>
  </tr>
) ;
})}
</tbody>

</table>


<h2>Add a contact in tutContacts arr</h2>

<form style={{display:"flex", alignItems:"center" , justifyContent:"center" , flexDirection:"column" , border:"3px solid indigo" , padding:"1em 0"}}>

<input type="text" name="fullName" required="required" placeholder="Enter a name ..." onChange={handleTutAddFormChange}/>
<input type="text" name="address" required="required" placeholder="Enter an address ..."  onChange={handleTutAddFormChange}/>
<input type="text" name="phoneNumber" required="required" placeholder="Enter a tel ..."  onChange={handleTutAddFormChange}/>
<input type="email" name="email" required="required" placeholder="Enter an email ..."  onChange={handleTutAddFormChange}/>
<input type="number" name="price" required="required" placeholder="Enter a price ..."  onChange={handleTutAddFormChange}/>

<button type="submit" onClick={handleTutAddFormSubmit}>add row at submit event</button>

</form>

</div>


  </section>

);

}




export default CrudSamePage;
