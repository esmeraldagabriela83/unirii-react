import React, {useState} from "react";

console.log("UseStateCat");

function UseStateCat(props){
const {propWidth , propColor , propText}=props;
console.log("CAT propWidth , propColor , propText is " , propWidth , propColor , propText);
//
const [widthx, setWidthx]=useState(propWidth);
console.log("widthx is : " , widthx);
const handleWidthx=(event)=>{
setWidthx("1000px");
console.log("---widthx from inside handleWidth is : " , widthx);
}
//
const [cat, setCat] = useState({
    brand: "micuPisicu",
    model: "common",
    year: "2014",
    color: "dark and gray"
  });

  console.log("cat is : " , cat);
  console.log("cat este : " , typeof(cat));//cat este :  object

  const handleChangeCat=(event) =>{
    //destructurare object
    const copyCat={...cat, brand:"firutu" , model:"rusian cat" , year:"2013" , color:"gray"};
    setCat(copyCat);
  }

  //school destructurare object si copy obj
  const updateCat=(event) =>{
    //setCat foloseste o arrow function
    setCat(previousStateCat =>{
      return {...previousStateCat , brand:"soficu" , model:"street cat" , year:"2011" , color:"gray with stripes"};
    })
  }


  return(
    <>

<h1 style={{width:widthx , border:`3px dotted ${propColor}` , margin:"1em"}}>my cat: {propText} function component</h1>
<button onClick={handleWidthx}>change width catalin</button>
<button onClick={(event) =>setWidthx("700px")}>change width school</button>

      <h1>My {cat.brand}</h1>
      <p>It is a {cat.color} , {cat.model} cat born in  {cat.year}.</p>

<button onClick={handleChangeCat}>change cat catalin</button>
<button onClick={updateCat}>change cat school</button>

    </>
  );
}

export default UseStateCat;



















//
