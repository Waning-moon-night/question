<template>
  <div class="form">
   
    <div class="white-block"></div>
    <div class="mini-header">登录</div>
    <PasswordLogin ref="PasswordLogin" v-on:getInfo="getInfo"  ></PasswordLogin>
    <el-button @click="login" style="display:block;background-color:#484dc3;color: white;width: 240px;margin-left: 80px;margin-top: 20px">登录</el-button>
    <el-button plain  @click="register" style="display:block;width: 240px;margin-left: 80px;margin-top: 20px">注册</el-button>
    <br>
    <br>
    <hr>
    <div class="footer">
    </div>
  </div>
</template>

<script>
import PasswordLogin from './login/Password-login.vue'
export default {
name: "Accountlogin",
  components: {
    PasswordLogin
  },
  data() {
    return {
      currentView: 'first',
      phone:'',
      pass:''
    };
  },
  methods: {
    login () {
      var m = this.$api.index.doLogin(this.phone,this.pass)
	    m.then(ok=>{
        if(ok.code){
          alert('登陆成功')
          this.$router.push('/admin/manage')
        }else{
          alert('登陆失败')
        }
	    }) 
    },
    register() {
      this.$router.push('/admin/Register')
    },

    getInfo(val1,val2){
      this.phone = val1,
      this.pass = val2
      console.log(88888888,val1,val2);
    }
  }
}
</script>

<style scoped>
.footer{
  width: 300px;
  margin: 10px auto;
  padding-top: 100px;
  display: flex;
  justify-content: space-evenly;
}
.title{
  color: #666666;
  font-size: 12px;
}

hr{
  color:#CCCCCC;
  border: none;
  background-color: #CCCCCC;
  width: 300px;
  height: 2px;
  margin: 0 auto;
  margin-top: 20px;
}

.mini-header{
  color: #484dc3;
  font-size: 25px;
  text-align: center;
  padding-top:63px;
}

.iconfont-code{
  color: #484dc3;
  font-size: 100px;
  position: absolute;
  z-index: 1;
  margin-left: 300px;
}

.white-block{
  width: 0;
  height: 0;
  border-bottom: 100px solid white;
  border-right: 100px solid transparent;
  position: absolute;
  z-index: 2;
  margin-left: 300px;
}


.form{
  margin: 0 auto;
  width: 400px;
  height: 600px;
  background-color: white;
  margin-top: 30px;
}

.el-tabs{
  width: 280px;
  margin: 0 auto;
  margin-top: 10px;
}

</style>