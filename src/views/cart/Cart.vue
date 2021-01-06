<template>
    <div class="cart">
        <!-- 导航 -->
        <nav-bar class="nav-bar">
            <div slot="center">购物车({{cartLength}})</div>
        </nav-bar>
        <!-- 购物车列表 -->
        <cart-list></cart-list>
        <!-- 购物车底部 -->
        <cart-bottom-bar class="bottom"></cart-bottom-bar>
    </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
import CartList from './CartList.vue'
import {mapGetters} from 'vuex'//mapGetters辅助函数仅仅是将store中的getter映射到局部计算属性
import CartBottomBar from './CartBottomBar.vue'
export default {
    name: 'Cart',
    components: { 
        NavBar,
        CartList,
        CartBottomBar 
    },
    computed: {
        // cartLength(){
        //     return this.$store.getters.cartLength
        // }
        //调用vuex的getters里的方法
        ...mapGetters(['cartLength', 'cartList'])
    }
}
</script>

<style scoped>
    .nav-bar{
        background-color: #33cc99;
    }
    .bottom{
        position: relative;
        bottom: 40px;
    }
</style>