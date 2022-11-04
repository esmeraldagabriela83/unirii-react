import React, {useRef , useState , useEffect} from 'react';
import Axios from "axios";

//axios allows to make a get request

//Axios.get("url")
//i make a request to a website and get the information from that url returns=fetch data
//the fetch function returns a promise

function APIfood(props){


      const {propWidth , propColor , propText}=props;

      const [anyFoodObj , setAnyFoodObj]=useState({});

      //-----------------------axios food---------------------------------------------------

const handleFoodPhotobtn=(event) =>{

console.log("you clicked the show food photo randomly");


Axios.get("https://foodish-api.herokuapp.com/api/")
.then((response) =>{
  console.log("food photo response" , response);
  //random picture response {data: {…}, status: 200, statusText: 'OK', headers: AxiosHeaders, config: {…}, …}

  console.log("food photo response.data is obj JS: " , response.data);

  //food photo response.data is obj JS:  {image: 'https://foodish-api.herokuapp.com/images/samosa/samosa10.jpg'}

setAnyFoodObj(response.data);

})
.catch(error =>{
  console.log("random food error is : " , error);
})

}







      //----------------------------------------------------------------------------

return  <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

<h1>function component is {propText}</h1>

<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>

<button onClick={handleFoodPhotobtn}>show food photo randomly</button>

<div style={{
             width:propWidth ,
             height:"500px",
             margin:"1em",
             border:`3px solid ${propColor}` ,
             backgroundColor:"cyan",
             backgroundRepeat:"no-repeat",
             backgroundPosition:"center",
             backgroundSizeSize:"contain" ,
             backgroundImage:`url(${anyFoodObj.image})`
           }} >
random food photo
           </div>

</article>



</section>


}

export default APIfood;













//
