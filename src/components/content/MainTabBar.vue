<template>
    <!-- <tab-bar>底部导航组件 -->
    <tab-bar>
      <!-- <tab-bar-item>底部导航组件的小组件 -->       
      <tab-bar-item path="/home" activeColor="#33cc99" class="tab-bar-item">
          <img slot="item-icon" src="../../assets/img/Tabbar/tab2.png">
          <img slot="item-icon-active" src="../../assets/img/Tabbar/tab6.png">
          <div slot="item-text">首页</div>
      </tab-bar-item>
      <!-- <tab-bar-item path="/category" activeColor="#33cc99">
          <img slot="item-icon" src="../../assets/img/Tabbar/tab1.png">
          <img slot="item-icon-active" src="../../assets/img/Tabbar/tab5.png">
          <div slot="item-text">分类</div>
      </tab-bar-item> -->
      <tab-bar-item path="/cart" activeColor="#33cc99">
          <img slot="item-icon" src="../../assets/img/Tabbar/tab9.png">
          <img slot="item-icon-active" src="../../assets/img/Tabbar/tab10.png">
          <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="#33cc99">
          <img slot="item-icon" src="../../assets/img/Tabbar/tab3.png">
          <img slot="item-icon-active" src="../../assets/img/Tabbar/tab7.png">
          <div slot="item-text">我的</div>
      </tab-bar-item>
     
    </tab-bar>
</template>

<script>
import TabBar from '../common/tabbar/Tabbar'
import TabBarItem from '../common/tabbar/TabBarItem'
export default {
    name: 'MainTabBar',
    components: {
        TabBar,
        TabBarItem
    }
}
</script>

<style scoped>
/* img{
    height: 24px;
    width: 24px;
}
p{
    font-size: 10px;
} */
</style>