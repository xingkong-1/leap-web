<template>
  <div id="backgroundExhibition">
    <!--    导航栏-->
    <div class="admin-video-navigation">
      <h1 class="backgroundLogo">飞跃视频</h1>
      <input type="text">
      <input type="button" value="搜索">
      <router-link @click.native="onclickShowInser" to="/leap/insertVideo">上传视频</router-link>
    </div>
    <!--    种类-->
    <div class="showFiltrate">
      <li>
        <router-link @click.native="clickShowFiltrate" :class="{'typeFiltrate-list': showFiltrate === 0}" to="">精选
        </router-link>
      </li>
      <li>
        <router-link @click.native="clickShowFiltrate" :class="{'typeFiltrate-list': showFiltrate === 1}" to="">电视剧
        </router-link>
      </li>
      <li>
        <router-link @click.native="clickShowFiltrate" :class="{'typeFiltrate-list': showFiltrate === 2}" to="">电影
        </router-link>
      </li>
      <li>
        <router-link @click.native="clickShowFiltrate" :class="{'typeFiltrate-list': showFiltrate === 3}" to="">动漫
        </router-link>
      </li>
      <li>
        <router-link @click.native="clickShowFiltrate" :class="{'typeFiltrate-list': showFiltrate === 4}" to="">少儿
        </router-link>
      </li>
    </div>
    <div v-show="showFiltrate === 0"/>
    <div v-show="showFiltrate === 1" class="showFiltrateType">
      <div class="showFiltrateType">
        <li>
          <router-link to="" @click.native="clickShowFiltrateType"
                       :class="{'typeFiltrate-list': showFiltrateType === 0}">电视剧精选
          </router-link>
        </li>
        <li>
          <router-link to="" @click.native="clickShowFiltrateType"
                       :class="{'typeFiltrate-list': showFiltrateType === 1}">海外剧
          </router-link>
        </li>
        <li>
          <router-link to="" @click.native="clickShowFiltrateType"
                       :class="{'typeFiltrate-list': showFiltrateType === 2}">网路剧
          </router-link>
        </li>
        <li>
          <router-link to="" @click.native="clickShowFiltrateType"
                       :class="{'typeFiltrate-list': showFiltrateType === 3}">年度大剧
          </router-link>
        </li>
        <li>
          <router-link to="" @click.native="clickShowFiltrateType"
                       :class="{'typeFiltrate-list': showFiltrateType === 4}">口碑好剧
          </router-link>
        </li>
        <li>
          <router-link to="" @click.native="clickShowFiltrateType"
                       :class="{'typeFiltrate-list': showFiltrateType === 5}">免费热剧
          </router-link>
        </li>
        <li>
          <router-link to="" @click.native="clickShowFiltrateType"
                       :class="{'typeFiltrate-list': showFiltrateType === 6}">军旅抗战
          </router-link>
        </li>
        <li>
          <router-link to="" @click.native="clickShowFiltrateType"
                       :class="{'typeFiltrate-list': showFiltrateType === 7}">戏剧
          </router-link>
        </li>
        <li>
          <router-link to="" @click.native="clickShowFiltrateType"
                       :class="{'typeFiltrate-list': showFiltrateType === 8}">都市生活
          </router-link>
        </li>
        <li>
          <router-link to="" @click.native="clickShowFiltrateType"
                       :class="{'typeFiltrate-list': showFiltrateType === 9}">武侠江湖
          </router-link>
        </li>
        <li>
          <router-link to="" @click.native="clickShowFiltrateType"
                       :class="{'typeFiltrate-list': showFiltrateType === 10}">罪案谍战
          </router-link>
        </li>
        <li>
          <router-link to="" @click.native="clickShowFiltrateType"
                       :class="{'typeFiltrate-list': showFiltrateType === 11}">古装历史
          </router-link>
        </li>
      </div>
    </div>
    <div v-show="showFiltrate === 2" class="showFiltrateType">
      <div class="showFiltrateType">
        <li>
          <router-link to="" @click.native="clickShowFiltrateType"
                       :class="{'typeFiltrate-list': showFiltrateType2 === 0}">电影精选
          </router-link>
        </li>
        <li>
          <router-link to="" @click.native="clickShowFiltrateType"
                       :class="{'typeFiltrate-list': showFiltrateType2 === 1}">院线大片
          </router-link>
        </li>
        <li>
          <router-link to="" @click.native="clickShowFiltrateType"
                       :class="{'typeFiltrate-list': showFiltrateType2 === 2}">自制电影
          </router-link>
        </li>
        <li>
          <router-link to="" @click.native="clickShowFiltrateType"
                       :class="{'typeFiltrate-list': showFiltrateType2 === 3}">动作
          </router-link>
        </li>
        <li>
          <router-link to="" @click.native="clickShowFiltrateType"
                       :class="{'typeFiltrate-list': showFiltrateType2 === 4}">喜剧
          </router-link>
        </li>
        <li>
          <router-link to="" @click.native="clickShowFiltrateType"
                       :class="{'typeFiltrate-list': showFiltrateType2 === 10}">科幻
          </router-link>
        </li>
        <li>
          <router-link to="" @click.native="clickShowFiltrateType"
                       :class="{'typeFiltrate-list': showFiltrateType2 === 6}">犯罪
          </router-link>
        </li>
        <li>
          <router-link to="" @click.native="clickShowFiltrateType"
                       :class="{'typeFiltrate-list': showFiltrateType2 === 7}">爱情
          </router-link>
        </li>
        <li>
          <router-link to="" @click.native="clickShowFiltrateType"
                       :class="{'typeFiltrate-list': showFiltrateType2 === 8}">独播
          </router-link>
        </li>
        <li>
          <router-link to="" @click.native="clickShowFiltrateType"
                       :class="{'typeFiltrate-list': showFiltrateType2 === 5}">预告片
          </router-link>
        </li>
      </div>
    </div>
    <div v-show="showFiltrate === 3" class="showFiltrateType">
      <div class="showFiltrateType">
        <li>
          <router-link to="" @click.native="clickShowFiltrateType"
                       :class="{'typeFiltrate-list': showFiltrateType1 === 0}">动漫精选
          </router-link>
        </li>
        <li>
          <router-link to="" @click.native="clickShowFiltrateType"
                       :class="{'typeFiltrate-list': showFiltrateType1 === 1}">国漫
          </router-link>
        </li>
        <li>
          <router-link to="" @click.native="clickShowFiltrateType"
                       :class="{'typeFiltrate-list': showFiltrateType1 === 2}">日漫
          </router-link>
        </li>
        <li>
          <router-link to="" @click.native="clickShowFiltrateType"
                       :class="{'typeFiltrate-list': showFiltrateType1 === 3}">经典
          </router-link>
        </li>
        <li>
          <router-link to="" @click.native="clickShowFiltrateType"
                       :class="{'typeFiltrate-list': showFiltrateType1 === 4}">治愈
          </router-link>
        </li>
        <li>
          <router-link to="" @click.native="clickShowFiltrateType"
                       :class="{'typeFiltrate-list': showFiltrateType1 === 5}">热血
          </router-link>
        </li>
        <li>
          <router-link to="" @click.native="clickShowFiltrateType"
                       :class="{'typeFiltrate-list': showFiltrateType1 === 6}">青春
          </router-link>
        </li>
        <li>
          <router-link to="" @click.native="clickShowFiltrateType"
                       :class="{'typeFiltrate-list': showFiltrateType1 === 7}">战斗
          </router-link>
        </li>
        <li>
          <router-link to="" @click.native="clickShowFiltrateType"
                       :class="{'typeFiltrate-list': showFiltrateType1 === 8}">推理
          </router-link>
        </li>
        <li>
          <router-link to="" @click.native="clickShowFiltrateType"
                       :class="{'typeFiltrate-list': showFiltrateType1 === 9}">魔幻
          </router-link>
        </li>
        <li>
          <router-link to="" @click.native="clickShowFiltrateType"
                       :class="{'typeFiltrate-list': showFiltrateType1 === 10}">科幻
          </router-link>
        </li>
      </div>
    </div>
    <div v-show="showFiltrate === 4" class="showFiltrateType">
      <div class="showFiltrateType">
        <li>
          <router-link to="" @click.native="clickShowFiltrateType"
                       :class="{'typeFiltrate-list': showFiltrateType3 === 0}">少儿精选
          </router-link>
        </li>
        <li>
          <router-link to="" @click.native="clickShowFiltrateType"
                       :class="{'typeFiltrate-list': showFiltrateType3 === 1}">益智
          </router-link>
        </li>
        <li>
          <router-link to="" @click.native="clickShowFiltrateType"
                       :class="{'typeFiltrate-list': showFiltrateType3 === 2}">儿歌
          </router-link>
        </li>
        <li>
          <router-link to="" @click.native="clickShowFiltrateType"
                       :class="{'typeFiltrate-list': showFiltrateType3 === 3}">玩具
          </router-link>
        </li>
        <li>
          <router-link to="" @click.native="clickShowFiltrateType"
                       :class="{'typeFiltrate-list': showFiltrateType3 === 4}">英语
          </router-link>
        </li>
        <li>
          <router-link to="" @click.native="clickShowFiltrateType"
                       :class="{'typeFiltrate-list': showFiltrateType3 === 5}">手工·绘画
          </router-link>
        </li>
        <li>
          <router-link to="" @click.native="clickShowFiltrateType"
                       :class="{'typeFiltrate-list': showFiltrateType3 === 6}">魔幻·科幻
          </router-link>
        </li>
        <li>
          <router-link to="" @click.native="clickShowFiltrateType"
                       :class="{'typeFiltrate-list': showFiltrateType3 === 7}">男孩
          </router-link>
        </li>
        <li>
          <router-link to="" @click.native="clickShowFiltrateType"
                       :class="{'typeFiltrate-list': showFiltrateType3 === 8}">女孩
          </router-link>
        </li>
        <li>
          <router-link to="" @click.native="clickShowFiltrateType"
                       :class="{'typeFiltrate-list': showFiltrateType3 === 9}">0-3岁
          </router-link>
        </li>
        <li>
          <router-link to="" @click.native="clickShowFiltrateType"
                       :class="{'typeFiltrate-list': showFiltrateType3 === 10}">4-6岁
          </router-link>
        </li>
      </div>
    </div>
    <!--    视频精选-->
    <div class="handpick">
