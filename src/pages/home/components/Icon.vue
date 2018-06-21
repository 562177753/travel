<template>
    
    <div class="icons">
        <!-- 使用轮播插件 -->
        <swiper :options="swiperOption">
        <!-- 代表一个页面 -->
        <!-- 首先循环页数 -->
            <swiper-slide v-for="(page, index) of pages"  :key='index'>
                <div class="icon" v-for="item of page" :key='item.id'>
                    <div class="icon_img">
                        <img class="img_content" :src='item.imgUrl' alt="">
                    </div>
                    <p class="desc">{{item.desc}}</p>
                </div>  
            </swiper-slide>
        </swiper>    
    </div>
</template>

<script>
export default {
    name:'Icon',
   
    data(){
        return {
             swiperOption: {
             pagination: ".swiper-pagination",
        // loop: true, //轮播可无限循环
             autoplay:false,//自动轮播
        //  speed: 600,
        //  autoplayDisableOnInteraction:false
         
      },
            iconList:[{
                id:'001',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
                desc:'景点文字超出显示省略号'
                },
                {
                id:'002',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
                desc:'景点门票1'
                },
                 {
                id:'003',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
                desc:'景点门票1'
                },
                 {
                id:'004',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
                desc:'景点门票1'
                },
                 {
                id:'005',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
                desc:'景点门票1'
                },
                 {
                id:'006',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
                desc:'景点门票1'
                },
                 {
                id:'007',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
                desc:'景点门票1'
                },
                 {
                id:'008',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
                desc:'景点门票打发斯蒂芬1'
                },
                 {
                id:'009',
                imgUrl:'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
                desc:'景点门票1'
                },
             ]
        }
    },
    // 自带缓存  展示超过一页的数据 =>展示第九个数据
    computed:{
        pages(){
            const pages=[]
           this.iconList.forEach((item,index)=>{
               const page=Math.floor(index / 8)
            //    如果pages 中的page 不存在
               if(!pages[page]){
                    pages[page]=[]
               }
               pages[page].push(item)
           })
           return pages
        }
    }

}
</script>



 <style lang='stylus' scoped>
    .icons >>> .swiper-container
        // width 100%
        // overflow hidden   swiper插件中自带 overflow hidden
        height 0
        padding-bottom 50%
     
    .icon
        float left
        width 25%
        height 0
        position relative
        padding-bottom 25%
        // background red

        .icon_img
            box-sizing border-box
            position absolute
            left 0
            right 0
            top 0
            bottom .44rem 
            padding .2rem /* 5/50 */
            // background blue
        .img_content
            display block
            height  100%
            margin 0 auto
    .desc
            position absolute
            bottom .1rem /* 5/50 */
            left 0
            // top 0
            right 0
            font-size .24rem /* 12/50 */ 
            text-align center
            overflow hidden
            // 文字超出显示省略号
            white-space nowrap
            text-overflow ellipsis
 </style>
 