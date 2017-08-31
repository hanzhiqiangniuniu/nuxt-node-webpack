<template>
  <div class="jobs">
    <v-nav @refreshList="ipadShow"></v-nav>
    <v-jobSeNav></v-jobSeNav>
    <v-ipadNav v-show="this.ipad" @close="ipadHide"></v-ipadNav>
    <div class="jobs-content">
      <div class="headBox">
        <h1 class="jobs-title">JOBS IN CHINA</h1>
        <span class="jobs-number">{{pageTotal}}&nbsp</span>
        <span class="found">
           opportunities found by careerchina
        </span>
      </div>
      <ul class="jobs-tab">
        <li class="jobs-list" v-for="jobList in this.jobListArray">
          <div class="title_date clear">
            <h2 @click="linkDetail(jobList.id)">
              <a href="javascript:;" class="list-title" :title="jobList.title">{{jobList.title}}</a>
            </h2>
            <i class="hot-icon" v-if="jobList.hot==='999'?false:true"></i>
            <span class="name_date">{{jobList.updateTimeStr}}</span>
          </div>
          <div class="school" v-show="jobList.instituteName===''?false:true">
            <i class="school-icon"></i>
            <h3>{{jobList.instituteName}}</h3>
          </div>
          <div class="line"></div>
          <div class="category">
            <span class="cate-name">
              Category
            </span>
            <p class="cate-des">
              {{jobList.category}}
            </p>
          </div>
          <div class="sub-grade clear">
            <div class="sub">
              <span class="sub-name">Subject</span>
              <p class="sub-des">
                {{jobList.subject}}
              </p>
            </div>
            <div class="grade">
              <span class="grade-name">
                Grade
              </span>
              <p class="grade-des">
                {{jobList.age_group}}
              </p>
            </div>
          </div>
          <p class="m-date">
            {{jobList.updateTimeStr}}
          </p>
        </li>
      </ul>
      <div class="paging">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage1"
          :page-size="15"
          layout="total, prev, pager, next"
          :total="pageTotal">
        </el-pagination>
      </div>
      <p class="loading" ref="load">
        <i class="loadIcon"></i>
        <span class="loadText">Loading…Please wait</span>
      </p>
    </div>
    <v-goTop></v-goTop>
    <v-footer v-show="footer"></v-footer>
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
    data() {
      return {
        currentPage1: 1,
        jobListArray:[],
        pageSize:15,
        pageTotal:0,
        footer:true,
        ipad:false,
      };
    },
    head: {
      title:'Find top teaching jobs in China',
      link: [
        {rel: 'stylesheet', href: 'https://unpkg.com/element-ui/lib/theme-default/index.css'}
      ],
      meta:[
        { name: 'keywords', content: 'jobs in China'},
        { name: 'description', content: 'Live Take the first step to your new career by searching our database of great jobs in China.'},
        { property: 'og:url', content: 'www.careerchina.com/jobs-in-China'},
        { property: 'og:type', content: 'article'},
        { property: 'og:image', content: 'http://material.careerchina.com/img/566449e2-223f-4aa2-ba70-68b258813f50.jpg'},
        { name: 'twitter:card', content: 'http://material.careerchina.com/img/566449e2-223f-4aa2-ba70-68b258813f50.jpg'},
        { name: 'twitter:creator', content: 'careerchina'},
        { name: 'twitter:image', content: 'http://material.careerchina.com/img/566449e2-223f-4aa2-ba70-68b258813f50.jpg'},
        { itemprop: 'image', content: 'http://material.careerchina.com/img/566449e2-223f-4aa2-ba70-68b258813f50.jpg'},
      ]
    },
    components:{
      'v-nav':nav,
      'v-jobSeNav':jobSeNav,
      'v-footer':footer,
      'v-goTop':goTop,
      'v-ipadNav':ipadNav
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.$http.get(interfaceStr+'/cc/to/c/requisition/list.action?pageSize='+this.pageSize+'&currentPage='+val+'').then(function (response) {
          this.jobListArray=response.body.requisitionList;
        });
        document.body.scrollTop = 0;
      },
      linkDetail(id){
          window.open('/job-detail?id='+id+'')
      },
      ipadShow(){
        this.ipad=true
      },
      ipadHide(){
        this.ipad=false
      }
    },
    mounted(){
        var page=1;
        var _this=this;
      this.$http.get(interfaceStr+'/cc/to/c/requisition/list.action?pageSize='+this.pageSize+'&currentPage='+page+'').then(function (response) {
        this.jobListArray=response.body.requisitionList;
        this.pageTotal=response.body.total;
        console.log(this.jobListArray)
      });
        var _width = $(window).width();
        console.log(_width)
        if(_width<=768){
          $(window).scroll(function () {
            var scrollTop = $(this).scrollTop();
            var windowHeight = $(this).height();
            var loadOffset = $('.loading').offset().top;
            var topCon = scrollTop + windowHeight;
            if (topCon >= loadOffset) {
              page++;
              _this.$http.get(interfaceStr+'/cc/to/c/requisition/list.action?pageSize='+_this.pageSize+'&currentPage='+page+'').then(function (response) {
                let Listdatas = response.body.requisitionList;
                if (Listdatas.length < 15) {
                  _this.$refs.load.style.display = 'none';
                  for (var i = 0; i < Listdatas.length; i++) {
                    _this.jobListArray.push(Listdatas[i]);
                  }
                  _this.footer = true;
                  $(window).off('scroll');
                  return
                } else {
                  _this.$refs.load.style.display = 'block';
                  for (var i = 0; i < Listdatas.length; i++) {
                    _this.jobListArray.push(Listdatas[i]);
                  }
                }
              })
            }
          });
        };
      addthis()
    }
  }
