import React, {useRef , useState , useEffect} from 'react';
import Axios from "axios";

//axios allows to make a get request

//Axios.get("url")
//i make a request to a website and get the information from that url returns=fetch data
//the fetch function returns a promise

//https://foodish-api.herokuapp.com/api/

function APIfox(props){

    const {propWidth , propColor , propText}=props;

//-----------------------axios fox image and link-----------------------------------------------------

const [foxImage , setFoxImage]=useState("");
const [foxLink , setFoxLink]=useState("");

    //--------------------------------------------------------------------------

    const handleFoxShowBtn=(event)=>{

console.log("you clicked the show fox btn ");

Axios.get(`https://randomfox.ca/floof/`)
  .then((response) =>{
    console.log("fox response" , response);

//fox response {data: {…}, status: 200, statusText: '', headers: AxiosHeaders, config: {…}, …}

  console.log("fox response.data" , response.data);

//fox response.data {image: 'https://randomfox.ca/images/116.jpg', link: 'https://randomfox.ca/?i=116'}

  console.log("fox response.data.image" , response.data.image);

  setFoxImage(response.data.image);

  console.log("fox response.data.link" , response.data.link);

setFoxLink(response.data.link);
  })

    }

    //-------------------------------axios random pictures-----------------------------------------

    const [pizzaObj , setPizzaObj]=useState({});

    const handleShowPicture=(event) =>{

console.log("show random picture btn");

Axios.get("https://foodish-api.herokuapp.com/api/")
.then((response) =>{
  console.log("random picture response" , response);

//random picture response {data: {…}, status: 200, statusText: 'OK', headers: AxiosHeaders, config: {…}, …}

console.log("random picture response.data" , response.data);
//each time another image

//random picture response.data {image: 'https://foodish-api.herokuapp.com/images/pizza/pizza76.jpg'}

setPizzaObj(response.data);

})

    }

    //----------------------------------------------------------------------------

return(


    <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

  <h1>function component is {propText}</h1>

<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>

  <button onClick={handleFoxShowBtn}>show fox</button>

  <div style={{
               width:propWidth ,
               height:"500px",
               margin:"1em",
               border:`3px solid ${propColor}` ,
               backgroundColor:"yellowgreen",
               backgroundRepeat:"no-repeat",
               backgroundPosition:"center",
               backgroundSizeSize:"contain" ,
               backgroundImage:`url(${foxImage})`
             }} >
          <a href={foxLink} target="_blank">fox link to click</a>
             </div>

</article>

<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>

<button onClick={handleShowPicture}>showRandom food picture</button>

<div style={{
             width:propWidth ,
             height:"500px",
             margin:"1em",
             border:`3px solid ${propColor}` ,
             backgroundColor:"yellow",
             backgroundRepeat:"no-repeat",
             backgroundPosition:"center",
             backgroundSizeSize:"cover" ,
             backgroundImage:`url(${pizzaObj.image})`
           }} >
random food
           </div>

</article>

  </section>

);

}

export default APIfox;
