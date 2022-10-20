import React,{useState,useEffect} from 'react';


function ColorfulBoxes13052022(props){
  const {propWidth , propColor , propText}=props;

  console.log(propWidth , propColor , propText);

  //----------------------------------------------------------------------------

const [colorList , setColorList]=useState([]);
const [counterNr , setCounterNr]=useState(0);
console.log("rendering");

//----------

const handleAddBox=(event) =>{
  let randomColorDiscord = "#" + Math.floor(Math.random()*16777215).toString(16);
   //clonez list din state si adaug valoarea!!!!
   //adaug culori create random in lista initial goala

   console.log("ATENTIE ---colorList---" , colorList);
   console.log("ATENTIE --- randomColorDiscord---" , randomColorDiscord);

const copyNewcolorList=[...colorList , randomColorDiscord];
setColorList(copyNewcolorList);
setCounterNr(counterNr + 1);
}

  //----------------------------------------------------------------------------

return(
  <section style={{color:propColor , border:`3px dashed ${propColor}` , padding:"1em" , margin:"1em"}}>
<h1 style={{color:propColor , border:`3px dashed ${propColor}` , padding:"1em" , margin:"1em"}}>function component is : {propText}</h1>


<article style={{color:propColor , border:`3px solid ${propColor}` , padding:"1em" , margin:"1em"}}>

<button onClick={handleAddBox}>add box color</button>
<h3>you clicked <em>{counterNr}</em> times </h3>

{colorList.map((el, index) =>{
  //map are intotdeauna return
  return(
    <>
<ul key={index} style={{color:propColor , border:`3px dashed ${propColor}` , padding:"1em" , margin:"1em"}}>
<li>{el}</li>
</ul>
    </>
  );
})}

<div style={{border:"3px solid tomato" , display:"flex" , alignItems:"center" , justifyContent:"center" , flexWrap:"wrap" , padding:"1em" , margin:"1em"}}>
{colorList.map((el , index) =>{
  //map are intotdeauna return
  return <div key={index} style={{backgroundColor:el ,
                                  width:"200px" ,
                                  height:"200px" ,
                                  display:"flex" ,
                                  alignItems:"center" ,
                                  justifyContent:"center" ,
                                  border:"3px dotted gray" ,
                                  textAlign:"center",
                                  margin:"1em"}}>my color is : {el},<br></br> my nr is : {index + 1}</div>
})}
</div>

</article>

  </section>
);
}



export default ColorfulBoxes13052022;









//
