<template>
  <div class="companies">
    <v-nav @refreshList="ipadShow"></v-nav>
    <v-jobSeNav></v-jobSeNav>
    <v-ipadNav v-show="this.ipad" @close="ipadHide"></v-ipadNav>
    <div class="auto">
      <div class="top-box">
        <h2>{{jobDetailData.title}}</h2>
        <span class="companies-date">{{jobDetailData.updateTimeStr}}</span>
        <div class="line"></div>
        <ul class="head-tab">
          <li class="head-list">
            <span class="category-name">Category</span>
            <p class="companies-des">
              {{jobDetailData.category}}
            </p>
          </li>
          <li class="head-list">
            <span class="category-name">Subject</span>
            <p class="companies-des">
              {{jobDetailData.subject}}
            </p>
          </li>
          <li class="head-list">
            <span class="category-name">Grade</span>
            <p class="companies-des">
              {{jobDetailData.age_group}}
            </p>
          </li>
        </ul>
        <a href="javascript:;" class="apply" @click="applyLink">Apply For This Job</a>
      </div>
      <div class="companies-content clear">
        <div class="content-left" ref="contentLeft">

        </div>
        <div class="content-right clear" @click="linkSchool(school.instituteName)">
          <div class="school-left">
            <h6>See Company Profile</h6>
            <div class="line"></div>
            <div class="logo-box">
              <img :src="school.logoURL" alt="">
            </div>
          </div>
          <div class="school-right">
            <h4>{{school.instituteName}}</h4>
            <div class="school-des-box">
              <p class="school-des" ref="schoolDes">

              </p>
              <i class="Ellipsis"></i>
            </div>
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
  import nav from '../components/public/nav/nav'
  import jobSeNav from '../components/public/job-seNav/job-seNav'
  import footer from '../components/public/footer/footer'
  import goTop from '../components/public/goTop/goTop'
  import ipadNav from '../components/public/ipad-nav/ipadNav'
  var addthis_share = {};
  if (process.BROWSER_BUILD) {
    Vue.use(VueResource);
  }
  export default{
    data(){
        return{
          jobDetailData:'',
          school:'',
          title:'',
          subject:'',
          ipad:false,
          channel:'',
          eId:''
        }
    },
    head:{
      meta:[
        { name:"keywords", content:"jobs in China"},
      ]
    },
    methods:{
      ipadShow(){
        this.ipad=true
      },
      ipadHide(){
        this.ipad=false
      },
      linkSchool(schoolName){
          var reg=/\s+/g;
          var newName = schoolName.replace(reg,'-')
          window.open('/company/'+newName+'.html')
      },
      applyLink(){
        window.open('https://app.jobvite.com/j?aj='+this.eId+'&s='+this.channel+'')
      }
    },
    components:{
      'v-nav':nav,
      'v-jobSeNav':jobSeNav,
      'v-footer':footer,
      'v-goTop':goTop,
      'v-ipadNav':ipadNav
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
      this.channel=window.location.href.queryURLParameter()["channel"];
      this.channel=this.channel===undefined?'':this.channel;
      this.$http.get(interfaceStr+'/cc/to/c/requisition/detail.action?id='+jobId+'&channel='+this.channel+'').then(function (response) {
        this.jobDetailData=response.body.requisition;
        this.school=response.body.requisition.inst;
        this.title=response.body.requisition.title;
        this.subject=response.body.requisition.subject;
        this.eId=response.body.requisition.eId;
        var description=response.body.requisition.description;
        this.$refs.contentLeft.innerHTML=description;
        var introduction=response.body.requisition.inst.introduction;
        this.$refs.schoolDes.innerHTML=introduction
        $("title").html(this.title);
        var url=window.location.href;
        var html = '<meta name="description" content="'+this.subject+'">'
          +'<meta property="og:url" content="'+url+'"/>'
          +'<meta property="og:type" content="article"/>';
       $("head").append(html)
      });
      addthis()
    }
  }
</script>

<style>
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
    background: #FAFAFC;
    border: 1px solid #E9EDFB;
    border-radius: 100px;
    width: 76px;
    height: 28px;
    line-height: 28px;
    text-align: center;
  }
  .top-box .head-tab .head-list .companies-des{
    margin-left: 10px;
    width: 855px;
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
  .companies-content .content-left p{
    font-size: 14px;
    color: #666;
    line-height: 24px;
  }
  .companies-content .content-left li{
    font-size: 14px;
    color: #666;
    line-height: 24px;
  }
  .companies-content .content-left li{
    list-style: disc;
    margin-left: 19px;
  }
  .companies-content .content-left strong{
    font-size: 20px;
    color: #333435;
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
  .school-des-box{
    position: relative;
  }
  .content-right .school-des{
    display: inline-block;
    height: 360px;
    font-size: 14px;
    color: #666666;
    letter-spacing: 0;
    line-height: 30px;
    overflow: hidden;
  }
  .school-des-box .Ellipsis{
    position: absolute;
    bottom:10px;
    right:0;
    width: 40px;
    height: 24px;
    background: url("../assets/img/jobs/icon-ellipsis-normal.svg")no-repeat center;
  }
  .companies-content .content-right:hover h4{
    text-decoration: underline;
  }
  .companies-content .content-right:hover .Ellipsis{
    background: url("../assets/img/jobs/icon-ellipsis-press.svg")no-repeat center;
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
      width: 550px;
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
      margin: 60px 0 8px 0;
    }
    .content-right .school-des{
      height: 75px;
      line-height: 24px;
    }
  }
  @media (max-width: 415px) {
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
      width: 20%;
      vertical-align: top;
      margin-top: -4px;
    }
    .top-box .head-tab .head-list .companies-des{
      width: 76%;
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
      height: 124px;
    }
  }
</style>
