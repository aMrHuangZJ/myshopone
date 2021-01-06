<template>
    <div id="mine">
        
        <nav-bar class="nav-mine">
            <div slot="center">我的</div>
        </nav-bar>
        <div class="login">
            <div>
                <img src="../../assets/img/1.png" alt="头像">
            </div>
            <div class="login-name">
                <div><span>我的ID名</span></div>
                <div><span>1234568</span></div>
            </div>
            <div class="login-go">
                <span>></span>
            </div>
        </div>
        <div class="mine-yu">
            <div class="money">
                <div><span class="text">45.00</span>元</div>
                <div>我的余额</div>
            </div>
            <div class="discount">
                <div><span class="text">9</span></div>
                <div>我的优惠</div>
            </div>
            <div class="score">
                <div><span class="text">456</span></div>
                <div>我的积分</div>
            </div>
        </div>
        <div class="soft">
            <div><span>我的订单</span></div>
            <div><span>积分商城</span></div>
            <div><span>我的消息</span></div>
            <div><span>我的足迹</span></div>
            <div><span>会员</span></div>
        </div>
        <div class="bottom">
            <div><span>设置</span></div>
            <div><span>客服</span></div>
            <div><span>关于我们</span></div>
            
        </div>
    </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
export default {
    name: 'Profile',
    components: {
        NavBar

    }
}
</script>

<style scoped>
    #mine{
        height: 800px;
        background-color: #ccffff;
    }
    .nav-mine{
        background-color: #33cc99;
    }
    .login{
        height: 100px;
        width: 100%;
        background-color: #33cc99;
        display: flex;
        color: #fff;
    }
    .login img{
        height: 70px;
        width: 70px;
        border-radius: 50%;
        margin: 10px;
    }
    .login-name{
        margin-top: 25px;
    }
    .login-go span{
        position: fixed;
        right: 30px;
        margin: 25px;
    }
    .mine-yu{
        display: flex;
    }
    .text{
        color: #33cc99;
    }
    .money, .discount, .score{
        background-color: #fff;
        padding: 10px;
        flex: 1;
        text-align: center;
        margin: 3px;
    }
    .soft{        
        margin-top: 5px;
    }
    .soft div, .bottom div{
        margin: 1px;
        padding: 7px;
        background-color: #fff;       
    }
    .bottom{
        margin-top: 5px;
    }
    
</style>