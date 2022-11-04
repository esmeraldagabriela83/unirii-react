import React, {useRef , useState , useEffect} from 'react';
import Axios from "axios";

//axios allows to make a get request

//Axios.get("url")
//i make a request to a website and get the information from that url returns=fetch data
//the fetch function returns a promise

//https://random-data-api.com/documentation

//https://random-data-api.com/api/v2/banks

//https://random-data-api.com/api/v2/credit_cards

function APIbank(props){

  const {propWidth , propColor , propText}=props;

  //-------------------banks-------------------------------------------------------

  const [bankPerson , setBankPerson]=useState({});

const handleBankInfoAPIrequestBtn=(event) =>{

console.log("you clicked bank info btn");

Axios.get("https://random-data-api.com/api/v2/banks")
.then((response) =>{
  console.log("bank response" , response);

//bank response {data: {…}, status: 200, statusText: '', headers: AxiosHeaders, config: {…}, …}

    console.log("bank response.data" , response.data);

//bank response.data {id: 4036, uid: '3890eb51-79b9-47ba-94b0-2ca61f2d7b28', account_number: '9850703918', iban: 'GB75TOYH44244282964069', bank_name: 'ALLIED BANK PHILIPPINES (UK) PLC', …}

setBankPerson(response.data);

})

}

//------------------------------axios credit card------------------------------------------------

const [creditCard , setCreditCard]=useState({});

const handleShowCreditCardBtn=(event) =>{

console.log("you clicked credit card info btn");


Axios.get("https://random-data-api.com/api/v2/credit_cards")
.then((response) =>{

console.log("credit card response is : " , response);

console.log("credit card response is : " , response.data);

setCreditCard(response.data);

})

}


//------------------------------------------------------------------------------------------

return(
  <section style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}`}}>

<h1 style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>function component is {propText}</h1>

<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>

<button onClick={handleBankInfoAPIrequestBtn}>show bank info</button>

<ul>
<li>id : {bankPerson.id}</li>
<li>account_number : {bankPerson.account_number}</li>
<li>iban : {bankPerson.iban}</li>
<li>bank_name : {bankPerson.bank_name}</li>
</ul>

</article>

<article style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>

<button onClick={handleShowCreditCardBtn}>show credit card info</button>

<ul>
<li>id : {creditCard.id}</li>
<li>credit_card_number : {creditCard.credit_card_number}</li>
<li>credit_card_expiry_date : {creditCard.credit_card_expiry_date}</li>
<li>credit_card_type : {creditCard.credit_card_type}</li>
</ul>

</article>

</section>
);


}



export default APIbank;
