<template>
  <div id="UserHome">
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

    <!--    主体-->
    <div class="user-home-homepage">
      <!--      首页推送-->
      <div class="user-home-push">
        <swiper :options="swiperOption">
          <swiper-slide>
            <img @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/澳门人家">
          </swiper-slide>
          <swiper-slide>
            <img @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/不知东方即白">
          </swiper-slide>
          <swiper-slide>
            <img @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/古剑奇谭">
          </swiper-slide>
          <swiper-slide>
            <img @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/何以笙箫默">
          </swiper-slide>
          <swiper-slide>
            <img @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/花千骨">
          </swiper-slide>
          <swiper-slide>
            <img @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/惹不起的殿下大人">
          </swiper-slide>
          <swiper-slide>
            <img @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/双月之城">
          </swiper-slide>
          <swiper-slide>
            <img @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/鸡毛飞上天">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <!--      类型推送-->
      <div class="user-home-type">
        <div class="user-home-ty">
          <li>
            <router-link to="/leap/ty#choiceness">电视剧</router-link>
          </li>
          <li>
            <router-link to="" @click.native="typeVideo">海外剧</router-link>
          </li>
          <li>
            <router-link to="" @click.native="typeVideo">网络剧</router-link>
          </li>
        </div>
        <div class="user-home-movie">
          <li>
            <router-link to="/leap/movie">电影</router-link>
          </li>
          <li>院线大片</li>
          <li>自制电影</li>
        </div>
        <div class="user-home-variety">
          <li>
            <router-link to="/leap/variety">综艺</router-link>
          </li>
          <li>独播</li>
          <li>养成</li>
        </div>
        <div class="user-home-cartoon">
          <li>
            <router-link to="/leap/cartoon">动漫</router-link>
          </li>
          <li>国漫</li>
          <li>日漫</li>
        </div>
        <div class="user-home-children">
          <li>
            <router-link to="/leap/children">少儿</router-link>
          </li>
          <li>益智</li>
          <li>儿歌</li>
        </div>
      </div>

      <div class="user-home-type-hot">
        <!--        热门播放推荐-->
        <div class="user-home-hot">
          <h2 class="user-home-headline">今日热门</h2>
          <div>
            <li class="user-home-one">
              <img @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/古剑奇谭"
                   class="user-home-img"></img>
              <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/古剑奇谭"
                           class="user-home-img">古剑奇谭
              </router-link>
            </li>
            <li>
              <img @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/白鹿原"
                   class="user-home-img"></img>
              <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/白鹿原"
                           class="user-home-img">白鹿原
              </router-link>
            </li>
            <li>
              <img @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/《我和我的祖国》"
                   class="user-home-img"></img>
              <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/《我和我的祖国》"
                           class="user-home-img">《我和我的祖国》
              </router-link>
            </li>
            <li>
              <img @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/双月之城"
                   class="user-home-img"></img>
              <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/双月之城"
                           class="user-home-img">双月之城
              </router-link>
            </li>
            <li>
              <img @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/大秦帝国"
                   class="user-home-img"></img>
              <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/大秦帝国"
                           class="user-home-img">大秦帝国
              </router-link>
            </li>
            <li>
              <img @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/翻译官"
                   class="user-home-img"></img>
              <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/翻译官"
                           class="user-home-img">翻译官
              </router-link>
            </li>
          </div>
        </div>

        <!--        电视剧-->
        <div class="user-home-hot">
          <div class="user-home-video">
            <h2 class="user-home-headline">电视剧</h2>
            <li class="user-home-one">
              <img @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/鸡毛飞上天"
                   class="user-home-img"></img>
              <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/鸡毛飞上天"
                           class="user-home-img">鸡毛飞上天
              </router-link>
            </li>
            <li>
              <img @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/将军在上"
                   class="user-home-img"></img>
              <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/将军在上"
                           class="user-home-img">将军在上
              </router-link>
            </li>
            <li>
              <img @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/何以笙箫默"
                   class="user-home-img"></img>
              <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/何以笙箫默"
                           class="user-home-img">何以笙箫默
              </router-link>
            </li>
            <li>
              <img @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/花千骨"
                   class="user-home-img"></img>
              <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/花千骨"
                           class="user-home-img">花千骨
              </router-link>
            </li>
            <li class="user-home-five">
              <img @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/不知东方即白"
                   class="user-home-img"></img>
              <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/不知东方即白"
                           class="user-home-img">不知东方即白
              </router-link>
            </li>
            <li>
              <img @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/抗日女侠"
                   class="user-home-img"></img>
              <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/抗日女侠"
                           class="user-home-img">抗日女侠
              </router-link>
            </li>
            <li>
              <img @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/抗倭侠侣"
                   class="user-home-img"></img>
              <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/抗倭侠侣"
                           class="user-home-img">抗倭侠侣
              </router-link>
            </li>
            <li>
              <img @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/烈火雄心"
                   class="user-home-img"></img>
              <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/烈火雄心"
                           class="user-home-img">烈火雄心
              </router-link>
            </li>
          </div>
          <div class="user-home-ranking">
            <h2>电视剧排行</h2>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
          </div>
        </div>
        <!--        电影-->
        <div class="user-home-hot">
          <div class="user-home-video">
            <h2 class="user-home-headline">电影</h2>
            <li class="user-home-one">
              <img @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/《我和我的祖国》"
                   class="user-home-img"></img>
              <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/《我和我的祖国》"
                           class="user-home-img">《我和我的祖国》
              </router-link>
            </li>
            <li>
              <img @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/《我和我的祖国》"
                   class="user-home-img"></img>
              <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/《我和我的祖国》"
                           class="user-home-img">《我和我的祖国》
              </router-link>
            </li>
            <li>
              <img @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/《我和我的祖国》"
                   class="user-home-img"></img>
              <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/《我和我的祖国》"
                           class="user-home-img">《我和我的祖国》
              </router-link>
            </li>
            <li>
              <img @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/《我和我的祖国》"
                   class="user-home-img"></img>
              <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/《我和我的祖国》"
                           class="user-home-img">《我和我的祖国》
              </router-link>
            </li>
            <li class="user-home-five">
              <img @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/《我和我的祖国》"
                   class="user-home-img"></img>
              <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/《我和我的祖国》"
                           class="user-home-img">《我和我的祖国》
              </router-link>
            </li>
            <li>
              <img @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/《我和我的祖国》"
                   class="user-home-img"/>
              <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/《我和我的祖国》"
                           class="user-home-img">《我和我的祖国》
              </router-link>
            </li>
            <li>
              <img @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/《我和我的祖国》"
                   class="user-home-img"/>
              <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/《我和我的祖国》"
                           class="user-home-img">《我和我的祖国》
              </router-link>
            </li>
            <li>
              <img @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/《我和我的祖国》"
                   class="user-home-img"/>
              <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/《我和我的祖国》"
                           class="user-home-img">《我和我的祖国》
              </router-link>
            </li>
          </div>
          <div class="user-home-ranking">
            <h2>电影排行</h2>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
          </div>
        </div>
        <!--        综艺-->
        <div class="user-home-hot">
          <div class="user-home-video">
            <h2 class="user-home-headline">综艺</h2>
            <li class="user-home-one">
              <img @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/致青春"
                   class="user-home-img"></img>
              <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/致青春"
                           class="user-home-img">致青春
              </router-link>
            </li>
            <li>
              <img @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/致青春"
                   class="user-home-img"></img>
              <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/致青春"
                           class="user-home-img">致青春
              </router-link>
            </li>
            <li>
              <img @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/致青春"
                   class="user-home-img"></img>
              <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/致青春"
                           class="user-home-img">致青春
              </router-link>
            </li>
            <li>
              <img @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/致青春"
                   class="user-home-img"></img>
              <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/致青春"
                           class="user-home-img">致青春
              </router-link>
            </li>
            <li class="user-home-five">
              <img @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/致青春"
                   class="user-home-img"></img>
              <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/致青春"
                           class="user-home-img">致青春
              </router-link>
            </li>
            <li>
              <img @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/致青春"
                   class="user-home-img"></img>
              <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/致青春"
                           class="user-home-img">致青春
              </router-link>
            </li>
            <li>
              <img @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/致青春"
                   class="user-home-img"></img>
              <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/致青春"
                           class="user-home-img">致青春
              </router-link>
            </li>
            <li>
              <img @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/致青春"
                   class="user-home-img"></img>
              <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/致青春"
                           class="user-home-img">致青春
              </router-link>
            </li>
          </div>
          <div class="user-home-ranking">
            <h2>综艺排行</h2>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
          </div>
        </div>
        <!--        动漫-->
        <div class="user-home-hot">
          <div class="user-home-video">
            <h2 class="user-home-headline">动漫</h2>
            <li class="user-home-one">
              <img @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/双月之城"
                   class="user-home-img"></img>
              <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/双月之城"
                           class="user-home-img">双月之城
              </router-link>
            </li>
            <li>
              <img @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/双月之城"
                   class="user-home-img"></img>
              <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/双月之城"
                           class="user-home-img">双月之城
              </router-link>
            </li>
            <li>
              <img @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/双月之城"
                   class="user-home-img"></img>
              <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/双月之城"
                           class="user-home-img">双月之城
              </router-link>
            </li>
            <li>
              <img @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/双月之城"
                   class="user-home-img"></img>
              <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/双月之城"
                           class="user-home-img">双月之城
              </router-link>
            </li>
            <li class="user-home-five">
              <img @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/双月之城"
                   class="user-home-img"></img>
              <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/双月之城"
                           class="user-home-img">双月之城
              </router-link>
            </li>
            <li>
              <img @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/双月之城"
                   class="user-home-img"></img>
              <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/双月之城"
                           class="user-home-img">双月之城
              </router-link>
            </li>
            <li>
              <img @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/双月之城"
                   class="user-home-img"></img>
              <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/双月之城"
                           class="user-home-img">双月之城
              </router-link>
            </li>
            <li>
              <img @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/双月之城"
                   class="user-home-img"></img>
              <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/双月之城"
                           class="user-home-img">双月之城
              </router-link>
            </li>
          </div>
          <div class="user-home-ranking">
            <h2>动漫排行</h2>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
          </div>
        </div>
        <!--        少儿-->
        <div class="user-home-hot">
          <div class="user-home-video">
            <h2 class="user-home-headline">少儿</h2>
            <li class="user-home-one">
              <img @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/领风者"
                   class="user-home-img"></img>
              <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/领风者"
                           class="user-home-img">领风者
              </router-link>
            </li>
            <li>
              <img @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/领风者"
                   class="user-home-img"></img>
              <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/领风者"
                           class="user-home-img">领风者
              </router-link>
            </li>
            <li>
              <img @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/领风者"
                   class="user-home-img"></img>
              <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/领风者"
                           class="user-home-img">领风者
              </router-link>
            </li>
            <li>
              <img @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/领风者"
                   class="user-home-img"></img>
              <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/领风者"
                           class="user-home-img">领风者
              </router-link>
            </li>
            <li class="user-home-five">
              <img @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/领风者"
                   class="user-home-img"></img>
              <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/领风者"
                           class="user-home-img">领风者
              </router-link>
            </li>
            <li>
              <img @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/领风者"
                   class="user-home-img"></img>
              <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/领风者"
                           class="user-home-img">领风者
              </router-link>
            </li>
            <li>
              <img @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/领风者"
                   class="user-home-img"></img>
              <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/领风者"
                           class="user-home-img">领风者
              </router-link>
            </li>
            <li>
              <img @click="skip($event)" src="http://localhost:8081/leap/videoNavigation/领风者"
                   class="user-home-img"></img>
              <router-link to="" @click.native="skip($event)" href="http://localhost:8081/leap/videoNavigation/领风者"
                           class="user-home-img">领风者
              </router-link>
            </li>
          </div>
          <div class="user-home-ranking">
            <h2>少儿排行</h2>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
          </div>
        </div>
      </div>
    </div>

    <!--    底层-->
    <div class="user-home-ground-floor">
      服务热线：1231422131
    </div>
  </div>
