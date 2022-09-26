import React, {useState,useEffect} from 'react';

function IfIfMySchool(props){
//destructurare props
const {propWidth , propColor , propText , propState}=props;

//------------------------------------------------------------------------------
//arr pt a fi folosit in ShortIf
const fruitsSchoolIf = ['mere', 'banane', 'capsuni' , 'zmeura' , 'portocale'];
console.log("!!! --- $$$ fruitsSchoolIf is : " , fruitsSchoolIf);
//!!! --- $$$ fruitsSchoolIf is :  (5) ['mere', 'banane', 'capsuni', 'zmeura', 'portocale']



return(
  <section>
<h1>{propText}</h1>
<h3>propState is : {propState}</h3>

{propState == "true" ? <p>true state string</p> : <p>false state string</p>}<br></br>

{fruitsSchoolIf.length > 0 ? <p>true string</p> : <p>false string</p>}<br></br>



  </section>
);
}

export default IfIfMySchool;
