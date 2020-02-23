<template>
  <div id="insertVideo">
    <form>
      <label>视频名称:<input type="text" name="vName" v-model="vName"></label><br>
      <label>视频种类:
        <select @change="selectCilck($event)">
          <option disabled>未选择</option>
          <option>电视剧</option>
          <option>电影</option>
          <option>综艺</option>
          <option>动漫</option>
          <option>少儿</option>
          <option>综艺</option>
        </select>
      </label><br>
      <!--       视频类型-->
      <div>
        <!--        电视剧-->
        <div v-show="type[0].ty" class="ty-type">
          <label>偶像爱情<input type="radio" name="ty" value="偶像爱情"/></label>
          <label>古装历史<input type="radio" name="ty" value="古装历史"/></label>
          <label>玄幻史诗<input type="radio" name="ty" value="玄幻史诗"/></label>
          <label>都市生活<input type="radio" name="ty" value="都市生活"/></label>
          <label>当代主旋律<input type="radio" name="ty" value="当代主旋律"/></label>
          <label>罪案谍战<input type="radio" name="ty" value="罪案谍战"/></label>
          <label>历险科幻<input type="radio" name="ty" value="历险科幻"/></label>
          <label>军旅抗战<input type="radio" name="ty" value="军旅抗战"/></label>
          <label>喜剧<input type="radio" name="ty" value="喜剧"/></label>
          <label>武侠江湖<input type="radio" name="ty" value="武侠江湖"/></label>
          <label>青春校园<input type="radio" name="ty" value="青春校园"/></label>
          <label>时代传奇<input type="radio" name="ty" value="时代传奇"/></label>
          <label>体育竞技<input type="radio" name="ty" value="体育竞技"/></label>
          <label>真人动漫<input type="radio" name="ty" value="真人动漫"/></label>
          <label>网络剧<input type="radio" name="ty" value="网络剧"/></label>
          <label>独播<input type="radio" name="ty" value="独播"/></label>
        </div>
        <!--        电影-->
        <div v-show="type[1].movie" class="movie-type">
          <label>剧情<input type="radio" name="movie" value="剧情"/></label>
          <label>喜剧<input type="radio" name="movie" value="喜剧"/></label>
          <label>爱情<input type="radio" name="movie" value="爱情"/></label>
          <label>惊悚<input type="radio" name="movie" value="惊悚"/></label>
          <label>犯罪<input type="radio" name="movie" value="犯罪"/></label>
          <label>悬疑<input type="radio" name="movie" value="悬疑"/></label>
          <label>战争<input type="radio" name="movie" value="战争"/></label>
          <label>科幻<input type="radio" name="movie" value="科幻"/></label>
          <label>动画<input type="radio" name="movie" value="动画"/></label>
          <label>恐怖<input type="radio" name="movie" value="恐怖"/></label>
          <label>冒险<input type="radio" name="movie" value="冒险"/></label>
          <label>奇幻<input type="radio" name="movie" value="奇幻"/></label>
          <label>武侠<input type="radio" name="movie" value="武侠"/></label>
          <label>运动<input type="radio" name="movie" value="运动"/></label>
          <label>歌舞<input type="radio" name="movie" value="歌舞"/></label>
          <label>音乐<input type="radio" name="movie" value="音乐"/></label>
          <label>记录<input type="radio" name="movie" value="记录"/></label>
          <label>伦理<input type="radio" name="movie" value="伦理"/></label>
          <label>西部<input type="radio" name="movie" value="西部"/></label>
        </div>
        <!--        动漫-->
        <div v-show="type[2].cartoon" class="cartoon-type">
          <label>冒险<input type="radio" name="cartoon" value="冒险"/></label>
          <label>热血<input type="radio" name="cartoon" value="热血"/></label>
          <label>搞笑<input type="radio" name="cartoon" value="搞笑"/></label>
          <label>经典<input type="radio" name="cartoon" value="经典"/></label>
          <label>科幻<input type="radio" name="cartoon" value="科幻"/></label>
          <label>魔幻<input type="radio" name="cartoon" value="魔幻"/></label>
          <label>武侠<input type="radio" name="cartoon" value="武侠"/></label>
          <label>竞技<input type="radio" name="cartoon" value="竞技"/></label>
          <label>恋爱<input type="radio" name="cartoon" value="恋爱"/></label>
          <label>推理<input type="radio" name="cartoon" value="推理"/></label>
          <label>治愈<input type="radio" name="cartoon" value="治愈"/></label>
          <label>青春校园<input type="radio" name="cartoon" value="青春校园"/></label>
          <label>中国风<input type="radio" name="cartoon" value="中国风"/></label>
          <label>其他<input type="radio" name="cartoon" value="其他"/></label>
        </div>
        <!--        少儿-->
        <div v-show="type[3].children" class="children-type">
          <div>
            年龄
            <label>0-3岁<input type="radio" name="age" value="0-3岁"/></label>
            <label>4-6岁<input type="radio" name="age" value="4-6岁"/></label>
            <label>7-9岁<input type="radio" name="age" value="7-9岁"/></label>
            <label>10岁以上<input type="radio" name="age" value="10岁以上"/></label>
          </div>
          <div>
            性别
            <label>男孩<input type="radio" name="sex" value="0"/></label>
            <label>女孩<input type="radio" name="sex" value="1"/></label>
          </div>
          <div>
            <label>儿歌<input type="radio" name="children" value="儿歌"/></label>
            <label>益智<input type="radio" name="children" value="益智"/></label>
            <label>手工绘画<input type="radio" name="children" value="手工绘画"/></label>
            <label>玩具<input type="radio" name="children" value="玩具"/></label>
            <label>英语<input type="radio" name="children" value="英语"/></label>
            <label>早教<input type="radio" name="children" value="早教"/></label>
            <label>数学<input type="radio" name="children" value="数学"/></label>
            <label>国学<input type="radio" name="children" value="国学"/></label>
            <label>合家欢<input type="radio" name="children" value="合家欢"/></label>
            <label>冒险<input type="radio" name="children" value="冒险"/></label>
            <label>交通工具<input type="radio" name="children" value="交通工具"/></label>
            <label>魔幻科幻<input type="radio" name="children" value="魔幻科幻"/></label>
            <label>动物<input type="radio" name="children" value="动物"/></label>
            <label>真人特摄<input type="radio" name="children" value="真人特摄"/></label>
            <label>探索<input type="radio" name="children" value="探索"/></label>
            <label>其他<input type="radio" name="children" value="其他"/></label>
          </div>
        </div>
        <!--        综艺-->
        <div v-show="type[4].variety" class="variety-type">
          <label>游戏<input type="radio" name="variety" value="游戏"/></label>
          <label>音乐<input type="radio" name="variety" value="音乐"/></label>
          <label>养成<input type="radio" name="variety" value="养成"/></label>
          <label>喜剧<input type="radio" name="variety" value="喜剧"/></label>
          <label>情感<input type="radio" name="variety" value="情感"/></label>
          <label>喜剧<input type="radio" name="variety" value="喜剧"/></label>
          <label>脱口秀<input type="radio" name="variety" value="脱口秀"/></label>
          <label>表演<input type="radio" name="variety" value="表演"/></label>
          <label>体验<input type="radio" name="variety" value="体验"/></label>
          <label>文化<input type="radio" name="variety" value="文化"/></label>
          <label>美食<input type="radio" name="variety" value="美食"/></label>
          <label>职场<input type="radio" name="variety" value="职场"/></label>
          <label>体育<input type="radio" name="variety" value="体育"/></label>
          <label>潮流文化<input type="radio" name="variety" value="潮流文化"/></label>
          <label>访谈<input type="radio" name="variety" value="访谈"/></label>
          <label>生活服务<input type="radio" name="variety" value="生活服务"/></label>
          <label>萌宠<input type="radio" name="variety" value="萌宠"/></label>
          <label>质询<input type="radio" name="variety" value="质询"/></label>
          <label>晚会<input type="radio" name="variety" value="晚会"/></label>
        </div>
        <!--        纪录片-->
        <div v-show="type[5].documentary" class="documentary-type">
          <label>自然<input type="radio" name="documentary" value="自然"/></label>
          <label>美食<input type="radio" name="documentary" value="美食"/></label>
          <label>社会<input type="radio" name="documentary" value="社会"/></label>
          <label>人文<input type="radio" name="documentary" value="人文"/></label>
          <label>历史<input type="radio" name="documentary" value="历史"/></label>
          <label>军事<input type="radio" name="documentary" value="军事"/></label>
          <label>科技<input type="radio" name="documentary" value="科技"/></label>
          <label>财经<input type="radio" name="documentary" value="财经"/></label>
          <label>探险<input type="radio" name="documentary" value="探险"/></label>
          <label>罪案<input type="radio" name="documentary" value="罪案"/></label>
          <label>竞技<input type="radio" name="documentary" value="竞技"/></label>
          <label>旅游<input type="radio" name="documentary" value="旅游"/></label>
        </div>
      </div>
      <!--  地区-->
      <div>地区:
        <label>
          大陆<input name="vRegion" value="大陆" type="radio">
        </label>
        <label>
          台湾<input name="vRegion" value="台湾" type="radio">
        </label>
        <label>
          香港<input name="vRegion" value="香港" type="radio">
        </label>
        <label>
          美国<input name="vRegion" value="美国" type="radio">
        </label>
        <label>
          英国<input name="vRegion" value="英国" type="radio">
        </label>
        <label>
          法国<input name="vRegion" value="法国" type="radio">
        </label>
        <label>
          日本<input name="vRegion" value="日本" type="radio">
        </label>
        <label>
          韩国<input name="vRegion" value="韩国" type="radio">
        </label>
        <label>
          泰国<input name="vRegion" value="泰国" type="radio">
        </label>
      </div>
      <label>视频上映时间:<input type="date" v-model="vDateIssued" placeholder="2011-10-10 10:11:01"></label><br>
      <label>视频简介:<textarea v-model="viIntro"></textarea></label><br>
      <label>视频备注：<input type="text" v-model="vRemark"></label><br>

      <div class="file">选择海报<input type="file" ref="poster" multiple></div>
      <br>
      <div class="file">选择视频<input type="file" ref="fi" multiple></div>
      <br>
      <input class="btu" type="button" @click="post" value="上传">
    </form>
  </div>
