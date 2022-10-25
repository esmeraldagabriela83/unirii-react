import React, {useRef , useState , useEffect} from 'react';


//https://www.youtube.com/watch?v=JLu4aBNZ-Po&t=367s
//CRUD Operations Insert, Update and Delete in React Js || Map the Inserted Value in React js

//componenta controlata cu onChange si value pe input

const crudInputStyle={
  padding:"1em",
  margin:"1em",
  border:"3px dotted green",
  borderRadius:"0.5em"
};



//------------------------------------------------------------------------------

function CrudComics(props){

  const {propWidth , propColor , propText}=props;

  //----------------------------------------------------------------------------

  const crudBtnStyle={
    padding:"1em",
    margin:"1em",
    border:`3px solid ${propColor}`,
    borderRadius:"1em"
  }

  //----------------------------------------------------------------------------

const [itemCrud , setItemCrud]=useState("");
const [allItemsData , setAllItemsData]=useState([]);


const [priceCrud , setPriceCrud]=useState(0);
const [allPricesData , setAllPricesData]=useState([]);

const [showCrud , setShowCrud]=useState(false);
const [editIndexCRUD , setEditIndexCRUD]=useState("");

//---------------------TAKE THE VALUE FROM THE INPUT FOR NAME---------------------------------------------------------

const handleChangeNameCRUD=(event) =>{
  setItemCrud(event.target.value);
}

//---------------------take the value from the input for price----------------------------------------------------------------------------------------------------

const handleChangePriceCRUD=(event) =>{
  setPriceCrud(event.target.value);
}

    //-----------handle add---------------------------------------------------------------

const handleCrudAdd=(event) =>{

//------------------------------------------------------------------------------
console.log("CRUD --- itemCrud is : " , itemCrud);

if(itemCrud.length !== 0 && priceCrud !== 0){
  //adauga fiecare itemCrud (input value) in arr
  const newCopyallItemsData=[...allItemsData , itemCrud];

  setAllItemsData(newCopyallItemsData);
}

    //--------------------------------------------------------------------------
console.log("CRUD --- priceCrud is : " , priceCrud);

if(priceCrud !== 0 && itemCrud.length !== 0){
    //adauga fiecare itemPrice (input value) in arr
  const newCopyallPricesData=[...allPricesData , priceCrud] ;

  setAllPricesData(newCopyallPricesData);
}

}

//-------------------handle delite--------------------------------

const handleDeliteCrud=(index) =>{

console.log("CRUD --- index is : " , index);
allItemsData.splice(index , 1);
//update state
const newCopyallItemsData=[...allItemsData];

setAllItemsData(newCopyallItemsData);
//------------------------------------------------------------------------------
allPricesData.splice(index, 1);
//update state
const newCopyallPricesData=[...allPricesData] ;

setAllPricesData(newCopyallPricesData);

}


//------------------------handle edit------------------------------------------------------

const handleEditCrud=(index) =>{
  console.log("edit el with index: " , index);

//imi apiseaza in input elementul selectat
setItemCrud(allItemsData[index]);
//imi apiseaza in input elementul selectat
setPriceCrud(allPricesData[index]);

setShowCrud(true);
setEditIndexCRUD(index);

}

//----------------------------------handle update--------------------------------------------

const handleCrudUpdate=(event) =>{
//sterge elementul pe care il update/ reeditare , si imi adauga un alt el
allItemsData.splice(editIndexCRUD , 1 , itemCrud);
allPricesData.splice(editIndexCRUD , 1 , priceCrud);

//update state
const newCopyallItemsData=[...allItemsData];

setAllItemsData(newCopyallItemsData);
//------------------------------------------------------------------------------

//update state
const newCopyallPricesData=[...allPricesData] ;

setAllPricesData(newCopyallPricesData);

setShowCrud(false);

}

//------------------------------------------------------------------------------

let crudSumPrices= 0;
const handleCRUDsum=(event)=>{
  console.log("--- CRUD --- sum of items");


for(let i=0 ; i < allPricesData.length ; i++){
  crudSumPrices= crudSumPrices + parseFloat(allPricesData[i]);
}


  const sumcrud=document.getElementById('sumcrud');
  sumcrud.innerText=crudSumPrices;

}


    //--------------------------------------------------------------------------

    console.log("CRUD --- allItemsData is : " , allItemsData);
    console.log("CRUD --- allPricesData is : " , allPricesData);

  return(

    <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

<h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>function component is {propText}</h1>

<p>crud after comics tutorial // create , read , update , delite</p>

<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>

<label>Item
<input type="text" name="itemInput" id="itemInput" value={itemCrud} onChange={handleChangeNameCRUD} style={crudInputStyle}/>
</label>

<br></br>

<label>Price
<input type="number" name="priceInput" id="priceInput" value={priceCrud} onChange={handleChangePriceCRUD} style={crudInputStyle}/>
</label>

<br></br>

{
  !showCrud ?
  <>
  <button onClick={handleCrudAdd} style={crudBtnStyle}>add</button>
  <button onClick={handleCRUDsum} style={crudBtnStyle}>Sum of item prices</button>
  <h3>sum is : <em id="sumcrud"></em></h3>
  </>
   :
  <button onClick={handleCrudUpdate} style={crudBtnStyle}>update</button>
}

<table>
<tbody>
<tr>

<td>
{allItemsData.map((elItem , indexCRUD) =>{
  //map are intotdeauna return
  return <div key={indexCRUD} style={{border:"3px solid yellow" , padding:"1em" , margin:"1em"}}>
elItem is : {elItem}
<button className="edit" onClick={(event) =>handleEditCrud(indexCRUD)}>edit</button>
<button className="delite" onClick={(event) =>handleDeliteCrud(indexCRUD)}>delite</button>
  </div>
})}
</td>

<td>
{allPricesData.map((elPrice , indexCRUD) =>{
  //map are intotdeauna return
return <div key={indexCRUD} style={{border:"3px solid yellowgreen" , padding:"1em" , margin:"1em"}}>
elPrice is : {elPrice}
<button className="edit" onClick={(event) =>handleEditCrud(indexCRUD)}>edit</button>
<button className="delite" onClick={(event) =>handleDeliteCrud(indexCRUD)}>delite</button>
</div>
})}
</td>

</tr>
</tbody>
</table>


</article>

<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>
<p>itemCrud is : {itemCrud}</p>
<p>priceCrud is : {priceCrud}</p>
</article>

    </section>

  );

}

export default CrudComics;
