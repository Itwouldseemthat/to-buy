import React from "react";
import FavoriteList from "./favoriteList";
import './sidebar.css';


const Sidebar = (props) => {
    return (
        <div className='sidebar-wrapper'>
            <div className='sidebar-title'>Закладки</div>
            <FavoriteList onClickDel={props.onClickDel} favorite={props.favorite} />
            <button className='getFavoriteList' type="submit" onClick={() => {props.onClickGet()}}>Получить список</button>
        </div>
    )
}

export default Sidebar;