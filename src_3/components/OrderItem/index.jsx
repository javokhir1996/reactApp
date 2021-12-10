import React, {useState, Fragment} from 'react';
import { useDispatch } from 'react-redux';
import {removeFromCard, orderCountChange} from '../../store/CardReducer'
const OrderItem = ({info, ind})=>{
     const dispatch = useDispatch()
     function removeItem(){
        if(window.confirm('rostan ochirmoqchimisan ? ')){
            dispatch(removeFromCard(info))
        }
     }
     function changeOrderCount(val){
        dispatch(orderCountChange({ind, val}))
     }
    return(
        <Fragment>
            <tr>
                <td style={{paddingTop: '27px'}}>
                    <div className="order_item_info">
                        <img src={info.img}></img>
                        <div className="info">
                            <h6>{info.name}</h6>
                            <p>$ {info.price}</p>
                        </div>
                    </div> 
                </td>
                <td style={{width: '48px', paddingTop: '27px'}} className="product_count">
                    <input type="number" className="bg_gray_input" value={info.orderCount} onChange={(e)=> { changeOrderCount(e.target.value) }} />
                </td>
                <td style={{paddingTop: '27px'}} className="price">
                    $ {info.price * info.orderCount}
                </td>
            </tr>
            <tr>
                <td colSpan="2">
                    <input type="text" placeholder="Please, just a little bit spicy only." className="bg_gray_input"   />
                </td>
                <td  style={{textAlign: 'right'}}>
                    <button className="btn_bd_red" onClick={ removeItem }> <img src="/assets/img/trash.svg" alt="" /> </button>
                </td>
            </tr>
        </Fragment>
    ) 
}

export default OrderItem;