<!--      筛选标示-->
      <div class="introduce">
        <li ref="one">图片名称</li>
        <li>视频名称</li>
        <li>地区</li>
        <li>画质</li>
        <li>视频上架时间</li>
        <li>图片存入时间</li>
        <li>功能</li>
      </div>
      <div>
        <h3>轮播</h3>
        <div class="demonstrate">
          <div>
            <li ref="one">图片名称</li>
            <li>视频名称</li>
            <li>地区</li>
            <li>画质</li>
            <li>视频上架时间</li>
            <li>图片存入时间</li>
            <li><input type="button" value="修改"></li>
          </div>
          <div>
            <li ref="one">图片名称</li>
            <li>视频名称</li>
            <li>地区</li>
            <li>画质</li>
            <li>视频上架时间</li>
            <li>图片存入时间</li>
            <li><input type="button" value="修改"></li>
          </div>
          <div>
            <li ref="one">图片名称</li>
            <li>视频名称</li>
            <li>地区</li>
            <li>画质</li>
            <li>视频上架时间</li>
            <li>图片存入时间</li>
            <li><input type="button" value="修改"></li>
          </div>
          <div>
            <li ref="one">图片名称</li>
            <li>视频名称</li>
            <li>地区</li>
            <li>画质</li>
            <li>视频上架时间</li>
            <li>图片存入时间</li>
            <li><input type="button" value="修改"></li>
          </div>
          <div>
            <li ref="one">图片名称</li>
            <li>视频名称</li>
            <li>地区</li>
            <li>画质</li>
            <li>视频上架时间</li>
            <li>图片存入时间</li>
            <li><input type="button" value="修改"></li>
          </div>
          <div>
            <li ref="one">图片名称</li>
            <li>视频名称</li>
            <li>地区</li>
            <li>画质</li>
            <li>视频上架时间</li>
            <li>图片存入时间</li>
            <li><input type="button" value="修改"></li>
          </div>
          <div>
            <li ref="one">图片名称</li>
            <li>视频名称</li>
            <li>地区</li>
            <li>画质</li>
            <li>视频上架时间</li>
            <li>图片存入时间</li>
            <li><input type="button" value="修改"></li>
          </div>
          <div>
            <li ref="one">图片名称</li>
            <li>视频名称</li>
            <li>地区</li>
            <li>画质</li>
            <li>视频上架时间</li>
            <li>图片存入时间</li>
            <li><input type="button" value="修改"></li>
          </div>
        </div>
        <h3>今日热门</h3>
        <div class="demonstrate">
          <div>
            <li ref="one">图片名称</li>
            <li>视频名称</li>
            <li>地区</li>
            <li>画质</li>
            <li>视频上架时间</li>
            <li>图片存入时间</li>
            <li><input type="button" value="修改"></li>
          </div>
          <div>
            <li ref="one">图片名称</li>
            <li>视频名称</li>
            <li>地区</li>
            <li>画质</li>
            <li>视频上架时间</li>
            <li>图片存入时间</li>
            <li><input type="button" value="修改"></li>
          </div>
          <div>
            <li ref="one">图片名称</li>
            <li>视频名称</li>
            <li>地区</li>
            <li>画质</li>
            <li>视频上架时间</li>
            <li>图片存入时间</li>
            <li><input type="button" value="修改"></li>
          </div>
          <div>
            <li ref="one">图片名称</li>
            <li>视频名称</li>
            <li>地区</li>
            <li>画质</li>
            <li>视频上架时间</li>
            <li>图片存入时间</li>
            <li><input type="button" value="修改"></li>
          </div>
          <div>
            <li ref="one">图片名称</li>
            <li>视频名称</li>
            <li>地区</li>
            <li>画质</li>
            <li>视频上架时间</li>
            <li>图片存入时间</li>
            <li><input type="button" value="修改"></li>
          </div>
          <div>
            <li ref="one">图片名称</li>
            <li>视频名称</li>
            <li>地区</li>
            <li>画质</li>
            <li>视频上架时间</li>
            <li>图片存入时间</li>
            <li><input type="button" value="修改"></li>
          </div>
          <div>
            <li ref="one">图片名称</li>
            <li>视频名称</li>
            <li>地区</li>
            <li>画质</li>
            <li>视频上架时间</li>
            <li>图片存入时间</li>
            <li><input type="button" value="修改"></li>
          </div>
          <div>
            <li ref="one">图片名称</li>
            <li>视频名称</li>
            <li>地区</li>
            <li>画质</li>
            <li>视频上架时间</li>
            <li>图片存入时间</li>
            <li><input type="button" value="修改"></li>
          </div>
        </div>
        <h3>电视剧</h3>
        <div class="demonstrate">
          <div>
            <li ref="one">图片名称</li>
            <li>视频名称</li>
            <li>地区</li>
            <li>画质</li>
            <li>视频上架时间</li>
            <li>图片存入时间</li>
            <li><input type="button" value="修改"></li>
          </div>
          <div>
            <li ref="one">图片名称</li>
            <li>视频名称</li>
            <li>地区</li>
            <li>画质</li>
            <li>视频上架时间</li>
            <li>图片存入时间</li>
            <li><input type="button" value="修改"></li>
          </div>
          <div>
            <li ref="one">图片名称</li>
            <li>视频名称</li>
            <li>地区</li>
            <li>画质</li>
            <li>视频上架时间</li>
            <li>图片存入时间</li>
            <li><input type="button" value="修改"></li>
          </div>
          <div>
            <li ref="one">图片名称</li>
            <li>视频名称</li>
            <li>地区</li>
            <li>画质</li>
            <li>视频上架时间</li>
            <li>图片存入时间</li>
            <li><input type="button" value="修改"></li>
          </div>
          <div>
            <li ref="one">图片名称</li>
            <li>视频名称</li>
            <li>地区</li>
            <li>画质</li>
            <li>视频上架时间</li>
            <li>图片存入时间</li>
            <li><input type="button" value="修改"></li>
          </div>
          <div>
            <li ref="one">图片名称</li>
            <li>视频名称</li>
            <li>地区</li>
            <li>画质</li>
            <li>视频上架时间</li>
            <li>图片存入时间</li>
            <li><input type="button" value="修改"></li>
          </div>
          <div>
            <li ref="one">图片名称</li>
            <li>视频名称</li>
            <li>地区</li>
            <li>画质</li>
            <li>视频上架时间</li>
            <li>图片存入时间</li>
            <li><input type="button" value="修改"></li>
          </div>
          <div>
            <li ref="one">图片名称</li>
            <li>视频名称</li>
            <li>地区</li>
            <li>画质</li>
            <li>视频上架时间</li>
            <li>图片存入时间</li>
            <li><input type="button" value="修改"></li>
          </div>
        </div>
        <h3>电影</h3>
        <div class="demonstrate">
          <div>
            <li ref="one">图片名称</li>
            <li>视频名称</li>
            <li>地区</li>
            <li>画质</li>
            <li>视频上架时间</li>
            <li>图片存入时间</li>
            <li><input type="button" value="修改"></li>
          </div>
          <div>
            <li ref="one">图片名称</li>
            <li>视频名称</li>
            <li>地区</li>
            <li>画质</li>
            <li>视频上架时间</li>
            <li>图片存入时间</li>
            <li><input type="button" value="修改"></li>
          </div>
          <div>
            <li ref="one">图片名称</li>
            <li>视频名称</li>
            <li>地区</li>
            <li>画质</li>
            <li>视频上架时间</li>
            <li>图片存入时间</li>
            <li><input type="button" value="修改"></li>
          </div>
          <div>
            <li ref="one">图片名称</li>
            <li>视频名称</li>
            <li>地区</li>
            <li>画质</li>
            <li>视频上架时间</li>
            <li>图片存入时间</li>
            <li><input type="button" value="修改"></li>
          </div>
          <div>
            <li ref="one">图片名称</li>
            <li>视频名称</li>
            <li>地区</li>
            <li>画质</li>
            <li>视频上架时间</li>
            <li>图片存入时间</li>
            <li><input type="button" value="修改"></li>
          </div>
          <div>
            <li ref="one">图片名称</li>
            <li>视频名称</li>
            <li>地区</li>
            <li>画质</li>
            <li>视频上架时间</li>
            <li>图片存入时间</li>
            <li><input type="button" value="修改"></li>
          </div>
          <div>
            <li ref="one">图片名称</li>
            <li>视频名称</li>
            <li>地区</li>
            <li>画质</li>
            <li>视频上架时间</li>
            <li>图片存入时间</li>
            <li><input type="button" value="修改"></li>
          </div>
          <div>
            <li ref="one">图片名称</li>
            <li>视频名称</li>
            <li>地区</li>
            <li>画质</li>
            <li>视频上架时间</li>
            <li>图片存入时间</li>
            <li><input type="button" value="修改"></li>
          </div>
        </div>
        <h3>动漫</h3>
        <div class="demonstrate">
          <div>
            <li ref="one">图片名称</li>
            <li>视频名称</li>
            <li>地区</li>
            <li>画质</li>
            <li>视频上架时间</li>
            <li>图片存入时间</li>
            <li><input type="button" value="修改"></li>
          </div>
          <div>
            <li ref="one">图片名称</li>
            <li>视频名称</li>
            <li>地区</li>
            <li>画质</li>
            <li>视频上架时间</li>
            <li>图片存入时间</li>
            <li><input type="button" value="修改"></li>
          </div>
          <div>
            <li ref="one">图片名称</li>
            <li>视频名称</li>
            <li>地区</li>
            <li>画质</li>
            <li>视频上架时间</li>
            <li>图片存入时间</li>
            <li><input type="button" value="修改"></li>
          </div>
          <div>
            <li ref="one">图片名称</li>
            <li>视频名称</li>
            <li>地区</li>
            <li>画质</li>
            <li>视频上架时间</li>
            <li>图片存入时间</li>
            <li><input type="button" value="修改"></li>
          </div>
          <div>
            <li ref="one">图片名称</li>
            <li>视频名称</li>
            <li>地区</li>
            <li>画质</li>
            <li>视频上架时间</li>
            <li>图片存入时间</li>
            <li><input type="button" value="修改"></li>
          </div>
          <div>
            <li ref="one">图片名称</li>
            <li>视频名称</li>
            <li>地区</li>
            <li>画质</li>
            <li>视频上架时间</li>
            <li>图片存入时间</li>
            <li><input type="button" value="修改"></li>
          </div>
          <div>
            <li ref="one">图片名称</li>
            <li>视频名称</li>
            <li>地区</li>
            <li>画质</li>
            <li>视频上架时间</li>
            <li>图片存入时间</li>
            <li><input type="button" value="修改"></li>
          </div>
          <div>
            <li ref="one">图片名称</li>
            <li>视频名称</li>
            <li>地区</li>
            <li>画质</li>
            <li>视频上架时间</li>
            <li>图片存入时间</li>
            <li><input type="button" value="修改"></li>
          </div>
        </div>
        <h3>综艺</h3>
        <div class="demonstrate">
          <div>
            <li ref="one">图片名称</li>
            <li>视频名称</li>
            <li>地区</li>
            <li>画质</li>
            <li>视频上架时间</li>
            <li>图片存入时间</li>
            <li><input type="button" value="修改"></li>
          </div>
          <div>
            <li ref="one">图片名称</li>
            <li>视频名称</li>
            <li>地区</li>
            <li>画质</li>
            <li>视频上架时间</li>
            <li>图片存入时间</li>
            <li><input type="button" value="修改"></li>
          </div>
          <div>
            <li ref="one">图片名称</li>
            <li>视频名称</li>
            <li>地区</li>
            <li>画质</li>
            <li>视频上架时间</li>
            <li>图片存入时间</li>
            <li><input type="button" value="修改"></li>
          </div>
          <div>
            <li ref="one">图片名称</li>
            <li>视频名称</li>
            <li>地区</li>
            <li>画质</li>
            <li>视频上架时间</li>
            <li>图片存入时间</li>
            <li><input type="button" value="修改"></li>
          </div>
          <div>
            <li ref="one">图片名称</li>
            <li>视频名称</li>
            <li>地区</li>
            <li>画质</li>
            <li>视频上架时间</li>
            <li>图片存入时间</li>
            <li><input type="button" value="修改"></li>
          </div>
          <div>
            <li ref="one">图片名称</li>
            <li>视频名称</li>
            <li>地区</li>
            <li>画质</li>
            <li>视频上架时间</li>
            <li>图片存入时间</li>
            <li><input type="button" value="修改"></li>
          </div>
          <div>
            <li ref="one">图片名称</li>
            <li>视频名称</li>
            <li>地区</li>
            <li>画质</li>
            <li>视频上架时间</li>
            <li>图片存入时间</li>
            <li><input type="button" value="修改"></li>
          </div>
          <div>
            <li ref="one">图片名称</li>
            <li>视频名称</li>
            <li>地区</li>
            <li>画质</li>
            <li>视频上架时间</li>
            <li>图片存入时间</li>
            <li><input type="button" value="修改"></li>
          </div>
        </div>
        <h3>纪录片</h3>
        <div class="demonstrate">
          <div>
            <li ref="one">图片名称</li>
            <li>视频名称</li>
            <li>地区</li>
            <li>画质</li>
            <li>视频上架时间</li>
            <li>图片存入时间</li>
            <li><input type="button" value="修改"></li>
          </div>
          <div>
            <li ref="one">图片名称</li>
            <li>视频名称</li>
            <li>地区</li>
            <li>画质</li>
            <li>视频上架时间</li>
            <li>图片存入时间</li>
            <li><input type="button" value="修改"></li>
          </div>
          <div>
            <li ref="one">图片名称</li>
            <li>视频名称</li>
            <li>地区</li>
            <li>画质</li>
            <li>视频上架时间</li>
            <li>图片存入时间</li>
            <li><input type="button" value="修改"></li>
          </div>
          <div>
            <li ref="one">图片名称</li>
            <li>视频名称</li>
            <li>地区</li>
            <li>画质</li>
            <li>视频上架时间</li>
            <li>图片存入时间</li>
            <li><input type="button" value="修改"></li>
          </div>
          <div>
            <li ref="one">图片名称</li>
            <li>视频名称</li>
            <li>地区</li>
            <li>画质</li>
            <li>视频上架时间</li>
            <li>图片存入时间</li>
            <li><input type="button" value="修改"></li>
          </div>
          <div>
            <li ref="one">图片名称</li>
            <li>视频名称</li>
            <li>地区</li>
            <li>画质</li>
            <li>视频上架时间</li>
            <li>图片存入时间</li>
            <li><input type="button" value="修改"></li>
          </div>
          <div>
            <li ref="one">图片名称</li>
            <li>视频名称</li>
            <li>地区</li>
            <li>画质</li>
            <li>视频上架时间</li>
            <li>图片存入时间</li>
            <li><input type="button" value="修改"></li>
          </div>
          <div>
            <li ref="one">图片名称</li>
            <li>视频名称</li>
            <li>地区</li>
            <li>画质</li>
            <li>视频上架时间</li>
            <li>图片存入时间</li>
            <li><input type="button" value="修改"></li>
          </div>
        </div>
      </div>

    </div>
    <!--    -->
  </div>
