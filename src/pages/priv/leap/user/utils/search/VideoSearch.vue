<template>
  <div class="VideoSearch">
    <!--   导航栏-->
    <div class="nav">
      <!--        logo区-->
      <div class="logo">
        <img src="" @click="logo" alt="logo">
      </div>
      <!--        搜索区-->
      <div class="search">
        <input type="text">
        <input type="button" @click="search" value="搜索">
      </div>
      <!--        功能区-->
      <div class="fun">
        <img src=""><!--title="会员"-->
        <img src=""><!--title="历史记录"-->
        <img src=""><!--title="上传"-->
        <img src=""><!--title="登录"-->
        <img src=""><!--title="用户界面"-->
      </div>
    </div>
    <!--    主体内容部分-->
    <!--    筛选行-->
    <div class="searchFiltrate">
      <li>
        <router-link to="">相关</router-link>
      </li>
      <li>
        <router-link to="">最新</router-link>
      </li>
      <li>
        <router-link to="">最热</router-link>
      </li>
      <li>
        <router-link @click.native="ifColumnPush" to="">筛选</router-link>
      </li>
    </div>
    <!--      筛选内容区-->
    <div>
      <!--      第一部分-->
      <div class="container">
        <!--          具体筛选选择-->
        <div v-show="ifFiltrate" class="searchFiltrateContent">
          <!--        发布时间-->
          <div>
            <li>发布时间</li>
            <li>
              <router-link name="rank" to="" @click.native="filtrateVideo($event)"
                           v-bind:class="{'typeFiltrate-list': filtrateData.rank === 0}">全部
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event)"
                           :class="{'typeFiltrate-list': filtrateData.rank === 1}">一天
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event)"
                           :class="{'typeFiltrate-list': filtrateData.rank === 2}">一周
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event)"
                           :class="{'typeFiltrate-list': filtrateData.rank === 3}">两周
              </router-link>
            </li>
          </div>
          <hr>
          <div>
            <li>时长</li>
            <li>
              <router-link name="region" to="" @click.native="filtrateVideo($event)"
                           :class="{'typeFiltrate-list': filtrateData.region === 0}">全部
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event)"
                           :class="{'typeFiltrate-list': filtrateData.region === 1}">10分钟以下
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event)"
                           :class="{'typeFiltrate-list': filtrateData.region === 2}">10-30分钟
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event)"
                           :class="{'typeFiltrate-list': filtrateData.region === 3}">30-60分钟
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event)"
                           :class="{'typeFiltrate-list': filtrateData.region === 4}">60分钟以上
              </router-link>
            </li>
          </div>
          <hr>
          <div class="typeFiltrate-tow">
            <li>分类</li>
            <li>
              <router-link name="type" to="" @click.native="filtrateVideo($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === 0}">全部
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === 1}">电视剧
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === 2}">电影
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === 3}">综艺
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === 4}">动漫
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === 5}">少儿
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === 6}">记录片
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === 7}">其他
              </router-link>
            </li>
          </div>
          <hr>
          <div>
            <li>画质</li>
            <li>
              <router-link name="date" to="" @click.native="filtrateVideo($event)"
                           :class="{'typeFiltrate-list': filtrateData.date === 0}">全部
              </router-link>
            </li>
            <li>
              <router-link name="date" to="" @click.native="filtrateVideo($event)"
                           :class="{'typeFiltrate-list': filtrateData.date === 1}">标清
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event)"
                           :class="{'typeFiltrate-list': filtrateData.date === 2}">高清
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event)"
                           :class="{'typeFiltrate-list': filtrateData.date === 3}">超清
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event)"
                           :class="{'typeFiltrate-list': filtrateData.date === 4}">蓝光
              </router-link>
            </li>
          </div>
        </div>
        <!--          结果-->
        <div class="contentVideo">
          <div><img src="../../../../../../assets/img/1.jpg" alt=""></div>
          <div class="videoIntroduce">
            <li>视频名</li>
            <li>
              <span>别名</span>
              <span>导演</span>
            </li>
            <li>
              <span>主演</span>
              <span>路人甲 路人乙 路人丙</span>
            </li>
            <li>
              <span>简介</span>
              <span>不知名视频简介</span>
            </li>
            <li>
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
            </li>
          </div>
        </div>
        <div class="contentVideo">
          <div><img src="../../../../../../assets/img/1.jpg" alt=""></div>
          <div class="videoIntroduce">
            <li>视频名</li>
            <li>
              <span>别名</span>
              <span>导演</span>
            </li>
            <li>
              <span>主演</span>
              <span>路人甲 路人乙 路人丙</span>
            </li>
            <li>
              <span>简介</span>
              <span>不知名视频简介</span>
            </li>
            <li>
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
            </li>
          </div>
        </div>
        <div class="contentVideo">
          <div><img src="../../../../../../assets/img/1.jpg" alt=""></div>
          <div class="videoIntroduce">
            <li>视频名</li>
            <li>
              <span>别名</span>
              <span>导演</span>
            </li>
            <li>
              <span>主演</span>
              <span>路人甲 路人乙 路人丙</span>
            </li>
            <li>
              <span>简介</span>
              <span>不知名视频简介</span>
            </li>
            <li>
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
            </li>
          </div>
        </div>
      </div>
      <!-- 第二部分-->
      <div class="hotSearchList">
        <!--        榜单-->
        <div class="overview">
          <li>
            <router-link to="" @click.native="clickVideo($event)" :class="{'typeColor':typeColour === 0}">总榜
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="clickVideo($event)" :class="{'typeColor':typeColour === 1}">电视剧
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="clickVideo($event)" :class="{'typeColor':typeColour === 2}">电影
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="clickVideo($event)" :class="{'typeColor':typeColour === 3}">动漫
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="clickVideo($event)" :class="{'typeColor':typeColour === 4}">综艺
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="clickVideo($event)" :class="{'typeColor':typeColour === 5}">少儿
            </router-link>
          </li>
        </div>
        <!--        热搜内容-->
        <div class="ranking">
          <li>
            <span class="one">1</span>
            <router-link to="">视频名</router-link>
          </li>
          <li><span class="tow">2</span>
            <router-link to="">视频名</router-link>
          </li>
          <li><span class="three">3</span>
            <router-link to="">视频名</router-link>
          </li>
          <li><span>4</span>
            <router-link to="">视频名</router-link>
          </li>
          <li><span>5</span>
            <router-link to="">视频名</router-link>
          </li>
          <li><span>6</span>
            <router-link to="">视频名</router-link>
          </li>
          <li><span>7</span>
            <router-link to="">视频名</router-link>
          </li>
          <li><span>8</span>
            <router-link to="">视频名</router-link>
          </li>
          <li><span>9</span>
            <router-link to="">视频名</router-link>
          </li>
          <li><span>10</span>
            <router-link to="">视频名</router-link>
          </li>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "VideoSearch",
        data() {
            return {
                value: this.$route.query.searchData,
                typeColour: 0,
                ifFiltrate: false,
                filtrateData: {
                    rank: 0,
                    type: 0,
                    region: 0,
                    date: 0
                }
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
            /** logo点击跳回首页*/
            logo: function () {
                this.$router.push({path: '/'})
            },
            ifColumnPush: function () {
                this.ifFiltrate = !this.ifFiltrate;
            },
            /** 筛选视频*/
            filtrateVideo: function (event) {
                let filtrateValue = event.currentTarget.firstChild.nodeValue.trim();
                switch (filtrateValue) {
                    case '全部':
                        this.allFiltrate(event);    // 判断点击的是哪个‘全部’
                        break;
                    case '一天':
                        this.filtrateData.rank = 1;
                        break;
                    case '一周':
                        this.filtrateData.rank = 2;
                        break;
                    case '两周':
                        this.filtrateData.rank = 3;
                        break;
                    case '一月':
                        this.filtrateData.rank = 4;
                        break;
                    case '10分钟以下':
                        this.filtrateData.region = 1;
                        break;
                    case '10-30分钟':
                        this.filtrateData.region = 2;
                        break;
                    case '30-60分钟':
                        this.filtrateData.region = 3;
                        break;
                    case '60分钟以上':
                        this.filtrateData.region = 4;
                        break;
                    case '电视剧':
                        this.filtrateData.type = 1;
                        break;
                    case '电影':
                        this.filtrateData.type = 2;
                        break;
                    case '综艺':
                        this.filtrateData.type = 3;
                        break;
                    case '动漫':
                        this.filtrateData.type = 4;
                        break;
                    case '少儿':
                        this.filtrateData.type = 5;
                        break;
                    case '纪录片':
                        this.filtrateData.type = 6;
                        break;
                    case '其他':
                        this.filtrateData.type = 7;
                        break;
                    case '标清':
                        this.filtrateData.date = 1;
                        break;
                    case '高清':
                        this.filtrateData.date = 2;
                        break;
                    case '超清':
                        this.filtrateData.date = 3;
                        break;
                    case '蓝光':
                        this.filtrateData.date = 4;
                        break;
                }
            },
            /** 判断点击的是哪个全部*/
            allFiltrate: function (event) {
                switch (event.currentTarget.name) {
                    case 'rank':
                        this.filtrateData.rank = 0;
                        break;
                    case 'type':
                        this.filtrateData.type = 0;
                        break;
                    case 'region':
                        this.filtrateData.region = 0;
                        break;
                    case 'date':
                        this.filtrateData.date = 0;
                        break;
                    case 'expenses':
                        this.filtrateData.expenses = 0;
                        break;
                }
            },
            clickVideo: function (event) {
                let from = new FormData();
                let typeValue = event.currentTarget.firstChild.nodeValue.trim();
                // 判断用户点击类型
                this.typeSwitch(typeValue);
                from.append('typeValue', typeValue);
                this.axios.post(
                    '', from
                ).then(
                    response => {
                    }
                ).catch(
                    error => {
                        console.log(error)
                    }
                )
            },
            /** 判断用户点击类型，更行数据 */
            typeSwitch: function (typeValue) {
                switch (typeValue) {
                    case '总榜':
                        this.typeColour = 0;
                        break;
                    case '电视剧':
                        this.typeColour = 1;
                        break;
                    case '电影':
                        this.typeColour = 2;
                        break;
                    case '动漫':
                        this.typeColour = 3;
                        break;
                    case '综艺':
                        this.typeColour = 4;
                        break;
                    case '少儿':
                        this.typeColour = 5;
                        break;
                }
            },
        }
    }
</script>

<style scoped>
  @import '../../../../../../assets/css/userhome.css';
  @import "../../../../../../assets/css/nav.css";
  @import "../../../../../../assets/css/typeVideo.css";

  .typeColor {
    color: #f00;
    border-bottom: 4px solid red;
    padding: 7px;
  }
</style>
