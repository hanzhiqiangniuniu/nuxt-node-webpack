<template>
  <div class="bottomCon">
    <ul class="aBtab">
      <li class="bList">
        <img src="./bg-career-advice.png" alt="">
        <div class="btitleBox">
          <i class="ad_icon"></i>
          <h4>Career Advice</h4>
        </div>
        <p class="adExplain">
          Our career consultants are available to advise you on job opportunities in China that are a right fit for you.
        </p>
        <span class="line"></span>
        <a class="btn" href="job-placement-china.html" @click="goTop" title="job placement China">Learn More</a>
      </li>
      <li class="bList">
        <img src="./bg-work-visa.png" alt="">
        <div class="btitleBox">
          <i class="vi_icon"></i>
          <h4>Work Visa</h4>
        </div>
        <p class="adExplain">
          We are happy to walk you through the process, as well as providing you with checklists and sample documents.
        </p>
        <span class="line"></span>
        <a class="btn" href="china-work-visa.html" @click="goTop" title="china work visa">Learn More</a>
      </li>
      <li class="bList" style="margin-right: 0">
        <img src="./bg-ground-service.png" alt="">
        <div class="btitleBox">
          <i class="se_icon"></i>
          <h4>Ground Service</h4>
        </div>
        <p class="adExplain">
          Our team can assist with making arrangements that will help with your transition into China.
        </p>
        <span class="line"></span>
        <a class="btn" href="moving-to-china.html" @click="goTop" title="moving to china">Learn More</a>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
     methods:{
         goTop(){
             document.body.scrollTop=0;
         }
     }
  }
</script>

<style scoped>
  .bottomCon{
    width: 100%;
    height: 736px;
    background: #eeeeee;
  }
  .bottomCon .aBtab{
    margin: auto;
    width: 1136px;
    padding: 117px 32px;
  }
  .bottomCon .aBtab .bList{
    float: left;
    width: 306px;
    height: 442px;
    background: #fff;
    border-radius: 10px;
    margin-right: 25px;
    padding: 60px 28px 0 28px;
  }
  .bottomCon .aBtab .bList img{
    display: block;
    margin: 0 0 45px 0;
    width: 100%;
  }
  .bottomCon .aBtab .bList .btitleBox{
    margin:0 0 6px 0;
  }
  .bottomCon .aBtab .bList .btitleBox .ad_icon,.vi_icon,.se_icon{
    display: inline-block;
    width: 50px;
    height: 50px;
    vertical-align: middle;

  }
  .bottomCon .aBtab .bList .btitleBox .ad_icon{
    background: url("./icon-career-advice.png")no-repeat;
  }
  .bottomCon .aBtab .bList .btitleBox .vi_icon{
    background: url("./icon-work-visa.png")no-repeat;
  }
  .bottomCon .aBtab .bList .btitleBox .se_icon{
    background: url("./icon-ground-service.png")no-repeat;
  }
  .bottomCon .aBtab .bList .btitleBox h4{
    display: inline-block;
    margin-left: 10px;
    font-size: 16px;
    color: #262626;
    vertical-align: middle;
  }
  .bottomCon .aBtab .bList .adExplain{
    height: 54px;
    margin-top: 8px;
    font-size: 12px;
    color: #aeaeae;
    line-height: 18px;
  }
  .bottomCon .aBtab .bList .line{
    display: block;
    margin: 25px 0 18px 0;
    width: 258px;
    height: 1px;
    background: #e0e0e0;
  }
  .bottomCon .aBtab .bList .btn{
    display: block;
    width: 134px;
    height: 34px;
    line-height: 34px;
    background: #0ed666;
    text-align: center;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 14px 27px rgba(28,63,43,.27);
  }
  .bottomCon .aBtab .bList .btn:hover{
    background: #11b85b;
  }
</style>
