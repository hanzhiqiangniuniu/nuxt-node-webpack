<template>
  <div class="jobs">
    <v-nav></v-nav>
    <v-jobSeNav></v-jobSeNav>
    <div class="jobs-content">
      <div class="headBox">
        <h2 class="jobs-title">JOBS IN CHINA</h2>
        <span class="jobs-number">{{pageTotal}}&nbsp</span>
        <span class="found">
           opportunities found by careerchina
        </span>
      </div>
      <ul class="jobs-tab">
        <li class="jobs-list" v-for="jobList in this.jobListArray">
          <div class="title_date clear">
            <h3 @click="linkDetail(jobList.id)">
              <a href="javascript:;" class="list-title">{{jobList.title}}</a>
            </h3>
            <i class="hot-icon" v-if="jobList.hot==='999'?false:true"></i>
            <span class="name_date">{{jobList.updateTime}}</span>
          </div>
          <div class="school">
            <i class="school-icon"></i>
            <h4>{{jobList.institute}}</h4>
          </div>
          <div class="line"></div>
          <div class="category">
            <span class="cate-name">
              Category:
            </span>
            <p class="cate-des">
              {{jobList.category}}
            </p>
          </div>
          <div class="sub-grade clear">
            <div class="sub">
              <span class="sub-name">Subject:</span>
              <p class="sub-des">
                {{jobList.subject}}
              </p>
            </div>
            <div class="grade">
              <span class="grade-name">
                Grade:
              </span>
              <p class="grade-des">
                {{jobList.age_group}}
              </p>
            </div>
          </div>
          <p class="m-date">
            {{jobList.updateTime}}
          </p>
        </li>
      </ul>
      <div class="paging" ref="pageBox">
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
  import '../assets/css/reset.min.css'
  import nav from '../components/public/nav/nav'
  import jobSeNav from '../components/public/job-seNav/job-seNav'
  import footer from '../components/public/footer/footer'
  import goTop from '../components/public/goTop/goTop'
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
        footer:true
      };
    },
    head: {
      link: [
        {rel: 'stylesheet', href: 'https://unpkg.com/element-ui/lib/theme-default/index.css'}
      ],
    },
    components:{
      'v-nav':nav,
      'v-jobSeNav':jobSeNav,
      'v-footer':footer,
      'v-goTop':goTop
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        console.log(this)
        this.$http.get('http://'+interfaceStr+'/cc/to/c/requisition/list.action?pageSize='+this.pageSize+'&currentPage='+val+'').then(function (response) {
          this.jobListArray=response.body.requisitionList;
          console.log(this.jobListArray)
        });
      },
      linkDetail(id){
          window.open('/job-detail?id='+id+'')
      }
    },
    mounted(){
        var page=1;
        var _this=this;
      this.$http.get('http://'+interfaceStr+'/cc/to/c/requisition/list.action?pageSize='+this.pageSize+'&currentPage='+page+'').then(function (response) {
        this.jobListArray=response.body.requisitionList;
        this.pageTotal=response.body.total;
        if(this.jobListArray.length >= 15){
            this.$refs.load.style.display='block';
            this.footer=false
        }else if(this.$refs.pageBox.style.display==='block' || this.jobListArray.length < 15){
          this.$refs.load.style.display='none';
          this.footer=true
        }
      });
      $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        var windowHeight = $(this).height();
        var loadOffset = $('.loading').offset().top;
        var topCon = scrollTop + windowHeight;
        if (topCon >= loadOffset) {
          page++;
          _this.$http.get('http://'+interfaceStr+'/cc/to/c/requisition/list.action?pageSize='+_this.pageSize+'&currentPage='+page+'').then(function (response) {
            let Listdatas = response.body.requisitionList;
            if (Listdatas.length < 15) {
              _this.load = false;
              for (var i = 0; i < Listdatas.length; i++) {
                _this.jobListArray.push(Listdatas[i]);
              }
              _this.footer = true;
              return
            } else {
              _this.load = true;
              for (var i = 0; i < Listdatas.length; i++) {
                _this.jobListArray.push(Listdatas[i]);
              }
            }
          })
        }
        if (_this.load === false) {
          $(window).off('scroll');
        }
      });
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
    box-shadow: 0 2px 4px 0 rgba(209,214,221,0.50);
  }
  .jobs-list .title_date h3{
    float: left;
    cursor: pointer;
  }
  .jobs-list .title_date h3 .list-title{
    font-size: 18px;
    color: #4B4DFF;
    letter-spacing: 0;
    line-height: 18px;
  }
  .jobs-list .title_date h3 .list-title:hover{
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
  .jobs-list .school h4{
    display: inline-block;
    margin-left: 10px;
    font-size: 14px;
    color: #333435;
    letter-spacing: 0;
    line-height: 14px;
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
  }
  .jobs-list .category .cate-des,.sub-grade .sub .sub-des,.sub-grade .grade .grade-des{
    width: 395px;
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
  .el-pager .active{
    background-image: linear-gradient(135deg, #19DFE8 0%, #4889FF 54%, #4B4DFF 100%) !important;
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
    }
    .jobs-list .category,.jobs-list .sub-grade .sub,.jobs-list .sub-grade .grade{
      width:100%;

    }
    .jobs-list .category .cate-name,.sub-grade .sub .sub-name,.sub-grade .grade .grade-name{
      margin-right: inherit;
      width: 73px;
    }
    .jobs-list .category .cate-des,.sub-grade .sub .sub-des,.sub-grade .grade .grade-des{
      width: 570px;
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
  }
  @media (max-width: 401px){
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
    }
    .jobs-list .category .cate-des,.sub-grade .sub .sub-des,.sub-grade .grade .grade-des{
      width: 80%;
    }
    .jobs-list .m-date{
      display: block;
    }
  }
</style>
