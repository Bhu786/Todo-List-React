// import React from 'react'
// import 'font-awesome/css/font-awesome.min.css';
// function Todolist(props) {
//   return (
  
//     // <FontAwesomeIcon icon="fa-solid fa-trash-can" />

//     <li className="list-item">
//         {props.item}
//         <span className='icons'>
//         <i className="fa-solid fa-trash-can icon-delete " 
//         onClick={e=>{
//             props.deleteItem(props.index)
//         }}>

//         </i>
//         </span>
//     </li>
//   )
// }

// export default Todolist;

import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

function Todolist(props) {
  return (
    <li className="list-item">
      {props.item}
      <span className="icons">
        <span 
          className="delete-text" 
          onClick={() => props.deleteItem(props.index)} 
          aria-label="Delete item"
          style={{ cursor: 'pointer', color: 'red', marginLeft: '10px' }}
        >
          Delete
        </span>
      </span>
    </li>
  );
}

export default Todolist;
