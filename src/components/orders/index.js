import { useState } from "react";
import Orderitem from "../orderitem";
import { useSelector } from 'react-redux';
import {GetCardList, GetTotalPrice} from '../../store/CardReducer'

function Orders(){

    let[delivery_type, setDelivery_type]= useState([
        {value: 'Dine In', name:'check', text:"Dine In"},
        {value: 'To Go', name:'check', text:"To Go"},
        {value: 'Delivery', name:'check', text:"Delivery"}
    ])

    return(

        <div className="order">
            <p>Orders #34562</p>
            <div className="delivery">
                {delivery_type.map((item)=>{
                    return(
                        <div className="delivery_box">
                            <input value={item.value} id={item.value} type="radio" name={item.name}/>
                            <label htmlFor={item.value}>
                                {item.text}
                            </label>
                        </div>
                    )
                })}  
            </div>
            <table className="table_order">
                <thead>
                    <tr>
                        <th style={{textAlign: 'left'}}>item</th>
                        <th>qty</th>
                        <th style={{textAlign: 'right'}}>price</th>
                    </tr>
                </thead>
                <tbody>     
                    {
                        useSelector(GetCardList).map((item,key)=> <Orderitem info={item} key={key} ind={key} />)
                    }
                   
                </tbody>
            </table>
            <div className="orders_block_footer">
                <div className="total_block">
                    <div className="item">
                        <p>Discount</p>
                        <h6>$0</h6>
                    </div>
                    <div className="item">
                        <p>Sub total</p>
                        <h6> ${useSelector(GetTotalPrice)}</h6>
                    </div>
                </div>
                <button className="btn_bg_red">Continue to Payment</button>
            </div>
        </div>
    )
}
export default Orders;