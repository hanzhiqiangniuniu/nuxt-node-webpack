<template>
  <div class="move">
    <v-nav></v-nav>
    <v-seNav></v-seNav>
    <div class="bannerBox">
      <div class="auto">
        <div class="banLeft">
          <h2 class="banTitle">
            We're Here <br/>
            for Your Success
          </h2>
          <h2 class="ipad-ban-title">
            We're Here
            for Your Success
          </h2>
          <p class="serDes">
            Our team will help you every step of the way, <br/>
            providing support services <br/>
            to help you find the best job, <br/>
            and ensure a comfortable and smooth transition.
          </p>
        </div>
        <div class="banRight">
          <img src="../assets/img/service/China-visa-service-4.png" alt="">
          <span class="tag">
            —— The silhouette is TianTan of Chinese Ancient buildings ——
          </span>
        </div>
      </div>
    </div>
    <div class="board">
      <ul class="board-tab auto"  id="imgLazy">
        <li class="board-list clear">
          <img class="left-img" src="../assets/img/service/China-visa-service-1.png" alt="">
          <div class="board-img-ass-right board-img-ass board-img-ass-margin1">
            <h3 class="board-list-title">Career Advice</h3>
            <p class="board-list-des">
              Our career consultants are available to advise you on job
opportunities in China that are a right fit for you, based on your skills
and qualifications, desired salary, and lifestyle interests.
            </p>
            <a href="/job-placement-China" class="board-list-link draw1">
              Learn More
              <span class="top-border"></span>
              <span class="right-border"></span>
              <span class="bottom-border"></span>
              <span class="left-border"></span>
            </a>
            <a class="go-more-icon" href="/job-placement-China"></a>
          </div>
        </li>
        <li class="board-list clear web">
          <div class="board-img-ass-left board-img-ass board-img-ass-margin2">
            <h3 class="board-list-title">Work Visa</h3>
            <p class="board-list-des">
              Obtaining a proper work visa in China can seem daunting, but that’s
why we are here to help. The Career China visa team is happy to walk
you through the process, as well as providing you with checklists and
sample documents, to ease your visa worries.
            </p>
            <a href="/China-work-visa" class="board-list-link draw1">
              Learn More
              <span class="top-border"></span>
              <span class="right-border"></span>
              <span class="bottom-border"></span>
              <span class="left-border"></span>
            </a>
          </div>
          <img  class="right-img" src="../assets/img/service/China-visa-service-2.png" alt="">
        </li>
        <li class="board-list clear iphone">
          <img  class="left-img" src="../assets/img/service/China-visa-service-2.png" alt="">
          <div class="board-img-ass-right board-img-ass board-img-ass-margin2">
            <h3 class="board-list-title">Work Visa</h3>
            <p class="board-list-des">
              Obtaining a proper work visa in China can seem daunting, but that’s
why we are here to help. The Career China visa team is happy to walk
you through the process, as well as providing you with checklists and
sample documents, to ease your visa worries.
            </p>
            <a href="/China-work-visa" class="board-list-link draw1">
              Learn More
              <span class="top-border"></span>
              <span class="right-border"></span>
              <span class="bottom-border"></span>
              <span class="left-border"></span>
            </a>
            <a class="go-more-icon" href="/China-work-visa"></a>
          </div>
        </li>
        <li class="board-list clear">
          <img class="left-img" src="../assets/img/service/China-visa-service-3.png" alt="">
          <div class="board-img-ass-right board-img-ass board-img-ass-margin3">
            <h3 class="board-list-title">Ground Service</h3>
            <p class="board-list-des">
              We understand moving to China is exciting, but also a little
nerve-wracking! Our team can assist with making arrangements that
will help with your transition into China. Things like arranging for
airport pick-up, and providing assistance with apartment rentals, bank
accounts and setting up your phone.
            </p>
            <a href="/moving-to-China" class="board-list-link draw1">
              Learn More
              <span class="top-border"></span>
              <span class="right-border"></span>
              <span class="bottom-border"></span>
              <span class="left-border"></span>
            </a>
            <a class="go-more-icon" href="/moving-to-China"></a>
          </div>
        </li>
      </ul>
    </div>
    <v-goTop></v-goTop>
    <v-footer></v-footer>
  </div>

</template>

