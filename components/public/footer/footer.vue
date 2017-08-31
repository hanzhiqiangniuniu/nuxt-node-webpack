<template>
  <div class="footer">
    <div class="site">
      <div class="siteMain">
        <ul class="siteTab clear">
          <li class="siteList">
            <h3 class="navName">PROGRAMS</h3>
            <a href="/jobs-in-China" title="Jobs in China">Featured Jobs</a>
            <a href="javascript:;" :title="schoolData1.instituteName" @click="linkSchool(schoolData1.instituteName)">{{schoolData1.instituteName}}</a>
            <a href="javascript:;" :title="schoolData2.instituteName" @click="linkSchool(schoolData2.instituteName)">{{schoolData2.instituteName}}</a>
            <a href="javascript:;" :title="schoolData3.instituteName" @click="linkSchool(schoolData3.instituteName)">{{schoolData3.instituteName}}</a>
            <a href="javascript:;" :title="schoolData4.instituteName" @click="linkSchool(schoolData4.instituteName)">{{schoolData4.instituteName}}</a>
            <a href="javascript:;" :title="schoolData5.instituteName" @click="linkSchool(schoolData5.instituteName)">{{schoolData5.instituteName}}</a>
          </li>
          <li class="siteList">
            <h3 class="navName">SERVICES</h3>
            <a href="/job-placement-China" title="job placement China">Career Advice</a>
            <a href="/work-visa-China" title="china work visa">Work Visa</a>
            <a href="/moving-to-China" title="moving to china">Ground Service</a>
            <!--<a href="javascript:;">Why Choose Career China</a>-->
            <a href="/moving-to-China#question" title="moving to china">FAQS</a>
          </li>
          <li class="siteList">
            <h3 class="navName">LATEST ARTICLES</h3>
            <a href="/live-in-China" title="live in China">Live</a>
            <a href="/travel-in-China" title="travel in China">Travel</a>
            <a href="/work-in-China" title="work in China">Work</a>
            <a href="/guides" title="city guides in China">Guides</a>
            <a href="/on-boarding" title="On-boarding">On-boarding</a>
            <a href="/life-in-China-blog" target="_blank" title="life in China">View More Posts</a>
          </li>
          <li class="siteList">
            <h3 class="navName">ABOUT</h3>
            <!--<a href="/about-career-China" title="career china">About Us</a>
            <a href="/about-career-China#doing" title="career china team">Team</a>-->
            <a href="http://business.careerchina.com" target="_blank">For Chinese Companies</a>
          </li>
          <li class="siteList" style="margin-right:0">
            <h3 class="navName">CONTACT US</h3>
            <a href="javascript:;" title="career china">TEL : +86 400-669-7618</a>
            <a href="mailto:jobs@careerchina.com" title="career china team" class="email">EMAIL : jobs@careerchina.com</a>
            <a href="javascript:;" target="_blank">ADDRESS : Linda Plaza B-5C, Dongtucheng Road, </a>
            <a href="javascript:;" target="_blank">Chaoyang District, Beijing, China</a>
          </li>
        </ul>
        <ul class="icTab clear">
          <li class="icList" title="FACEBOOK">
            <a href="https://www.facebook.com/CareerChinaJobs/" class="face" target="_blank"></a>
          </li>
          <li class="icList" title="TWITTER">
            <a href="https://twitter.com/Career_China" class="bird" target="_blank"></a>
          </li>
          <li class="icList" title="LINKEDLN">
            <a href="https://www.linkedin.com/company-beta/17913665/" class="in" target="_blank"></a>
          </li>
          <li class="icList" title="INSTAGRAM">
            <a href="https://www.instagram.com/careerchina/" class="camera" target="_blank"></a>
          </li>
          <li class="icList" title="GOOGLE">
            <a href="https://plus.google.com/u/0/116387979022769777244" class="google" target="_blank"></a>
          </li>
          <li class="icList" title="YOUTUBE">
            <a href="https://www.youtube.com/channel/UCFA7l6MzmjNtVQAaZtReCeA" class="you" target="_blank"></a>
          </li>
          <li class="icList" title="PINTEREST">
            <a href="https://www.pinterest.com/careerchina/" class="pte" target="_blank"></a>
          </li>
        </ul>
      </div>
      <div class="siteMain1">
        <ul class="address">
          <li class="adList">
            <i class="phone-icon"></i>
            <a href="javascript:;">+86 400-669-7618</a>
          </li>
          <li class="adList">
            <i class="email-icon"></i>
            <a href="mailto:jobs@careerchina.com" title="career china team" class="email">jobs@careerchina.com</a>
          </li>
          <li class="adList">
            <i class="location-icon"></i>
            <a href="javascript:;" class="lastT">
              Linda Plaza B-5C, Dongtucheng Road, Chaoyang District, Beijing, China
            </a>
          </li>
        </ul>
        <div class="linkTab">
          <a href="https://www.facebook.com/CareerChinaJobs/" title="FACEBOOK"><i class="face"></i><span class="text">FACEBOOK</span></a>
          <a href="https://twitter.com/Career_China" title="TWITTER"><i class="teitter"></i><span class="text">TWITTER</span></a>
          <a href="https://www.linkedin.com/company-beta/17913665/" title="LINKEDLN"><i class="link"></i><span class="text">LINKEDLN</span></a>
          <a href="https://www.instagram.com/careerchina/" title="INSTAGRAM"><i class="inst"></i><span class="text">INSTAGRAM</span></a>
          <a href="https://plus.google.com/u/0/116387979022769777244" title="GOOGLE"><i class="goo"></i><span class="text">GOOGLE</span></a>
          <a href="https://www.youtube.com/channel/UCFA7l6MzmjNtVQAaZtReCeA" title="YOUTUBE"><i class="tub"></i><span class="text">YOUTUBE</span></a>
          <a href="https://www.pinterest.com/careerchina/" title="PINTEREST"><i class="pint"></i><span class="text">PINTEREST</span></a>
        </div>
      </div>
      <div class="fooBot">
        <p class="copy">
          <span class="copyLeft">
            Copyright © 2017 Career China. All rights reserved. 京ICP备16068124号-1
          </span>
          <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502033181" target="_blank">
            <i class="gongan"></i>京公网安备11010502033181号
           </a>
        </p>
        <div class="footerLink">
          <a href="/term" title="Term of Service">Term of Service</a>
          <i class="footerLine">|</i>
          <a href="/policy" title="Privacy Policy">Privacy Policy</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'
  import VueResource from 'vue-resource';
  import interfaceStr from '../../../assets/js/interface.js'
  if (process.BROWSER_BUILD) {
    Vue.use(VueResource);
  }
  export default{
    data(){
        return{
          schoolData1:'',
          schoolData2:'',
          schoolData3:'',
          schoolData4:'',
          schoolData5:''
        }
    },
    methods: {
      linkSchool(name){
          var reg=/\s/g;
          var newName=name.replace(reg,'-');
          window.open('/company/'+newName+'.html')
      }
    },
    mounted(){
        this.$http.get(interfaceStr+'/cc/to/c/responseInstitute.action').then(function (data) {
          this.schoolData1 = data.body.institute[0];
          this.schoolData2 = data.body.institute[1];
          this.schoolData3 = data.body.institute[2];
          this.schoolData4 = data.body.institute[3];
          this.schoolData5 = data.body.institute[4];
        })
      /*this.$http({
        method:'GET',
        url:interfaceStr+'/cc/to/c/responseInstitute.action'
      }).then(function(data){

        console.log(data.body.institute)
      }, function (error) {

      });*/
    }
  };
