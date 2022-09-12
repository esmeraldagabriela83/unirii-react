import React, {Component} from "react";

//general discord 9 05 2022
console.log("hello from ShopItem.js");

function ShopItemHeader(props){
  const {title,image} = props;
  console.log("props from inside ShopItemHeader function component are : " , props);
  return (
    <header style={{border:"solid gold 1px"}}>
      <h1>{title}</h1>
      <img src={image} width="200"/>
    </header>
  )
}

function ShopItemDescription(props){
    console.log("props from inside ShopItemDescriptionShopItemDescription function component are : " , props);
  return (
    <article style={{border:"solid cornflowerblue 1px"}}>
      <p>{props.description}</p>
    </article>
  )
}

function ShopItemPricing({price}) {
  console.log("price is : " , price);
  return (
    <footer style={{border:"solid magenta 1px"}}>
      Price: {price} USD
      <button>Buy!</button>
    </footer>
  )
}

function ShopItemWrapper(props){
  console.log("props from inside ShopItemWrapper function component are : " , props);
  console.log("props.children is : " , props.children);
  return (
    <section style={{border:"solid #cf0000 1px"}}>
      {props.children}
    </section>
  )
}

function ShopItem(props){
  console.log("props from inside ShopItem function component are : " , props);
  const {title,image,description,price} = props.shopItem;
  return (
    <ShopItemWrapper>
      <ShopItemHeader title={title} image={image} />
      <ShopItemDescription description={description}/>
      <ShopItemPricing price={price}/>
    </ShopItemWrapper>
  )
}



export default ShopItem;
