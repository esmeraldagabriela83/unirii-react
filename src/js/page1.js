console.log("salut from page1.js");

const paragraph1Page1=document.getElementById('paragraph1Page1');
paragraph1Page1.style.border="3px solid orange";
paragraph1Page1.style.padding="1em";
paragraph1Page1.style.margin="1em";
paragraph1Page1.style.fontWeight="bold";
paragraph1Page1.style.color="red";
paragraph1Page1.style.letterSpacing="0.5em";

//
let mytext = "How are you doing today?";
let splitedText=mytext.split(" ");
console.log("mytext is : " , mytext);
console.log("splitedText is : ", splitedText);

//---------------------------------
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById('fruits').innerText=fruits.join(" / ");

//shift() removes the first item of an array
const shiftedFruits=fruits.shift();
console.log("shiftedFruits is : " , shiftedFruits);
document.getElementById('fruitsShifted').innerText=fruits.join(" / ");

//------------------------------------------------------------------------------
let num = 5.56789;
let n = num.toFixed();
console.log("num , n is : " , num , n);

let num1 = 5.2123;
let n1 = num1.toFixed();
console.log("num1 , n1 is : " , num1 , n1);


let num2 = 8.456789;
let n2 = num2.toFixed(2);
console.log("num2 , n2 is : " , num2 , n2);

//
let text1 = "Visit Microsoft!";
let result1 = text1.replace("Microsoft", "micu pisicu");
console.log("text1 is : " , text1);
console.log("result1 is : " , result1);

//Remove (pop) the last element:
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
console.log("fruits2 before pop method is : " , fruits2);
fruits2.pop();
console.log("fruits2 after pop method is : " , fruits2);

//
let xtext = "ABCDEFG";
console.log("xtext is : " , xtext);
const xmyArr = Array.from(xtext);
console.log("xmyArr is : " , xmyArr);
//------------------------------------------------------------------------------
//sort ordine crescatoare
//reverse ordine descrescatoare

const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
console.log("fruits3 before sort method is : " , fruits3);
fruits3.sort();
console.log("fruits3 after sort method is : " , fruits3);


fruits3.reverse();
console.log("fruits3 after reverse method is : " , fruits3);
//
const points = [40, 100, 1, 5, 25, 10];
console.log("points before sort is : " , points);
points.sort(function(a, b){return a-b});
console.log("points after sort is : " , points);

//gr1 19 04 2022
const person = {
  name: "Vlad",
  lastName: "Popescu",
  yearOfBirth: 1431,
  proffesion: "Lord of Wallachia"
};


function whoAreYou(personObj) {
  //destructurare object person
  const {name,lastName,yearOfBirth,proffesion} = personObj;

  return `My name is ${name} ${lastName} .
I am ${(new Date()).getFullYear() - yearOfBirth} years old.
My proffesion is ${proffesion}.`
}

console.log(whoAreYou(person));
// My name is Vlad Popescu .
// I am 591 years old.
// My proffesion is Lord of Wallachia.


const personObjVlad=document.getElementById('personObjVlad');
personObjVlad.style.border="3px dotted brown";
personObjVlad.style.padding="1em";
personObjVlad.style.margin="1em";
personObjVlad.innerText=whoAreYou(person);

//------------------------------------------------------------------------------

const myPeopleArr=[
  {
    name: "Andreea",
    lastName: "Iordache",
    yearOfBirth: 1431,
    proffesion: "catLover"
  },
  {
    name: "Ion",
    lastName: "Agache",
    yearOfBirth: 1567,
    proffesion: "inginer"
  },
  {
    name: "Alina",
    lastName: "Teodorescu",
    yearOfBirth: 2000,
    proffesion: "asistent"
  }
];

console.log("--- myPeopleArr is : " , myPeopleArr);

for(let i=0 ; i<myPeopleArr.length ; i++){
  console.log(whoAreYou(myPeopleArr[i]));
}

// My name is Andreea Iordache .
// I am 591 years old.
// My proffesion is catLover.
// page1.js:133 My name is Ion Agache .
// I am 455 years old.
// My proffesion is inginer.
// page1.js:133 My name is Alina Teodorescu .
// I am 22 years old.
// My proffesion is asistent.

const alleachObjPerson=document.getElementsByClassName('eachObjPerson');
console.log("---!!!--- alleachObjPerson is : " , alleachObjPerson);
///---!!!--- alleachObjPerson is :  HTMLCollection(3) [li.eachObjPerson, li.eachObjPerson, li.eachObjPerson]

for(let i=0 ; i<alleachObjPerson.length ; i++){
  alleachObjPerson[i].style.border="3px dotted cornflowerblue";
  alleachObjPerson[i].style.padding="1em";
  alleachObjPerson[i].style.margin="1em";
  alleachObjPerson[i].innerText=whoAreYou(myPeopleArr[i]);
}

//------------------------------------------------------------------------------

const myCarsPage1UL=document.getElementById('myCarsPage1UL');
console.log("///--- myCarsPage1UL is " , myCarsPage1UL);

myCarsPage1UL.style.border="3px dotted pink";
myCarsPage1UL.style.padding="1em";
myCarsPage1UL.style.margin="1em";

//------------------------------------------------------------------------------



//------------------------------------------------------------------------------29 09 2022

const myCarsPage1=['Ford', 'BMW', 'Audi' , 'rabla' , 'dacia' , 'myCAR'];
console.log("---/// myCarsPage1 arr is : " , myCarsPage1);
// ---/// myCarsPage1 arr is :  (6) ['Ford', 'BMW', 'Audi', 'rabla', 'dacia', 'myCAR']

