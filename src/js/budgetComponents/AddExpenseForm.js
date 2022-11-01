import React, {useRef , useState , useEffect , useContext} from 'react';
import {AppContext} from "../contextBudget/AppContext";
import { v4 as uuidv4 } from 'uuid';


const AddExpenseForm =(props) =>{

  const {propWidth , propColor , propText}=props;
  
  //-------take the values from the inputs----------------------------------------------------------------------

const {dispatch}=useContext(AppContext);

  const [name , setName]=useState('');
  const [cost , setCost]=useState('');

//------------------------------------------------------------------------------

const handleOnSubmit=(event) =>{
  event.preventDefault();

console.log("name" + " " + name + " " + "cost" + " " + cost);

const expense={
  id: uuidv4(),
  name:name,
  cost:parseInt(cost)
};

dispatch({
			type: 'ADD_EXPENSE',
			payload: expense,
		});

}

  //----------------------------------------------------------------------------

  return(
    <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

<h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>function component is {propText}</h1>

<form onSubmit={handleOnSubmit}>


<label htmlFor="name">Name
<input type="text" name="name" id="name" required="required" value={name} onChange={(event) => setName(event.target.value)}/>
</label>



<label htmlFor="cost">cost
<input type="number" nane="cost" id="cost" required="required" value={cost} onChange={(event) => setCost(event.target.value)}/>
</label>


<button type="submit">save</button>

</form>

    </section>
  );
}


export default AddExpenseForm;
