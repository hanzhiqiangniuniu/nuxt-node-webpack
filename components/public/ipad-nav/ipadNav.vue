<template>
  <div class="ipadNav" ref="ipadBox">
    <div class="ulBox" @click="perClose">
      <ul class="navTab" @click="listClick">
        <li class="navList">
          <a href="/" ref="ipadHome">HOME</a>
        </li>
        <li class="navList">
          <a href="/jobs-in-China" ref="ipadJobs">OPPORTUNITIES</a>
        </li>
        <li class="navList">
          <a href="/how-to-move-to-China" ref="ipadServices">SERVICES</a>
        </li>
        <li class="navList">
          <a href="/TEFL" ref="ipadTefl">TEFL</a>
        </li>
        <li class="navList">
          <a href="/life-in-China-blog" ref="ipadBlog">BLOG</a>
        </li>
        <!--<li class="navList">
          <a href="/about-career-China" ref="ipadAbout">ABOUT US</a>
        </li>-->
        <li class="line"></li>
        <li class="navList">
          <a href="http://business.careerchina.com" target="_blank">EMPLOYER ACCESS ( 企业服务 )</a>
        </li>
      </ul>
      <div :class="slideshow" @click="close">
        <button class="cd-nav-trigger1">
          <span aria-hidden="true"></span>
        </button>
      </div>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import $ from 'jquery'
  export default{
    data(){
      return{
        slideshow:'nav-open',
        ipad:false
      }
    },
    methods:{
      close(){
        //this.slideshow = this.slideshow==='nav-open'?'slideshow'
        this.$emit('close');
        $("body").css('overflow-y','initial')
      },
      listClick(e){
          e.stopPropagation()
      },
      perClose(){
        this.$emit('close');
        $("body").css('overflow-y','initial')
      }
    },
    mounted(){
      var url=window.location.href;
      var reg1=/jobs-in-China/,
          reg2=/job-detail/,
          reg3=/companies/,
          reg4=/how-to-move-to-China/,
          reg5=/job-placement-China/,
          reg6=/work-visa-China/,
          reg7=/moving-to-China/,
          reg8=/life-in-China-blog/,
          reg9=/live-in-China/,
          reg10=/travel-in-China/,
          reg11=/work-in-China/,
          reg12=/guides/,
          reg13=/on-boarding/,
          reg14=/about-career-China/,
          reg15=/term/,
          reg16=/policy/,
          reg17=/TEFL/;
      if(reg1.test(url)===true || reg2.test(url)===true|| reg3.test(url)===true){
          this.$refs.ipadJobs.className='active'
      }else if(reg4.test(url)===true || reg5.test(url)===true|| reg6.test(url)===true || reg7.test(url)===true){
          this.$refs.ipadServices.className='active'
      }else if(reg8.test(url)===true || reg9.test(url)===true|| reg10.test(url)===true || reg11.test(url)===true || reg12.test(url)===true || reg13.test(url)===true){
        this.$refs.ipadBlog.className='active'
      }else if(reg14.test(url)===true){
          this.$refs.ipadAbout.className='active'
      }else if(reg15.test(url)===true || reg16.test(url)===true){
        this.$refs.ipadHome.className='';
        this.$refs.ipadJobs.className='';
        this.$refs.ipadServices.className='';
        this.$refs.ipadBlog.className='';
        this.$refs.ipadAbout.className=''
      }else if(reg17.test(url)===true){
        this.$refs.ipadTefl.className='active'
      }else{
        this.$refs.ipadHome.className='active'
      }
  }
  }
</script>

<style scoped>
  .ipadNav{
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.4);
    z-index: 300;
    overflow-x: hidden;
    overflow-y: hidden;
  }
  .ulBox{
    position: relative;
    height: 100%;
  }
  .ipadNav .navTab{
    float: right;
    padding-top:150px;
    width: 0;
    height: 100%;
    background: #fff;
    animation: rightOut .3s linear 0s 1;
    -webkit-animation: rightOut .3s linear 0s 1;
    animation-fill-mode: forwards;
    -webkit-animation-fill-mode: forwards;
  }
  .ipadNav .navTab .navList{
    width: 100%;
    height: 57px;
  }
  .ipadNav .navTab .navList:hover{
    background: #F9F9FB;
  }
  .ipadNav .navTab .navList a{
    display: block;
    line-height: 57px;
    text-align: center;
    font-size: 14px;
    color: #333435;
    font-weight: bold;
  }
  .ipadNav .navTab .navList .active{
    color: #4B4DFF;
  }
  .ipadNav .navTab .navList a:hover{
    color: #4B4DFF;
  }
  .ipadNav .navTab .line{
    margin: 20px auto;
    width: 30px;
    height: 1px;
    background: #D8D8D8;
  }
  @keyframes rightOut {
    from{
      width: 0;
    }
    to {
      width: 300px;
      height: 100%;
    }
  }
  @-webkit-keyframes rightOut {
    from{
      width: 0;
    }
    to {
      width: 300px;
      height: 100%;
    }
  }
  .slideshow,.nav-open{
    float: right;
    margin-right: 20px;
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
  @media (max-width: 415px) {
    @keyframes rightOut {
      from{
        width: 0;
      }
      to {
        width: 100%;
        height: 100%;
      }
    }
    @-webkit-keyframes rightOut {
      from{
        width: 0;
      }
      to {
        width: 100%;
        height: 100%;
      }
    }
    .ipadNav .navTab{
      padding-top: 80px;
    }
  }
</style>