</script>

<style scoped>
  /*.footer {
    min-width: 1200px;
  }
*/
  .footer .site {
    position: relative;
    width: 100%;
    background: #2A3256;
    padding: 42px 0 16px 0;
  }
  .footer .site .siteMain {
    position: relative;
    width: 1040px;
    margin: auto;
    z-index: 20;
    padding-bottom: 44px;
    border-bottom: 1px solid rgba(255,255,255,.17);
  }
  .footer .site .siteMain .siteTab {
    margin-top: 20px;
    width: 100%;
  }

  .footer .site .siteMain .siteTab .siteList {
    margin-right: 76px;
    float: left;
  }
  .footer .site .siteMain .siteTab .siteList:first-child{
    width: 116px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .site .siteMain .siteTab .siteList .navName {
    display: block;
    margin-bottom: 20px;
    font-size: 12px;
    color: #fff;
    font-weight: 400;
  }

  .site .siteMain .siteTab .siteList a {
    display: block;
    margin-bottom: 13px;
    font-size: 12px;
    color: #fff;
    opacity: 0.6;
    cursor: pointer;
  }

  .site .siteMain .siteTab .siteList a:hover {
    text-decoration: underline;
  }
  .site .siteMain .siteTab .siteList:last-child a{
    cursor: default;
  }
  .site .siteMain .siteTab .siteList:last-child a:hover{
    text-decoration: none;
  }
  .site .siteMain .siteTab .siteList .email{
    cursor: pointer !important;
  }
  .site .siteMain .siteTab .siteList .email:hover{
    text-decoration: underline  !important;
  }
  .site .siteMain .icTab{
    position: absolute;
    right: 14px;
    bottom: 44px;
  }
  .site .siteMain .icTab .icList{
    float: left;
    margin-right: 12px;
    width: 31px;
    height: 31px;
    border-radius: 50%;
    box-shadow: 0 0 0 20px transparent;
    transition: box-shadow 1s;
    cursor: pointer;
    border: 1px solid #fff;
    padding: 7.5px;
    opacity: .6;
    filter:alpha(opacity=60)
  }
  .site .siteMain .icTab a {
    display: block;
    width: 14px;
    height: 14px;
  }

  .site .siteMain .icTab .icList:hover {
    opacity: 1;
    filter:alpha(opacity=100)
  }

  .site .siteMain .icTab .icList:last-child {
    margin-right: 0;
  }

  .site .siteMain .icTab .icList .face,.siteMain1 .linkTab .face {
    background: url("./icon-facebook@2x.png") no-repeat;
    background-size: cover;
  }

  .site .siteMain .icTab .icList .bird,.siteMain1 .linkTab .teitter {
    background: url("./icon-twitter@2x.png") no-repeat;
    background-size: cover;
  }

  .site .siteMain .icTab .icList .in,.siteMain1 .linkTab .link {
    background: url("./icon-linkin@2x.png") no-repeat;
    background-size: cover;
  }

  .site .siteMain .icTab .icList .camera,.siteMain1 .linkTab .inst {
    background: url("./icon-instagram@2x.png") no-repeat;
    background-size: cover;
  }

  .site .siteMain .icTab .icList .google,.siteMain1 .linkTab .goo {
    background: url("./icon-google@2x.png") no-repeat;
    background-size: cover;
  }

  .site .siteMain .icTab .icList .you,.siteMain1 .linkTab .tub {
    background: url("./icon-youtube@2x.png") no-repeat;
    background-size: cover;
  }

  .site .siteMain .icTab .icList .pte,.siteMain1 .linkTab .pint {
    background: url("./icon-pinterest@2x.png") no-repeat;
    background-size: cover;
  }

  .siteMain1{
    width: 100%;
    display: none;
  }
  .siteMain1 .address{
    margin: 0 0 30px 40px;
  }
  .siteMain1 .address .adList{
    margin-bottom: 14px;
    font-size: 0;
  }
  .siteMain1 .address .adList:last-child{
    margin-bottom: 0;
  }
  .siteMain1 .address .adList a{
    display: inline-block;
    margin-left: 17px;
    opacity: 0.8;
    font-size: 12px;
    color: #FFFFFF;
    vertical-align: middle;
    cursor: default;
  }
  .siteMain1 .address .adList .email{
    cursor: pointer;
  }
  .siteMain1 .address .adList .email:hover{
    text-decoration: underline;
  }
  .siteMain1 .address .adList i{
    display: inline-block;
    vertical-align: middle;
    width: 14px;
    height: 14px;
  }
  .siteMain1 .address .adList .phone-icon{
    background: url("./icon-phone-number@2x.png")no-repeat center;
    background-size: cover;
  }
  .siteMain1 .address .adList .email-icon{
    background: url("./icon-email@2x.png")no-repeat center;
    background-size: cover;
  }
  .siteMain1 .address .adList .location-icon{
    background: url("./icon-address@2x.png")no-repeat center;
    background-size: cover;
  }
  .siteMain1 .linkTab{
    width: 100%;
    height: 54px;
    border-top: 1px solid rgba(255,255,255,.17);
    border-bottom: 1px solid rgba(255,255,255,.17);
    font-size: 0;
  }
  .siteMain1 .linkTab i{
    display: inline-block;
    width: 14px;
    height: 14px;
    margin-right: 6px;
    vertical-align: text-top;
  }
  .siteMain1 .linkTab a{
    display: inline-block;
    opacity: 0.8;
    filter:alpha(opacity=80);
    font-size: 10px;
    color: #FFFFFF;
    width: 14.27%;
    border-right: 1px solid rgba(255,255,255,.17);
    line-height: 54px;
    text-align: center;
  }
  .siteMain1 .linkTab a:hover{
    opacity: 1;
    filter:alpha(opacity=100)
  }
  .fooBot{
    width: 1040px;
    margin: auto;
    padding: 30px 0 35px 0;
  }
  .fooBot .copy{
    float: left;
    width: 637px;
    font-size: 12px;
    color: rgba(255,255,255,.6);
  }
  .copy .gongan{
    display: inline-block;
    margin: 0 3px 0 8px;
    width: 20px;
    height: 20px;
    background: url("./gongan.jpg")no-repeat center;
    vertical-align: bottom;
  }
  .fooBot .copy a{
    font-size: 12px;
    color: rgba(255,255,255,.6);
  }
  .fooBot .copy a:hover{
    text-decoration: underline;
  }
  .fooBot .footerLink{
    float: right;
  }
  .fooBot .footerLink .footerLine{
    margin: 0 15px;
  }
  .fooBot .footerLink a,.footerLine{
    opacity: 0.6;
    font-size: 12px;
    color: #FFFFFF;
  }
  .fooBot .footerLink a:hover{
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    .footer {
      width: 100%;
    }
    .footer .site {
    }
    .footer .site .siteMain{
      display: none;
    }
    .siteMain1{
      display: block;
    }
    .fooBot{
      width: 100%;
    }
    .fooBot .copy{
      float: inherit;
      text-align: center;
    }
    .fooBot .footerLink{
      display: none;
    }
  }

  @media (max-width: 656px) {
    .text{
      display: none;
    }
  }

  @media (max-width: 415px) {
    .lastT{
      margin: -14px 0 0 0;
      padding-left:16px;
    }
    .fooBot .copy{
      width: 306px;
      margin: auto;
    }
    .fooBot .copy .copyLeft{
      display: block;
    }
  }
</style>
