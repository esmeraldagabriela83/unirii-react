import React, {useRef , useState , useEffect} from 'react';

const ReadOnlyRow = ({contact , propColor , handleEditClick}) =>{
  return(
<>

    <tr style={{padding:"1em" , margin:"1em" , border:`3px solid ${propColor}` , color:propColor}}>
    <td>{contact.fullName}</td>
    <td>{contact.address}</td>
    <td>{contact.phoneNumber}</td>
    <td>{contact.email}</td>
    <td>{contact.price}</td>

    <td><button type="button" onClick={(event) => handleEditClick(event , contact)}>edit</button></td>
    </tr>
</>
  );
}

export default ReadOnlyRow;


//
