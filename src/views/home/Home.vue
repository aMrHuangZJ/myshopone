<template>
    <div id="home">
        <!-- 顶部导航条 -->
        <nav-bar class="home-nav"><div slot="center">首页</div></nav-bar>
        <!-- <scroll class="content" ref="scroll"> -->
        <!-- 轮播图 -->
        <home-swiper :banners="banners"></home-swiper>
        <!-- 分类 -->
        <recommend-view :recommends="recommends"></recommend-view>
        <!-- 商品类别 -->
        <tab-control class="tab-control" :titles="['流行','新款','精选']"
                @tabClick="tabClick">
        </tab-control>
        <!-- 商品列表 -->
        <goods-list :goods="goods[currentType].list"></goods-list>
            
        <!-- </scroll> -->
        <!-- 回到顶部 -->
        <!-- <back-top @click.native="backClick"></back-top> -->
    </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue';
// import Scroll from '../../components/common/scroll/Scroll.vue';
import BackTop from '../../components/content/backTop/BackTop.vue';
import GoodsList from '../../components/content/goods/GoodsList.vue';
import TabControl from '../../components/content/tabControl/TabControl.vue';
import {getHomeMultidata, getHomeGoods} from "../../network/home";
import HomeSwiper from './childComps/HomeSwiper.vue';
import RecommendView from './childComps/RecommendView.vue';

export default {
    name: 'Home',
    components: {
        NavBar,
        HomeSwiper,
        RecommendView,
        TabControl,
        GoodsList,
        // Scroll,
        BackTop
    },
    data(){
        return {
            banners: [],//轮播图
            recommends: [],//分类
            // 商品列表
            goods:{
                'pop': {page:0, list: []},
                'new': {page:0, list: []},
                'sell': {page:0, list: []},
            },
            currentType: 'pop'//即商品分类默认pop，通过点击获取index改变
        }
    },
    created(){
        // 从home.js中调用getHomeMultidata,请求轮播图数据
        this.getHomeMultidata()
        // 请求商品数据
        this.getHomeGoods('pop')
        this.getHomeGoods('new')
        this.getHomeGoods('sell')

//         this.$bus.$on('itemImageLoad', () =>{
// console.log(12346589)
//             this.$refs.scroll.refresh()
//         })
    },
    methods:{
        //商品分类切换
        tabClick(index){
            // console.log(index)
            switch (index){
                case 0: this.currentType = 'pop'
                break
                case 1: this.currentType = 'new'
                break
                case 2: this.currentType = 'sell'
                break
            }
        },
        // backClick(){
        //     console.log(123)
        //     //通过获取组件scroll得到里面的scroll属性的东西
        //     this.$refs.scroll.scroll.scrollTo(0, 0)
        // },
        //轮播图请求数据处理方法
        getHomeMultidata(){
            getHomeMultidata().then(res =>{
            // console.log(res)
            this.banners = res.data.banner.list;
            this.recommends = res.data.recommend.list;
        })
        },
        // 商品请求数据处理方法
        getHomeGoods(type){
            const page = this.goods[type].page + 1
            getHomeGoods(type,page).then(res =>{
                this.goods[type].list.push(...res.data.list)
                this.goods[type].page +=1
        })
        }

    }
}
</script>

<style scoped>
    #home{
        padding-top: 44px;
        height: 100vh;
        /* position: relative; */
    }
    .home-nav{
         background-color: #33cc99;

         position: fixed;
         left: 0;
         right: 0;
         top: 0;
         z-index: 9;
    }
    .tab-control{
        position: sticky;
        top: 44px;
        z-index: 9;
    }
    /* .content{
        height: calc(100%-93px);       
        overflow: hidden;
        margin-top: 44px;
    } */
    /* .content{
        position: absolute;
        top: 44px;
        bottom: 49px;
        left: 0;
        right: 0;
        
    } */
</style>