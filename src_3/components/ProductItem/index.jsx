import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux'
import {addToCard, GetCardList} from '../../store/CardReducer';


const ProductItem = ({info})=>{
    const dispatch = useDispatch();

    return(
        <div className="product_item" onClick={()=>{ dispatch(addToCard({...info, orderCount: 1})) }}>
            <img src={info.img} alt="" />
            <h5>{info.name}</h5>
            <p>$ {info.price}</p>
            <h6>{info.count} Bowls available</h6>
        </div>
    ) 
}

export default ProductItem;

