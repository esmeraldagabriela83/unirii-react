import React, {useState , useEffect} from 'react';

import mycats from "./cats.js";
import myBirds from "./birds.js";
import myCopaci from "./copaci.js";


function DiscordReactArr13052022(props){


  //destructurare props
  const {propWidth , propColor , propText}=props;

  //--------------------------------------------------------------------------

const arrAnimals=["cat" , "dog" , "bird" , "mouse" , "fox" , "snake"];

//----------------------------show animals-------------------------------------------------

const handleFillUlArrElements=(event) =>{

console.log("=== you clicked to fill ul with arr elements");

const allEachAnimalReact=document.querySelectorAll(`.eachAnimalReact`);
console.log("allEachAnimalReact arr is : " , allEachAnimalReact);

//allEachAnimalReact arr is :  NodeList(6) [li.eachAnimalReact, li.eachAnimalReact, li.eachAnimalReact, li.eachAnimalReact, li.eachAnimalReact, li.eachAnimalReact]

for(let i=0 ; i<allEachAnimalReact.length ; i++){

allEachAnimalReact[i].style.border="3px solid green";
allEachAnimalReact[i].style.padding="1em";
allEachAnimalReact[i].style.margin="1em";
allEachAnimalReact[i].innerText=arrAnimals[i];
allEachAnimalReact[i].style.textAlign="center";
allEachAnimalReact[i].style.fontWeight="bold";

}

}

//---------------------//show cats--------------------------------

const handleShowEachCat=(event) =>{

console.log("click to show cats btn");

console.log("mycats is : " ,mycats);
//mycats is :  (5) [{…}, {…}, {…}, {…}, {…}]

const alleachCatLi=document.querySelectorAll(".eachCatLi");

for( let i=0 ; i<alleachCatLi.length ; i++){
  alleachCatLi[i].style.border="3px solid cyan";
  alleachCatLi[i].style.padding="1em";
  alleachCatLi[i].style.margin="1em";
  alleachCatLi[i].innerText="Name: " + mycats[i].fullName + " , email: " + mycats[i].email;
}

}

//-----------------------------stateArray turned into birds // birds shown on page-------------------------------------------------

const [stateBirds , setStateBirds]=useState(myBirds);








//-----------------------------stateArray turned into trees onClick btn // trees shown on page-------------------------------------------------

const [copacState , setCopacState]=useState([]);

const handleBtnTrees=(event) =>{

console.log("you click to show trees");

setCopacState(myCopaci);

}

const handleBtnDeleteTrees=(event) =>{

console.log("you click to delete trees list");

setCopacState([]);

}







//---------------------------------bulb image-------16052022----------------------------------------
const birdImg="url(https://images.pexels.com/photos/349758/hummingbird-bird-birds-349758.jpeg?auto=compress&cs=tinysrgb&w=1600)";

const treeImg="url(https://images.pexels.com/photos/36767/tree-natur-nightsky-cloud.jpg?auto=compress&cs=tinysrgb&w=1600)";

const [bulbStateDiscord , setBulbStateDiscord]=useState(false);

const styleImg = {
  width:"200px",
  height:"300px",
  border:"solid #333 3px",

  display:"flex",
  justifyContent: "center",
  alignItems:"center",

  backgroundRepeat:"no-repeat",
  backgroundPosition:"center",
  backgroundSize:"contain"
}

//------------------------------------------------------------------------------

const handleClickDiscord=(event , status) =>{

console.log("you clicked to show tree or bird");

setBulbStateDiscord(status);

}


  //---------------------------------------------------------------------------

return(

  <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

<h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>function component is {propText}</h1>

<p>arrAnimals elements are : {arrAnimals.join(" , ")}</p>

<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>

<ul style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>

<li className="eachAnimalReact"></li>
<li className="eachAnimalReact"></li>
<li className="eachAnimalReact"></li>
<li className="eachAnimalReact"></li>
<li className="eachAnimalReact"></li>
<li className="eachAnimalReact"></li>

</ul>

<button onClick={handleFillUlArrElements}>fill list with arr elements</button>

</article>


<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>

<ul style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>
<li className="eachCatLi"></li>
<li className="eachCatLi"></li>
<li className="eachCatLi"></li>
<li className="eachCatLi"></li>
<li className="eachCatLi"></li>
</ul>

<button onClick={handleShowEachCat}>show cats from cats.js</button>

</article>

<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>

{stateBirds.map((birdEl , index) =>{
//map are intotdeauna return
  return(
    <div key={index} style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>
<p><strong>{birdEl.code}   </strong>{birdEl.name}</p>
<p>{birdEl.surname}</p>

<div style={{
             height:"200px",
             width:"300px",
             backgroundRepeat:"no-repeat",
             backgroundPosition:"center",
             backgroundSize:"contain",
             backgroundImage:birdEl.urlImage
             }}></div>

<p>tel : {birdEl.tel}</p>

    </div>
  );
})}

</article>


<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>

<button onClick={handleBtnTrees}>click to show trees</button>

{copacState.map((copacEl , index) =>{
//map are intotdeauna return
return(

  <div key={index} style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>
  <p><strong>{copacEl.code}   </strong>{copacEl.name}</p>
  <p>{copacEl.surname}</p>

  <div style={{
           height:"200px",
           width:"300px",
           backgroundRepeat:"no-repeat",
           backgroundPosition:"center",
           backgroundSize:"contain",
           backgroundImage:copacEl.urlImage
           }}></div>

  <p>tel : {copacEl.tel}</p>

  </div>

);
})}

<button onClick={handleBtnDeleteTrees}>click to delete trees</button>

</article>

<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>

<div style={{
         ...styleImg,
         backgroundImage:(bulbStateDiscord ? treeImg : birdImg)
         }}></div>

 <button onClick={(event) => handleClickDiscord(event , !bulbStateDiscord)}>{bulbStateDiscord ? 'tree' : 'bird'}</button>

</article>

</section>

);

}


export default DiscordReactArr13052022;




//
