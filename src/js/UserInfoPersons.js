import React , {useState , useEffect} from "react" ;
import mypersons from "./persons.js";
import clickPersons from "./clickPersons.js";

console.log("--- !!! mypersons is : " , mypersons);
//--- !!! mypersons is :  (5) [{…}, {…}, {…}, {…}, {…}]
console.log("--- !!! mypersons.length is " , mypersons.length);
console.log(typeof(mypersons));
//--- !!! mypersons.length is  5
//UserInfoPersons.js:7 object
console.log( `${mypersons[0].name} has telephone number : ${mypersons[0].tel} .` );
//Andreea has telephone number : 0722000000 .



function UserInfoPersons(props){

  const {propWidth , propColor , propText}=props;

  const [discordPersons , setDiscordPersons]=useState(mypersons);
  console.log("--- !!! discordPersons is : " , discordPersons);
  //--- !!! discordPersons is :  (5) [{…}, {…}, {…}, {…}, {…}]

  const [eachColor , setEachColor]=useState("red");

  const handleChangePeople=(event) =>{
    setDiscordPersons(clickPersons);
    setEachColor(propColor);
  }


return(
  <>
<h1 style={{width:propWidth , color:propColor , border:`3px dotted ${propColor}`}}>propText is : {propText}</h1>
<h1>persons from mypersons/discordPersons array are :</h1>

{discordPersons.map((person , index) =>{
  return(
    <article key={index}>
<div style={{width:propWidth ,
             height:"300px" ,
             padding:"1em" ,
             margin:"1em" ,
             border:`5px solid ${eachColor}` ,
             backgroundImage:person.urlImage,
             backgroundRepeat:"no-repeat" ,
             backgroundPosition:"center" ,
             backgroundSize:"center"}}>
             <p style={{color:propColor}}>{propText} and {person.name}</p>
             </div>

             <p>{person.name} {person.surname} has telephone number {person.tel}</p>
             <em><strong>Code : {person.code}</strong></em>
    </article>
  )
})}
   <button onClick={handleChangePeople}>click to change</button>
</>
);
}

export default UserInfoPersons;

// height: 300px;
//  width: 100%;
//  background-repeat: no-repeat;
//  background-image: url(./images/pexels-photo-847393.jpeg);
//  background-position: center;
//  background-size: cover;
