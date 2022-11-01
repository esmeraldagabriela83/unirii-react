import React, {useRef , useState , useEffect , useContext} from 'react';
import {AppContext} from "../contextBudget/AppContext";




const ExpenseTotal =(props) =>{


  const {propWidth , propColor , propText}=props;
//------------------------------------------------------------------------------

const { expenses } = useContext(AppContext);

const totalExpensesSoFar=expenses.reduce((acc , item) =>{
  //reduce are intotdeauna return
  return(acc += item.cost)
},0);

  //------------------------------------------------------------------------------

  return(

    <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

<h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>function component is {propText}</h1>

<div>
<span>Spent so far  : $  {totalExpensesSoFar}</span>
</div>

</section>

  );
}


export default ExpenseTotal;
