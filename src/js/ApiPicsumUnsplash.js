import React, {useRef , useState , useEffect} from 'react';
import Axios from "axios";

//axios allows to make a get request

//Axios.get("url")
//i make a request to a website and get the information from that url returns=fetch data
//the fetch function returns a promise

//https://picsum.photos/v2/list?page=2&limit=100

//https://picsum.photos/?ref=publicapis.dev


function ApiPicsumUnsplash(props){

  const {propWidth , propColor , propText}=props;
  //---------------------------------------------------------

  const [singlePictureUnsplash , setSinglePictureUnsplash]=useState("");

  //----------------------------Axios single unsplash picture with index 5--------------------------------------------------


const handleUsplashPicture=(event) =>{

console.log("you click to show unsplash picture");

Axios.get("https://picsum.photos/v2/list?page=2&limit=100")
.then((response) =>{

console.log("unsplash response: " , response);
//unsplash response:  {data: Array(100), status: 200, statusText: '', headers: AxiosHeaders, config: {…}, …}
console.log("unsplash response.data.length: " , response.data.length);
//unsplash response.data.length:  100
console.log("unsplash response.data[5]: " , response.data[5]);
//unsplash response.data[5]:  {id: '108', author: 'Florian Klauer', width: 2000, height: 1333, url: 'https://unsplash.com/photos/t1mqA3V3-7g', …}

setSinglePictureUnsplash(response.data[5]);
})
.catch((error) =>{
  console.log("unsplash error: " , error);
})

}
//-----------------------axios picture with index = input value---------------------------------------------------------
  const [singlePictureUnsplashUserId , setSinglePictureUnsplashUserId]=useState("");

const [unsplashId , setUnsplashId]=useState(0);

const changeUnsplashUserIdValue=(event) =>{
  console.log("---------------unsplashId" , unsplashId);
  setUnsplashId(event.target.value);
}

//---------------

const handleUsplashPictureIdUserChoosen=(event) =>{

console.log("you click to show unsplash picture with id = input value");

Axios.get(`https://picsum.photos/v2/list?page=2&limit=100`)
  .then((response) =>{

console.log("unsplash picture user id , response: " , response);

console.log("unsplash picture user id , response.data: " , response.data);

console.log("unsplash response.data.length: " , response.data.length);

console.log("unsplashId is : " , unsplashId);

console.log("unsplash response.data[unsplashId]: " , response.data[unsplashId]);

setSinglePictureUnsplashUserId(response.data[unsplashId]);

  })
  .catch((error) =>{
    console.log(error)
  })

}

//-----------------------------------

return(

  <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

<h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>function component is {propText}</h1>

<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>

<button onClick={handleUsplashPicture}>click to show unsplash picture nr 6</button>

<div style={{
             width:`${singlePictureUnsplash.width}px`,
             height:`${singlePictureUnsplash.height}px`,
             // width:"300px",
             // height:"200px",
             margin:"1em",
             border:`3px solid ${propColor}` ,
             backgroundColor:"PapayaWhip",
             backgroundRepeat:"no-repeat",
             backgroundPosition:"center",
             backgroundSizeSize:"contain" ,
             backgroundImage:`url(${singlePictureUnsplash.download_url})`
           }} >
<p>id : {singlePictureUnsplash.id}</p>
<p>author : {singlePictureUnsplash.author}</p>
           </div>

</article>


<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>

<label htmlFor="idUserValue">write a nr between 1 and 100
<input type="number" name="unsplashIdUserValue" id="unsplashIdUserValue" placeholder="write unsplash id picture" onChange={changeUnsplashUserIdValue}/>
</label><br></br>

<button onClick={handleUsplashPictureIdUserChoosen}>click to show the unsplash picture with your nr from the input</button>

<div style={{
             width:`${singlePictureUnsplashUserId.width}px`,
             height:`${singlePictureUnsplashUserId.height}px`,
             // width:"300px",
             // height:"200px",
             margin:"1em",
             border:`3px solid ${propColor}` ,
             backgroundColor:"PaleGoldenRod",
             backgroundRepeat:"no-repeat",
             backgroundPosition:"center",
             backgroundSizeSize:"contain" ,
             backgroundImage:`url(${singlePictureUnsplashUserId.download_url})`
           }} >
<p>id : {singlePictureUnsplashUserId.id}</p>
<p>author : {singlePictureUnsplashUserId.author}</p>
           </div>

</article>

</section>

);


}

export default ApiPicsumUnsplash;