</template>

<script>
    export default {
        name: "insertVideo",
        data() {
            return {
                vName: '',
                viIntro: '',
                vRemark: '',
                vRegion: '',
                vType: '',
                vVideoType: '电视剧',
                vDateIssued: '',
                viSex: '',
                viAge: '',
                typeName: 'ty',
                type: [
                    {ty: true},
                    {movie: false},
                    {cartoon: false},
                    {children: false},
                    {variety: false},
                    {documentary: false}
                ]
            }
        },
        methods: {
            post: function () {
                this.reNum();
                let file = this.$refs.fi.files[0];
                let picture = this.$refs.poster.files[0];
                let formData = new FormData();
                formData.append("vName", this.vName);
                formData.append("vVideoType", this.vVideoType);
                formData.append("vType", this.vType);
                formData.append("vRegion", this.vRegion);
                formData.append("viIntro", this.viIntro);
                formData.append("vRemark", this.vRemark);
                formData.append("vDateIssued", this.vDateIssued);
                formData.append("viAge", this.viAge);
                formData.append("viSex", this.viSex);
                formData.append("file", file);
                formData.append("picture", picture);

                this.axios.post(
                    '/api/insertVideo', formData
                ).then(
                    response => {
                        console.log(response.data + " :请求成功")
                    }
                ).catch(
                    error => {
                        console.log(error, '请求失败')
                    }
                )
            },
            /*
            * 判断视频种类
             */
            selectCilck: function (e) {
                let videoType = e.currentTarget.value;

                this.vVideoType = videoType;
                switch (videoType) {
                    case '电视剧':
                        this.isType('ty');
                        break;
                    case '电影':
                        this.isType('movie');
                        break;
                    case '动漫':
                        this.isType('cartoon');
                        break;
                    case '少儿':
                        this.isType('children');
                        break;
                    case '综艺':
                        this.isType('variety');
                        break;
                    case '纪录片':
                        this.isType('documentary');
                        break;
                }
            },
            /**
             * 将选中的视频种类赋值给typeName
             * 同时展示视频类型
             * */
            isType: function (typeName) {
                this.typeName = typeName;
                this.type[0].ty = typeName === 'ty';
                this.type[1].movie = typeName === 'movie';
                this.type[2].cartoon = typeName === 'cartoon';
                this.type[3].children = typeName === 'children';
                this.type[4].variety = typeName === 'variety';
                this.type[5].documentary = typeName === 'documentary';
            },
            /**
             * 根据视频种类获取单选框的值
             * */
            reNum: function () {
                let type = document.getElementsByName(this.typeName);
                let vRegion = document.getElementsByName("vRegion");
                for (let i = 0; i < type.length; i++) {
                    if (type[i].checked) {
                        this.vType = type[i].value;
                        break;
                    }
                }
                if (this.typeName === 'children') {
                    let age = document.getElementsByName("age");
                    let sex = document.getElementsByName("sex");
                    for (let i = 0; i < age.length; i++) {
                        if (age[i].checked) {
                            this.viAge = age[i].value;
                            break;
                        }
                    }
                    for (let i = 0; i < sex.length; i++) {
                        if (sex[i].checked) {
                            this.viAge = sex[i].value;
                            break;
                        }
                    }
                }
                for (let i = 0; i < vRegion.length; i++) {
                    if (vRegion[i].checked) {
                        this.vRegion = vRegion[i].value;
                        break;
                    }
                }
            }
        }
    }
</script>

<style scoped>
  #insertVideo {
    position: absolute;
    top: 30px;
    right: 300px;
    width: 700px;
    height: 570px;
    text-align: center;
    background-color: #fff;
  }

  form {
    margin-top: 50px;
  }

  form input {
    margin-top: 10px;
  }

  div {
    margin-top: 10px;
  }

  .btu {
    width: 300px;
    height: 40px;
    color: #ffffff;
    font-size: 18px;
    background-color: #00f;
  }

  .file {
    position: relative;
    display: inline-block;
    background: #D0EEFF;
    border: 1px solid #99D3F5;
    border-radius: 4px;
    padding: 4px 12px;
    overflow: hidden;
    color: #1E88C7;
    text-decoration: none;
    text-indent: 0;
    line-height: 20px;
  }

  .file input {
    position: absolute;
    font-size: 100px;
    right: 0;
    top: 0;
    opacity: 0;
  }

  .file:hover {
    background: #AADFFD;
    border-color: #78C3F3;
    color: #004974;
    text-decoration: none;
  }
</style>
