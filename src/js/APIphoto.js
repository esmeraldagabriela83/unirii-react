import React, {useRef , useState , useEffect} from 'react';
import Axios from "axios";

//axios allows to make a get request

//Axios.get("url")
//i make a request to a website and get the information from that url returns=fetch data
//the fetch function returns a promise (what is inside then())


//React Hooks Tutorial - 13 - Fetching data with useEffect Part 2
//https://www.youtube.com/watch?v=1tfd6ANaNRY

//https://jsonplaceholder.typicode.com/

//photo
//https://jsonplaceholder.typicode.com/photos/1


//with controlled component //input are value si onChange


function APIphoto(props){

const {propWidth , propColor , propText}=props;

//----------------------------use effect and API request------------------------------------------------

const [photoId , setPhotoId]=useState(0);

const [photoObj , setPhotoObj]=useState({});

const chanheIdPhotoFromInputValue=(event) =>{
  setPhotoId(event.target.value);
}

//-----------------

useEffect(() =>{

Axios.get(`https://jsonplaceholder.typicode.com/photos/${photoId}`)
  .then((response) =>{
    console.log("photo response : " , response);
    console.log("photo response.data : " , response.data);

setPhotoObj(response.data)
  })
  .catch(error =>{
    console.log("photo  error" , error);
  })

} , [photoId])


//---------------------------------btn and API request--------------------------------------------

const [idPhoto , setIdPhoto]=useState(0);
const [objPhoto , setObjPhoto]=useState({})

const changeValueIdInput=(event) =>{
  setIdPhoto(event.target.value)
}

const handlePhotoInfo=(event) =>{

console.log("you clicked the show photo info btn");

Axios.get(`https://jsonplaceholder.typicode.com/photos/${idPhoto}`)
  .then((response) =>{
    console.log("response" , response);
    console.log("response.data" , response.data);

    setObjPhoto(response.data)
  })

}


//-----------------------------------------------------------------------------

return(

  <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

<h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>function component is {propText}</h1>

<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>

<h3> use effect and API request </h3>

<label htmlFor="photoIdInput">write a nr between 1 and 5000 <br></br>
<input type="number" id="photoIdInput" name="photoIdInput" value={photoId} onChange={chanheIdPhotoFromInputValue}/>
</label>

<h3>id : {photoObj.id}</h3>
<h3>title : {photoObj.title}</h3>
<div style={{
             width:propWidth ,
             height:"300px" ,
             margin:"1em",
             border:`3px solid ${propColor}` ,
             backgroundColor:"pink",
             backgroundRepeat:"no-repeat",
             backgroundPosition:"center",
             backgroundSizeSize:"cover" ,
             backgroundImage:`url(${photoObj.url} )`
             }}>
             id: {photoObj.id}
</div>

<div style={{
             width:propWidth ,
             height:"300px" ,
             margin:"1em",
             border:`3px solid ${propColor}` ,
             backgroundColor:"pink",
             backgroundRepeat:"no-repeat",
             backgroundPosition:"center",
             backgroundSizeSize:"cover" ,
             backgroundImage:`url(${photoObj.thumbnailUrl} )`
             }}>
             id: {photoObj.id}
</div>

</article>

<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>

<h3> button and API request </h3>

<label htmlFor="idUserPhoto">write a nr // index photo // 1-5000<br></br>
<input type="number" name="idUserPhoto" id="idUserPhoto" value={idPhoto} onChange={changeValueIdInput} />
</label><br></br>

<button onClick={handlePhotoInfo}>click to show photo and it`s info</button>

<h3>id : {objPhoto.id}</h3>
<h3>title : {objPhoto.title}</h3>

<div style={{
             width:propWidth ,
             height:"300px" ,
             margin:"1em",
             border:`3px solid ${propColor}` ,
             backgroundColor:"pink",
             backgroundRepeat:"no-repeat",
             backgroundPosition:"center",
             backgroundSizeSize:"cover" ,
             backgroundImage:`url(${objPhoto.url} )`
             }}>
             id: {objPhoto.id}
</div>

<div style={{
             width:propWidth ,
             height:"300px" ,
             margin:"1em",
             border:`3px solid ${propColor}` ,
             backgroundColor:"pink",
             backgroundRepeat:"no-repeat",
             backgroundPosition:"center",
             backgroundSizeSize:"cover" ,
             backgroundImage:`url(${objPhoto.thumbnailUrl} )`
             }}>
             id: {objPhoto.id}
</div>


</article>

</section>

);

}

export default APIphoto;
