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
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAABdkAAsAAAAALIQAABcWAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCJLgrBPLNmATYCJAOBLAtYAAQgBYRtB4NNG4skRUaFjQMgkNdtI6o2Cdn/lwRuDMXX0LIriIMo6DgVdUdujzz944+Why0uQSZcco4Mei3O53glLCEtVjv4BEHblLWks+eMHemk9h1KCc/nfn2d3ORxujsNgK8HgO2wGsW7Dj2B2lUOy7MDR6iyLMn9/am9/KttmJhT2vin9L76YRA2Z4EcIXzvMo7Z9vDAc8z+1jrRCYz6eYWtcX0J2F4lcIBnFdQCNzw/t/+zYDe2hhHlZOYdPYShm0QNZcS4d3TuOeDBtb7MHOqLIWYDdxYg2MmER78vvmqweoNtVklpPwmUFWRN5UwiI+ud3Z6IwD3hzgNpx89apl0TQRIgwJoBjE28rTTHO29084H/PSAA8N++X1u9uUSl6/QtETqtiv27hzxEo3gSn87QGiGKSCdkGo0hxch8m68WOsZSWXSq9XzfF7aqyt1x/HHwaXpkXkgH/2eRCaEDOuZSkdUVissm6eB37K2r6qsqK5yrTh3t4uVDARY1M06DsZmHi3595jCKCSraC+Mj70OB1MCWSl/++FMtGMYyBdTo8caoRSDMJGiV2B9y9oZRWwvEwdf7DHiD/V79sb8YRBDCWHu188qpp5/g96gZ73CnpTnVJYHVPtBgCwzkjJtRB9OO2DI15b2nCTyD4qKnpsyn+T3+fWyGuRZaarW1NhaTOrzsclvjTX6j/9p/etenfounkQyXpkAJveXW/R7144ECy6aZk8uRgzUqykUfTcu+mvPzj3kKq6CoxMmUGRWBSFVNXcPcwtLK2kZLW0dXSBFarKdpYGRsom9qZiiRQkVBswVIXK9u4AEFLDwNKMDTgSI8AyjBMwEHDwMZ/FSgDD8LMPCzgQo8BgTwfkAELweq8CFADV4F1OHDgAZ8FDCHjwEW8GpgCY8r1IOyoQDKhQJoDYAWvAlow28EOvBfA134T0CIX2WMYuQNRkA+YDToDIAYv8UzPZAGTBOUDGYAwsGMQGlgxqACMBNQCZg+SA9mCloOZgZaB2CI3yOZBBSFPlIAubXjNsUngHSCss8YEVXRd2KISCYRigXjSwRexdCSWVcI7DyhTTU8+IJ5NqnEUANu2ogyFYVOJm6q5c6ac8LQ6ZKu2prtuLq1zog1zcrJll2ZJp2JoBsVDthxiY3KYcO49syU0xQ1cEXnNWleKNjduXPdpCs1pdIcVCqlWKtEP8e2a71yq1RpNJaVbkVbmyUmClSEGe3V8Bkj1EkseTClWCwYl6Yz4/DiuFWrVEb1dO5KugSVo9vozXTCv1mcf2c2D2Hfs41PjI+DTs4gVfDcMNpcesL/9Iannq7NTl1yL3rnnQslv+k2vMgZaLU/4cso3pBiBHA5AERTZNOk8D3RsKArbS4x9gOzesY/N1JK7Js0CAAisljOiZDqNSxlp/7/heH5yvlJxdrFEYWuS/M9YBys+7Dgog4NqBADROtLqwlbu5paXR8KK4TQref1pWMQYXDwapsXti24BeWWhFKW7QWYgYPAEW3IC93qpBzR2mpb/Wr8ANBzIcm6KnYkO1DoSXbOVkKLZ6ullPPT46Gp8v9qxYi4F0Kl9+ISgdE3kvE5Ib7MZwgVaWuwF2J3E2v+AMCJ9mhQ1TBT17JWcFcmWbC7CFn3uBbUOfBoXhgOhCixdRhaRWHkA1OXttIMbFaNUerLNiYeGlC770naE8FycCwG6EwqbE9aY7df73I7a+g+qns9/r9dW3jGtyhs1JfDpzoRI2YHOvnU85H5iyH4xBUP0P040xMAJzCxlBC6oYU+T8V7C7RxEEG02z4YDIoAQcRp8TJPGROGId51JV++RtWDC1iKEMD+Ax9K9t93L8D5sbkaeZ2/Wx0+n2+4FlhCkffQt7GA8WMzDz1i4yVhr0VXIfsJiWdlWrFrLqcHhif6pcqatGFoqcIAAQnMgFYeFNHMwatdt3nOb7h0LRY2gF3KMp6mLI5JklAb+iEAitrq4yc5f7zBh6Tb/jidU3jbe4ElPs+JimVgMSJqVgi/3YVyePfOvBNFb3EPqjWg4h7CuFQ/MTz4CjPEFZxDtLp/kkBXXukI1q64WPfH57pj5WFKqzGepiN5tuBimgUCc3GSzK4m7pVR47oPYL85UnbBCXtH9GZufVna0qq7P9Bh8V2AIcN5DgwHlQghrzECdh16S0cPKcSgs3B4c/emMjHgM5BPQ3y4cbHJFGKwxaj9FCDYF2vuzOuFD3T/AGgSLqpap+Beojoo7m2vCqeHjqqGYAy0YYo4lT8cXi7X5ioNACAV0UdQtjkLu6StB6O9Zc4RfLRpkC0Ve8RDHw6FJC7bKHvWjMZR99hM3rw343mmDxxxDk8jQtRmc9nX15tg96aRyJk+fdeAWry7GNGkXwaK9Z7wT9m86c6YoZ7hm9MvOKtIdHvZ5AUrSC5NnczsQJzzX3jiIo5LLOPMEH1U61QO24bOMGd0nxEh7bVBIQ4PUlIbmSyMdphSFk0uKOYrvWv79DA/2cyTW7tEddWLOyJKD04mYactbd/cXZI4MM2gYuwSfdlzmpimUJESZ5ktzSAhZo4/xonx+7F4Bzj0TCKW2bwMwjSdEcW53ta3nSMOpo5xbPc82fhsisv2vUY79pbxB5y+i8JNK59ueJzjDMxKLhsSaHjYtj8msccWNHX5lmY+3TZPHBIzpryvGECcai9Nj/26LTs/hI0wssyCwtaws6tunkm8bbAf4+K/fV7DtS9lM4zD8GKlaBHk/13HXSjr/1eNw0Lch1cA/5kQdtX/N4+A5yLmWQfTuTnRO8n6XiHig2dwUpd9Lnsek4Nq5T+rhrxYIbaENSOadn6eqJoB9qV9aG5zpux6uzaOf9LY6/G43JO16knDHZW3RDAhYrrN+oC50Crvz/98gdNTw/MiCpQV89qciJE68T3MaE7FfuHoSHibrPRu0eREBHmTqfytegXNLrQV9nZsc+OTOQCDeODDKKHHN/DGFMB3p561CYJuNpC1ntpVuAOC46BcIQe3xhlcpq/tK78+ROXB9YLDmx/EFc6mOIfaKetT9ubejjd0Rct9otUyBeVaWI8Yot1YQW1aTuUAw3dbUaj/r8RAwIne4VFeGtbe+1oXrKgkpylcA6pC4Yx/v9cX6aqeUavJlmjRODShZ8YmtrZ37Br+fHPpRDy+m3wGwTvFVKUnu+dJ0ZblbI/WpqTaKU7v4XX32iM80RpkXi0ML+9jEO65sFjzn90A8jRnLrxcpbOBUP4TLxqWqw5gXPgWQTdE6I0sX3VUlKWf7swuKvou7L9VSVfP5AQ4GEmNRCOhsi/zbOIxCqXi8XIqnIHJ/myRCnC9WR7Jk8M0cHkQGJVhQiAkrNDu4w9kankg7Q2x5jykzU/zILDrU99E15WhcXyZqJj8Tckwk4Rs0nHKwuJgEI25Q9KOqhfakO9ngE8poYxwxmO5MMiuzDKESVuIGdQI03OgLa02Li0rtPaw0Pq2+ECZ+Z4nbP1x0wq9fSM9o3ZAdWCyBjtR8vt8MXapP/7Ka6+NGpmsK+PeXvxL60wVVbnZS//vZ35t7bCMDR6/198fXgsjOe7yJk8yEYdc41sROb1YtN15o+B/S7zDJSkREo9Dc7fHubw0CGbmzuQbflW7bNeO/2rgjyInVlvVEXYM9geXVEpFpc7+hw0FWNWrTyCjItfkxgXcnRzAcQWfLueNQtgOFhpZ7Tom045pQIvxaO1uxe7bo4rRW7SjdUvLqqs0senaOMLuFpwJSk79Q3BWaB01ZrW5t1ZmxUa3vRoixY+l/UN4VvBozJjV6t4WF0a0R6M7vveLU0GoiD3pPMkWIcji99n5M3fBHM6k0ySn78hm21xbzx7QaBB7zmenzxwRY0J69tQE9JlLb7yO0BveuujUhPPEqUUwTIcM+tg29PvlKB0NgrNb1lfS4oRtjj6Nb3kWr+fY8Ez6hKRZhN28X6NxncGeBP+miDhrhWPRJfbsKihsWJV3zA477ONzlEOzPRdfujN4hepMtGl6tTDSD93zb0bdKbPaJ1fvW0HHqt3kqBqVuzHtAjvWcwEyVBugONgi8Kw2+U6wZ6NywGr8PdxHG9W/dxKdTnEHtizRdeJoHbOlusFwDtbl1IVxROS0xcJplXU5dsk4gmUp+R/GTSzG74PgA8MjfQIPAW+EBzwA97L2b/SCQX/AHGYC/5Hwp/nhaYI385H78DD6wDhivoAOoxfMIy03UiauT4gxfSN9ERkLRRofoDWgkQK6sg4aCaOxnXJZZjsoqp3CbJc6o5GgGrnQCQmea02Vldzg3/1SVfq6weRBqb+8sFNU7i99Ka1T6f8ezu/BvKoq04MHAMOMf7701UBKfV1Hcoc04GFkReUOL385tz9Ay4B+bmCA187KKtO9+/cemI6uWpW+fGZE1tY0Fkv9pdIXqVPqT0fOjp4VrT2s0teKrQ223foxn6Vg5VtF4KEtQn9zfJCLcCir4ejyF2zbvdQL9qpuAltYr1ktwNa7mL5vP90SJA9dTPfc88yMq1foZnozCswMjG6mm21IH6kilXS6sRR1nB1rUHLyIJbd8tbiGn+5D31Zt0aRTSiocGHspxxWxKoQfCSH1AumsUDA9fcx558TzzefU9y772Jz4d9WdP5itA0jnJ+6/KLoXHD+ZrWHPSNkKhVSrPgm9I6P5964LcUpdiHho1F+E4Bq/ALvXgF/c7oHZUqghWjpXGl1ih2/Sa9qDC2FFkqYPagP3FvbMRQNRbvTz0Lhrh5BOLp+qmN+CjaTj0dzXaHws89j3KOh4Y6a3pAQRa0C3B6sqa2pUdQ6P4VqYNuwWmcbXAM9VdZwpthcalwI3yWh+D0F8mG5TYH5KOI7y/sUSyst6+sQs8Jc4AKLj1Ki3VCRBd9W3CagRaIF1CDl9nYF5fLUmeoGTKUFGQ44tVOh1EOXq3mHYzOns66xbSpLu9i2fLkgLtZBfQ31c2ioQSA4hVJjPWwwxQUdR3chup6ByaODMcgrtbqU8di+JCmpFH1z9VWa6G8DYR4X6b572YLGK8My7TCOngcDnNuKPhY/Np83azBgtpjHGQ/5YjQEsHqyyWiibH4pcaqDqFfVE/5MylRlRHQUKZ50KIuOHv8VfjlOPE593NHRm9pLkA6T7BaRZ4OIVaNpEE+Iy6b7ScoTYjxpdtI4xlhTrDZHMvrRUmuO7AYgl8QW/djk+cuUph9ZBlN+8WxaqUIo5BeYMhYZKfgXL+Db+8B64fqNBnEDjnd2XbJu3iLFnxMdZzedpJhMTT11kiQDJdtnimvygF8gJnuCfYHy4VxbwrFT33BMf9v6vk+yICL6khUXTwh6wcoSIAR1oShpMpFimwNZXz821tRw4rJ//iGB7UVcHPnzumnpS67CxfJRuYrhq0uAWrpu80kVAwAxDDnS0aQQ7dZMGH3CXsQ8Fkfcvk20xxmY7CconKndkqi4myM1OJVM7tpQ2JsgefHiRYl1feHOyRxoa0j/T9tC9ixhN9TXlxVlkkWFFkvhD1VMXr7cAEJ/NEmbl82LnJqMOyf7u5oIkyu0vKO3f6d6GY2u0Xh6qpy9r18bvwFs1hxWUHJQkjxZnnXLpTNyoItIfICEEXyO+fq1cs5Aw3OCAZo/x/RcL5+VR7pFu28PMK1lZW6R7tHbAQCerXL+S3Lbzs0HPKG7kOfI3n/wUUyEHcoOVfaAt3OZ/jduebvVMQ440EFC8pJYj+6tbRU3zTGhQQmuaX4+du3u9Rjn3t9cL9f1Dwy+YTyhm7AvMGOadHudnhl+o8f7IzOHTouxZi1eZlpYEAzblQgiMM6xCzwhD3qpPLqtUjk/kidM+l64515C+K83TW2LT5dlJQiXqlvXIksF+7LKesbKXIMdI/qfy8KuCu1908T1xSvXm7dvXZBYmrC1O4WFvgv1eeOYuh1eeB5KuWVKmJom7OMxY2PDwzMk09flkspQtVZfXqUodTjuSKMlVVYmVYJ2QDA97Z9ML1S8++onQ2F3lkxTWIkCHm2/hDMdzpqRvRKsmHHSvsn+NbUViJro87iNsvFmhlp3XbXvhMtKWX0SvSBqknQi72sCdJdu7xDdTtPq5teUdiCy9Gv9nT6EdoGIIU6glZTQErq7GRCg7ZgoHya0WGy07MQQ3MWv6Ala46IlnJ/nQDqjdXdPc42QR7hKHZJOw6nupeQV43lq7aC38bvvLvKNmouAonTqYBAHosU0irZYxGgzZQSrnaCIxnaMwvB2/yEgIINNZiEsNnJm4ASwAJwCBCDT6ywUYQGWUgIQyERn0QEMt4hIgUxA0mQ0UmQ5TC/BQBPA6AA+9qQ9ZhwaGhwcMi/AG2WEzGjUvfoSuoB+b4DFFxQVFrSXvw3bpNvk2soPDS4sGg22yTyytH/8bfG2PJ3dxiAgwBDQ+REA4HgGbTFJyxQYp2XQdD43QehWMFpb6SsIeNgKBvE/6nVAFi074JUfp7azy14B1Qh0gMB1UqEUMGzzGEBRB95H1TIwaHMDQWDnkCwceQjLkItIuC7cssngh0i4LIUqSwm9tbwadcO6MAoTog8QjMID7koBg/jCAUHReJtQuUt4VwTyQbUqVlICoxvYBpsu1D9/7nl5mmwUSITSof62crd+3FNzPopXGXIFpGhIKgQGp/hNq+uIotwZxxKhc7BsU4MOycUPpHmtSSv6OUacUuwfTKi96rF9LsG/Fo79lr8LLoBhHjq1umDWj3PMj+uV4UbDaue9N5lrkTWdnWuQtcybe51XQ2frkFEv4nbk1f02Ziv6009oK7Pt/itrUc3xVMp9CAd/gC4iEuQidAskft/L373W787JKoEGN3i948RLds192eXvdXF/wgJlu/WkCvFuO5rKjfzj6z+/1nKjtrZ5q5BHp7Yr5yp/4osr3m/rA3O0bf2fmv6CJKbMM7n5LxF1GqbrETekI37fwfwUPPtvDP1YWiflPX1sQy6PTcn7Y4vSx5rKr7AzxCLX6oZt0OHpm4B8I+PYsejfdRGhW/0C87K+rcOBexkfwp/l1bnP3Nb8Pr/NAronP48dy0u6IudJ3Xu/9T8Z2xbO6IJ8ND/qZ0j2YDnap+6+HocJvXaCZI/K1bNy/rZVo1KOejNJIdj/GtU91iZIym9lGFE29k4si655qO14SBd1vd/JMrAN+bmM9P93e6xOoLyS8p8Y/03e4tuiKvT0jsXQT6mYMGSlWPxvuzwM8Qde7BgzcH46uNCDHcu+vUA1z819CjJTQGoeAv91L6v4qX1qXVq0cByQVoKI9AUtNuNN/60QyBwUQrEzQip35cKZqqeMqXACbLysCYrzliCK3hc053Pe9P9RCDT8LYRcWkjdDtiHzCx6PI16CoyA04VXXWEp+SiWlb3qd2gKGvbHWNZv4ByqdMDuveHGN5CAVQTUDc2TL8XrUqaoY7VrA0TSBqYzWHlQLtLf+u15yLuFB0UU1coFDBgCONpdV2vux1kk8WcWq8iv/w40CmRwwhYPc/8GWBbOXdtnt70S/BslSW2xLt6nDRpPPEOop+n6jETaZUIBmnVEe4Lf1hmwxAOPZTB7t/aQPT2UVR6Urw7G4RX7+3Urxk+RE0lWVE03TMt2XM+nrKKqpq6hqaWto6unb2BoZGxiamZuYWllbSO3DQyD3BqGSe5CmsYn1BeZZcuhl6ULDFbCAEv4UwyGv8ArDFkqMTXCIotJzrCbRuAG5rkt3iPMQnKQZGou8SEWdUFsidO05pLbucVmC/B0CA5o5gP6WBMMqZv3wUqpwaPyxHEh9JxEKE4HSw7WP4QSVJaQePkxB6kiST1ZCRHWPqQGuOeQZPzxjEvT97mKkMrKMNOlQvAyrw2rkMIGh6Ztl2lyW1P11pq5YJCa7cnIIKJMy5P0gbN8CWLbhTVMJQPaGkJrW1nURF003G3Lr60Y0PQQnnQG4Um/lGUF') format('woff2'),
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

.iconarrow_left:before {
  content: "\e865";
}

.iconbarcode:before {
  content: "\e850";
}

.iconarrow_right:before {
  content: "\e886";
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