const myCarPageAll=document.getElementsByClassName('myCarPage');
console.log("myCarPageAll arr  is " , myCarPageAll);
//myCarPageAll arr  is  HTMLCollection(6) [li.myCarPage, li.myCarPage, li.myCarPage, li.myCarPage, li.myCarPage, li.myCarPage]

for(let i=0 ; i<myCarPageAll.length ; i++){
  myCarPageAll[i].style.border="3px solid red";
  myCarPageAll[i].style.padding="1em";
  myCarPageAll[i].style.margin="1em";
  myCarPageAll[i].innerText=myCarsPage1[i];
}

//------------------------------------------------------------------------------
const myCarsPage2=['Ford', 'BMW', 'Audi' , 'rabla' , 'dacia' , 'myCAR' , 'myCarSecond'];

const myCars2HTML=document.getElementById('myCars2HTML');
myCars2HTML.style.padding="1em";
myCars2HTML.style.margin="1em";
myCars2HTML.style.border="3px dotted limegreen";
myCars2HTML.innerText=myCarsPage2.join(" / ");

//------------------------------------------------------------------------------

function getMyNr(mynr){
  for(let i=0 ; i<mynr ; i++){
    console.log("my nr is each i: " , i);
  }
  return mynr + 3;
}
//apel functie
getMyNr(5);
console.log("when mynr is 10 : " , getMyNr(10));

const mynrHTMLparagraph=document.getElementById('mynrHTMLparagraph');
mynrHTMLparagraph.style.padding="1em";
mynrHTMLparagraph.style.margin="1em";
mynrHTMLparagraph.style.border="3px dotted orange";
mynrHTMLparagraph.innerText=getMyNr(7);

const mynrHTMLparagraphSecond=document.getElementById('mynrHTMLparagraphSecond');
mynrHTMLparagraphSecond.style.padding="1em";
mynrHTMLparagraphSecond.style.margin="1em";
mynrHTMLparagraphSecond.style.border="3px dotted orangered";
mynrHTMLparagraphSecond.innerText=getMyNr(2) + getMyNr(3);

//------------------------------------------------------------------------------
// — 19.04.2022 discord general pt a construi functii cu tad-uri

//aduna elementele numar dintr-un array
const mySimpleArr=[1, 2, 3, 4, 55];
let mySum = 0;
console.log("mySum before is : " , mySum);

for(let i=0 ;i<mySimpleArr.length ; i++){
  mySum = mySum + mySimpleArr[i];
}

console.log("mySum after is : " , mySum);

const mySumParagraph=document.getElementById('mySumParagraph');
mySumParagraph.style.padding="1em";
mySumParagraph.style.margin="1em";
mySumParagraph.style.border="3px solid Aquamarine";
mySumParagraph.innerText=mySum;
mySumParagraph.style.fontWeight="bold";
mySumParagraph.style.textAlign="center";

///------------------------------------------------------------------------------------add values from 2 inputs

const inputNr1=document.getElementById('inputNr1');
console.log("--- !!! inputNr1.value is : " , inputNr1.value);
inputNr1.style.padding="1em";
inputNr1.style.margin="1em";

const inputNr2=document.getElementById('inputNr2');
console.log("--- !!! inputNr2.value is : " , inputNr2.value);
inputNr2.style.padding="1em";
inputNr2.style.margin="1em";

const btnSumInputs=document.getElementById('btnSumInputs');
btnSumInputs.style.padding="1em";
btnSumInputs.style.margin="1em";
btnSumInputs.style.color="red";
btnSumInputs.style.fontWeight="bold";

const paragraphSumInputs=document.getElementById('paragraphSumInputs');
paragraphSumInputs.style.padding="1em";
paragraphSumInputs.style.margin="1em";
paragraphSumInputs.style.border="3px solid tomato";
paragraphSumInputs.style.textAlign="center";

btnSumInputs.addEventListener("click" , function(event){
  event.preventDefault();
  paragraphSumInputs.innerText=parseFloat(inputNr1.value) + parseFloat(inputNr2.value);
  this.style.color="blue";
  paragraphSumInputs.style.backgroundColor="yellow";
})


///------------------------------------------------------------------------------------add values from some inputs


const allSectionSomeInputs=document.querySelectorAll("#sectionSomeInputs .eachInput");

console.log("--- !!! allSectionSomeInputs is an array : " , allSectionSomeInputs);
console.log("allSectionSomeInputs.length is : " , allSectionSomeInputs.length);

const btnSumSomeInputs=document.getElementById('btnSumSomeInputs');
btnSumSomeInputs.style.color="magenta";

const paragraphSumSomeInputs=document.getElementById('paragraphSumSomeInputs');
paragraphSumSomeInputs.style.padding="1em";
paragraphSumSomeInputs.style.margin="1em";
paragraphSumSomeInputs.style.border="3px solid yellow";
paragraphSumSomeInputs.style.textAlign="center";


let sumSomeInp=0;

for(let i=0 ; i<allSectionSomeInputs.length ; i++){
  allSectionSomeInputs[i].style.padding="1em";
  allSectionSomeInputs[i].style.margin="1em";
  allSectionSomeInputs[i].style.border="3px solid cornflowerblue";
}

btnSumSomeInputs.addEventListener("click" , function(event){
  event.preventDefault();

  this.style.color="brown";

for(let i=0 ; i<allSectionSomeInputs.length ; i++){
  sumSomeInp = sumSomeInp + parseFloat(allSectionSomeInputs[i].value);
}

paragraphSumSomeInputs.innerText=sumSomeInp;

})

//------------------------------------------------------------------------------
























//
