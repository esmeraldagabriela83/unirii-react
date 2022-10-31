import React, {useRef , useState , useEffect} from 'react';


const AddExpenseForm =(props) =>{

  const {propWidth , propColor , propText}=props;


  //------------------------------------------------------------------------------

  return(
    <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

<h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>function component is {propText}</h1>

<form>


<label htmlFor="name">Name
<input type="text" name="name" id="name" required="required"/>
</label>



<label htmlFor="cost">cost
<input type="number" nane="cost" id="cost" required="required"/>
</label>


<button type="submit">save</button>

</form>

    </section>
  );
}


export default AddExpenseForm;
