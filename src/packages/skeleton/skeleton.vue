<template>
    <section class="skeleton">
      <div class="skeleton-animation"></div>
      <div class="main">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <svg width="100%"
              height="66px"
              viewBox="0 0 270 66"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
              stroke-linecap="round"
              stroke-linejoin="round">
            <path d="M8,60 C8,60 34.2387828,14.9219741 64.061311,29.9479827 C93.8838393,44.9739914 92.5237985,60 121.841658,60 C151.159517,60 156.602778,15.1784686 187.906761,7.58013697 C219.210745,-0.0181946978 244.968768,21.4348856 263,36.8297359"
              id="Path-2"
              stroke="#F0F0F0"
              stroke-width="10"
            ></path>
          </g>
        </svg>
      </div>
    </section>
</template>

<script>
export default {
  name: 'ButtonDemo'
}
</script>
<style lang="scss" scoped>
@keyframes backpos {
  from {
    background-position-x: -200px;
  }

  to {
    background-position-x: calc(200px + 100%);
  }

}
.skeleton {
  position: relative;
  padding: 1rem;
  min-height: 2rem;
  box-shadow: 0 0.04rem 0.12rem 0 rgba(0,0,0,0.08);
  background-color: #fff;

  .skeleton-animation {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(255,255,255,0) 20%, rgba(255,255,255,0.8) 80%, rgba(255,255,255,0) 100%);
    background-size: 70% 100%;
    background-position-y: center;
    background-repeat: no-repeat;
    animation: backpos 1.2s ease-in-out 0s infinite;
  }

  .main {
    div.item {
      margin-bottom: 1rem;
      position: relative;
      width: 70%;
      height: 1rem;
      border-radius: 0.5rem;
      background-color: #f0f0f0;
    }
    div.item:first-child {
      margin-left: 2rem;
      width: 4rem;
      
      &::before {
        content: '';
        position: absolute;
        left: -2rem;
        display: block;
        width: 1rem;
        height: 1rem;
        background-color: #f0f0f0;
        border-radius: 50%;
      }
    }
  }
}
</style>
