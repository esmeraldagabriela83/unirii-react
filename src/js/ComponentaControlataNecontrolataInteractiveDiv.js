import React,{useState,useEffect} from 'react';


//COMPONENTA CONTROLATA

/*orice componenta controlata are atributul value*/
/*orice componenta controlata are asociata pe onChange o functie care opereaza evenimentul*/

function ComponentaControlataNecontrolataInteractiveDiv(props){

  const {propWidth , propColor , propText}=props;

  console.log(propWidth , propColor , propText);



const [gigiValueInput , setGigiValueInput]=useState(70);

//----------------------------------------------------------------------------

//number este value introdus dec mine in locul lui user
const numberMyCode=110;

useEffect(() =>{
console.log("gigi did mount");
setGigiValueInput(numberMyCode);
},[]);

useEffect(() =>{
console.log("gigi did update" , gigiValueInput);
},[gigiValueInput]);

//----------------------------------------------------------------------------


const handleChangeNrGigi=(event) =>{
  console.log("Gigi wrote the input value");
  setGigiValueInput(event.target.value);
}

  //----------------------------------------------------------------------------

  const handleGigiBtnChange=(event) =>{

const userInputNr=document.getElementById('userInputNr');
console.log("gigi input value is : " , userInputNr.value);

const gigiParagraph=document.getElementById('gigiParagraph');
gigiParagraph.style.padding="1em";
gigiParagraph.style.margin="1em";
gigiParagraph.style.border="3px solid indigo";
gigiParagraph.innerText=userInputNr.value;

  }

  //----------------------------------------------------------------------------

  return(
    <section  style={{color:propColor , border:`3px solid ${propColor}` , padding:"1em" , margin:"1em"}}>

<h1 style={{color:propColor , border:`3px solid ${propColor}` , padding:"1em" , margin:"1em"}}>function component is : {propText}</h1>

<article id="articleParentGigi" style={{color:propColor , border:`3px solid ${propColor}` , padding:"1em" , margin:"1em"}}>

<p>gigiValueInput is : {gigiValueInput}</p>

<input type="number" id="userInputNr" name="userInputNr" value={gigiValueInput} onChange={handleChangeNrGigi} />

<div id="divChild" style={{height:"150px" , width:`${parseFloat(gigiValueInput)}px` , backgroundColor:"pink" , border:"3px dotted red" , margin:"1em" , display:"flex" , alignItems:"center" , justifyContent:"center"}}>{gigiValueInput}</div>

<div style={{color:propColor , border:`3px solid ${propColor}` , padding:"1em" , margin:"1em"}}>

<button onClick={handleGigiBtnChange}>show gigi written nr from the input</button>

<p id="gigiParagraph"></p>

</div>

</article>

    </section>
  );


}


export default ComponentaControlataNecontrolataInteractiveDiv;














//
