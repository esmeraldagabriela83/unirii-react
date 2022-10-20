import React,{useState,useEffect} from 'react';

function ShopDiscordItem(props){

const {productPropShopItem , doBuyPropShopItem , propWidtShopItem , propColorShopItem , propTextShopItem , productPropPrice}=props;

//-------------------------------------------------------------------------------------------------------------------------------------

const handleClickShopUser=(event) =>{
  if(typeof doBuyPropShopItem === "function" ){
    console.log("--- @@@ --- user bought : " , productPropShopItem);
    doBuyPropShopItem(productPropShopItem ,productPropPrice );
  }
}

//-------------------------------------------------------------------------------------------------------------------------------------

  return(
    <section style={{color:propColorShopItem , border:`3px solid ${propColorShopItem}` , padding:"1em" , margin:"1em"}}>

    <h1 style={{color:propColorShopItem , margin:"1em" , padding:"1em" , border:"3px solid magenta"}}>function component is : {propTextShopItem}</h1>


    <article style={{color:propColorShopItem , margin:"1em" , padding:"1em" , border:"3px dotted tomato"}}>

<h3>item product is : <em>{productPropShopItem}</em></h3>
<h3>item product price is : <em>{productPropPrice}</em></h3>

<button onClick={handleClickShopUser}>buy item product</button>

    </article>

    </section>
  );

}

export default ShopDiscordItem;



//
