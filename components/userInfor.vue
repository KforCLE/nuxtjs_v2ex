<template>
  <!-- 综合信息 -->
  <div class="kinds">
    <div class="userInfor">
      <!-- 用户基本信息 -->
      <div class="imgRow">
        <div class="user">
          <img src class="userAvatar" alt />
          <label>用户昵称</label>
        </div>
        <label for class="checkMoon">夜间模式</label>
      </div>
      <div class="countNum">
        <!-- 帖子有关 -->
        <div class="item">
          <label for class="count">1</label>
          <label for>节点收藏</label>
        </div>
        <div class="item">
          <label for class="count">1</label>
          <label for>主题收藏</label>
        </div>
        <div class="item">
          <label for class="count">1</label>
          <label for>特别关心</label>
        </div>
      </div>
      <div class="newThem">
        <span class="icon"></span>
        <label for>创作新主题</label>
      </div>
      <div class="message_aboutMe" id="test">
        <label for>0&nbsp;条消息提醒</label>
        <div class="moneyTotal">
          <label for>
            <span class="icon gray"></span>
            <span>16</span>
          </label>
          <label for>
            <span class="icon orange"></span>
            <span>16</span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.userInfor {
  padding: 6px 0;
  .imgRow {
    padding: 0 6px;
    @include flex(row, space-between, center);
    .user {
      img,
      label {
        display: inline-block;
      }
      img {
        max-width: 48px;
        max-height: 48px;
        border: 2px solid red;
      }
      label {
        font-size: 16px;
      }
    }
  }
  .countNum {
    @include flex(row, flex-start, center);
    padding: 0 6px;
    border-bottom: 1px solid $borderColor;
    .item {
      flex: 1;
      margin: 10px 0;
      border-right: 1px solid #c1c1c1;
      @include flex(column, flex-start, center);
      label {
        color: gray;
        font-size: 12px;
      }
    }
    .item:last-child {
      border-right: none;
    }
  }
  .newThem {
    @include flex(row, flex-start, center);
    padding: 6px;
    border-bottom: 1px solid $borderColor;
    span,
    label {
      display: inline-block;
    }
    span {
      max-width: 48px;
      min-width: 48px;
      margin-right: 10px;
      border: 1px solid red;
    }
  }
  .message_aboutMe {
    @include flex(row, space-between, center);
    padding: 6px;
    .moneyTotal {
      background: #efefef;
      border-radius:6px;
      padding: 6px;
      .icon {
        display: inline-block;
        width: 16px;
        height: 16px;
      }
      .icon:last-child{
        margin-left: 6px;;
      }
    }
  }
}
</style>