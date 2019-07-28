<template>
  <span class="iconfont" :class="'icon' + name" :style="`font-size: ${size/10}rem`"></span>
</template>
<script>
export default {
  name: 'MobileIcon',
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      default: 12
    }
  }
}
</script>
<style lang="scss" scoped>
  @font-face {font-family: "iconfont";
    src: url('../../assets/font/iconfont.eot?t=1564316325963'); /* IE9 */
    src: url('../../assets/font/iconfont.eot?t=1564316325963#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
    url('../../assets/font/iconfont.woff?t=1564316325963') format('woff'),
    url('../../assets/font/iconfont.ttf?t=1564316325963') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('../../assets/font/iconfont.svg?t=1564316325963#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .iconshare:before {
    content: "\e72b";
  }

  .iconskin:before {
    content: "\e72c";
  }

  .iconinput:before {
    content: "\e72d";
  }

  .iconscript:before {
    content: "\e628";
  }

  .icondirective:before {
    content: "\e62a";
  }

  .iconequalizer:before {
    content: "\e6fd";
  }

  .iconlist_table:before {
    content: "\e62f";
  }

  .iconstandard:before {
    content: "\e7b7";
  }

  .iconmerge:before {
    content: "\e942";
  }

  .iconshuffle:before {
    content: "\e943";
  }

  .iconindent:before {
    content: "\e608";
  }

  .iconaward:before {
    content: "\e600";
  }

  .iconbullhorn:before {
    content: "\e601";
  }

  .iconbrush:before {
    content: "\e602";
  }

  .iconcluster:before {
    content: "\e603";
  }

  .iconvideo:before {
    content: "\e604";
  }

  .iconfilter:before {
    content: "\e621";
  }

  .iconlink:before {
    content: "\e629";
  }

  .iconpicture:before {
    content: "\e633";
  }

  .iconform:before {
    content: "\e637";
  }

  .icontoBottom:before {
    content: "\e63d";
  }

  .iconvcode:before {
    content: "\e63f";
  }

  .iconStone_color:before {
    content: "\e84d";
  }

  .iconLsit_more:before {
    content: "\e684";
  }

  .icontime:before {
    content: "\e687";
  }

  .iconfingerprint:before {
    content: "\e68b";
  }

  .iconLjl:before {
    content: "\e68d";
  }

  .iconapps_menu:before {
    content: "\e849";
  }

  .iconbarcode:before {
    content: "\e850";
  }

  .icondashboard:before {
    content: "\e854";
  }

  .icondialog:before {
    content: "\e857";
  }

  .iconlist_settings:before {
    content: "\e861";
  }

  .iconmenu:before {
    content: "\e86d";
  }

  .iconswitch:before {
    content: "\e87c";
  }

  .iconcarousel:before {
    content: "\e643";
  }

  .iconcalendar:before {
    content: "\e645";
  }

  .iconbookmark:before {
    content: "\e648";
  }

  .icontime_relative:before {
    content: "\e654";
  }

  .iconstar:before {
    content: "\e65c";
  }

  .icontabs:before {
    content: "\e65e";
  }
</style>
