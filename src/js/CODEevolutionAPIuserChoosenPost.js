import React, {useRef , useState , useEffect} from 'react';
import Axios from "axios";

//axios allows to make a get request

//Axios.get("url")
//i make a request to a website and get the information from that url returns=fetch data
//the fetch function returns a promise


//React Hooks Tutorial - 13 - Fetching data with useEffect Part 2
//https://www.youtube.com/watch?v=1tfd6ANaNRY

//https://jsonplaceholder.typicode.com/

//post
//https://jsonplaceholder.typicode.com/posts/1


//with controlled component //input are value si onChange


function CODEevolutionAPIuserChoosenPost(props){

const {propWidth , propColor , propText}=props;

//----------------------------------axios and useEffect user choses ihe id of post--------------------------------------------
const [post , setPost]=useState({});

const [id , setId]=useState(0);

useEffect(() =>{

Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  .then((response) =>{

console.log("codeEvolution each post  response obj is : " ,response);

//codeEvolution each post  response obj is :  {data: {…}, status: 200, statusText: '', headers: AxiosHeaders, config: {…}, …}
// config
// :
// {transitional: {…}, transformRequest: Array(1), transformResponse: Array(1), timeout: 0, adapter: ƒ, …}
// data
// :
// {userId: 1, id: 1, title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'quia et suscipit\nsuscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto'}
// headers
// :
// AxiosHeaders {cache-control: 'max-age=43200', content-type: 'application/json; charset=utf-8', expires: '-1', pragma: 'no-cache', Symbol(defaults): null}
// request
// :
// XMLHttpRequest {onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}
// status
// :
// 200
// statusText
// :
// ""
// [[Prototype]]
// :
// Object

console.log("codeEvolution each post  response.data obj is : " , response.data);

//codeEvolution each post  response.data obj is :  {userId: 1, id: 1, title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'quia et suscipit\nsuscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto'}

setPost(response.data)
  })
  .catch(error =>{
    console.log("error" , error);
  })

}, [id])


//----------------------------------axios and button user chooses ihe id of post--------------------------------------------

const [singlePost , setSinglePost]=useState({});
const [userIdPost , setUserIdPost]=useState(0);

const userChangeIdValuePost=(event) =>{
  setUserIdPost(event.target.value);
}

const handleShowSinglePostWithIdFromInputValue=(event) =>{
  console.log(`you clicked the btn to show single post with id choosen by user bt writing input value : ${userIdPost}`);

Axios.get(`https://jsonplaceholder.typicode.com/posts/${userIdPost}`)
  .then((response) =>{
    console.log("response" , response);
    console.log("response.data" , response.data);

    setSinglePost(response.data)
  })
  .catch(error =>{
    console.log("error" , error);
  })

}

//-----------------------------axios and useEffect post one--------------------------------------------------------

const [postNrOne , setPostNrOne]=useState({});


useEffect(() =>{

  Axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
    .then((response) =>{
      console.log("response" , response);
      console.log("response.data" , response.data);

      setPostNrOne(response.data)
    })
    .catch(error =>{
      console.log("error" , error);
    })

}, {})

//-----------------------------axios and button post one--------------------------------------------------------

const [postOne , setPostOne]=useState({});

const handleShowPostOne=(event) =>{

console.log("you clicked the show post one btn");

Axios.get("https://jsonplaceholder.typicode.com/posts/1")
.then((response) =>{
  console.log("response" , response);

//response {data: {…}, status: 200, statusText: '', headers: AxiosHeaders, config: {…}, …}

  console.log("response.data" , response.data);
  //response.data {userId: 1, id: 1, title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'quia et suscipit\nsuscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto'}

setPostOne(response.data)
})

}

//------------------------------------------------------------------------------

return(

  <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

<h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>function component is {propText}</h1>

<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>

<h1>axios and useEffect // user choses ihe id of post</h1>

<label htmlFor="userChoosenPost">introduce a number between 1 and 100<br></br>
<input type="text" id="userChoosenPost" name="userChoosenPost" value={id} onChange={(event) => setId(event.target.value)}/>
</label>

<ul>
<li>userId is : {post.userId}</li>
<li>id is : {post.id}</li>
<li>title is : {post.title}</li>
<li>body is : {post.body}</li>
</ul>

</article>


<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>

<h1>axios and btn // user choses ihe id of post</h1>

<label htmlFor="userPostId">introduce a number between 1 and 100<br></br>
<input type="text" name="userPostId" id="userPostId" value={userIdPost} onChange={userChangeIdValuePost}/>
</label><br></br>

<button onClick={handleShowSinglePostWithIdFromInputValue}>show the post with the choosen id input value</button>

<ul>
<li>userId is : {singlePost.userId}</li>
<li>id is : {singlePost.id}</li>
<li>title is : {singlePost.title}</li>
<li>body is : {singlePost.body}</li>
</ul>


</article>



<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>
<h1>axios and useEffect // show only post one</h1>

<ul>
<li>userId is : {postNrOne.userId}</li>
<li>id is : {postNrOne.id}</li>
<li>title is : {postNrOne.title}</li>
<li>body is : {postNrOne.body}</li>
</ul>

</article>

<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>
<h1>axios and button // show only post one</h1>

<button onClick={handleShowPostOne}>click to show only post one</button>

<ul>
<li>userId is : {postOne.userId}</li>
<li>id is : {postOne.id}</li>
<li>title is : {postOne.title}</li>
<li>body is : {postOne.body}</li>
</ul>

</article>

</section>

);


}

export default CODEevolutionAPIuserChoosenPost;
