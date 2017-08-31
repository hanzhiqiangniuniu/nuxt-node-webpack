<template>
  <div class="placement">
    <v-nav></v-nav>
    <v-seNav></v-seNav>
    <div class="bannerBox" id="bannerBox">
      <div class="auto" style="padding-right: 19px">
        <div class="banLeft">
          <h2 class="banTitle">
            Career Advice
          </h2>
          <h2 class="ipad-ban-title">
            Career Advice
          </h2>
          <p class="serDes">
            Our team will work with you <br/>
to identify job opportunities and companies in China
that best fit your skills and interests.
          </p>
        </div>
        <div class="banRight">
          <img src="../assets/img/service/job-placement-China-1.png" alt="">
          <span class="tag">
            —— The silhouette is TianTan of Chinese Ancient buildings ——
          </span>
        </div>
      </div>
    </div>
    <div class="board">
      <ul class="board-tab auto" id="imgLazy">
        <li class="board-list clear">
          <img class="left-img img1" src="../assets/img/service/job-placement-China-2.png" alt="">
          <div class="board-img-ass-right board-img-ass board-img-ass-margin1">
            <h3 class="board-list-title">Create an Account & Submit Your Resume</h3>
            <p class="board-list-des">
              Our career consultants are available to advise you on job opportunities in China that are a right fit for you, based on your skills and qualifications, desired salary, and lifestyle interests.
            </p>
          </div>
        </li>
        <li class="board-list clear web">
          <div class="board-img-ass-left board-img-ass board-img-ass-margin2">
            <h3 class="board-list-title">Talk With a Career Consultant</h3>
            <p class="board-list-des">
              Once we have your information in the system, you can work with our Career Consultants to discuss your qualifications and your career goals. The team will also want to know more about you, including your work-style, lifestyle interests, and desired salary.
            </p>
          </div>
          <img  class="right-img img2" src="../assets/img/service/job-placement-China-3.png" alt="">
        </li>
        <li class="board-list clear">
          <img class="left-img img3" src="../assets/img/service/job-placement-China-4.png" alt="">
          <div class="board-img-ass-right board-img-ass board-img-ass-margin3">
            <h3 class="board-list-title">Matching Job Opportunities</h3>
            <p class="board-list-des">
              After we have gotten to know you, we will identify particular companies and job opportunities that are a great fit. From there, we will work with you closely to continue through the interviewing process.
            </p>
          </div>
        </li>
        <li class="board-list clear web">
          <div class="board-img-ass-left board-img-ass board-img-ass-margin4">
            <h3 class="board-list-title">Interviews</h3>
            <p class="board-list-des">
              Our team will work with you closely to guide you along the interview process, and advise you on any other requirements, such as a teaching demo. We will also coordinate with the hiring companies and advise
 you on the next steps in the process.
             </p>
          </div>
          <img  class="right-img img4" src="../assets/img/service/job-placement-China-5.png" alt="">
        </li>
        <li class="board-list clear">
          <img class="left-img img5" src="../assets/img/service/job-placement-China-6.png" alt="">
          <div class="board-img-ass-right board-img-ass board-img-ass-margin5">
            <h3 class="board-list-title">Get Hired!</h3>
            <p class="board-list-des">
              Congratulations on the new job! The Career China team will assist you with getting together appropriate documents to sign. We will also be sure you understand the details, such as benefits and insurance. Lastly, our team will work with the hiring company to provide you with on-boarding information and other important documents related to your orientation.
            </p>
          </div>
        </li>
        <li class="board-list clear web">
          <div class="board-img-ass-left board-img-ass board-img-ass-margin6">
            <h3 class="board-list-title">Work Visa</h3>
            <p class="board-list-des">
              Once you have signed an offer, the Career China visa team will begin to work with you more closely to help gather & process all the required documents to get your working visa in China. This process can take some time, so your career consultant may inform you of the
requirements ahead of time so that you can get start preparing all the documents in advance.
            </p>
          </div>
          <img  class="right-img img6" src="../assets/img/service/job-placement-China-7.png" alt="">
        </li>
        <li class="advice-line1"></li>
        <li class="advice-line2"></li>
        <li class="advice-line3"></li>
        <li class="advice-line4"></li>
        <li class="advice-line5"></li>
        <li class="advice-line6"></li>
      </ul>
      <a href="javascript:;" class="resumeLink">Submit My Resume Now!</a>
    </div>
    <div class="guideLink">
      <div class="auto">
        <ul class="guideTab clear">
          <li class="guideList clear">
            <div class="guide-listLeft">
              <h3 class="guideTitle">
                Work Visa
              </h3>
              <p class="guideDes">
                We are happy to walk you through the process, as well as
