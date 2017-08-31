<template>
  <div :class="navBox" id="index">
    <!--<h2>Career&nbspChina</h2>-->
    <div class="logoBox">
      <a href="http://www.careerchina.com" :class="ccLogo"
         title="teaching jobs in china,english teaching jobs in china">
      </a>
      <i :class="line"></i>
      <a href="http://www.100tal.com/" :class="talLogo" target="_blank"></a>
    </div>
    <ul class="tal clear">
      <li :class="CLASS">
        <a href="/" id="home" name="Working in China">HOME</a>
      </li>
      <li :class="CLASS">
        <a href="/jobs-in-China" id="JOB" name="Jobs in China" ref="jobs">OPPORTUNITIES</a>
      </li>
      <li :class="CLASS">
        <a href="/how-to-move-to-China" ref="ser" name="how to move to china">SERVICES</a>
      </li>
      <li :class="CLASS">
        <a href="/how-to-move-to-China" ref="ser" name="how to move to china">TEFL</a>
      </li>
      <li :class="CLASS">
        <a href="/life-in-China-blog" ref="bl" name="life in China">BLOG</a>
      </li>
      <!--<li :class="CLASS">
        <a href="/about-career-China" id="us" name="about us">ABOUT US</a>
      </li>-->
    </ul>
    <div :class="navRight">
      <a href="http://business.careerchina.com" target="_blank">EMPLOYER ACCESS ( 企业服务 )</a>
      <!--<b>/</b>
      <a href="javascript:;" class="log">LOG IN</a>
      <a href="javascript:;" class="sign meet">SIGN UP</a>-->
    </div>
    <div :class="slideshow" @click="open">
      <button :class="trigger">
        <span aria-hidden="true"></span>
      </button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import $ from 'jquery';
  export default{
      data(){
          return{
            navBox:'navBox',
            CLASS:'list',
            ccLogo:'ccLogo',
            talLogo:'talLogo',
            line:'line',
            navRight:'navRight',
            slideshow:'slideshow',
            trigger:'cd-nav-trigger',
          }
      },
    created(){

    },
    mounted () {
        var _this=this;
      var reg=/life-in-China-blog/,
          reg1=/live-in-China/,
          reg2=/travel-in-China/,
          reg3=/work-in-China/,
          reg4=/guides/,
          reg5=/on-boarding/,
          reg6=/how-to-move-to-China/,
          reg7=/jobs-in-China/,
          reg8=/job-detail/,
          reg9=/companies/;
      var url=window.location.href;
      if(reg.test(url)===true || reg1.test(url)===true || reg2.test(url)===true || reg3.test(url)===true || reg4.test(url)===true || reg5.test(url)===true){
        _this.CLASS='list1';
        _this.navBox='navBox1';
        _this.ccLogo='ccLogo1';
        _this.talLogo='talLogo1';
        _this.line='line1';
        _this.navRight='navRight1';
        _this.trigger='cd-nav-trigger1';
        this.$refs.bl.className='active';
      }else if(reg6.test(url)===true){
        this.$refs.ser.className='active';
      }else if(reg7.test(url)===true || reg8.test(url)===true || reg9.test(url)===true){
        _this.CLASS='list1';
        _this.navBox='navBox1';
        _this.ccLogo='ccLogo1';
        _this.talLogo='talLogo1';
        _this.line='line1';
        _this.navRight='navRight1';
        _this.trigger='cd-nav-trigger1';
        this.$refs.jobs.className='active';
      }

      $(document).ready(function(){
        var scroll_pos = 0;
        $(document).scroll(function() {
          scroll_pos = $(this).scrollTop();
          if(scroll_pos > 0) {
            _this.CLASS='list1';
            _this.navBox='navBox1';
            _this.ccLogo='ccLogo1';
            _this.talLogo='talLogo1';
            _this.line='line1';
            _this.navRight='navRight1';
            _this.trigger='cd-nav-trigger1'
          } else if(reg.test(url)===true || reg1.test(url)===true || reg2.test(url)===true || reg3.test(url)===true || reg4.test(url)===true || reg5.test(url)===true || reg7.test(url)===true || reg8.test(url)===true || reg9.test(url)===true){
            _this.CLASS='list1';
            _this.navBox='navBox1';
            _this.ccLogo='ccLogo1';
            _this.talLogo='talLogo1';
            _this.line='line1';
            _this.navRight='navRight1';
            _this.trigger='cd-nav-trigger1'
          }else {
            _this.CLASS='list';
            _this.navBox='navBox';
            _this.ccLogo='ccLogo';
            _this.talLogo='talLogo';
            _this.line='line';
            _this.navRight='navRight';
            _this.trigger='cd-nav-trigger'
          }
        });
      });
      /*var url = window.location.href;
      var reg = /working-in-china/g;
      var reg1 = /jobs-in-china.html/g;
      var reg2 = /companies-in-china/g;
      var reg3 = /company/g;
      var reg4 = /how-to-move-to-china/g;
      var reg5 = /job-placement-china/g;
      var reg6 = /china-work-visa/g;
      var reg7 = /moving-to-china/g;
      var reg8 = /life-in-china-blog/g;
      var reg9 = /live-in-china/g;
      var reg10 = /travel-in-china/g;
      var reg11 = /work-in-china/g;
      var reg12 = /guides/g;
      var reg13 = /on-boarding/g;
      var reg14 = /about-career-china/g;
      if (reg.test(url)) {
        $('#home').addClass('active');
      } else if (reg2.test(url) || reg3.test(url) || reg1.test(url)) {
        $('#JOB').addClass('active');
      } else if (reg4.test(url) || reg5.test(url) || reg6.test(url) || reg7.test(url)) {
        $('#ser').addClass('active');
      } else if (reg8.test(url) || reg9.test(url) || reg10.test(url) || reg11.test(url) || reg12.test(url) || reg13.test(url)) {
        $('#bl').addClass('active');
      } else if (reg14.test(url)) {
        $('#us').addClass('active');
      }*/
    },
    methods:{
      open(){
          this.slideshow = this.slideshow==='slideshow'?'nav-open':'slideshow'
      }
    }
  };
