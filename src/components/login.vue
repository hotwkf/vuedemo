<template>
  <div class="login" >
    <div class="login-con">
      <el-form :model="form" status-icon :rules="rules" ref="form" label-width="100px" class="demo-ruleForm">
        <el-form-item label="账号" prop="userName">
          <el-input type="text" v-model="form.userName" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="password">
          <el-input type="password" v-model="form.password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmit('form')">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- <el-container>
      <el-header>
        用户登录
      </el-header>
    </el-container> -->
  </div>
</template>
<script>
import qs from "qs";
export default {
  components: {},
  data() {
    var validatePass = (rule, value, callback) => {
      console.log(rule);
      console.log(value);
      console.log(callback);
      if (value === "") {
        callback(new Error("请输入账号"));
      } else {
        if (this.form.userName !== "") {
          console.log(this);
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.form.password !== "") {
          console.log(this);
        }
        callback();
      }
    };
    return {
      form: {
        userName: "",
        password: ""
      },
      rules: {
        userName: [{ validator: validatePass, trigger: "blur" }],
        password: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  },
  methods: {
    handleSubmit: function(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          var that = this;
          var data = {
            login: this.form.userName,
            password: this.form.password
          };
          this.$axios
            .post("/login", qs.stringify(data))
            .then(res => {
              console.log(res);
              if (res.data.return_code == 6000) {
                that.$cookie.set("user", this.form.userName);
                that.$cookie.set("password", this.form.password);
                that.$store.commit(
                  "setAvator",
                  "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg"
                );
                // if (this.form.userName === 'iview_admin') {
                //     Cookies.set('access', 0);
                // } else {
                //     Cookies.set('access', 1);
                // }
                //跳转页面
                that.$router.push({path:"/foo"});
              } else {
                //消息提醒
                const h = this.$createElement;
                that.$message({
                  message: h('p', null, [
                    h('span', { style: 'width: 80%' }, res.data.return_msg)
                  ])
                });
                // that.$message(res.data.return_msg);
              }
            })
            .catch(error => {
              console.log(error);
            });
        }
      });
    },
    doSomething: function() {
      console.log(1);
    }
  },
  computed: {}
};
</script>
<style scoped lang="less">
@import "../less/login.less";
</style>