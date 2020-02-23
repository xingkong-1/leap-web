<!-- 视频管理界面 -->
<template>
  <div id="adminVideo">
    <!-- 导航栏 -->
    <div class="admin-video-navigation">
      <h1 class="backgroundLogo">飞跃视频</h1>
      <input type="text">
      <input type="button" value="搜索">
      <router-link @click.native="onclickShowInser" to="/leap/insertVideo">上传视频</router-link>
    </div>
    <router-view v-show="showInser"></router-view>
    <!-- 主界面 -->
    <div class="mainInterface">
      <div @click="showF">
        <router-link to="">筛选</router-link>
      </div>
      <div v-show="ifFiltrate" class="backgroundTypeFiltrate">
        <!--        排序-->
        <div>
          <li>种类</li>
          <li>
            <router-link name="rank" to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                         @click="clickFiltrates($event)"
                         v-bind:class="{'typeFiltrate-list': filtrateData.rank === '全部'}">全部
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                         :class="{'typeFiltrate-list': filtrateData.rank === '电视剧'}">电视剧
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                         :class="{'typeFiltrate-list': filtrateData.rank === '电影'}">电影
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                         :class="{'typeFiltrate-list': filtrateData.rank === '综艺'}">综艺
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                         :class="{'typeFiltrate-list': filtrateData.rank === '动漫'}">动漫
            </router-link>
          </li>
        </div>
        <hr>
        <!--        类型-->
        <div>
          <div v-show="typeCut === 0" class="typeFiltrate-tow">
            <li>类型</li>
            <li>
              <router-link name="type" to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '全部'}">全部
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '偶像爱情'}">偶像爱情
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '古装历史'}">古装历史
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '玄幻史诗'}">玄幻史诗
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '都市生活'}">都市生活
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '当代主旋律'}">当代主旋律
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '罪案谍战'}">罪案谍战
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '历险科幻'}">历险科幻
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '军旅抗战'}">军旅抗战
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '喜剧'}">喜剧
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '武侠江湖'}">武侠江湖
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '青春校园'}">青春校园
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '时代传奇'}">时代传奇
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '体育竞技'}">体育竞技
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '真人动漫'}">真人动漫
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '网络剧'}">网络剧
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '独播'}">独播
              </router-link>
            </li>
          </div>
          <div v-show="typeCut === 1" class="typeFiltrate-tow">
            <li>类型</li>
            <li>
              <router-link name="type" to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '全部'}">全部
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '剧情'}">剧情
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '武侠'}">武侠
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '爱情'}">爱情
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '惊悚'}">惊悚
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '犯罪'}">犯罪
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '悬疑'}">悬疑
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '战争'}">战争
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '科幻'}">科幻
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '喜剧'}">喜剧
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '动画'}">动画
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '恐怖'}">恐怖
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '冒险'}">冒险
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '奇幻'}">奇幻
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '运动'}">运动
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '歌舞'}">歌舞
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '音乐'}">音乐
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '记录'}">记录
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '伦理'}">伦理
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '西部'}">西部
              </router-link>
            </li>
          </div>
          <div v-show="typeCut === 2" class="typeFiltrate-tow">
            <li>类型</li>
            <li>
              <router-link name="type" to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '全部'}">全部
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '游戏'}">游戏
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '养成'}">养成
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '情感'}">情感
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '脱口秀'}">脱口秀
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '表演'}">表演
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '体验'}">体验
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '文化'}">文化
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '美食'}">美食
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '喜剧'}">喜剧
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '职场'}">职场
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '体育'}">体育
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '潮流文化'}">潮流文化
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '访谈'}">访谈
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '生活服务'}">生活服务
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '萌宠'}">萌宠
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '音乐'}">音乐
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '质询'}">质询
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '晚会'}">晚会
              </router-link>
            </li>
          </div>
          <div v-show="typeCut === 3" class="typeFiltrate-tow">
            <li>类型</li>
            <li>
              <router-link name="type" to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '全部'}">全部
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '冒险'}">冒险
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '武侠'}">武侠
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '搞笑'}">搞笑
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '经典'}">经典
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '竞技'}">竞技
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '魔幻'}">魔幻
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '热血'}">热血
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '科幻'}">科幻
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '推理'}">推理
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '恋爱'}">恋爱
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '青春校园'}">青春校园
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '治愈'}">治愈
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '中国风'}">中国风
              </router-link>
            </li>
          </div>
          <div v-show="typeCut === 4" class="typeFiltrate-tow">
            <li>类型</li>
            <li>
              <router-link name="type" to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '全部'}">全部
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '偶像爱情'}">偶像爱情
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '古装历史'}">古装历史
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '玄幻史诗'}">玄幻史诗
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '都市生活'}">都市生活
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '当代主旋律'}">当代主旋律
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '罪案谍战'}">罪案谍战
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '历险科幻'}">历险科幻
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '军旅抗战'}">军旅抗战
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '喜剧'}">喜剧
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '武侠江湖'}">武侠江湖
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '青春校园2'}">青春校园
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '时代传奇'}">时代传奇
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '体育竞技'}">体育竞技
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '真人动漫'}">真人动漫
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '网络剧'}">网络剧
              </router-link>
            </li>
            <li>
              <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                           :class="{'typeFiltrate-list': filtrateData.type === '独播'}">独播
              </router-link>
            </li>
          </div>
        </div>
        <hr>
        <div>
          <li>地区</li>
          <li>
            <router-link name="region" to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                         :class="{'typeFiltrate-list': filtrateData.region === '全部'}">全部
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                         :class="{'typeFiltrate-list': filtrateData.region === '大陆'}">大陆
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                         :class="{'typeFiltrate-list': filtrateData.region === '香港'}">香港
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                         :class="{'typeFiltrate-list': filtrateData.region === '台湾'}">台湾
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                         :class="{'typeFiltrate-list': filtrateData.region === '韩国'}">韩国
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                         :class="{'typeFiltrate-list': filtrateData.region === '日本'}">日本
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                         :class="{'typeFiltrate-list': filtrateData.region === '欧美'}">欧美
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                         :class="{'typeFiltrate-list': filtrateData.region === '其他'}">其他
            </router-link>
          </li>
        </div>
        <hr>
        <div>
          <li>时间</li>
          <li>
            <router-link name="date" to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                         :class="{'typeFiltrate-list': filtrateData.date === '全部'}">全部
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                         :class="{'typeFiltrate-list': filtrateData.date === '2019'}">2019
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                         :class="{'typeFiltrate-list': filtrateData.date === '2018'}">2018
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                         :class="{'typeFiltrate-list': filtrateData.date === '2017'}">2017
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                         :class="{'typeFiltrate-list': filtrateData.date === '2016'}">2016
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                         :class="{'typeFiltrate-list': filtrateData.date === '2015'}">2015
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                         :class="{'typeFiltrate-list': filtrateData.date === '2014'}">2014
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                         :class="{'typeFiltrate-list': filtrateData.date === '2013'}">2013
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                         :class="{'typeFiltrate-list': filtrateData.date === '2012'}">2012
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                         :class="{'typeFiltrate-list': filtrateData.date === '2011'}">2011
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                         :class="{'typeFiltrate-list': filtrateData.date === '00年代'}">00年代
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                         :class="{'typeFiltrate-list': filtrateData.date === '90年代'}">90年代
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                         :class="{'typeFiltrate-list': filtrateData.date === '80年代'}">80年代
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                         :class="{'typeFiltrate-list': filtrateData.date === '更早'}">更早
            </router-link>
          </li>
        </div>
        <hr>
        <div>
          <li>资费</li>
          <li>
            <router-link name="expenses" to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                         :class="{'typeFiltrate-list': filtrateData.expenses === '全部'}">全部
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                         :class="{'typeFiltrate-list': filtrateData.expenses === '会员'}">会员
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event),clickFiltrates($event)"
                         :class="{'typeFiltrate-list': filtrateData.expenses === '免费'}">免费
            </router-link>
          </li>
        </div>
      </div>
      <!--      数据显示-->
      <div class="videoVessel">
        <div class="mark">
          <li>视频名称</li>
          <li>种类</li>
          <li>地区</li>
          <li>画质</li>
          <li>视频类型</li>
          <li>简介</li>
          <li>豆瓣评分</li>
          <li>上架时间</li>
          <li>下架时间</li>
          <li>功能</li>
        </div>
        <div id="videoData" class="videoData">

        </div>
        <div class="paging">分页</div>
      </div>
    </div>
    <!-- 底层 -->
    <div>底层</div>

  </div>
