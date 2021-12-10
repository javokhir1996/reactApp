import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import ProductItem from '../ProductItem';
import {GetProductList} from '../../store/ProductsReducer'


const Products = ()=>{


    return(
        <div className="page_block">
            <div className="products_block">
                {
                    useSelector(GetProductList).map((item, key) => <ProductItem key={key} info={item}></ProductItem>)
                }
            </div>
        </div>

    ) 
}

export default Products;

