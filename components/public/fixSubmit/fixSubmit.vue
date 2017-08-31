<template>
  <div class="fixSubmit" v-if="fixShow">
    <div class="sing">
      <p class="singTitle">
        Sign Up for Our Free
        Newsletters
      </p>
      <input type="text" class="eI" placeholder="Email" v-model="inputText" @focus="focus">
      <p class="format" v-show="emailState">Please submit in right format.</p>
      <p class="success" v-show="success">Thank you for signing up!</p>
      <div class="mask" v-show="mask"></div>
      <div class="btnBox">
        <button class="btnText" @click="sign">Sign Up</button>
      </div>

    </div>
    <i class="close" @click="close"></i>
  </div>
</template>

<script type="text/ecmascript-6">
  import $ from 'jquery';
  export default{
    data(){
      return{
        inputText:'',
        emailState:false,
        success:false,
        mask:false,
        fixShow:false,
        falg:true
      }
    },
    methods:{
      focus(){
        this.emailState=false
      },
      sign(){
        var reg1  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(this.inputText==='' || !reg1.test(this.inputText)){
          this.emailState=true
        }else {
          let _this=this;
          _this.$http.post('http://devb.careerchina.com/cc/to/c/storageEmail.action',{'email':_this.inputText}).then(function(response){
            if(response.body.insertResult===true){
              _this.success=true;
              window.clearTimeout(timer);
              let timer = window.setTimeout(function () {
                _this.success=false;
              },3000);
              _this.boolean= true;
              _this.mask=true;
              _this.inputText='';
            }
          })
        }
      },
      close(){
          this.fixShow=false;
          this.falg=false
      }
    },
    mounted(){
      var scrollT = 0;
      var _this = this;
      $(document).scroll(function () {
        scrollT = document.body.scrollTop || document.documentElement.scrollTop;
        if(_this.falg===false){
          _this.fixShow=false
        }else {
          if(scrollT>=460){
            _this.fixShow=true
          }else {
            _this.fixShow=false
          }
        }
      });
    }

  }
</script>

<style scoped>
  .fixSubmit{
    position: fixed;
    bottom: 0;
    height: 100px;
    width: 100%;
    background:linear-gradient(45deg,#19DFE8 0%,#4B4DFF 100%);
    z-index: 200;
  }
  .sing {
    position: relative;
    width: 772px;
    margin: auto;
    font-size: 0;
    padding: 28px 0;
  }

  .sing .singTitle {
    display: inline-block;
    font-family: AvenirNext-Regular;
    font-size: 24px;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 36px;
  }

  .sing .eI {
    display: inline-block;
    width: 220px;
    height: 44px;
    font-size: 14px;
    padding: 0 20px;
    /* border-top: transparent;
     border-left: transparent;
     border-right: transparent;
     border-bottom: 1px solid #dcdcdc;*/
    /*color: #989898;*/
    border: none;
    background: #FFFFFF;
    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.12);
    border-radius: 2px;
    margin: 0 20px 0 66px;
  }

  .sing .btnBox {
    display: inline-block;
  }
  .sing .mask{
    position: absolute;
    top: 0;
    right: 0;
    width: 360px;
    height: 100px;
  }
  .sing .btnBox .btnText {
    display: inline-block;
    width: 100px;
    height: 44px;
    line-height: 44px;
    font-size: 14px;
    font-family: AvenirNext-DemiBold;
    color: #fff;
    text-align: center;
    cursor: pointer;
    border: none;
    background: #2A3256;
    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.22);
    border-radius: 2px;
  }
  .sing .btnBox .btnText:hover{
    background: #11b85b;
  }
  .sing .format,.success{
    position: absolute;
    right: 175px;
    bottom: 10px;
    font-size: 12px;
  }
  .sing .format{
    color: #f7593f;
  }
  .sing .success{
    color: #0ed666;
  }
  .fixSubmit .close{
    position: absolute;
    top:38px;
    right:20px;
    width: 24px;
    height: 24px;
    background: url("./icon-blog-close.png")no-repeat center;
    cursor: pointer;
  }
  @media (max-width: 1040px) {
    .sing {
      width: 640px;
    }
    .sing .singTitle {
      font-size: 20px;
    }
    .sing .eI {
      width: 200px;
      margin: 0 10px 0 24px;
    }
    .sing .format,.success{
      right: 146px;
    }
  }
  @media (max-width: 900px) {

    .sing {
      margin-left: 30px;
    }
  }
  @media (max-width: 768px) {
    .fixSubmit{
      height: 80px;
    }
    .sing {
      padding: 18px 0;
    }
    .sing .format,.success{
      bottom: 3px;
    }
    .fixSubmit .close{
      top:28px;
    }

  }
  @media (max-width: 598px)and (min-width: 375px) {
    .fixSubmit{
      height: 70px;
    }
    .sing {
      width: 290px;
      margin-left: 20px;
      padding: 13px 0;
    }
    .sing .singTitle{
      display: none;
    }
    .sing .btnBox .btnText{
      width: 80px;
    }
    .sing .eI {
      margin: 0 10px 0 0;
    }
    .sing .format,.success{
      bottom: 0;
      right: 124px;
    }
  }
</style>
