import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
// reducer
import {GetCategoryList} from '../../store/ProductsReducer';
// components
import Orders from '../../components/Orders/index'
import Products from '../../components/Products/index'
import Jbutton from '../../components/Jbutton/index'

const Home = ()=>{

    return(
        <div className="home_page">
            <div className="home_page_content">
                <div className="header">
                    <div className="header_title">
                        <h1>Jaegar Resto</h1>
                        <h4>Tuesday, 2 Feb 2021</h4>
                    </div>
                    <div className="input_search_block">
                        <img src="/assets/img/search.svg" alt="" />
                        <input type="search" placeholder="Search for food, coffe, etc.." className="input_search" />
                    </div>
                </div>
                <ul className="cats_list">
                    {
                         useSelector(GetCategoryList).map((item, key)=> <li key={key} className={item.active ? 'active' : ''}>{item.name}</li> )
                    }
                </ul>
                <h6 className="choose_block" >
                    Choose Dishes
                    <select>
                        <option defaultValue value="Dine In">Dine In</option>
                        <option value="To Go">To Go</option>
                        <option value="Delivery">Delivery</option>
                    </select>
                </h6>
                <Products></Products>
            </div>
            <Orders />
        </div>
    ) 
}

export default Home;
