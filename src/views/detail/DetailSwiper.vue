<template>
   
        <swiper class="swipers">
            <swiper-item class="swiper-item" v-for="item in topImages" :key="item">
                <img :src="item" alt="">
            </swiper-item>
        </swiper>
    
</template>
<script>
import {Swiper, SwiperItem} from '../../components/common/swiper/index'

export default {
  components: { 
      Swiper, 
      SwiperItem 
      },
    name: 'DetailSwiper',
    props: {
        topImages: {
            type: Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
    .swipers{
        height: 300px;
        overflow: hidden;
    }
</style>