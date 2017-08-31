<template>
   <div class="index">
     <v-nav></v-nav>
     <div class="herBan">
       <div class="auto">
         <div class="herL">
           <i class="playM" @click="play"></i>
           <h1 class="webH1">
             Your Story in<br/>
             China<br/>
             is Just Beginning
           </h1>
           <h1 class="mH1">
             Your Story in
             China
             is Just Beginning
           </h1>
           <i class="play" @click="play"></i>
           <p class="herDes">
             Live an exciting lifestyle, <br/>
             travel to exotic lands, and earn a good living by working in China.
           </p>
           <p class="herDes1">
             Live an exciting lifestyle,travel to exotic lands,<br/>
             and earn a good living by working in China.
           </p>
           <div class="link">
             <a href="javascript" title="" class="draw meet">Explore Opportunities</a>
             <a href="javascript" title="" class="draw meet">View Services</a>
           </div>
         </div>
         <div class="herR">
           <img src="../assets/img/index/web-working-in-China-1.png" alt="">
         </div>
       </div>
     </div>

     <div class="maskblock" v-show="maskblock" @click="playNo"></div>
     <div class="videoBox" v-show="clickPlay">
       <video id="myVideo" src="http://careerchina-material.oss-us-west-1.aliyuncs.com/video/6c0db396-c9be-4841-8582-98a5c64c58c2.mp4" controls width="100%" height="100%" ></video>
     </div>

     <div class="featured">
       <div class="auto">
         <h2 class="feaTitle">Featured Opportunities Abroad</h2>
         <div class="container" v-swiper:mySwiper="swiperOption">
           <div class="swiper-wrapper clear">
             <div class="swiper-slide">
               <i class="colorBor1"></i>
               <img src="../assets/img/index/web-icon-logo-1.png" alt="">
               <h3 class="schoolTitle">First Leap China</h3>
               <p class="bodDes">
                 A business unit of TAL Education Group (
                 NYSE, TAL), established in Beijing in 2009.
               </p>
               <div class="bodBott">
                 <ul class="bodData clear">
                   <li class="bodList">
                     <span class="number">2009</span>
                     <span class="desName">Established</span>
                   </li>
                   <li class="bodList">
                     <span class="number">>2000</span>
                     <span class="desName">Company Size</span>
                   </li>
                   <li class="bodList">
                     <span class="number">5</span>
                     <span class="desName">Open Positions</span>
                   </li>
                 </ul>
               </div>
             </div>
             <div class="swiper-slide">
               <i class="colorBor2"></i>
               <img src="../assets/img/index/web-icon-logo-2.png" alt="">
               <h3 class="schoolTitle">First Leap China</h3>
               <p class="bodDes">
                 A business unit of TAL Education Group (
                 NYSE, TAL), established in Beijing in 2009.
               </p>
               <div class="bodBott">
                 <ul class="bodData clear">
                   <li class="bodList">
                     <span class="number">2009</span>
                     <span class="desName">Established</span>
                   </li>
                   <li class="bodList">
                     <span class="number">>2000</span>
                     <span class="desName">Company Size</span>
                   </li>
                   <li class="bodList">
                     <span class="number">5</span>
                     <span class="desName">Open Positions</span>
                   </li>
                 </ul>
               </div>
             </div>
             <div class="swiper-slide">
               <i class="colorBor3"></i>
               <img src="../assets/img/index/web-icon-logo-3.png" alt="">
               <h3 class="schoolTitle">First Leap China</h3>
               <p class="bodDes">
                 A business unit of TAL Education Group (
                 NYSE, TAL), established in Beijing in 2009.
               </p>
               <div class="bodBott">
                 <ul class="bodData clear">
                   <li class="bodList">
                     <span class="number">2009</span>
                     <span class="desName">Established</span>
                   </li>
                   <li class="bodList">
                     <span class="number">>2000</span>
                     <span class="desName">Company Size</span>
                   </li>
                   <li class="bodList">
                     <span class="number">5</span>
                     <span class="desName">Open Positions</span>
                   </li>
                 </ul>
               </div>
             </div>
           </div>
         </div>
         <div class="container1">
           <div class="swiper clear">
             <div class="swiper-slide">
               <i class="colorBor1"></i>
               <img src="../assets/img/index/web-icon-logo-1.png" alt="">
               <h3 class="schoolTitle">First Leap China</h3>
               <p class="bodDes">
                 A business unit of TAL Education Group (
                 NYSE, TAL), established in Beijing in 2009.
               </p>
               <div class="bodBott">
                 <ul class="bodData clear">
                   <li class="bodList">
                     <span class="number">2009</span>
                     <span class="desName">Established</span>
                   </li>
                   <li class="bodList">
                     <span class="number">>2000</span>
                     <span class="desName">Company Size</span>
                   </li>
                   <li class="bodList">
                     <span class="number">5</span>
                     <span class="desName">Open Positions</span>
                   </li>
                 </ul>
               </div>
             </div>
             <div class="swiper-slide">
               <i class="colorBor2"></i>
               <img src="../assets/img/index/web-icon-logo-2.png" alt="">
               <h3 class="schoolTitle">First Leap China</h3>
               <p class="bodDes">
                 A business unit of TAL Education Group (
                 NYSE, TAL), established in Beijing in 2009.
               </p>
               <div class="bodBott">
                 <ul class="bodData clear">
                   <li class="bodList">
                     <span class="number">2009</span>
                     <span class="desName">Established</span>
                   </li>
                   <li class="bodList">
                     <span class="number">>2000</span>
                     <span class="desName">Company Size</span>
                   </li>
                   <li class="bodList">
                     <span class="number">5</span>
                     <span class="desName">Open Positions</span>
                   </li>
                 </ul>
               </div>
             </div>
             <div class="swiper-slide">
               <i class="colorBor3"></i>
               <img src="../assets/img/index/web-icon-logo-3.png" alt="">
               <h3 class="schoolTitle">First Leap China</h3>
               <p class="bodDes">
                 A business unit of TAL Education Group (
                 NYSE, TAL), established in Beijing in 2009.
               </p>
               <div class="bodBott">
                 <ul class="bodData clear">
                   <li class="bodList">
                     <span class="number">2009</span>
                     <span class="desName">Established</span>
                   </li>
                   <li class="bodList">
                     <span class="number">>2000</span>
                     <span class="desName">Company Size</span>
                   </li>
                   <li class="bodList">
                     <span class="number">5</span>
                     <span class="desName">Open Positions</span>
                   </li>
                 </ul>
               </div>
             </div>
           </div>
         </div>
         <a href="javascript:;" class="linkBut meet1 draw1">
           View All
           <span class="top-border"></span>
           <span class="right-border"></span>
           <span class="bottom-border"></span>
           <span class="left-border"></span>
         </a>
       </div>
     </div>

     <div class="life">
       <div class="auto">
         <div class="life-container" v-swiper:mySwiper1="swiperOption1">
           <div class="swiper-wrapper clear">
             <div class="swiper-slide clear">
               <img src="../assets/img/index/web-working-in-China-2.jpg" alt="">
               <div class="slide-right">
                 <h3 class="lifeTitle">Live in China</h3>
                 <p class="slideDes">
                   Living in China is more exciting than many
                   think. Cities are bustling with restaurants, bars,
                   shopping & entertainment. Gyms, activity clubs
                   & social groups make it easy to make friends.
                   Beyond a busy social life, expat salaries
                   typically allow a comfortable lifestyle, a modern
                   apartment & money to save!
                 </p>
                 <a href="javascript:;" class="slide-link meet1 draw1">
                   Learn More
                   <span class="top-border"></span>
                   <span class="right-border"></span>
                   <span class="bottom-border"></span>
                   <span class="left-border"></span>
                 </a>
               </div>
             </div>
             <div class="swiper-slide clear">
               <img src="../assets/img/index/web-working-in-China-3.jpg" alt="">
               <div class="slide-right">
                 <h3 class="lifeTitle">Live in China</h3>
                 <p class="slideDes">
                   Living in China is more exciting than many
                   think. Cities are bustling with restaurants, bars,
                   shopping & entertainment. Gyms, activity clubs
                   & social groups make it easy to make friends.
                   Beyond a busy social life, expat salaries
                   typically allow a comfortable lifestyle, a modern
                   apartment & money to save!
                 </p>
                 <a href="javascript:;" class="slide-link meet1 draw1">
                   Learn More
                   <span class="top-border"></span>
                   <span class="right-border"></span>
                   <span class="bottom-border"></span>
                   <span class="left-border"></span>
                 </a>
               </div>
             </div>
             <div class="swiper-slide clear">
               <img src="../assets/img/index/web-working-in-China-4.jpg" alt="">
               <div class="slide-right">
                 <h3 class="lifeTitle">Live in China</h3>
                 <p class="slideDes">
                   Living in China is more exciting than many
                   think. Cities are bustling with restaurants, bars,
                   shopping & entertainment. Gyms, activity clubs
                   & social groups make it easy to make friends.
                   Beyond a busy social life, expat salaries
                   typically allow a comfortable lifestyle, a modern
                   apartment & money to save!
                 </p>
                 <a href="javascript:;" class="slide-link meet1 draw1">
                   Learn More
                   <span class="top-border"></span>
                   <span class="right-border"></span>
                   <span class="bottom-border"></span>
                   <span class="left-border"></span>
                 </a>
               </div>
             </div>
           </div>
         </div>
         <div class="swiper-pagination swiper-pagination-life"></div>
       </div>
     </div>
     <div class="ipLife">
       <ul class="lifeTab">
         <li class="lifeList clear">
           <span class="ipImg"></span>
           <div class="list-right">
             <h3 class="lifeTitle">Live in China</h3>
             <p class="slideDes">
               Living in China is more exciting than many
               think. Cities are bustling with restaurants, bars,
               shopping & entertainment. Gyms, activity clubs
               & social groups make it easy to make friends.
               Beyond a busy social life, expat salaries
               typically allow a comfortable lifestyle, a modern
               apartment & money to save!
             </p>
           </div>
         </li>
         <li class="lifeList clear">
           <span class="ipImg1"></span>
           <div class="list-right">
             <h3 class="lifeTitle">Travel in China</h3>
             <p class="slideDes">
               Living in China is more exciting than many think. Cities are bustling                with restaurants, bars, shopping & entertainment. Gyms, activity clubs &              social groups make it easy to make friends. Beyond a busy social life,                expat salaries typically allow a comfortable lifestyle, a modern                      apartment & money to save!
             </p>
           </div>
         </li>
         <li class="lifeList clear">
           <span class="ipImg2"></span>
           <div class="list-right">
           <h3 class="lifeTitle">Work in China</h3>
           <p class="slideDes">
             Living in China is more exciting than many
             think. Cities are bustling with restaurants, bars,
             shopping & entertainment. Gyms, activity clubs
             & social groups make it easy to make friends.
             Beyond a busy social life, expat salaries
             typically allow a comfortable lifestyle, a modern
             apartment & money to save!
           </p>
           </div>
         </li>
       </ul>
     </div>
     <!--people模块-->
     <div class="videoBox" v-show="video1">
       <video id="myVideo1" src="http://careerchina-material.oss-us-west-1.aliyuncs.com/video/92d5c4a7-5894-439e-9150-f6d270bcc96e.mp4" width="100%" height="100%" controls></video>
     </div>
     <div class="videoBox" v-show="video2">
       <video id="myVideo2" src="http://careerchina-material.oss-us-west-1.aliyuncs.com/video/48ec01e1-499a-42a7-a80d-4ba0701e9f7a.mp4" width="100%" height="100%" controls></video>
     </div>
     <div class="videoBox" v-show="video3">
       <video id="myVideo3" src="http://careerchina-material.oss-us-west-1.aliyuncs.com/video/43aba01b-3fb3-413e-b89c-5eb0a04a4074.mp4" width="100%" height="100%" controls></video>
     </div>
     <div class="people">
       <div class="auto">
         <el-carousel :interval="5000" type="card" :autoplay=false height=230px arrow="always" :initial-index=1>
           <el-carousel-item>
             <div class="slide" @click="videoTwo">
               <img src="../assets/img/index/web-working-in-China-9.jpg" alt="">
               <i class="people-play-icon"></i>
               <div class="bannerDes">
                 <p class="peopleDes">
                   “I was tired of the same mundane routine, everyday doing the same thing. I wanted adventure, I wanted excitement.
  So I figured China would do that for me.”
                 </p>
                 <span class="name">
                   —— Thea from Tampa, Florida USA
                 </span>
               </div>
             </div>
             <div class="white"></div>
           </el-carousel-item>
           <el-carousel-item>
             <div class="slide" @click="videoOne">
               <img src="../assets/img/index/web-working-in-China-8.jpg" alt="">
               <i class="people-play-icon"></i>
               <div class="bannerDes">
                 <p class="peopleDes">
                   “I was tired of the same mundane routine, everyday doing the same thing. I wanted adventure, I wanted excitement.
  So I figured China would do that for me.”
                 </p>
                 <span class="name">
                 —— Thea from Tampa, Florida USA
               </span>
               </div>
             </div>
             <div class="white"></div>
           </el-carousel-item>
           <el-carousel-item>
             <div class="slide" @click="videoThree">
               <img src="../assets/img/index/web-working-in-China-10.jpg" alt="">
               <i class="people-play-icon"></i>
               <div class="bannerDes">
                 <p class="peopleDes">
                   “I was tired of the same mundane routine, everyday doing the same thing. I wanted adventure, I wanted excitement.
  So I figured China would do that for me.”
                 </p>
                 <span class="name">
                 —— Thea from Tampa, Florida USA
               </span>
               </div>
             </div>
             <div class="white"></div>
           </el-carousel-item>
         </el-carousel>
       </div>

     </div>
     <!--service,companies模块-->
     <div class="serCom">
       <div class="auto">
         <div class="ser">
           <h2 class="serTitle">Services You (and Your Family) Can Trust</h2>
           <p class="serDes">
             Career China makes it easy to ﬁnd a secure job in China with a reputable company. We’re here for you every step of the way,
