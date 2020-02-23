<template>
  <div id="Modification">
    <!--    {{userData}}-->
    <div>
      <li>
        <label>
          用户名<input type="text" v-model="userData[1]">
        </label>
      </li>
      <li>
        <label>
          密码<input type="text" v-model="userData[2]">
        </label>
      </li>
      <li>
        <label>
          年龄<input type="text" v-model="userData[3]">
        </label>
      </li>
      <li>
        <label>
          性别<input type="text" v-model="userData[4]">
        </label>
      </li>
      <li>
        <label>
          电话号码<input type="text" v-model="userData[5]">
        </label>
      </li>
      <li>
        <label>
          兴趣爱好<input type="text" v-model="userData[6]">
        </label>
      </li>
      <li>
        <label>
          用户介绍<input type="text" v-model="userData[7]">
        </label>
      </li>
      <li>
        <label>
          是否会员<input type="text" v-model="userData[8]">
        </label>
      </li>
      <li>
        <input type="button" value="修改" @click="clickUser">
      </li>
    </div>

  </div>
</template>

<script>
    export default {
        name: "Modification",
        data() {
            return {
                userData: this.$route.query.userData

            }
        },
        methods: {
            clickUser: function () {
                //  将请求头设置为json格式的数据
                this.axios.defaults.headers.put['Content-Type'] = 'application/json';
                let sex = this.userData[4] === '男' ?  0: 1;
                let isMember = this.userData[8] === '是' ?  0: 1;
                this.axios.put(
                    '/api/updateUser/' + this.userData[0],
                    JSON.stringify({
                        'uId': this.userData[0],
                        'uName': this.userData[1],
                        'uPassword': this.userData[2],
                        'uAge': this.userData[3],
                        'uSex': sex,
                        'uPhone': this.userData[5],
                        'interest': this.userData[6],
                        'uIntroduce': this.userData[7],
                        'isMember': isMember,
                    })
                ).then(
                    response => {
                        console.log(response.data)
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
  li {
    list-style-type: none;
  }

  #Modification {
    position: fixed;
    top: 100px;
    left: 30%;
    width: 500px;
    height: 400px;
    background-color: #fff;
  }
</style>
