import React from 'react';
import './ListItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';
import Recipe from './Recipe';


function ListItems(props){
    const items = props.items;
    const listItems = items.map(item =>
   {
       return <div className="list" key={item.key}>
     <p>
            
         <input  id={item.key}  value={item.text} onClick={() => {
               props.updateUI(item.key);
              console.log("LISt"+ item.key);
        }}
        />

        <span>
        <FontAwesomeIcon className="faicons2" onClick={() => {
          props.setUpdate(item.text,item.area,item.key)
        }} icon="edit" />
        <FontAwesomeIcon className="faicons" onClick={() => {
            props.deleteItem(item.key)
        }} icon="trash" />


        </span>
    
     </p>
     
    </div>})
    return <div>
        <FlipMove duration={300} easing="ease-in-out">
        {listItems}
        </FlipMove>
    
    </div>;
  }
function clickMe(someParameter){
      console.log("Pressing"+someParameter.text+someParameter.area);
      
}
  export default ListItems;