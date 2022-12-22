import React, { useState } from "react";
import './maincontent.css';
import Productsbar from "./Productsbar/productsbar";
import Sidebar from "./sidebar/sidebar";


const Maincontent = (props) => {
    const [favorite, setFavorite] = useState([]);

    const newFavorite = [...favorite];

    const addFavorite = (el) => {

        newFavorite.push({
            name: el.name,
            count: 1,
        });

        favorite.forEach(item => {
            if (Object.values(item).includes(el.name)) {
                item.count += 1;
                newFavorite.pop();
            }
        });

        newFavorite.forEach((item, index) => {
            item.id = index;
        });

        setFavorite(newFavorite);
        console.log(newFavorite);
    }

    
    function deleteFavorite(index) {
        newFavorite.splice(index, 1);
        newFavorite.forEach((item, index) => {
            item.id = index;
        });
        setFavorite(newFavorite);
        console.log(newFavorite);
    }

    function getFavoriteList() {
        let list = '';
        if (newFavorite.length === 0) {
            alert('Список покупок пуст!');
        }
        else {
            newFavorite.forEach(item => {
                list += (`${item.id + 1}. ${item.name}: ${item.count}шт \r`);
            });
            alert(list);
        }
    }

    return (
        <div className='maincontent'>
            <Sidebar onClickGet={getFavoriteList} onClickDel={deleteFavorite} favorite={newFavorite}/>
            <Productsbar onClick={addFavorite} filter={props.filter}/>
        </div>
    )
}

export default Maincontent;