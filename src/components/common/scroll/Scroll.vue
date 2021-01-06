<template>
    <div ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name: 'Scroll',
    data(){
        return {
            scroll: null
        }
    },
    mounted(){
        
        this.scroll = new BScroll(this.$refs.wrapper,{
            click: true,
            observeDom: true,
            
            probeType:3
            
        })
        this.scroll.scrollTo(0,0)
        
       
    },
    methods:{
        refresh(){
            this.scroll.refresh()
        }
    }
}
</script>

<style scoped>

</style>