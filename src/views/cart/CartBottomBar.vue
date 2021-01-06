<template>   
    <div class="bottom-bar">
        <div class="check-content">
            <check-button 
                :is-checked="isSelectAll" 
                class="check-button"
                @click.native="checkClick">
            </check-button>
            <span>全选</span>
        </div>
        <div class="price">合计{{totalPrice}}</div>
        <div class="calculate">计算({{checkLength}})</div>
    </div>
</template>

<script>
import CheckButton from "../../components/content/checkButton/CheckButton.vue"

export default {
    name: 'CartBottomBar',
    components: { 
        CheckButton 
    },
    computed: {
        totalPrice(){
            return '￥' + this.$store.state.cartList.filter(item => {
                return item.checked
            }).reduce((preValue, item)=>{
                return preValue+item.price*item.count
            },0).toFixed(2)
        },
        checkLength(){
            return this.$store.state.cartList.filter(item => item.checked).length
        },
        isSelectAll(){
            // 第一种方法用for遍历
            // for(let item of this.$store.state.cartList){
            //     if(!item.checked){
            //         return false
            //     }
            // }
            // return true
            //第二种办法：遍历不选择的长度是否为0
            // if(this.$store.state.cartList.length === 0) return false
            // return !(this.$store.state.cartList.filter(item => !item.checked).length)
            //第三种办法：用find寻找是否有不选中的，比第二种更高效
            if(this.$store.state.cartList.length === 0) return false
            return !this.$store.state.cartList.find(item => !item.checked)
        }
    },
    methods: {
        checkClick(){
            if(this.isSelectAll){
                this.$store.state.cartList.forEach(item => item.checked = false)
            }else{
                this.$store.state.cartList.forEach(item => item.checked = true)
            }
        }
    }
}
</script>

<style scoped>
    .bottom-bar{
        display: flex;
        height: 40px;
        background-color:#eee;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 49px;
    }
    .check-content{
        display: flex;
        align-items: center;
        margin-left: 10px;
        width: 60px;
    }
    .check-button{
        width: 20px;
        height: 20px;
        line-height: 20px;
        margin-right: 5px;
    }
    .price{
        margin-left: 20px;
        flex: 1;
        line-height: 40px;
    }
    .calculate{
        width: 80px;
        background-color: #33cc99;
        text-align: center;
        line-height: 40px;
    }
</style>