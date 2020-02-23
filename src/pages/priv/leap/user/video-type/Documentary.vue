<template>
  <div id="Tv">
    <!--      导航栏-->
    <div name="top" class="user-home-navigation">
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
    <!--     类型选择-->
    <div class="user-ty-type">
      <li>
        <router-link to="" id="handpick" @click.native="clickVideo($event)" :class="{'typeColor':typeColour === 0}">
          电视剧精选
        </router-link>
      </li>
      <li>
        <router-link to="" id="overseas" @click.native="clickVideo($event)" :class="{'typeColor':typeColour === 1}">
          海外剧
        </router-link>
      </li>
      <li>
        <router-link to="" id="network" @click.native="clickVideo($event)" :class="{'typeColor':typeColour === 2}">网络剧
        </router-link>
      </li>
      <li>
        <router-link to="" id="annual" @click.native="clickVideo($event)" :class="{'typeColor':typeColour === 3}">年度大剧
        </router-link>
      </li>
      <li>
        <router-link to="" id="praise" @click.native="clickVideo($event)" :class="{'typeColor':typeColour === 4}">口碑好剧
        </router-link>
      </li>
      <li>
        <router-link to="" id="free" @click.native="clickVideo($event)" :class="{'typeColor':typeColour === 5}">免费热剧
        </router-link>
      </li>
      <li>
        <router-link to="" @click.native="clickVideo($event)" :class="{'typeColor':typeColour === 6}">军旅抗战</router-link>
      </li>
      <li>
        <router-link to="" @click.native="clickVideo($event)" :class="{'typeColor':typeColour === 7}">戏剧</router-link>
      </li>
      <li>
        <router-link to="" @click.native="clickVideo($event)" :class="{'typeColor':typeColour === 8}">都市生活</router-link>
      </li>
      <li>
        <router-link to="" @click.native="clickVideo($event)" :class="{'typeColor':typeColour === 9}">武侠江湖</router-link>
      </li>
      <li>
        <router-link to="" @click.native="clickVideo($event)" :class="{'typeColor':typeColour === 10}">罪案谍战
        </router-link>
      </li>
      <li>
        <router-link to="" @click.native="clickVideo($event)" :class="{'typeColor':typeColour === 11}">古装历史
        </router-link>
      </li>
      <li>
        <router-link to="" @click.native="clickVideo($event)" :class="{'typeColor':typeColour === 12}">电视剧片库
        </router-link>
      </li>
    </div>
    <!--    主体-->
    <div class="user-home-homepage">
      <!--      首页推送-->
      <div v-show="columnPush" class="typeColumnPush">
        <swiper :options="swiperOption">
          <swiper-slide>
            <img name="type-push" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/白鹿原">
          </swiper-slide>
          <swiper-slide>
            <img name="type-push" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/大秦帝国">
          </swiper-slide>
          <swiper-slide>
            <img name="type-push" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/翻译官">
          </swiper-slide>
          <swiper-slide>
            <img name="type-push" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/古剑奇谭">
          </swiper-slide>
          <swiper-slide>
            <img name="type-push" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/何以笙箫默">
          </swiper-slide>
          <swiper-slide>
            <img name="type-push" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/花千骨">
          </swiper-slide>
          <swiper-slide>
            <img name="type-push" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/鸡毛飞上天">
          </swiper-slide>
          <swiper-slide>
            <img name="type-push" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/致青春">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <!--      筛选-->
      <div v-show="ifFiltrate" class="typeFiltrate">
        <!--        排序-->
        <div>
          <li>排序</li>
          <li>
            <router-link name="rank" to="" @click.native="filtrateVideo($event)"
                         v-bind:class="{'typeFiltrate-list': filtrateData.rank === 0}">全部
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event)"
                         :class="{'typeFiltrate-list': filtrateData.rank === 1}">最新
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event)"
                         :class="{'typeFiltrate-list': filtrateData.rank === 2}">最热
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event)"
                         :class="{'typeFiltrate-list': filtrateData.rank === 3}">好评
            </router-link>
          </li>
        </div>
        <hr>
        <div class="typeFiltrate-tow">
          <li>类型</li>
          <li>
            <router-link name="type" to="" @click.native="filtrateVideo($event)"
                         :class="{'typeFiltrate-list': filtrateData.type === 0}">全部
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event)"
                         :class="{'typeFiltrate-list': filtrateData.type === 1}">偶像爱情
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event)"
                         :class="{'typeFiltrate-list': filtrateData.type === 2}">古装历史
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event)"
                         :class="{'typeFiltrate-list': filtrateData.type === 3}">玄幻史诗
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event)"
                         :class="{'typeFiltrate-list': filtrateData.type === 4}">都市生活
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event)"
                         :class="{'typeFiltrate-list': filtrateData.type === 5}">当代主旋律
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event)"
                         :class="{'typeFiltrate-list': filtrateData.type === 6}">罪案谍战
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event)"
                         :class="{'typeFiltrate-list': filtrateData.type === 7}">历险科幻
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event)"
                         :class="{'typeFiltrate-list': filtrateData.type === 8}">军旅抗战
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event)"
                         :class="{'typeFiltrate-list': filtrateData.type === 9}">喜剧
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event)"
                         :class="{'typeFiltrate-list': filtrateData.type === 10}">武侠江湖
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event)"
                         :class="{'typeFiltrate-list': filtrateData.type === 11}">青春校园
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event)"
                         :class="{'typeFiltrate-list': filtrateData.type === 12}">时代传奇
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event)"
                         :class="{'typeFiltrate-list': filtrateData.type === 13}">体育竞技
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event)"
                         :class="{'typeFiltrate-list': filtrateData.type === 14}">真人动漫
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event)"
                         :class="{'typeFiltrate-list': filtrateData.type === 15}">网络剧
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event)"
                         :class="{'typeFiltrate-list': filtrateData.type === 16}">独播
            </router-link>
          </li>
        </div>
        <hr>
        <div>
          <li>地区</li>
          <li>
            <router-link name="region" to="" @click.native="filtrateVideo($event)"
                         :class="{'typeFiltrate-list': filtrateData.region === 0}">全部
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event)"
                         :class="{'typeFiltrate-list': filtrateData.region === 1}">大陆
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event)"
                         :class="{'typeFiltrate-list': filtrateData.region === 2}">香港
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event)"
                         :class="{'typeFiltrate-list': filtrateData.region === 3}">台湾
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event)"
                         :class="{'typeFiltrate-list': filtrateData.region === 4}">韩国
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event)"
                         :class="{'typeFiltrate-list': filtrateData.region === 5}">日本
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event)"
                         :class="{'typeFiltrate-list': filtrateData.region === 6}">欧美
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event)"
                         :class="{'typeFiltrate-list': filtrateData.region === 7}">其他
            </router-link>
          </li>
        </div>
        <hr>
        <div>
          <li>时间</li>
          <li>
            <router-link name="date" to="" @click.native="filtrateVideo($event)"
                         :class="{'typeFiltrate-list': filtrateData.date === 0}">全部
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event)"
                         :class="{'typeFiltrate-list': filtrateData.date === 1}">2019
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event)"
                         :class="{'typeFiltrate-list': filtrateData.date === 2}">2018
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event)"
                         :class="{'typeFiltrate-list': filtrateData.date === 3}">2017
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event)"
                         :class="{'typeFiltrate-list': filtrateData.date === 4}">2016
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event)"
                         :class="{'typeFiltrate-list': filtrateData.date === 5}">2015
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event)"
                         :class="{'typeFiltrate-list': filtrateData.date === 6}">2014
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event)"
                         :class="{'typeFiltrate-list': filtrateData.date === 7}">2013
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event)"
                         :class="{'typeFiltrate-list': filtrateData.date === 8}">2012
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event)"
                         :class="{'typeFiltrate-list': filtrateData.date === 9}">2011
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event)"
                         :class="{'typeFiltrate-list': filtrateData.date === 10}">00年代
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event)"
                         :class="{'typeFiltrate-list': filtrateData.date === 11}">90年代
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event)"
                         :class="{'typeFiltrate-list': filtrateData.date === 12}">80年代
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event)"
                         :class="{'typeFiltrate-list': filtrateData.date === 13}">更早
            </router-link>
          </li>
        </div>
        <hr>
        <div>
          <li>资费</li>
          <li>
            <router-link name="expenses" to="" @click.native="filtrateVideo($event)"
                         :class="{'typeFiltrate-list': filtrateData.expenses === 0}">全部
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event)"
                         :class="{'typeFiltrate-list': filtrateData.expenses === 1}">会员
            </router-link>
          </li>
          <li>
            <router-link to="" @click.native="filtrateVideo($event)"
                         :class="{'typeFiltrate-list': filtrateData.expenses === 2}">免费
            </router-link>
          </li>
        </div>
      </div>
      <!--      文字推送-->
      <div class="user-ty-broadcast">
        <li>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/致青春"
                       class="user-home-img">致青春
          </router-link>
        </li>
        <li>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/致青春"
                       class="user-home-img">致青春
          </router-link>
        </li>
        <li>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/致青春"
                       class="user-home-img">致青春
          </router-link>
        </li>
        <li>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/致青春"
                       class="user-home-img">致青春
          </router-link>
        </li>
        <li>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/致青春"
                       class="user-home-img">致青春
          </router-link>
        </li>
        <li>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/致青春"
                       class="user-home-img">致青春
          </router-link>
        </li>
        <li>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/致青春"
                       class="user-home-img">致青春
          </router-link>
        </li>
        <li>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/致青春"
                       class="user-home-img">致青春
          </router-link>
        </li>
      </div>

      <!--      新剧精选-->
      <div class="overallPush">
        <h2 class="overallPush-one">新剧精选</h2>
        <li>
          <img class="choicenessImg" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/烈火雄心"/>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/烈火雄心">烈火雄心
          </router-link>
          <p>视频介绍</p>
        </li>
        <li>
          <img class="choicenessImg" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/平凡世界"/>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/平凡世界">平凡世界
          </router-link>
          <p>视频介绍</p>
        </li>
        <li>
          <img class="choicenessImg" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/三生三世十里桃花"/>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/三生三世十里桃花">
            三生三世十里桃花
          </router-link>
          <p>视频介绍</p>
        </li>
        <li>
          <img class="choicenessImg" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/神话"/>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/神话">神话
          </router-link>
          <p>视频介绍</p>
        </li>
        <li>
          <img class="choicenessImg" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/四大名捕"/>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/四大名捕">四大名捕
          </router-link>
          <p>视频介绍</p>
        </li>
        <li>
          <img class="choicenessImg" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/搜神记"/>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/搜神记">搜神记
          </router-link>
          <p>视频介绍</p>
        </li>
        <li>
          <img class="choicenessImg" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/特警力量"/>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/特警力量">特警力量
          </router-link>
          <p>视频介绍</p>
        </li>
        <li>
          <img class="choicenessImg" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/仙剑奇侠传"/>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/仙剑奇侠传">
            仙剑奇侠传
          </router-link>
          <p>视频介绍</p>
        </li>
        <li>
          <img class="choicenessImg" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/花千骨"/>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/花千骨">
            花千骨
          </router-link>
          <p>视频介绍</p>
        </li>
        <li>
          <img class="choicenessImg" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/何以笙箫默"/>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/何以笙箫默">
            何以笙箫默
          </router-link>
          <p>视频介绍</p>
        </li>
        <li>
          <img class="choicenessImg" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/惹不起的殿下大人"/>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/惹不起的殿下大人">
            惹不起的殿下大人
          </router-link>
          <p>视频介绍</p>
        </li>
        <li>
          <img class="choicenessImg" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/将军在上"/>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/将军在上">
            将军在上
          </router-link>
          <p>视频介绍</p>
        </li>
      </div>
      <!--      热剧推送-->
      <div class="overallPush">
        <h2 class="overallPush-one">热剧推送</h2>
        <li>
          <img class="choicenessImg" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/烈火雄心"/>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/烈火雄心">烈火雄心
          </router-link>
          <p>视频介绍</p>
        </li>
        <li>
          <img class="choicenessImg" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/平凡世界"/>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/平凡世界">平凡世界
          </router-link>
          <p>视频介绍</p>
        </li>
        <li>
          <img class="choicenessImg" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/三生三世十里桃花"/>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/三生三世十里桃花">
            三生三世十里桃花
          </router-link>
          <p>视频介绍</p>
        </li>
        <li>
          <img class="choicenessImg" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/神话"/>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/神话">神话
          </router-link>
          <p>视频介绍</p>
        </li>
        <li>
          <img class="choicenessImg" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/四大名捕"/>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/四大名捕">四大名捕
          </router-link>
          <p>视频介绍</p>
        </li>
        <li>
          <img class="choicenessImg" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/搜神记"/>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/搜神记">搜神记
          </router-link>
          <p>视频介绍</p>
        </li>
        <li>
          <img class="choicenessImg" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/特警力量"/>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/特警力量">特警力量
          </router-link>
          <p>视频介绍</p>
        </li>
        <li>
          <img class="choicenessImg" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/仙剑奇侠传"/>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/仙剑奇侠传">
            仙剑奇侠传
          </router-link>
          <p>视频介绍</p>
        </li>
        <li>
          <img class="choicenessImg" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/花千骨"/>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/花千骨">
            花千骨
          </router-link>
          <p>视频介绍</p>
        </li>
        <li>
          <img class="choicenessImg" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/何以笙箫默"/>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/何以笙箫默">
            何以笙箫默
          </router-link>
          <p>视频介绍</p>
        </li>
        <li>
          <img class="choicenessImg" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/惹不起的殿下大人"/>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/惹不起的殿下大人">
            惹不起的殿下大人
          </router-link>
          <p>视频介绍</p>
        </li>
        <li>
          <img class="choicenessImg" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/将军在上"/>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/将军在上">
            将军在上
          </router-link>
          <p>视频介绍</p>
        </li>
      </div>

      <!--      猜你喜欢-->
      <div class="overallPush">
        <h2 class="overallPush-one">猜你喜欢</h2>
        <li>
          <img class="choicenessImg" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/烈火雄心"/>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/烈火雄心">烈火雄心
          </router-link>
          <p>视频介绍</p>
        </li>
        <li>
          <img class="choicenessImg" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/平凡世界"/>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/平凡世界">平凡世界
          </router-link>
          <p>视频介绍</p>
        </li>
        <li>
          <img class="choicenessImg" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/三生三世十里桃花"/>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/三生三世十里桃花">
            三生三世十里桃花
          </router-link>
          <p>视频介绍</p>
        </li>
        <li>
          <img class="choicenessImg" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/神话"/>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/神话">神话
          </router-link>
          <p>视频介绍</p>
        </li>
        <li>
          <img class="choicenessImg" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/四大名捕"/>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/四大名捕">四大名捕
          </router-link>
          <p>视频介绍</p>
        </li>
        <li>
          <img class="choicenessImg" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/搜神记"/>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/搜神记">搜神记
          </router-link>
          <p>视频介绍</p>
        </li>
        <li>
          <img class="choicenessImg" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/特警力量"/>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/特警力量">特警力量
          </router-link>
          <p>视频介绍</p>
        </li>
        <li>
          <img class="choicenessImg" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/仙剑奇侠传"/>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/仙剑奇侠传">
            仙剑奇侠传
          </router-link>
          <p>视频介绍</p>
        </li>
        <li>
          <img class="choicenessImg" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/花千骨"/>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/花千骨">
            花千骨
          </router-link>
          <p>视频介绍</p>
        </li>
        <li>
          <img class="choicenessImg" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/何以笙箫默"/>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/何以笙箫默">
            何以笙箫默
          </router-link>
          <p>视频介绍</p>
        </li>
        <li>
          <img class="choicenessImg" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/惹不起的殿下大人"/>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/惹不起的殿下大人">
            惹不起的殿下大人
          </router-link>
          <p>视频介绍</p>
        </li>
        <li>
          <img class="choicenessImg" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/将军在上"/>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/将军在上">
            将军在上
          </router-link>
          <p>视频介绍</p>
        </li>
      </div>
      <!--      热门预告-->
      <div class="overallPush">
        <h2 class="overallPush-one">热门预告</h2>
        <li>
          <img class="choicenessImg" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/烈火雄心"/>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/烈火雄心">烈火雄心
          </router-link>
          <p>视频介绍</p>
        </li>
        <li>
          <img class="choicenessImg" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/平凡世界"/>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/平凡世界">平凡世界
          </router-link>
          <p>视频介绍</p>
        </li>
        <li>
          <img class="choicenessImg" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/三生三世十里桃花"/>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/三生三世十里桃花">
            三生三世十里桃花
          </router-link>
          <p>视频介绍</p>
        </li>
        <li>
          <img class="choicenessImg" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/神话"/>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/神话">神话
          </router-link>
          <p>视频介绍</p>
        </li>
        <li>
          <img class="choicenessImg" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/四大名捕"/>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/四大名捕">四大名捕
          </router-link>
          <p>视频介绍</p>
        </li>
        <li>
          <img class="choicenessImg" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/搜神记"/>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/搜神记">搜神记
          </router-link>
          <p>视频介绍</p>
        </li>
        <li>
          <img class="choicenessImg" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/特警力量"/>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/特警力量">特警力量
          </router-link>
          <p>视频介绍</p>
        </li>
        <li>
          <img class="choicenessImg" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/仙剑奇侠传"/>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/仙剑奇侠传">
            仙剑奇侠传
          </router-link>
          <p>视频介绍</p>
        </li>
        <li>
          <img class="choicenessImg" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/花千骨"/>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/花千骨">
            花千骨
          </router-link>
          <p>视频介绍</p>
        </li>
        <li>
          <img class="choicenessImg" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/何以笙箫默"/>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/何以笙箫默">
            何以笙箫默
          </router-link>
          <p>视频介绍</p>
        </li>
        <li>
          <img class="choicenessImg" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/惹不起的殿下大人"/>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/惹不起的殿下大人">
            惹不起的殿下大人
          </router-link>
          <p>视频介绍</p>
        </li>
        <li>
          <img class="choicenessImg" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/将军在上"/>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/将军在上">
            将军在上
          </router-link>
          <p>视频介绍</p>
        </li>
      </div>
      <!--      经典老片-->
      <div class="overallPush">
        <h2 class="overallPush-one">经典老片</h2>
        <li>
          <img class="choicenessImg" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/烈火雄心"/>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/烈火雄心">烈火雄心
          </router-link>
          <p>视频介绍</p>
        </li>
        <li>
          <img class="choicenessImg" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/平凡世界"/>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/平凡世界">平凡世界
          </router-link>
          <p>视频介绍</p>
        </li>
        <li>
          <img class="choicenessImg" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/三生三世十里桃花"/>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/三生三世十里桃花">
            三生三世十里桃花
          </router-link>
          <p>视频介绍</p>
        </li>
        <li>
          <img class="choicenessImg" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/神话"/>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/神话">神话
          </router-link>
          <p>视频介绍</p>
        </li>
        <li>
          <img class="choicenessImg" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/四大名捕"/>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/四大名捕">四大名捕
          </router-link>
          <p>视频介绍</p>
        </li>
        <li>
          <img class="choicenessImg" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/搜神记"/>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/搜神记">搜神记
          </router-link>
          <p>视频介绍</p>
        </li>
        <li>
          <img class="choicenessImg" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/特警力量"/>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/特警力量">特警力量
          </router-link>
          <p>视频介绍</p>
        </li>
        <li>
          <img class="choicenessImg" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/仙剑奇侠传"/>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/仙剑奇侠传">
            仙剑奇侠传
          </router-link>
          <p>视频介绍</p>
        </li>
        <li>
          <img class="choicenessImg" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/花千骨"/>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/花千骨">
            花千骨
          </router-link>
          <p>视频介绍</p>
        </li>
        <li>
          <img class="choicenessImg" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/何以笙箫默"/>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/何以笙箫默">
            何以笙箫默
          </router-link>
          <p>视频介绍</p>
        </li>
        <li>
          <img class="choicenessImg" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/惹不起的殿下大人"/>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/惹不起的殿下大人">
            惹不起的殿下大人
          </router-link>
          <p>视频介绍</p>
        </li>
        <li>
          <img class="choicenessImg" @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/将军在上"/>
          <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/将军在上">
            将军在上
          </router-link>
          <p>视频介绍</p>
        </li>
      </div>
    </div>

    <div class="anchorTop">
      <a href="#top">顶</a>
    </div>
    <!--    底层-->
    <div class="footer">
      服务热线：1231422131
    </div>
  </div>
