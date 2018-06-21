<template>
    <div class='header'>
        <div class='header-left'>
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class='header-input'>
            <span class="iconfont search-icon">&#xe632;</span>
            输入城市景点</div>
        <div class='header-right'>城市
             <span class="iconfont arrow-icon">&#xe64a;</span>
        </div>

    </div>
</template>


<script>
export default {
  name: "HomeHeader"
};
</script>

<!--stylus中 scoped  限制样式只对当前组件有效  局部样式-->
// 当设计图给的是2倍图时  对应的font-size也要缩小一倍 所以要fontsize 设置为50px 
<style lang='stylus'  scoped>
// @import '../../../assets/style/varibles.styl'
// 简写 省去../../../
// @import '~@/assets/style/varibles.styl'
//通过地自定义  简化 @/assets/style/
@import '~styles/varibles.styl'
// 86 / 100  实际的比值是
// 1rem=html font-size=50px;
.header {
    display: flex;
    line-height :.86rem /* 43/50 */
    color #ffffff
    background :$bgColor
    .header-left {
        line-height :.86rem
        width: 1.3rem; 
        float:left
        color #ffffff
    }
    .back-icon{
          margin-left .1rem /* 5/50 */
          font-size .32rem /* 16/50 */
    }
      
    .header-input {
        flex:1;
        height 0.7rem
        line-height 0.7rem
        background :#fff
        color #ccc
        font-size .32rem /* 16/50 */
        border-radius :.1rem /* 5/50 */
        margin .08rem /* 4/50 */
        padding-left .2rem /* 10/50 */
    }
        
     .header-right {
        width: 1.24rem; 
        float: right;
        font-size .32rem /* 16/50 */
        text-align :center
        color #ffffff
    }
}
</style>