import React,{useState,useEffect} from 'react';


//COMPONENTA CONTROLATA

/*orice componenta controlata are atributul value*/
/*orice componenta controlata are asociata pe onChange o functie care opereaza evenimentul*/


function ComponentaControlataWithBtn(props){

const {propWidth , propColor , propText}=props;

console.log(propWidth , propColor , propText);

//componenta controlata are value atribut pt tag-ul input si onChange

const [nameSec , seNameSec]=useState("You");

const handleBtnChangeUser=(event)=>{

seNameSec(event.target.value);

}

//------------------------------------------------------------------------------

const userHandluFunc=(event) =>{

event.preventDefault();

const nameUserCostel=document.getElementById('nameUserCostel');

console.log(nameUserCostel.value);

const userParagraphShowsInputWrittenValue=document.getElementById('userParagraphShowsInputWrittenValue');

userParagraphShowsInputWrittenValue.style.padding="1em";
userParagraphShowsInputWrittenValue.style.margin="1em";
userParagraphShowsInputWrittenValue.style.border="3px solid yellowgreen";
userParagraphShowsInputWrittenValue.innerText=nameUserCostel.value;
};

//------------------------------------------------------------------------------


return(
  <section style={{color:propColor , border:`3px solid ${propColor}` , padding:"1em" , margin:"1em"}}>
<h1 style={{color:propColor , border:`3px solid ${propColor}` , padding:"1em" , margin:"1em"}}>function component is : {propText}</h1>

<article style={{color:propColor , border:`3px solid ${propColor}` , padding:"1em" , margin:"1em"}}>

<form style={{color:propColor , border:`3px solid deeppink` , padding:"1em" , margin:"1em"}}>

<div style={{color:propColor , border:`3px solid tomato` , padding:"1em" , margin:"1em"}}>
<h1>Hello nameSec: {nameSec}</h1>

<input
        type="text"
        name="nameUserCostel"
        id="nameUserCostel"
        value={nameSec}
        onChange={handleBtnChangeUser}/>
</div>

<div style={{color:propColor , border:`3px solid cornflowerblue` , padding:"1em" , margin:"1em"}}>

<button onClick={userHandluFunc}>click to show your value</button>

<p id="userParagraphShowsInputWrittenValue"></p>
</div>

</form>

</article>

  </section>
)

}

export default ComponentaControlataWithBtn;
//handleChangeByUserOnClick
