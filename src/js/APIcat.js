import React, {useRef , useState , useEffect} from 'react';
import Axios from "axios";

//axios allows to make a get request

//Axios.get("url")
//i make a request to a website and get the information from that url returns=fetch data
//the fetch function returns a promise (what is inside then())

//https://github.com/public-apis/public-apis#animals

//https://api.thecatapi.com/v1/images/search
//https://docs.thecatapi.com/



function APIcat(props){

const {propWidth , propColor , propText}=props;

//------------------------------------------------------------------------------
const [myCatId , setMyCatId]=useState("");

const [myCat , setMyCat]=useState('');

const [myCatWidth , setMyCatWidth]=useState('');

const [myCatHeight , setMyCatHeight]=useState('');

//-------------------

const handleShowMyCat=(event) =>{

console.log("you clicked the show myCat btn");

Axios.get("https://api.thecatapi.com/v1/images/search")
.then((res) =>{
  console.log(res.data);
//[{…}]

  console.log("length arr" , res.data.length);

  console.log("my cat obj:" , res.data[0]);

//my cat obj: {id: 'af1', url: 'https://cdn2.thecatapi.com/images/af1.gif', width: 345, height: 247}

  console.log("my cat url:" , res.data[0].url);

//my cat url: https://cdn2.thecatapi.com/images/aqt.jpg

  console.log("my cat id:" , res.data[0].id);

  //my cat id: aqt

setMyCat(res.data[0].url);

//----------------
setMyCatId(res.data[0].id);

setMyCatWidth(res.data[0].width);
setMyCatHeight(res.data[0].height);

})
.catch(error =>{
  console.log("error" , error)
})


}


//------------------------------------------------------------------------------


return(

  <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

<h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>function component is {propText}</h1>

<button onClick={handleShowMyCat}>show another cat at each click</button>


<h3>cat id : {myCatId}</h3>


  <div style={{
               width:myCatWidth ,
               height:myCatHeight ,
               margin:"1em",
               border:`3px solid ${propColor}` ,
               backgroundColor:"yellowgreen",
               backgroundRepeat:"no-repeat",
               backgroundPosition:"center",
               backgroundSizeSize:"contain" ,
               backgroundImage:`url(${myCat})`
             }} >
             <h3 style={{color:"white"}}>{myCatId}</h3>
             </div>



</section>

);

}

export default APIcat;

///
