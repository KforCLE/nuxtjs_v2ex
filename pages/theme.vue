<template>
  <!-- 帖子详情页面 -->
  <div class="theme content">
    <div class="themerow">
      <div class="titleControl">
        <h1>这是谁的帖子标题呢？</h1>
        <label for class="publishTime">
          <span class="publisher">发布人 test</span>
          <span class="pushlishFarDay">1天前</span>
          <span class="clickNumber">10000次点击</span>
        </label>
      </div>
      <img src alt class="userAvatar" />
    </div>

    <p class="themeContent">现在国内很多公司的应用都要兼容到 4.4 左右吧，像我们公司的产品有些大学生用户用的也是 4.4 的系统，不是很能理解，14 年的手机用到现在？</p>
    <div class="themeOperate">
      <button>加入收藏</button>
      <button>加入收藏</button>
      <button>加入收藏</button>
      <button>加入收藏</button>
      <button>加入收藏</button>
    </div>
    <div class="reply">
      <div class="replyTotal">
        <label for class="replyCount_time">122 条回复 • 2020-03-18 20:14:36 +08:00</label>
        <label for class="nodeList">
          <span class="nodeName">
            <span class="icon"></span>
            <span class="text">android</span>
          </span>
          <span class="nodeName">
            <span class="icon"></span>
            <span class="text">android</span>
          </span>
          <span class="nodeName">
            <span class="icon"></span>
            <span class="text">android</span>
          </span>
        </label>
      </div>
      <div class="pageTool">
        <!-- 分页工具 -->
        <div class="pageList">
          <button class="pageChange">1</button>
          <button class="pageChange">1</button>
        </div>
        <div class="nextPage">
          <button class="pageChange">《</button>
          <button class="pageChange">></button>
        </div>
      </div>
      <div class="replyList">
        <div class="replyFloor">
          <img src alt />
          <div class="replyContent">
            <p>
              <label for class="nickName">昵称</label>
              <label for class="dayAgo">2天前</label>
              <label for class="star">
                <span class="icon"></span>24
              </label>
            </p>
            <p class="content">不坏就能一直用……请理解下。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.theme {
  @include flex(column, flex-start, flex-start);
  background: white;
  padding: 10px;
  .themerow {
    width: 100%;
    padding: 10px 0;
    border-bottom: 1px solid $borderColor;
    @include flex(row, space-between, flex-end);
    .titleControl {
      h1 {
        font-size: 24px;
        font-weight: 500;
        margin: 6px 0;
      }
    }
    img {
      display: block;
      width: 72px;
      height: 72px;
      border-radius: 6px;
      background: red;
    }
  }
  .themeContent{
      color:black;
      font-size: 14px;
      padding:10px 6px;
      word-break: break-word;
  }
  .themeOperate{
      width:100%;
      background: #ccc;
      button{
          padding:6px;
          background: none;
          border:none;
      }
  }
  .publishTime {
    @include flex(row, space-around, center);
    span {
      padding: 0 6px;
    }
  }
}
</style>