<script type="text/ecmascript-6">
  import $ from 'jquery'
  import Vue from 'vue'
  import VueResource from 'vue-resource';
  import '../assets/css/reset.min.css'
  import addthis from '../assets/js/addthis.js';
  import imgAnimate from '../assets/js/img-animate.js';
  import nav from '../components/public/nav/nav'
  import seNav from '../components/public/service-seNav/service-seNav'
  import footer from '../components/public/footer/footer'
  import goTop from '../components/public/goTop/goTop'
  var addthis_share = {};
  export default{
    head:{
      title:'Discover how to move to China with our support services.',
      meta:[
        { name: 'keywords', content: 'how to move to china'},
        { name: 'description', content: 'Our team will help you every step of the way with how to move to China. From career advice, finding the best job, visas, and arrival support.'},
        { property: 'og:url', content: 'www.careerchina.com/how-to-move-to-China'},
        { property: 'og:type', content: 'article'},
        { property: 'og:image', content: 'http://material.careerchina.com/img/6f1737e8-94b1-4b8a-9621-65f4ac9995a3.jpg'},
        { name: 'twitter:card', content: 'http://material.careerchina.com/img/6f1737e8-94b1-4b8a-9621-65f4ac9995a3.jpg'},
        { name: 'twitter:creator', content: 'careerchina'},
        { name: 'twitter:image', content: 'http://material.careerchina.com/img/6f1737e8-94b1-4b8a-9621-65f4ac9995a3.jpg'},
        { itemprop: 'image', content: 'http://material.careerchina.com/img/6f1737e8-94b1-4b8a-9621-65f4ac9995a3.jpg'},
      ]
    },
    components:{
      'v-nav':nav,
      'v-seNav':seNav,
      'v-footer':footer,
      'v-goTop':goTop
    },
      mounted(){
          addthis();
        imgAnimate()
      }
  }
</script>