</template>

<script>

    export default {
        name: "AdminVideo",
        data() {
            return {
                showInser: false,
                typeCut: 0,
                columnPush: true,
                ifFiltrate: true,
                filtrateData: {
                    rank: '全部',
                    type: '全部',
                    region: '全部',
                    date: '全部',
                    expenses: '全部'
                }
            }
        },
        mounted() {
            this.clickFiltrate();
        },
        methods: {
            onclickShowInser: function () {
                this.showInser = !this.showInser;
            },
            showF: function () {
                this.ifFiltrate = !this.ifFiltrate;
            },
            /** 筛选视频*/
            filtrateVideo: function (event) {
                let filtrateValue = event.currentTarget.firstChild.nodeValue.trim();
                switch (filtrateValue) {
                    case '全部':
                        this.allFiltrate(event);    // 判断点击的是哪个‘全部’
                        break;
                    case '电视剧': {
                        this.filtrateData.rank = '电视剧';
                        this.typeCut = 0;
                    }
                        break;
                    case '电影': {
                        this.filtrateData.rank = '电影';
                        this.typeCut = 1;
                    }
                        break;
                    case '综艺': {
                        this.filtrateData.rank = '综艺';
                        this.typeCut = 2;
                    }
                        break;
                    case '动漫': {
                        this.filtrateData.rank = '动漫';
                        this.typeCut = 3;
                    }
                        break;
                    case '纪录片': {
                        this.filtrateData.rank = '纪录片';
                        this.typeCut = 4;
                    }
                        break;
                    default:
                        this.filtrateVideoRegion(filtrateValue);

                }
            },
            /*筛选地区*/
            filtrateVideoRegion: function (filtrateValue) {
                switch (filtrateValue) {
                    case '大陆':
                        this.filtrateData.region = '大陆';
                        break;
                    case '香港':
                        this.filtrateData.region = '香港';
                        break;
                    case '台湾':
                        this.filtrateData.region = '台湾';
                        break;
                    case '韩国':
                        this.filtrateData.region = '韩国';
                        break;
                    case '日本':
                        this.filtrateData.region = '日本';
                        break;
                    case '欧美':
                        this.filtrateData.region = '欧美';
                        break;
                    case '其他':
                        this.filtrateData.region = '其他';
                        break;
                    default:
                        this.filtrateVideoTime(filtrateValue);
                }

            },
            /*筛选时间*/
            filtrateVideoTime: function (filtrateValue) {
                switch (filtrateValue) {
                    case '2019':
                        this.filtrateData.date = '2019';
                        break;
                    case '2018':
                        this.filtrateData.date = '2018';
                        break;
                    case '2017':
                        this.filtrateData.date = '2017';
                        break;
                    case '2016':
                        this.filtrateData.date = '2016';
                        break;
                    case '2015':
                        this.filtrateData.date = '2015';
                        break;
                    case '2014':
                        this.filtrateData.date = '2014';
                        break;
                    case '2013':
                        this.filtrateData.date = '2013';
                        break;
                    case '2012':
                        this.filtrateData.date = '2012';
                        break;
                    case '2011':
                        this.filtrateData.date = '2011';
                        break;
                    case '00年代':
                        this.filtrateData.date = '00年代';
                        break;
                    case '90年代':
                        this.filtrateData.date = '90年代';
                        break;
                    case '80年代':
                        this.filtrateData.date = '80年代';
                        break;
                    case '更早':
                        this.filtrateData.date = '更早';
                        break;
                    default:
                        this.filtrateVideoTariff(filtrateValue);
                }
            },
            /*筛选资费*/
            filtrateVideoTariff: function (filtrateValue) {
                switch (filtrateValue) {
                    case '会员':
                        this.filtrateData.expenses = '会员';
                        break;
                    case '免费':
                        this.filtrateData.expenses = '免费';
                        break;
                    default:
                        this.filtrateVideoTy(filtrateValue);
                }
            },
            /*筛选电视剧*/
            filtrateVideoTy: function (filtrateValue) {
                switch (filtrateValue) {
                    case '偶像爱情':
                        this.filtrateData.type = '偶像爱情';
                        break;
                    case '古装历史':
                        this.filtrateData.type = '古装历史';
                        break;
                    case '玄幻史诗':
                        this.filtrateData.type = '玄幻史诗';
                        break;
                    case '都市生活':
                        this.filtrateData.type = '都市生活';
                        break;
                    case '当代主旋律':
                        this.filtrateData.type = '当代主旋律';
                        break;
                    case '罪案谍战':
                        this.filtrateData.type = '罪案谍战';
                        break;
                    case '历险科幻':
                        this.filtrateData.type = '历险科幻';
                        break;
                    case '军旅抗战':
                        this.filtrateData.type = '军旅抗战';
                        break;
                    case '喜剧':
                        this.filtrateData.type = '喜剧';
                        break;
                    case '武侠江湖':
                        this.filtrateData.type = '武侠江湖';
                        break;
                    case '青春校园':
                        this.filtrateData.type = '青春校园';
                        break;
                    case '时代传奇':
                        this.filtrateData.type = '时代传奇';
                        break;
                    case '体育竞技':
                        this.filtrateData.type = '体育竞技';
                        break;
                    case '真人动漫':
                        this.filtrateData.type = '真人动漫';
                        break;
                    case '网络剧':
                        this.filtrateData.type = '网络剧';
                        break;
                    case '独播':
                        this.filtrateData.type = '独播';
                        break;
                    default:
                        this.filtrateVideoFilm(filtrateValue);
                }
            },
            /**筛选电影*/
            filtrateVideoFilm: function (filtrateValue) {
                switch (filtrateValue) {
                    case '剧情':
                        this.filtrateData.type = '剧情';
                        break;
                    case '武侠':
                        this.filtrateData.type = '武侠';
                        break;
                    case '爱情':
                        this.filtrateData.type = '爱情';
                        break;
                    case '惊悚':
                        this.filtrateData.type = '惊悚';
                        break;
                    case '犯罪':
                        this.filtrateData.type = '犯罪';
                        break;
                    case '悬疑':
                        this.filtrateData.type = '悬疑';
                        break;
                    case '战争':
                        this.filtrateData.type = '战争';
                        break;
                    case '科幻':
                        this.filtrateData.type = '科幻';
                        break;
                    case '动画':
                        this.filtrateData.type = '动画';
                        break;
                    case '恐怖':
                        this.filtrateData.type = '恐怖';
                        break;
                    case '冒险':
                        this.filtrateData.type = '冒险';
                        break;
                    case '奇幻':
                        this.filtrateData.type = '奇幻';
                        break;
                    case '运动':
                        this.filtrateData.type = '运动';
                        break;
                    case '歌舞':
                        this.filtrateData.type = '歌舞';
                        break;
                    case '音乐':
                        this.filtrateData.type = '音乐';
                        break;
                    case '记录':
                        this.filtrateData.type = '记录';
                        break;
                    case '伦理':
                        this.filtrateData.type = '伦理';
                        break;
                    case '西部':
                        this.filtrateData.type = '西部';
                        break;
                    default:
                        this.filtrateVideoVariety(filtrateValue);
                }
            },
            /*筛选综艺*/
            filtrateVideoVariety: function (filtrateValue) {
                switch (filtrateValue) {
                    case '游戏':
                        this.filtrateData.type = '游戏';
                        break;
                    case '养成':
                        this.filtrateData.type = '养成';
                        break;
                    case '情感':
                        this.filtrateData.type = '情感';
                        break;
                    case '脱口秀':
                        this.filtrateData.type = '脱口秀';
                        break;
                    case '表演':
                        this.filtrateData.type = '表演';
                        break;
                    case '体验':
                        this.filtrateData.type = '体验';
                        break;
                    case '文化':
                        this.filtrateData.type = '文化';
                        break;
                    case '美食':
                        this.filtrateData.type = '美食';
                        break;
                    case '职场':
                        this.filtrateData.type = '职场';
                        break;
                    case '体育':
                        this.filtrateData.type = '体育';
                        break;
                    case '潮流文化':
                        this.filtrateData.type = '潮流文化';
                        break;
                    case '访谈':
                        this.filtrateData.type = '访谈';
                        break;
                    case '生活服务':
                        this.filtrateData.type = '生活服务';
                        break;
                    case '萌宠':
                        this.filtrateData.type = '萌宠';
                        break;
                    case '质询':
                        this.filtrateData.type = '质询';
                        break;
                    case '晚会':
                        this.filtrateData.type = '晚会';
                        break;
                    default:
                        this.filtrateVideoCartoon(filtrateValue);
                }
            },
            /*筛选动漫*/
            filtrateVideoCartoon: function (filtrateValue) {
                switch (filtrateValue) {
                    case '治愈':
                        this.filtrateData.type = '治愈';
                        break;
                    case '搞笑':
                        this.filtrateData.type = '搞笑';
                        break;
                    case '经典':
                        this.filtrateData.type = '经典';
                        break;
                    case '竞技':
                        this.filtrateData.type = '竞技';
                        break;
                    case '魔幻':
                        this.filtrateData.type = '魔幻';
                        break;
                    case '热血':
                        this.filtrateData.type = '热血';
                        break;
                    case '恋爱':
                        this.filtrateData.type = '恋爱';
                        break;
                    case '推理':
                        this.filtrateData.type = '推理';
                        break;
                    case '中国风':
                        this.filtrateData.type = '中国风';
                        break;
                }
            },
            /** 判断点击的是哪个全部*/
            allFiltrate: function (event) {
                switch (event.currentTarget.name) {
                    case 'rank':
                        this.filtrateData.rank = '全部';
                        break;
                    case 'type':
                        this.filtrateData.type = '全部';
                        break;
                    case 'region':
                        this.filtrateData.region = '全部';
                        break;
                    case 'date':
                        this.filtrateData.date = '全部';
                        break;
                    case 'expenses':
                        this.filtrateData.expenses = '全部';
                        break;
                }
            },
            /*根据数据生成标签*/
            generate:function(responseData,nodeId) {
                let css1 = 'overflow: hidden;font-size: 14px;list-style-type: none;float: left;width: 110px;height: 45px;text-align: center;border: 1px solid #000000;padding-top: 3px;margin-bottom: 1px;';
                let spanCss = 'display: inline-block;margin-top: 8px;';
                let divArray = [];
                let menu = document.getElementById(nodeId);
                let userInfoData = responseData;
                let str = '';

                for (let i = 0; i < userInfoData.length; i++) {
                    str = '<div>';
                    str += '<li style="display: none;' + css1 + '"><span style="' + spanCss + '">' + userInfoData[i].vId + '</span></li>';
                    str += '<li style="' + css1 + '"><span style="' + spanCss + '">' + userInfoData[i].vName + '</span></li>';
                    str += '<li style="' + css1 + '"><span style="' + spanCss + '">' + userInfoData[i].vType + '</span></li>';
                    str += '<li style="' + css1 + '"><span style="' + spanCss + '">' + userInfoData[i].vRegion + '</span></li>';
                    str += '<li style="' + css1 + '"><span style="' + spanCss + '">' + userInfoData[i].vDefinition + '</span></li>';
                    str += '<li style="' + css1 + '"><span style="' + spanCss + '">' + userInfoData[i].vVideoType + '</span></li>';
                    str += '<li style="' + css1 + '"><span style="' + spanCss + '">' + userInfoData[i].vRemark + '</span></li>';
                    str += '<li style="' + css1 + '"><span style="' + spanCss + '">' + '暂未评分' + '</span></li>';
                    str += '<li style="' + css1 + '"><span style="' + spanCss + '">' + userInfoData[i].vDateIssued + '</span></li>';
                    str += '<li style="' + css1 + '">' + '暂未下架' + '</li>';
                    str += '<li style="' + css1 + '"><span style="' + spanCss + '"><input type="button" value="修改">' +
                        '<input type="button" value="删除"></span></li>';
                    str += '</div>';
                    divArray.push(str);
                }
                menu.innerHTML = divArray.join("")
            },
            /*显示所有视频数据*/
            clickFiltrate: function () {
                this.axios.get(
                    '/api/videoInfo'
                ).then(
                    response => {
                        console.log(response.data);
                        this.generate(response.data,'videoData');
                    }
                ).catch(
                    error => {
                        console.log(error)
                    }
                )
            },
            /*筛选所有搜索的数据*/
            clickFiltrates: function (event) {
                this.axios.get(
                    '/api/getByVideoInfo', {params:{
                            'rank': this.filtrateData.rank,
                            'type': this.filtrateData.type,
                            'region': this.filtrateData.region,
                            'date': this.filtrateData.date,
                            'expenses': this.filtrateData.expenses
                        }}
                ).then(
                    response => {
                        console.log(response.data)
                        this.generate(response.data,'videoData');
                    }
                ).catch(
                    error => {
                        console.log(error)
                    }
                )

            }
        }
    }
</script>

<style scoped>
  @import "../../../../../assets/css/background/backgroundNav.css";
  @import '../../../../../assets/css/userhome.css';
  @import "../../../../../assets/css/user-ty.css";
  @import "../../../../../assets/css/typeVideo.css";


  #adminVideo {
    width: 94.4%;
  }

  .admin-video-navigation {
    height: 70px;
    /*background-color: #f2f2f2;*/
    margin-left: 148px;
  }

  .mainInterface {
    margin-left: 148px;
  }
</style>
