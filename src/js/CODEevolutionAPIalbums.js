import React, {useRef , useState , useEffect} from 'react';
import Axios from "axios";

//axios allows to make a get request

//Axios.get("url")
//i make a request to a website and get the information from that url returns=fetch data
//the fetch function returns a promise


//React Hooks Tutorial - 12 - Fetching data with useEffect Part 1
//https://www.youtube.com/watch?v=bYFYF2GnMy8

//https://jsonplaceholder.typicode.com/

//albums
//https://jsonplaceholder.typicode.com/albums

function CODEevolutionAPIalbums(props){

const {propWidth , propColor , propText}=props;

//-----------------Axios and useEffect-------------------------------------------------------------

const [albums , setAlbums]=useState([]);

useEffect(() =>{

Axios.get("https://jsonplaceholder.typicode.com/albums")
.then((response) =>{
  console.log("codeEvolution albums response.data is : " , response.data);
  console.log("codeEvolution albums response.data.length is : " , response.data.length);

  setAlbums(response.data)
})

} ,[])

//----------------------------Axios and button--------------------------------------------------

const [secondAlbums , setSecondAlbums]=useState([]);

const handleShowAlbums=(event) =>{
  console.log("you clicked the axios show albums btn");

  Axios.get("https://jsonplaceholder.typicode.com/albums")
  .then((response) =>{
    console.log("codeEvolution albums response.data is : " , response.data);
    console.log("codeEvolution albums response.data.length is : " , response.data.length);

    setSecondAlbums(response.data)
  })
}


//------------------------------------------------------------------------------

return(
  <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

<h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>function component is {propText}</h1>

<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>

<h1>API REQUEST and useEffect</h1>

{albums.map((elAlbum , index) =>{
//map are intotdeauna return
  return(
    <ul key={index}>
<li style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>
<span style={{color:"orangered"}}>{elAlbum.id}</span>    <em style={{color:"DarkSlateGray"}}>{elAlbum.userId}</em>    <strong style={{color:"ForestGreen"}}>{elAlbum.title}</strong>
</li>
    </ul>
  );
})}

</article>


<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>

<h1>API REQUEST and button</h1>

<button onClick={handleShowAlbums}>show albums</button>

{secondAlbums.map((elAlbum , index) =>{
//map are intotdeauna return
  return(
    <ul key={index}>
<li style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>
<span style={{color:"orangered"}}>{elAlbum.id}</span>    <em style={{color:"DarkSlateGray"}}>{elAlbum.userId}</em>    <strong style={{color:"tomato"}}>{elAlbum.title}</strong>
</li>
    </ul>
  );
})}

</article>


</section>
);


}


export default CODEevolutionAPIalbums;














//
