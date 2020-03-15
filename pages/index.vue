<template>
  <div class="container">
    <!-- 博客首页 -->
    <logo />
    <div class="main content">
      <!-- 帖子集合 -->
      <div class="nodeList">
        <!-- 帖子分类 -->
        <div class="nodeTagList">
          <a href class="tagItem tabSelected">创意1</a>
          <a href class="tagItem">创意1</a>
          <a href class="tagItem">创意1</a>
          <a href class="tagItem">创意1</a>
          <a href class="tagItem">创意1</a>
          <a href class="tagItem">创意1</a>
          <a href class="tagItem">创意1</a>
          <a href class="tagItem">创意1</a>
          <a href class="tagItem">创意1</a>
          <a href class="tagItem">创意1</a>
          <a href class="tagItem">创意1</a>
        </div>
        <div class="themeList">
          <div class="floor" v-for="item in 15" :key="item">
            <img src alt class="userAvatar" />
            <div class="themeContent">
              <a class="title">今天很开心哦</a>
              <p class="smallFont">
                <label for class="small">
                  <a class="nodeName">程序员</a>
                </label>
                <label for class="small">
                  <strong>
                    <a class="nickname">呆子</a>
                  </strong>
                </label>
                <label for class="publishTime small">1分钟前</label>
                <label for class="small">
                  最后回复来自
                  <strong>
                    <a class="lastReply">dai</a>
                  </strong>
                </label>
              </p>
            </div>
            <div for class="commentNum">12</div>
          </div>
        </div>
        <!-- 评论区 -->
        <div class="comment">
          <div class="prompt">
            <!-- 提示 -->
            <h3>添加一条新回复</h3>
            <p>
              <a href>取消回复框停靠</a>
              <a href>回到顶部</a>
            </p>
          </div>
          <div class="inputComment">
            <textarea name id  maxlength="1000"></textarea>
            <div class="submitComments">
              <button class="sure">
                <strong>回复</strong>
              </button>
              <label for class="prompt">请尽量让自己的回复能够对别人有帮助^--^</label>
            </div>
          </div>
          <div class="backIndex">
            <a href>《《《 back index</a>
          </div>
        </div>
      </div>
      <!-- 综合信息 -->
      <div class="kinds"></div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  }
};
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.main {
  width: 100%;
  margin-top: 20px;

  @include flex(row, flex-start, flex-start);
  .nodeList {
    flex: 1;
    min-height: 600px;

    .nodeTagList {
       background: white;
      padding: 6px;
      border-bottom: 1px solid $borderColor;
      @include flex(row, flex-start, flex-start);
      flex-wrap: wrap;
      word-break: break-word;
      .tagItem {
        padding: 2px 8px;
        border-radius: 6px;
      }
      .tabSelected {
        // 选中的样式
        background-color: #445;
        color: #fff;
        text-decoration: none;
      }
      a {
        color: black;
      }
      a:hover {
        opacity: 0.5;
        text-decoration: underline;
      }
    }
    .themeList {
      flex: 1;
      background: white;
      @include flex(column, flex-start, flex-start);
      .floor {
        width: 100%;
        padding: 6px;
        border-bottom: 1px solid $borderColor;
        @include flex(row, flex-start, center);
        .userAvatar {
          display: block;
          width: 60px;
          height: 60px;
          margin-right: 10px;
        }
        .themeContent {
          padding: 0 3px;
          .title {
            color: #4d5256;
            font-size: 16px;
            pointer-events: initial;
          }

          .smallFont {
            .small {
              background-color: #f5f5f5;
              font-size: 12px;
              line-height: 12px;
              display: inline-block;
              padding: 4px;
              -moz-border-radius: 2px;
              -webkit-border-radius: 2px;
              border-radius: 2px;
              text-decoration: none;
              color: #999;
            }
            .nickname,
            .nodeName,
            .lastReply {
              color: #778087;
            }
            .publishTime {
              color: #ccc;
            }
            a {
              pointer-events: initial;
            }
          }
          a:hover {
            text-decoration: underline;
          }
        }
        .commentNum {
          border-radius: 6px;
          padding: 3px 15px;
          background-color: #aab0c6;
          display: block;
          margin-left: auto;
          color: white;
        }
      }
    }
    .comment {
      width: 100%;
      background: white;
      margin-top: 20px;

      border-bottom: 1px solid $borderColor;
      .prompt,
      .submitComments {
        padding: 0 6px;
        @include flex(row, space-between, center);
        border-bottom: 1px solid $borderColor;
      }
      .inputComment {
        flex: 1;
        textarea {
          display: block;
          width: calc(100% - 12px);
          margin: 15px auto 15px;
          min-height: 100px;
          padding: 6px;
          resize: none; //去掉右下角
          border-radius: 6px;
          outline: none;

          
        }
      }
      .submitComments {
        padding-bottom: 15px;
        button {
          display: block;
          padding: 5px 0;
          min-width: 100px;
          cursor: pointer;
        }
        button:hover {
          pointer-events: painted;
        }
        label {
          border-bottom: none;
        }
      }
      .backIndex {
        @include flex(row, flex-end, center);
        background: white;
        padding: 6px;
        a {
          padding-right: 6px;
          text-decoration: none;
          color: black;
        }
        a:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }
    }
  }
  .kinds {
    width: 200px;
    background: white;
    margin-left: 10px;
    min-height: 600px;
  }
}
</style>
