import React from "react";
import ReactDOM from "react-dom";

import MyApp1 from "./MyApp1.js";
import FuncTest2 from "./FuncTest2.js";

import FuncLinks from "./FuncLinks.js";

import MyPropExerciseFunc from "./MyPropExerciseFunc.js";
import ShowTextFunction from "./ShowTextFunction.js";
import ShowTextFunctionDestructuring from "./ShowTextFunctionDestructuring.js";
import FuncDestructComponent from "./FuncDestructComponent.js";
import CountThings from "./CountThings.js";
import ToDoList from "./ToDoList.js";

import ClassComponent from "./ClassComponent.js";
import SimpleClassComponent from "./SimpleClassComponent.js";
import AnotherColorClass from "./AnotherColorClass.js";
import ExampleComponent from "./ExampleComponent.js";

import HelloF from "./Hello.js";
import HelloC from "./HelloC.js";

import InteractiveDiv from "./InteractiveDiv.js";
import FormComponentaControlata from "./FormComponentaControlata.js";
import ButtonCounter from "./ButtonCounter.js";
import UseStateFuncComponent from "./UseStateFuncComponent.js";
import UseEffectMainFunction from "./UseEffectMainFunction";
import UseStateSchool from "./UseStateSchool.js";
import UseStateSchoolCar from "./UseStateSchoolCar.js";

import ShopItem from "./ShopItem.js";
import AppFunction from "./AppFunction.js";
import UseStateSchoolCarSecond from "./UseStateSchoolCarSecond.js";
import UseStateCat from "./UseStateCat.js";
import UseEffectSchool from "./UseEffectSchool.js";
import UseEffectAfterCata from "./UseEffectAfterCata.js";
import UseEffectAfterCataInnovation from "./UseEffectAfterCataInnovation.js";
import UseEffectUserInput from "./UseEffectUserInput.js";

import itemsComputers from "./itemsComputers.js"
console.log("itemsComputers is : " , itemsComputers);
console.log("itemsComputers[1] is : " , itemsComputers[1]);
//
console.log("hello from app.js");

console.log("5*3 is : " , 5*3);

//------------------------------------------------------------------------------

const myimgIndexHtml=document.getElementById('imgIndexHtml');
myimgIndexHtml.style.padding="1.5em";
myimgIndexHtml.style.backgroundColor="pink";

const myinputHtml=document.getElementById('inputHtml');
myinputHtml.style.border="5px solid red";
myinputHtml.style.padding="1em";
myinputHtml.style.margin="1em";
myinputHtml.style.outline="none";

const myParagraphHtml=document.getElementById('paragraphHtml');
myParagraphHtml.style.border="1px solid green";
myParagraphHtml.style.padding="1em";
myParagraphHtml.style.margin="1em";
myParagraphHtml.style.borderRadius="5px";

const myButtonHtml=document.getElementById('buttonHtml');
myButtonHtml.style.border="1px solid green";
myButtonHtml.style.padding="1em";
myButtonHtml.style.margin="1em";
myButtonHtml.style.borderRadius="15px";

myButtonHtml.addEventListener("click" , showUserTextFunc);

function showUserTextFunc(event){
  event.preventDefault();
  console.log("this is : " , this);
  this.style.backgroundColor="pink";
  this.style.fontWeight="bold";
  this.style.fontSize="1.5em";

  this.parentElement.style.backgroundColor="LightSkyBlue";
  this.nextElementSibling.style.backgroundColor="yellow";

  myParagraphHtml.style.border="3px solid orange";
  myParagraphHtml.innerText=myinputHtml.value;

  myimgIndexHtml.style.backgroundColor="yellowgreen";
}

//



//------------------------------------------------------------------------------
const item = {
  title: "MacBook Pro",
  // image: "https://bit.ly/2EEtduD",
  image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  description: "Power and mobility - the MacBook Pro clearly raises the bar here. Now you can implement your ideas even faster. You'll be helped by powerful processors and memory chips, advanced graphics, instant mass storage and other great solutions.",
  price: 9999
}

//







function App(){
  return(
    <>
<h1>my title 1 from app.js</h1>
<h2>my title 2 from app.js</h2>
<MyApp1/>
<MyPropExerciseFunc  myProp1="string ex 1" myProp2="string ex 2" myProp3="String EX 3"/>

<ShowTextFunction differentColor="cornflowerblue" differentText="ex1 homework string" names="Ana , Maria , Alin merg la mare." />
<ShowTextFunctionDestructuring  differentColor1="yellow" differentText1="ex1 homework string destructuring" names1="Ana , Maria , Alin merg la munte."/>
<FuncDestructComponent propColor="yellow" propBackground="deepskyblue" propText="second simplePropText"/>

<ClassComponent  colorClass="SlateBlue" backgroundColorClass="Wheat" textClass="Maria are pere ."/>
<SimpleClassComponent propColor="red" propBackground="deepskyblue" propText="simplePropText"/>
<ExampleComponent/>

<CountThings/>
<ToDoList/>

<section style={{border:"3px solid gold" , padding:"1em" , margin:"1em"}}>
<HelloF name={"Popescu"} surname={"Alex"}/>
<HelloC name={"Ionescu"} surname={" Ioana"}/>
</section>

<UseStateSchool propColor={"cornflowerblue"} propText={"school text function"}/>
<UseStateSchoolCar propWidth={"700px"} propColor={"indigo"} propText={"school 2 useState"}/>
<UseStateSchoolCarSecond propWidth={"900px"} propColor={"magenta"} propText={"school 3 useState"}/>
<UseStateCat propWidth={"500px"} propColor={"yellow"} propText={"UseStateCat"}/>
<UseEffectSchool propWidth={"400px"} propColor={"orange"} propText={"UseEffectSchoolText"}/>
<UseEffectAfterCata propWidth={"300px"} propColor={"yellowgreen"} propText={"UseEffectAfterCata"}/>
<UseEffectAfterCataInnovation propWidth={"200px"} propColor={"green"} propText={"UseEffectAfterCataInnovation"}/>
<UseEffectUserInput propWidth={"300px"} propColor={"forestgreen"} propText={"UseEffectUserInput"}/>
    </>
  )
}
ReactDOM.render(<App/>,document.getElementById("app"));

//ReactDOM.render(<h1>my h1 title</h1>,document.getElementById("app"));

ReactDOM.render(<h1 style={{color:"red", backgroundColor:"yellow", padding:"1em"}}>my h1 test1 title</h1>,document.getElementById("test1"));

ReactDOM.render(<FuncTest2/>,
document.getElementById("test2"));


ReactDOM.render(<FuncLinks/>,
document.getElementById("linksMain"));

ReactDOM.render(<AnotherColorClass/>,
document.getElementById("anotherColor"));

ReactDOM.render(<InteractiveDiv/>,
document.getElementById("interActiveMain"));

ReactDOM.render(<FormComponentaControlata/>,
document.getElementById("formComponentaControlata"));

ReactDOM.render(<ButtonCounter/>,
document.getElementById("buttonCounter"));

ReactDOM.render(<UseStateFuncComponent string="Elena Discord Grupa 1 pe 13 05 2022"/>,
document.getElementById("useStateMain"));

ReactDOM.render(<UseEffectMainFunction/>,
document.getElementById("useEffectMain"));

ReactDOM.render(<ShopItem shopItem={item}/>,
document.getElementById("obj"));

ReactDOM.render(<AppFunction itemsArr={itemsComputers}/>,
document.getElementById("manyobj"));
//
//https://www.youtube.com/playlist?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3