</script>

<style>
  .jobs{
    width: 100%;
    background: #F9F9FB;
    padding-top: 190px;
  }
  .jobs-content{
    width: 1040px;
    margin: 0 auto;
    padding-bottom: 30px;
  }
  .headBox{
    margin-bottom: 28px;
    font-size: 0;
  }
  .headBox .jobs-title{
    display: inline-block;
    margin-right: 24px;
    font-size: 20px;
    color: #333435;
    letter-spacing: 0;
    line-height: 20px;
  }
  .headBox .jobs-number{
    display: inline-block;
    font-size: 14px;
    color: #333435;
    line-height: 20px;
    font-weight: bold;
  }
  .headBox .found{
    display: inline-block;
    font-size: 14px;
    color: #151617;
    letter-spacing: 0;
    line-height: 20px;
  }
  .jobs-tab{
    width: 100%;
  }
  .jobs-tab .jobs-list{
    margin-bottom: 20px;
    width: 100%;
    padding: 30px 40px;
    background: #FFFFFF;
  }
  .jobs-list .title_date h2{
    float: left;
    cursor: pointer;
  }
  .jobs-list .title_date h2 .list-title{
    font-size: 18px;
    color: #4B4DFF;
    letter-spacing: 0;
    line-height: 18px;
  }
  .jobs-list .title_date h2 .list-title:hover{
    text-decoration: underline;
  }
  .jobs-list .title_date .hot-icon{
    float: left;
    margin-left: 16px;
    width: 13px;
    height: 15px;
    background: url("../assets/img/jobs/icon-hot@2x.png")no-repeat center;
    background-size: cover;
  }
  .jobs-list .title_date .name_date{
    float: right;
    font-size: 14px;
    color: #989898;
    letter-spacing: 0;
    line-height: 14px;
  }
  .jobs-list .school{
    font-size: 0;
    margin-top: 16px;
  }
  .jobs-list .school .school-icon{
    display: inline-block;
    width: 13px;
    height: 12px;
    background: url("../assets/img/jobs/icon-jobs-companies@2x.png")no-repeat center;
    background-size: cover;
  }
  .jobs-list .school h3{
    display: inline-block;
    margin-left: 10px;
    font-size: 14px;
    color: #333435;
    letter-spacing: 0;
    line-height: 14px;
    font-weight: 600;
  }
  .jobs-list .line{
    margin: 20px 0;
    width: 40px;
    height: 1px;
    background-image: linear-gradient(135deg, #19DFE8 0%, #4B4DFF 100%);
  }
  .jobs-list .category,.jobs-list .sub-grade .sub,.jobs-list .sub-grade .grade{
    width: 470px;
    font-size: 0;
    margin-bottom: 16px;
  }
  .jobs-list .category .cate-name,.cate-des,.sub-grade .sub .sub-name,.sub-grade .sub .sub-des,.sub-grade .grade .grade-name,.sub-grade .grade .grade-des{
    display: inline-block;
    font-size: 14px;
    color: #333435;
    vertical-align: middle;
  }
  .jobs-list .category .cate-name,.sub-grade .sub .sub-name,.sub-grade .grade .grade-name{
    margin-right: 10px;
    background: #FAFAFC;
    border: 1px solid #E9EDFB;
    border-radius: 100px;
    width: 76px;
    height: 28px;
    line-height: 28px;
    text-align: center;
  }
  .jobs-list .category .cate-des,.sub-grade .sub .sub-des,.sub-grade .grade .grade-des{
    width: 370px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .jobs-list .sub-grade .sub{
    float: left;
  }
  .jobs-list .sub-grade .grade{
    float: right;
  }
  .jobs-list .m-date{
    margin-top: 16px;
    font-size: 12px;
    color: #989898;
    display: none;
  }

  .paging{
    width: 100%;
    display: flex;
  }
  .paging .el-pagination{
    margin: 50px auto;
  }
  .paging .el-pagination .el-pagination__total{
    display: none;
  }
  .paging .el-pagination .btn-prev,.paging .el-pagination .btn-next,.paging .el-pagination .number{
    width: 40px;
    height: 40px;
    background: #fff;
    border: none;
    border-radius: 2px;
  }
  .paging .el-pagination .btn-prev{
    margin-right: 6px;
  }
  .paging .el-pagination .btn-next{
    margin-left: 6px;
  }
  .paging .el-pagination .number{
    margin-right: 6px;
    font-size: 14px;
    color: #333435;
    text-align: center;
    line-height: 40px;
  }
  .paging .el-pagination .el-icon-more,.el-pager .el-icon-d-arrow-right,.el-pager .el-icon-d-arrow-left{
    margin-right: 6px;
    padding: 0;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 2px;
    background: transparent;
    text-align: center;
    line-height: 40px !important;
    color: #333435 !important;
  }
  .paging .el-pagination .el-pager li:last-child{
    margin-right: 0;
  }
  .paging .el-pager .active{
    background-image: linear-gradient(135deg, #19DFE8 0%, #4889FF 54%, #4B4DFF 100%) !important;
    color: #fff
  }
  .el-icon-arrow-left:before {
    content: none;
  }
  .el-icon-arrow-right:before {
    content: none;
  }
  .btn-prev,.btn-next{
    padding: 0 13.5px !important;
  }
  .btn-prev .el-icon-arrow-left,.disabled .el-icon-arrow-left,.btn-next .el-icon-arrow-right,.disabled .el-icon-arrow-right{
    width: 13px;
    height: 5px;
  }
  .btn-prev .el-icon-arrow-left{
    background: url("../assets/img/jobs/icon-jobs-arrow-left-normal@1x.png")no-repeat center;
  }
  .disabled .el-icon-arrow-left{
    background: url("../assets/img/jobs/icon-jobs-arrow-left-disabled@1x.png")no-repeat center;
  }
  .btn-next .el-icon-arrow-right{
    background: url("../assets/img/jobs/icon-jobs-arrow-right-normal@1x.png")no-repeat center;
  }
  .disabled .el-icon-arrow-right{
    background: url("../assets/img/jobs/icon-jobs-arrow-right-disabled@1x.png")no-repeat center;
  }

  .loading{
    margin: 40px 0 50px 0;
    text-align: center;
    font-size: 0;
    display: none;
  }
  .loading .loadIcon{
    display: inline-block;
    margin-right: 15px;
    width: 18px;
    height: 18px;
    background: url("../assets/img/blog/loading.gif")no-repeat center;
    vertical-align: top;
    background-size: cover;
  }
  .loading .loadText{
    display: inline-block;
    font-size: 14px;
    color: #333435;
  }
  @media (max-width: 768px){
    .jobs{
      padding-top: 130px;
    }
    .jobs-content{
      width: 696px;
    }
    .headBox{
      margin-bottom: 18px;
    }
    .jobs-tab .jobs-list{
      margin-bottom: 12px;
      padding: 30px 24px;
      box-shadow: 0 2px 4px 0 rgba(209,214,221,0.50);
    }
    .jobs-list .category,.jobs-list .sub-grade .sub,.jobs-list .sub-grade .grade{
      width:100%;

    }
    .jobs-list .category .cate-des,.sub-grade .sub .sub-des,.sub-grade .grade .grade-des{
      width: 550px;
    }
    .jobs-list .sub-grade .sub{
      float: inherit;
    }
    .jobs-list .sub-grade .grade{
      float: inherit;
    }
    .paging{
      display: none;
    }
    .loading{
      display: block;
    }
    .jobs-list .title_date h2{
      width: 510px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  @media (max-width: 415px){
    .jobs{
      padding-top: 108px;
    }
    .jobs-content{
      width: 100%;
      padding: 0 1.5%;
    }
    .headBox{
      display: none;
    }
    .jobs-tab .jobs-list{
      margin-bottom: 10px;
      padding: 22px 14px;
    }
    .jobs-list .title_date h2{
      width: inherit;
      overflow: inherit;
      white-space: inherit;
      text-overflow: inherit;
    }
    .jobs-list .title_date .name_date{
      display: none;
    }
    .jobs-list .school{
      margin-top: 12px;
    }
    .jobs-list .category,.jobs-list .sub-grade .sub,.jobs-list .sub-grade .grade{
      margin-bottom: 12px;
    }
    .jobs-list .category .cate-name,.sub-grade .sub .sub-name,.sub-grade .grade .grade-name{
      width: 20%;
      margin-right: 3%;
    }
    .jobs-list .category .cate-des,.sub-grade .sub .sub-des,.sub-grade .grade .grade-des{
      width: 76%;
    }
    .jobs-list .m-date{
      display: block;
    }
  }
</style>
