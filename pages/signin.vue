<template>
  <div class="signin content">
    <form id="form_signin" onsubmit="return false">
      <div class="row">
        <label for class="leftTitle">用户名</label>
        <div class="inputControl">
          <input type="text" v-model.trim="signinForm.username" class="input usernmae" />
          <label for class="errorMgs" name="password">{{errorInfor["username"]}}</label>
        </div>
      </div>
      <div class="row">
        <label for class="leftTitle">密码</label>
        <div class="inputControl">
          <input type="password" v-model.trim="signinForm.password" class="input password" />
          <label for class="errorMgs" name="password">{{errorInfor["password"]}}</label>
        </div>
      </div>
      <div class="row">
        <label for class="leftTitle">你是机器人吗？</label>
        <div class="input validate" v-html="validateImage"></div>
      </div>
      <div class="row">
        <label for class="leftTitle">请输入验证码</label>
        <div class="inputControl">
          <input type="text" v-model.trim="signinForm.validateCode" class="input usernmae" />
          <label for class="errorMgs" name="password">{{errorInfor["validateCode"]}}</label>
        </div>
      </div>
      <div class="row">
        <label for class="leftTitle btn_signinP">登陆按钮</label>
        <button @click="submit">登陆</button>
      </div>
    </form>
    <div class="otherLogin">
      <!-- 其他登陆方式 -->
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $axios }) {
    const result = await $axios.get("/api/getValidateCode");
    return { validateImage: result.imageUrl };
  },
  data() {
    return {
      errorInfor: {},
      signinForm: {
        username: "",
        password: "",
        validateCode: ""
      },
      rules: {
        username: [
          { notNull: true, message: "请输入用户名" },
          { reg: new RegExp("^[a-zA-Z]{5,9}"), message: "用户名错误" }
        ],
        password: [
          { notNull: true, message: "请输入密码" },
          {
            reg: new RegExp("[0-9a-zA-Z]{6,10}"),
            message: "密码格式应为字母和数字的组合，长度6-10位"
          }
        ],
        validateCode: [
          { notNull: true, message: "请输入验证码" },
          {
            reg: new RegExp("[0-9a-zA-Z]{4,6}"),
            message: "验证码应为4-6位的数字"
          }
        ]
      }
    };
  },
  methods: {
    submit() {
      this.validateInput(this.signinForm).then(res=>{
           console.log("commitData");
      }).catch(error=>{
          console.log(error);
      })
    //   console.log("sussess", this.errorInfor);
    },
    validateInput(props) {
      return new Promise((resolve, reject) => {
        let outObj = {};
        Object.keys(this.rules).forEach(item => {
          let msg = {
            code: 0, //状态码
            key: null, //键值
            msg: "" //消息
          };
          for (const values of this.rules[item]) {
            if (values.notNull) {
              if (!!!props[item]) {
                //要排除为空字符串的情况
                //  msg={
                //      code:1,
                //      key:item,
                //      msg:values.message
                //  }
                outObj[item] = values.message;
              }
            }

            if (values.reg) {
              if (!!props[item] & !values.reg.test(props[item])) {
                msg = {
                  code: 2,
                  key: item,
                  msg: values.message
                };
                outObj[item] = values.message;
              }
            }
          }
        });
        this.errorInfor = outObj; //赋值报错信息
        JSON.stringify(outObj) == "{}"
          ? resolve(true)
          : reject(this.errorInfor);
      });
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.signin {
  flex: 1;
  @include flex(row, flex-start, flex-start);
  #form_signin {
    flex: 1;
    padding: 10px;
    background: white;
    @include flex(column, flex-start, flex-start);
    .row {
      @include flex(row, flex-start, center);
      width: 100%;
      padding-bottom: 15px;
      .leftTitle {
        display: block;
        text-align: right;
        width: 110px;
        padding-right: 6px;
      }
      .inputControl {
        @include flex(column, flex-start, flex-start);
        .errorMgs {
          color: red;
          font-size: 12px;
        }
        .input {
          width: 320px;
          padding: 3px 3px 3px 6px;
          border: 1px solid $borderColor;
          outline: none;
          border-radius: 3px;
        }
        .validate {
          height: 88px;
          padding: 0;
        }
        .btn_signinP {
          visibility: hidden;
        }
      }
      button {
        padding: 3px 20px 3px 20px;
      }
    }
  }
}
.otherLogin {
  min-width: 270px;
  border: 1px solid red;
}
</style>