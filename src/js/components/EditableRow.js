import React, {useRef , useState , useEffect} from 'react';

const EditableRow = ({editFormData , handleEditFormChange , handleCancelClick}) =>{
  return(
    <>
    <tr>
         <td>
           <input
             type="text"
             required="required"
             placeholder="Enter a name..."
             name="fullName"
             value={editFormData.fullName}
onChange={handleEditFormChange}
           ></input>
         </td>
         <td>
           <input
             type="text"
             required="required"
             placeholder="Enter an address..."
             name="address"
             value={editFormData.address}
onChange={handleEditFormChange}
           ></input>
         </td>
         <td>
           <input
             type="text"
             required="required"
             placeholder="Enter a phone number..."
             name="phoneNumber"
             value={editFormData.phoneNumber}
onChange={handleEditFormChange}
           ></input>
         </td>
         <td>
           <input
             type="email"
             required="required"
             placeholder="Enter an email..."
             name="email"
             value={editFormData.email}
onChange={handleEditFormChange}
           ></input>
         </td>
         <td>
           <input
             type="number"
             required="required"
             placeholder="Enter an price..."
             name="price"
             value={editFormData.price}
onChange={handleEditFormChange}
           ></input>
         </td>

         <td>
<button type="submit">save</button>
<button type="submit" onClick={handleCancelClick}>cancel</button>
         </td>

       </tr>
    </>
  );
}


export default EditableRow;












//
