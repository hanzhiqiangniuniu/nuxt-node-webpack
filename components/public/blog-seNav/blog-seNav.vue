<template>
  <div class="seNav">
    <ul class="seNavTab clear" v-show="seNav">
      <li class="seNavList">
        <a href="/life-in-China-blog" ref="home">HOME</a>
        <i class="bor-bot" v-show="bor_bot1"></i>
      </li>
      <li class="seNavList">
        <a href="/live-in-China" ref="live">LIVE</a>
        <i class="bor-bot" v-show="bor_bot2"></i>
      </li>
      <li class="seNavList">
        <a href="/travel-in-China" ref="travel">TRAVEL</a>
        <i class="bor-bot" v-show="bor_bot3"></i>
      </li>
      <li class="seNavList">
        <a href="/work-in-China" ref="work">WORK</a>
        <i class="bor-bot" v-show="bor_bot4"></i>
      </li>
      <li class="seNavList">
        <a href="/guides" ref="guides">GUIDES</a>
        <i class="bor-bot" v-show="bor_bot5"></i>
      </li>
      <li class="seNavList">
        <a href="/on-boarding" ref="boarding">ON-BOARDING</a>
        <i class="bor-bot" v-show="bor_bot6"></i>
      </li>
    </ul>
    <div class="open" @click="openSe">
      <i class="borBg"></i>
      <i class="openIcon" id="opIcon"></i>
    </div>
    <div class="hide-seNav" v-show="hideSe">
      <ul class="hideTab clear">
        <li class="hideList">
          <a href="/life-in-China-blog" ref="m_home">HOME</a>
        </li>
        <li class="hideList">
          <a href="/live-in-China" ref="m_live">LIVE</a>
        </li>
        <li class="hideList">
          <a href="/travel-in-China" ref="m_travel">TRAVEL</a>
        </li>
        <li class="hideList">
          <a href="/work-in-China" ref="m_work">WORK</a>
        </li>
        <li class="hideList">
          <a href="/guides" ref="m_guides">GUIDES</a>
        </li>
        <li class="hideList">
          <a href="/on-boarding" ref="m_boarding">ON-BOARDING</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import $ from 'jquery'
  export default{
      data(){
          return{
            seNav:true,
            hideSe:false,
            bor_bot1:false,
            bor_bot2:false,
            bor_bot3:false,
            bor_bot4:false,
            bor_bot5:false,
            bor_bot6:false
          }
      },
    methods: {
      openSe(){
        if (this.seNav === true) {
          this.seNav = false;
          this.hideSe = true;
          $('#opIcon').css('transform', 'rotate(180deg)')
        } else {
          this.seNav = true;
          this.hideSe = false;
          $('#opIcon').css('transform', 'rotate(360deg)')
        }
      },
    },
    mounted(){
      var reg=/blog$/,
          reg1=/live-in-China/,
          reg2=/travel-in-China/,
          reg3=/work-in-China/,
          reg4=/guides/,
          reg5=/on-boarding/,
          url=window.location.href;
      if(reg.test(url)===true){
          this.$refs.home.className='active';
          this.$refs.m_home.className='active';
          this.bor_bot1=true
      }else if(reg1.test(url)===true){
        this.$refs.live.className='active';
        this.$refs.m_live.className='active';
        this.bor_bot2=true
      }else if(reg2.test(url)===true){
        this.$refs.travel.className='active';
        this.$refs.m_travel.className='active';
        this.bor_bot3=true
      }else if(reg3.test(url)===true){
        this.$refs.work.className='active';
        this.$refs.m_work.className='active';
        this.bor_bot4=true
      }else if(reg4.test(url)===true){
        this.$refs.guides.className='active';
        this.$refs.m_guides.className='active';
        this.bor_bot5=true
      }else if(reg5.test(url)===true){
        this.$refs.boarding.className='active';
        this.$refs.m_boarding.className='active';
        this.bor_bot6=true
      }
    }
  }
</script>

<style scoped>
  .seNav{
    position: fixed;
    top: 80px;
    left: 0;
    width: 100%;
    height: 60px;
    background: #fff;
    z-index: 130;
    box-shadow: 0 2px 4px 0 rgba(112,112,112,0.08);
  }
  .seNav .seNavTab{
    width: 1040px;
    margin: auto;
  }
  .seNav .seNavTab .seNavList{
    position: relative;
    float: left;
    margin-right: 40px;
  }
  .seNav .seNavTab .seNavList .bor-bot{
    position: absolute;
    left: 50%;
    bottom: 0;
    margin-left: -12px;
    opacity: 0.5;
    background: #4B4DFF;
    width: 24px;
    height: 3px;
  }
  .seNav .seNavTab .seNavList:last-child{
    margin-right: 0;
  }
  .seNav .seNavTab .seNavList a{
    display: block;
    line-height: 60px;
    text-align: center;
    font-size: 12px;
    color: #333435;
    font-weight: bold;
  }
  .seNav .seNavTab .seNavList .active{
    color: #4B4DFF;
  }
  .seNav .seNavTab .seNavList a:hover{
    color: #4B4DFF
  }

  .seNav .open{
    position: absolute;
    top:0;
    right:0;
    background: #fff;
    width: 55px;
    height: 50px;
    cursor: pointer;
    display: none;
  }
  .seNav .open .borBg{
    position: absolute;
    top:4px;
    right:50px;
    width: 9px;
    height: 42px;
    background: url("./icon-blog-shade@2x 2.png")no-repeat center;
    background-size: cover;
  }
  .seNav .open .openIcon{
    position: absolute;
    top:20px;
    right: 17.5px;
    width: 15px;
    height: 10px;
    background: url("./icon-blog-arrow-down@2x 2.png")no-repeat center;
    background-size: cover;
    transition: all .5s;
  }
  .hide-seNav{
    position: absolute;
    top:50px;
    left: 0;
    width: 100%;
    background: #fff;
    z-index: 120;
    transition: all 1s;
    box-shadow: 0 4px 6px 0 rgba(0,0,0,.1);
  }
  .hide-seNav .hideTab{
    padding: 0 5% 30px 5%;
  }
  .hide-seNav .hideTab .hideList{
    width: 45%;
    float: left;
    margin-top: 15px;
  }
  .hide-seNav .hideTab .hideList a{
    display: block;
    text-align: center;
    font-size: 12px;
    color: #333435;
    font-weight: bold;
  }
  .hide-seNav .hideTab .hideList a:hover{
    color: #4B4DFF
  }
  .hide-seNav .hideTab .hideList .active{
    color: #4B4DFF;
  }
  @media (max-width: 768px) {
    .seNav{
      top:50px;
      height: 50px;
    }
    .seNav .seNavTab{
      width: 768px;
      padding-left: 147px;
      height: 50px;

    }
    .seNav .seNavTab .seNavList a{
      line-height: 50px;
    }
  }

  @media (max-width: 415px) {
    .seNav .seNavTab{
      width: 375px;
      padding-left: 20px;
      overflow: hidden;
      margin: inherit;
    }
    .seNav .open{
      display: block;
    }
  }
</style>
