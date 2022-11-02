import React, {useRef , useState , useEffect} from 'react';
import Axios from "axios";

//axios allows to make a get request

//Axios.get("url")
//i make a request to a website and get the information from that url returns=fetch data
//the fetch function returns a promise

//ReactJS Course [7] - How To Fetch Data From an API in React
//https://www.youtube.com/watch?v=je3FTTunyp4&t=1545s

//url :
//https://api.agify.io/?name=pedro


function PedroAPIrequestExample(props){
  const {propWidth , propColor , propText}=props;

  //-------------------------------axios------click on btn to show the predicted age----------------------------------

//variable to change the name from the url, using `` and ${valueInputName}
const [valueInputName , setValueInputName]=useState("");

//variables to get values from the res.data JSobj
const [predictedAge , setPredictedAge]=useState(0);
const [predictedCount , setPredictedCount]=useState(0);
const [predictedName , setPredictedName]=useState(0);

const fetchData=(event) =>{
  console.log("you clicked the fetch data btn");

Axios.get(`https://api.agify.io/?name=${valueInputName}`)
.then((res) =>{
  console.log("res.date obj is : " , res.data);

  //{age: 53, count: 163557, name: 'Pedro'}

setPredictedAge(res.data.age);
setPredictedCount(res.data.count);
setPredictedName(res.data.name);
})
}

//---my idea------click on btn to show the value from the user-----------------

const handleShoeInputValueUser=(event) =>{
  console.log("you clicked the show input value from user");

const italicInputValue=document.getElementById('italicInputValue');
italicInputValue.innerText=valueInputName;

}

  //----------------------------------------------------------------------------

return(

  <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

<h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>function component is {propText}</h1>

<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

<label htmlFor="userName">write a name:
<input type="text" name="userName"  id="userName" placeholder="Ex:Pedro..." onChange={(event) =>{setValueInputName(event.target.value)}}/>
</label><br></br>

<button onClick={fetchData}>predict info about the person`s name you wrote in the input</button>

<h3>predicted age is : {predictedAge}</h3>
<h3>predicted count is : {predictedCount}</h3>
<h3>predicted name is : {predictedName}</h3>

</article>



<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>
<p>input value from the user is : {valueInputName}</p>

<button onClick={handleShoeInputValueUser}>show input value</button>

<p>input value is : <em id="italicInputValue"></em></p>

</article>

</section>

);


}

export default PedroAPIrequestExample;

///
