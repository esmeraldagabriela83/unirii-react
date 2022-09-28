import React, {useState,useEffect} from 'react';
import mypersons from "./persons.js";
console.log("---@@@!!!--- mypersons is alrady in IfIfMySchool.js: " , mypersons);
// ---@@@!!!--- mypersons is alrady in IfIfMySchool.js:
// (5) [{…}, {…}, {…}, {…}, {…}]
// 0
// :
// {code: 1186385258, name: 'Andreea', surname: 'Iordache', urlImage: 'url(https://images.unsplash.com/photo-143876168103…Hx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)', tel: '0722000000'}
// 1
// :
// {code: 1991269451, name: 'Iulian', surname: 'Pop', urlImage: 'url(https://images.unsplash.com/photo-150004899395…Hx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80)', tel: '0722669610'}
// 2
// :
// {code: 1283420333, name: 'Ionel', surname: 'Cutare', urlImage: 'url(https://images.unsplash.com/photo-150459381142…Hx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)', tel: '0733445566'}
// 3
// :
// {code: 1643751176, name: 'Maria', surname: 'Aco', urlImage: 'url(https://images.unsplash.com/photo-159310454748…Hx8fGVufDB8fHx8&auto=format&fit=crop&w=1153&q=80)', tel: '0733445566'}
// 4
// :
// {code: 1861657713, name: 'Roxana', surname: 'Zamfirescu', urlImage: 'url(https://images.unsplash.com/photo-157314024763…Hx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)', tel: '0755667788'}
// length
// :
// 5
// [[Prototype]]
// :
// Array(0)


function IfIfMySchool(props){
//destructurare props
const {propWidth , propColor , propText , propState , propStateFalse}=props;

//------------------------------------------------------------------------------
//arr pt a fi folosit in ShortIf
const fruitsSchoolIf = ['mere', 'banane', 'capsuni' , 'zmeura' , 'portocale'];
console.log("!!! --- $$$ fruitsSchoolIf is : " , fruitsSchoolIf);
//!!! --- $$$ fruitsSchoolIf is :  (5) ['mere', 'banane', 'capsuni', 'zmeura', 'portocale']
//------------------------------------------------------------------------------
const [myState , setMyState]=useState(propState);
console.log("---!!! myState is from IfIfMySchool function component: " , myState);
//---!!! myState is from IfIfMySchool function component:  true

const handleChangeMyState=(event) =>{
  setMyState("false");
}
//------------------------------------------------------------------------------
const [myFruitsState , setMyFruitsState]=useState(propStateFalse);
console.log("!!!--- myFruitsState is " , myFruitsState);
//!!!--- myFruitsState is  false

const handleChangeMyFruitsState=(event)=>{
  setMyFruitsState("true");
}

//------------------------------------------------------------------------------
const [myPeopleState , setMyPeopleState]=useState(propStateFalse);

const handleChangeMyPeopleState=(event) =>{
  setMyPeopleState("true");
}

return(
  <section style={{color:"indigo" , border:`3px dotted ${propColor}` , padding:"1em" , margin:"1em"}}>
<h1>{propText}</h1>
<h3>propState is : {propState}</h3>

{propState == "true" ? <p>true state string</p> : <p>false state string</p>}<br></br>

{fruitsSchoolIf.length > 0 ? <p>true string fruits</p> : <p>false string fruits</p>}<br></br>

<article style={{color:"green" , border:`3px dotted ${propColor}` , padding:"1em" , margin:"1em"}}>
{myState == "true" ? <p>{myState} afirmativ</p> : <p>{myState} negativ</p>}
<button onClick={handleChangeMyState}>change my state</button><br></br>
</article>

<article style={{color:"green" , border:`3px dotted ${propColor}` , padding:"1em" , margin:"1em"}}>
{myFruitsState == "false" ? <h3>click the button to change</h3> :
<>
<em>my fruits are:</em>
{fruitsSchoolIf.map((elFruit , index) =>{
  //map are intotdeauna return
  return <ul key={index}>
<li><h3 style={{color:"tomato" , border:`3px dotted ${propColor}` , padding:"1em" , margin:"1em"}}>{elFruit}</h3></li>
  </ul>
})}
</>
}
<button onClick={handleChangeMyFruitsState}>click to load the fruits</button><br></br>
</article>

<article style={{color:"green" , border:`3px dotted ${propColor}` , padding:"1em" , margin:"1em"}}>
{myPeopleState == "false" ? <h3>click the button to change</h3> :
 <>
<em>people are:</em>
{mypersons.map((elPerson , index) =>{
  //map are intotdeauna return
  return <ul key={index}>
<li style={{color:"cornflowerblue" , border:`3px dotted yellowgreen` , padding:"1em" , margin:"1em"}}>
<h3>code is : {elPerson.code}</h3>
<h3>full name is : {elPerson.name} {elPerson.surname} and telephone nr is : {elPerson.tel}</h3>
<div style={{
  height:"300px",
  width:propWidth,
  backgroundImage:elPerson.urlImage,
  backgroundRepeat:"no-repeat",
  backgroundPosition:"center",
  backgroundSize:"cover",
  border:`3px dashed ${propColor}`
}}>photo</div>
</li>
  </ul>
})}
 </>
}

<button onClick={handleChangeMyPeopleState}>click to show people</button>
</article>

  </section>
);
}

export default IfIfMySchool;
