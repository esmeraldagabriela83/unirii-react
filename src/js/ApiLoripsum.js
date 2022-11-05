import React, {useRef , useState , useEffect} from 'react';
import Axios from "axios";

//axios allows to make a get request

//Axios.get("url")
//i make a request to a website and get the information from that url returns=fetch data
//the fetch function returns a promise


//250 Unique APIs for your next Project
//https://www.youtube.com/watch?v=Y0QBmXEylP8

//https://picsum.photos/?ref=publicapis.dev


function ApiLoripsum(props){

  const {propWidth , propColor , propText}=props;

//-----------------------------modify by user width and height from inputs-------------------------------------------------

  const [userImageWidth , setUserImageWidth]=useState(200);

  const [userImageHeight , setUserImageHeight]=useState(300);

  //--------------

const handleFirstImage=(event)=>{

console.log("you clicked show  image");

  //---------------change width of photo---------------------------------------------------
setUserImageWidth(event.target.value);
  //---------------change height of photo---------------------------------------------------
setUserImageHeight(event.target.value);

}


//--------------------------------modify by user width and height from button onClick----------------------------------------------
const [userImageSecondWidth , setUserSecondImageWidth]=useState(200);

const [userImageSecondHeight , setUserImageSecondHeight]=useState(300);

const handleSecondImage=(event) =>{

setUserSecondImageWidth(event.target.value);
setUserImageSecondHeight(event.target.value);

}


const handleSecondImageMbap=(event) =>{

    event.preventDefault();

console.log("you clicked to change the sizes of second img");

const splashImage=document.getElementById('splashImage');

console.log("splashImage is : " , splashImage);


splashImage.style.width=`${parseFloat(userImageSecondWidth)}px`;
splashImage.style.height=`${parseFloat(userImageSecondHeight)}px`;

splashImage.style.padding="1em";
splashImage.style.border="5px solid tomato";

}

  //-------------------------------------------------

return(

  <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

<h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>function component is {propText}</h1>

<h1>change the size of the images by writing a nr in inputs</h1>

<img src="https://picsum.photos/200/300" alt="userImageDefault" />

<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

<label htmlFor="userWidth">introduce only nr for width<br></br>
<input type="number" name="userWidth" id="userWidth" placeholder="write nr width" onChange={handleFirstImage}/>
</label>

<h3>or</h3>

<label htmlFor="userWidth">introduce only nr for height<br></br>
<input type="number" name="userHeight" id="userHeight" placeholder="write nr height" onChange={handleFirstImage}/>
</label><br></br>


<img alt="userImageWH"
     src="https://images.pexels.com/photos/13164333/pexels-photo-13164333.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
     style={{width:parseFloat(userImageWidth) , height:parseFloat(userImageHeight) , border:`3px solid ${propColor}` , padding:"1em" , margin:"1em"}} />

</article>

<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

<label htmlFor="userWidth">introduce nr for width of second image<br></br>
<input type="number" name="userWidth" id="userWidth" placeholder="write nr width" onChange={handleSecondImage}/>
</label>
<h3>or</h3>
<label htmlFor="userWidth">introduce nr for height of second image<br></br>
<input type="number" name="userHeight" id="userHeight" placeholder="write nr height" onChange={handleSecondImage}/>
</label><br></br>

<button onClick={handleSecondImageMbap} style={{margin:"1em" , padding:"1em" , backgroundColor:"yellow"}}>
click to take the state values<br></br>
 OR<br></br>
show image after your weight or height in one of the inputs and then click
</button>

     <div style={{
                  // width:propWidth ,
                  // height:"500px",
                  // width:`${parseFloat(userImageSecondWidth)}px`,
                  // height:`${parseFloat(userImageSecondHeight)}px`,
                  margin:"1em",
                  border:`3px solid ${propColor}` ,
                  backgroundColor:"yellowgreen",
                  backgroundRepeat:"no-repeat",
                  backgroundPosition:"center",
                  backgroundSizeSize:"center" ,
                  backgroundImage:`url(https://images.pexels.com/photos/13563689/pexels-photo-13563689.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load)`
                }}  id="splashImage">
        second photo
                </div>

</article>

</section>

);

}


export default ApiLoripsum;
