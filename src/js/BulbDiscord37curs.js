import React,{useState, useEffect} from 'react';

function BulbDiscord37curs(props){

const {propWidth , propColor , propText}=props;
//------------------------------------------------------------------------------


const styleDiscord = {
  width:"100px",
  height:"100px",
  border:"solid #333 3px",
  borderRadius:"50%",
  display:"flex",
  justifyContent: "center",
  alignItems:"center"
}

//------------------------------------------------------------------------------

const imgOne="https://images.unsplash.com/photo-1666221340457-1af7d0be8ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1129&q=80";
const imgTwo="https://images.unsplash.com/photo-1666009812623-31fb98d10579?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80";



//------------------------------------------------------------------------------

const [bulbState , setBulbState]=useState(false);
const [fridayCounter , setFridayCounter]=useState(0);


const handleClickChangeStatus=(event , status) =>{

console.log("--- event" , event.target);
console.log("--- status" , status);
//status devine negatia lui bulbState
setBulbState(status);
setFridayCounter(fridayCounter + 1);
}


//------------------------------------------------------------------------------

  return(
    <section style={{border:`3px solid ${propColor}` , padding:"1em" , margin:"1em"}}>

<h1 style={{border:`3px solid ${propColor}` , padding:"1em" , margin:"1em" , color:propColor}}>function component is : {propText}</h1>

<article style={{border:`3px solid ${propColor}` , padding:"1em" , margin:"1em"}}>

<div style={{...styleDiscord , backgroundColor:bulbState ? "gold" : "white"}}>
<button onClick={(event) =>handleClickChangeStatus(event , !bulbState)}>{bulbState ? "Off" : "On"}</button>
</div>

<p style={{border:`3px solid ${propColor}` , padding:"1em" , margin:"1em" , backgroundColor:bulbState ? "pink" : "yellowgreen"}}>fridayCounter is : {fridayCounter}</p>

<p style={{border:`3px solid ${propColor}` , padding:"1em" , margin:"1em" , backgroundColor:bulbState ? "yellow" : "deeppink"}}>{bulbState ? "text false" : "text true"}</p>

<img  src={bulbState ? imgOne : imgTwo} style={{width:propWidth , height:"300px"}} alt="img should be here"/>

<div style={{width:propWidth ,
             height:"200px" ,
             border:`3px solid ${propColor}` ,
             backgroundRepeat:"no-repeat",
             backgroundPosition:"center",
             backgroundSize:"contain",

             backgroundColor:bulbState ? "blue" : "green",
             backgroundImage:bulbState ? `url(${imgOne})` : `url(${imgTwo})`}}>{bulbState ? " image one " : " image two "}</div>

<img  src={bulbState ? `../assets/images/albastru.png` : imgTwo} style={{width:propWidth , height:"300px"}} alt="img should be here"/>

<div style={{width:propWidth ,
             height:"200px" ,
             border:`3px solid ${propColor}` ,
             backgroundRepeat:"no-repeat",
             backgroundPosition:"center",
             backgroundSize:"contain",

             backgroundColor:bulbState ? "yellow" : "orange",
             backgroundImage:bulbState ? `url(../assets/images/flower3.JPG)` : `url(${imgTwo})`}}>{bulbState ? " img flower3 from images folder " : " image two "}</div>

</article>

    </section>
  );
}


export default BulbDiscord37curs;









/////////////////
