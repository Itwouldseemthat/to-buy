import React from "react";

const FavoriteList = (props) => {
    return (
        <div className='favorite-list'>
            {
                props.favorite.map((item, index) => (
                    <div className='favorite' key={index}>
                        <div className='favorite-name'>{item.name}</div>
                        <div className="wrapper">
                            <div className="favorite-count">{item.count}</div>
                            <button type='submit' className='delete-favorite' onClick={() => {props.onClickDel(item.id)}}>x</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}


export default FavoriteList;