providing you with checklists and sample documents.
              </p>
            </div>
            <a class="guideIcon" href="/work-visa-China"></a>
          </li>
          <li class="guideList clear">
            <div class="guide-listLeft">
              <h3 class="guideTitle">
                Ground Service
              </h3>
              <p class="guideDes">
                Our team can assist with making arrangements that will help
with your transition into China.
              </p>
            </div>
            <a class="guideIcon" href="/moving-to-China"></a>
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
  import '../assets/css/reset.min.css'
  import addthis from '../assets/js/addthis.js';
  import posiImgAnimate from '../assets/js/img-animate-position.js';
  import nav from '../components/public/nav/nav'
  import seNav from '../components/public/service-seNav/service-seNav'
  import footer from '../components/public/footer/footer'
  import goTop from '../components/public/goTop/goTop'
  var addthis_share = {};
  export default{
    components:{
      'v-nav':nav,
      'v-seNav':seNav,
      'v-footer':footer,
      'v-goTop':goTop
    },
    mounted(){
      addthis();
      posiImgAnimate()
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
  }
  .auto .banRight{
    float: right;
    margin-top: 210px;
    width: 459px;
  }
  .auto .banRight img{
    display: block;
    margin-bottom: 38px;
    width: 100%;
    height: 332px;
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
    padding-top: 139px;
    background: #fff;
  }
  .board-tab{
    position: relative;
  }
  .board-tab .board-list{
    margin-bottom: 207px;
  }
  .board-tab .board-list:nth-child(6){
    margin-bottom: 0;
  }
  .board-list .left-img{
    float: left;
    opacity: 0;
    filter: alpha(opacity=0);
  }
  .board-list .right-img{
    float: right;
    opacity: 0;
    filter: alpha(opacity=0);
  }
  .board-list .img1{
    margin-left: 24px;
    width: 340px;
    height: 234px;
  }
  .board-list .img2{
    margin-right: 39px;
    width: 362px;
    height: 267px;
  }
  .board-list .img3{
    margin-left: 44px;
    width: 337px;
    height: 242px;
  }
  .board-list .img4{
    margin-right: 17px;
    width: 362px;
    height: 267px;
  }
  .board-list .img5{
    margin-left: 44px;
    width: 404px;
    height: 220px;
  }
  .board-list .img6{
    margin-right: 9px;
    width: 367px;
    height: 262px;
  }
  .board-list .board-img-ass-right{
    float: right;
    width: 470px;
  }
  .board-list .board-img-ass-left{
    float: left;
    width: 470px;
  }
  .board-img-ass .board-list-title{
    font-size: 24px;
    color: #333435;
    letter-spacing: 0;
    line-height: 24px;
    font-weight: 600;
  }
  .board-img-ass .board-list-des{
    margin-top: 20px;
    font-size: 14px;
    color: #888;
    letter-spacing: 0;
    line-height: 30px;
  }
  .board-img-ass-margin1{
    margin-top: 11px;
  }
  .board-img-ass-margin2{
    margin-top: 49px;
  }
  .board-img-ass-margin3{
    margin-top: 41px;
  }
  .board-img-ass-margin4{
    margin-top: 51px;
  }
  .board-img-ass-margin5{
    margin-top: 4px;
  }
  .board-img-ass-margin6{
    margin-top: 16px;
  }
  .board .resumeLink{
    display: block;
    margin:134px auto;
    width: 300px;
    height: 50px;
    line-height: 50px;
    background-image: linear-gradient(135deg,  #19DFE8 0%, #4889FF 54%, #4B4DFF 100%);
    box-shadow: 0 4px 12px 0 rgba(101,112,144,0.32);
    border-radius: 2px;
    font-size: 14px;
    color: #fff;
    font-weight: bold;
    text-align: center;
  }
  .board .resumeLink:hover{
    background-image: linear-gradient(135deg,  #16C8D0 0%, #4889FF 54%, #4345E5 100%);
  }
  .board .board-tab .advice-line1{
    position: absolute;
    top:233px;
    left:238px;
    width: 622px;
    height: 212px;
    background: url("../assets/img/service/icon-careeradvice-line-1.png")no-repeat center;
  }
  .board .board-tab .advice-line2{
    position: absolute;
    top:706px;
    left:315px;
    width: 462px;
    height: 229px;
    background: url("../assets/img/service/icon-careeradvice-line-2.png")no-repeat center;
  }
  .board .board-tab .advice-line3{
    position: absolute;
    top:1155px;
    left:215px;
    width: 539px;
    height: 272px;
    background: url("../assets/img/service/icon-careeradvice-line-3.png")no-repeat center;
  }
  .board .board-tab .advice-line4{
    position: absolute;
    top:1580px;
    left:286px;
    width: 380px;
    height: 259px;
    background: url("../assets/img/service/icon-careeradvice-line-4.png")no-repeat center;
  }
  .board .board-tab .advice-line5{
    position: absolute;
    bottom:202px;
    left:286px;
    width: 458px;
    height: 272px;
    background: url("../assets/img/service/icon-careeradvice-line-5.png")no-repeat center;
  }
  .board .board-tab .advice-line6{
    position: absolute;
    bottom:-135px;
    left:421px;
    width: 324px;
    height: 152px;
    background: url("../assets/img/service/icon-careeradvice-line-6.png")no-repeat center;
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
  @media (max-width: 768px){
    .bannerBox{
      height: inherit;
    }
    .auto{
      width: 100%;
      margin: inherit;
      padding-right: inherit !important;
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
      text-align: center;
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
      width: 648px;
      margin: auto;
    }
    .board-tab .board-list{
      margin-bottom: 80px;
    }
    .board-list .img1{
      margin-left: 0;
      width: 220px;
      height: 152px;
    }
    .board-list .img2{
      margin-right: 0;
      width: 220px;
      height: 162px;
    }
    .board-list .img3{
      margin-left: 0;
      width: 208px;
      height: 160px;
    }
    .board-list .img4{
      margin-right: 0;
      width: 220px;
      height: 162px;
    }
    .board-list .img5{
      margin-left: 0;
      width: 230px;
      height: 128.8px;
    }
    .board-list .img6{
      margin-right: 0;
      width: 220px;
      height: 159px;
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
      margin: 16px 0;
      line-height: 24px;
    }
    .board-img-ass-margin1{
      margin-top: 12px;
    }
    .board-img-ass-margin2{
      margin-top: 5px;
    }
    .board-img-ass-margin3{
      margin-top: 16px;
    }
    .board-img-ass-margin4{
      margin-top: 5px;
    }
    .board-img-ass-margin5{
      margin-top: -35px;
    }
    .board-img-ass-margin6{
      margin-top: -21px;
    }
    .board .resumeLink{
      margin: 80px auto;
    }
    .board .board-tab .advice-line1{
      display: none;
    }
    .board .board-tab .advice-line2{
      display: none;
    }
    .board .board-tab .advice-line3{
      display: none;
    }
    .board .board-tab .advice-line4{
      display: none;
    }
    .board .board-tab .advice-line5{
      display: none;
    }
    .board .board-tab .advice-line6{
      display: none;
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
  }
  @media (max-width: 415px) {
    .auto .banLeft{
      width:100%;
      padding: 160px 6% 60px 6%;
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
      padding: 30px 0;
    }
    .board-tab{
      width: 90%;
      margin: auto;
    }
    .board-tab .board-list{
      margin-bottom: 30px;
    }
    .board-list img{
      display: none;
    }
    .board-list .board-img-ass-right{
      float: inherit;
      width: 100%;
    }
    .board-list .board-img-ass-left{
      float: inherit;
      width: 100%;
    }

    .board-img-ass .board-list-des{
      margin: inherit;
      margin-top: 14px;
    }
    .board-img-ass-margin1{
      margin-top: 0;
    }
    .board-img-ass-margin2{
      margin-top: 0;
    }
    .board-img-ass-margin3{
      margin-top: 0;
    }
    .board-img-ass-margin4{
      margin-top: 0;
    }
    .board-img-ass-margin5{
      margin-top: 0;
    }
    .board-img-ass-margin6{
      margin-top: -0;
    }
    .board .resumeLink{
      margin: 30px auto;
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
