<template>
  <div class="fixSubmit" v-if="fixshow">
    <div class="sing">
      <p class="singTitle">
        Sign Up for Our Free
        Newsletters
      </p>
      <div class="inputBox">
        <input type="text" class="eI" placeholder="Email" v-model="inputText" @focus="focus">
        <!--<p class="format" v-show="emailState">Please submit in right format.</p>-->
        <div class="worBox" v-show="emailState">
          <span class="sj"></span>
          <span class="worWord">Please submit in right format.</span>
        </div>
        <div class="suBox" v-show="success">
          <span class="sj"></span>
          <span class="suWord">We get you! Thanks for joining us!</span>
        </div>
        <div class="mask" v-show="mask"></div>
        <div class="btnBox">
          <button class="btnText" @click="sign">Sign Up</button>
        </div>
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
        fixshow:true,
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
        //$('.fixSubmit').css('display','none');
        this.fixshow=false
          this.falg=false
      }
    },
    mounted(){
      var _this = this;

      $(function() {
        function scroll(fn) {
          var beforeScrollTop = document.body.scrollTop,
            fn = fn || function() {};
          //console.log(beforeScrollTop)
          window.addEventListener("scroll", function() {
            var afterScrollTop = document.body.scrollTop,
              delta = afterScrollTop - beforeScrollTop;
            //console.log(delta)
            if(delta === 0) return false;
            fn(delta > 0 ? "down" : "up");
            beforeScrollTop = afterScrollTop;
            if(_this.falg===false){
              this.fixshow=false
              //$('.fixSubmit').css('display','none');
              return false
            }
          }, false);
        }
        scroll(function(direction) {
          var beforeScrollTop = document.body.scrollTop;
            //console.log(beforeScrollTop)
          if(direction=="down" && beforeScrollTop>=500){
             $('.fixSubmit').fadeIn(500)
            //_this.fixShow=true
          }else{
            $('.fixSubmit').fadeOut(500)
            //_this.fixShow=false
          }
        });
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
    display: none;
  }
  .sing {
    width: 800px;
    margin: auto;
    font-size: 0;
    padding: 28px 0;
  }
  .sing .singTitle {
    display: inline-block;
    font-size: 24px;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 36px;
  }
  .sing .inputBox{
    display: inline-block;
    position: relative;
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
    vertical-align: bottom;
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
    color: #fff;
    text-align: center;
    cursor: pointer;
    border: none;
    background: #2A3256;
    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.22);
    border-radius: 2px;
  }
  .sing .btnBox .btnText:hover{
    background: #000935;
  }
  .inputBox .worBox, .suBox {
    position: absolute;
    left: 65px;
    top: -56px;
    padding: 0 10px;
    height: 40px;
    border-radius: 5px;
  }

  .inputBox .worBox {
    font-size: 0;
    z-index: 100;
    background: #f7593f;
  }

  .inputBox .worBox .sj {
    position: absolute;
    bottom: -16px;
    left: 20px;
    width: 0;
    height: 0;
    border: 8px solid transparent;
    border-top-color: #f7593f;
  }
  .inputBox .worBox .worWord {
    font-size: 14px;
    color: #fff;
    line-height: 40px;
  }

  .inputBox .suBox {
    text-align: center;
    background: #0ed666;
  }

  .inputBox .suBox .sj {
    position: absolute;
    bottom: -16px;
    left: 20px;
    width: 0;
    height: 0;
    border: 8px solid transparent;
    border-top-color: #0ed666;
  }

  .inputBox .suBox .suWord {
    font-size: 14px;
    color: #fff;
    line-height: 40px;
  }
  .fixSubmit .close{
    position: absolute;
    top:38px;
    right:40px;
    width: 24px;
    height: 24px;
    background: url("./icon-blog-close.svg")no-repeat center;
    cursor: pointer;
  }
  .fixSubmit .close:hover{
    opacity: .6;
    filter:alpha(opacity=60);
  }
  @media (max-width: 1040px) {
    .sing {
      width: 656px;
    }
    .sing .singTitle {
      font-size: 20px;
    }
    .sing .eI {
      width: 200px;
      margin: 0 10px 0 24px;
    }
    .inputBox .worBox, .suBox{
      left: 16px;
    }
  }
  @media (max-width: 900px) {

    .sing {
      margin-left: 30px;
    }
  }
  @media (max-width: 768px) {
    .fixSubmit{
      height: 100px;
      bottom: inherit;
      top:0;
    }
    .sing {
      padding: 28px 0;
      margin-left: inherit;
      margin: auto;
    }
    .sing .format,.success{
      bottom: 3px;
    }
    .fixSubmit .close{
      display: none;
    }
    .inputBox .worBox, .suBox{
      left:23px;
      top:57px;
    }
    .inputBox .worBox .sj{
      bottom:inherit;
      top:-16px;
      border-top-color: transparent;
      border-bottom-color: #f7593f;
    }
    .inputBox .suBox .sj{
      bottom:inherit;
      top:-16px;
      border-top-color: transparent;
      border-bottom-color: #0ed666;
    }
  }
  @media (max-width: 415px){
    .fixSubmit{
      height: 100px;
      padding: 20px 5%;
    }
    .sing {
      width: 100%;
      padding: 0;
    }
    .sing .singTitle{
      display: block;
      margin-bottom: 14px;
      font-size: 14px;
      line-height:inherit;
    }
    .sing .inputBox{
      width: 100%;
    }
    .sing .btnBox{
      width: 20%;
      height: 30px;
      margin-left: 5%;
    }
    .sing .btnBox .btnText{
      width: 100%;
      height: 30px;
      line-height: 30px;
    }
    .sing .eI {
      width: 75%;
      height: 30px;
      margin: inherit;
      line-height: 30px;
    }
    .inputBox .worBox, .suBox{
      left: 0;
      top:46px;
    }
  }
</style>
