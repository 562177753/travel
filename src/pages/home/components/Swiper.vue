<!-- The ref attr used to find the swiper instance -->
<template>
<div class="wrapper">
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for="item of swiperList" :key='item.id'>
        <img class="swiper_img" :src='item.imgUrl' alt="">
    </swiper-slide>

    <!-- <swiper-slide>
        <img class="swiper_img" src="//img1.qunarzz.com/vc/19/70/66/8c54d8f3830e0f09cd3f060809.jpg" alt="">
    </swiper-slide> -->
   
    <!-- Optional controls -->
    <!-- 轮播图下面的圆点 -->
    <div class="swiper-pagination"  slot="pagination"></div>
   
    
  </swiper>
  </div>
</template>

<script>
export default {
  // 组件起名字
  name: "HomeSwiper",
  //子组件中 data 一定要是函数
  // data:function(){
  // }
  // es6语法
  data() {
    //   使用 Vue-Awesome-Swiper  插件
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true, //轮播可无限循环
         autoplay: 3000,//自动轮播
          speed: 600,
          autoplayDisableOnInteraction:false
         
      },
      swiperList: [
        {
          id: "001",
          imgUrl:
            "//img1.qunarzz.com/vc/e8/80/01/e4310f89ae3aba7c2039bac690.jpg"
        },
        {
          id: "002",
          imgUrl:
            "//img1.qunarzz.com/vc/19/70/66/8c54d8f3830e0f09cd3f060809.jpg"
        }
      ]
    };
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    
    // this.swiper.slideTo(3, 1000, false);
  }
};
</script>



<style lang="stylus" scoped>
.wrapper>>>.swiper-pagination-bullet-active {
    background: #fff;
}

.wrapper 
        //以下5行样式为了 在加载是页面占位不会发生变动 
        width: 100%, ;
        height 0
        overflow hidden
        padding-bottom 30%
        background-color #eee 
    .swiper_img 
        width: 100%;
        background-color: #eee;

</style>
