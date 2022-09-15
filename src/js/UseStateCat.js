import React, {useState} from "react";

console.log("UseStateCat");
//https://www.w3schools.com/react/react_usestate.asp

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
    color: "dark and gray",
    age:4 * 2
  });

  console.log("cat is : " , cat);
  console.log("cat este : " , typeof(cat));//cat este :  object
  console.log("cat.year is : " , cat.year);//cat.year is :  2014
  console.log("cat.year type is :" , typeof(cat.year));//cat.year type is : string
  console.log(parseFloat(cat.year) + 1);//2015

  const handleChangeCat=(event) =>{
    //destructurare object catalin
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

  const handleAge=(event) =>{
 //destructurare object catalin
 const copyCat2={...cat, age:cat.age + 1}
 setCat(copyCat2)
  }


  return(
    <>
<section style={{border:"3px solid gold" , padding:"1em" , margin:"1em"}}>
<h1 style={{width:widthx , border:`3px dotted ${propColor}` , margin:"1em"}}>my cat: {propText} function component</h1>
<button onClick={handleWidthx}>change width catalin</button>
<button onClick={(event) =>setWidthx("700px")}>change width school</button>

      <h1>My {cat.brand}</h1>
      <p>It is a {cat.color} , {cat.model} cat born in  {cat.year}.</p>

<button onClick={handleChangeCat}>change cat catalin</button>
<button onClick={updateCat}>change cat school</button>

<h3>{cat.age}</h3>
<button onClick={handleAge}>change cat age</button>

</section>
<div style={{width:widthx , border:`3px dotted ${propColor}` , margin:"1em" , padding:"1em"}}>{propText}</div>

    </>
  );
}

export default UseStateCat;



















//
