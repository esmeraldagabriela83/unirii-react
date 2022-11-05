import React, {useRef , useState , useEffect} from 'react';
import Axios from "axios";

//axios allows to make a get request

//Axios.get("url")
//i make a request to a website and get the information from that url returns=fetch data
//the fetch function returns a promise



//https://picsum.photos/v2/list

//https://picsum.photos/id/7/info

//https://picsum.photos/?ref=publicapis.dev

function ApiPicsumList(props){

    const {propWidth , propColor , propText}=props;

    //------------------------------Axios pixum images----------------------

    const [picsumImages , setPicsumImages]=useState([]);

    const handleListImages=(event) =>{

console.log("you clicked the btn to show images list");


Axios.get("https://picsum.photos/v2/list")
.then((response) =>{
  console.log("picsum response" , response);
//obj
  //picsum response {data: Array(30), status: 200, statusText: '', headers: AxiosHeaders, config: {…}, …}

  console.log("picsum response.data" , response.data);
//array
  //picsum response.data (30) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]

setPicsumImages(response.data);

})


    }

    return(

      <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

    <h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>function component is {propText}</h1>

    <button onClick={handleListImages}>show list of images</button>

    <ul>
{picsumImages.map((objPhoto) =>{
//map are intotdeauna return

return(
  <li key={objPhoto.id} style={{padding:"0.3em" , margin:"0.3em" , border:`3px solid ${propColor}`}}>
<p>id is : {objPhoto.id}</p>
<p>id is : {objPhoto.author}</p>

<div style={{
             width:`${objPhoto.width}px`,
             height:`${objPhoto.height}px`,
             margin:"1em",
             border:`3px solid ${propColor}` ,
             backgroundColor:"Khaki",
             backgroundRepeat:"no-repeat",
             backgroundPosition:"center",
             backgroundSizeSize:"contain" ,
             backgroundImage:`url(${objPhoto.download_url})`
           }} >
  different photo
           </div>

  </li>

);

})}
    </ul>

</section>

    );


}

export default ApiPicsumList;
