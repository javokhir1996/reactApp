import {useDispatch} from 'react-redux'
import {addToCard, GetCardList} from '../../store/CardReducer';

function Productitem({info}){
    const dispatch = useDispatch();
    return(
        <div className='products_box' onClick={()=>{dispatch(addToCard({...info, orderCount: 1})) }}>
              <img src={info.img}></img>
              <h6>{info.name}</h6>
              <p>${info.price}</p>
              <span>{info.count}Bowls available</span>
        </div>
    )
}
export default Productitem;