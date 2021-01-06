import Vue from 'vue'
// import { use } from 'vue/types/umd'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        cartList: []
    },
    mutations: {
        // addCart(state, payload){           
        //     let oldProduct = state.cartList.find(item => item.iid === payload.iid)            
        //     if(oldProduct){
        //         oldProduct.count += 1
        //     }else{
        //         payload.count = 1
        //         state.cartList.push(payload)
        //     }           
        // }
        addCounter(state, payload){
            payload.count++
        },
        addToCart(state, payload){
            payload.checked = true
            state.cartList.push(payload)
        }
    },
    actions: {
        //判断购物车里是有已有某一个商品，如果有就count加一，没有就添加进去
        addCart(context, payload){
            
            //payload新添加商品
            // let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
            // //判断oldProduct
            // if(oldProduct){
            //     // oldProduct.count += 1
            //     context.commit('addCounter', oldProduct)
            // }else{
            //     payload.count = 1
            //     // context.state.cartList.push(payload)
            //     context.commit('addToCart', payload)
            // }      
            
            return new Promise((resolve, reject) =>{            
                //payload新添加商品
                let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
                //判断oldProduct
                if(oldProduct){
                    // oldProduct.count += 1
                    context.commit('addCounter', oldProduct);
                    resolve('当前商品数量+1')
                }else{
                    payload.count = 1
                    // context.state.cartList.push(payload)
                    context.commit('addToCart', payload);
                    resolve('成功加入购物车')
                }                  
            }) 
        }
    },
    getters: {
        //加入购物车商品长度
        cartLength(state){
            return state.cartList.length
        },
        cartList(state){
            return state.cartList
        }
    }
})

export default store