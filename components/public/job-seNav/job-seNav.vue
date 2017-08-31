<template>
  <div class="seNav">
    <ul class="seNavTab clear">
      <li class="seNavList">
        <a href="/jobs-in-China" ref="jobs">JOBS</a>
        <i class="bor-bot" v-show="bor_bot1"></i>
      </li>
      <li class="seNavList">
        <a href="/companies" ref="companies">COMPANIES</a>
        <i class="bor-bot" v-show="bor_bot2"></i>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import $ from 'jquery'
  export default{
    data(){
      return{
        bor_bot1:false,
        bor_bot2:false,
      }
    },
    mounted(){
      var reg=/jobs-in-China/,
        reg1=/companies/,
        url=window.location.href;
      if(reg.test(url)===true){
        this.$refs.jobs.className='active';
        this.bor_bot1=true
      }else if(reg1.test(url)===true){
        this.$refs.companies.className='active';
        this.bor_bot2=true
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
    z-index: 90;
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
    bottom: 1px;
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

  @media  (max-width: 415px) {
    .seNav .seNavTab{
      width: 375px;
      padding-left: 20px;
      overflow: hidden;
      margin: inherit;
    }
  }
</style>
