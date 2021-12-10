import Productitem from "../productitem";
import {useDispatch, useSelector} from 'react-redux'
import {GetProductList} from '../../store/ProductReducer'

function Products() {
    return(
      <div className="products">
          {
              useSelector(GetProductList).map((item,key)=> <Productitem key={key} info={item} />)
          }
         
      </div>
    )
}

export default Products;