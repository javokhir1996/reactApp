import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import {removeFromCard, orderCountChange} from '../../store/CardReducer'

function Orderitem({info, ind}){
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
        <td>
            <div className="meal_box">
                <img src={info.img}></img>
                <div >
                    <h6>{info.name}</h6>
                    <p>$ {info.price}</p>
                </div>
            </div>
        </td>
        <td><input type="number" className="in_qty" value={info.orderCount} onChange={(e)=> { changeOrderCount(e.target.value) }} /></td>
        <td>$ {info.price * info.orderCount}</td>
   </tr>
    <tr>
        <td colSpan="2">
            <input type="text" placeholder="Please, just a little bit spicy only." className="bg_gray_input"   />
        </td>
        <td  style={{textAlign: 'right'}}>
            <button className="btn_bd_red" onClick={ removeItem }> <img src="/assets/img/Button.png" alt="" /> </button>
        </td>
   </tr>
</Fragment>

   )
}
export default Orderitem;