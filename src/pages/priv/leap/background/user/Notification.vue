<template>
  <div id="notification">
    <!--    导航栏-->
    <div class="admin-video-navigation">
      <h1 class="backgroundLogo">飞跃视频</h1>
      <input type="text">
      <input type="button" value="搜索">
      <router-link @click.native="onclickShowInser" to="/leap/insertVideo">上传视频</router-link>
    </div>

    <div id="backUserData" class="backUserData">
      <input type="button" value="通知所有用户">
      <input type="button" value="通知所有查询出来的用户">
      <div>
        <li>用户名</li>
        <li>密码</li>
        <li>年龄</li>
        <li>性别</li>
        <li>电话号码</li>
        <li>兴趣爱好</li>
        <li>用户介绍</li>
        <li>是否会员</li>
        <li>用户注册时间</li>
        <li>最后登录时间</li>
        <li>功能</li>
      </div>
      <div>
        <li>用户名</li>
        <li>密码</li>
        <li>年龄</li>
        <li>性别</li>
        <li>电话号码</li>
        <li>兴趣爱好</li>
        <li>用户介绍</li>
        <li>是否会员</li>
        <li>用户注册时间</li>
        <li>最后登录时间</li>
        <li>
          <input type="button" value="通知">
        </li>
      </div>
    </div>
    <div class="showCon" v-show="showComment">
      <h2>系统通知</h2>
      <textarea ref="valueCom" class="textVessel"></textarea>
      <input type="button" @click="inform" value="通知">
    </div>
    <div>分页</div>
  </div>
</template>

<script>
    export default {
        name: "Notification",
        data() {
            return {
                showInser: false,
                showComment:false,
                uId: 0
            }
        },
        created() {
            window.clickModification = this.clickModification;
            window.clickShowComment = this.clickShowComment;
        },
        mounted() {
            this.cls();
        },
        methods: {
            onclickShowInser: function () {
                this.showInser = !this.showInser;
            },
            clickShowComment: function (event) {
                this.uId = event.parentNode.parentNode.parentNode.childNodes[0].textContent;
                this.showComment = !this.showComment;
            },
            /**加载全部用户数据*/
            cls: function () {
                let css1 = ';font-size: 14px;list-style-type: none;float: left;width: 101px;height: 36px;text-align: center;border: 1px solid #000000;padding-top: 3px;margin-bottom: 1px;';
                let spanCss = 'display: inline-block;margin-top: 8px;';
                this.axios.get(
                    '/api/adminUser'
                ).then(
                    response => {
                        let divArray = [];
                        let menu = document.getElementById("backUserData");
                        let userInfoData = response.data;

                        for (let i = 0; i < userInfoData.length; i++) {
                            let sex = userInfoData[i].uSex === 0 ? '男' : '女';
                            let isMember = userInfoData[i].isMember === 0 ? '是' : '否';
                            let interest = userInfoData[i].interest === null ? '无' : userInfoData[i].interest;
                            let uIntroduce = userInfoData[i].uIntroduce === null ? '无' : userInfoData[i].uIntroduce;

                            let str = '<div>';
                            str += '<li style="display: none;' + css1 + '"><span style="' + spanCss + '">' + userInfoData[i].uId + '</span></li>';
                            str += '<li style="' + css1 + '"><span style="' + spanCss + '">' + userInfoData[i].uName + '</span></li>';
                            str += '<li style="' + css1 + '"><span style="' + spanCss + '">' + userInfoData[i].uPassword + '</span></li>';
                            str += '<li style="' + css1 + '"><span style="' + spanCss + '">' + userInfoData[i].uAge + '</span></li>';
                            str += '<li style="' + css1 + '"><span style="' + spanCss + '">' + sex + '</span></li>';
                            str += '<li style="' + css1 + '"><span style="' + spanCss + '">' + userInfoData[i].uPhone + '</span></li>';
                            str += '<li style="' + css1 + '"><span style="' + spanCss + '">' + interest + '</span></li>';
                            str += '<li style="' + css1 + '"><span style="' + spanCss + '">' + uIntroduce + '</span></li>';
                            str += '<li style="' + css1 + '"><span style="' + spanCss + '">' + isMember + '</span></li>';
                            str += '<li style="' + css1 + '">' + userInfoData[i].uRegistrationTime + '</li>';
                            str += '<li style="' + css1 + '">' + userInfoData[i].uLoginTime + '</li>';
                            str += '<li style="' + css1 + '"><span style="' + spanCss + '">' +
                                  '<input onclick="clickShowComment(this)" type="button" value="通知">' +
                                '</span></li>';
                            str += '</div>';
                            divArray.push(str);
                        }
                        menu.innerHTML += divArray.join("")
                    }
                ).catch(
                    error => {
                        console.log(error)
                    }
                )
            },
            /**
             * 添加通知
             * */
            inform: function () {
                let umContent = this.$refs.valueCom.value;
                let form = new FormData();
                form.append('uId',this.uId);
                form.append('umContent', umContent);
                this.axios.post(
                    '/api/insertUserMassage',form
                ).then(
                    response => {
                        console.log(response.data)
                    }
                ).catch(
                    error => {
                        console.log(error)
                    }
                )
                this.showComment = !this.showComment;
            }
        }
    }
</script>

<style scoped>
  @import "../../../../../assets/css/background/backgroundNav.css";
  @import "../../../../../assets/css/background/backgroundVideo.css";
  @import "../../../../../assets/css/background/exhibition.css";
  @import '../../../../../assets/css/userhome.css';
  @import "../../../../../assets/css/user-ty.css";
  @import "../../../../../assets/css/typeVideo.css";
  @import "../../../../../assets/css/background/backUser.css";

  #notification {
    margin-left: 148px;
    /*background-color: red;*/
  }
  .showCon {
    position: fixed;
    top: 50px;
    left: 30%;
    width: 400px;
    background-color: #00B2BF;
    padding: 100px;
  }
.textVessel {
  display: block;
  width: 400px;
  height: 230px;
  resize: none;
  margin-bottom: 10px;
}


</style>
