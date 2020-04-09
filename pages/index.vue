<template>
  <div class="container">
    <!-- 博客首页 -->

    <div class="main">
      <!-- 帖子集合 -->
      <div class="nodeList">
        <!-- 帖子分类 -->
        <div class="nodeTagList">
          <nuxt-link
           to="theme"
            :class="index==0?'tabSelected tagItem':'tagItem'"
            v-for="(item,index) in nodeList"
            :key="item.id"
          >{{item.nodeName}}</nuxt-link>
        </div>
        <div class="themeList">
          <div class="floor" v-for="(item,index) in themeList" :key="index">
            <img src alt class="userAvatar" />
            <div class="themeContent">
              <a class="title" @click="toRoute(item.themeId)">{{item.themeTitle}}</a>
              <p class="smallFont">
                <label for class="small">
                  <a class="nodeName">{{item.nodeName}}</a>
                </label>
                <label for class="small">
                  <strong>
                    <a class="nickname">{{item.nickname}}</a>

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
          <nuxt-link to="/signin">登陆</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $axios }) {
    const result_nodeList = await $axios.get("/api/node");
    const result_themeList=await $axios.get("/api/index")
    return {
      nodeList: result_nodeList.apiData.nodeList,
      themeList:result_themeList.apiData.re_themeList,
    };
  },
  data() {
    return {
      selectedIndex: 0
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  },
  methods:{
     toRoute(id){
       this.$router.push({
         path:"/theme",
         query:{
           themeId:id
         }
       })
     }
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
  }
}
</style>
