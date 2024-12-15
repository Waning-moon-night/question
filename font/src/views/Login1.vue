<template>
  <div class="Login">
    <SubNav1></SubNav1>
    <Accountlogin></Accountlogin>
  </div>
</template>

<script>
import SubNav1 from "../components/SubNav1";
import Accountlogin from "../components/Account-login"
export default {
  name: "Login",
  props:{
  },
  components:{
    SubNav1,
    Accountlogin
  },
  methods:{

  }
}
</script>

<style scoped>
.Login{
  background-color: #F0F0F0;
  height: 1080px;
}
</style>