<style scoped>
  .bannerBox{
    width: 100%;
    height: 680px;
    background-image: linear-gradient(135deg, #19DFE8 0%, #4889FF 54%, #4B4DFF 100%);
  }
  .auto{
    width: 1040px;
    margin: auto;
  }
  .auto .banLeft{
    float: left;
    width: 400px;
    margin-top: 274px;
  }
  .auto .banLeft .banTitle{
    margin-bottom: 40px;
    font-size: 50px;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 62px;
  }
  .auto .banLeft .ipad-ban-title{
    margin-bottom: 30px;
    font-size: 32px;
    color: #FFFFFF;
    display: none;
  }
  .auto .banLeft .serDes{
    font-size: 18px;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 24px;
  }
  .auto .banRight{
    float: right;
    margin-top: 229px;
    width: 552px;
  }
  .auto .banRight img{
    display: block;
    margin-bottom: 20px;
    width: 100%;
    height: 331px;
  }
  .auto .banRight .tag{
    display: block;
    opacity: 0.8;
    font-size: 12px;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 30px;
    text-align: center;
  }
  .board{
    padding: 130px 0;
    background: #fff;
  }
  .board-tab .board-list{
    margin-bottom: 140px;
  }
  .board-tab .iphone{
    display: none;
  }
  .board-tab .board-list:last-child{
    margin-bottom: 0;
  }
  .board-list .left-img{
    float: left;
  }
  .board-list .right-img{
    float: right;
    margin-right: 18px;
  }
  .board-list img{
    width: 435px;
    height: 315px;
    opacity: 0;
    filter:alpha(opacity=0)
  }
  .board-list .board-img-ass-right{
    float: right;
    width: 453px;
  }
  .board-list .board-img-ass-left{
    float: left;
    width: 453px;
  }
  .board-img-ass .board-list-title{
    font-size: 24px;
    color: #333435;
    letter-spacing: 0;
    line-height: 24px;
    font-weight: 600;
  }
  .board-img-ass .board-list-des{
    margin: 30px 0;
    font-size: 14px;
    color: #888;
    letter-spacing: 0;
    line-height: 30px;
  }
  .board-img-ass-margin1{
    margin-top: 63px;
  }
  .board-img-ass-margin2{
    margin-top: 38px;
  }
  .board-img-ass-margin3{
    margin-top: 14px;
  }
  .board-img-ass .board-list-link{
    display: block;
    position: relative;
    width: 230px;
    height: 44px;
    line-height: 44px;
    border-radius: 2px;
    font-size: 14px;
    color: #333435;
    text-align: center;
    border: 1px solid;
    border-image: -webkit-linear-gradient( 135deg, #19DFE8 0% , #4B4DFF 100%) 20 20;
    border-image: -moz-linear-gradient( 135deg, #19DFE8 0% , #4B4DFF 100%) 20 20;
    border-image: linear-gradient(  135deg, #19DFE8 0% , #4B4DFF 100%) 20 20;
  }
  .draw1 .top-border{
    position: absolute;
    top:-1px;
    left: 0;
    width: 0;
    height: 0;
    background-image: linear-gradient(  135deg, #19DFE8 0% , #4B4DFF 100%);;
    border-radius: 2px;
  }
  .draw1 .right-border{
    position: absolute;
    top:0;
    right: -1px;
    width: 0;
    height: 0;
    background: #4B4DFF;
    border-radius: 2px;
  }
  .draw1 .bottom-border{
    position: absolute;
    bottom:-1px;
    right: 0;
    width: 0;
    height: 0;
    background-image: linear-gradient(  135deg, #19DFE8 0% , #4B4DFF 100%);;
    border-radius: 2px;
  }
  .draw1 .left-border{
    position: absolute;
    bottom:0;
    left: -1px;
    width: 0;
    height: 0;
    background: #19DFE8;
    border-radius: 2px;
  }
  .draw1:hover .top-border{
    width: 229px;
    height: 2px;
    -webkit-transition: width 0.25s ease-out 0s;
    transition: width 0.25s ease-out 0s;
  }
  .draw1:hover .right-border{
    width: 2px;
    height: 43px;
    -webkit-transition: height 0.125s ease-out 0.25s;
    transition: height 0.125s ease-out .25s;
  }
  .draw1:hover .bottom-border{
    width: 229px;
    height: 2px;
    -webkit-transition: width 0.25s ease-out 0.375s;
    transition: width 0.25s ease-out 0.375s;
  }
  .draw1:hover .left-border{
    width: 2px;
    height: 43px;
    -webkit-transition: height 0.125s ease-out .625s;
    transition: height 0.125s ease-out .625s;
  }
  .board-img-ass .go-more-icon{
    width: 20px;
    height: 8px;
    background: url("../assets/img/service/icon-arrow.png")no-repeat center;
    display: none;
    background-size: cover;
    cursor: pointer;
  }
  @-webkit-keyframes fadeInUp {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }
  @media (max-width: 768px){
    .bannerBox{
      height: inherit;
    }
    .auto{
      width: 100%;
      margin: inherit;
    }
    .auto .banLeft{
      float: inherit;
      width: 440px;
      margin: auto;
      padding: 160px 0 60px 0;
    }
    .auto .banLeft .banTitle{
      display: none;
    }
    .auto .banLeft .ipad-ban-title{
      display: block;
    }
    .auto .banLeft .serDes{
      font-size: 16px;
      text-align: center;
    }
    .auto .banRight{
      display: none;
    }
    .board{
      padding: 80px 0;
    }
    .board-tab{
      width: 708px;
      margin: auto;
    }
    .board-tab .board-list{
      margin-bottom: 76px;
    }
    .board-list img{
      width: 311px;
      height: 229px;
    }
    .board-list .board-img-ass-right{
      width: 350px;
    }
    .board-list .board-img-ass-left{
      width: 350px;
    }
    .board-img-ass .board-list-title{
      font-size: 17px;
      line-height: 17px;
    }
    .board-img-ass .board-list-des{
      margin: 17px 0;
      line-height: 24px;
    }
    .board-img-ass-margin1{
      margin-top: 16px;
    }
    .board-img-ass-margin2{
      margin-top: 6px;
    }
    .board-img-ass-margin3{
      margin-top: -7px;
    }
  }
  @media (max-width: 415px) {
    .auto .banLeft{
      width:320px;
    }
    .auto .banLeft .ipad-ban-title{
      margin-bottom: 20px;
      font-size: 18px;
      text-align: center;
    }
    .auto .banLeft .serDes{
      font-size: 14px;
    }
    .board{
      padding: 0;
    }
    .board-tab .web{
      display: none;
    }
    .board-tab .iphone{
      display: block;
    }
    .board-tab{
      width: 100%;
      margin: inherit;
    }
    .board-tab .board-list{
      padding: 30px 20px;
      margin-bottom: 0;
      border-bottom: 10px solid #F3F6FB;
    }
    .board-list .left-img{
      float: inherit;
    }
    .board-list img{
      display: block;
      width: 100%;
    }
    .board-img-ass-margin1{
      margin-top: inherit;
    }
    .board-img-ass-margin2{
      margin-top: inherit;
    }
    .board-img-ass-margin3{
      margin-top: inherit;
    }
    .board-list .board-img-ass{
      float: inherit;
      margin-top: 20px;
      width: 100%;
    }
    .board-img-ass .board-list-title{
      font-size: 17px;
    }
    .board-img-ass .board-list-des{
      margin: 12px 0;
      line-height: 16px;
    }
  }
</style>
