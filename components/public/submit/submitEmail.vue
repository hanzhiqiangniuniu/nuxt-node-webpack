<template>
  <div class="emSu" style="margin-top: 0">
    <div class="auto">
      <h2>Join The Community Now</h2>
      <p class="emDes">
        Never miss any Hot Jobs and Posts in Career China, when you sign up for us.
      </p>
      <div class="inputBox">
        <input id="text" type="text" placeholder="Your email address" v-model="Usertext" @focus="styleState">
        <button class="inputBtn bg1" id="inputBtn" @click="submit" :disabled="boolean">
          Join
        </button>
        <div class="worBox" v-show="emailNull">
          <span class="sj"></span>
          <i class="worIcon"></i>
          <span class="worWord">Please submit in right format.</span>
        </div>
        <div class="worBox" v-show="formatError">
          <span class="sj"></span>
          <i class="worIcon"></i>
          <span class="worWord">Please submit in right format.</span>
        </div>
        <div class="suBox" v-show="success">
          <span class="sj"></span>
          <span class="suWord">We get you! Thanks for joining us!</span>
        </div>
        <div class="inputMask" v-show="mask"></div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'
  import interfaceStr from '../../../assets/js/interface.js';
  import VueResource from 'vue-resource';
  if (process.BROWSER_BUILD) {
    Vue.use(VueResource);
  }

  export default{
    data () {
      return {
        Usertext: '',
        emailNull: false,
        formatError: false,
        success: false,
        mask: false,
        boolean:false
      };
    },
    methods: {
      styleState () {
        var aInputBtn = document.getElementById('inputBtn');
        var aText = document.getElementById('text');
        aInputBtn.className = 'inputBtn';
        aText.style.color = '#262626';
        this.formatError = false;
        this.emailNull = false;
      },
      submit () {
        var aInputBtn = document.getElementById('inputBtn');
        var aText = document.getElementById('text');
        var reg1 = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var reg2 = /\S/;
        if (this.Usertext === '') {
          this.emailNull = true;
          this.formatError = false;
          aInputBtn.className = 'inputBtn bg2';
        } else if (!reg1.test(this.Usertext)) {
          this.formatError = true;
          aInputBtn.className = 'inputBtn bg2';
          aText.style.color = '#f7593f';
        } else {
          this.emailNull = false;
          this.formatError = false;
          aInputBtn.className = 'inputBtn bg1';
        }
        if (reg1.test(this.Usertext) && reg2.test(this.Usertext)) {
          let _this = this;
          _this.$http.post('http://' + interfaceStr + '/cc/to/c/storageEmail.action', {'email': this.Usertext}).then(function (response) {
            if (response.body.insertResult === true) {
              _this.success = true;
              window.clearTimeout(timer);
              let timer = window.setTimeout(function () {
                aText.value = '';
                _this.success = false;
                aInputBtn.className = 'inputBtn bg2';
              }, 2000);
              _this.boolean = true;
              _this.mask = true;
              this.Usertext = '';
            }
          });
        }
      }
    }
  };
</script>

<style scoped>
  .emSu {
    width: 100%;
    background: #F3F6FB;
    padding: 100px 0 60px 0;
  }

  .emSu .auto h2 {
    font-size: 26px;
    margin-bottom: 20px;
    color: #333435;
    text-align: center;
    font-weight: bold;
  }

  .emSu .auto .emDes {
    opacity: 0.8;
    font-size: 14px;
    color: #989898;
    text-align: center;
  }

  .emSu .auto .inputBox {
    position: relative;
    margin: 40px auto;
    width: 590px;
    font-size: 0;
  }

  .emSu .auto .inputBox input {
    display: inline-block;
    width: 460px;
    height: 50px;
    padding-left: 40px;
    border-radius: 4px;
    font-size: 16px;
    color: #262626;
    box-shadow: 0 10px 29px rgba(3, 13, 27, .1);
    border: none;
  }

  .emSu .auto .inputBox .inputBtn {
    display: inline-block;
    margin-left: 20px;
    width: 110px;
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    color: #fff;
    text-align: center;
    cursor: pointer;
    border: none;
    background-image: linear-gradient(135deg, #19DFE8 0%, #4889FF 54%, #4B4DFF 100%);
    box-shadow: 0 2px 16px 0 rgba(101,112,144,0.50);
    border-radius: 2px;
  }

  .emSu .auto .inputBox .bg1 {
    background-image: linear-gradient(135deg, #19DFE8 0%, #4889FF 54%, #4B4DFF 100%);
    cursor: pointer;
  }

  .emSu .auto .inputBox .bg1:hover {
    background-image: linear-gradient(135deg, #16C8D0 0%, #4889FF 54%, #4345E5 100%);
  }

  .emSu .auto .inputBox .bg2 {
    background: #aaa;
    cursor: initial;
  }

  .emSu .auto .inputBox .worBox, .suBox {
    position: absolute;
    left: 0;
    top: 74px;
    padding: 0 35px;
    height: 40px;
    border-radius: 5px;
  }

  .emSu .auto .inputBox .worBox {
    background: #f7593f;
    font-size: 0;
    z-index: 100;
  }

  .emSu .auto .inputBox .worBox .sj {
    position: absolute;
    top: -16px;
    left: 20px;
    width: 0;
    height: 0;
    border: 8px solid transparent;
    border-bottom-color: #f7593f;
  }

  .emSu .auto .inputBox .worBox .worIcon {
    display: inline-block;
    width: 20px;
    height: 20px;
    vertical-align: middle;
    background: url("./icon-warning.png") no-repeat;
  }

  .emSu .auto .inputBox .worBox .worWord {
    margin-left: 10px;
    display: inline-block;
    font-size: 16px;
    color: #fff;
    line-height: 40px;
    vertical-align: middle;
  }

  .emSu .auto .inputBox .suBox {
    background: #0ed666;
    text-align: center;
  }

  .emSu .auto .inputBox .suBox .sj {
    position: absolute;
    top: -16px;
    left: 20px;
    width: 0;
    height: 0;
    border: 8px solid transparent;
    border-bottom-color: #0ed666;
  }

  .emSu .auto .inputBox .suBox .suWord {
    font-size: 16px;
    color: #fff;
    line-height: 40px;
  }

  .emSu .auto .inputBox .inputMask {
    position: absolute;
    top: 0;
    left: 0;
    width: 500px;
    height: 60px;
    z-index: 20;
  }
  @media (max-width: 415px) {
    .emSu{
      padding: 30px 0 30px 0;
    }
    .emSu .auto .inputBox{
      margin: 30px auto;
      margin-bottom: 0;
    }
    .emSu .auto .emDes {
      line-height: 20px;
      padding: 0 15px;
    }
    .emSu .auto .inputBox{
      width: 90%;
    }
    .emSu .auto .inputBox input{
      width: 70%;
    }
    .emSu .auto .inputBox .inputBtn{
      width: 23%;
      margin-left: 7%;
    }
  }
</style>
