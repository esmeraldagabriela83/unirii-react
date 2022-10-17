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

const changByUserHandle=(event) =>{
  console.log("you clicked the btn");

  const yourNr=document.getElementById('yourNr');
  console.log(yourNr.value);

  const addeValueFromInputToMyCodeNr=document.getElementById('addeValueFromInputToMyCodeNr');
  addeValueFromInputToMyCodeNr.style.border="3px dashed magenta";
  addeValueFromInputToMyCodeNr.innerText=myCodeNr + parseFloat(yourNr.value);
}

//------------------------------------------------------------------------------

const changByUserHandleSec=(event) =>{
    console.log("you clicked the btn sec");
    const yourNrSec=document.getElementById('yourNrSec');
    console.log(yourNrSec.value);

    setMyCodeNr(yourNrSec.value);

const addeValueFromInputToMyModifyedCodeNr=document.getElementById('addeValueFromInputToMyModifyedCodeNr');
addeValueFromInputToMyModifyedCodeNr.style.border="3px dashed darkmagenta";
addeValueFromInputToMyModifyedCodeNr.innerText=parseFloat(yourNrSec.value) + myCodeNr;
}

//-----------------if conditional-------------------------------------------------------------

function depentOnUserInputValueFunction(){

const yourNrThirdValue=document.getElementById('yourNrThird').value;
console.log("yourNrThirdValue is --- " , yourNrThirdValue);
console.log(yourNrThirdValue * 200);

if(yourNrThirdValue > myCodeNr){
  return(myCodeNr - yourNrThirdValue);
}else{
  return(myCodeNr - yourNrThirdValue);;
}

}



const handleUserApelFunc=(event) =>{

  const divUserApelFunc=document.getElementById('divUserApelFunc');
  //apelul al functiei de mai sus
  divUserApelFunc.innerText=depentOnUserInputValueFunction();
  divUserApelFunc.style.border="3px solid red";
  divUserApelFunc.style.padding="1em";
  divUserApelFunc.style.margin="1em";
}

//------------------------------------------------------------------------------


return(
  <section style={{border:`3px dashed ${propColor}` , margin:"1em" , padding:"1em" , color:propColor}}>
<h1 style={{textAlign:"center" , margin:"1em 0" , border:"3px dotted olive" , padding:"1em"}}>propText is : {propText}</h1>

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

<button onClick={changByUserHandle}>add to myCodeNr the nr you write in the input</button><br></br>

<input type="number" type="number" id="yourNr" placeholder="write your nr"  style={{border:`3px dashed ${propColor}` , margin:"1em" , padding:"1em" , color:propColor}}/>

<h3 id="addeValueFromInputToMyCodeNr" style={{border:"3px dashed green" , margin:"1em" , padding:"1em"}}></h3>

</article>

<article style={{border:`3px dashed ${propColor}` , margin:"1em" , padding:"1em" , color:propColor}}>
<p>myCodeNr is : {myCodeNr}</p>

<button onClick={changByUserHandleSec} style={{border:"3px solid deeppink" , margin:"1em" , padding:"1em"}}>change myCodeNr and add it to your input value</button><br></br>

<input type="number" type="number" id="yourNrSec" placeholder="write your nr"  style={{border:`3px dashed ${propColor}` , margin:"1em" , padding:"1em" , color:propColor}}/>

<h3 id="addeValueFromInputToMyModifyedCodeNr" style={{border:"3px dashed green" , margin:"1em" , padding:"1em"}}></h3>

</article>

<article style={{border:`3px dashed ${propColor}` , margin:"1em" , padding:"1em" , color:propColor}}>
<p>myCodeNr is : {myCodeNr}</p>

<input type="number" type="number" id="yourNrThird" placeholder="write your nr"  style={{border:`3px dashed ${propColor}` , margin:"1em" , padding:"1em" , color:propColor}}/>

<button onClick={handleUserApelFunc}>apel functie la click btn</button>
<div id="divUserApelFunc"></div>
</article>

  </section>
);

}

export default AddWhatever;
