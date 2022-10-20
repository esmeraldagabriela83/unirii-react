import React,{useState,useEffect} from 'react';


function ShopDiscordList(props){
  const {listProp , propWidthShopList , propColorShopList , propTextShopList , listTotalPrice}=props;

  console.log("--- @@@ ---listProp is : " , listProp);

  console.log(propWidthShopList , propColorShopList , propTextShopList , listTotalPrice);
  //----------------------------------------------------------------------------



  //----------------------------------------------------------------------------

  return(
    <section style={{color:propColorShopList , border:`3px solid ${propColorShopList}` , padding:"1em" , margin:"1em"}}>

<h1 style={{color:propColorShopList , margin:"1em" , padding:"1em" , border:"3px solid yellowgreen"}}>function component is : {propTextShopList}</h1>

<article style={{color:propColorShopList , margin:"1em" , padding:"1em" , border:"3px dotted yellowgreen"}}>

<h3>lista cumparaturi :</h3>


{listProp.length !== 0 ?

listProp.map((el , index) =>{
  return(
    <ul key={index}>el item product is : {el}</ul>
  );
})

   : <li>lista goala</li>}

<h3>listTotalPrice is {listTotalPrice}</h3>

</article>

    </section>
  );

}

export default ShopDiscordList;


//-------------
