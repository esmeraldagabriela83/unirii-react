import React from "react";
import ReactDOM from "react-dom";

function FuncDestructComponent(props){
const {propColor , propBackground , propText} =props;
console.log("...props are : " , props);
console.log("...propColor , propBackground , propText are : " , propColor , propBackground , propText);

return <h1 style={{color:propColor , backgroundColor:propBackground , textAlign:"right"}}>{propText}</h1>
}

export default FuncDestructComponent;
