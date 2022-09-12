import React, {Component} from "react";


//

/////////////////////////////////////////////


function SpecialItem(props){
  console.log("props from SpecialItem function component are : ",props);
  const {itemTitle,itemImage,itemDescription , itemPrice} = props;
  const functionStyleObj = {
    backgroundColor:'skyblue',
    border:"3px solid gold",
    color:"#333",
    fontSize:"0.7rem"
  };

  return (
    <div style={functionStyleObj}>
      <h3>title of item: {itemTitle} </h3>
      <img src={itemImage} width="200" alt="item-computer"/>
      <p>description of item: {itemDescription} </p>
      <h3>price of item: {itemPrice} </h3>
    </div>
  )
}
///////////////////////////////////////////////
function AppFunction({itemsArr}){
  const listItems = itemsArr.map((element,index) => {
    return (<SpecialItem
              key={index}
              itemTitle={element.title}
              itemImage={element.image}
              itemDescription={element.description}
              itemPrice={element.price}
            />)
  });

  return (
      <>
        {listItems}
      </>
  )
}

export default AppFunction;
