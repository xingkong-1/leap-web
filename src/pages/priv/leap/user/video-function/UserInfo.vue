<template>
  <div id="userInfo">
    <!--      导航栏-->
    <div class="user-home-navigation">
      <div class="user-home-navigation-logo">
        <router-link to="/">logo</router-link>
      </div>
      <div class="user-home-navigation-type">
        <router-link to="/leap/userHome">精选</router-link>
        <router-link to="/leap/ty">电视剧</router-link>
        <router-link to="/leap/movie">电影</router-link>
        <router-link to="/leap/variety">综艺</router-link>
        <router-link to="/leap/cartoon">动漫</router-link>
        <router-link to="/leap/children">少儿</router-link>
        <router-link to="">全部</router-link>
      </div>
      <div class="user-home-navigation-search">
        <input ref="searchValue" type="text">
        <input @click="search" type="button" value="搜索">
      </div>
      <div class="user-home-navigation-fun">
        <router-link to="/leap/member">会</router-link>
        <router-link to="/leap/userInfo">历</router-link>
        <router-link to="/leap/uploading">上</router-link>
        <router-link to="/leap/login">登</router-link>
        <router-link to="/leap/userInfo">用</router-link>
      </div>
    </div>
    <!--    功能界面-->
    <div class="sidebarMessage">
      <div class="switchover">
        <img @mouseover="switchover" src="../../../../../assets/img/1.jpg" alt="用户头像">
        <router-link @mouseout.native="switchover" v-show="switchoverID" class="switchoverID" to="">切换</router-link>
      </div>
      <div class="sidebarFun">
        <li>
          <RouterLink to="" @click.native="userInfoShow($event)">我的个人信息</RouterLink>
        </li>
        <li>
          <RouterLink to="" @click.native="userInfoShow($event)">历史记录</RouterLink>
        </li>
        <li>
          <RouterLink to="" @click.native="userInfoShow($event)">收藏</RouterLink>
        </li>
        <li>
          <RouterLink to="" @click.native="userInfoShow($event)">评论</RouterLink>
        </li>
        <li>
          <RouterLink to="" @click.native="userInfoShow($event)">消息</RouterLink>
        </li>
        <li>
          <RouterLink to="" @click.native="userInfoShow($event)">VIP会员</RouterLink>
        </li>
      </div>
    </div>
    <!--    内容界面-->
      <div class="mainMessage">
      <!--    个人消息界面-->
      <div class="userData" v-show="userInfoShowData === 0">
        <input @click="clickUpdateUserInfo" type="button" value="修改">
        <li><span>用户名</span></li>
        <li><span>年龄</span></li>
        <li><span>性别</span></li>
        <li><span>电话号码</span></li>
        <li><span>兴趣爱好</span></li>
        <li><span>用户介绍</span></li>
        <li><span>注册时间</span></li>
        <li><span>最后登录时间</span></li>
      </div>
      <!--      修改用户信息-->
      <div v-show="updateUserInfo" class="updateUserInfo">
        <li>
          <label>
            用户名：<input type="text">
          </label>
        </li>
        <li>
          <label>
            年龄：<input type="text">
          </label>
        </li>
        <li>
          <label>
            性别：<input type="text">
          </label>
        </li>
        <li>
          <label>
            电话号码：<input type="text">
          </label>
        </li>
        <li>
          <label>
            兴趣爱好：<input type="text">
          </label>
        </li>
        <li>
          <label>
            用户介绍：<textarea></textarea>
          </label>
        </li>
        <input @click="clickUpdateUserInfo" type="button" value="提交">
      </div>

      <!--   历史记录 -->
      <div class="historyPlayPlay" v-show="userInfoShowData === 1">
        清除所有
        <div class="historyContainer">
          <div class="historyDate">
            <span>2019年10月1日</span>
          </div>
          <div class="historyContent">
            <li>
              <img src="../../../../../assets/img/1.jpg" alt="">
            </li>
            <li>
              <router-link to="">视频名称</router-link>
            </li>
            <li><span>视频进度</span></li>
          </div>
          <div class="historyContent">
            <li>
              <img src="../../../../../assets/img/1.jpg" alt="">
            </li>
            <li>
              <router-link to="">视频名称</router-link>
            </li>
            <li><span>视频进度</span></li>
          </div>
        </div>
        <div class="historyContainer">
          <div class="historyDate">
            <span>2019年10月1日</span>
          </div>
          <div class="historyContent">
            <li>
              <img src="../../../../../assets/img/1.jpg" alt="">
            </li>
            <li>
              <router-link to="">视频名称</router-link>
            </li>
            <li><span>视频进度</span></li>
          </div>
          <div class="historyContent">
            <li>
              <img src="../../../../../assets/img/1.jpg" alt="">
            </li>
            <li>
              <router-link to="">视频名称</router-link>
            </li>
            <li><span>视频进度</span></li>
          </div>
        </div>
      </div>
      <!--    收藏-->
      <div class="enshrine" v-show="userInfoShowData === 2">
        <div class="historyContainer">
          <div class="historyDate">
            <span>电视剧</span>
          </div>
          <div class="historyContent">
            <li>
              <img src="../../../../../assets/img/1.jpg" alt="">
            </li>
            <li>
              <router-link to="">视频名称</router-link>
            </li>
          </div>
          <div class="historyContent">
            <li>
              <img src="../../../../../assets/img/1.jpg" alt="">
            </li>
            <li>
              <router-link to="">视频名称</router-link>
            </li>
          </div>
        </div>
        <div class="historyContainer">
          <div class="historyDate">
            <span>电视剧</span>
          </div>
          <div class="historyContent">
            <li>
              <img src="../../../../../assets/img/1.jpg" alt="">
            </li>
            <li>
              <router-link to="">视频名称</router-link>
            </li>
          </div>
        </div>
      </div>
      <!--    评论-->
      <div class="comment" v-show="userInfoShowData === 3">
        <!--            评论统计-->
        <div class="commentTotal">
          <li><span>0赞</span></li>
          <li><span>0评论</span></li>
          <li>全部：</li>
        </div>
        <div class="commentContent">
          <!--            评论内容-->
          <div class="content">
            <div>发的精神力看见电视里看见分厘卡电视机发</div>
          </div>
          <!--            来源-->
          <div class="commentBottom">
            <li>赞(<span>0</span>)</li>
            <li>倒赞(<span>0</span>)</li>
            <li>回复(<span>0</span>)</li>
            <li><span>删除</span></li>
            <li>时间</li>
            <li>来自
              <router-link to="">逆转AI</router-link>
            </li>
          </div>
        </div>
        <div class="commentContent">
          <!--            评论内容-->
          <div class="content">
            <div>发的精神力看见电视里看见分厘卡电视机发</div>
          </div>
          <!--            来源-->
          <div class="commentBottom">
            <li>赞(<span>0</span>)</li>
            <li>倒赞(<span>0</span>)</li>
            <li>回复(<span>0</span>)</li>
            <li><span>删除</span></li>
            <li>时间</li>
            <li>来自
              <router-link to="">逆转AI</router-link>
            </li>
          </div>
        </div>
      </div>
      <!--    消息-->
      <div class="message" v-show="userInfoShowData === 4">
        <!--            消息统计-->
        <div class="commentTotal">
          <li>全部消息：<span>0</span></li>
        </div>
        <div class="message-list">
          <span>系统通知</span><br>
          <div>返回空手道解放和卢卡斯的积分临时搭建</div>
          <br>
          <span class="ground">系统时间</span>
        </div>
        <div class="message-list">
          <span>系统通知</span><br>
          <div>返回空手道解放和卢卡斯的积分临时搭建</div>
          <br>
          <span class="ground">系统时间</span>
        </div>
      </div>
      <!--   VIP会员-->
      <div v-show="userInfoShowData === 5">6</div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "UserInfo",
        data() {
            return {
                switchoverID: false,
                updateUserInfo: false,
                userInfoShowData: 0
            }
        },
        methods: {
            /**切换按钮显示*/
            switchover: function () {
                this.switchoverID = !this.switchoverID;
            },
            /**界面切换*/
            userInfoShow: function (event) {
                let filtrateValue = event.currentTarget.firstChild.nodeValue.trim();
                switch (filtrateValue) {
                    case '我的个人信息':
                        this.userInfoShowData = 0;
                        break;
                    case '历史记录':
                        this.userInfoShowData = 1;
                        break;
                    case '收藏':
                        this.userInfoShowData = 2;
                        break;
                    case '评论':
                        this.userInfoShowData = 3;
                        break;
                    case '消息':
                        this.userInfoShowData = 4;
                        break;
                    case 'VIP会员':
                        this.userInfoShowData = 5;
                        break;
                }
            },
            /**
             * 搜索页面跳转
             * */
            search: function () {
                let from = new FormData();
                let searchValue = this.$refs.searchValue.value;
                from.append("searchValue", searchValue);
                console.log(searchValue);
                this.axios.post(
                    '/api/getSearchVideoInfo', from
                ).then(
                    response => {
                        console.log(response.data);
                        this.$router.push({path: '/leap/videoSearch', query: {searchData: response.data}})
                    }
                ).catch(
                    error => {
                        console.log(error)
                    }
                )
            },
            /**点击是否显示用户信息*/
            clickUpdateUserInfo: function () {
                this.updateUserInfo = !this.updateUserInfo;
            }
        }
    }
</script>

<style scoped>
  @import "../../../../../assets/css/userInfo.css";
  @import '../../../../../assets/css/userhome.css';

</style>
