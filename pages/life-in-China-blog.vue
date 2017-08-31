<template>
   <div class="life-blog">
     <v-nav></v-nav>
     <v-seNav></v-seNav>
     <div class="auto clear">
       <div class="heLeft">
         <div class="container" v-swiper:mySwiper="swiperOption">
           <div class="swiper-wrapper clear">
             <div class="swiper-slide slide1">
               <img :src="this.blogData1.faceImg" :alt="this.blogData1.faceImgAlt">
               <div class="textBox">
                 <h2 class="bannerTitle">
                   {{this.blogData1.title}}
                 </h2>
                 <p class="bannerDes">
                   {{this.blogData1.description}}
                 </p>
               </div>
               <i class="swiMask"></i>
             </div>
             <div class="swiper-slide slide2">
               <img :src="this.blogData2.faceImg" :alt="this.blogData2.faceImgAlt">
               <div class="textBox">
                 <h2 class="bannerTitle">
                   {{this.blogData2.title}}
                 </h2>
                 <p class="bannerDes">
                   {{this.blogData2.description}}
                 </p>
               </div>
               <i class="swiMask"></i>
             </div>
             <div class="swiper-slide slide3">
               <img :src="this.blogData3.faceImg" :alt="this.blogData3.faceImgAlt">
               <div class="textBox">
                 <h2 class="bannerTitle">
                   {{this.blogData3.title}}
                 </h2>
                 <p class="bannerDes">
                   {{this.blogData3.description}}
                 </p>
               </div>
               <i class="swiMask"></i>
             </div>
             <div class="swiper-slide slide4">
               <img :src="this.blogData4.faceImg" :alt="this.blogData4.faceImgAlt">
               <div class="textBox">
                 <h2 class="bannerTitle">
                   {{this.blogData4.title}}
                 </h2>
                 <p class="bannerDes">
                   {{this.blogData4.description}}
                 </p>
               </div>
               <i class="swiMask"></i>
             </div>
           </div>
           <div class="swiper-pagination"></div>
         </div>
       </div>
       <div class="heRight">
         <v-sendEmail></v-sendEmail>
       </div>
     </div>
     <div class="blogCon">
       <div class="blogCategory" v-for="categroy in this.categories">
         <div class="categoryTitle">
           <span class="nameBg"></span>
           <h3>{{categroy.categoryName}}</h3>
           <a href="javascript:;" class="more"  @click="seeAll(categroy.id)">
             <span class="see">MORE</span>
             <i class="seeIcon"></i>
           </a>
         </div>
         <div class="blogLine"></div>
         <ul class="categoryTab clear">
           <li class="categoryList clear" v-for="blog in categroy.blogs"  @click="onlyBlog(blog.urlWords)">
             <div class="imgBox">
               <img :src="blog.faceImg" :alt="blog.faceImgAlt">
               <div class="conMask"></div>
             </div>

             <div class="imgIntroduce">
               <h2>
                 {{blog.title}}
               </h2>
               <span class="name">{{blog.authorName}} /&nbsp</span>
               <span class="date"> {{blog.updateTimeStr}}</span>
               <div class="linear"></div>
               <p class="inWord">
                 {{blog.description}}
               </p>
             </div>
           </li>
         </ul>
       </div>
     </div>
     <v-fixSubmit></v-fixSubmit>
     <v-goTop></v-goTop>
     <v-footer></v-footer>
   </div>
</template>

