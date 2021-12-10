import { createSlice } from '@reduxjs/toolkit';

export const ProductSlice = createSlice(
    {
        name: 'product',
        initialState:{
            productList:[
                {
                    id: 1,
                    name: 'Spicy seasoned seafood noodles',
                    price: 2.29,
                    count: 20,
                    category: 'Hot Dishes',
                    img: '/assets/img/meal.png'
                },
                {
                    id: 2,
                    name: 'Spicy seasoned seafood noodles',
                    price: 2.29,
                    count: 20,
                    category: 'Hot Dishes',
                    img: '/assets/img/meal.png'
                },
            ],
            categorList:[
                {active: true, name: 'Hot Dishes',},
                {active: false, name: 'Cold Dishes'},
                {active: false, name: 'Soup'},
                {active: false, name: 'Grill'},
                {active: false, name: 'Appetizer'},
                {active: false, name: 'Dessert'},
            ]
        },
        reducer:{

        }
    }
)


export const GetProductList = state => state.products.productList
export const GetCategoryList = state => state.products.categorList

export default ProductSlice.reducer;