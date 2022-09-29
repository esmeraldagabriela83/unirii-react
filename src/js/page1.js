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
  const {name,lastName,yearOfBirth,proffesion} = personObj;

  return `My name is ${name} ${lastName} .
I am ${(new Date()).getFullYear() - yearOfBirth} years old.
My proffesion is ${proffesion}.`
}

console.log(whoAreYou(person));
// My name is Vlad Popescu .
// I am 591 years old.
// My proffesion is Lord of Wallachia.

//------------------------------------------------------------------------------

const myCarsPage1UL=document.getElementById('myCarsPage1UL');
console.log("///--- myCarsPage1UL is " , myCarsPage1UL);

myCarsPage1UL.style.border="3px dotted pink";
myCarsPage1UL.style.padding="1em";
myCarsPage1UL.style.margin="1em";


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
function getMyCar(arr){
  for(let i=0 ; i<arr.length ; i++){
    console.log("arr is : " , arr);
    console.log("arr[i] is : " , arr[i]);
    //return `my car is ${arr[i]}`;
  return arr[i].length + 5;
  }
}
//apel functie si cu console.log() pt afisare
console.log(" get me the car is : " , getMyCar(myCarsPage1));










//
