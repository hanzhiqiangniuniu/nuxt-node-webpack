<template>
  <div class="companies">
    <v-nav @refreshList="ipadShow"></v-nav>
    <v-jobSeNav></v-jobSeNav>
    <v-ipadNav v-show="this.ipad" @close="ipadHide"></v-ipadNav>
    <div class="banner-box">
      <div class="auto">
        <span class="title-tag">WE WORK WITH </span>
        <h1>
          TOP ENGLISH SCHOOLS AND<br/>
          INSTITUTES IN CHINA
        </h1>
      </div>
    </div>
    <ul class="school-tab clear">
      <li class="school-list"v-for="school in schoolData" @click="linkSchool(school.instituteName)">
        <div class="top clear">
          <div class="school-logo-box">
            <img :src="school.logoURL" :alt="school.logoAlt">
          </div>
          <div class="desBox">
            <h2 class="schoolTitle">{{school.instituteName}}</h2>
            <p class="bodDes">
              {{school.instituteTag}}
            </p>
          </div>
        </div>
        <div class="bodBott">
          <ul class="bodData clear">
            <li class="bodList">
              <span class="number">{{school.startingYear}}</span>
              <span class="desName">ESTABLISHED</span>
            </li>
            <li class="bodList">
              <span class="number">{{school.employeeScale}}</span>
              <span class="desName">COMPANY SIZE</span>
            </li>
            <li class="bodList">
              <span class="number">{{school.positionSize}}</span>
              <span class="desName">OPEN POSITIONS</span>
            </li>
          </ul>
        </div>
      </li>
    </ul>
    <v-goTop></v-goTop>
    <v-footer></v-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import $ from 'jquery'
  import Vue from 'vue'
  import VueResource from 'vue-resource';
  import interfaceStr from '../assets/js/interface.js'
  import addthis from '../assets/js/addthis.js';
  import nav from '../components/public/nav/nav'
  import jobSeNav from '../components/public/job-seNav/job-seNav'
  import footer from '../components/public/footer/footer'
  import goTop from '../components/public/goTop/goTop'
  import ipadNav from '../components/public/ipad-nav/ipadNav'
  var addthis_share = {};
  if (process.BROWSER_BUILD) {
    Vue.use(VueResource);
  }
  export default{
    data(){
        return{
          schoolData:'',
          ipad:false
        }
    },
    head:{
      title:'Explore companies in China',
      meta:[
        { name: 'keywords', content: 'Companies in China'},
        { name: 'description', content: 'Learn more about schools in China, and their open positions'},
        { property: 'og:url', content: 'www.careerchina.com/companies'},
        { property: 'og:type', content: 'article'},
        { property: 'og:image', content: 'http://material.careerchina.com/img/7538c48a-a7ec-4943-ba30-1f245e232747.jpg'},
        { name: 'twitter:card', content: 'http://material.careerchina.com/img/7538c48a-a7ec-4943-ba30-1f245e232747.jpg'},
        { name: 'twitter:creator', content: 'careerchina'},
        { name: 'twitter:image', content: 'http://material.careerchina.com/img/7538c48a-a7ec-4943-ba30-1f245e232747.jpg'},
        { itemprop: 'image', content: 'http://material.careerchina.com/img/7538c48a-a7ec-4943-ba30-1f245e232747.jpg'},
      ]
    },
    components:{
      'v-nav':nav,
      'v-jobSeNav':jobSeNav,
      'v-footer':footer,
      'v-goTop':goTop,
      'v-ipadNav':ipadNav
    },
    methods:{
      linkSchool(name){
          var reg=/\s+/g;
          var newName=name.replace(reg,'-');
          window.open('/company/'+newName+'.html')
      },
      ipadShow(){
        this.ipad=true
      },
      ipadHide(){
        this.ipad=false
      }
    },
    mounted(){
      this.$http({
        method:'GET',
        url:interfaceStr+'/cc/to/c/responseInstitute.action'
      }).then(function(data){
        this.schoolData = data.body.institute;
      }, function (error) {

      });
       addthis()
    }
  }
</script>

