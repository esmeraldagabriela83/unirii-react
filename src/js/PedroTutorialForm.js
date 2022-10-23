import React,{useState,useEffect} from 'react';

//Beginners CRUD Tutorial - ReactJS, MySQL, NodeJS
//https://www.youtube.com/watch?v=re3OIOr9dJI


const formInputStl={
  padding:"1em",
  margin:"1em 0",
  border:"3px solid dimgray",
  outline:"none",
  borderRadius:"15px"
}


function PedroTutorialForm(props){

  const {propWidth , propColor , propText}=props;

  //----------------------------------------------------------------------------

  const [userForm , setUserForm]=useState([]);

const [name , setName]=useState('');
const [age , setAge]=useState(0);
const [country , setCountry]=useState('');

//------------------------------------------------------------------------------

const handleUserFormChange=(event) =>{
  setName(event.target.value);
  console.log("name from the form: " , name);
}
//------------------------------------------------------------------------------

const displayInformation=(event) =>{
event.preventDefault();

  console.log("name form ---" , name);
  console.log("age form ---" , age);
  console.log("name country ---" , country);

const paragraphNameIdForm=document.getElementById('paragraphNameIdForm');
paragraphNameIdForm.innerText=name;
//--------------
const paragraphAgeIdForm=document.getElementById('paragraphAgeIdForm');
paragraphAgeIdForm.innerText=age;
//------------------
const paragraphCountryIdForm=document.getElementById('paragraphCountryIdForm');
paragraphCountryIdForm.innerText=country;

//---------------

userForm.push(name);
userForm.push(age);
userForm.push(country);

console.log("my userForm is : " , userForm);

const userFormStringData=document.getElementById('userFormStringData');
userFormStringData.innerText=userForm.join(" , ");

}

    //----------------------------------------------------------------------------

  return(
    <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

<h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>function component is : {propText}</h1>

<div className="information">

<label htmlFor="name">Name<br></br>
<input type="text" name="name" id="nameFormTutorial" placeholder="Name and Surname" style={formInputStl} onChange={handleUserFormChange}/>
</label>

<br></br>

<label htmlFor="age">Age<br></br>
<input type="number" name="number" id="ageFormTutorial" placeholder="Age" style={formInputStl}
onChange={(event) =>{
  setAge(event.target.value);
  console.log("age from the form is " , age);
}}/>
</label>

<br></br>

<label htmlFor="country">Country<br></br>
<input type="text" name="country" id="countryFormTutorial" placeholder="Country" style={formInputStl}
onChange={(event) =>{
  setCountry(event.target.value);
  console.log("country from the form is " , country);
}}/>
</label><br></br>

<button onClick={displayInformation} style={{border:"3px dotted red" , padding:"1em" , backgroundColor:"yellow"}}>click btn / add employee</button>

</div>

<article>
<div style={{border:"3px solid yellowgreen"}}>
<p>name is : {name}</p>
<p>age is : {age}</p>
<p>contry is : {country}</p>
</div>

<div style={{border:"3px solid blue"}}>
<p>name is : <strong id="paragraphNameIdForm"></strong></p>
<p>age is : <strong id="paragraphAgeIdForm"></strong></p>
<p>country is : <strong id="paragraphCountryIdForm"></strong></p>
</div>

<p style={{border:"3px solid yellowgreen" , padding:"1em" , margin:"1em"}} id="userFormStringData"></p>


</article>

    </section>
  );

}


export default PedroTutorialForm;











//
