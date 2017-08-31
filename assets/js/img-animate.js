/**
 * Created by darren on 2017/6/16.
 */
function imgAnimate(){
  var ourImg=document.getElementById('imgLazy');
  var aImg=ourImg.getElementsByTagName('img');
  console.log(aImg)
//当触发滚轮事件的时候，判断图片是否满足加载条件
  window.onscroll=function(){
    //求浏览器卷去的高度
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    //求可视区的高度
    var clientHeight=document.documentElement.clientHeight||document.body.clientHeight;
    var scrollBottom=scrollTop+clientHeight;
    //需要分别比较每张图片是否满足条件
    for(var i=0; i<aImg.length; i++){
      var imgPosition=aImg[i].offsetTop + aImg[i].clientHeight;
      console.log(aImg[0].offsetTop);
      //console.log(scrollBottom);
      //判断图片的加载条件 (图片距离body的top值+图片本身的高度)<=(浏览器卷去的高度+可视区的高度)
      aImg[i].index=i;
      if(imgPosition<=scrollBottom){//满足让图片可以加载的条件
        aImg[i].style.animation='fadeInUp 1s ease';
        aImg[i].style.opacity='1';
        aImg[i].style.filter='alpha(opacity=100)';

        //lazyImg(aImg[i]);//这个方法中就是图片加载的处理；
        //console.log('11')
      }
    }
  };
}
module.exports = imgAnimate;
