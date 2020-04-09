<template>
  <!-- 帖子详情页面 -->
  <div class="theme content">
    <div class="themerow">
      <div class="titleControl">
        <h1>{{data_themeDetails.themeTitle}}</h1>
        <label for class="publishTime">
          <span class="publisher">发布人&nbsp;&nbsp;{{data_themeDetails.nickname}}</span>
          <span class="pushlishFarDay">1天前</span>
          <span class="clickNumber">10000次点击</span>
        </label>
      </div>
      <img src alt class="userAvatar" />
    </div>

    <p class="themeContent">{{data_themeDetails.themeContent}}</p>
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
        <div class="replyFloor" v-for="(item,index) in data_comment" :key="index">
          <img src alt />
          <div class="replyContent">
            <p>
              <label for class="nickName">{{item.commenterName}}</label>
              <label for class="dayAgo">2天前</label>
              <label for class="star">
                <span class="icon"></span>24
              </label>
            </p>
            <p class="_content">
              <span class="replyTarget">{{!!item.replyNickName?`@${item.replyNickName}`:''}}</span>
              {{item.commnetContent}}
            </p>
          </div>
          <div class="floorNumber">
            <label for>{{item.floorId}}</label>
          </div>
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
          <textarea
            ref="tx_comment"
            name
            id
            maxlength="1000"
            v-model.trim="commentPropsData.commnetContent"
            @keydown="press"
          ></textarea>
          <label for="" v-if="showPrompt.state">{{showPrompt.mgs}}</label>
          <div class="showCommenterList" v-show="showCommenterList">
            <div
              class="item"
              v-for="(item,index) in commenterList"
              :key="index"
              :style="item.target?'display:block':'display:none'"
              @click="replySomeOne(item)"
            >
              <label for>{{item.commenterName}}</label>
            </div>
          </div>
          <div class="submitComments">
            <button class="sure" @click="submitForm">
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
  </div>
