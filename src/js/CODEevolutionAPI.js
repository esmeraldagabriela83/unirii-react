import React, {useRef , useState , useEffect} from 'react';
import Axios from "axios";

//axios allows to make a get request

//Axios.get("url")
//i make a request to a website and get the information from that url returns=fetch data
//the fetch function returns a promise


//React Hooks Tutorial - 12 - Fetching data with useEffect Part 1
//https://www.youtube.com/watch?v=bYFYF2GnMy8

//https://jsonplaceholder.typicode.com/

//posts
//https://jsonplaceholder.typicode.com/posts




function CODEevolutionAPI(props){

const {propWidth , propColor , propText}=props;

//-------------------------I want to fetch the url data from the end point // the array posts with many objects----------------------

const [posts , setPosts]=useState([]);

useEffect(() =>{


//I make the get request using axios
//the get request returns a promise


Axios.get("https://jsonplaceholder.typicode.com/posts")
.then((response) =>{

console.log("codeEvolution response is : " ,response);
//codeEvolution response is :  {data: Array(100), status: 200, statusText: '', headers: AxiosHeaders, config: {…}, …}

console.log("codeEvolution response.data is : " , response.data);
console.log("codeEvolution response.data.length is : " , response.data.length);
//codeEvolution response.data.length is :  100
//response.data este un array cu 100 obiecte
setPosts(response.data);

})
.catch(error =>{
  console.log("codeEvolution error is : " , error);
})

} , [])

//-------------------------I want to fetch the url data from the end point // the array users with many objects----------------------

const [users , setUsers]=useState([]);

const handleShowUsers=(event) =>{
  console.log("you clicked the show users btn");

Axios.get("https://jsonplaceholder.typicode.com/users")
.then((response) =>{
  console.log("codeEvolution users response is : " , response);
  console.log("codeEvolution users response.data is : " , response.data);
  console.log("codeEvolution users response.data.length is : " ,  response.data.length);

  setUsers(response.data)
})
.catch(error =>{
  console.log("codeEvolution users error is : " , error);
})

}

//------------------------------------------------------------------------------


return(
  <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

<h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>function component is {propText}</h1>

<h1>API REQUEST and useEffect</h1>

<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>

<ul style={{padding:"1em" , margin:"1em" , border:`3px solid tomato`}}>
{
  posts.map(elPost =>{
//map are intotdeauna return
return(
  <li key={elPost.id} style={{padding:"0.3em" , margin:"0.3em" , border:`3px solid PaleVioletRed`}}>
  <strong>{elPost.id}</strong> => {elPost.userId} : <em>{elPost.title}</em>
  </li>
);

  })
}
</ul>

</article>

<h1>API REQUEST and btn</h1>

<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>

<button onClick={handleShowUsers}>show users data</button>

<ul style={{padding:"1em" , margin:"1em" , border:`3px solid SpringGreen`}}>
{
  users.map(elUser =>{

//map are intotdeauna return
return(
  <li key={elUser.id} style={{padding:"0.3em" , margin:"0.3em" , border:`3px solid teal`}}>
{elUser.id} => user: <strong>{elUser.name}</strong> / username:  <em>{elUser.username}</em> lives on {elUser.address.street} and works for {elUser.company.name} .<br></br>
The phone nr is <strong>{elUser.phone}</strong> .

  </li>
);

  })
}
</ul>

</article>

</section>
);

}


export default CODEevolutionAPI;





//
