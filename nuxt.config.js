module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' },
      { name: 'robots', content: 'index, follow' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'http://careerchina-material.oss-us-west-1.aliyuncs.com/img/bfd7f24f-c718-4fba-8993-7fabc3a4f98c.ico' }
    ],
    script:[
      {type:'text/javascript', href:'/google.js'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  build:{
  },
  plugins: ['plugins/element-ui.js'],
  /*css: [
    'element-ui/lib/theme-default/index.css',
    //add customised theme variables if needed
    '~assets/css/variables.css'
  ]*/
  /*
  ** Build configuration
  */
}
