import React, {useRef , useState , useEffect , useContext} from 'react';
import {AppContext} from "../contextBudget/AppContext";

import ExpenseItem from "./ExpenseItem.js";




const ExpenseList =(props) =>{


  const {propWidth , propColor , propText}=props;

const {expenses}=useContext(AppContext);

//--------------------------------------------------------------------------------
//
// const expenses=[
//   {id:123 , name:"shopping1" , cost:50},
//   {id:1234 , name:"shopping2" , cost:500},
//   {id:12345 , name:"shopping3" , cost:550},
//   {id:12367 , name:"shopping4" , cost:5000},
//   {id:12389 , name:"shopping5" , cost:555},
// ];

  //------------------------------------------------------------------------------

  return(

    <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

<h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>function component is {propText}</h1>

{expenses.map((item , index) =>{
  //map are intotdeauna return
  return(
    <ul key={index}>
<li style={{border:"3px dotted cyan" , padding:"1em" , margin:"1em"}}>
<p>{item.id}</p>
<p>{item.name}</p>
<p>{item.cost}</p>
 </li>
    </ul>
  );
})}


<ul>
{expenses.map((expense) =>{
    //map are intotdeauna return
return <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost}   propWidth={"550px"} propColor={"gray"} propText={"ExpenseItem"}/>
})}
</ul>


</section>

  );
}


export default ExpenseList;
