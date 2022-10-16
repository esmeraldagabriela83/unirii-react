import React,{useState,useEffect} from 'react';

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//20 05 2022 DISCORD GR1
//https://www.w3schools.com/js/js_operators.asp
//https://www.w3schools.com/react/react_conditional_rendering.asp

function AddInputsValuesSec(props){

const {propWidth , propColor , propText}=props;

const [val1 , setVal1]=useState(30);
const [val2 , setVal2]=useState(70);

const addHandleNr1and2=(event) =>{

const sumParagraphNR1nR2=document.getElementById('sumParagraphNR1nR2');
sumParagraphNR1nR2.innerText="nr 1 + nr 2 is : " + parseFloat(val1 + val2);

}

return(
  <section style={{border:`3px dashed ${propColor}` , margin:"1em" , padding:"1em" , color:propColor}}>
<h1>function component is : {propText}</h1>

<input type="number" name="nr1" id="nr1"  style={{margin:"1em" , padding:"1em"}} value={val1}/>
<input type="number" name="nr2" id="nr2"  style={{margin:"1em" , padding:"1em"}} value={val2}/>

<button onClick={addHandleNr1and2} style={{margin:"1em" , padding:"1em"}}>nr 1 + nr 2</button>

<p id="sumParagraphNR1nR2"></p>
  </section>
);

}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function AddInputsValuesThird(props){
  const {propWidth , propColor , propText}=props;

  const [val3 , setVal3]=useState(0);
  const [val4 , setVal4]=useState(0);

  const handleChangeVal3=(event) =>{
    setVal3(event.target.value);
    console.log("val3 is : " , val3);
  }

  const handleChangeVal4=(event) =>{
    setVal4(event.target.value);
    console.log("val4 is : " , val4);
  }

  //----------------------------------------------------------------------------

  const handleAdd3and4nr=(event) =>{
    console.log(parseFloat(val3) + parseFloat(val4));
    const addNr3and4=document.getElementById('addNr3and4');
    addNr3and4.style.backgroundColor="pink";
    addNr3and4.innerText=`the sum of your inputs is : ` + (parseFloat(val3) + parseFloat(val4));
  }

  //----------------------------------------------------------------------------

  function userFunc(){
    if(parseFloat(val3) > parseFloat(val4)){
      return(
        <>
        <p>val3 > val4</p>
<h1>{(parseFloat(val3) * parseFloat(val4))}</h1>
        </>
      );
    }else{
      return <h1>{(parseFloat(val3) - parseFloat(val4))}</h1>
    }
  }

  //----------------------------------------------------------------------------

function userFuncsECOND(){
  if(val3 >= 30 && val4 >= 40){
return(
  <article>
  <p>val3 > 30 and val4 > 40</p>
  <h1 style={{color:"green" , border:"3px dotted green" , padding:"1em" , margin:"1em"}}>{`the sum is  : ` + (parseFloat(val3) + parseFloat(val4))}</h1>
  </article>
)
  }else{
    return <h1 style={{color:"blue" , border:"3px dotted blue" , padding:"1em" , margin:"1em"}}>{`the sum is  : ` + (parseFloat(val3) + parseFloat(val4))}</h1>
  }
}

//------------------------------------------------------------------------------

function userFuncThird(valX , valY){
  return <h1>{parseFloat(valX) + parseFloat(valY) + 3000}</h1>;
}

//------------------------------------------------------------------------------

const codeNr=500;

function userFuncFourth(valA , valB){
  return(
    <>
<em>valA is : {valA}</em><br></br>
<strong>valB is : {valB}</strong><br></br>
<p>codeNr is :  {codeNr}</p>
<h1>{ `the sum of your input values and codeNr is : ` + (parseFloat(valA) + parseFloat(valB) + codeNr) }</h1>
    </>
  );
}

//------------------------------------------------------------------------------

return(
  <section style={{border:`3px dashed ${propColor}` , margin:"1em" , padding:"1em" , color:propColor}}>

<h1>propText / function component is : {propText}</h1>

<input type="number" name="nr3" id="nr3" style={{margin:"1em" , padding:"1em"}} value={val3} onChange={handleChangeVal3}/>
<input type="number" name="nr3" id="nr4" style={{margin:"1em" , padding:"1em"}} value={val4} onChange={handleChangeVal4}/>

<button onClick={handleAdd3and4nr}>add nr 3 and 4</button>

<p style={{border:`3px dotted ${propColor}` , padding:"1em" , margin:"1em"}} id="addNr3and4"></p>


<div style={{border:`3px dotted ${propColor}` , padding:"1em" , margin:"1em"}}>
<p>sum + 1000</p>
<h1 style={{border:`3px dotted ${propColor}` , padding:"1em" , margin:"1em"}}>{(!isNaN(val3)&&!isNaN(val4)) ? parseFloat(val3) + parseFloat(val4) + 1000 : "Enter two numbers in the above inputs"}</h1>
</div>

<div style={{border:`3px dotted ${propColor}` , padding:"1em" , margin:"1em"}}>
<p>apel functie userFunc in JSX</p>
{userFunc()}
</div>

<div style={{border:`3px dotted ${propColor}` , padding:"1em" , margin:"1em"}}>
<p>apel functie userFuncsECOND in JSX</p>
{userFuncsECOND()}
</div>

<div style={{border:`3px dotted ${propColor}` , padding:"1em" , margin:"1em"}}>
<p>apel functie userFuncThird cu parametri (inputs values) in JSX</p>
{userFuncThird(val3 , val4)}
</div>

<div style={{border:`3px dotted ${propColor}` , padding:"1em" , margin:"1em"}}>
<p>apel functie userFuncThird cu parametri (inputs values) and codeNr in JSX</p>
{userFuncFourth(val3 , val4)}
</div>

  </section>
);

}


export {AddInputsValuesSec , AddInputsValuesThird};
