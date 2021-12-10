import { createSlice } from '@reduxjs/toolkit';

export const CardSlice = createSlice(
    {
        name:"card",
        initialState:{
            cardList:[],
            totalPrice: 0,
        },
        reducers:{
            addToCard(state, {payload}){
                // let found = state.cardList.filter(item => item.id == payload.id)
                // if(found.length){
                //     alert('bor bunaqa product')
                // }else{
                    state.cardList = [...state.cardList, payload]
                // }
                // state.totalPrice = 0;
                // state.cardList.forEach((item)=>{
                //     state.totalPrice += item.orderCount * item.price
                // })
            },
             removeFromCard(state, {payload}){
                state.cardList = state.cardList.filter(item => item.id != payload.id)
                state.totalPrice = 0;
                state.cardList.forEach((item)=>{
                    state.totalPrice += item.orderCount * item.price
                })
            },
            orderCountChange(state, {payload}){
                console.log(payload);
                console.log(state.cardList);
                state.cardList[payload.ind].orderCount = payload.val  
                // console.log(state.cardList);

                state.totalPrice = 0;
                state.cardList.forEach((item)=>{
                    state.totalPrice += item.orderCount * item.price
                })
            },
        }
    }
)

export const {addToCard, orderCountChange,removeFromCard} = CardSlice.actions;

export const GetCardList = state => state.card.cardList;
export const GetTotalPrice = state => state.card.totalPrice;

export default CardSlice.reducer;