</template>

<script>
    export default {
        name: "UserHome",
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
                }
            }
        },
        methods: {
            /**
             * 将图片数据传输给后端，由后端输出数据流，展示图片
             * */
            skip: function (event) {
                let e = event.currentTarget.tagName;
                let from = new FormData();
                // 判断当前元素是否为a标签，同时将url赋值给 img变量
                let img = e === 'A' ? decodeURIComponent(event.currentTarget.href)    // 将url进行中文解码
                    : decodeURIComponent(event.currentTarget.src);
                let imgSplit = img.split("/");
                let pName = imgSplit[imgSplit.length - 1];
                from.append("pName", pName);
                // 发起axios请求
                this.axios.post(
                    '/api/videoPlayInfo', from
                ).then(
                    response => {
                        for (let dataKey in response.data) {
                            console.log(response.data[dataKey].pName)
                        }
                        this.$router.push({path: "/leap/myVideo", query: {pName: pName}})
                    }
                ).catch(
                    error => {
                        console.log(error)
                    }
                )
            },
            /**
             * 搜索页面跳转
             * */
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
            /** 视频类型跳转，同时将此类型传输过去*/
            typeVideo: function (event) {
                this.$router.push({
                    path: "/leap/ty#overseas",
                    query: {value: event.currentTarget.firstChild.nodeValue.trim()}
                })
            }
        }
    }
</script>

<style scoped>
  @import '../../../../assets/css/userhome.css';

</style>
