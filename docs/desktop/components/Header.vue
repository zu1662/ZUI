<template>
  <header>
    <div class="logo">
      <img src="@/docs/assets/logo.png" alt="">
      <span>Zui</span>
    </div>
    <div class="info">
      <div class="version">1.0.0</div>
      <a href="https://github.com/zu1662/ZUI" target="_blank">
        <svg height="28" width="28" viewBox="0 0 16 16" version="1.1" aria-hidden="true" class="github-icon"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
      </a>
    </div>
  </header>
</template>
<style lang="scss" scoped>
header {
  width: 100%;
  height: 60px;
  background-color: #001938;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  .logo {
    margin-left: 20px;
    line-height: 30px;
    font-size: 25px;
    img {
      margin-right: 10px;
      width: 30px;
      height: 30px;
    }
  }
  .info {
    margin-right: 20px;
    display: flex;
    align-items: center;
    .version {
      padding: 3px 10px;
      margin-right: 20px;
      font-size: 14px;
      border: 1px solid #fff;
      border-radius: 3px;
    }
    .github-icon {
      fill: #fff;
    }
  }
}
</style>
