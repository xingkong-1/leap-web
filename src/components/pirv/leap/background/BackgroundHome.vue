<!-- 管理员主界面 -->
<template>
  <div id="Administrator">
    <div v-show="true" class="Admin">
      <div class="treeBackground">
        <div class="userBackground">
          <li @click="tree($event)">
            <router-link to="/leap/adminUser">用户管理</router-link>
          </li>
          <li>
            <router-link to="/leap/adminUser">管理用户</router-link>
          </li>
          <li>
            <router-link to="/leap/notification">用户通知</router-link>
          </li>
          <li>
            <router-link to="">会员管理</router-link>
          </li>
        </div>
        <div class="userBackground">
          <li @click="tree($event)">
            <router-link to="/leap/adminVideo">视频管理</router-link>
          </li>
          <li>
            <router-link to="/leap/adminVideo">管理视频</router-link>
          </li>
          <li>
            <router-link to="/leap/storage">视频上下架</router-link>
          </li>
          <li>
            <router-link to="/leap/backgroundExhibition">视频展示</router-link>
          </li>
        </div>
        <div class="userBackground">
          <li @click="tree($event)">
            <router-link to="/leap/adminManage">管理员管理</router-link>
          </li>
          <li>
            <router-link to="">管理员管理</router-link>
          </li>
          <li>
            <router-link to="">权限管理</router-link>
          </li>
        </div>
      </div>


    </div>
    <router-view></router-view>
  </div>


</template>

<script>
    export default {
        name: "Administrator",
        data() {
            return {
                num: 0
            }
        },
        methods: {
            tree: function (event) {
                let hei = event.currentTarget.parentElement;
                console.log(hei.childElementCount);
                let range = (hei.childElementCount * 22 + 32);
                if (this.num === 1) {
                    hei.style = 'height: 35px;';
                    this.num = 0
                } else {
                    hei.style = 'height: ' + range + 'px;';
                    this.num = 1
                }

            }
        }
    }
</script>

<style scoped>
  @import "../../../../assets/css/background/tree.css";

  #Administrator {
    width: 100%;
    height: 100%;
    /*background-color: #6e89ff;*/
  }

  .Admin {
    float: left;
    margin-left: 5px;
  }
</style>
