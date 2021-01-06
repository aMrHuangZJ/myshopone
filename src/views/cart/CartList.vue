<template>
    <div class="cart-list">        
        <cart-list-item v-for="(item, index) in cartList" :product="item" :key="index"></cart-list-item>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'//mapGetters辅助函数仅仅是将store中的getter映射到局部计算属性
import CartListItem from './CartListItem.vue'
export default {
    name: 'CartList',
    components: { 
        CartListItem 
    },
    data(){
        return{
            //cartlist: []
        }
    },
    computed: {
        // 第一种办法获取store的数据
        // add(){
        //     this.cartlist = $store.getters.cartlist
        // }
        //第二种办法获取store的数据
        //调用vuex的getters里的方法
        ...mapGetters(['cartList'])
        
        
        
    }
}
</script>

<style scoped>

</style>