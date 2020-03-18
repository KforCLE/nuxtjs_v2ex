<template>
  <div class="bottom">
    <!-- 关于我们 -->
    <div class="about content">
      <ul>
        <a href="#">
          <li class="item">关于</li>
        </a>
        <a href="#">
          <li class="item">FAQ</li>
        </a>
        <a href="#">
          <li class="item">API</li>
        </a>
        <a href="#">
          <li class="item">我们的愿景</li>
        </a>
        <a href="#">
          <li class="item">广告投放</li>
        </a>
        <a href="#">
          <li class="item">感谢</li>
        </a>
        <a href="#">
          <li class="item">实用小工具</li>
        </a>
        <a href="#">
          <li class="item">99999人在线</li>
        </a>
        <a href="#">
          <li class="item">最高记录9999</li>
        </a>
        <a href="#">
          <li class="item">选择语言</li>
        </a>
      </ul>
    </div>
  </div>
</template>
<style lang="scss">

.bottom {
  width: 100%;
  padding: 15px 0;
  @include flex(row, center, flex-start);
  .about {
    ul {
      @include flex(row, flex-start, center);
      a > li {
        padding-right: 6px;
        color:gray;
      }
      a:last-child > li {
        padding: 0;
      }
    }
  }
}
</style>