</script>

<style scoped>
  .navBox,.navBox1 {
    display: flex;
    position: fixed;
    top:0;
    width: 100%;
    height: 80px;
    z-index: 10;
    transition: all .5s;
  }
  .navBox{
    background: transparent;
  }
  .navBox1{
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(112,112,112,0.08);
    border-bottom: 1px solid rgba(112,112,112,0.08);
    transition: all 0s;
  }
  .logoBox {
    font-size: 0;
    margin: 27.5px 0 0 39px;
    justify-content: flex-start;
  }

  .logoBox .ccLogo,.ccLogo1 {
    display: inline-block;
    width: 116px;
    height: 23px;
    background-size: cover;
    overflow: hidden;
  }
  .logoBox .ccLogo {
    background: url("./web-logo-careerchina-white.png") no-repeat;
  }
  .logoBox .ccLogo1 {
    background: url("./web-logo-careerchina-color.png") no-repeat;
  }
  .logoBox .line,.line1 {
    display: inline-block;
    height: 22px;
    width: 1px;
    margin: 0 20px;
  }
  .logoBox .line{
    background: #fff;
    opacity: .6;
    filter: alpha(opacity=60);
  }
  .logoBox .line1{
    background: rgba(51,52,53,.36);
  }
  .logoBox .talLogo,.talLogo1 {
    display: inline-block;
    width: 95px;
    height: 25px;
    background-size: cover;
  }
  .logoBox .talLogo {
    background: url("./web-logo-tal-white.png") no-repeat;
  }
  .logoBox .talLogo1 {
    background: url("./web-logo-tal-color.png") no-repeat;
  }
  .tal {
    margin: auto;
    /* height: 60px;*/
    line-height: 80px;
    justify-content: center;
  }

  .tal .list,.list1 {
    float: left;
  }
  .tal .list a,.list1 a {
    display: block;
    font-size: 14px;
    font-weight: bold;
    padding: 0 20px;
    height: 80px;
    line-height: 80px;
  }
  .tal .list a{
    color: #fff;
    opacity: .8;
    filter: alpha(opacity=80);
  }
  .tal .list1 a{
    color: rgba(1,52,53,1);
  }
  .tal .list .active {
    opacity: 1;
    filter: alpha(opacity=100);
    border-bottom: 2px solid rgba(255,255,255,.6);
  }
  .tal .list1 .active{
    color: #4B4DFF;
    border-bottom: 2px solid rgba(75,77,255,.5);
  }
  .tal .list a:hover {
    opacity: 1;
  }
  .tal .list1 a:hover {
    color: #4B4DFF;
  }
  .navRight,.navRight1{
    justify-content:flex-end;
    line-height: 80px;
    margin-right: 39px;
    font-size: 0;
  }
  .navRight b,.navRight1 b{
    display: inline-block;
    font-size: 14px;
    margin: 0 20px;
  }
  .navRight b{
    color: #fff;
    opacity: .6;
    filter: alpha(opacity=60);
  }
  .navRight1 b{
    color: rgba(51,52,53,.6);
  }
  .navRight a,.navRight1 a{
    font-size: 14px;
    font-weight: 600;
  }
  .navRight a{
    color: #fff;
    opacity: .8;
    filter: alpha(opacity=80);
  }
  .navRight1 a{
    color: rgba(51,52,53,1);
  }
  .navRight a:hover{
    opacity: 1;
    filter: alpha(opacity=100);
  }
  .navRight1 a:hover{
    color: #4B4DFF;
  }
  .navRight .log,.navRight1 .log{
    margin-right: 10px;
  }
  .navRight .sign,.navRight1 .sign{
    position: relative;
    border-radius: 2px;
    padding: 11px 9px;
    text-transform: capitalize;
  }
  .navRight .sign{
    border: 0;
    box-sizing: border-box;
    box-shadow: inset 0 0 0 1px rgba(255,255,255,.6);
  }
  .navRight1 .sign{
    border: 0;
    box-sizing: border-box;
    box-shadow: inset 0 0 0 1px rgba(51,52,53,.6);
  }
  .sign::before, .sign::after {
    box-sizing: border-box;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 2px;
  }
  .sign {
    -webkit-transition: color 0.25s;
    transition: color 0.25s;
  }
  .sign::before, .sign::after {
    width: 0;
    height: 0;
  }
  .sign::before {
    top: 0;
    left: 0;
  }
  .sign::after {
    bottom: 0;
    right: 0;
  }
  .sign:hover::before, .sign:hover::after {
    width: 100%;
    height: 100%;
  }
  .sign:hover::before {
    -webkit-transition: width 0.25s ease-out 0s, height 0.125s ease-out 0.25s;
    transition: width 0.25s ease-out 0s, height 0.125s ease-out 0.25s;
  }
  .navRight .meet:hover::before {
    border-top:2px solid #fff;
    border-right:2px solid #fff;
  }
  .navRight .meet:hover::after {
    border-bottom:2px solid #fff;
    border-left:2px solid #fff;
    -webkit-transition: width 0.25s ease-out 0.375s , height 0.125s ease-out .625s;
    transition: width 0.25s ease-out 0.375s , height 0.125s ease-out .625s;
  }
  .navRight1 .meet:hover::before {
    border-top:2px solid rgba(51,52,53,1);
    border-right:2px solid rgba(51,52,53,1);
  }
  .navRight1 .meet:hover::after {
    border-bottom:2px solid rgba(51,52,53,1);
    border-left:2px solid rgba(51,52,53,1);
    -webkit-transition: width 0.25s ease-out 0.375s , height 0.125s ease-out .625s;
    transition: width 0.25s ease-out 0.375s , height 0.125s ease-out .625s;
  }

  .slideshow,.nav-open{
    float: right;
    margin-right: 20px;
    display: none;
  }
  .cd-nav-trigger,.cd-nav-trigger1 {
    position: absolute;
    z-index: 2;
    top: 6px;
    right: 1%;
    height: 40px;
    width: 40px;
    cursor: pointer;
    border-radius: 50%;
    border: none;
    outline: none;
    overflow: hidden;
    text-indent: 100%;
    white-space: nowrap;
    color: transparent;
    background: transparent;
  }
  .cd-nav-trigger span,.cd-nav-trigger1 span{
    left: 50%;
    top: 50%;
    bottom: auto;
    right: auto;
    -webkit-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    -o-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    -webkit-transition: background-color 0.3s;
    -moz-transition: background-color 0.3s;
    transition: background-color 0.3s;
  }
  .cd-nav-trigger span, .cd-nav-trigger span::after, .cd-nav-trigger span::before {
    position: absolute;
    height: 2px;
    width: 18px;
    background-color: #ffffff;
  }
  .cd-nav-trigger1 span, .cd-nav-trigger1 span::after, .cd-nav-trigger1 span::before {
    position: absolute;
    height: 2px;
    width: 18px;
    background-color: rgba(51,52,53,1);
  }
  .cd-nav-trigger span::before {
    -webkit-transform: translateY(-6px);
    -moz-transform: translateY(-6px);
    -ms-transform: translateY(-6px);
    -o-transform: translateY(-6px);
    transform: translateY(-6px);
  }
  .cd-nav-trigger1 span::before{
    -webkit-transform: translateY(-6px);
    -moz-transform: translateY(-6px);
    -ms-transform: translateY(-6px);
    -o-transform: translateY(-6px);
    transform: translateY(-6px);
  }
  .cd-nav-trigger span::after {
    -webkit-transform: translateY(6px);
    -moz-transform: translateY(6px);
    -ms-transform: translateY(6px);
    -o-transform: translateY(6px);
    transform: translateY(6px);
  }
  .cd-nav-trigger1 span::after {
    -webkit-transform: translateY(6px);
    -moz-transform: translateY(6px);
    -ms-transform: translateY(6px);
    -o-transform: translateY(6px);
    transform: translateY(6px);
  }
  .cd-nav-trigger span::after, .cd-nav-trigger span::before {
    content: '';
    left: 0;
    -webkit-transition: -webkit-transform 0.3s;
    -moz-transition: -moz-transform 0.3s;
    transition: transform 0.3s;
  }
  .cd-nav-trigger1 span::after, .cd-nav-trigger1 span::before {
    content: '';
    left: 0;
    -webkit-transition: -webkit-transform 0.3s;
    -moz-transition: -moz-transform 0.3s;
    transition: transform 0.3s;
  }
  .nav-open .cd-nav-trigger span {
    background-color: transparent;
  }
  .nav-open .cd-nav-trigger1 span {
    background-color: transparent;
  }
  .nav-open .cd-nav-trigger span::before {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  .nav-open .cd-nav-trigger1 span::before {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  .nav-open .cd-nav-trigger span::after {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
  .nav-open .cd-nav-trigger1 span::after {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
  @media (max-width: 1208px) and (min-width: 769px){
    .navBox,.navBox1{
      min-width: 1040px;
    }
    .tal .list a,.list1 a{
      padding: 0 10px;
      font-size: 12px;
    }
    .navRight a,.navRight1 a{
      font-size: 12px;
    }
    .navRight b,.navRight1 b{
      margin: 0 10px;
    }
  }
  @media (max-width: 768px) {
    .navBox,.navBox1{
      width: 100%;
      height: 50px;
    }
    .logoBox{
      margin: 12px 0 0 20px;
    }
    .tal{
      display: none;
    }
    .tal .list,.list1{
      display: none;
    }
    .navRight,.navRight1{
      display: none;
    }
    .slideshow,.nav-open{
      display: block;
    }
  }
</style>