ensuring a comfortable transition to your life in China.
           </p>
           <ul class="serTab clear">
             <li class="serList">
               <span class="iconBack1">
                 <i class="sericon1"></i>
               </span>
               <span class="iconDes">Visa Walkthrough</span>
             </li>
             <li class="serList">
               <span class="iconBack2">
                 <i class="sericon2"></i>
               </span>
               <span class="iconDes">Career Advice</span>
             </li>
             <li class="serList">
               <span class="iconBack3">
                 <i class="sericon3"></i>
               </span>
               <span class="iconDes">Health Insurance</span>
             </li>
             <li class="serList">
               <span class="iconBack4">
                 <i class="sericon4"></i>
               </span>
               <span class="iconDes">Airport Pickup</span>
             </li>
             <li class="serList">
               <span class="iconBack5">
                 <i class="sericon5"></i>
               </span>
               <span class="iconDes">Apartment Advice</span>
             </li>
             <li class="serList">
               <span class="iconBack6">
                 <i class="sericon6"></i>
               </span>
               <span class="iconDes">Banking Support</span>
             </li>
             <li class="serList">
               <span class="iconBack7">
                 <i class="sericon7"></i>
               </span>
               <span class="iconDes">Phone/SIM Help</span>
             </li>
             <li class="line1"></li>
             <li class="line2"></li>
             <li class="line3"></li>
             <li class="line4"></li>
             <li class="line5"></li>
           </ul>

           <ul class="phone-ser-tab clear">
             <li class="phone-list">
               <span class="phone-iconBack1">
                 <i class="phone-sericon1"></i>
               </span>
               <span class="iconDes">Visa Walkthrough</span>
             </li>
             <li class="phone-list">
               <span class="phone-iconBack2">
                 <i class="phone-sericon2"></i>
               </span>
               <span class="iconDes">Career Advice</span>
             </li>
             <li class="phone-list">
               <span class="phone-iconBack3">
                 <i class="phone-sericon3"></i>
               </span>
               <span class="iconDes">Health Insurance</span>
             </li>
             <li class="phone-list">
               <span class="phone-iconBack4">
                 <i class="phone-sericon4"></i>
               </span>
               <span class="iconDes">Airport Pickup</span>
             </li>
             <li class="phone-list">
               <span class="phone-iconBack5">
                 <i class="phone-sericon5"></i>
               </span>
               <span class="iconDes">Apartment Advice</span>
             </li>
             <li class="phone-list">
               <span class="phone-iconBack6">
                 <i class="phone-sericon6"></i>
               </span>
               <span class="iconDes">Banking Support</span>
             </li>
             <li class="phone-list">
               <span class="phone-iconBack7">
                 <i class="phone-sericon7"></i>
               </span>
               <span class="iconDes">Phone/SIM Help</span>
             </li>
           </ul>

           <a href="javascript:;" class="serLink meet1 draw1">
             Learn More
             <span class="top-border"></span>
             <span class="right-border"></span>
             <span class="bottom-border"></span>
             <span class="left-border"></span>
           </a>
         </div>
         <div class="com">
           <h2 class="comTitle">
             We Only Work With Top Chinese Companies
           </h2>
           <img src="../assets/img/index/web-icon-logo.jpg" alt="">
           <a href="javascript:;" class="comLink meet1 draw1">
             Register As Employer
             <span class="top-border"></span>
             <span class="right-border"></span>
             <span class="bottom-border"></span>
             <span class="left-border"></span>
           </a>
         </div>
       </div>
     </div>

     <v-submitEmail></v-submitEmail>
     <v-goTop></v-goTop>
     <v-footer></v-footer>
   </div>