<script type="text/ecmascript-6">
  import $ from 'jquery'
  import Vue from 'vue'
  import VueResource from 'vue-resource';
  import '../assets/css/reset.min.css'
  import interfaceStr from '../assets/js/interface.js';
  import addthis from '../assets/js/addthis.js';
  import nav from '../components/public/nav/nav'
  import seNav from '../components/public/blog-seNav/blog-seNav'
  import footer from '../components/public/footer/footer'
  import goTop from '../components/public/goTop/goTop'
  import sumit from '../components/public/sendEmail/sendEmail'
  import fixSubmit from '../components/public/fixSubmit/fixSubmit'
  var addthis_share = {};
  if (process.BROWSER_BUILD) {
    const VueAwesomeSwiper = require('vue-awesome-swiper/ssr');
    Vue.use(VueAwesomeSwiper);
    Vue.use(VueResource);
  }
  export default{
    data(){
      return{
        blogData1: '',
        blogData2: '',
        blogData3: '',
        blogData4: '',
        categories:'',
        url:'',
        swiperOption: {
          autoplay: 5000,
          initialSlide: 1,
          loop: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          paginationBulletRender: function (swiper, index, className) {
            return '<span class="' + className +' pageList"></span>';
          }
        },
        /*swiperOption1: {
          autoplay: 5000,
          slidesPerView : 3,
          spaceBetween : 20,
        },*/
      }
    },
    head:{
      title:'Life in China - the Career China Blog',
      meta:[
        { name: 'keywords', content: 'Life in china'},
        { name: 'description', content: 'Discover all about life in China and find resources to help you find a job and move to China.'},
        { property: 'og:url', content: 'www.careerchina.com/life-in-China-blog'},
        { property: 'og:type', content: 'article'},
        { property: 'og:image', content: 'http://material.careerchina.com/img/f6271f71-99db-4a06-ac78-00ddbdec42cf.jpg'},
        { name: 'twitter:card', content: 'http://material.careerchina.com/img/f6271f71-99db-4a06-ac78-00ddbdec42cf.jpg'},
        { name: 'twitter:creator', content: 'careerchina'},
        { name: 'twitter:image', content: 'http://material.careerchina.com/img/f6271f71-99db-4a06-ac78-00ddbdec42cf.jpg'},
        { itemprop: 'image', content: 'http://material.careerchina.com/img/f6271f71-99db-4a06-ac78-00ddbdec42cf.jpg'},
      ]
    },
    components:{
      'v-nav':nav,
      'v-footer':footer,
      'v-goTop':goTop,
      'v-sendEmail':sumit,
      'v-seNav':seNav,
      'v-fixSubmit':fixSubmit
    },
    methods:{
      onlyBlog(urlWords){
        window.open('/'+urlWords+'.html');
      },
      seeAll(id){
        if(id===3){
          location.href='/work-in-China'
        }
        if(id===4){
          location.href='/live-in-China'
        }
        if(id===5){
          location.href='/travel-in-China'
        }
        if(id===6){
          location.href='/guides'
        }
        if(id===7){
          location.href='/on-boarding'
        }
      }
    },
    mounted(){
      this.$http.get('http://'+interfaceStr+'/cc/blog/hotPost/get.action').then(function(response){
        this.blogData1=response.body.homeCategory[0].blogs[0];
        this.blogData2=response.body.homeCategory[0].blogs[1];
        this.blogData3=response.body.homeCategory[0].blogs[2];
        this.blogData4=response.body.homeCategory[0].blogs[3];
        this.categories=response.body.categories;
        console.log(this.categories)
        var _this=this;
        $('.slide1').click(function () {
          _this.onlyBlog(_this.blogData1.urlWords)
        });
        $('.slide2').click(function () {
          _this.onlyBlog(_this.blogData2.urlWords)
        });
        $('.slide3').click(function () {
          _this.onlyBlog(_this.blogData3.urlWords)
        });
        $('.slide4').click(function () {
          _this.onlyBlog(_this.blogData4.urlWords)
        })
      });
      addthis()
    },
  }
</script>

