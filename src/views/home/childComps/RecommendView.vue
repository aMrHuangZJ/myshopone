<template>
    <div class="recommend">
        <div v-for="item in recommends" :key="item.acm" class="remcommend-item">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RecommendView',
    props: {
        recommends: {
            type: Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
     .recommend{
        display: flex;
        width: 100%;
        text-align: center;
        font-size: 12px;
        padding: 5px 0 5px;
        border-bottom: 5px solid #eee;
    }
    .remcommend-item{
        flex: 1;
    } 
    .remcommend-item img{
        width: 70px;
        height: 70px;
        margin-bottom: 5px;
    } 
</style>