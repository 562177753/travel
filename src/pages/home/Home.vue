<!-- template  模板包裹只能暴露出来一个标签  同级不能超过 一个   -->
<template>
    <div>
    <!-- 跳转页面 -->
    <!-- <router-link to="/list">列表页</router-link> -->
    <home-header></home-header>
    <!-- 根页面 显示对应的组件 -->
    <home-swiper></home-swiper>
    <home-icon></home-icon>
    <!-- <div>aaaa</div> -->
</div>
</template>

<script>
    // 导入Header 局部组件 为组件起名为HomeHeader 
    import HomeHeader from './components/Header'
    import HomeSwiper from './components/Swiper'
    import HomeIcon from './components/Icon'
    export default{
        name:'Home',
        // 声明在Home组件中注册HomeHeader 组件
        components:{
            HomeHeader,
            HomeSwiper,
            HomeIcon
        }
    }
</script>

<style>
    html{
        font-size: 50px
    }
div{
    font-size: 25px;
    color: #ccc
}
    
</style>