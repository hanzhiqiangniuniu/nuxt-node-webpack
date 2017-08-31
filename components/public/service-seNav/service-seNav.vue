<template>
  <div :class="seNav">
    <ul class="seNavTab clear">
      <li :class="seNavList">
        <a href="/how-to-move-to-China" ref="our">OUR SERVICE</a>
        <i class="bor-bot" v-show="bor_bot1"></i>
      </li>
      <li :class="seNavList">
        <a href="/job-placement-China" ref="advice">CAREER ADVICE</a>
        <i class="bor-bot" v-show="bor_bot2"></i>
      </li>
      <li :class="seNavList">
        <a href="/work-visa-China" ref="visa">VISA</a>
        <i class="bor-bot" v-show="bor_bot3"></i>
      </li>
      <li :class="seNavList">
        <a href="/moving-to-China" ref="ground">GROUND SERVICE</a>
        <i class="bor-bot" v-show="bor_bot4"></i>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import $ from 'jquery'
  export default{
    data(){
      return{
        seNav:"seNav",
        seNavList:"seNavList",
        bor_bot1:false,
        bor_bot2:false,
        bor_bot3:false,
        bor_bot4:false,

      }
    },
    mounted(){
      var reg=/how-to-move-to-China$/,
        reg1=/job-placement-China/,
        reg2=/work-visa-China/,
        reg3=/moving-to-China/,
        url=window.location.href;
      if(reg.test(url)===true){
        this.$refs.our.className='active';
        this.bor_bot1=true
      }else if(reg1.test(url)===true){
        this.$refs.advice.className='active';
        this.bor_bot2=true
      }else if(reg2.test(url)===true){
        this.$refs.visa.className='active';
        this.bor_bot3=true
      }else if(reg3.test(url)===true) {
        this.$refs.ground.className = 'active';
        this.bor_bot4 = true
      }
      var _this=this;
      var scroll_pos = 0;
      $(document).scroll(function() {
          scroll_pos=$(this).scrollTop();
          if(scroll_pos>0){
              _this.seNav='seNav1';
              _this.seNavList='seNavList1'
          }else {
            _this.seNav='seNav';
            _this.seNavList='seNavList'
          }
      })
    }
  }
</script>

<style scoped>
  .seNav,.seNav1{
    position: fixed;
    top: 80px;
    left: 0;
    width: 100%;
    height: 60px;
    z-index: 90;
    box-shadow: 0 2px 4px 0 rgba(112,112,112,0.08);
    transition: all .5s;
  }
  .seNav{
    background: rgba(0,0,0,.06);
  }
  .seNav1{
    background: #fff;
  }
  .seNavTab{
    width: 1040px;
    margin: auto;
  }
  .seNavTab .seNavList,.seNavList1{
    position: relative;
    float: left;
    margin-right: 40px;
  }
  .seNavTab .seNavList .bor-bot,.seNavList1 .bor-bot{
    position: absolute;
    left: 50%;
    bottom: 1px;
    margin-left: -12px;
    width: 24px;
    height: 3px;
  }
  .seNavTab .seNavList .bor-bot{
    opacity: 0.6;
    background: #fff;
  }
  .seNavTab .seNavList1 .bor-bot{
    opacity: 0.5;
    background: #4B4DFF;
  }
  .seNavTab .seNavList:last-child{
    margin-right: 0;
  }
  .seNavTab .seNavList1:last-child{
    margin-right: 0;
  }
  .seNavTab .seNavList a,.seNavList1 a{
    display: block;
    line-height: 60px;
    text-align: center;
    font-size: 12px;
    font-weight: bold;
  }
  .seNavTab .seNavList a{
    color: rgba(255,255,255,.8);
  }
  .seNavTab .seNavList1 a{
    color: #333435
  }
  .seNavTab .seNavList .active{
    color:rgba(255,255,255,1);
  }
  .seNavTab .seNavList1 .active{
    color:#4B4DFF;
  }
  .seNavTab .seNavList a:hover{
    color: rgba(255,255,255,1)
  }
  .seNavTab .seNavList1 a:hover{
    color:#4B4DFF;
  }
  @media (max-width: 768px) {
    .seNav,.seNav1{
      top:50px;
      height: 50px;
    }
    .seNavTab{
      width: 768px;
      padding-left: 147px;
      height: 50px;

    }
    .seNavTab .seNavList a,.seNavList1 a{
      line-height: 50px;
    }
  }

  @media (max-width: 415px) {
    .seNavTab{
      width: 375px;
      padding-left: 20px;
      overflow: hidden;
      margin: inherit;
    }
    .seNavTab .seNavList,.seNavList1{
      margin-right: 12px;
    }
  }
</style>
