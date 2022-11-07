import React, {useRef , useState , useEffect} from 'react';
import Axios from "axios";

//axios allows to make a get request

//Axios.get("url")
//i make a request to a website and get the information from that url returns=fetch data
//the fetch function returns a promise



//https://picsum.photos/v2/list

//https://picsum.photos/id/7/info

//https://picsum.photos/?ref=publicapis.dev


function ApiPicsumSingle(props){

const {propWidth , propColor , propText}=props;
//---------------------------------------------------------

const [singlePicture7 , setSinglePicture7]=useState("");

//----------------------------Axios single picture--------------------------------------------------

const handleShowSinglePicture=(event) =>{

console.log("you clicked the show single picture btn");


Axios.get("https://picsum.photos/id/45/info")
.then((response) =>{

console.log("picsum single response" , response);
//picsum single response {data: {…}, status: 200, statusText: '', headers: AxiosHeaders, config: {…}, …}
console.log("picsum single response.data" , response.data);
//picsum single response.data {id: '7', author: 'Alejandro Escamilla', width: 4728, height: 3168, url: 'https://unsplash.com/photos/BbQLHCpVUqA', …}

setSinglePicture7(response.data);
})
.catch(error =>{
  console.log("picsum single picture error : " , error);
})


}


//-------------------axios show single picture with id=input value from user----------------------------------------------------------

const [userIdInputValue , setUserIdInputValue]=useState(0);

const [pictureIdOfUser , setPictureIdOfUser]=useState("0");

//------------------------------------------

const chooseNrIdPicture=(event) =>{
  setUserIdInputValue(event.target.value);
}

//----------------------------------------------

const handlePictureIdUser=(event) =>{

console.log("you clicked picture with id=user value of input");

Axios.get(`https://picsum.photos/id/${userIdInputValue}/info`)
  .then((response) =>{
    console.log("picsum picture id=input value from user , response : " , response);
    console.log("picsum picture id=input value from user , response.data : " , response.data);

    setPictureIdOfUser(response.data);

  })
  .catch(error =>{
    console.log("picsum picture id=input value from user , response : " , error);
  })

}

//------------------------------------------------------------------------------


return(

  <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

<h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>function component is {propText}</h1>

<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>

<button onClick={handleShowSinglePicture}>show single picture 46</button>

<div style={{
             width:`${singlePicture7.width}px`,
             height:`${singlePicture7.height}px`,
             // width:"300px",
             // height:"200px",
             margin:"1em",
             border:`3px solid ${propColor}` ,
             backgroundColor:"Linen",
             backgroundRepeat:"no-repeat",
             backgroundPosition:"center",
             backgroundSizeSize:"contain" ,
             backgroundImage:`url(${singlePicture7.download_url})`
           }} >
<p>id : {singlePicture7.id}</p>
<p>author : {singlePicture7.author}</p>
           </div>

</article>

<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>

<label htmlFor="idUserValue">your nr is picture id
<input type="number" name="idUserValue" id="idUserValue" placeholder="write picture id" onChange={chooseNrIdPicture}/>
</label><br></br>

<button onClick={handlePictureIdUser}>show picture with id from your nr</button>

<div style={{
             width:`${pictureIdOfUser.width}px`,
             height:`${pictureIdOfUser.height}px`,
             // width:"300px",
             // height:"200px",
             margin:"1em",
             border:`3px solid ${propColor}` ,
             backgroundColor:"PaleGoldenRod",
             backgroundRepeat:"no-repeat",
             backgroundPosition:"center",
             backgroundSizeSize:"contain" ,
             backgroundImage:`url(${pictureIdOfUser.download_url})`
           }} >
<p>id : {pictureIdOfUser.id}</p>
<p>author : {pictureIdOfUser.author}</p>
           </div>

</article>

</section>

);

}

export default ApiPicsumSingle;
