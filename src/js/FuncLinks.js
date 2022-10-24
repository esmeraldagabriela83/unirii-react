import React from "react";


console.log("hello from FuncLinks.js");

function FuncLinks(){
  return(
    <>
    <h1>function component is : FuncLinks</h1>
<ul id="ulLinks">
<li>my links to other pages :</li>
<a href="./pages/page1.html"><li>hello from page1 written in FuncLinks.js</li></a>
<a href="./pages/page-img.html">click on image<li><img src="../../assets/images/copy.jpg" alt="flower-img" style={{width:"100%", height:"auto" , border:"3px dotted crimson"}}/></li></a>
</ul>
    </>
  )
}

export default FuncLinks;























//
