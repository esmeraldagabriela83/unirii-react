import React,{useState,useEffect} from 'react';

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//20 05 2022 DISCORD GR1
//https://www.w3schools.com/js/js_operators.asp
//https://www.w3schools.com/react/react_conditional_rendering.asp

function AddWhatever(props){

const {propWidth , propColor , propText}=props;

const [myCodeNr , setMyCodeNr]=useState(45);

//if function conditional

const [val5 , setVal5]=useState(0);
const [val6 , setVal6]=useState(0);

const handleChangeNr5=(event) =>{
  setVal5(event.target.value);
}

const handleChangeNr6=(event) =>{
  setVal6(event.target.value);
}

//-------------

const sumHandle=(event) =>{

const titleSum5and6=document.getElementById('titleSum5and6');
titleSum5and6.innerText=`sum of nr5 and nr6 is ` + (parseFloat(val5) + parseFloat(val6));
titleSum5and6.style.border='3px dotted yellowgreen';
}

//------------------------------------------------------------------------------
return(
  <section style={{border:`3px dashed ${propColor}` , margin:"1em" , padding:"1em" , color:propColor}}>
<h1>propText is : {propText}</h1>

<p>change myCodeNr with the value of input:</p>
<input type="number" type="number" id="yourNr" placeholder="write your nr"  style={{border:`3px dashed ${propColor}` , margin:"1em" , padding:"1em" , color:propColor}}/><br></br>

<label>your nr 5
 <input type="number" id="nr5" name="nr5" value={val5} onChange={handleChangeNr5}  style={{border:`3px dashed ${propColor}` , margin:"1em" , padding:"1em" , color:propColor}}/><br></br>
</label>

<label>your nr 6
  <input type="number" id="nr6" name="nr6" value={val6} onChange={handleChangeNr6}  style={{border:`3px dashed ${propColor}` , margin:"1em" , padding:"1em" , color:propColor}}/>
</label><br></br>

<h3>val 5 + val 6 is : {(parseFloat(val5) + parseFloat(val6))}</h3>
<h3>{`the sum is  : ` + (parseFloat(val5) + parseFloat(val6))}</h3>

<article style={{border:`3px dashed ${propColor}` , margin:"1em" , padding:"1em" , color:propColor}}>
  <button onClick={sumHandle}>click to add nr5 + nr6</button>

  <h3 id="titleSum5and6"></h3>
</article>

<article style={{border:`3px dashed ${propColor}` , margin:"1em" , padding:"1em" , color:propColor}}>
<p>myCodeNr is : {myCodeNr}</p>
</article>

  </section>
);

}

export default AddWhatever;
