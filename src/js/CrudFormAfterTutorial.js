import React, {useRef , useState , useEffect , Fragment} from 'react';
import {nanoid} from "nanoid";
//the nanoid will automatically generates an id
import data from "./mock-data.json";

const myformStyle={
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  flexDirection:"column",
  flexWrap:"wrap",
  border:"3px dashed tomato",
  padding:"1em"
};

function CrudFormAfterTutorial(props){

  const {propWidth , propColor , propText}=props;

  //----------------------------------------------------------------------------

const [mycontacts , setMycontacts]=useState(data);

//initializare obiect cu toate datele din input-uri
const [myaddFormData , setMyaddFormData]=useState({
  fullName:"",
  address:"",
  phoneNumber:"",
  email:"",
  price:0
});



//---------------------------------handle add pt onChange la input-uri , preia value din input si formeaza obiecte noi de tipul myaddFormData --------------------------------------------

//ultimul curs catalin
// const handleChange = (event) =>{
//      setForm({...form, [event.target.name]: event.target.value});
//    }


//tutorial

    // const fieldName = event.target.getAttribute("name");
    // const fieldValue = event.target.value;
    //
    // const newFormData = { ...addFormData };
    // newFormData[fieldName] = fieldValue;
    //
    // setAddFormData(newFormData);


//destructurare obiect si adauga el nou

const myhandleAddFormChange=(event) =>{
  event.preventDefault();

const newmyaddFormData={...myaddFormData , [event.target.name]: event.target.value};
console.log("--- newmyaddFormData ---" , newmyaddFormData);
setMyaddFormData(newmyaddFormData) ;
}

//-----------------------------handle submit form preia obiectele de tip myaddFormData si le adauga in mycontacts arr---------------------------------------------------

const myhandleAddFormSubmit=(event) =>{
    event.preventDefault();

    const mynewcontact={
      id: nanoid(),
      fullName: myaddFormData.fullName,
      address: myaddFormData.address,
      phoneNumber: myaddFormData.phoneNumber,
      email: myaddFormData.email,
      price: myaddFormData.price
    };

    //adaug obiectul nou creat de user in mycontacts cu destructurare array

const newmycontacts=[...mycontacts , mynewcontact];

setMycontacts(newmycontacts);

}




//---------------------handle delite --------------------

const myHandleDeleteClick=(event , deleteIndex) =>{

const newmycontacts=[...mycontacts];
newmycontacts.splice(deleteIndex , 1);
//update the state of mycontacts array

setMycontacts(newmycontacts);
}

//-----------------------display sum on the page without clicking on btn--------------------------------
let defaultSum=0;

mycontacts.forEach(defaultSumFunc);

function defaultSumFunc(item , index , array){
  defaultSum=defaultSum + parseFloat(array[index].price);
}

//------------------------handle sum-------------------------------------------
let mySum = 0;

const myhandleSumPrices=(event) =>{

mycontacts.forEach(formSumFunc);

function formSumFunc(item , index , array){
  mySum = mySum + parseFloat(item.price);
}

const sumPricesForm=document.getElementById('sumPricesForm');
sumPricesForm.innerText=mySum;

}

//------------------------------------------------------------------------------

  return(
    <section style={{padding:"1em 0" , margin:"1em 0" , border:`3px solid ${propColor}`}}>

<h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>function component is {propText}</h1>

<div className="app-container">

<table>

<thead>
<tr>
<th>Name</th>
<th>Address</th>
<th>Phone Number</th>
<th>Email</th>
<th>Price $</th>
<th>Actions</th>
</tr>
</thead>

<tbody>
{mycontacts.map((mycontact , myindex) =>{
  return(
    <tr key={myindex}>
    <td>{mycontact.fullName}</td>
    <td>{mycontact.address}</td>
    <td>{mycontact.phoneNumber}</td>
    <td>{mycontact.email}</td>
    <td>{mycontact.price}</td>
    <td><button type="button" onClick={(event) =>myHandleDeleteClick(event , myindex)}>delite row</button></td>
    </tr>
  );
})}
</tbody>

</table>

<h2>add a contact</h2>

<form onSubmit={myhandleAddFormSubmit} style={myformStyle}>


<input type="text" name="fullName" required="required" placeholder="enter fullName" onChange={myhandleAddFormChange}/>
<input type="text" name="address" required="required" placeholder="enter address"  onChange={myhandleAddFormChange}/>
<input type="text" name="phoneNumber" required="required" placeholder="enter phoneNumber"  onChange={myhandleAddFormChange}/>
<input type="email" name="email" required="required" placeholder="enter email"  onChange={myhandleAddFormChange}/>
<input type="number" name="price" required="required" placeholder="enter price"  onChange={myhandleAddFormChange}/>

<button type="submit">add row</button>

</form>

</div>

<p>sum of prices from the form: <em>{defaultSum}</em></p>

<button onClick={myhandleSumPrices}>sum of prices</button>
<p>sum is : <strong id="sumPricesForm"></strong></p>

    </section>
  );

}




export default CrudFormAfterTutorial;
///
