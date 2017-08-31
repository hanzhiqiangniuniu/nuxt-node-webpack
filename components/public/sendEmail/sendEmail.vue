<template>
  <div class="sing">
    <p class="singTitle">
      Sign Up for Our Free
      Newsletters
    </p>
    <div class="inputBox">
      <input type="text" class="eI" placeholder="Email" v-model="inputText" @focus="focus">
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
</template>

<script type="text/ecmascript-6">
  import interfaceStr from '../../../assets/js/interface.js';
  export default{
    name:'sendEmail',
    data(){
      return{
          inputText:'',
          emailState:false,
          success:false,
          mask:false
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
            _this.$http.post(interfaceStr+'/cc/to/c/storageEmail.action',{'email':_this.inputText}).then(function(response){
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
        }
    }
  }
</script>

<style scoped>
  .sing {
    width: 100%;
    font-size: 0;
  }

  .sing .singTitle {
    margin: 85px 0 40px 0;
    text-align: center;
    font-size: 20px;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 36px;
  }

  .sing .eI {
    display: block;
    margin: auto;
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
  }

  .sing .btnBox {
    margin-top: 20px;
  }
  .sing .mask{
    position: absolute;
    top: 0;
    left: 18px;
    width: 258px;
    height: 130px;
  }
  .sing .btnBox .btnText {
    display: block;
    margin: auto;
    width: 220px;
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
  .inputBox{
    position: relative;
  }
  .inputBox .worBox, .suBox {
    position: absolute;
    left: 39px;
    top: -57px;
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
  @media (max-width: 768px) {
    .sing .singTitle{
      display: inline-block;
      line-height: 100px;
      margin: 0 30px 0 10px;
    }
    .sing .eI{
      display: inline-block;
      width: 200px;
      margin-right: 15px;
    }
    .sing .btnBox{
      margin-top: 0;
      display: inline-block;
      width: 100px;
    }
    .sing .btnBox .btnText{
      width: 100px;
    }
    .sing .mask{
      left: 0;
      width: 380px;
      height: 100px;
    }
    .inputBox{
      display: inline-block;
    }
    .inputBox .worBox, .suBox{
      left:0;
    }
  }
  @media (max-width: 415px) {
    .sing{
      padding: 22px 20px;
    }
    .sing .singTitle{
      line-height: inherit;
      margin: 0 0 16px 0;
    }
    .sing .eI{
      width: 60%;
      margin-right: 10%;
    }
    .sing .btnBox{
      width: 30%;
    }
    .sing .btnBox .btnText{
      width: 100%;
    }
    .inputBox{
      width: 100%;
    }
  }
</style>
