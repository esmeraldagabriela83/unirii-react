import React, {useRef , useState , useEffect , useContext} from 'react';
import {AppContext} from "../contextBudget/AppContext";




const ExpenseItem =(props) =>{


  const {id , name , cost , propWidth , propColor , propText}=props;

  //----------------------------------------------------------------------------

const { dispatch } = useContext(AppContext);



const handleDeleteExpense = () => {
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: props.id,
		});
	};

  //----------------------------------------------------------------------------

  return(

    <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

<h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>function component is {propText}</h1>

<li>
<p style={{textAlign:"center"}}>{name}</p>
<div style={{display:"flex" , alignItems:"center" , justifyContent:"space-between"}}>

<span>${cost}</span>
<button onClick={handleDeleteExpense}>delete</button>

</div>
</li>

</section>

  );
}


export default ExpenseItem;
