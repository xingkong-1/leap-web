<template>
  <div class="myVideo">
    <!--      导航栏-->
    <div class="user-home-navigation">
      <div class="user-home-navigation-logo">
        <router-link to="/"><h1>飞跃视频</h1></router-link>
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
        <input ref="searchValue" type="text"><input @click="search" type="button" value="搜索">
      </div>
      <div class="user-home-navigation-fun">
        <router-link to="/leap/member">会</router-link>
        <router-link to="/leap/userInfo">历</router-link>
        <router-link to="/leap/uploading">上</router-link>
        <router-link to="/leap/login">登</router-link>
        <router-link to="/leap/userInfo">用</router-link>
      </div>
    </div>
    <!--    播放部分-->
    <div class="playerVessel">
      <div>
        <video id="Video" controls="controls">
          <source ref="play" src="http://localhost:8081/leap/getVideo">
        </video>
      </div>
      <div class="cd">
        <div><h2>{{pName}}</h2></div>
        <div>更新时间</div>

        <div class="cdNumber">
          <li>
            <router-link to="">10</router-link>
          </li>
          <li>
            <router-link to="">10</router-link>
          </li>
          <li>
            <router-link to="">10</router-link>
          </li>
          <li>
            <router-link to="">10</router-link>
          </li>
          <li>
            <router-link to="">10</router-link>
          </li>
          <li>
            <router-link to="">10</router-link>
          </li>
          <li>
            <router-link to="">10</router-link>
          </li>
          <li>
            <router-link to="">10</router-link>
          </li>
          <li>
            <router-link to="">10</router-link>
          </li>
          <li>
            <router-link to="">10</router-link>
          </li>
          <li>
            <router-link to="">10</router-link>
          </li>
          <li>
            <router-link to="">10</router-link>
          </li>
          <li>
            <router-link to="">10</router-link>
          </li>
          <li>
            <router-link to="">10</router-link>
          </li>
          <li>
            <router-link to="">10</router-link>
          </li>
          <li>
            <router-link to="">10</router-link>
          </li>
          <li>
            <router-link to="">10</router-link>
          </li>
          <li>
            <router-link to="">10</router-link>
          </li>
          <li>
            <router-link to="">10</router-link>
          </li>
          <li>
            <router-link to="">10</router-link>
          </li>

        </div>
      </div>
    </div>
    <!--    第三部分-->
    <div class="thirdlyVessel">
      <div class="comment">
        <!--        推荐视频-->
        <div class="playRecommend">
          <h2>为你推荐</h2>
          <div class="playRecommendI">
            <li><img src="../../../../../assets/img/1.jpg" alt=""></li>
            <li><router-link to="">视频名</router-link></li>
            <li><span>打算离开寄给客户风力等级哦</span></li>
          </div>
          <div class="playRecommendI">
            <li><img src="../../../../../assets/img/1.jpg" alt=""></li>
            <li><router-link to="">视频名</router-link></li>
            <li><span>打算离开寄给客户风力等级哦</span></li>
          </div>
          <div class="playRecommendI">
            <li><img src="../../../../../assets/img/1.jpg" alt=""></li>
            <li><router-link to="">视频名</router-link></li>
            <li><span>打算离开寄给客户风力等级哦</span></li>
          </div>
          <div class="playRecommendI">
            <li><img src="../../../../../assets/img/1.jpg" alt=""></li>
            <li><router-link to="">视频名</router-link></li>
            <li><span>打算离开寄给客户风力等级哦</span></li>
          </div>
          <div class="playRecommendI">
            <li><img src="../../../../../assets/img/1.jpg" alt=""></li>
            <li><router-link to="">视频名</router-link></li>
            <li><span>打算离开寄给客户风力等级哦</span></li>
          </div>
          <div class="playRecommendI">
            <li><img src="../../../../../assets/img/1.jpg" alt=""></li>
            <li><router-link to="">视频名</router-link></li>
            <li><span>打算离开寄给客户风力等级哦</span></li>
          </div>
          <div class="playRecommendI">
            <li><img src="../../../../../assets/img/1.jpg" alt=""></li>
            <li><router-link to="">视频名</router-link></li>
            <li><span>打算离开寄给客户风力等级哦</span></li>
          </div>
          <div class="playRecommendI">
            <li><img src="../../../../../assets/img/1.jpg" alt=""></li>
            <li><router-link to="">视频名</router-link></li>
            <li><span>打算离开寄给客户风力等级哦</span></li>
          </div>
          <div class="playRecommendI">
            <li><img src="../../../../../assets/img/1.jpg" alt=""></li>
            <li><router-link to="">视频名</router-link></li>
            <li><span>打算离开寄给客户风力等级哦</span></li>
          </div>
          <div class="playRecommendI">
            <li><img src="../../../../../assets/img/1.jpg" alt=""></li>
            <li><router-link to="">视频名</router-link></li>
            <li><span>打算离开寄给客户风力等级哦</span></li>
          </div>
          <div class="playRecommendI">
            <li><img src="../../../../../assets/img/1.jpg" alt=""></li>
            <li><router-link to="">视频名</router-link></li>
            <li><span>打算离开寄给客户风力等级哦</span></li>
          </div>
          <div class="playRecommendI">
            <li><img src="../../../../../assets/img/1.jpg" alt=""></li>
            <li><router-link to="">视频名</router-link></li>
            <li><span>打算离开寄给客户风力等级哦</span></li>
          </div>
        </div>
        <div>
          <div class="writeCommentVessel">
            <li><h2>评论</h2></li>
            <li><textarea/></li>
            <li><input type="button" value="评论"></li>
          </div>
          <div class="shortCommentaryVessel">
            <div><h2>全部短评</h2></div>
            <div class="shortCommentary">
              <div><img src="../../../../../assets/img/1.jpg" alt=""></div>
              <div class="shortCommentaryText">
                <li>
                  <span>用户名</span>
                  <span>时间</span>
                </li>
                <li>内容啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</li>
                <li>赞</li>
              </div>
            </div>
            <div class="shortCommentary">
              <div><img src="../../../../../assets/img/1.jpg" alt=""></div>
              <div class="shortCommentaryText">
                <li>
                  <span>用户名</span>
                  <span>时间</span>
                </li>
                <li>内容啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</li>
                <li>赞</li>
              </div>
            </div>
            <div class="shortCommentary">
              <div><img src="../../../../../assets/img/1.jpg" alt=""></div>
              <div class="shortCommentaryText">
                <li>
                  <span>用户名</span>
                  <span>时间</span>
                </li>
                <li>内容啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</li>
                <li>赞</li>
              </div>
            </div>
            <div class="shortCommentary">
              <div><img src="../../../../../assets/img/1.jpg" alt=""></div>
              <div class="shortCommentaryText">
                <li>
                  <span>用户名</span>
                  <span>时间</span>
                </li>
                <li>内容啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</li>
                <li>赞</li>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--      热播榜-->
      <div class=" broadcast">
        <li>
          <h2>每日热播榜</h2>
        </li>
        <li>
          <router-link to="">数据1</router-link>
        </li>
        <li>
          <router-link to="">数据1</router-link>
        </li>
        <li>
          <router-link to="">数据1</router-link>
        </li>
        <li>
          <router-link to="">数据1</router-link>
        </li>
        <li>
          <router-link to="">数据1</router-link>
        </li>
        <li>
          <router-link to="">数据1</router-link>
        </li>
        <li>
          <router-link to="">数据1</router-link>
        </li>
        <li>
          <router-link to="">数据1</router-link>
        </li>
      </div>
    </div>

  </div>
</template>

<script>
    import PubSub from 'pubsub-js';

    export default {
        name: "MyVideo",
        data() {
            return {
                pName: this.$route.query.pName,
                pws: this.$route.query.pws
            }
        },
        methods: {
            /**
             * 搜索页面跳转
             * */
            search: function () {
                let from = new FormData();
                let searchValue = this.$refs.searchValue.value;
                from.append("searchValue", searchValue);
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
            }
        }
    };
</script>

<style scoped>
  @import '../../../../../assets/css/userhome.css';
  @import '../../../../../assets/css/play.css';
</style>
