import React, {useRef , useState , useEffect , useContext} from 'react';
import {AppContext} from "../contextBudget/AppContext";




const Remaining =(props) =>{


  const {propWidth , propColor , propText}=props;
//------------------------------------------------------------------------------

const {expenses , budget}=useContext(AppContext);

//------------------------------------------------------------------------------

const totalExpenses=expenses.reduce((total , item) =>{
  //retuce are intotdeauna return
  return(total = total + item.cost);
} , 0);

  //----------------------------------change the background od div with remaining sum----------------------------------------

  const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';


    //------------------------------------------------------------------------------


  return(

    <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

<h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>function component is {propText}</h1>

<div className={`alert p-4 ${alertType}`}>
<span>Remaining : $  {budget - totalExpenses}</span>
</div>

</section>

  );
}


export default Remaining;
