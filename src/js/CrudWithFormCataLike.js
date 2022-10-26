import React, {useRef , useState , useEffect} from 'react';
import data from "./mock-data.json";



//https://www.youtube.com/watch?v=dYjdzpZv5yc
//Create a Table in React | Learn how to view, add, delete and edit rows in a table from Scratch

//git hub source
//https://github.com/chrisblakely01/react-creating-a-table

function CrudWithFormCataLike(props){

  const {propWidth , propColor , propText}=props;

  //--------------------------------------------------------------------------

  const [contacts , setContacts]=useState(data);

let sumDataPrices = 0 ;

  const handleSumPricesData=(event) =>{
console.log("sumDataPrices is : " , sumDataPrices);

for(let i=0 ; i<data.length ; i++){
  sumDataPrices = sumDataPrices + parseFloat(data[i].price);
}

const allPricesSumData=document.getElementById('allPricesSumData');
allPricesSumData.innerText=sumDataPrices;
  };

  //-----------------------------------------------------------------------------

  //----------------------------------------------------------------------------

  return(
    <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

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



<button onClick={handleSumPricesData}>add prices from all data persons / click only once</button>

<p>sum is of all prices from data arr with obj from mock-data.json is :  <strong id="allPricesSumData"></strong></p>

</article>

<p>data.length is : {data.length}</p>

<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>

<div className="app-container">

<table>

<thead>
<tr>
<th>Name</th>
<th>Address</th>
<th>Phone Number</th>
<th>Email</th>
<th>Price</th>
</tr>
</thead>

<tbody>

{contacts.map((contact , index) =>{
  //map are intotdeauna return
  return(
    <tr>
    <td>{contact.fullName}</td>
    <td>{contact.address}</td>
    <td>{contact.phoneNumber}</td>
    <td>{contact.email}</td>
    <td>{contact.price}</td>
    </tr>
  );
})}

</tbody>

</table>

<h2>Add a contact</h2>

<form>
my form
</form>

</div>

</article>

    </section>
  );


}

export default CrudWithFormCataLike;
///
