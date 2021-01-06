<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>
<script>
export default {
    name: "TabBarItem",
    props:{
        path: String,
        activeColor:{
            type: String,
            default: 'red'
        }
    },
    data(){
        return{
            // isActive: true
        }
    },
    computed:{
        isActive(){
            //判断热选择和当前URL是否一致而顶部图标应该是哪一个
            return this.$route.path.indexOf(this.path) !== -1
            console.log(111)
        },
        activeStyle(){
            //底部导航文字改变
            return this.isActive ? {color: this.activeColor} : {}
            console.log(222)
        }
    },
    methods:{
        itemClick(){
            this.$router.push(this.path)
        }
    }
}
</script>

<style scoped>
    .tab-bar-item{
        flex: 1;
        text-align: center;
        height: 49px;
        padding: 5px;
    }
    .tab-bar-item img{
        height: 24px;
        width: 24px;
    }
    .tab-bar-item :nth-child(2){
        font-size: 10px;
    }
    
</style>