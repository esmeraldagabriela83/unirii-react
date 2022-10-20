import React,{useState,useEffect} from 'react';

import ShopDiscordList from "./ShopDiscordList";
import ShopDiscordItem from "./ShopDiscordItem";

function ShopDiscord(props){

  const {propWidth , propColor , propText}=props;

  console.log(propWidth , propColor , propText);

  //----------------------------------------------------------------------------

const [items , setItems]=useState([]);
const [totalMoney , setTotalMoney]=useState(0);

//---------------------------------------destructurare array , apel prin referinta pt array-ul items--------------------------------------

const addItem=(name, price) =>{
  const newItems=[...items, name];
  setItems(newItems);
  setTotalMoney(totalMoney + parseFloat(price));
}

//-----------------------------

const addExtraItem=(name , price) =>{
  const newCopyItems=[...items , "extra" + name];
  setItems(newCopyItems);
  setTotalMoney(totalMoney + parseFloat(price));
}

  //----------------------------------------------------------------------------

  return(
    <section style={{color:propColor , border:`3px dashed ${propColor}` , padding:"1em" , margin:"1em"}}>
<h1 style={{color:propColor , margin:"1em" , padding:"1em" , border:"3px solid green"}}>function component is : {propText}</h1>

<article style={{color:propColor , border:`3px solid ${propColor}` , padding:"1em" , margin:"1em"}}>

<ShopDiscordItem productPropShopItem="product one" doBuyPropShopItem={addItem} propWidtShopItem={"250px"} propColorShopItem={"olive"} propTextShopItem={"ShopItem"} productPropPrice="10"/>
<ShopDiscordItem productPropShopItem="product two" doBuyPropShopItem={addItem} propWidtShopItem={"250px"} propColorShopItem={"olive"} propTextShopItem={"ShopItem"} productPropPrice="20"/>
<ShopDiscordItem productPropShopItem="product three" doBuyPropShopItem={addItem} propWidtShopItem={"250px"} propColorShopItem={"olive"} propTextShopItem={"ShopItem"} productPropPrice="30"/>
<ShopDiscordItem productPropShopItem="product four" doBuyPropShopItem={addItem} propWidtShopItem={"250px"} propColorShopItem={"olive"} propTextShopItem={"ShopItem"} productPropPrice="40"/>
<ShopDiscordItem productPropShopItem="product five" doBuyPropShopItem={addItem} propWidtShopItem={"250px"} propColorShopItem={"olive"} propTextShopItem={"ShopItem"} productPropPrice="50"/>
<ShopDiscordItem productPropShopItem="product six" doBuyPropShopItem={addItem} propWidtShopItem={"250px"} propColorShopItem={"olive"} propTextShopItem={"ShopItem"} productPropPrice="60"/>

<ShopDiscordItem productPropShopItem="product one" doBuyPropShopItem={addExtraItem} propWidtShopItem={"250px"} propColorShopItem={"olive"} propTextShopItem={"ShopItem"} productPropPrice="100"/>
<ShopDiscordItem productPropShopItem="product two" doBuyPropShopItem={addExtraItem} propWidtShopItem={"250px"} propColorShopItem={"olive"} propTextShopItem={"ShopItem"} productPropPrice="200"/>
<ShopDiscordItem productPropShopItem="product three" doBuyPropShopItem={addExtraItem} propWidtShopItem={"250px"} propColorShopItem={"olive"} propTextShopItem={"ShopItem"} productPropPrice="300"/>

<ShopDiscordList listProp={items} propWidthShopList={"350px"} propColorShopList={"orange"} propTextShopList={"ShopDiscordList"} listTotalPrice={totalMoney}/>

</article>

    </section>
  );

}



export default ShopDiscord;
//
