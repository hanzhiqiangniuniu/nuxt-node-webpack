<template>
  <div class="goTop" id="goTop">
    <i class="normal" id="normal"></i>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    mounted () {
      var oTop = document.getElementById('goTop');
      window.onscroll = computedDisplay;
      function computedDisplay () {
        var scrollT = document.body.scrollTop || document.documentElement.scrollTop;
        var clientH = document.documentElement.clientHeight;
        if (scrollT > clientH) {
          oTop.style.display = 'block';
        } else {
          oTop.style.display = 'none';
        }
      }

      oTop.onclick = function () {
        this.style.display = 'none';
        window.onscroll = null;
        var target = document.body.scrollTop;
        var duration = 1000;
        var interval = 10;
        var step = target / duration * interval;
        var timer = setInterval(function () {
          var curTop = document.body.scrollTop;
          if (curTop <= 0) {
            clearInterval(timer);
            window.onscroll = computedDisplay;
            return;
          }
          curTop -= step;
          document.body.scrollTop = curTop;
        }, interval);
      };
    }
  };
</script>

<style scoped>
  .goTop {
    width: 50px;
    height: 50px;
    position: fixed;
    right: 40px;
    bottom: 460px;
    display: none;
    z-index: 99;
    cursor: pointer;
    border-radius: 2px;
  }

  .goTop .normal {
    display: block;
    width: 100%;
    height: 100%;
    background: url("./web-button-top-normal.png") no-repeat center;
    background-size: cover;
  }

  .goTop .normal:hover {
    background: url("./web-button-top-press.png") no-repeat center;
    background-size: cover;
  }
</style>
