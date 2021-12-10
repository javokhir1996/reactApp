import { configureStore } from '@reduxjs/toolkit'

// reducer
import ProductsReducer  from './ProductsReducer';
import CardReducer  from './CardReducer';

export default configureStore({
  reducer:{
    products: ProductsReducer,
    card: CardReducer,
  }
})