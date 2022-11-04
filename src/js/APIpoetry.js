import React, {useRef , useState , useEffect} from 'react';
import Axios from "axios";

//axios allows to make a get request

//Axios.get("url")
//i make a request to a website and get the information from that url returns=fetch data
//the fetch function returns a promise

//https://github.com/public-apis/public-apis#books

//https://github.com/thundercomb/poetrydb#readme

//https://poetrydb.org/title/Ozymandias/lines.json

function APIpoetry(props){

  const {propWidth , propColor , propText}=props;

  //----------------

  const [singlePoem , setSinglePoem]=useState("");

  //---------------------------------------------------------------------------

const handleShowPoem=(event) =>{

console.log("you clicked the show poem btn");

Axios.get("https://poetrydb.org/title/Ozymandias/lines.json")
.then((response) =>{
  console.log("poem response is : " , response);

//poem response is :  {data: Array(1), status: 200, statusText: '', headers: AxiosHeaders, config: {…}, …}

  console.log("poem response.data is : " , response.data);

  //poem response.data is :  [{…}]

  console.log("poem response.data.length is : " , response.data.length);

  //poem response.data.length is :  1

  console.log("poem response.data[0].lines is : " , response.data[0].lines);

  console.log("poem response.data[0].lines.length is : " , response.data[0].lines.length);

//poem response.data[0].lines.length is :  14

setSinglePoem(response.data[0].lines);

})
.catch(error =>{
  console.log("error is : " , error);
})

}

  //----------------------------------------------------------------------------


return(

  <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

<h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>function component is {propText}</h1>

<button onClick={handleShowPoem}>click to show the poem</button>

<p>poem is :
<strong>{singlePoem}</strong>
</p>

</section>

);


}


export default APIpoetry;
