import React from "react";
import ProductList from "./cardinfo/card";
import './productsbar.css';


const Productsbar = (props) => {
    return (
        <div className='productsbar'>
            <div className='productsbar-title'>Выбор продуктов</div>
            <ProductList onClick={props.onClick} filter={props.filter}/>
        </div>
    )
}

export default Productsbar;