<style>

  .auto{
    width: 1040px;
    margin: auto;
  }
  .heLeft{
    float: left;
    margin-top: 185px;
    margin-bottom: 45px;
    width: 720px;
    height: 400px;
  }
  .heLeft .container{
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
  }
  .heLeft .container .swiper-wrapper{
    width: 4320px;
  }
  .heLeft .container .swiper-wrapper .swiper-slide{
    float: left;
    position: relative;
    cursor: pointer;
  }
  .heLeft .container .swiper-wrapper .swiper-slide img{
    width: 100%;
    height: 400px;
  }

  .heLeft .container .swiper-wrapper .swiper-slide .swiMask,.textBox{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
  }
  .heLeft .container .swiper-wrapper .swiper-slide .textBox{
    padding: 20px 40px 0 40px;
    z-index: 90;
  }
  .heLeft .container .swiper-wrapper .swiper-slide .swiMask{
    opacity: 0.32;
    background: #000000;
    z-index: 10;
  }
  .heLeft .container .swiper-wrapper .swiper-slide .textBox .bannerTitle{
    font-size: 24px;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 24px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .heLeft .container .swiper-wrapper .swiper-slide .textBox .bannerDes{
    margin-top: 10px;
    font-size: 14px;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .heLeft .container .swiper-pagination{
    position: absolute;
    bottom: 12px;
    left: 50%;
    margin-left: -34px;
    width: 68px;
    height: 3px;
    font-size: 0;
  }
  .heLeft .container .swiper-pagination .pageList{
    display: inline-block;
    margin-right: 6px;
    width: 10px;
    height: 3px;
    opacity: 0.6;
    background: #FFFFFF;
    border-radius: 17px;
    transition: all .5s;
    cursor: pointer;
    z-index: 100;
  }
  .heLeft .container .swiper-pagination .pageList:last-child{
    margin-right: 0;
  }
  .heLeft .container .swiper-pagination .swiper-pagination-bullet-active{
    width: 20px;
    opacity: 1;
  }
  .heRight{
    float: right;
    margin-top: 185px;
    width: 300px;
    height: 400px;
    background-image: linear-gradient(135deg, #19DFE8 0%, #4889FF 54%, #4B4DFF 100%);
  }

  .blogCon{
    width: 1040px;
    margin: auto;
  }
  .blogCon .blogCategory{
    width: 100%;
    margin-bottom: 50px;
  }
  .blogCon .blogCategory .categoryTitle{
    margin-bottom: 18px;
    font-size: 0;
  }
  .blogCon .blogCategory .categoryTitle .nameBg{
    display: inline-block;
    margin-right: 14px;
    width: 16px;
    height: 16px;
    background: #4B4DFF;
  }
  .blogCon .blogCategory .categoryTitle h3{
    display: inline-block;
    font-size: 20px;
    color: #333435;
  }
  .blogCon .blogCategory .categoryTitle .more{
    float: right;
    cursor: pointer;
  }
  .blogCon .blogCategory .categoryTitle .see{
    display: inline-block;
    font-size: 14px;
    color: #989898;
    line-height: 23px;
  }
  .blogCon .blogCategory .categoryTitle .seeIcon{
    display: inline-block;
    margin-left: 7px;
    width: 5px;
    height: 8px;
    background: url("../assets/img/blog/icon-blog-arrow-right@2x.png")no-repeat center;
    background-size: cover;
    vertical-align: super;
  }
  .blogCon .blogCategory .blogLine{
    margin: 20px 0 30px 0;
    width: 100%;
    height: 1px;
    background: #E7E7F0;
  }

  .blogCategory .categoryTab{
    width: 1040px;
  }
  .blogCategory .categoryTab .categoryList{
    float: left;
    width: 330px;
    /*height: 183px;*/
    box-shadow: 0 2px 4px 0 rgba(209,214,221,0.50);
  }
  .blogCategory .categoryTab .categoryList{
    margin-right: 25px;
  }
  .blogCategory .categoryTab li:last-child{
    margin-right: 0;
  }
  .blogCategory .categoryTab .categoryList .imgBox{
    position: relative;
    width: 100%;
    height: 160px;
    overflow: hidden;
    cursor: pointer;
  }
  .blogCategory .categoryTab .categoryList img{
    display: block;
    width: 100%;
    transition: transform 1s;
  }
  .blogCategory .categoryTab .categoryList .imgBox:hover img{
    transform: scale(1.2);
  }
  .blogCategory .categoryTab .categoryList .imgIntroduce{
    padding: 18px 34px 18px 23px;
  }
  .blogCategory .categoryTab .categoryList .imgIntroduce h2{
    cursor: pointer;
    overflow: hidden;
    font-size: 16px;
    color: #333435;
    letter-spacing: 0;
    line-height: 28px;
    font-weight: 400;
    height: 56px;
  }
  .blogCategory .categoryTab .categoryList .imgIntroduce h2:hover{
    text-decoration: underline;
  }
  .blogCategory .categoryTab .categoryList .imgIntroduce .inWord{
    margin: 16px 0;
    overflow: hidden;
    font-size: 14px;
    color: #989898;
    letter-spacing: 0;
    line-height: 22px;
    height: 66px;
  }
  .blogCategory .categoryTab .categoryList .imgIntroduce .name{
    display: inline-block;
    margin: 5px 0 16px 0;
    font-size: 12px;
    color: #989898;
  }
  .blogCategory .categoryTab .categoryList .imgIntroduce .date{
    display: inline-block;
    font-size: 12px;
    color: #989898;
  }
  .blogCategory .categoryTab .categoryList .imgIntroduce .linear{
    width: 40px;
    height: 1px;
    background-image: linear-gradient(45deg,#19DFE8 0%,#4B4DFF 100%);
  }
  @media (max-width: 768px) {

    .auto{
      width: inherit;
    }
    .heLeft{
      float: inherit;
      width: 688px;
      height: 382.2px;
      margin: 120px auto;
      margin-bottom: 0;
    }
    .heLeft .container .swiper-wrapper .swiper-slide .swiMask,.textBox{
      height: 95.6px;
    }
    .heLeft .container .swiper-wrapper .swiper-slide .textBox{
      padding: 20px 0 0 20px;
    }
    .heRight{
      float: inherit;
      margin: 20px auto;
      width: 688px;
      height: 100px;
    }
    .blogCon{
      width: 680px;
    }
    .blogCon .blogCategory{
      margin-bottom: 20px;
    }
    /*.blogCon .blogCategory .categoryTitle{
      margin-bottom: 18px;
      font-size: 0;
    }
    .blogCon .blogCategory .categoryTitle .nameBg{
      display: inline-block;
      margin-right: 14px;
      width: 16px;
      height: 16px;
      background: #4B4DFF;
    }
    .blogCon .blogCategory .categoryTitle h3{
      display: inline-block;
      font-size: 20px;
      color: #333435;
    }
    .blogCon .blogCategory .categoryTitle .more{
      float: right;
      cursor: pointer;
    }
    .blogCon .blogCategory .categoryTitle .see{
      display: inline-block;
      font-size: 14px;
      color: #989898;
      line-height: 23px;
    }
    .blogCon .blogCategory .categoryTitle .seeIcon{
      display: inline-block;
      margin-left: 7px;
      width: 5px;
      height: 8px;
      background: url("../assets/img/blog/icon-blog-arrow-right@2x.png")no-repeat center;
      background-size: cover;
      vertical-align: super;
    }*/

    .blogCon .blogCategory .blogLine{
      margin: 20px 0;
    }
    .blogCategory .categoryTab{
      width: 100%;
    }
    .blogCategory .categoryTab .categoryList{
      float: inherit;
      margin-bottom: 20px;
      width: 100%;
      margin-right: inherit;
      padding: 14px;
    }
    .blogCategory .categoryTab .categoryList .imgBox{
      float: right;
      width: 252px;
      height: 140px;
    }
    .blogCategory .categoryTab .categoryList img{
      width: 100%;
      height: 140px;
    }
    .blogCategory .categoryTab .categoryList .imgIntroduce{
      float: left;
      width: 388px;
      padding: 0;
    }
    .blogCategory .categoryTab .categoryList .imgIntroduce h2{
      font-size: 18px;
      line-height: 24px;
    }
    .blogCategory .categoryTab .categoryList .imgIntroduce .inWord{
      margin: 10px 0 0 0;
      line-height: 18px;
      height: inherit;
    }
    .blogCategory .categoryTab .categoryList .imgIntroduce .name{
      margin: 10px 0;
    }
    .blogCategory .categoryTab .categoryList .imgIntroduce .linear{
      width: 28px;
    }
  }
  @media (max-width: 415px) {
    .heLeft{
      width: 100%;
      height: inherit;
    }
    .heLeft .container .swiper-wrapper .swiper-slide .swiMask,.textBox{
      height: 52px;
    }
    .heLeft .container .swiper-wrapper .swiper-slide img{
      height:208px;
    }
    .heRight{
      width: 100%;
      height: inherit;
    }
    .heLeft .container .swiper-wrapper .swiper-slide .textBox{
      padding: 10px 0 0 10px;
    }
    .heLeft .container .swiper-wrapper .swiper-slide .textBox .bannerTitle{
      font-size: 14px;
    }
    .heLeft .container .swiper-wrapper .swiper-slide .textBox .bannerDes{
      display: none;
    }
    .blogCon{
      width: 100%;
    }
    .blogCon .blogCategory .categoryTitle{
      padding: 0 7px 0 10px;
      margin-bottom: 5px;
    }
    .blogCategory .categoryTab .categoryList{
      margin-bottom: inherit;
      padding: 10px 7px 10px 10px;
    }
    .blogCategory .categoryTab .categoryList .imgBox{
      width: 36%;
      height: 72px;
    }
    .blogCon .blogCategory .blogLine{
      margin: 10px 0 0 0;
    }
    .blogCategory .categoryTab .categoryList img{
      width: 100%;
      height: 72px;
    }
    .blogCategory .categoryTab .categoryList .imgIntroduce{
      width: 60%;
    }
    .blogCategory .categoryTab .categoryList .imgIntroduce h2{
      font-size: 14px;
      line-height: 16px;
    }
    .blogCategory .categoryTab .categoryList .imgIntroduce .name{
      margin: 6px 0 0 0;
    }

    .blogCategory .categoryTab .categoryList .imgIntroduce .inWord{
      display: none;
    }
    .blogCategory .categoryTab .categoryList .imgIntroduce .linear{
      display: none;
    }
  }
</style>
