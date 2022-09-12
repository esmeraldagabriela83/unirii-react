import React, {useState} from 'react';


console.log("hello from CountThings.js");
//16 05 2022 Andrei teme discord

export default function CountThings(props){

const [balance , setBalance]=useState(1000);
const [age, setAge]=useState(40);

//folosesc arrow function pt a schimba state-ul

const getRich=(event) =>{
  setBalance(balance + 50)
};

const getOlder=(event) =>{
  setAge(age + 5)
};

return(

  <section style={{margin:"1em" , padding:"1em" , border:"3px dotted indigo", backgroundColor:"floralWhite"}}>
<p style={{margin:"1em" , padding:"1em" , border:"3px dotted green"}}>so much mony : ${balance}</p>
<p style={{margin:"1em" , padding:"1em" , border:"3px dotted pink"}}>age is : {age}</p>

<button onClick={getRich} style={{margin:"1em" , padding:"1em" , border:"3px dotted darkred"}}>get rich</button>
<button onClick={getOlder} style={{margin:"1em" , padding:"1em" , border:"3px dotted magenta"}}>get older</button>
</section>

);

}









//
