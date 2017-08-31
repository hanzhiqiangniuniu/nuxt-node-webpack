<template>
  <div class="goTop" id="goTop">
    <i class="normal" id="normal"></i>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    mounted(){
      var ourImg=document.getElementById('ourImg');
      var aImg=document.getElementsByTagName('img');
      var oTop=document.getElementById('goTop');
      window.onscroll=computedDisplay;
      function computedDisplay() {
        var scrollT=document.body.scrollTop ||document.documentElement.scrollTop;
        var clientH=document.documentElement.clientHeight;
        var scrollBottom=scrollT+clientH;
        if(scrollT>clientH){
          oTop.style.display='block'
        }else{
          oTop.style.display='none'
        }
        for(var i=0; i<aImg.length; i++){
          var imgPosition=aImg[i].offsetTop;
          //判断图片的加载条件 (图片距离body的top值+图片本身的高度)<=(浏览器卷去的高度+可视区的高度)
          if(imgPosition<=scrollBottom){//满足让图片可以加载的条件
            aImg[i].style.animation='fadeInUp 1s ease';

            //lazyImg(aImg[i]);//这个方法中就是图片加载的处理；
            //console.log('11')
          }
        }
      }
      oTop.onclick=function () {
        this.style.display='none';
        window.onscroll=null;
        var target=document.body.scrollTop;
        var duration=1000;
        var interval=10;
        var step=target/duration*interval;
        var timer=setInterval(function () {
          var curTop=document.body.scrollTop;
          if(curTop<=0){
            clearInterval(timer)
            window.onscroll=computedDisplay;
            return
          }
          curTop-=step;
          document.body.scrollTop=curTop;
        },interval)
      };
    }
  }
</script>

<style scoped>
  .goTop{
    width: 58px;
    height: 58px;
    position: fixed;
    right: 30px;
    bottom: 30px;
    display: none;
    z-index: 99;
    cursor: pointer;
  }
  .goTop .normal{
    display: block;
    width: 100%;
    height: 100%;
    background: url("./button-top-normal.png")no-repeat center;
    background-size: cover;
  }
  .goTop .normal:hover{
    background: url("./button-top-hover.png")no-repeat center;
    background-size: cover;
  }
</style>