<style scoped>
  .companies{
    padding-top: 140px;
    background: #F9F9FB;
  }
  .banner-box{
    width: 100%;
    height: 300px;
    background: url("../assets/img/jobs/company-in-china-1.png")no-repeat center;
    background-size: cover;
  }
  .auto{
    width: 1040px;
    margin: 0 auto;
    padding-top: 95px
  }
  .banner-box .auto .title-tag{
    margin-bottom: 10px;
    display: block;
    text-align: center;
    font-size: 18px;
    color: #fff;
    font-weight: bold;
  }
  .banner-box .auto h1{
    font-size: 40px;
    color: #fff;
    text-align: center;
    line-height: 50px;
  }
  .school-tab{
    width: 1040px;
    margin: 100px auto;
  }
  .school-tab .school-list{
    float: left;
    margin: 0 .5% 10.5px .5%;
    width: 32%;
    background: #FFFFFF;
    box-shadow: 0 0 6px 0 rgba(0,0,0,0.08);
    cursor: pointer;
    height: 360px;
    transition: all .5s;
  }
  .school-tab .school-list:hover{
    box-shadow: 0 4px 20px 0 rgba(0,0,0,.1);
  }
  .school-list img{
    display: block;
    margin:39px auto;
    width: 240px;
    height: 90px;
  }
  .school-list .schoolTitle{
    margin: 18px 0 10px 0;
    font-size: 18px;
    color: #333435;
    text-align: center;
    padding: 0 20px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .school-list .schoolTitle:hover{
    text-decoration: underline;
  }
  .school-list .bodDes{
    padding: 0 20px;
    font-size: 14px;
    color: #989898;
    line-height: 24px;
    height: 44px;
    overflow: hidden;
  }
  .bodBott{
    padding: 0 20px;
  }
  .school-list .bodData{
    padding: 20px 0 26px 0;
    border-top: 1px dashed #D6D6E5;
    margin-top: 27.5px;
  }
  .school-list .bodData .bodList{
    float: left;
    margin-right: 10px;
  }
  .school-list .bodData .bodList span{
    display: block;
    text-align: center;
  }
  .school-list .bodData .bodList .number{
    margin-bottom: 7px;
    font-size: 16px;
    color: #333435;
  }
  .school-list .bodData .bodList .desName{
    font-size: 12px;
    color: #989898;
  }
  .school-list .bodData .bodList:last-child{
    margin-right: 0;
  }
  @media (max-width: 768px) {
    .companies{
      padding-top: 100px;
    }
    .banner-box{
      height: 260px;
    }
    .auto{
      width: 688px;
      padding-top: 78px;
    }
    .banner-box .auto .title-tag{
      font-size: 16px;
    }
    .banner-box .auto h1{
      font-size: 32px;
      line-height: 46px;
    }
    .school-tab{
      width: 688px;
      margin: 50px auto;
    }
    .school-tab .school-list{
      margin: 0 .8% 10.5px .8%;
      width: 48.4%;
    }
  }
  @media (max-width: 401px) {
    .banner-box{
      height: 160px;
    }
    .auto{
      width: 100%;
      margin: inherit;
      padding-top: 55px;
    }
    .banner-box .auto .title-tag{
      font-size: 12px;
    }
    .banner-box .auto h1{
      font-size: 18px;
      line-height: 26px;
    }
    .school-tab{
      width: 100%;
      margin: 10px 0;
    }
    .school-tab .school-list{
      margin:0 0 10px 0;
      width: 100%;
      padding: 0 2.6%;
      height: 182px;
    }
    .school-tab .school-list:last-child{
      margin-bottom: 0;
    }
    .school-list .school-logo-box{
      float: left;
      padding: 20px 5px;
      border: 1px solid #F9F9FB;
    }
    .school-list .top{
      margin: 16px 0;
      height: 68px;
    }
    .school-list img{
      width: 90px;
      height: 34px;
      margin: inherit;
    }
    .school-list .desBox{
      float: right;
      width: 64%;
    }
    .school-list .schoolTitle{
      margin: 0 0 8px 0;
      font-size: 16px;
      text-align: inherit;
      height: 22px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .school-list .bodDes{
      padding: inherit;
      line-height: 22px;
    }
    .bodBott{
      padding: inherit;
      width: 100%;
    }
    .school-list .bodData{
      padding: 16px .4%;
      border-top: 1px dashed #D6D6E5;
      margin-top: 22px;
    }
    .school-list .bodData .bodList{
      width: 33%;
      margin-right: 0;
    }
  }
</style>
