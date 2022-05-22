import React from 'react';

export default function PersonRow ({person, onEditClick, onDeleteClick}) {
   const {firstName, lastName, age} = person;

   return(
       <tr>
           <td></td>
           <td>{firstName}</td>
           <td>{lastName}</td>
           <td>{age}</td>
           <td> 
                <button onClick={onEditClick} className='btn btn-warning btn-small'>Edit</button>
                <button onClick={onDeleteClick} className='btn btn-danger btn-small'>Delete</button>
           </td>
       </tr>
   )
}