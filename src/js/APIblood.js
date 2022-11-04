import React, {useRef , useState , useEffect} from 'react';
import Axios from "axios";

//axios allows to make a get request

//Axios.get("url")
//i make a request to a website and get the information from that url returns=fetch data
//the fetch function returns a promise

//https://random-data-api.com/documentation

//https://random-data-api.com/api/v2/blood_types

function APIblood(props){

        const {propWidth , propColor , propText}=props;

        //-------------------axios blood type--------------------

        const [bloodSingle , setBloodSingle]=useState({});

        const handleShowBloodTypeBtn=(event) =>{

console.log("you clicked the blood type btn");

Axios.get("https://random-data-api.com/api/v2/blood_types")
.then((response) =>{

console.log("blood response" , response);

//blood response {data: {…}, status: 200, statusText: '', headers: AxiosHeaders, config: {…}, …}

console.log("blood response.data" , response.data);

//blood response.data {id: 4293, uid: '8eb2b28c-0d61-43b8-9588-86a4f34265ac', type: 'AB', rh_factor: '-', group: 'B+'}

setBloodSingle(response.data);

})
.catch(error =>{
  console.log("random user error is : " , error);
})
        }

        return(

          <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

          <h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>function component is {propText}</h1>

<button onClick={handleShowBloodTypeBtn}>show blood type , Rh , group</button>

<ul>
<li>id : <strong>{bloodSingle.id}</strong></li>
<li>type :<strong> {bloodSingle.type}</strong></li>
<li>rh_factor : <strong>{bloodSingle.rh_factor}</strong></li>
<li>group : <strong>{bloodSingle.group}</strong></li>
</ul>

</section>

        );

}

export default APIblood;
