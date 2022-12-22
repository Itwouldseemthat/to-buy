import React from "react";
import './searchbar.css';



const Search = (props) => {


    return (
        <div className='searchbar-wrapper'>
            <input 
                className='search'
                type='text'
                placeholder='Поиск'
                value={props.filter}
                onChange={props.onChange}
            />
        </div>
    )
}



export default Search;