</template>

<script>
    export default {
        name: "BackgroundExhibition",
        data() {
            return {
                showInser: false,
                showFiltrate: 0,
                showFiltrateType: 0,
                showFiltrateType1: 0,
                showFiltrateType2: 0,
                showFiltrateType3: 0,
                showFiltrateType4: 0
            }
        },
        mounted() {
            console.log(this.$refs.one.textContent)
        },
        methods: {
            onclickShowInser: function () {
                this.showInser = !this.showInser;
            },
            clickShowFiltrate: function (event) {
                let sow = event.currentTarget.firstChild.nodeValue.trim();
                switch (sow) {
                    case '精选':
                        this.showFiltrate = 0;
                        break;
                    case '电视剧':
                        this.showFiltrate = 1;
                        break;
                    case '电影':
                        this.showFiltrate = 2;
                        break;
                    case '动漫':
                        this.showFiltrate = 3;
                        break;
                    case '少儿':
                        this.showFiltrate = 4;
                        break;
                    case '纪录片':
                        this.showFiltrate = 5;
                        break;
                }
            },
            clickShowFiltrateType: function (event) {
                let sow = event.currentTarget.firstChild.nodeValue.trim();
                switch (sow) {
                    case '电视剧精选':
                        this.showFiltrateType = 0;
                        break;
                    case '海外剧':
                        this.showFiltrateType = 1;
                        break;
                    case '网路剧':
                        this.showFiltrateType = 2;
                        break;
                    case '年度大剧':
                        this.showFiltrateType = 3;
                        break;
                    case '口碑好剧':
                        this.showFiltrateType = 4;
                        break;
                    case '免费热剧':
                        this.showFiltrateType = 5;
                        break;
                    case '军旅抗战':
                        this.showFiltrateType = 6;
                        break;
                    case '戏剧':
                        this.showFiltrateType = 7;
                        break;
                    case '都市生活':
                        this.showFiltrateType = 8;
                        break;
                    case '武侠江湖':
                        this.showFiltrateType = 9;
                        break;
                    case '罪案谍战':
                        this.showFiltrateType = 10;
                        break;
                    case '古装历史':
                        this.showFiltrateType = 11;
                        break;

                    case '动漫精选':
                        this.showFiltrateType1 = 0;
                        break;
                    case '国漫':
                        this.showFiltrateType1 = 1;
                        break;
                    case '日漫':
                        this.showFiltrateType1 = 2;
                        break;
                    case '经典':
                        this.showFiltrateType1 = 3;
                        break;
                    case '治愈':
                        this.showFiltrateType1 = 4;
                        break;
                    case '热血':
                        this.showFiltrateType1 = 5;
                        break;
                    case '青春':
                        this.showFiltrateType1 = 6;
                        break;
                    case '战斗':
                        this.showFiltrateType1 = 7;
                        break;
                    case '推理':
                        this.showFiltrateType1 = 8;
                        break;
                    case '魔幻':
                        this.showFiltrateType1 = 9;
                        break;
                    case '科幻':
                        this.showFiltrateType1 = 10;
                        this.showFiltrateType2 = 10;
                        break;

                    case '少儿精选':
                        this.showFiltrateType3 = 0;
                        break;
                    case '益智':
                        this.showFiltrateType3 = 1;
                        break;
                    case '儿歌':
                        this.showFiltrateType3 = 2;
                        break;
                    case '玩具':
                        this.showFiltrateType3 = 3;
                        break;
                    case '英语':
                        this.showFiltrateType3 = 4;
                        break;
                    case '手工·绘画':
                        this.showFiltrateType3 = 5;
                        break;
                    case '魔幻·科幻':
                        this.showFiltrateType3 = 6;
                        break;
                    case '男孩':
                        this.showFiltrateType3 = 7;
                        break;
                    case '女孩':
                        this.showFiltrateType3 = 8;
                        break;
                    case '0-3岁':
                        this.showFiltrateType3 = 9;
                        break;
                    case '4-6岁':
                        this.showFiltrateType3 = 10;
                        break;

                    case '电影精选':
                        this.showFiltrateType2 = 0;
                        break;
                    case '院线大片':
                        this.showFiltrateType2 = 1;
                        break;
                    case '自制电影':
                        this.showFiltrateType2 = 2;
                        break;
                    case '动作':
                        this.showFiltrateType2 = 3;
                        break;
                    case '喜剧':
                        this.showFiltrateType2 = 4;
                        break;
                    case '预告片':
                        this.showFiltrateType2 = 5;
                        break;
                    case '犯罪':
                        this.showFiltrateType2 = 6;
                        break;
                    case '爱情':
                        this.showFiltrateType2 = 7;
                        break;
                    case '独播':
                        this.showFiltrateType2 = 8;
                        break;
                }
            },

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


  #backgroundExhibition {
    width: 94.8%;
    /*background-color: #ffc996;*/
    margin-left: 10px;
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