</template>

<script type="text/ecmascript-6">
  import $ from 'jquery'
  import Vue from 'vue'
  import VueResource from 'vue-resource';
  import '../assets/css/reset.min.css'
  import nav from '../components/public/nav/nav'
  import submitEmail from '../components/public/submit/submitEmail'
  import footer from '../components/public/footer/footer'
  import goTop from '../components/public/goTop/goTop'
  if (process.BROWSER_BUILD) {
    const VueAwesomeSwiper = require('vue-awesome-swiper/ssr');
    Vue.use(VueAwesomeSwiper);
    Vue.use(VueResource);
  }
  export default{
    head:{
      title:'TEFL / ESL / TESOL | Teach English Jobs in China',
      link:[
        { rel: 'stylesheet', href: 'https://unpkg.com/element-ui/lib/theme-default/index.css' }
      ],
      meta:[
        { name: 'keywords', content: 'teaching jobs in china,TEFL in china jobs,TESOL jobs in china,english teaching jobs in china,ESL teaching jobs in china,teach english in china,ESL jobs china,ESL Job abroad,TESOL teaching jobs,TEFL teaching abroad'},
        { name: 'description', content: 'CareerChina - the latest TEFL/ESL/TESOL teaching jobs in China for 2017. Apply today and start your teaching adventure abroad.'}
      ]
    },
      data(){
          return{
            maskblock:false,
            clickPlay:false,
            video1:false,
            video2:false,
            video3:false,
            swiperOption: {
              autoplay: 5000,
              initialSlide: 1,
              loop: true,
              pagination: '.swiper-pagination',
              width:333,
              paginationType : 'progress',
              autoplayDisableOnInteraction : false,
              paginationProgressRender: function (swiper, progressbarClass) {
                return '<span class="' + progressbarClass + '"></span>';
              }
            },
            swiperOption1:{
              autoplay: 6000,
              initialSlide: 0,
              loop:true,
              pagination: '.swiper-pagination',
              paginationClickable :true,
              autoplayDisableOnInteraction : false,
              paginationBulletRender: function (swiper, index, className) {
                return '<li class="' + className + ' imgBor"><span class="imgPage"></span><span class="top-border"></span><span class="right-border"></span><span class="bottom-border"></span><span class="left-border"></span></li>';
              }
            },
          }
      },
    components:{
        'v-nav':nav,
        'v-submitEmail':submitEmail,
      'v-footer':footer,
      'v-goTop':goTop
    },
    methods:{
      watchW(){
          return $(document).width()
      },
      play(){
        this.clickPlay=true;
        this.maskblock=true;
        document.getElementById('myVideo').play()
      },
      playNo(){
        this.clickPlay=false;
        this.video1=false;
        this.video2=false;
        this.video3=false;
        this.maskblock=false;
        document.getElementById('myVideo').pause();
        document.getElementById('myVideo1').pause();
        document.getElementById('myVideo2').pause();
        document.getElementById('myVideo3').pause()
      },
      videoOne(){
        this.video1=true;
        this.maskblock=true;
        document.getElementById('myVideo1').play()
      },
      videoTwo(){
        this.video2=true;
        this.maskblock=true;
        document.getElementById('myVideo2').play()
      },
      videoThree(){
        this.video3=true;
        this.maskblock=true;
        document.getElementById('myVideo3').play()
      },
    },
    created(){

    },
    mounted(){
    },
  }
