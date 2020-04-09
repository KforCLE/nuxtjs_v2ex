<template>
  <header class="header">
    <div class="content">
      <div class="logo">
        <!-- logo存放 -->
        <img src="/v2exHtml/assets/test.png" alt="logo图片" />
        <div class="search_input">
          <input type="text" class="userinput" placeholder="输入您搜索的内容" />
          <span class="icon_search">搜索</span>
        </div>
      </div>
       <div class="operate">
      <!-- 操作区域 -->
      <div class="user">
        <ul>
          <a href="#">
            <li class="item">首页</li>
          </a>
          <a href="#">
            <li class="item">昵称</li>
          </a>
          <a href="#">
            <li class="item">记事本</li>
          </a>
          <a href="#">
            <li class="item">时间轴</li>
          </a>
          <a href="#">
            <li class="item">设置</li>
          </a>
          <a href="#">
            <li class="item">登陆</li>
          </a>
          <a href="#">
            <li class="item">登出</li>
          </a>
          <a href="#">
            <li class="item">注册</li>
          </a>
        </ul>
      </div>
    </div>
    </div>
   
  </header>
</template>
<style lang="scss">
.header {
  padding: 10px 5px;
  flex: 1;
  background: white;
  .content {
    @include flex(row, space-between, flex-end);
    .logo {
      @include flex(row, flex-start, center);
      img {
        min-width: 100px;
        height: 30px;
        border: 2px solid red;
        margin-right: 20px;
      }
      input {
        border: 1px solid #ccc;
        border-radius: 6px;
        padding-left: 10px;
        padding-top: 3px;
        padding-bottom: 3px;
        outline: none;
      }
    }
      //  操作块
  .operate > .user > ul {
    padding: 0;
    margin: 0;
    @include flex(row, flex-start, center);
    a {
      color: black;
      li {
        padding: 5px 6px;
      }
    }
    a:hover {
      opacity: 0.5;
    }
  }
  }


  .NuxtLogo {
    animation: 1s appear;
    margin: auto;
  }

  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}
</style>