</template>

<script>
    export default {
        name: "Tv",
        data() {
            return {
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true // 允许点击小圆点跳转
                    },
                    autoplay: {
                        delay: 5000,
                        disableOnInteraction: false // 手动切换之后继续自动轮播
                    },
                    loop: true,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                },
                typeColour: 0,
                columnPush: true,
                ifFiltrate: false,
                filtrateData: {
                    rank: 0,
                    type: 0,
                    region: 0,
                    date: 0,
                    expenses: 0
                }
            }
        },
        mounted() {
            let pir = this.$route.query.value;
            if (pir !== undefined) {
                this.clickVideo(pir)
            }

        },
        methods: {
            search: function () {
                let from = new FormData();
                let searchValue = this.$refs.searchValue.value;
                from.append("searchValue",searchValue);
                this.axios.post(
                    '/api/getSearchVideoInfo',from
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
            /** 展示图片和跳转到播放页面 */
            skip: function (event) {
                let e = event.currentTarget.tagName;
                let from = new FormData();
                // 判断当前元素是否为a标签，同时将url赋值给 img变量
                let img = e === 'A' ? decodeURIComponent(event.currentTarget.href)
                    : decodeURIComponent(event.currentTarget.src);
                let imgSplit = img.split("/");
                let pName = imgSplit[imgSplit.length - 1];
                from.append("pName", pName);
                //发起axios请求
                this.axios.post(
                    '/api/videoPlayInfo', from
                ).then(
                    response => {
                        this.$router.push({
                            path: "/leap/myVideo", query: {
                                pName: pName,
                                pws: "密码"
                            }
                        })
                    }
                ).catch(
                    error => {
                        console.log(error)
                    }
                )
            },
            /** 拿到用户点击视频类型的所有数据 */
            clickVideo: function (event) {
                let from = new FormData();
                let a = Object.prototype.toString;
                // 三目运算，判断是否在当前页面触发事件，从而赋值
                let typeValue = a.call(event) === '[object String]' ? event : event.currentTarget.firstChild.nodeValue.trim();
                // 判断用户点击类型
                this.typeSwitch(typeValue);
                this.ifColumnPush(typeValue);
                from.append('typeValue', typeValue);
                this.axios.post(
                    '/api/getPictureData', from
                ).then(
                    response => {
                        for (let x in response.data) {
                            console.log(response.data[x].pName)
                        }
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
                    case '电视剧精选':
                        this.typeColour = 0;
                        break;
                    case '海外剧':
                        this.typeColour = 1;
                        break;
                    case '网络剧':
                        this.typeColour = 2;
                        break;
                    case '年度大剧':
                        this.typeColour = 3;
                        break;
                    case '口碑好剧':
                        this.typeColour = 4;
                        break;
                    case '免费热剧':
                        this.typeColour = 5;
                        break;
                    case '军旅抗战':
                        this.typeColour = 6;
                        break;
                    case '戏剧':
                        this.typeColour = 7;
                        break;
                    case '都市生活':
                        this.typeColour = 8;
                        break;
                    case '武侠江湖':
                        this.typeColour = 9;
                        break;
                    case '罪案谍战':
                        this.typeColour = 10;
                        break;
                    case '古装历史':
                        this.typeColour = 11;
                        break;
                    case '电视剧片库':
                        this.typeColour = 12;
                        break;
                }
            },
            /** 判断栏目是否隐藏*/
            ifColumnPush: function (typeValue) {
                if (typeValue === '电视剧精选' || typeValue === '海外剧') {
                    this.columnPush = true;
                    this.ifFiltrate = false;
                } else {
                    this.columnPush = false;
                    this.ifFiltrate = true;
                }
            },
            /** 筛选视频*/
            filtrateVideo: function (event) {
                let filtrateValue = event.currentTarget.firstChild.nodeValue.trim();
                switch (filtrateValue) {
                    case '全部':
                        this.allFiltrate(event);    // 判断点击的是哪个‘全部’
                        break;
                    case '最新':
                        this.filtrateData.rank = 1;
                        break;
                    case '最热':
                        this.filtrateData.rank = 2;
                        break;
                    case '好评':
                        this.filtrateData.rank = 3;
                        break;
                    case '偶像爱情':
                        this.filtrateData.type = 1;
                        break;
                    case '古装历史':
                        this.filtrateData.type = 2;
                        break;
                    case '玄幻史诗':
                        this.filtrateData.type = 3;
                        break;
                    case '都市生活':
                        this.filtrateData.type = 4;
                        break;
                    case '当代主旋律':
                        this.filtrateData.type = 5;
                        break;
                    case '罪案谍战':
                        this.filtrateData.type = 6;
                        break;
                    case '历险科幻':
                        this.filtrateData.type = 7;
                        break;
                    case '军旅抗战':
                        this.filtrateData.type = 8;
                        break;
                    case '喜剧':
                        this.filtrateData.type = 9;
                        break;
                    case '武侠江湖':
                        this.filtrateData.type = 10;
                        break;
                    case '青春校园':
                        this.filtrateData.type = 11;
                        break;
                    case '时代传奇':
                        this.filtrateData.type = 12;
                        break;
                    case '体育竞技':
                        this.filtrateData.type = 13;
                        break;
                    case '真人动漫':
                        this.filtrateData.type = 14;
                        break;
                    case '网络剧':
                        this.filtrateData.type = 15;
                        break;
                    case '独播':
                        this.filtrateData.type = 16;
                        break;
                    case '大陆':
                        this.filtrateData.region = 1;
                        break;
                    case '香港':
                        this.filtrateData.region = 2;
                        break;
                    case '台湾':
                        this.filtrateData.region = 3;
                        break;
                    case '韩国':
                        this.filtrateData.region = 4;
                        break;
                    case '日本':
                        this.filtrateData.region = 5;
                        break;
                    case '欧美':
                        this.filtrateData.region = 6;
                        break;
                    case '其他':
                        this.filtrateData.region = 7;
                        break;
                    case '2019':
                        this.filtrateData.date = 1;
                        break;
                    case '2018':
                        this.filtrateData.date = 2;
                        break;
                    case '2017':
                        this.filtrateData.date = 3;
                        break;
                    case '2016':
                        this.filtrateData.date = 4;
                        break;
                    case '2015':
                        this.filtrateData.date = 5;
                        break;
                    case '2014':
                        this.filtrateData.date = 6;
                        break;
                    case '2013':
                        this.filtrateData.date = 7;
                        break;
                    case '2012':
                        this.filtrateData.date = 8;
                        break;
                    case '2011':
                        this.filtrateData.date = 9;
                        break;
                    case '00年代':
                        this.filtrateData.date = 10;
                        break;
                    case '90年代':
                        this.filtrateData.date = 11;
                        break;
                    case '80年代':
                        this.filtrateData.date = 12;
                        break;
                    case '更早':
                        this.filtrateData.date = 13;
                        break;
                    case '会员':
                        this.filtrateData.expenses = 1;
                        break;
                    case '免费':
                        this.filtrateData.expenses = 2;
                        break;

                }
            },
            /** 判断点击的是哪个全部*/
            allFiltrate: function (event) {
                switch (event.currentTarget.name) {
                    case 'rank':this.filtrateData.rank = 0;break;
                    case 'type':this.filtrateData.type = 0;break;
                    case 'region':this.filtrateData.region = 0;break;
                    case 'date':this.filtrateData.date = 0;break;
                    case 'expenses':this.filtrateData.expenses = 0;break;
                }
            }
        }
    }
</script>

<style scoped>
  @import '../../../../../assets/css/userhome.css';
  @import "../../../../../assets/css/user-ty.css";
  @import "../../../../../assets/css/typeVideo.css";

  .typeColor {
    color: #f00;
    border-bottom: 4px solid red;
    padding: 7px;
  }
</style>
