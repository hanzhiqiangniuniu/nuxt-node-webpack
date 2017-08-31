<template>
  <div class="moving">
    <v-nav @refreshList="ipadShow"></v-nav>
    <v-seNav></v-seNav>
    <v-ipadNav v-show="this.ipad" @close="ipadHide"></v-ipadNav>
    <div class="bannerBox" id="bannerBox">
      <div class="auto" style="padding-right: 19px">
        <div class="banLeft">
          <h1 class="banTitle">
            Ground Service
            Support
          </h1>
          <h1 class="ipad-ban-title">
            Ground Service
            Support
          </h1>
          <p class="serDes">
            Our goal is to ease your worry and make it<br/>
as easy as possible to transition to your life in China.<br/>
With our variety of ground services,<br/>
you can settle-in and feel comfortable right away.<br/>
                      </p>
        </div>
        <div class="banRight">
          <img src="../assets/img/service/moving-to-China-06.png" alt="Moving to China">
          <span class="tag">
            —— Silhouette - Kite.Invented by Mozi and Luban,two Confucius philosophers. ——
          </span>
        </div>
      </div>
    </div>
    <div class="menu">
      <div class="auto">
        <ul class="menu-tab">
          <li class="menu-list">
            <div class="list-head clear">
              <img class="head-img" src="../assets/img/service/moving-to-China-1@1x.png" alt="Departure to China">
              <div class="con">
                <h3>Departure Checklist</h3>
                <p class="list-Des">
                  Preparing to leave your home country for an extended amount of time can be overwhelming. To make it as easy as possible, we have created a departure checklist for you. Our team will review this with you and assist with any questions that you have, to ensure you have a smooth transition and are ready for your big move to China!
                </p>
              </div>
            </div>
            <div class="open-con">
              <p class="open-des">
                Preparing to leave your home country for an extended amount of time can be overwhelming. To make it as easy as possible, we have created a departure checklist for you. Our team will review this with you and assist with any questions that you have, to ensure you have a smooth transition and are ready for your big move to China!
              </p>
              <ol class="open-tab clear">
                <li class="open-list clear" v-for="blog in blogData1" @click="linkBlog(blog.urlWords)">
                  <img class="open-img" :src="blog.faceImg" :alt="blog.faceImgAlt">
                  <span class="open-tag">
                    {{blog.title}}
                  </span>
                </li>
              </ol>
            </div>
            <div class="open-btn" @click="openContent1">
              <div class="btn-con-box">
                <i class="openIcon"></i>
                <span class="btn-con">
                Read More
                </span>
              </div>
            </div>
            <div class="close-btn">
              <div class="btn-con-box">
                <i class="closeIcon"></i>
                <span class="close-btn-con">
                Pack Up
                </span>
              </div>
            </div>
          </li>
          <li class="menu-list">
            <div class="list-head clear">
              <img class="head-img" src="../assets/img/service/moving-to-China-2@1x.png" alt="Flight and Hotel in China">
              <div class="con">
                <h3>Flight & Hotel Booking</h3>
                <p class="list-Des">
                  Once your paperwork has been processed and you have your visa, you are ready to come to China!  Our team will assist you by booking your flight ticket to China and helping to arrange a hotel when you arrive in China.
                </p>
              </div>
            </div>
            <div class="open-con">
              <p class="open-des">
                Once your paperwork has been processed and you have your visa, you are ready to come to China! Our team will assist you by booking your flight ticket to China and helping to arrange a hotel when you arrive in China.
              </p>
              <ol class="open-tab clear">
                <li class="open-list clear" v-for="blog in blogData2" @click="linkBlog(blog.urlWords)">
                  <img class="open-img" :src="blog.faceImg" :alt="blog.faceImgAlt">
                  <span class="open-tag">
                    {{blog.title}}
                  </span>
                </li>
              </ol>
            </div>
            <div class="open-btn" @click="openContent2">
              <div class="btn-con-box">
                <i class="openIcon"></i>
                <span class="btn-con">
                Read More
                </span>
              </div>
            </div>
            <div class="close-btn">
              <div class="btn-con-box">
                <i class="closeIcon"></i>
                <span class="close-btn-con">
                Pack Up
                </span>
              </div>
            </div>
          </li>
          <li class="menu-list">
            <div class="list-head clear">
              <img class="head-img" src="../assets/img/service/moving-to-China-3@1x.png" alt="Airport Pickup in China">
              <div class="con">
                <h3>Airport Pickup Assistance</h3>
                <p class="list-Des">
                  Landing in a new country is always exciting. But it can be a little overwhelming, especially if you don’t know the language. But don’t worry, we’re here to help. Our team will work with your employer and local representatives to meet you at the airport and escort you to your hotel. Along the way, you can enjoy the exciting first sights of life in China!
                </p>
              </div>
            </div>
            <div class="open-con">
              <p class="open-des">
                Landing in a new country is always exciting. But it can be a little overwhelming, especially if you don’t know the language. But don’t worry, we’re here to help. Our team will work with your employer and local representatives to meet you at the airport and escort you to your hotel. Along the way, you can enjoy the exciting first sights of life in China!
              </p>
              <ol class="open-tab clear">
                <li class="open-list clear" v-for="blog in blogData3" @click="linkBlog(blog.urlWords)">
                  <img class="open-img" :src="blog.faceImg" :alt="blog.faceImgAlt">
                  <span class="open-tag">
                    {{blog.title}}
                  </span>
                </li>
              </ol>
            </div>
            <div class="open-btn" @click="openContent3">
              <div class="btn-con-box">
                <i class="openIcon"></i>
                <span class="btn-con">
                Read More
                </span>
              </div>
            </div>
            <div class="close-btn">
              <div class="btn-con-box">
                <i class="closeIcon"></i>
                <span class="close-btn-con">
                Pack Up
                </span>
              </div>
            </div>
          </li>
          <li class="menu-list">
            <div class="list-head clear">
              <img class="head-img" src="../assets/img/service/moving-to-China-4@1x.png" alt="Settle in China">
              <div class="con">
                <h3>Settle-in Service</h3>
                <p class="list-Des">
                  Our professional services don’t end once you are at your hotel in China. The Career China team will continue to work in conjunction with your employer to assist with getting you settled-into your new life in China. We can assist you with getting a Chinese SIM card for your compatible phone, or we can advise on where to get an inexpensive Chinese phone (if that option works better). The team can also advise about setting up a Chinese bank account, and finding a suitable apartment. Our goal is to help get your life in China started off on the right foot.
                </p>
              </div>
            </div>
            <div class="open-con">
              <p class="open-des">
                Our professional services don’t end once you are at your hotel in China. The Career China team will continue to work in conjunction with your employer to assist with getting you settled-into your new life in China. We can assist you with getting a Chinese SIM card for your compatible phone, or we can advise on where to get an inexpensive Chinese phone (if that option works better). The team can also advise about setting up a Chinese bank account, and finding a suitable apartment. Our goal is to help get your life in China started off on the right foot.
              </p>
              <ol class="open-tab clear">
                <li class="open-list clear" v-for="blog in blogData4" @click="linkBlog(blog.urlWords)">
                  <img class="open-img" :src="blog.faceImg" :alt="blog.faceImgAlt">
                  <span class="open-tag">
                    {{blog.title}}
                  </span>
                </li>
              </ol>
            </div>
            <div class="open-btn" @click="openContent4">
              <div class="btn-con-box">
                <i class="openIcon"></i>
                <span class="btn-con">
                Read More
                </span>
              </div>
            </div>
            <div class="close-btn">
              <div class="btn-con-box">
                <i class="closeIcon"></i>
                <span class="close-btn-con">
                Pack Up
                </span>
              </div>
            </div>
          </li>
          <li class="menu-list">
            <div class="list-head clear">
              <img class="head-img" src="../assets/img/service/moving-to-China-5@1x.png" alt="China Life Guides">
              <div class="con">
                <h3>Life in China Guides</h3>
                <p class="list-Des">
                  As a part of our commitment to providing our international job candidates with support while they are in China, we offer a number of blog posts and guides here on the Career China website. From city guides, Chinese language help, cultural information, travel advice, and tips. Be sure to browse the blog before, and during your time in China!
                </p>
              </div>
            </div>
            <div class="open-con">
              <p class="open-des">
                As a part of our commitment to providing our international job candidates with support while they are in China, we offer a number of blog posts and guides here on the Career China website. From city guides, Chinese language help, cultural information, travel advice, and tips. Be sure to browse the blog before, and during your time in China!
              </p>
              <ol class="open-tab clear">
                <li class="open-list clear" v-for="blog in blogData5" @click="linkBlog(blog.urlWords)">
                  <img class="open-img" :src="blog.faceImg" :alt="blog.faceImgAlt">
                  <span class="open-tag">
                    {{blog.title}}
                  </span>
                </li>
              </ol>
            </div>
            <div class="open-btn" @click="openContent5">
              <div class="btn-con-box">
                <i class="openIcon"></i>
                <span class="btn-con">
                Read More
                </span>
              </div>
            </div>
            <div class="close-btn">
              <div class="btn-con-box">
                <i class="closeIcon"></i>
                <span class="close-btn-con">
                Pack Up
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="quesBox" id="question">
      <h2>Frequently Asked Questions</h2>
      <i class="visa-line"></i>
      <div class="whatIs clear">
        <div class="list_Box" id="list_Box">
          <!--<p class="prompt">
            What is the most important
            factor to be admitted?
          </p>-->
          <ul class="quesTab" id="quesTab">
            <li class="quesList bg" id="Q11">
              <a href="javascript:;">
                Will someone greet me at the airport when I arrive in China?
              </a>
            </li>
            <li class="quesList" id="Q22">
              <a href="javascript:;">
                I am bringing lots of luggage, will there be enough space?
              </a>
            </li>
            <li class="quesList" id="Q33">
              <a href="javascript:;">
                How much money should I bring with me to China?
              </a>
            </li>
            <li class="quesList" id="Q44">
              <a href="javascript:;">
                Can I use my cell phone in China?
              </a>
            </li>
            <li class="quesList" id="Q55">
              <a href="javascript:;">
                How much does it cost to take the subway or bus in China?
              </a>
            </li>
            <li class="quesList" id="Q66">
              <a href="javascript:;">
                How much are daily living expenses in China?
              </a>
            </li>
            <li class="quesList" id="Q77">
              <a href="javascript:;">
                Can I set up a Chinese bank account?
              </a>
            </li>
          </ul>
          <div class="left-line"></div>
        </div>
        <div class="answerBox">
          <ul class="anTab" id="anTab">
            <li class="anList firstT an-active" id="A1">
              <h4>Will someone greet me at the airport when I arrive in China?</h4>
              <p class="listP">
                Yes, we will arrange to have you met at the airport by one of our Career China hosts.  They will transport you to your accommodation and give you some basic information along the way.
              </p>
            </li>
            <li class="anList" id="A2">
              <h4>
                I am bringing lots of luggage, will there be enough space?
              </h4>
              <p class="listP">
                Yes, we will make sure that we have appropriate transportation for your luggage.  Please let your On-Boarding Specialist know if you are bringing more than 4 suitcases.
              </p>
            </li>
            <li class="anList" id="A3">
              <h4>How much money should I bring with me to China?</h4>
              <p class="listP">
                You should budget enough money for several months of food and other living costs when you arrive in China (to get you through until you receive your first pay check).  We recommend that you bring the equivalent of roughly $3000 USD with you in cash (or accessible via the ATM) when you come to China.  This will help you get on your feet, and give you cash to help get your apartment rental.
              </p>
            </li>
            <li class="anList" id="A4">
              <h4>Can I use my cell phone in China?</h4>
              <p class="listP">
                It depends.  Most international cell phone carriers have international plans, but they are expensive you will want to have a local number while living in China.  Chinese SIM cards are widely available and inexpensive.  Our team can assist you with getting a Chinese SIM card for your phone.  ** However, SIM cards will ONLY work on UNLOCKED cell phones!  Those that are locked by carriers (such as contract phones in the USA) cannot use a SIM card from another country.  Another solution is to buy an inexpensive Chinese cell phone for your stay.  Again, we can assist you in this process and provide recommendations for you based on your situation.
              </p>
            </li>
            <li class="anList" id="A5">
              <h4>How much does it cost to take the subway or bus in China?</h4>
              <p class="listP">
                Public transportation is cheap, and readily available in China.  The local bus is around 2 RMB for a ride, and the subway / metro starts around 2 RMB for a short distance – and can go up from there depending on how far you are traveling.  Taxis are a bit more expensive.  For more information, please refer to our Cost of Living in China blog post.
              </p>
            </li>
            <li class="anList lastAnlist" id="A6">
              <h4>How much are daily living expenses in China?</h4>
              <p class="listP">
                Daily living expenses in China are typically cheaper than other developed Western countries.  Eating street food and local restaurants is quite cheap, as is transportation.  Of course, there are other foreign restaurants available in big cities, such as McDonald’s, where a hamburger may cost around 12 RMB.  There are also luxuries too, such as nice restaurants or Starbucks – where a latte may cost around 24 RMB.  For more information, please refer to our detailed blog post about the Cost of Living in China.
              </p>
            </li>
            <li class="anList" id="A7">
              <h4>Can I set up a Chinese bank account?</h4>
              <p class="listP">
                Yes!  In fact, you will need to do this for your salary from your job.  Our team can assist you with setting up a bank account, but it’s quite easy to do.  Primarily, you just need your passport and some cash to deposit.  You typically don’t even need an address, and they will give you your bank ATM card right away.  There may be a preferred bank for your company, which will help with setting up your direct deposit for your salary payments, so be sure to check before setting one up.  The hardest part is the translation, but most big banks in city centers will have a customer service staff member who can speak some English.  But again, our team can assist you as well.  For more information, please refer to our Money in China blog post.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="guideLink">
      <div class="auto">
        <ul class="guideTab clear">
          <li class="guideList clear">
            <div class="guide-listLeft">
              <h2 class="guideTitle">
                Career Advice
              </h2>
              <p class="guideDes">
                Our career consultants are available to advise you on job
