<template>
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
</template>

<script type="text/ecmascript-6">
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
        }
    }
  }
</script>

<style scoped>
  .sing {
    position: relative;
    width: 100%;
    font-size: 0;
  }

  .sing .singTitle {
    margin: 85px 0 40px 0;
    text-align: center;
    font-family: AvenirNext-Regular;
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
    top: 97px;
    left: 18px;
    width: 209px;
    height: 130px;
  }
  .sing .btnBox .btnText {
    display: block;
    margin: auto;
    width: 220px;
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
    margin-top: 8px;
    margin-left: 40px;
    width: 100%;
    font-size: 12px;
  }
  .sing .format{
    color: #f7593f;
  }
  .sing .success{
    color: #0ed666;
  }
  @media (max-width: 768px) {
    .sing .singTitle{
      display: inline-block;
      line-height: 100px;
      margin: 0 34px 0 20px;
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
      top: 0;
      left: 300px;
      width: 380px;
      height: 100px;
    }
    .sing .format,.success{
      position: absolute;
      bottom: 10px;
      left: 319px;
      z-index: 99;
      font-size: 12px;
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
    .sing .format,.success{
      bottom: 8px;
      left:-20px;
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
  }
</style>
