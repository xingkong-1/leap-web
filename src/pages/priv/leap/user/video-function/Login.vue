<template>
  <div id="login">
    <!--    登录-->
    <div v-show="login" class="loginContainer">
      <li>
        <label>
          账号：<input class="loginID" type="text">
        </label>
      </li>
      <li>
        <label>
          密码：<input class="loginID" type="text">
        </label>
      </li>
      <li>
        <input class="loginBtn" type="button" value="登录">
      </li>
      <li>
        <input class="loginSign" type="button" value="注册" @click="clickLoginSwitchover">
      </li>
      <li class="service">
        <router-link to="" name="login" @click.native="clickService($event)">客服</router-link>
      </li>
    </div>
    <!--    注册-->
    <div v-show="register">
      <div class="userRegister">
        <input type="button" value="返回" @click="clickLoginSwitchover">
        <li>
          <label>
            用户名：&nbsp&nbsp&nbsp&nbsp<input type="text" placeholder="请输入用户名">
          </label>
        </li>
        <li>
          <label>
            密码：&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<input type="text" placeholder="请输入密码">
          </label>
        </li>
        <li>
          <label>
            确认密码：<input type="text" placeholder="请再次输入密码">
          </label>
        </li>
        <li>
          <label>
            年龄：&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<input type="text" placeholder="请输入年龄">
          </label>
        </li>
        <li>
          性别&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
          <label>
            男<input name="sex" type="radio" value="0">
          </label>
          <label>
            女<input name="sex" type="radio" value="1">
          </label>
        </li>
        <li>
          <label>
            电话号码：<input type="text" placeholder="请输入11位的电话号码">
          </label>
        </li>
        <li>
          <label>
            用户介绍：<input type="text" placeholder="用户介绍">
          </label>
        </li>
        <input class="submit" type="button" value="注册">
        <li class="service1">
          <router-link to="" name="register" @click.native="clickService($event)">客服</router-link>
        </li>
      </div>
    </div>

    <!--    客服-->
    <div v-show="service" class="loginContainer">
      <input type="button" value="返回" @click="clickService">
      <li>
        <label>
          电话号码：<input type="text">
        </label>
      </li>
      <li>
        <label>
          问题反馈：<textarea></textarea>
        </label>
      </li>
      <li>
        <input type="button" class="serviceBtn" value="提交">
      </li>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                login: true,
                register: false,
                service: false
            }
        },
        methods: {
            clickLoginSwitchover: function () {
                this.login = !this.login;
                this.register = !this.register;
            },
            clickService: function (event) {
                let name = event.currentTarget.name;
                if (name === 'register') {
                    this.register = !this.register;
                    this.service = !this.service;
                } else {
                    this.login = !this.login;
                    this.service = !this.service;
                }
            }
        }
    }
</script>

<style scoped>
  @import "../../../../../assets/css/login.css";
</style>
