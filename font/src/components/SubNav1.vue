<template>
  <div>
    <div class="Nav">
      <div class="nav-container">
        <nav class="top-menu">
          <div class="yun-logo" @click="home">
            <h6 class="oneteam">云芯问答平台</h6>
          </div>
          <div class="right">
            <div class="login"> <router-link to="/admin" style="color: white;margin-right: 5px">登录 </router-link></div>
            <div class="register"><router-link to="/admin/Register" style="color: white"> | 注册</router-link></div>
          </div>
        </nav>
      </div>
    </div>
    <div class="yun-logo2">
      <h6 class="oneteam2">管理问题</h6>
    </div>
  </div>

</template>

<script>
export default {
name: "SubNav1",
  methods:{
    home(){
      this.$router.push('/')
    }
  }

}
</script>
<style scoped>
.iconfont-cloud{
  font-size: 4rem;
  transition: all 1s;
}
.iconfont-cloud:hover{
  transform-origin: center;
  transform:rotate(360deg)
}
.yun-logo{
  cursor: pointer;
}
.iconfont-cloud{
  font-size:60px;
}
.Nav{
  width: 100%;
  height: 80px;
  background-color: #484dc3;
}
.nav-container{
  width: 80%;
  margin: 0 auto;
}
.top-menu{
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
}
.yun-logo{
  display: flex;
}
.yun-logo2{
  margin-top: 10vh;
  display: flex;
  justify-content: center;
  transition: all 0.5s ;
}
.yun-logo2:hover{
  font-size: 45px;
}
.oneteam{
  margin-top: 4px;
  margin-left: 4px;
  align-self: center;
  color: white;
  font-size: 16px;
}
.oneteam2{
  margin-top: 4px;
  margin-left: 4px;
  align-self: center;
  color: #484dc3;
  font-size: 30px;
}
.iconfont-cloud2{
  font-size: 4rem;
}
.right{
  display: flex;
  margin-left: 2rem;
  color: white;
  position: absolute;
  right: 10vw;
}
.login{
  font-size: 1rem;
}
.register{
  font-size: 1rem;
}
</style>