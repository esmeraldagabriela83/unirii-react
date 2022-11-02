import React, {useRef , useState , useEffect} from 'react';
import Axios from "axios";

//axios allows to make a get request

//Axios.get("url")
//i make a request to a website and get the information from that url returns=fetch data
//the fetch function returns a promise

//ReactJS Course [7] - How To Fetch Data From an API in React
//https://www.youtube.com/watch?v=je3FTTunyp4&t=1545s

//url :
//https://api.agify.io/?name=maria


function PedroMariaAPIrequest(props){


    const {propWidth , propColor , propText}=props;

    //---------------------------------Axios--------------------------------------------

const [maria , setMaria]=useState(
  {
    age:0,
    count:0,
    name:""
  }
);

const handleMariaInfo=(event) =>{

console.log("you clicked maria info btn");
Axios.get("https://api.agify.io/?name=maria")
.then((response) =>{
  console.log("maria obj = response.data : " , response.data);

//maria obj = response.data :  {age: 58, count: 538601, name: 'maria'}

const newCopyMaria={...maria , age:response.data.age , count:response.data.count , name:response.data.name};
setMaria(newCopyMaria);

})

}


return(
  <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

<h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>function component is {propText}</h1>


<button onClick={handleMariaInfo}>show maria`s name info</button>

<ul>
<li>age: {maria.age}</li>
<li>count: {maria.count}</li>
<li>name: {maria.name}</li>
</ul>

</section>
);

}

export default PedroMariaAPIrequest;

//
