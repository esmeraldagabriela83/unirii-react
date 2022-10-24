console.log("---hello from page2.js");

//https://www.w3schools.com/jsref/jsref_splice.asp

//splice array method
const fruitsSplice = ["Banana", "Orange", "Apple", "Mango"];
console.log("fruitsSplice arr before is : " , fruitsSplice);
console.log("fruitsSplice.length is : " , fruitsSplice.length);

// At position 2, add 2 elements:

fruitsSplice.splice(2 , 0 , "lemonSplice" , "kiwiSplice");

console.log("fruitsSplice arr after is : " , fruitsSplice);
console.log("fruitsSplice.length is : " , fruitsSplice.length);

const demoSplice=document.getElementById('demoSplice');
demoSplice.innerText=fruitsSplice.join(" , ");
demoSplice.style.border="3px solid indigo";
demoSplice.style.margin="1em";
demoSplice.style.padding="1em";

//------------------------------------------------------------------------------

//At position 2, remove 2 items:

const fruits2Splice = ["Banana2", "Orange2", "Apple2", "Mango2", "Kiwi2"];

console.log("fruits2Splice arr before spliceis : " , fruits2Splice);
console.log("fruits2Splice.length is : " , fruits2Splice.length);

//--------------

const demoSplice2=document.getElementById('demoSplice2');
demoSplice2.innerText=fruits2Splice.join(" , ");
demoSplice2.style.border="3px solid yellow";
demoSplice2.style.margin="1em";
demoSplice2.style.padding="1em";

//---------------

const spliceBtnFruits=document.getElementById('spliceBtnFruits');
spliceBtnFruits.style.border="3px solid pink";
spliceBtnFruits.style.margin="1em";
spliceBtnFruits.style.padding="1em";
spliceBtnFruits.style.backgroundColor="yellowgreen";

spliceBtnFruits.addEventListener("click" , function(event){
  event.preventDefault();
  this.style.backgroundColor="deepskyblue";
  demoSplice2.style.border="3px solid tomato";

//At position 2, remove 2 items:
fruits2Splice.splice(2, 2);

console.log("fruits2Splice arr before spliceis : " , fruits2Splice);
console.log("fruits2Splice.length is : " , fruits2Splice.length);

demoSplice2.innerText=fruits2Splice.join(" , ");

})

//------------------------------------------------------------------------------

//At position 2, add new items, and remove 1 item:
//At position 2, add 2 elements : ("Lemon", "Kiwi") , remove 1 ("Apple3")

const fruits3 = ["Banana3", "Orange3", "Apple3", "Mango3"];
console.log("fruits3 before is : " , fruits3);
console.log("fruits3.length is : " , fruits3.length);

const demoSplice3=document.getElementById('demoSplice3');
demoSplice3.innerText=fruits3.join(" , ");
demoSplice3.style.border="3px solid blue";
demoSplice3.style.margin="1em";
demoSplice3.style.padding="1em";

const spliceBtnFruitsAddRemove=document.getElementById('spliceBtnFruitsAddRemove');
spliceBtnFruitsAddRemove.style.border="3px solid cornflowerblue";
spliceBtnFruitsAddRemove.style.margin="1em";
spliceBtnFruitsAddRemove.style.padding="1em";
spliceBtnFruitsAddRemove.style.backgroundColor="olive";
spliceBtnFruitsAddRemove.addEventListener("click" , function(event){
  event.preventDefault();
  this.style.backgroundColor="deepskyblue";
  fruits3.splice(2, 1, "Lemon", "Kiwi");

  console.log("fruits3 after splice is : " , fruits3);
  console.log("fruits3.length is : " , fruits3.length);

  demoSplice3.innerText=fruits3.join(" , ");
})


///////////////////////////////////////////////////////////////////////////////////












//
