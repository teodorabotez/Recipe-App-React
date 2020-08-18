import React from 'react';
import './Recipe.css';

function Recipe(props){
  const item = props.item;
  return (
    <div >
          <h1>Recipe name:</h1>
          <h2>{item.text}</h2>
          <h1>Recipe steps:</h1>
          <h2>{item.area}</h2>
          <button className="backButton" type="button" onClick={() => {
          props.backToHome()}} >BACK</button>
    </div>
  );
 }
  

  export default Recipe;