import React, {useRef , useState , useEffect} from 'react';

//https://www.youtube.com/watch?v=JLu4aBNZ-Po&t=367s
//CRUD Operations Insert, Update and Delete in React Js || Map the Inserted Value in React js

//componenta controlata cu onChange si value pe input


const crudInputStyleoBJ={
  padding:"1em",
  margin:"1em",
  border:"3px dotted MediumSlateBlue",
  borderRadius:"0.5em"
};


function CrudComicsWithObject(props){

    const {propWidth , propColor , propText}=props;

    //-----------------------------------------------------------------------


      const crudBtnStyleObjCrud={
        padding:"1em",
        margin:"1em",
        border:`3px solid ${propColor}`,
        borderRadius:"1em"
      }


    //-----------------------------------------------------------------------

const [objCrud , setObjCrud]=useState(
  {
    name:"",
    price:0
  }
);

const [allObjNames , setAllObjNames]=useState([]);
const [allObjPrices , setAllObjPrices]=useState([]);

const [showObjCrud , setShowObjCrud]=useState(false);
const [editIndexObj , setIndexObj]=useState("");

//------------------------------------------------------------------------------

const handleChangeObjCrudName=(event) =>{
  setObjCrud({...objCrud , name:event.target.value});
}

const handleChangeObjCrudPrice=(event) =>{
    setObjCrud({...objCrud , price:event.target.value});
}


//----------------------------handle add--------------------------------------------------

const handleAddCrudProduct=(event) =>{
  console.log("-@-add-@- crud" , objCrud.name , objCrud.price);

//destructurare arr , ia valoarea din input si o adauga in array-ul corespunzator

if(objCrud.name.length !== 0 && setObjCrud.price !== 0){
  const newCopyallObjNames=[...allObjNames , objCrud.name ];
    setAllObjNames(newCopyallObjNames);
}
  //---------------------------------------
if(setObjCrud.price !== 0 && objCrud.name.length !== 0){
  const newCopyallObjPrices=[...allObjPrices , objCrud.price ];
    setAllObjPrices(newCopyallObjPrices);
  }
}

//---------------------------------handle delite----------------------------------------------------

const handleObjDeliteCrud=(indexDelite) =>{
  console.log(`you clicked to delite ${indexDelite} el of the arr`);

//-----------------

//delite only one el with the choosen index
allObjNames.splice(indexDelite, 1);
//update state of arr
const newCopyallObjNames=[...allObjNames];
  setAllObjNames(newCopyallObjNames);

//-----------------
//delite only one el with the choosen index
allObjPrices.splice(indexDelite , 1);
  //update state of array
  const newCopyallObjPrices=[...allObjPrices];
    setAllObjPrices(newCopyallObjPrices);
}

//------------------------------------handle edit-------------------------------------------------------------

const handleObjEditCrud=(indexEdit) =>{
console.log(`you clicked to edit ${indexEdit} el of the arr`);

//------------------------------------------------

//afiseaza in input el selectat de btn edit
setObjCrud({...objCrud , name:allObjNames[indexEdit] , price:allObjPrices[indexEdit]} );

//la click pe edit trebuie sa apara update btn in locul lui add btn
setShowObjCrud(true);
//daca vreau sa editez atunci sa apara update btn in loc de add btn
setIndexObj(indexEdit);
}

//---------------------------------handle update-----------------------------------------------

const handleUpdateCrudProduct=(event) =>{

//sterge doar un el , cel selectat si adauga un el nou
allObjNames.splice(editIndexObj , 1 , objCrud.name);
allObjPrices.splice(editIndexObj , 1 , objCrud.price);

//update state pt array-ul modificat cu SpliceFuncComponent
const newCopyallObjNames=[...allObjNames];
  setAllObjNames(newCopyallObjNames);

const newCopyallObjPrices=[...allObjPrices];
  setAllObjPrices(newCopyallObjPrices);

//dupa ce am editat , vreau sa apara din nou add btn
setShowObjCrud(false);
}


//--------------------------------SUM OF OBJ PRICES--------------------------------------------------
let sumObjPrices=0;

const handlesUMoBJ=(event) =>{
  console.log("---@---sum of obj prices");

for(let i=0 ; i<allObjPrices.length ; i++){
  sumObjPrices = sumObjPrices + parseFloat(allObjPrices[i]);
}

const sumObjCrud=document.getElementById('sumObjCrud');
sumObjCrud.innerText=sumObjPrices;

}

//---------------------------------------------------------------------------------



console.log("---@---allObjNames arr is : " , allObjNames);
console.log("allObjNames.length is : " , allObjNames.length);

console.log("---@---allObjPrices arr is : " , allObjPrices);
console.log("allObjPrices.length is : " , allObjPrices.length);
    //-----------------------------------------------------------------------

return(
  <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

<h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>function component is {propText}</h1>

<p>crud after comics tutorial with obj // create , read , update , delite</p>


<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>

<label htmlFor="name">Name:
<input type="text" name="nameInput" id="nameInput" value={objCrud.name} style={crudInputStyleoBJ} onChange={handleChangeObjCrudName} />
</label>

<label htmlFor="price">Price:
<input type="number" name="numberInput" id="numberInput"  value={objCrud.price}  style={crudInputStyleoBJ} onChange={handleChangeObjCrudPrice} />
</label>

<br></br>

{!showObjCrud ?
  <>
  <button onClick={handleAddCrudProduct} style={crudBtnStyleObjCrud}>add product</button>
  <button onClick={handlesUMoBJ} style={crudBtnStyleObjCrud}>SUM OF OBJ PRICES</button>
  <p>sumObjPrices is : <em id="sumObjCrud"></em></p>
  </>
              :
<button onClick={handleUpdateCrudProduct} style={crudBtnStyleObjCrud}>UPDATE product</button>}

<table>
         <thead>
           <tr>
             <th style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>Name</th>
             <th style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>Price</th>
           </tr>
         </thead>

         <tbody>
<tr>
<th style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>
{
  allObjNames.map((elName , indexCrudName)=>{
    //map are intotdeauna return
    return(
      <div key={indexCrudName} style={{border:"3px solid cornflowerblue", margin:"1em 0"}}>
      elName is : {elName}
      <button className="edit" style={crudBtnStyleObjCrud} onClick={(event) =>handleObjEditCrud(indexCrudName)}>edit</button>
      <button className="delite" style={crudBtnStyleObjCrud} onClick={(event) =>handleObjDeliteCrud(indexCrudName)}>delite</button>
      </div>

    );
  })
}
</th>

<th style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>
{
  allObjPrices.map((elPrice , indexCrudPrice) =>{
    //map are intotdeauna return
    return(
      <div key={indexCrudPrice} style={{border:"3px solid cyan" , margin:"1em 0"}}>
      elPrice is : {elPrice}
      <button className="edit" style={crudBtnStyleObjCrud} onClick={(event) =>handleObjEditCrud(indexCrudPrice)}>edit</button>
      <button className="delite" style={crudBtnStyleObjCrud} onClick={(event) =>handleObjDeliteCrud(indexCrudPrice)}>delite</button>
      </div>
    );
  })
}
</th>
</tr>
         </tbody>
 </table>





</article>

<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>
<p>objCrud.name is : <em>{objCrud.name}</em></p>
<p>objCrud.price is : <em>{objCrud.price}</em></p>
</article>

</section>
);

}


export default CrudComicsWithObject;
















//
