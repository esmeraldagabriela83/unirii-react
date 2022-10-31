import React, {useRef , useState , useEffect} from 'react';





const ExpenseTotal =(props) =>{


  const {propWidth , propColor , propText}=props;


  //------------------------------------------------------------------------------

  return(

    <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

<h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>function component is {propText}</h1>

<div>
<span>Spent so far  : $ 960</span>
</div>

</section>

  );
}


export default ExpenseTotal;
