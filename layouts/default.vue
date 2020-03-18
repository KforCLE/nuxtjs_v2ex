<template>
  <div class="app">
    <!-- 头部 -->
    <logo />
    <!-- 路由区域 -->
    <div class="showNodeContent content">
      <nuxt class="routerContent" />
      <!-- 右侧区域 -->
      <userinfor class="rightContent" />
    </div>
    <!-- 底部 -->
    <bottom />
  </div>
</template>
<script>
import Logo from "~/components/Logo.vue";
import bottom from "~/components/bottom.vue";
import userinfor from "~/components/userinfor.vue";
export default {
  components: {
    bottom,
    userinfor,
    Logo
  }
};
</script>
<style lang="scss">
html {
 font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", "Segoe UI", "Hiragino Sans GB", "Microsoft Yahei", sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
.app {
  width: 100%;
  .showNodeContent {
      margin-top: 20px;
    @include flex(row, flex-start, flex-start);
    .routerContent{
      flex:1;
    }
  }
  .rightContent {
    width: 200px;
    background: white;
    margin-left: 10px;
    min-height: 600px;
  }
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  list-style: none;
  text-decoration: none;
  padding: 0;
}
.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