</script>

<style>

  .herBan{
    width: 100%;
    height: 680px;
    background-image: linear-gradient(135deg, #19DFE8 0%, #4889FF 54%, #4B4DFF 100%);
  }
  .auto{
    position: relative;
    width: 1040px;
    margin: auto;
  }
  .auto h2{
    font-size: 26px;
    color: #333435;
    font-weight: bold;
    text-align: center;
  }
  .herL{
    float: left;
    width: 532px;
    padding-top: 170px;
  }
  .herL .playM{
    margin: auto;
    width: 50px;
    height: 50px;
    background: url("../assets/img/index/web-icon-player-normal.png")no-repeat;
    cursor: pointer;
    border-radius: 50%;
    display: none;
  }
  .herL .playM:hover{
    box-shadow: 0 4px 8px rgba(0,0,0,.4);
  }
  .herL .webH1,.mH1{
    font-family: AvenirNext-Bold;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 62px;
  }
  .herL .webH1{
    display: block;
    font-size: 50px;
  }
  .herL .mH1{
    display: none;
    margin:20px 0 18px 0;
    font-size: 32px;
    text-align: center;
  }
  .herL .play{
    display: block;
    margin: 16px 0 20px 0;
    width: 50px;
    height: 50px;
    background: url("../assets/img/index/web-icon-player-normal.png")no-repeat;
    cursor: pointer;
    border-radius: 50%;
  }
  .herL .play:hover{
    box-shadow: 0 4px 8px rgba(0,0,0,.4);
  }
  .herL .herDes{
    font-size: 16px;
    color: #fff;
    line-height: 26px;
    /*text-align: center;*/
  }
  .herL .herDes1{
    font-size: 14px;
    color: #fff;
    line-height: 16px;
    display: none;
    text-align: center;
  }
  .herL .link{
    margin-top: 30px;
    font-size: 0;
  }
  .herR{
    padding-top: 173px;
    float: right;
  }
  .herR img{
    width: 508px;
  }
  .draw{
    position: relative;
    display: inline-block;
    margin-right: 20px;
    width: 200px;
    height: 44px;
    line-height: 44px;
    border-radius: 2px;
    text-transform: capitalize;
    border: 0;
    box-sizing: border-box;
    box-shadow: inset 0 0 0 1px rgba(255,255,255,.6);
    text-align: center;
    font-size: 14px;
    color: #fff;
    font-weight: bold;
  }
  .draw::before, .draw::after {
    box-sizing: border-box;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .draw {
    -webkit-transition: color 0.25s;
    transition: color 0.25s;
  }
  .draw::before, .draw::after {
    border-radius: 2px;
    width: 0;
    height: 0;
  }
  .draw::before {
    top: 0;
    left: 0;
  }
  .draw::after {
    bottom: 0;
    right: 0;
  }
  .draw:hover::before, .draw:hover::after {
    width: 100%;
    height: 100%;
  }
  .meet:hover::before {
    border-top:2px solid #fff;
    border-right:2px solid #fff;
    -webkit-transition: width 0.25s ease-out 0s, height 0.125s ease-out 0.25s;
    transition: width 0.25s ease-out 0s, height 0.125s ease-out 0.25s;
  }
  .meet:hover::after {
    border-bottom:2px solid #fff;
    border-left:2px solid #fff;
    -webkit-transition: width 0.25s ease-out 0.375s , height 0.125s ease-out .625s;
    transition: width 0.25s ease-out 0.375s , height 0.125s ease-out .625s;
  }
  .herL .link a:last-child{
    margin-right: 0;
  }

  .featured{
    padding-bottom: 22px;
  }
  .feaTitle{
    margin: 90px 0 72px 0;
  }
  .container,.container1{
    width: 100%;
  }
  .container{
    display: none;
  }
  .container1{
    display: block;
  }
  .swiper,.swiper-wrapper{
    width: 100%;
  }
  .swiper-slide{
    float: left;
    width: 333px;
    margin-right: 20px;
    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.08);
    background: #fff;
  }
  .colorBor1,.colorBor2,.colorBor3{
    display: block;
    width: 100%;
    height: 4px;
  }
  .colorBor1{
    background-image: -webkit-linear-gradient(45deg, #4ED1E1 0%, #58DEA4 100%);
  }
  .colorBor2{
    background-image: -webkit-linear-gradient(45deg, #F57D4A 0%, #EDBA4E 100%);
  }
  .colorBor3{
    background-image: -webkit-linear-gradient(-135deg, #C56FF1 0%, #F8566A 100%);
  }
  .swiper-slide:hover{
    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.12);
  }
  .swiper-slide:last-child{
    margin-right: 0;
  }
  .swiper-slide img{
    display: block;
    margin:18px auto;
  }
  .swiper-slide .schoolTitle{
    margin: 18px 0 14px 0;
    font-size: 18px;
    color: #333435;
    text-align: center;
  }
  .swiper-slide .bodDes{
    padding: 0 20px;
    font-size: 14px;
    color: #989898;
    line-height: 16px;
  }
  .bodBott{
    padding: 0 20px;
  }
  .swiper-slide .bodData{
    padding: 20px 0 26px 0;
    border-top: 1px dashed #D6D6E5;
    margin-top: 27.5px;
  }
  .swiper-slide .bodData .bodList{
    float: left;
    width: 33%;
  }
  .swiper-slide .bodData .bodList span{
    display: block;
    text-align: center;
  }
  .swiper-slide .bodData .bodList .number{
    margin-bottom: 7px;
    font-size: 16px;
    color: #333435;
  }
  .swiper-slide .bodData .bodList .desName{
    font-size: 12px;
    color: #989898;
  }
  .swiper-slide .bodData .bodList:last-child{
    margin-right: 0;
  }
  .linkBut{
    position: relative;
    display: block;
    margin: 68px auto;
    width: 230px;
    height: 44px;
    line-height: 44px;
    text-align: center;
    font-size: 14px;
    color: #333435;
    /*border: 0;
    box-shadow: inset 0 0 0 1px rgba(0,0,0,.6);*/
    border: 1px solid;
    border-image: -webkit-linear-gradient( 135deg, #19DFE8 0% , #4B4DFF 100%) 20 20;
    border-image: -moz-linear-gradient( 135deg, #19DFE8 0% , #4B4DFF 100%) 20 20;
    border-image: linear-gradient(  135deg, #19DFE8 0% , #4B4DFF 100%) 20 20;
  }
  .life{
    width: 100%;
    padding: 90px 0;
    background: #F3F6FB;
  }
  .life-container{
    width: 870px;
    height: 490px;
    background: #FFFFFF;
    border: 1px solid #E9EEFC;
    box-shadow: 0 6px 16px 0 rgba(122,139,168,0.16);
    overflow: hidden;
  }
  .life-container .swiper-wrapper{
    width: 4350px;
  }
  .life-container .swiper-wrapper .swiper-slide{
    margin-right: 0;
    height: 490px;
  }
  .life-container .swiper-wrapper .swiper-slide img{
    float: left;
    margin: 20px 80px 0 20px;
  }
  .life-container .swiper-wrapper .swiper-slide .slide-right{
    float: left;
    width: 307px;
  }
  .life-container .swiper-wrapper .swiper-slide .slide-right .lifeTitle{
    margin: 90px 0 30px 0;
    font-size: 26px;
    color: #333435;
    letter-spacing: 0;
  }
  .life-container .swiper-wrapper .swiper-slide .slide-right .slideDes{
    font-size: 14px;
    line-height: 20px;
    color: #989898;
    letter-spacing: 0;
  }
  .life-container .swiper-wrapper .swiper-slide .slide-right .slide-link{
    display: block;
    position: relative;
    margin-top: 45px;
    width: 230px;
    height: 44px;
    line-height: 44px;
    border: 1px solid;
    border-image: -webkit-linear-gradient( 135deg, #19DFE8 0% , #4B4DFF 100%) 20 20;
    border-image: -moz-linear-gradient( 135deg, #19DFE8 0% , #4B4DFF 100%) 20 20;
    border-image: linear-gradient(  135deg, #19DFE8 0% , #4B4DFF 100%) 20 20;
    border-radius: 2px;
    text-align: center;
    font-size: 14px;
    color: #333435;
  }
  .swiper-pagination-life{
    position: absolute;
    top:0;
    right: 0;
  }
  .swiper-pagination-life .imgBor{
    margin-top: 20px;
    width: 150px;
    height: 150px;
    padding: 15px;
    background: #fff;
    cursor: pointer;
    border: 1px solid #E9EEFC;
    box-shadow: 0 6px 16px 0 rgba(153,173,208,0.16);
  }
  .swiper-pagination-life .swiper-pagination-bullet-active{
    position: relative;
  }
  .swiper-pagination-life .swiper-pagination-bullet-active .top-border{
    position: absolute;
    top:-1px;
    left: 0;
    width: 149px;
    height: 2px;
    background-image: linear-gradient(  135deg, #19DFE8 0% , #4889FF 100%);
    border-radius: 2px;
    animation: borderMoveWidth 1.5s linear 4.5s 1;
    -webkit-animation: borderMoveWidth 1.5s linear 4.5s 1;
    animation-fill-mode: forwards;
    -webkit-animation-fill-mode: forwards;
  }
  .swiper-pagination-life .swiper-pagination-bullet-active .right-border{
    position: absolute;
    top:0;
    right: -1px;
    width: 2px;
    height: 149px;
    background-image: linear-gradient(  135deg, #4889FF 0% , #4B4DFF 100%);
    border-radius: 2px;
    animation: borderMoveHeight 1.5s linear 3s 1;
    -webkit-animation: borderMoveHeight 1.5s linear 3s 1;
    animation-fill-mode: forwards;
    -webkit-animation-fill-mode: forwards;
  }
  .swiper-pagination-life .swiper-pagination-bullet-active .bottom-border{
    position: absolute;
    bottom:-1px;
    right: 0;
    width: 149px;
    height: 2px;
    background-image: linear-gradient(  270deg, #4B4DFF 0% , #4889FF 100%);
    border-radius: 2px;
    animation: borderMoveWidth 1.5s linear 1.5s 1;
    -webkit-animation: borderMoveWidth 1.5s linear 1.5s 1;
    animation-fill-mode: forwards;
    -webkit-animation-fill-mode: forwards;
  }
  .swiper-pagination-life .swiper-pagination-bullet-active .left-border{
    position: absolute;
    bottom:0;
    left: -1px;
    width: 2px;
    height: 149px;
    border-radius: 2px;
    background-image: linear-gradient(  45deg, #4889FF 0% , #19DFE8 100%);
    animation: borderMoveHeight 1.5s linear 0s 1;
    -webkit-animation: borderMoveHeight 1.5s linear 0s 1;
    animation-fill-mode: forwards;
    -webkit-animation-fill-mode: forwards;
  }
  @keyframes borderMoveWidth {
    from{
      width: 149px;
    }
    to {
      width: 0;
    }
  }
  @-webkit-keyframes borderMoveWidth {
    from{
      width: 149px;
    }
    to {
      width: 0;
    }
  }
  @keyframes borderMoveHeight {
    from{
      height: 149px;
    }
    to {
      height: 0;
    }
  }
  @-webkit-keyframes borderMoveHeight {
    from{
      height: 149px;
    }
    to {
      height: 0;
    }
  }

  .swiper-pagination-life .imgBor:first-child{
    margin-top: 0;
  }
  .swiper-pagination-life .imgBor .imgPage{
    display: block;
    width: 120px;
    height: 120px;
  }
  .swiper-pagination-life .imgBor:first-child .imgPage{
    background: url("../assets/img/index/ipad-working-in-China-5.png")no-repeat center;
  }
  .swiper-pagination-life .imgBor:nth-child(2) .imgPage{
    background: url("../assets/img/index/ipad-working-in-China-6.png")no-repeat center;
  }
  .swiper-pagination-life .imgBor:last-child .imgPage{
    background: url("../assets/img/index/ipad-working-in-China-7.png")no-repeat center;
  }
  .ipLife{
    width: 768px;
    height: 760px;
    padding: 60px 20px;
    background: #F3F6FB;
    display: none;
  }
  .ipLife .lifeList{
    margin-bottom: 20px;
    padding: 20px;
    width: 100%;
    height: 200px;
    background: #FFFFFF;
    border: 1px solid #E9EEFC;
    box-shadow: 0 6px 16px 0 rgba(153,173,208,0.16);
  }
  .ipLife .lifeList:last-child{
    margin-bottom: 0;
  }
  .ipLife .lifeList .ipImg,.ipImg1,.ipImg2{
    float: left;
    width: 160px;
    height: 160px;
    margin-right: 20px;
  }
  .ipLife .lifeList .ipImg{
    background: url("../assets/img/index/ipad-working-in-China-5.png")no-repeat center;
  }
  .ipLife .lifeList .ipImg1{
    background: url("../assets/img/index/ipad-working-in-China-6.png")no-repeat center;
  }
  .ipLife .lifeList .ipImg2{
    background: url("../assets/img/index/ipad-working-in-China-7.png")no-repeat center;
  }
  .ipLife .lifeList .list-right{
    float: left;
    width: 494px;
  }
  .ipLife .lifeList .list-right .lifeTitle{
    margin: 15px 0 20px 0;
    font-size: 16px;
    color: #333435;
  }
  .ipLife .lifeList .list-right .slideDes{
    font-size: 14px;
    color: #989898;
    line-height: 18px;
  }

  .people{
    width: 100%;
    height: 600px;
    background-image: linear-gradient(135deg, #19DFE8 0%, #4889FF 54%, #4B4DFF 100%);
    padding: 100px 0;
  }
  .el-carousel{
    width: 580px;
    margin: auto;
    overflow-x: inherit !important;
  }
  .el-carousel__item{
    overflow: inherit !important;
  }
  .el-carousel__item--card.is-active{
    width: 380px;
    transform: translateX(100px) scale(1) !important;
  }
  .el-carousel__mask{
    background: #000;
    opacity: .4;
    filter: alpha(opacity=40);
    z-index: 2;
  }
  .el-carousel__arrow--left,.el-carousel__arrow--right{
    width: 25px;
    height: 45px;
    position: absolute;
    opacity: .8;
    top:179px;
  }
  .el-carousel__arrow--left{
    left: -230px;
    background: url("../assets/img/index/web-icon-arrow-left-normal.png")no-repeat center;
  }
  .el-carousel__arrow:hover{
    opacity: 1;
    background-color: inherit;
  }
  .el-icon-arrow-left,.el-icon-arrow-right{
    display: none;
  }
  .el-carousel__arrow--right{
    right: -230px;
    background: url("../assets/img/index/web-icon-arrow-right-normal.png")no-repeat center;
  }
  .el-carousel__indicators--outside{
    position: absolute !important;
    bottom: -168px;
    height: 10px;
    margin-left: -30px;
  }
  .el-carousel__indicator{
    width: 10px;
    height: 10px;
    border: 1px solid #fff;
    border-radius: 50%;
    padding: 0;
    margin-right: 15px;
  }
  .el-carousel__indicator:last-child{
    margin-right: 0;
  }
  .el-carousel__button{
    display: none;
  }
  .is-active{
    background: #fff;
  }
  .el-carousel__item .slide .bannerDes{
    display: none;
  }
  .is-active .slide .bannerDes{
    display: block;
  }
  .slide{
    overflow: hidden;
  }
  .bannerDes{
    position: absolute;
    width: 728px;
    bottom: -124px;
    left: 50%;
    margin-left: -364px;
  }
  .bannerDes .peopleDes{
    margin-bottom: 26px;
    font-size: 14px;
    color: #fff;
    text-align: center;
    line-height: 22px;
  }
  .bannerDes .name{
    display: block;
    font-size: 12px;
    color: #fff;
    text-align: center;
  }
  .el-carousel__item .white{
    position: absolute;
    top:6px;
    right:0;
    width: 6px;
    height: 218px;
    background: #fff;
    /*opacity: .4;
    filter:alpha(opacity=40)*/
  }
  .el-carousel__item:hover .white{
    opacity: 1;
    filter:alpha(opacity=100)
  }
  .maskblock{
    width: 100%;
    height: 100%;
    position:fixed;
    top:0;
    left: 0;
    overflow: hidden;
    background:rgba(0,0,0,.4) ;
    z-index: 50;
  }
  .videoBox{
    width: 800px;
    height: 400px;
    position: fixed;
    top:50%;
    left: 50%;
    margin-top: -200px;
    margin-left: -400px;
    z-index: 99;
    background: #000;
  }
  .people .people-play-icon{
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -25px;
    margin-left: -25px;
    width: 50px;
    height: 50px;
    background: url("../assets/img/index/web-icon-player-normal.png")no-repeat;
    cursor: pointer;
    border-radius: 50%;
  }

  .serCom{
    width: 100%;
    background: #fff;
  }
  .ser{
    width: 100%;
    border-bottom: 1px dashed #D6D6E5;;
    padding-bottom: 90px;
  }
  .ser .serTitle{
    margin: 90px 0 30px 0;
  }
  .ser .serDes{
    width: 784px;
    margin: auto;
    opacity: 0.8;
    font-size: 14px;
    color: #333435;
    text-align: center;
  }
  .ser .serTab{
    position: relative;
    margin: 54px auto;
    width: 889px;
    padding-bottom: 16px;
  }
  .ser .serTab .serList{
    float: left;
    margin-right: 144px;
  }
  .ser .serTab .serList:nth-child(4){
    margin-right: 0;
  }
  .ser .serTab .serList:nth-child(5){
    margin-left: 120px;
    margin-top: 54px;
  }
  .ser .serTab .serList:nth-child(6){
    margin-top: 54px;
  }
  .ser .serTab .serList:nth-child(7){
    margin-right: 0;
    margin-top: 54px;
  }
  .ser .serTab .serList .iconBack1,.iconBack2,.iconBack3,.iconBack4,.iconBack5,.iconBack6,.iconBack7{
    display: block;
    position: relative;
    width: 110px;
    height: 110px;
    border-radius: 50%;
  }
  .ser .serTab .serList .iconBack1,.phone-ser-tab .phone-list .phone-iconBack1{
    background-image: linear-gradient(-180deg, #FFD24F 0%, #F5BF23 100%);
  }
  .ser .serTab .serList .iconBack2,.phone-ser-tab .phone-list .phone-iconBack2{
    background-image: linear-gradient(0deg, #8882F3 0%, #659DFB 100%);
  }
  .ser .serTab .serList .iconBack3,.phone-ser-tab .phone-list .phone-iconBack3{
    background-image: linear-gradient(0deg, #FF7868 0%, #FEA957 100%);
  }
  .ser .serTab .serList .iconBack4,.phone-ser-tab .phone-list .phone-iconBack4{
    background-image: linear-gradient(-180deg, #F172D0 0%, #FA6676 100%);
  }
  .ser .serTab .serList .iconBack5,.phone-ser-tab .phone-list .phone-iconBack5{
    background-image: linear-gradient(0deg, #26BEFA 0%, #6FF3B4 100%);
  }
  .ser .serTab .serList .iconBack6,.phone-ser-tab .phone-list .phone-iconBack6{
    background-image: linear-gradient(0deg, #A57AF0 0%, #E97DE2 100%);
  }
  .ser .serTab .serList .iconBack7,.phone-ser-tab .phone-list .phone-iconBack7{
    background-image: linear-gradient(0deg, #8882F3 0%, #659DFB 100%);
  }
  .ser .serTab .serList .iconBack1 .sericon1,.iconBack2 .sericon2,.iconBack7 .sericon7,.iconBack3 .sericon3,.iconBack4 .sericon4,.iconBack5 .sericon5,.iconBack6 .sericon6{
    position: absolute;
    top: 25px;
    left: 25px;
    width: 60px;
    height: 60px;
  }
  .ser .serTab .serList .iconBack1 .sericon1,.phone-ser-tab .phone-list .phone-iconBack1 .phone-sericon1{
    background: url("../assets/img/index/web-icon-visa.png")no-repeat center center;
    background-size: cover;
  }
  .ser .serTab .serList .iconBack2 .sericon2,.phone-ser-tab .phone-list .phone-iconBack2 .phone-sericon2{
    background: url("../assets/img/index/web-icon-advice.png")no-repeat center center;
    background-size: cover;
  }
  .ser .serTab .serList .iconBack3 .sericon3,.phone-ser-tab .phone-list .phone-iconBack3 .phone-sericon3{
    background: url("../assets/img/index/web-icon-health.png")no-repeat center center;
    background-size: cover;
  }
  .ser .serTab .serList .iconBack4 .sericon4,.phone-ser-tab .phone-list .phone-iconBack4 .phone-sericon4{
    background: url("../assets/img/index/web-icon-airport.png")no-repeat center center;
    background-size: cover;
  }
  .ser .serTab .serList .iconBack5 .sericon5,.phone-ser-tab .phone-list .phone-iconBack5 .phone-sericon5{
    background: url("../assets/img/index/web-icon-apartment.png")no-repeat center center;
    background-size: cover;
  }
  .ser .serTab .serList .iconBack6 .sericon6,.phone-ser-tab .phone-list .phone-iconBack6 .phone-sericon6{
    background: url("../assets/img/index/web-icon-bank.png")no-repeat center center;
    background-size: cover;
  }
  .ser .serTab .serList .iconBack7 .sericon7,.phone-ser-tab .phone-list .phone-iconBack7 .phone-sericon7{
    background: url("../assets/img/index/web-icon-iphone.png")no-repeat center center;
    background-size: cover;
  }
  .ser .serTab .serList .iconDes{
    display: block;
    margin-top: 20px;
    text-align: center;
    font-size: 14px;
    color: #333435;
    font-weight: bold;
  }
  .phone-ser-tab{
    width: 90%;
    margin: 54px auto;
    display: none;
  }
  .phone-ser-tab .phone-list{
    float: left;
    width: 160px;
    font-size: 0;
    margin-right: 20px;
  }
  .phone-ser-tab .phone-list .phone-iconBack1,.phone-iconBack2,.phone-iconBack3,.phone-iconBack4,.phone-iconBack5,.phone-iconBack6,.phone-iconBack7{
    display: inline-block;
    position: relative;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    vertical-align: middle;
    margin:0 10px 14px 0;
  }
  .phone-ser-tab .phone-list .phone-iconBack1 .phone-sericon1,.phone-iconBack2 .phone-sericon2,.phone-iconBack3 .phone-sericon3,.phone-iconBack4 .phone-sericon4,.phone-iconBack5 .phone-sericon5,.phone-iconBack6 .phone-sericon6,.phone-iconBack7 .phone-sericon7{
    position: absolute;
    top: 7.5px;
    left: 7.5px;
    width: 15px;
    height: 15px;
  }
  .phone-ser-tab .phone-list .iconDes{
    display: inline-block;
    font-size: 14px;
    color: #333435;
  }
  .ser .line1,.line2,.line3,.line4,.line5{
    position: absolute;
    width: 140px;
    height: 30px;
  }
  .ser .line1,.line2,.line3{
    background: url("../assets/img/index/web-icon-guide-line-up.png")no-repeat center;
  }
  .ser .line4,.line5{
    background: url("../assets/img/index/web-icon-guide-line-down.png")no-repeat center;
  }
  .ser .line1{
    top: -20px;
    left: 112px;
  }
  .ser .line2{
    top: -20px;
    right:112px;
  }
  .ser .line3{
    right: 248px;
    top: 190px;
  }
  .ser .line4{
    top: 85px;
    left: 374px;
  }
  .ser .line5{
    top: 287px;
    left: 238px;
  }
  .ser .serLink,.com .comLink{
    display: block;
    position: relative;
    margin: auto;
    width: 230px;
    height: 44px;
    border: 1px solid;
    border-image: -webkit-linear-gradient( 135deg, #19DFE8 0% , #4B4DFF 100%) 20 20;
    border-image: -moz-linear-gradient( 135deg, #19DFE8 0% , #4B4DFF 100%) 20 20;
    border-image: linear-gradient(  135deg, #19DFE8 0% , #4B4DFF 100%) 20 20;
    border-radius: 2px;
    text-align: center;
    line-height: 44px;
    font-size: 14px;
    color: #333435;
    font-weight: bold;
  }
  .com{
    width: 100%;
    padding: 90px 0;
  }
  .com .comTitle{

  }
  .com img{
    display: block;
    margin: 76px 15px;
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
  @media (max-width: 768px) {
    .herBan{
      height: 434px;
    }
    .auto{
      width: 100%;
    }
    .herL{
      padding-top: 110px;
      float: inherit;
      width: 100%;
    }
    .herL .playM{
      display: block;
    }
    .herL .play{
      display: none;
    }
    .herL .webH1{
      display: none;
    }
    .herL .mH1{
      display: block;
    }
    .herL .herDes{
      font-size: 16px;
      text-align: center;
    }
    .herL .link{
      margin: 40px auto;
      width: 420px;
    }
    .herR{
      display: none;
    }

    .featured{
      padding-bottom:12px;
    }
    .auto h2{
      font-size: 16px;
    }
    .feaTitle{
      margin: 60px 0 50px 0;
    }
    .swiper-slide .schoolTitle{
      margin: 0 0 18px 0;
      font-size: 15px;
    }
    .swiper-slide .bodDes{
      font-size: 13px;
      line-height: 15px;
    }
    .feaLink{
      margin: 48px auto;
    }
    .container1{
      display: none;
    }
    .container{
      display: block;
      overflow: hidden;
      height: 355px;

    }
    .swiper-wrapper{
      width: 1745px;
      -webkit-font-smoothing: initial;
    }
    .life{
      display: none;
    }
    .ipLife{
      display: block;
    }

    .ser{
      padding-bottom: 60px;
    }
    .ser .serTitle{
      margin: 60px 0 30px 0;
    }
    .ser .serDes{
      font-size: 12px;
      line-height: 14px;
      width: 98%;
    }
    .ser .serTab{
      margin: 50px auto;
      width: 647px;
      padding-bottom: 0;
    }
    .ser .serTab .serList{
      margin-right: 70px;
    }
    .ser .serTab .serList:nth-child(5){
      margin-left: 80px;
    }
    .ser .serTab .serList .iconBack1,.iconBack2,.iconBack3,.iconBack4,.iconBack5,.iconBack6,.iconBack7{
      width: 100px;
      height: 100px;
    }
    .ser .serTab .serList .iconBack1 .sericon1,.iconBack2 .sericon2,.iconBack7 .sericon7,.iconBack3 .sericon3,.iconBack4 .sericon4,.iconBack5 .sericon5,.iconBack6 .sericon6{
      top:20px;
      left:20px;
    }
    .ser .line1,.line2,.line3,.line4,.line5{
      width: 120px;
    }
    .ser .line1{
      left: 86px;
    }
    .ser .line2{
      right:86px;
    }
    .ser .line3{
      right: 173px;
      top: 175px;
    }
    .ser .line4{
      top: 90px;
      left: 259px;
    }
    .ser .line5{
      top: 276px;
      left: 162px;
    }
    .com{
      padding: 60px 0;
    }
    .com img{
      width: 95%;
      margin: 45px auto;
    }
    .people{
      padding: 60px 0;
      height: 520px;
    }
    .videoBox{
      width: 600px;
      height: 300px;
      margin-top: -150px;
      margin-left: -300px;
    }
  }
  @media (max-width: 598px){
    .herBan{
      height: 420px;
    }
    .herL{
      padding-top: 100px;
    }
    .herL .mH1{
      margin: 25px 0 10px 0;
      font-size: 18px;
      line-height: 23px;
    }
    .herL .herDes{
      display: none;
    }
    .herL .herDes1{
      display: block;
    }
    .herL .link{
      width: 200px;
      margin: 25px auto;
    }
    .draw{
      display: block;
      margin-right: 0;
      margin-top: 14px;
    }

    .ser .serDes{
      display: none;
    }
    .ser .serTab{
      display: none;
    }
    .phone-ser-tab{
      display: block;
      width: 96%;
    }
    .videoBox{
      width: 600px;
      height: 300px;
      margin-top: -150px;
      margin-left: -300px;
    }
  }
  @media (max-width: 415px){
    .el-carousel{
      width: 94%;
    }
    .el-carousel__item--card.is-active{
      width: 80%;
      transform: translateX(12%) scale(1) !important;
    }
    .bannerDes{
      width: 120%;
      bottom: -148px;
      left: -10%;
      margin-left: 0;
    }
    .bannerDes .peopleDes{
      margin-bottom: 14px;
    }
    .videoBox{
      width: 300px;
      height: 150px;
      margin-top: -75px;
      margin-left: -150px;
    }
    .ipLife{
      width: 100%;
      height: inherit;
      padding: 10px;
    }
    .ipLife .lifeList{
      height: inherit;
      margin-bottom: 10px;
    }
    .ipLife .lifeList .ipImg,.ipImg1,.ipImg2{
      float: inherit;
      width: 100%;
      display: block;
    }
    .ipLife .lifeList .ipImg{
      background: url("../assets/img/index/phone-working-in-China-2.jpg")no-repeat center;
    }
    .ipLife .lifeList .ipImg1{
      background: url("../assets/img/index/phone-working-in-China-3.jpg")no-repeat center;
    }
    .ipLife .lifeList .ipImg2{
      background: url("../assets/img/index/phone-working-in-China-4.jpg")no-repeat center;
    }
    .ipLife .lifeList .list-right{
      float: inherit;
      width: 100%;
    }
    .ipLife .lifeList .list-right .lifeTitle{
      margin: 20px 0 10px 4px;
    }
    .ipLife .lifeList .list-right .slideDes{
      margin-left: 4px;
    }
  }
</style>
