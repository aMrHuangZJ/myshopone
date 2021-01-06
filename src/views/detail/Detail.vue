<template>
    <div id="detail">
        <!-- <div>{{$store.state.cartList.length}}</div> -->
        <!-- <ul>
            <li v-for="item in $store.state.cartList" :key="item.iid">{{item}}</li>
        </ul> -->
        <!-- 导航栏 -->
        <detail-nav-bar @titleClick="titleClick"></detail-nav-bar>
        <!-- 轮播图 -->
        <detail-swiper :top-images="topImages"></detail-swiper>
        <!-- 商品信息 -->
        <detail-base-info :goods="goods"></detail-base-info>
        <!-- 商家信息 -->
        <detail-shop-info :shop="shop"></detail-shop-info>
        <!-- 商品详情 -->
        <detail-goods-info :detailInfo="detailInfo"></detail-goods-info>
        <!-- 商品详情 -->
        <detail-param-info :paramInfo="paramInfo"></detail-param-info>
        <!-- 商品评论 -->
        <detail-comment-info :commentInfo="commentInfo"></detail-comment-info>
        <!-- 详情页商品推荐 -->
        <goods-list :goods="recommends"></goods-list>
        <!-- 底部栏 -->
        <detatil-bottom-bar @addCart="addToCart"></detatil-bottom-bar>
        <!-- 弹窗 -->
        <toast :message="message" :show="show"></toast>
    </div>
</template>

<script>
import DetailNavBar from './DetailNavBar.vue'
import {getDetail, Goods, Shop, GoodsParam, getRecommend} from "../../network/detail"
import DetailSwiper from './DetailSwiper.vue'
import DetailBaseInfo from './DetailBaseInfo.vue'
import DetailShopInfo from './DetailShopInfo.vue'
import DetailGoodsInfo from './DetailGoodsInfo.vue'
import DetailParamInfo from './DetailParamInfo.vue'
import DetailCommentInfo from './DetailCommentInfo.vue'
import GoodsList from '../../components/content/goods/GoodsList.vue'
import DetatilBottomBar from './DetatilBottomBar.vue'
import Toast from '../../components/common/toast/Toast.vue'
export default {
    name: 'Detail',
    components: {
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        DetailGoodsInfo,
        DetailParamInfo,
        DetailCommentInfo,
        GoodsList,
        DetatilBottomBar,
        Toast

    },
    data(){
        return {
            iid:null,
            topImages: [],//轮播图
            goods: {},//商品信息
            shop: {},//店铺信息
            detailInfo: {}, //商品详情
            paramInfo: {}, //商品参数
            commentInfo: {},//评论信息
            recommends: [],//详情页的商品推荐
            message: '',
            show: false
        }
    },
    created() {
        this.iid = this.$route.params.iid
        // 通过传递iid数据请求对应商品详情
        getDetail(this.iid).then(res =>{
            // console.log(res);
            const data = res.result
            this.topImages = data.itemInfo.topImages

            //获取商品信息---对象
            this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

            // 商品店铺信息---对象
            this.shop = new Shop(data.shopInfo)           
            // console.log(new Shop(data.shopInfo))

            // 商品详情
            this.detailInfo = data.detailInfo;
            // console.log(this.detailInfo)

            //获取商品的详情
            this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

            //商品评论信息
            if(data.rate.cRate !== 0){
                this.commentInfo = data.rate.list[0]
            }

            //详情页推荐商品
            getRecommend().then(res => {
                // console.log(res)
                this.recommends = res.data.list
            })
        })
    },
    methods: {
        titleClick(index){
            console.log(index)
        },
        addToCart(){
            // console.log(this.goods);
            // 获取购物车需要的数据
            const product = {}
            product.image = this.topImages[0];
            product.title = this.goods.title;
            product.desc = this.goods.desc;
            product.price = this.goods.realPrice;
            product.iid = this.iid;
            //  console.log(product.price)
            // this.$store.commit('addCart', product)  
            //点击该按钮之后，要等执行完才是加入购物车，不是点击即加入成功
            //所以可以通过vuex的actions可以返回一个promise，resolve返回成功数据
            this.$store.dispatch('addCart', product).then(res =>{
                console.log(res)
                this.show = true;
                this.message = res;
                setTimeout(()=>{
                    this.show = false;
                    this.message = ''
                },2500)
                // this.$toast.show(res, 2000)
            })
        }
    }
}
</script>

<style scoped>
    #detail{
        position: relative;
        z-index: 9;
        background: #fff;
    }
</style>