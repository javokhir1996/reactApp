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
                    img: '/assets/images/ovqat1.png'
                },
                {
                    id: 2,
                    name: 'Salted Pasta with mushroom sauce',
                    price: 2.69,
                    count: 20,
                    category: 'Hot Dishes',
                    img: '/assets/images/ovqat2.png'
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
        reducers:{

        }
    }
)


export const GetProductList = state => state.product.productList;
export const GetCategoryList = state => state.product.categorList;


export default ProductSlice.reducer;