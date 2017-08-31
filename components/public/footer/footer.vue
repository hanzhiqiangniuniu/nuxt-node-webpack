<template>
  <div class="footer">
    <div class="site">
      <div class="siteMain">
        <ul class="siteTab clear">
          <li class="siteList">
            <h3 class="navName">PROGRAMS</h3>
            <a href="jobs-in-china.html" title="Jobs in China">Featured Jobs</a>
            <a href="company/First-Leap-China.html" title="First Leap China">First Leap China</a>
            <a href="company/Meten-Education-Group.html" title="Meten">Meten</a>
            <a href="company/Kids-R-Kids.html" title="Kids R Kids">Kids R Kids</a>
            <a href="company/RDFZ-Xishan-School.html" title="RDFZ Xinshan School">RDFZ Xinshan School</a>
            <a href="company/Beijing-SMIC-Private-School.html" title="Beijing SMIC School">Beijing SMIC School</a>
          </li>
          <li class="siteList">
            <h3 class="navName">SERVICES</h3>
            <a href="job-placement-china.html" title="job placement China">Career Advice</a>
            <a href="china-work-visa.html" title="china work visa">Work Visa</a>
            <a href="moving-to-china.html" title="moving to china">Ground Service</a>
            <!--<a href="javascript:;">Why Choose Career China</a>-->
            <a href="moving-to-china.html#quesTitle" @click="href2" title="moving to china">FAQS</a>
          </li>
          <li class="siteList">
            <h3 class="navName">LATEST ARTICLES</h3>
            <a href="live-in-china.html" title="live in China">Live</a>
            <a href="travel-in-china.html" title="travel in China">Travel</a>
            <a href="work-in-china.html" title="work in China">Work</a>
            <a href="guides.html" title="city guides in China">Guides</a>
            <a href="on-boarding.html" title="On-boarding">On-boarding</a>
            <a href="life-in-china-blog.html" target="_blank" title="life in China">View More Posts</a>
          </li>
          <li class="siteList">
            <h3 class="navName">ABOUT</h3>
            <a href="about-career-china.html" title="career china">About Us</a>
            <a href="about-career-china.html#doing" title="career china team">Team</a>
            <a href="http://business.careerchina.com" target="_blank">For Chinese Companies</a>
          </li>
          <li class="siteList" style="margin-right:0">
            <h3 class="navName">CONTACT US</h3>
            <a href="about-career-china.html" title="career china">TEL : +86 400-669-7618</a>
            <a href="about-career-china.html#doing" title="career china team">ADDRESS : Linda Plaza B-5C, Dongtucheng Road,</a>
            <a href="http://business.careerchina.com" target="_blank">For Chinese Companies</a>
            <a href="http://business.careerchina.com" target="_blank">Chaoyang District, Beijing, China</a>
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
            <a href="javascript:;">jobs@careerchina.com</a>
          </li>
          <li class="adList">
            <i class="location-icon"></i>
            <a href="javascript:;" class="lastT">
              Linda Plaza B-5C, Dongtucheng Road, Chaoyang District, Beijing, China
            </a>
          </li>
        </ul>
        <div class="linkTab">
          <a href="javascript:;" title="FACEBOOK"><i class="face"></i><span class="text">FACEBOOK</span></a>
          <a href="javascript:;" title="TWITTER"><i class="teitter"></i><span class="text">TWITTER</span></a>
          <a href="javascript:;" title="LINKEDLN"><i class="link"></i><span class="text">LINKEDLN</span></a>
          <a href="javascript:;" title="INSTAGRAM"><i class="inst"></i><span class="text">INSTAGRAM</span></a>
          <a href="javascript:;" title="GOOGLE"><i class="goo"></i><span class="text">GOOGLE</span></a>
          <a href="javascript:;" title="YOUTUBE"><i class="tub"></i><span class="text">YOUTUBE</span></a>
          <a href="javascript:;" title="PINTEREST"><i class="pint"></i><span class="text">PINTEREST</span></a>
        </div>
      </div>
      <div class="fooBot">
        <p class="copy">
          Copyright © 2017 Career China. All rights reserved.  京ICP备16068124号-1
        </p>
        <div class="footerLink">
          <a href="javascript:;">Term of Service</a>
          <i class="footerLine">|</i>
          <a href="javascript:;">Privacy Policy</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    methods: {
      href () {
        try {
          document.body.scrollTop = 0;
        } catch (e) {
        }
      },
      href2 () {
        try {
          var oList = document.getElementById('list_Box');
          oList.style.marginTop = '0';
          document.body.scrollTop = oList.offsetTop;
        } catch (e) {
        }
      },
      href3 () {
        document.body.scrollTop = 600;
      }
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
    margin-right: 78px;
    float: left;
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

  .site .siteMain .icTab{
    position: absolute;
    right: 0;
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
    margin: 40px 0 30px 40px;
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
    opacity: 0.6;
    font-size: 12px;
    color: #FFFFFF;
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

  @media (max-width: 487px) {
    .lastT{
      margin: -14px 0 0 0;
      padding-left:16px;
    }
    .fooBot .copy{
      width: 281px;
      margin: auto;
    }
  }
</style>
