import React, {useRef , useState , useEffect} from 'react';
import Axios from "axios";

//axios allows to make a get request

//Axios.get("url")
//i make a request to a website and get the information from that url returns=fetch data
//the fetch function returns a promise

//https://random-data-api.com/documentation

//https://random-data-api.com/api/v2/users

function APIusers(props){

        const {propWidth , propColor , propText}=props;


const [personObj , setPersonObj]=useState({});
        //---------------------------------------------------------------------

const handleUsersShowBtnFromAPIrequest=(event) =>{

console.log("you clicked the users btn API request");


Axios.get("https://random-data-api.com/api/v2/users")
.then((response) =>{

console.log("users response" , response);

//users response {data: {…}, status: 200, statusText: '', headers: AxiosHeaders, config: {…}, …}

console.log("users response.data" , response.data);

//users response.data {id: 5976, uid: '8a75df32-2d1e-46c3-bfff-216941fe6f69', password: '3NertSgKsF', first_name: 'Charlsie', last_name: 'Ruecker', …}

setPersonObj(response.data)
})
.catch(error =>{
  console.log("random user error is : " , error);
})

}

        //---------------------------------------------------------------------

        return(

          <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

          <h1>function component is {propText}</h1>

          <article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>


<button onClick={handleUsersShowBtnFromAPIrequest}>show users from API request</button>

<ul>
<li>id : {personObj.id}</li>
<li>uid : {personObj.uid}</li>
<li>name : {personObj.first_name} {personObj.last_name}</li>
<li>username : {personObj.username}</li>
<li>email : {personObj.email}</li>
<li>gender : {personObj.gender}</li>
</ul>

<div style={{
             width:propWidth ,
             height:"300px",
             margin:"1em",
             border:`3px solid ${propColor}` ,
             backgroundColor:"Khaki",
             backgroundRepeat:"no-repeat",
             backgroundPosition:"center",
             backgroundSizeSize:"contain" ,
             backgroundImage:`url(${personObj.avatar})`
           }} >
random user avatar
           </div>

          </article>



          </section>

        );

}


export default APIusers;



















//
