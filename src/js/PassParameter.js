import React,{useState, useEffect} from 'react';

function PassParameter(props){

const {propWidth , propColor , propText}=props;

const [showInfo , setShowInfo]= useState("");


const handleUserChange=(event , string) =>{
  event.preventDefault();
  console.log(string);
  setShowInfo(string);

  const paragraphUser=document.getElementById('paragraphUser');
  paragraphUser.style.border=`3px solid ${propColor}`;
  paragraphUser.style.padding="1em";
  paragraphUser.style.margin="1em";
  paragraphUser.style.color="Chocolate";
  paragraphUser.style.fontWeight="bold";
  paragraphUser.innerText="showInfo is : " + showInfo;
}


return(
  <section style={{color:propColor , padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>
<h1 style={{color:propColor , padding:"1em" , margin:"1em" , border:`3px dotted ${propColor}`}}>propText is : {propText}</h1>

{showInfo &&
<a
style={{color:"brown" , padding:"1em" , margin:"1em" , border:"3px dashed green"}}
href="#"
className="link"
onClick={(event) => handleUserChange(event , "text from a link on click")}>click on link to display anoter text </a>
}

<a
style={{color:"olive" , padding:"1em" , margin:"1em" , border:"3px dashed red"}}
href="#"
onClick={(event) => {handleUserChange(event , "my string passed")}}>Send string</a><br></br>

<p id="paragraphUser"></p>

  </section>
);

}


export default PassParameter;








//
