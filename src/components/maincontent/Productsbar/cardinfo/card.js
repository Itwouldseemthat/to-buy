import React from "react";
import './card.css';
import dataCard from './datacard.js';


const ProductList = (props) => {

  let filteredData = dataCard.filter(item => {
    return Object.keys(item).some(key => 
        item[key].toString().toLowerCase().includes(props.filter.toString().toLowerCase()))
  });


  return (
    <div className="cards-wrapper">
      {
        filteredData.map(card => (
          <div className="product-card" key={card.id}>
            <img className="product-img" src={card.img} />
            <div className="product-name">{card.name}</div>
            <button className='addToFavorite' type='submit' onClick={() =>{props.onClick(card)}}>Добавить</button>
          </div>
        ))
      }
    </div>
  )
}




export default ProductList;