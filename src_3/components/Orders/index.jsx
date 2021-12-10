import React, {useEffect, useState} from 'react';
import OrderItem from '../OrderItem';
import { useSelector } from 'react-redux';
import {GetCardList, GetTotalPrice} from '../../store/CardReducer'

const Orders = ()=>{

    let [deliveryTypes, setDeliveryTypes] = useState(
        [
            {value: 'DineIn', name: 'delivery_type', text: 'Dine In'},
            {value: 'ToGo', name: 'delivery_type', text: 'To Go'},
            {value: 'Delivery', name: 'delivery_type', text: 'Delivery'},
        ]
    )

    return(
        <div className="orders_block">
            <h5 className="order_number">Orders #34562</h5>
            <div className="delivery_type">
                {
                    deliveryTypes.map((item, key)=>{
                        return(
                            <div className="delivery_type_item" key={key} > 
                                <input id={item.value}  type="radio" value={item.value}  name={item.name} /> 
                                <label htmlFor={item.value}>
                                    {item.text} 
                                </label>
                            </div>
                        )
                    })
                }
            </div>
            <table className="orders_list">
                <thead>
                    <tr>
                        <th>
                            Item
                        </th>
                        <th>
                            Qty
                        </th>
                        <th  style={{textAlign: 'right'}}>
                            Price
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        useSelector(GetCardList).map((item, key) => <OrderItem ind={key} info={item} key={key} />)
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
                        <h6> $ {useSelector(GetTotalPrice)}</h6>
                    </div>
                </div>
                <button className="btn_bg_red">Continue to Payment</button>
            </div>
        </div>
    ) 
}

export default Orders;

