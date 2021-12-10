import { configureStore } from '@reduxjs/toolkit'

import ProductReducer  from './ProductReducer';
import CardReducer  from './CardReducer';

export default configureStore({
    reducer:{
      products: ProductReducer,
      card: CardReducer,
    }
  })