</template>
<script>
export default {
  async asyncData({ $axios, route }) {
    const themeDetails = await $axios.get(
      `/api/themeDetails?themeId=${route.query.themeId}`
    );
    return {
      data_themeDetails: themeDetails.apiData.result.content_theme[0],
      data_comment: themeDetails.apiData.result.comment_theme.result
    };
  },
  data() {
    return {
      showPrompt:{
        state:false,
        mgs:""
      },//提示
      showCommenterList: false,
      commenterList: [],
      copy_commenterList: [], //数据备份
      searchList: [], //@时的搜索功能
      commentPropsData: {
        commnetContent: "",
        commentThemeID: "",
        userId: "",
        commenterName:"",
        commentParentID: 0,
        postContent:""
      }
    };
  },
  mounted() {
    console.info("加载完毕..");
    this.commentPropsData.commentThemeID = this.$route.query.themeId;
    this.commentPropsData.userId = 1;
    this.findAllCommenterInfor(this.data_comment);
  },
  methods: {
    //  找出所有评论者的信息
    findAllCommenterInfor(obj) {
      let _len = obj.length;
      let notReply = [];
      for (let index = 0; index < _len; index++) {
        if (!notReply.includes(obj[index].commenterId)) {
          this.commenterList.push({
            commenterName: obj[index].commenterName,
            commenterId: obj[index].commenterId,
            target: true
          });
          notReply.push(obj[index].commenterId);
        }
        else{
          continue;
        }
      }
      console.log("身份信息是", this.commenterList);
    },
    // 监听键盘的输入事件
    press(e) {
      console.info("按住了", e);
        if (e.key === "Process") {
           this.showPrompt={
             state:true,
             mgs:"@你好回复的人需要使用英文输入法来触发"
           }
           setTimeout(() => {
             this.showPrompt.state=false;
           }, 3000);
        }
      if (this.showCommenterList) {

        if (e.key === "Backspace") {
          if (this.searchList.length > 0) {
            this.searchList.pop(); //删除关键字
            console.log("删除后的操作", this.searchList);
            this.controlReplyFloor(
              this.commenterList,
              this.searchList.join("")
            );
          }
          return;
        }

        if (new RegExp(/^[a-zA-Z0-9]{1}$/).test(e.key)) {
          console.log("当前添加的字符", e.key);
          this.searchList.push(e.key);
          console.info("当前list", this.searchList);
          let p = this.searchList.join("");
          this.copy_commenterList = JSON.parse(
            JSON.stringify(this.commenterList)
          ); //深拷贝一份数据
          this.controlReplyFloor(this.commenterList, p);
          console.log("当前", this.commenterList);
          // filter 过滤  map 遍历  find 返回第一个
          // this.commenterList=searchResult;
        }
      } else {
        if (e.key === "@") {
          this.showCommenterList = true;
        }
      }
    },
    //控制筛选结果是否可见
    controlReplyFloor(obj, p, type) {
      obj.map(item => {
        return item.commenterName.indexOf(p) > -1
          ? (item.target = true)
          : (item.target = false);
      });
    },
    // @操作
    replySomeOne(e) {
      this.commentPropsData.commnetContent += `${e.commenterName} `;
      this.commentPropsData.commentParentID = e.commenterId; //回复id
      this.showCommenterList = false;
      this.$refs.tx_comment.focus(); //自动获取焦点
    },
    async submitForm() {
      if (!!this.commentPropsData.commnetContent) {
        this.commentPropsData.type = "inserComment"; //添加评论
        this.commentPropsData.postContent = this.commentPropsData.commnetContent.replace(/@[^\s]+\s?/,"");
        let result = await this.$axios.post(
          "/api/comment",this.commentPropsData
        );
        if(result.apiData.insertResult==0){
          alert("评论成功");
          //  this.commenterList.push({
          //   commenterName: this.commentPropsData.commenterName,
          //   commenterId: this.commentPropsData.userId,
          //   target: true
          // });
        }
       
      } else {
        alert("请输入评论内容");
      }
    }
  },
  watch: {
    commentPropsData: {
      deep: true,
      handler(newvalue, oldValue) {
        if (!/\@/g.test(newvalue.commnetContent)) {
          console.log("没有@");
          this.showCommenterList = false; //关闭@楼层
        }
      },
      immediate: true //第一次不监听
    }
  }
};
</script>
<style lang="scss" scope>
.theme {
  @include flex(column, flex-start, flex-start);
  background: white;
  padding: 10px;
  width: 100%;
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
  .themeContent {
    color: black;
    font-size: 14px;
    padding: 10px 6px;
    word-break: break-word;
  }
  .themeOperate {
    width: 100%;
    background: #ccc;

    button {
      padding: 6px;
      background: none;
      border: none;
    }
  }
  .publishTime {
    @include flex(row, space-around, center);
    span {
      padding: 0 6px;
    }
  }
  .reply {
    width: 100%;
    .replyList {
      width: 100%;
      .replyFloor {
        padding: 6px 0;
        width: 100%;
        @include flex(row, flex-start, flex-end);
        border-top: 1px solid $borderColor;
        img {
          display: block;
          width: 48px;
          height: 48px;
          border: 1px solid red;
          border-radius: 5px;
        }
        .replyContent {
          padding-left: 12px;
          color: #000;
          flex: 1;
          .nickName {
            color: gray;
          }
          ._content {
            padding-top: 2px;
            word-break: break-word;
            .replyTarget {
              color: blue;
              padding-right: 6px;
            }
          }
        }
        .floorNumber {
          background: #ccc;
          padding: 0 15px;
          @include flex(row, center, center);
          cursor: pointer; //光标 手指
          border-radius: 6px;
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
        position: relative;
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
        .showCommenterList {
          position: absolute;
          border-radius: 6px;
          width: 100px;
          z-index: 990;
          background: white;
          border: 1px solid #ccc;
          @include flex(column, flex-start, center);
          top: 40px;
          left: 26px;
          .item {
            padding: 6px 0;
            width: 100%;
            text-align: center;
            border-bottom: 1px solid #ccc;
          }
          .item:last-child {
            border-bottom: none;
          }
          .item:hover {
            background: #ccc;
          }
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
}
</style>