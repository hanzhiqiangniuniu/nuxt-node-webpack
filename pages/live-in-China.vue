<template>
  <div class="lifeClass">
    <v-nav></v-nav>
    <v-seNav></v-seNav>
    <div class="auto">
      <el-carousel :interval="5000" type="card" :autoplay=false height=400px>
        <el-carousel-item v-for="carousel in this.carousels">
          <div class="slide" @click="only(carousel.urlWords)">
            <img :src="carousel.faceImg" :alt="carousel.faceImgAlt">
            <div class="bannerMask"></div>
            <div class="bannerDes">
              <h2 class="blogTitle">{{carousel.title}}</h2>
              <p class="blogDes">{{carousel.description}}</p>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>

      <div class="blogClass">
        <ul class="blog-tab">
          <li class="blog-list clear" v-for="detailData in this.detailDatas">
            <div class="listL">
              <a class="title" href="javascript:;" target="_blank" @click="blogDetail(detailData.urlWords)">
                {{detailData.title}}
            </a>
              <div class="author">
                <span class="authorName">{{detailData.authorName}} /&nbsp</span>
                <span class="timeStr">{{detailData.updateTimeStr}}</span>
              </div>
              <div class="bgLine"></div>
              <P class="listField">
                {{detailData.description}}
            </P>
            </div>
            <div class="listImg">
              <img :src="detailData.faceImg" :alt="detailData.faceImgAlt">
            </div>
          </li>
        </ul>
        <!--<div class="more" v-show="more" id="more">
          <a href="javascript:;">more</a>
          <i class="downIc"></i>
        </div>
        <div class="loading" v-show="loading">
        </div>-->
      </div>
      <p class="loading" v-show="load">
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
  import VueResource from 'vue-resource'
  import '../assets/css/reset.min.css'
  import '../assets/css/blogList.css'
  import interfaceStr from '../assets/js/interface.js'
  import addthis from '../assets/js/addthis.js';
  import nav from '../components/public/nav/nav'
  import seNav from '../components/public/blog-seNav/blog-seNav'
  import footer from '../components/public/footer/footer'
  import goTop from '../components/public/goTop/goTop'
  var addthis_share = {};
  if (process.BROWSER_BUILD) {
    const VueAwesomeSwiper = require('vue-awesome-swiper/ssr');
    const Carousel = require('element-ui');
    Vue.use(VueAwesomeSwiper);
    Vue.use(VueResource);
    Vue.use(Carousel)
  }
  export default{
    data(){
      return {
        detailDatas: [],
        carousels: [],
        carousels1: '',
        /*more:false,
         loading:false,*/
        one: true,
        load: true,
        footer: false
      }
    },
    head: {
      link: [
        {rel: 'stylesheet', href: 'https://unpkg.com/element-ui/lib/theme-default/index.css'}
      ],
      title: 'live in China',
      meta: [
        {name: 'keywords', content: 'live in china'},
        {name: 'description', content: 'Discover what is like to live in China as an expat.'},
        {property: 'og:url', content: 'www.careerchina.com/live-in-China'},
        {property: 'og:type', content: 'article'},
        {property: 'og:image', content: 'http://material.careerchina.com/img/f3797436-a3c3-453a-b2dc-59024b609ffe.jpg'},
        {name: 'twitter:card', content: 'http://material.careerchina.com/img/f3797436-a3c3-453a-b2dc-59024b609ffe.jpg'},
        {name: 'twitter:creator', content: 'careerchina'},
        {
          name: 'twitter:image',
          content: 'http://material.careerchina.com/img/f3797436-a3c3-453a-b2dc-59024b609ffe.jpg'
        },
        {itemprop: 'image', content: 'http://material.careerchina.com/img/f3797436-a3c3-453a-b2dc-59024b609ffe.jpg'},
      ]
    },
    components: {
      'v-nav': nav,
      'v-footer': footer,
      'v-goTop': goTop,
      'v-seNav': seNav
    },
    methods: {
      blogDetail(urlWords){
        window.open('/' + urlWords + '.html');
      },
      only(urlWords){
        window.open('/' + urlWords + '.html');
      }
    },
    mounted(){
      var _this = this;
      let page = 1;
      this.$http.get('http://' + interfaceStr + '/cc/blog/pageBlogs/getByCategoryId.action?rowCount=4&page=' + page + '&categoryId=4').then(function (response) {
        this.carousels = response.body.hotdata;
        this.detailDatas = response.body.data.data;
        this.carousels1 = response.body.hotdata[0];
        if (this.detailDatas.length >= 4) {
          this.load = true;
        } else {
          this.load = false;
          this.footer = true
        }
      });
      $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        var windowHeight = $(this).height();
        var loadOffset = $('.loading').offset().top;
        var topCon = scrollTop + windowHeight;
        if (topCon >= loadOffset) {
          page++;
          _this.$http.get('http://' + interfaceStr + '/cc/blog/pageBlogs/getByCategoryId.action?rowCount=4&page=' + page + '&categoryId=4').then(function (response) {
            let Listdatas = response.body.data.data;
            if (Listdatas.length < 4) {
              _this.load = false;
              for (var i = 0; i < Listdatas.length; i++) {
                _this.detailDatas.push(Listdatas[i]);
              }
              _this.footer = true;
              return
            } else {
              _this.load = true;
              for (var i = 0; i < Listdatas.length; i++) {
                _this.detailDatas.push(Listdatas[i]);
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

</style>
