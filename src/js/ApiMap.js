import React, {useRef , useState , useEffect} from 'react';
import Axios from "axios";

//axios allows to make a get request

//Axios.get("url")
//I make a request to a website and get the information from that url returns=fetch data
//the fetch function returns a promise

//https://publicapis.dev/category/public-apis/photography
//https://github.com/M-Media-Group/Cartes.io/wiki/API

function ApiMap(props){

  const {propWidth , propColor , propText}=props;

//----------Axios specific obj -------------------

  const [mapObj , setMapObj]=useState({
    mapId:0,
    mapName:"",
    mapSlug:"",
    mapIcon:""
  });

  //---------------------------

const handleMapClickBtn=(event) =>{

console.log("you clicked show map btn");

Axios.get("https://cartes.io/api/maps/048eebe4-8dac-46e2-a947-50b6b8062fec")
.then((response) =>{

console.log("map response" , response);
//map response {data: {…}, status: 200, statusText: '', headers: AxiosHeaders, config: {…}, …}

console.log("map response.data" , response.data);
//map response.data {slug: '048eebe4-8dac-46e2-a947-50b6b8062fec', title: 'Demo map', description: 'This map is a demo map, meant to help you try out … Information on this map is not real or accurate.', privacy: 'public', users_can_create_markers: 'yes', …}

console.log("map response.data.categories" , response.data.categories);

console.log("map response.data.categories.length" , response.data.categories.length);//136

console.log("map response.data.categories[7]" , response.data.categories[7]);
//map response.data.categories[7] {id: 31, name: 'House', slug: 'house', icon: 'https://img.icons8.com/fluent/48/000000/cottage.png'}

console.log("map response.data.categories[7].id : " , response.data.categories[7].id);

console.log("map response.data.categories[7].name : " , response.data.categories[7].name);

console.log("map response.data.categories[7].slug : " , response.data.categories[7].slug);

console.log("map response.data.categories[7].icon : " , response.data.categories[7].icon);

const newMapObj={...mapObj ,
             mapId:response.data.categories[7].id ,
             mapName:response.data.categories[7].name,
             mapSlug:response.data.categories[7].slug,
             mapIcon:response.data.categories[7].icon};

  console.log("newMapObj is : " , newMapObj);

setMapObj(newMapObj);

})
.catch((error) =>{
  console.log("country map obj 7 error" , error);
})

}

//----------Axios user`s obj id choosen -------------------

const [mapId , setMapId]=useState(0);

const changeMapInputValue=(event) =>{
  setMapId(event.target.value);
}


//-----------------------------

const [mapObjUser , setMapObjUser]=useState({
  mapIdUser:0,
  mapNameUser:"",
  mapSlugUser:"",
  mapIconUser:""
});

//----------------

const [mapTitle , setMapTitle]=useState("code default string");



const handleMapBtn=(event) =>{

console.log("you clicked show obj map choosen by user");

Axios.get("https://cartes.io/api/maps/048eebe4-8dac-46e2-a947-50b6b8062fec")
.then((response) =>{

console.log("map response" , response);
//map response {data: {…}, status: 200, statusText: '', headers: AxiosHeaders, config: {…}, …}

console.log("map response.data" , response.data);
//map response.data {slug: '048eebe4-8dac-46e2-a947-50b6b8062fec', title: 'Demo map', description: 'This map is a demo map, meant to help you try out … Information on this map is not real or accurate.', privacy: 'public', users_can_create_markers: 'yes', …}

console.log("map response.data.categories" , response.data.categories);

console.log("map response.data.categories.length" , response.data.categories.length);//136

console.log("map response.data.categories[34]" , response.data.categories[mapId]);


console.log("map response.data.categories[34].id : " , response.data.categories[mapId].id);

console.log("map response.data.categories[34].name : " , response.data.categories[mapId].name);

console.log("map response.data.categories[34].slug : " , response.data.categories[mapId].slug);

console.log("map response.data.categories[34].icon : " , response.data.categories[mapId].icon);

const newMapObjUser={...mapObjUser ,
                        mapIdUser:response.data.categories[mapId].id ,
                        mapNameUser:response.data.categories[mapId].name ,
                        mapSlugUser:response.data.categories[mapId].slug ,
                        mapIconUser:response.data.categories[mapId].icon};

setMapObjUser(newMapObjUser);

//------------------------

setMapTitle(response.data.title);

})
.catch((error) =>{
  console.log("country user map obj error" , error);
})


}

  //----------------------------------------------

return(

  <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

<h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>function component is {propText}</h1>

<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>

<button onClick={handleMapClickBtn}>show map onj 8</button>

<ul>
<li>id is : {mapObj.mapIdUser}</li>
<li>name is : {mapObj.mapNameUser}</li>
<li>slug is : {mapObj.mapSlugUser}</li>
</ul>


<div style={{
             width:"300px",
             height:"200px",
             margin:"1em",
             border:`3px solid ${propColor}` ,
             backgroundColor:"LightSteelBlue",
             backgroundRepeat:"no-repeat",
             backgroundPosition:"center",
             backgroundSizeSize:"contain" ,
             backgroundImage:`url(${mapObj.mapIcon})`
           }} >
map photo index 7
           </div>

</article>

<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>

<h1>title : {mapTitle}</h1>

<label forHtml="mapInputUser">write a nr from 1 to 136<br></br>
<input type="number" name="mapInputUser" id="mapInputUser" placeholder="your nr" onChange={changeMapInputValue}/>
</label><br></br>

<button onClick={handleMapBtn}>show obj with choosen id by user</button>

<ul>
<li>id is : {mapObjUser.mapIdUser}</li>
<li>name is : {mapObjUser.mapNameUser}</li>
<li>slug is : {mapObjUser.mapSlugUser}</li>
</ul>


<div style={{
             width:"300px",
             height:"200px",
             margin:"1em",
             border:`3px solid ${propColor}` ,
             backgroundColor:"LightGoldenRodYellow",
             backgroundRepeat:"no-repeat",
             backgroundPosition:"center",
             backgroundSizeSize:"contain" ,
             backgroundImage:`url(${mapObjUser.mapIconUser})`
           }} >
map photo index choosen by you from the input
           </div>

</article>

</section>

);

}

export default ApiMap;
