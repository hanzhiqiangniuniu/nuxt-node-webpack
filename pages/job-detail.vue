<template>
  <div class="companies">
    <v-nav></v-nav>
    <v-jobSeNav></v-jobSeNav>
    <div class="auto">
      <div class="top-box">
        <h2>{{jobDetailData.title}}</h2>
        <span class="companies-date">{{jobDetailData.updateTime}}</span>
        <div class="line"></div>
        <ul class="head-tab">
          <li class="head-list">
            <span class="category-name">Category:</span>
            <p class="companies-des">
              {{jobDetailData.category}}
            </p>
          </li>
          <li class="head-list">
            <span class="category-name">Subject:</span>
            <p class="companies-des">
              {{jobDetailData.subject}}
            </p>
          </li>
          <li class="head-list">
            <span class="category-name">Grade:</span>
            <p class="companies-des">
              {{jobDetailData.age_group}}
            </p>
          </li>
        </ul>
        <a :href="jobDetailData.applyLink" class="apply">Apply For This Job</a>
      </div>
      <div class="companies-content clear">
        <div class="content-left" ref="contentLeft">

        </div>
        <div class="content-right clear">
          <div class="school-left">
            <h6>See Company Profile</h6>
            <div class="line"></div>
            <div class="logo-box">
              <img :src="school.logoURL" alt="">
            </div>
          </div>
          <div class="school-right">
            <h4>{{school.instituteName}}</h4>
            <p class="school-des" ref="schoolDes">

            </p>
          </div>
        </div>
      </div>
    </div>
    <!--<div class="fixApply">
      <div class="auto">
        <p class="applyDes"></p>
        <a href="javascript:;" class="applyBtn"></a>
        <i class="closeICon"></i>
      </div>
    </div>-->
    <v-goTop></v-goTop>
    <v-footer></v-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import $ from 'jquery'
  import Vue from 'vue'
  import VueResource from 'vue-resource';
  import interfaceStr from '../assets/js/interface.js'
  import addthis from '../assets/js/addthis.js';
  import '../assets/css/reset.min.css'
  import nav from '../components/public/nav/nav'
  import jobSeNav from '../components/public/job-seNav/job-seNav'
  import footer from '../components/public/footer/footer'
  import goTop from '../components/public/goTop/goTop'
  var addthis_share = {};
  if (process.BROWSER_BUILD) {
    Vue.use(VueResource);
  }
  export default{
    data(){
        return{
          jobDetailData:'',
          school:''
        }
    },
    components:{
      'v-nav':nav,
      'v-jobSeNav':jobSeNav,
      'v-footer':footer,
      'v-goTop':goTop
    },
    mounted(){
      String.prototype.queryURLParameter=function () {
        var obj={},
          reg=/([^?=&#]+)=([^?=&#]+)/g;
        this.replace(reg,function () {
          var key=arguments[1],
            value=arguments[2];
          obj[key]=value;
        });
        return obj;
      };
      var jobId=window.location.href.queryURLParameter()["id"];
      this.$http.get('http://'+interfaceStr+'/cc/to/c/requisition/detail.action?id='+jobId+'').then(function (response) {
        this.jobDetailData=response.body.requisition;
        this.school=response.body.requisition.inst;
        var description=response.body.requisition.description;
        this.$refs.contentLeft.innerHTML=description;
        var introduction=response.body.requisition.inst.introduction;
        this.$refs.schoolDes.innerHTML=introduction
      });
      addthis()
    }
  }
</script>

<style scoped>
  .companies{
    width: 100%;
    background: #F9F9FB;
    padding-top: 190px;
  }
  .auto{
    width: 1040px;
    margin: auto;
  }
  .top-box{
    width: 100%;
    padding: 50px 40px;
    background: #fff;
  }
  .top-box h2{
    font-size: 24px;
    color: #333435;
    letter-spacing: 0;
    line-height: 24px;
  }
  .top-box .companies-date{
    margin: 12px 0;
    display: block;
    font-size: 12px;
    color: #989898;
    letter-spacing: 0;
  }
  .line{
    width: 40px;
    height: 1px;
    background-image: linear-gradient(45deg,#19DFE8 0%,#4B4DFF 100%);
  }
  .top-box .head-tab{
    margin-top: 12px;
  }
  .top-box .head-tab .head-list{
    margin-bottom: 14px;
    font-size: 0;
  }
  .top-box .head-tab .head-list:last-child{
    margin-bottom: 0;
  }
  .top-box .head-tab .head-list .category-name,.companies-des{
    display: inline-block;
    font-size: 14px;
    color: #666666;
    letter-spacing: 0;
  }
  .top-box .head-tab .head-list .category-name{
    width: 65px;
    vertical-align: top;
  }
  .top-box .head-tab .head-list .companies-des{
    margin-left: 15px;
    width: 880px;
  }
  .top-box .apply{
    display: block;
    width: 230px;
    height: 44px;
    line-height: 44px;
    margin-top: 25px;
    background-image: linear-gradient(135deg, #19DFE8 0%, #4889FF 54%, #4B4DFF 100%);
    box-shadow: 0 2px 16px 0 rgba(101,112,144,0.50);
    border-radius: 2px;
    font-size: 14px;
    color: #FFFFFF;
    font-weight: bold;
    text-align: center;
  }
  .companies-content{
    margin: 20px 0 50px 0;
  }
  .companies-content .content-left{
    float: left;
    width: 740px;
    background: #fff;
    padding: 50px 40px;
  }
  .companies-content .content-right{
    padding: 30px 20px;
    width: 280px;
    float: right;
    background: #fff;
    cursor: pointer;
  }
  .companies-content .content-right h6{
    margin-bottom: 20px;
    font-size: 16px;
    color: #333435;
  }
  .content-right .logo-box{
    margin-top: 20px;
    width: 240px;
    height: 120px;
  }
  .content-right .logo-box img{
    width: 100%;
  }
  .content-right h4{
    margin: 20px 0 14px 0;
    font-size: 16px;
    color: #333435;
    letter-spacing: 0;
    line-height: 16px;
  }
  .content-right .school-des{
    height: 360px;
    font-size: 14px;
    color: #666666;
    letter-spacing: 0;
    line-height: 30px;
    overflow: hidden;
  }
  .companies-content .content-right:hover h4{
    text-decoration: underline;
  }
  .companies-content .content-right:hover .school-des{
    color: #4B4DFF;
  }
  @media (max-width: 768px) {
    .companies{
      padding-top: 120px;
    }
    .auto{
      width: 688px;
    }
    .top-box{
      padding: 40px 20px;
    }
    .top-box h2{
      font-size: 17px;
      line-height: 17px;
    }
    .top-box .head-tab .head-list .companies-des{
      width: 568px;
    }
    .companies-content{
      margin: 20px 0;
    }
    .companies-content .content-left{
      float: inherit;
      width: 100%;
      padding: 40px 20px;
    }
    .companies-content .content-right{
      width: 100%;
      float: inherit;
    }
    .companies-content .content-right .school-left{
      float: left;
      width: 200px;
    }
    .companies-content .content-right .school-right{
      width: 428px;
      float: right;
    }
    .content-right .logo-box{
      width: 200px;
      height: 100px;
    }
    .content-right h4{
      margin: 60px 0 14px 0;
    }
    .content-right .school-des{
      height: 210px;
    }
  }
  @media (max-width: 401px) {
    .companies{
      padding-top: 110px;
    }
    .auto{
      width: 100%;
      margin: inherit;
    }
    .top-box{
      padding: 30px 5%;
    }
    .top-box h2{
      line-height: 26px;
    }
    .top-box .head-tab .head-list .companies-des{
      width: 100%;
    }
    .top-box .head-tab .head-list .category-name{
      width: 19%;
    }
    .top-box .head-tab .head-list .companies-des{
      width: 78%;
      margin-left: 3%;
    }
    .companies-content{
      margin: 10px 0;
    }
    .companies-content .content-left{
      padding: 30px 5%;
      margin-bottom: 10px;
    }
    .companies-content .content-right{
      padding: 30px 5%;
    }
    .companies-content .content-right .school-left{
      float: inherit;
    }
    .companies-content .content-right .school-right{
      width: 100%;
      float: inherit;
    }
    .content-right .logo-box{
      width: 200px;
      height: 100px;
    }
    .content-right h4{
      margin: 20px 0 14px 0;
    }
    .content-right .school-des{
      height: 270px;
    }
  }
</style>
