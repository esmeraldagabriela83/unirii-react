console.log("hello from bootstrapThird js");


const btnPrimary=document.querySelector('.btn-primary');
console.log("btnPrimary is : " , btnPrimary);

//---------------------------------

btnPrimary.addEventListener("click" , function(event){
event.preventDefault();

this.previousElementSibling.style.backgroundColor="skyblue";
console.log("you clicked the primary button");

})

//---------------------------------

btnPrimary.addEventListener("mouseover" , function(event){
event.preventDefault();

this.parentElement.style.backgroundColor="pink";
console.log("you hovered the primary button");

})

//---------------------------------------------------------

const btnSecondary=document.querySelector(".btn-secondary");

btnSecondary.addEventListener("mouseover" , btnCallBackFunc);

function btnCallBackFunc(event){

console.log("you hovered over the secondary btn");

}

//------------------------------------

btnSecondary.addEventListener("click" , function(event){

console.log("you clicked on the secondary btn");
this.parentElement.style.border="5px solid yellow";

//-------------------------

console.log("this.parentElement.children is an array: " , this.parentElement.children);
//this.parentElement.children is an array:  HTMLCollection(7) [h3, button.btn.btn-secondary, h3, p, p, p, p]

console.log("this.parentElement.children.length is : " , this.parentElement.children.length);
//this.parentElement.children.length is :  7

for(let i=0 ; i<this.parentElement.children.length ; i++){

console.log("el is : " , this.parentElement.children[i]);

this.parentElement.children[i].style.border="3px solid magenta";
this.parentElement.children[i].style.padding="1em";
this.parentElement.children[i].style.margin="1em";

//---------------------------

this.previousElementSibling.style.color="orange";
this.nextElementSibling.style.color="Aquamarine";

this.parentElement.children[6].style.color="Chocolate";
this.parentElement.children[6].style.fontWeight="bold";
this.parentElement.children[6].style.letterSpacing="0.5em";
}

})


//--------------------------------

const nextElTitle=document.getElementById('nextElTitle');


nextElTitle.addEventListener("mouseover" , titleCallBackFunction);

function titleCallBackFunction(event){

console.log("you hovered over this is : " , this);
console.log("this.id  // this.innerText are : " , this.id , "//" ,  this.innerText);

this.style.backgroundColor="lime";
this.style.color="orangered";

}

nextElTitle.addEventListener("click" , titleClickCallBackFunc);

function titleClickCallBackFunc(event){

console.log("you clicked this : " , this);
nextElTitle.innerText="new string";

}


//--------------//-------container with inputs--------------------------------------------------

const allInputs=document.querySelectorAll('input');

console.log("allInputs is : " , allInputs);
console.log("allInputs.length is : " , allInputs.length);

//-----------------

const sumId=document.getElementById('sumId');



//--------//get inputs values---------

const btnSuccess=document.querySelector(".btn-success");
btnSuccess.addEventListener("click" , sumInputsValuesCallBackFunc);

function sumInputsValuesCallBackFunc(event){

console.log("you clicked this.className : " , this.className);

let mySum=0;

for(let i=0 ; i<allInputs.length ; i++){

  console.log("---tagName of each input is : " , allInputs[i].tagName);
  console.log("---id of each input is : " , allInputs[i].id);
  console.log("---className of each input is : " , allInputs[i].className);

  console.log("---value of each input is : " , allInputs[i].value);

mySum = mySum + parseFloat(allInputs[i].value)

}

sumId.innerText=mySum;

}

//---------------show input`s attributes-----------------------

const attributesOfEachInput=document.getElementById('attributesOfEachInput');

const btnInfo=document.querySelector('.btn-info');

btnInfo.addEventListener("click" , function(event){

console.log("you clicked this.className : " , this.className);

//-------------
letattributeArrIds=[];

for(let i=0 ; i<allInputs.length ; i++){
letattributeArrIds.push(allInputs[i].id);
}

//-----------
letattributeArrValue=[];

for(let i=0 ; i<allInputs.length ; i++){
letattributeArrValue.push(allInputs[i].value);
}

//---------

attributesOfEachInput.innerText="attributes are : " + letattributeArrIds.join(" , ") + " and their values are :" + letattributeArrValue.join(" , ");

});


//-----------------------------show images-----------------------------------------------------

//style images
const allImg=document.querySelectorAll('img');
console.log("allImg is an array: " , allImg);


for(let i=0 ; i<allImg.length ; i++){

allImg[i].style.height="300px";
allImg[i].style.width="250px";
allImg[i].style.margin="1em";


}

//--------------
const allliImg=document.querySelectorAll('.liImg');
console.log("allliImg is : " , allliImg);
console.log("allliImg.length is : " , allliImg.length);

//-------------

const btnLight=document.querySelector('.btn-light');

btnLight.addEventListener("click" , function(event){

for(let i=0 ; i<allImg.length ; i++){

console.log(`src of img with id  ${allImg[i].id} is : ` , allImg[i].src);
console.log(`alt of img with id  ${allImg[i].id} is : ` , allImg[i].alt);

}

//----------------

for(let i=0 ; i<allliImg.length ; i++){

allliImg[i].innerText=allImg[i].alt;

}


})

















//