opportunities in China that are a right fit for you.
              </p>
            </div>
            <a class="guideIcon" href="/job-placement-China" title="Job Placement China"></a>
          </li>
          <li class="guideList clear">
            <div class="guide-listLeft">
              <h2 class="guideTitle">
                Work Visa
               </h2>
              <p class="guideDes">
                We are happy to walk you through the process, as well as
providing you with checklists and sample documents.
              </p>
            </div>
            <a class="guideIcon" href="/work-visa-China" title="China Work Visa"></a>
          </li>
        </ul>
      </div>
    </div>
    <v-goTop></v-goTop>
    <v-footer></v-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import $ from 'jquery'
  import Vue from 'vue'
  import VueResource from 'vue-resource';
  import '../assets/css/question.css'
  import addthis from '../assets/js/addthis.js';
  import interfaceStr from '../assets/js/interface.js'
  import nav from '../components/public/nav/nav'
  import seNav from '../components/public/service-seNav/service-seNav'
  import footer from '../components/public/footer/footer'
  import goTop from '../components/public/goTop/goTop'
  import ipadNav from '../components/public/ipad-nav/ipadNav'
  var addthis_share = {};
  if (process.BROWSER_BUILD) {
    Vue.use(VueResource);
  }
  export default{
    data () {
      return {
        scrollWatch: true,
        ipad:false,
        blogData1:[],
        blogData2:[],
        blogData3:[],
        blogData4:[],
        blogData5:[]
      }
    },
    head:{
      title:'China work visa service',
      meta:[
        { name: 'keywords', content: 'moving to china'},
        { name: 'description', content: "Our goal is to ease your worry and make it as easy as possible when you are moving to China. With our variety of ground services you can settle-in and feel comfortable right away."},
        { property: 'og:url', content: 'www.careerchina.com/moving-to-China'},
        { property: 'og:type', content: 'article'},
        { property: 'og:image', content: 'http://material.careerchina.com/img/3bcbb0cf-5997-45a1-8914-07cd5e2b2ae2.jpg'},
        { name: 'twitter:card', content: 'http://material.careerchina.com/img/3bcbb0cf-5997-45a1-8914-07cd5e2b2ae2.jpg'},
        { name: 'twitter:creator', content: 'careerchina'},
        { name: 'twitter:image', content: 'http://material.careerchina.com/img/3bcbb0cf-5997-45a1-8914-07cd5e2b2ae2.jpg'},
        { itemprop: 'image', content: 'http://material.careerchina.com/img/3bcbb0cf-5997-45a1-8914-07cd5e2b2ae2.jpg'},
      ]
    },
    methods:{
      ipadShow(){
        this.ipad=true
      },
      ipadHide(){
        this.ipad=false
      },
      openContent1(){
        this.$http.get(interfaceStr+'/cc/blog/pageBlogByParams.action?tagNames=Checklist').then(function (response) {
          this.blogData1=response.body.slice(0,3);
        });
      },
      openContent2(){
        this.$http.get(interfaceStr+'/cc/blog/pageBlogByParams.action?tagNames=Flight&Hotel').then(function (response) {
          this.blogData2=response.body.slice(0,3);
          console.log(this.blogData2)
        });
      },
      openContent3(){
        this.$http.get(interfaceStr+'/cc/blog/pageBlogByParams.action?tagNames=Pick-up').then(function (response) {
          this.blogData3=response.body.slice(0,3);
        });
      },
      openContent4(){
        this.$http.get(interfaceStr+'/cc/blog/pageBlogByParams.action?tagNames=Settle-in').then(function (response) {
          this.blogData4=response.body.slice(0,3);
        });
      },
      openContent5(){
        this.$http.get(interfaceStr+'/cc/blog/pageBlogByParams.action?tagNames=Lifestyle').then(function (response) {
          this.blogData5=response.body.slice(0,3);
        });
      },
      linkBlog(title){
          window.open('/blog/'+title+'.html')
      }
    },
    components:{
      'v-nav':nav,
      'v-seNav':seNav,
      'v-footer':footer,
      'v-goTop':goTop,
      'v-ipadNav':ipadNav
    },
    mounted(){
      addthis();
      var _this=this;
      $('.menu-list').each(function (index, item) {
        $(item).children('.open-btn').click(function () {
          $('.menu-list').each(function (index, item) {
            $(item).children('.open-con').slideUp(300);
            $(item).children('.open-btn').css('display','block');
            $(item).children('.close-btn').css('display','none');
            $(item).children('.list-head').css('border-bottom','none');
          });
          $(item).children('.open-con').slideDown(300);
          $(item).children('.open-btn').css('display','none');
          $(item).children('.close-btn').css('display','block');
          $(item).children('.list-head').css('border-bottom','1px solid #E9E9E9');
        });
        $(item).children('.close-btn').click(function () {
          document.body.scrollTop=$(item).offset().top-150;
          $(item).children('.open-con').slideUp(300);
          $(item).children('.open-btn').css('display','block');
          $(item).children('.close-btn').css('display','none');
          $(item).children('.list-head').css('border-bottom','none');
        })
      });

      var oQuesTab=document.getElementById('quesTab'),
        aQLi=oQuesTab.getElementsByTagName('li'),
        oAnTab=document.getElementById('anTab'),
        aAli=oAnTab.getElementsByTagName('li');
      $(window).on('scroll', () => {
        if(this.scrollWatch){
          var anListTop=$('.lastAnlist').offset().top - $(window).scrollTop();
          var firstT=$('.firstT').offset().top - $(window).scrollTop();
          for(var i=0;i<aAli.length;i++){
            var wst =  $(window).scrollTop();
            for (i=1; i<8; i++){
              var anOffset=$("#A"+i).offset().top;
              if(anOffset-300 < wst){ //判断滚动条位置
                $('#quesTab li').removeClass("bg"); //清除c类
                $("#Q"+i+i).addClass("bg");	//给当前导航加c类
                $('#anTab li').removeClass('an-active')
                $("#A"+i).addClass("an-active");
              }
            }
          }
          if(firstT<=150){
            $('.list_Box').css({
              position:'fixed',
              top:'170px',
              'margin-top':'0'
            })
          }else if(firstT > 150){
            $('.list_Box').css({
              position:'static',
              top:'inherit'
            })
          }
          if(anListTop <=150){
            $('.list_Box').css({
              position:'static',
              top:'inherit',
              'margin-top':'900px'
            });
          }
        }
      });
      for(var i=0; i<aQLi.length; i++){
        aQLi[i].index=i;
        aQLi[i].onclick=function(){
          for(var i=0; i<aQLi.length; i++){
            aQLi[i].className='quesList';
          }
          this.className='quesList bg';
          $(window).scrollTop(aAli[this.index].offsetTop - 280);
        }
      }
    },
    destroyed () {
      this.scrollWatch = false;
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
    height: 100%;
  }
  .auto .banLeft{
    float: left;
    width: 425px;
    margin-top: 280px;
  }
  .auto .banLeft .banTitle{
    margin-bottom: 40px;
    font-size: 50px;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 62px;
    -webkit-animation: fadeInUp .4s linear;
    animation: fadeInUp .4s linear;
  }
  .auto .banLeft .ipad-ban-title{
    margin-bottom: 30px;
    font-size: 32px;
    color: #FFFFFF;
    display: none;
  }
  .auto .banLeft .serDes{
    font-size: 17px;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 24px;
    -webkit-animation: fadeInUp .5s linear;
    animation: fadeInUp .5s linear;
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
  .auto .banRight{
    float: right;
    margin-top: 240px;
  }
  .auto .banRight img{
    display: block;
    margin: 0 0 38px 30px;
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

  .menu{
    width: 100%;
    background: #F9F9FB;
    padding-top: 210px;
  }
  .menu-tab{
    width: 100%;
  }
  .menu-tab .menu-list{
    margin-bottom: 150px;
    width: 100%;
    background: #fff;
    cursor: pointer;
    box-shadow: 0 8px 20px 0 rgba(122,139,168,0.08);
  }
  .menu-tab .menu-list:last-child{
    margin-bottom: 130px;
  }
  .menu-tab .menu-list .list-head{
    position: relative;
    padding: 55px 50px 36px 50px;
  }
  .menu-tab .menu-list .list-head .head-img{
    position: absolute;
    width: 220px;
    height: 280px;
    top:-80px;
    left: 50px;
    box-shadow: 0 8px 28px 0 rgba(122,139,168,.5);
    border-radius: 6px;
  }
  .menu-tab .menu-list .list-head .con{
    float: right;
    width: 640px;
  }
  .menu-list .list-head .con h3{
    margin-bottom: 15px;
    font-size: 24px;
    color: #333435;
    letter-spacing: 0;
  }
  .menu-list .list-head .con .list-Des{
    font-size: 14px;
    color: #888888;
    letter-spacing: 0;
    line-height: 30px;
  }
  .open-con{
    padding: 40px 50px;
    transition: hegiht .5s;
    display: none;
  }
  .open-con .open-des{
    margin-bottom: 40px;
    font-size: 14px;
    color: #888888;
    letter-spacing: 0;
    line-height: 30px;
  }
  .open-con .open-tab{
    width: 100%;
  }
  .open-con .open-tab .open-list{
    float: left;
    margin-right: 30px;
    width: 280px;
  }
  .open-con .open-tab .open-list:last-child{
    margin-right: 0;
  }
  .open-con .open-tab .open-list .open-img{
    display: block;
    width: 280px;
    height: 156px;
    background: #F9F9FB;
  }
  .open-con .open-tab .open-list .open-tag{
    display: block;
    margin-top: 20px;
    font-size: 14px;
    color: #333435;
    letter-spacing: 0;
    line-height: 20px;
    text-align: center;
  }
  .open-con .open-tab .open-list .open-tag:hover{
    text-decoration: underline;
  }
  .open-btn,.close-btn{
    width: 100%;
    height:60px;
    border-top: 1px solid #E9E9E9;
    font-size: 0;
    transition: .5s;
    line-height: 60px;
    text-align: center;
  }
  .close-btn{
    display: none;
  }
  .btn-con-box{
    transform: translateX(37.5px);
    transition: .5s;
  }
  .open-btn .openIcon,.close-btn .closeIcon{
    display: inline-block;
    width: 13px;
    height: 7px;
    margin-right: 5px;
  }
  .open-btn .openIcon{
    background: url("../assets/img/service/icon-ground-arrow-down-normal@2x.png")no-repeat center;
    background-size: cover;
  }
  .close-btn .closeIcon{
    background: url("../assets/img/service/icon-ground-arrow-up-normal@2x.png")no-repeat center;
    background-size: cover;
  }
  .open-btn .btn-con,.close-btn .close-btn-con{
    font-size: 14px;
    color: #333435;
    opacity: 0;
    transition: 1s;
  }
  .menu-tab .menu-list:hover .btn-con-box{
    transform: translateX(0);
  }
  .menu-tab .menu-list:hover .open-btn .btn-con{
    opacity: 1;
  }
  .open-btn:hover .openIcon{
    background: url("../assets/img/service/icon-ground-arrow-down-press@2x.png")no-repeat center;
    background-size: cover;
  }
  .open-btn:hover .btn-con{
    color: #4B4DFF;
    transition: .2s;
  }
  .menu-tab .menu-list:hover .close-btn .close-btn-con{
    opacity: 1;
  }
  .close-btn:hover .closeIcon{
    background: url("../assets/img/service/icon-ground-arrow-up-press@2x.png")no-repeat center;
    background-size: cover;
  }
  .close-btn:hover .close-btn-con{
    color: #4B4DFF;
    transition: .2s;
  }

  .guideLink{
    width: 100%;
    border-top: 1px solid #D6D6E5 ;
  }
  .guideTab .guideList{
    float: left;
    border-right: 1px solid #D6D6E5;
    width: 520px;
  }
  .guideTab .guideList:first-child{
    padding: 62px 50px 62px 0;
  }
  .guideTab .guideList:last-child{
    padding: 62px 0 62px 50px;
    border: 0;
  }
  .guideTab .guideList .guide-listLeft{
    float: left;
    width: 368px;
  }
  .guideTab .guideList .guideIcon{
    float: right;
    width: 18px;
    height: 29px;
    background: url("../assets/img/service/icon-careeradvice-arrow-normal.png") no-repeat center;
    margin-top: 36.5px;
    cursor: pointer;
  }
  .guideTab .guideList .guideIcon:hover{
    background: url("../assets/img/service/icon-careeradvice-arrow-press.png") no-repeat center;
  }
  .guideTab .guideList .guide-listLeft .guideTitle{
    margin-bottom: 18px;
    font-size: 26px;
    color: #333435;
  }
  .guideTab .guideList .guide-listLeft .guideDes{
    font-size: 14px;
    color: #888888;
    letter-spacing: 0;
    line-height: 24px;
  }
  @media (max-width: 768px) {
    .bannerBox {
      height: inherit;
    }
    .auto {
      width: 100%;
      margin: inherit;
      padding-right: inherit !important;
    }
    .auto .banLeft {
      float: inherit;
      width: 440px;
      margin: auto;
      padding: 160px 0 60px 0;
    }
    .auto .banLeft .banTitle {
      display: none;
    }
    .auto .banLeft .ipad-ban-title {
      display: block;
      text-align: center;
    }
    .auto .banLeft .serDes {
      font-size: 16px;
      text-align: center;
    }
    .auto .banRight {
      display: none;
    }

    .menu{
      padding-top: 110px;
    }
    .menu-tab .menu-list{
      margin-bottom: 110px;
    }
    .menu-tab .menu-list:last-child{
      margin-bottom: 60px;
    }
    .menu-tab .menu-list .list-head{
      padding: 50px 40px 33px 40px;
    }
    .menu-tab .menu-list .list-head .head-img{
      width: 29%;
      height: inherit;
      top:-50px;
      left: 40px;
    }
    .menu-tab .menu-list .list-head .con{
      width: 56%;
    }
    .menu-list .list-head .con h3{
      margin-bottom: 10px;
      font-size: 17px;
    }
    .open-con{
      padding: 30px 40px;
    }
    .open-con .open-des{
      margin-bottom: 30px;
    }
    .open-con .open-tab .open-list{
      width: 30%;
      margin-right: 5%;
    }
    .open-con .open-tab .open-list .open-img{
      width: 100%;
      height: 114px;
    }
    .open-con .open-tab .open-list .open-tag{
      margin-top: 15px;
      line-height: 20px;
    }

    .guideTab{
      width: 648px;
      margin: auto;
    }
    .guideTab .guideList{
      width: 50%;
    }
    .guideTab .guideList .guide-listLeft{
      width: 220px;
    }
    .guideTab .guideList:first-child{
      padding: 30px 50px 30px 0;
    }
    .guideTab .guideList:last-child{
      padding: 30px 0 30px 50px;
    }
    .guideTab .guideList .guideIcon{
      margin-top: 60px;
    }
    .guideTab .guideList .guide-listLeft .guideTitle{
      font-size: 18px;
    }
  }
  @media (max-width: 578px) {
    .menu{
      padding-top: 0;
    }
    .menu-tab .menu-list{
      margin-bottom: 10px;
    }
    .menu-tab .menu-list:last-child{
      margin-bottom: 0;
    }
    .menu-tab .menu-list .list-head{
      padding: 30px 5% 20px 5%;
    }
    .menu-tab .menu-list .list-head .head-img{
      display: none;
    }
    .menu-tab .menu-list .list-head .con{
      width: 100%;
      float: inherit;
    }
    .menu-list .list-head .con h3{
      margin-bottom: 5px;
    }
    .open-con{
      padding: 20px 5%;
    }
    .open-con .open-tab .open-list{
      float: inherit;
      margin-right: inherit;
      width: 100%;
      margin-bottom: 15px;
    }
    .open-con .open-tab .open-list .open-img{
      width: 40%;
      height: 68px;
      float: left;
      margin-right: 6%;
    }
    .open-con .open-tab .open-list .open-tag{
      width: 54%;
      margin-top: 5px;
      float: left;
      text-align: inherit;
    }
    .open-con .open-des{
      margin-bottom: 20px;
    }
  }
  @media (max-width: 415px) {
    .auto .banLeft {
      width: 100%;
      padding: 160px 6% 60px 6%;
    }

    .auto .banLeft .ipad-ban-title {
      margin-bottom: 20px;
      font-size: 18px;
      text-align: center;
    }

    .auto .banLeft .serDes {
      font-size: 14px;
    }
    .guideTab{
      width: 100%;
      margin: inherit;
    }
    .guideLink{
      border: none;
    }
    .guideTab .guideList{
      width: 100%;
      float: inherit;
      border-right: 0;
    }
    .guideTab .guideList .guide-listLeft{
      width: 260px;
    }
    .guideTab .guideList:first-child{
      border-top:10px solid #F3F6FB ;
      padding: 20px;
    }
    .guideTab .guideList:last-child{
      padding: 20px;
      border-top:10px solid #F3F6FB ;
      border-bottom: 10px solid #F3F6FB;
    }
    .guideTab .guideList .guideIcon{
      margin-top: 14%;
    }
  }
</style>
