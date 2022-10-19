import React,{useState,useEffect} from 'react';


//COMPONENTA CONTROLATA

/*orice componenta controlata are atributul value*/
/*orice componenta controlata are asociata pe onChange o functie care opereaza evenimentul*/

function ComponentaControlata(props){

const {propWidth , propColor , propText}=props;
console.log(propWidth , propColor , propText);

//1.VARIABILA DE STATE PT MEMORAT VALOAREA (CU VALOARE IMPLICIT SETATA)
const [name , seName]=useState("You");

//2.functie de event cu parametru event de asociat input-ului
 const handleChange = (event) =>{
   //schimba valoare variablei/varaibilelor de state aferent
   seName(event.target.value);
 }

return(
  <section style={{color:propColor , border:`3px solid ${propColor}` , padding:"1em" , margin:"1em"}}>
<h1 style={{color:propColor , border:`3px solid ${propColor}` , padding:"1em" , margin:"1em"}}>function component is : {propText}</h1>

<article style={{color:propColor , border:`3px solid ${propColor}` , padding:"1em" , margin:"1em"}}>

<form style={{color:propColor , border:`3px solid deeppink` , padding:"1em" , margin:"1em"}}>

<h1>Hello name: {name}</h1>

<input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={handleChange}/>

</form>

</article>

  </section>
)

}

export default ComponentaControlata;
