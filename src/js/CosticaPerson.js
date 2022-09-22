import React , {useState , useEffect} from "react" ;
import costicaOBJlike from "./costicaOBJlike.js";

console.log("!!! ***   costicaOBJlike is : " , costicaOBJlike);
console.log("costicaOBJlike.title is : " , costicaOBJlike.title);


const costicaObj={
  title: "Costica Prof",
  image: "././assets/images/albastru.png",
  description: "lorem ipsum description",
  age: 56,
  color:"Cyan"
};



//Hooks can only be called inside of the body of a function component.

function CosticaPerson(props){
console.log("*** props from CosticaPerson are " , props);

const {propWidth , propColor , propText}=props;
console.log("*** props are : " , propWidth , propColor , propText );

//change with useState()
const [cataObj , setCataObj]=useState({
  title: "Cata Prof",
  image: "././assets/images/flower4.JPG",
  description: "lorem ipsum description",
  age: 76,
  color:"red"
});

const handleChangeCata=(event) =>{

const cataObjCopy={...cataObj ,   title: "prof catalin" , image: "././assets/images/forest3.JPG" , description: "description ipsum lorem" , age: 16 , color:"yellowgreen"} ;
setCataObj(cataObjCopy);

}

//change with useEffect()
const [andreiObj , setAndreiObj]=useState({
  title: "Andrei Coleg",
  image: "././assets/images/word-page3.png",
  description: "lorem ipsum description",
  age: 37,
  color:"olive"
});


useEffect(() =>{

console.log("did mount");

setTimeout(() =>{
setAndreiObj({
  title: "wordpress andrei",
  image: "././assets/images/yellowCV.JPg",
  description: "ANDREI lorem ipsum description",
  age: 73,
  color:"green"
})
} , 5000)

} , []);


  return (<>
    <section style={{border:`5px solid ${propColor}` , padding:"1em" , margin:"1em"}}>
<h1 style={{color:propColor}}>{propText}</h1>
<img src={costicaObj.image} alt="costica-img" style={{width:"50%" , height:"300px" , border:`5px solid ${propColor}`}}/>
<h3>{costicaObj.title} is {costicaObj.age} years old .</h3>
<p>{costicaObj.description}</p>
    </section>

        <section style={{border:`5px solid ${cataObj.color}` , padding:"1em" , margin:"1em"}}>
        <h1 style={{color:cataObj.color}}>{cataObj.title}</h1>
        <img src={cataObj.image} alt="costica-img" style={{width:"50%" , height:"300px" , border:`5px solid ${cataObj.color}`}}/>
        <h3>{cataObj.title} is {cataObj.age} years old .</h3>
        <p>{cataObj.description}</p>

<button onClick={handleChangeCata}>click to change</button>
        </section>

        <section style={{border:`5px solid ${propColor}` , padding:"1em" , margin:"1em"}}>
    <h1 style={{color:andreiObj.color}}>{andreiObj.title}</h1>
    <img src={andreiObj.image} alt="costica-img" style={{width:"50%" , height:"300px" , border:`5px solid ${andreiObj.color}`}}/>
    <h3>{andreiObj.title} is {andreiObj.age} years old .</h3>
    <p>{andreiObj.description}</p>
    <em>toate se vor schimba dupa 5 sec</em>
        </section>

        <section style={{border:`5px solid ${costicaOBJlike.color}` , padding:"1em" , margin:"1em"}}>
        <h1 style={{color:costicaOBJlike.color}}>title is : {costicaOBJlike.title}</h1>
        <img src={costicaOBJlike.image} alt="mihai-img" style={{width:"50%" , height:"300px" , border:`5px solid ${costicaOBJlike.color}`}}/>
        <h3>{costicaOBJlike.title} is {costicaOBJlike.age} years old .</h3>
        <p>{costicaOBJlike.description}</p>
        </section>

  </>);
}



export default CosticaPerson;
