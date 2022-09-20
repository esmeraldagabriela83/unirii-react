import React , {useState , useEffect} from "react" ;

const costicaObj={
  title: "Costica Prof",
  image: "././assets/images/albastru.png",
  description: "lorem ipsum description",
  age: 56,
  color:"Cyan"
};


function CosticaPerson(props){
console.log("*** props from CosticaPerson are " , props);

const {propWidth , propColor , propText}=props;
console.log("*** props are : " , propWidth , propColor , propText );

  return (
    <section>
<h1 style={{color:propColor}}>{propText}</h1>
<img src={costicaObj.image} alt="costica-img" style={{width:"50%" , height:"300px" , border:"3px solid red"}}/>
<h3>{costicaObj.title} is {costicaObj.age} years old .</h3>
<p>{costicaObj.description}</p>
    </section>
  );
}



export default CosticaPerson;
