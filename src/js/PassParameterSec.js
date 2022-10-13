import React,{useState, useEffect} from 'react';

function PassParameterSec(props){

const {propWidth , propColor , propText}=props;

const [displayString , setDisplayString]=useState("");

const handleClickBtnUser = (event,string) => {
    event.preventDefault();
    console.log(string);
    setDisplayString(string);

    const paragraphUserText=document.getElementById('paragraphUserText');
    paragraphUserText.innerText=displayString;
    paragraphUserText.style.padding="1em";
    paragraphUserText.style.margin="1em";
    paragraphUserText.style.border=`5 dotted ${propColor}`;
  }

return(
  <section style={{color:propColor , padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>
<h1 style={{border:`3px dashed ${propColor}` , padding:"1em" , margin:"1em"}}>propText is : {propText}</h1>

<p style={{border:`3px dashed ${propColor}` , padding:"1em"}}>la primul click pe link a tag se afiseaza string in consola</p>
<p style={{border:`3px dashed ${propColor}`, margin:"1em" , padding:"1em"}}>la al doilea click pe link a tag se afiseaza string in paragraf pt ca se transmite prin displayString</p>

<a
href="#"
style={{border:`3px dashed red` , padding:"1em" , margin:"1em"}}
onClick={(event) => handleClickBtnUser(event , "my string passed")}
 >send string = the second parameter of function used onClick event</a>

<p id="paragraphUserText"></p>

  </section>
);

}

export default PassParameterSec;

//
