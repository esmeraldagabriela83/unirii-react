import React, {useRef , useState , useEffect} from 'react';
import Axios from "axios";

//axios allows to make a get request

//Axios.get("url")
//i make a request to a website and get the information from that url returns=fetch data
//the fetch function returns a promise

//https://publicapis.dev/category/public-apis/geocoding

//https://stefanbohacek.com/project/hellosalut-api/?ref=publicapis.dev

//https://api.techniknews.net/ipgeo/5.12.52.232

function ApiDinamic(props){

  const {propWidth , propColor , propText}=props;
  //---------------------------------------------------------

  const [myObj , setMyObj]=useState({
    myCode:"default code",
    myHello:"default hello"
  });


const handleDynamicBtn=(event) =>{

console.log("you clicked btn to show your dynamic string written in input");


Axios.get(`https://stefanbohacek.com/hellosalut/?mode=auto`)
  .then((response) =>{

console.log("dynamic response is : " , response);
//dynamic response is :  {data: {…}, status: 200, statusText: '', headers: AxiosHeaders, config: {…}, …}


console.log("dynamic response.data is : " , response.data);
//dynamic response.data is :  {code: 'ro', hello: 'Salut'}

const newMyObj={...myObj , myCode:response.data.code , myHello:response.data.hello};

setMyObj(newMyObj);

  })
  .catch(error =>{
    console.log("dynamic error" , error);
  })

}

//------------------------------------------------------------------------------

//https://publicapis.dev/category/public-apis/geocoding
//https://gis.ducks.org/datasets/du-university-chapters/api?ref=publicapis.dev
//https://services2.arcgis.com/5I7u4SJE1vUr79JC/arcgis/rest/services/UniversityChapters_Public/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json

const [myId , setMyId]=useState(0);

const changeNrId=(event) =>{

setMyId(event.target.value);

}

const [myObjInfo , setMyObjInfo]=useState({
  chapterID:"",
  city:"",
  mervRD:"",
  objectId:0,
  state:"",
  universityChapter:"",
  geometryX:"",
  geometryY:""
});


const handleShowInfoAPI=(event) =>{

console.log("you clicked the shoe info from API btn");

Axios.get("https://services2.arcgis.com/5I7u4SJE1vUr79JC/arcgis/rest/services/UniversityChapters_Public/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json")
.then((response) =>{

console.log("info response" , response);

//info response {data: {…}, status: 200, statusText: '', headers: AxiosHeaders, config: {…}, …}

console.log("info response.data" , response.data);
//info response.data {objectIdFieldName: 'OBJECTID', uniqueIdField: {…}, globalIdFieldName: '', geometryType: 'esriGeometryPoint', spatialReference: {…}, …}

console.log("info response.data.features" , response.data.features);

console.log("info response.data.features.length" , response.data.features.length);//98

console.log("info response.data.features[5]" , response.data.features[5]);
//info response.data.features[5] {attributes: {…}, geometry: {…}}

console.log("info response.data.features[5].attributes" , response.data.features[5].attributes);
//info response.data.features[5].attributes {OBJECTID: 7, University_Chapter: 'University of Alabama', City: 'Tuscaloosa', State: 'AL', ChapterID: 'AL0107', …}

console.log("info response.data.features[5].attributes.University_Chapter : " , response.data.features[5].attributes.University_Chapter);
//info response.data.features[5].attributes.University_Chapter :  University of Alabama

console.log("info response.data.features[5].attributes.City : " , response.data.features[5].attributes.City);
//info response.data.features[5].attributes.City :  Tuscaloosa

console.log("info response.data.features[5].attributes.State : " , response.data.features[5].attributes.State);
//info response.data.features[5].attributes.State :  AL

console.log("info response.data.features[5].attributes.ChapterID : " , response.data.features[5].attributes.ChapterID);
//info response.data.features[5].attributes.ChapterID :  AL0107

console.log("info response.data.features[5].attributes.OBJECTID : " , response.data.features[5].attributes.OBJECTID);
//info response.data.features[5].attributes.OBJECTID :  7

console.log("info response.data.features[5].attributes.MEVR_RD : " , response.data.features[5].attributes.MEVR_RD);
//info response.data.features[5].attributes.MEVR_RD :  Neely Raper

//----------------------------------------------------------------------

console.log("info response.data.features[5].geometry : " , response.data.features[5].geometry);
//info response.data.features[5].geometry :  {x: -87.53460919299994, y: 33.20653669600006}


console.log("info response.data.features[5].geometry.x : " , response.data.features[5].geometry.x);
//info response.data.features[5].geometry.x :  -87.53460919299994

console.log("info response.data.features[5].geometry.y : " , response.data.features[5].geometry.y);
//info response.data.features[5].geometry.y :  33.20653669600006

//---------------------

const newMyObjInfo={...myObjInfo ,
                                  chapterID:response.data.features[myId].attributes.ChapterID,
                                  city:response.data.features[myId].attributes.City,
                                  mervRD:response.data.features[myId].attributes.MEVR_RD,
                                  objectId:response.data.features[myId].attributes.OBJECTID,
                                  state:response.data.features[myId].attributes.State,
                                  universityChapter:response.data.features[myId].attributes.University_Chapter,
                                  geometryX:response.data.features[myId].geometry.x,
                                  geometryY:response.data.features[myId].geometry.y };

setMyObjInfo(newMyObjInfo);

})
.catch(error =>{
  console.log("obj info error" , error);
})


}



//------------------------------------------------------------------------------

return(

  <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

<h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>function component is {propText}</h1>

<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>

<button onClick={handleDynamicBtn}>click to show your dynamic text</button>

<p>code : {myObj.myCode}</p>
<p>hello : {myObj.myHello}</p>

</article>

<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>

<label forHtml="myIdUser">write a number between 1 and 98<br></br>
<input type="number" name="myIdUser" id="myIdUser" placeholder="write nr" onChange={changeNrId} />
</label><br></br>

<button onClick={handleShowInfoAPI}>show info</button>

<ul style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>

<li>chapterID is :  {myObjInfo.chapterID}</li>
<li>city is :  {myObjInfo.city}</li>
<li>mervRD is :  {myObjInfo.mervRD}</li>
<li>objectId is :  {myObjInfo.objectId}</li>
<li>state is :  {myObjInfo.state}</li>
<li>universityChapter is :  {myObjInfo.universityChapter}</li>
<li>geometryX is :  {myObjInfo.geometryX}</li>
<li>geometryY is :  {myObjInfo.geometryY}</li>

</ul>

</article>

</section>

);


}

export default ApiDinamic;
