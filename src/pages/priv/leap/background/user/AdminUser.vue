<template>
  <div id="adminUser">
    <!--    导航栏-->
    <div class="admin-video-navigation">
      <h1 class="backgroundLogo">飞跃视频</h1>
      <input type="text">
      <input type="button" value="搜索">
      <router-link @click.native="onclickShowInser" to="/leap/insertVideo">上传视频</router-link>
    </div>

    <div id="userDataShow" class="backUserData">
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
    </div>
    <div>分页</div>
  </div>
</template>

<script>
    export default {
        name: "AdminUser",
        data() {
            return {
                showInser: false
            }
        },
        created() {
            window.clickModification = this.clickModification;
            window.deleteUser = this.deleteUser;
        },
        mounted() {
            this.cls();
        },
        methods: {
            onclickShowInser: function () {
                this.showInser = !this.showInser;
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
                        let menu = document.getElementById("userDataShow");
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
                            str += '<li style="' + css1 + '"><span style="' + spanCss + '"><input style="margin-right: 10px" type="button" onclick="clickModification(this)" value="修改"><input onclick="deleteUser(this)" type="button" value="删除"></span></li>';
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
            /**用户修改*/
            clickModification: function (event) {
                // .parentNode 获取父级元素
                let e = event.parentNode.parentNode.parentNode.childNodes;
                let eArray = [];
                for (let i=0;i<e.length-1;i++){
                    eArray[i] = e[i].textContent;
                }
                this.$router.push({
                    path: '/leap/modification',
                    query: {userData: eArray}
                })
            },
            /**用户删除*/
            deleteUser: function (event) {
                let e = event.parentNode.parentNode.parentNode.childNodes;
                this.axios.delete(
                    '/api/deleteUser/'+ e[0].textContent
                ).then(
                    response => {
                        console.log(response.data)
                    }
                ).catch(
                    errot => {
                        console.log(errot)
                    }
                )
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

  #adminUser {
    margin-left: 148px;
    /*background-color: red;*/
  }

</style>
