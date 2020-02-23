import Vue from 'vue'
import VueRouter from "vue-router";
// 后台管理
import AdminUser from "../pages/priv/leap/background/user/AdminUser";
import AdminManage from "../pages/priv/leap/background/administrator/AdminManage";
import AdminVideo from "../pages/priv/leap/background/video-module/AdminVideo";
import BackgroundHome from "../components/pirv/leap/background/BackgroundHome";
import InsertVideo from "../pages/priv/leap/background/video-module/InsertVideo";
// 用户界面
import UserHome from '../components/pirv/leap/user/UserHome'
import Tv from '../pages/priv/leap/user/video-type/ty/Tv'
import Movie from '../pages/priv/leap/user/video-type/Movie'
import Variety from '../pages/priv/leap/user/video-type/Variety'
import Cartoon from '../pages/priv/leap/user/video-type/Cartoon'
import Children from '../pages/priv/leap/user/video-type/Children'
import Member from '../pages/priv/leap/user/video-function/Member'
import UserInfo from '../pages/priv/leap/user/video-function/UserInfo'
import Uploading from '../pages/priv/leap/user/video-function/Uploading'
import Login from '../pages/priv/leap/user/video-function/Login'
//其他界面
import MyVideo from '../pages/priv/leap/user/utils/MyVideo'
import VideoSearch from '../pages/priv/leap/user/utils/search/VideoSearch'
import Storage from '../pages/priv/leap/background/video-module/Storage'
import BackgroundExhibition from '../pages/priv/leap/background/video-module/BackgroundExhibition'
import Notification from '../pages/priv/leap/background/user/Notification'
import Modification from '../pages/priv/leap/background/video-module/Modification'

export default new VueRouter({
  routes: [
    {
      path: '/leap/BackgroundHome',
      component: BackgroundHome,    // 后台主界面
      children: [
        {path: '/leap/adminUser', component: AdminUser},      // 用户管理界面
        {path: '/leap/notification', component: Notification},      // 用户通知界面
        {path: '/leap/modification', component: Modification},      // 用户修改界面
        {path: '/leap/adminManage', component: AdminManage},  // 管理员界面
        {path: '/leap/storage', component: Storage},          // 视频上下架界面
        {path: '/leap/backgroundExhibition', component: BackgroundExhibition},          // 视频展示
        {
          path: '/leap/adminVideo',
          component: AdminVideo,      // 视频管理界面
          children: [
            {path: '/leap/insertVideo', component: InsertVideo}   // 视频添加界面
          ]
        }
      ]
    },                // 后台界面

    {path: '/leap/myVideo', component:MyVideo},           // 视频播放界面
    {path: '/leap/videoSearch', component: VideoSearch},  // 搜索

    {path: '/leap/userHome', component: UserHome},    // 用户主界面
    {path: '/', redirect: '/leap/userHome'},          // 定义首页位置
    {path: '/leap/ty', component: Tv},                // 电视界面
    {path: '/leap/movie', component: Movie},          // 电影界面
    {path: '/leap/variety', component: Variety},      // 综艺
    {path: '/leap/cartoon', component: Cartoon},      // 动漫
    {path: '/leap/children', component: Children},    // 少儿
    {path: '/leap/member', component: Member},        // 会员
    {path: '/leap/userInfo', component: UserInfo},      // 历史记录
    {path: '/leap/uploading', component: Uploading},  // 上传
    {path: '/leap/login', component: Login}          // 登录

  ],
  mode: 'history'
});

