<template>
  <div class="Register">
    <SubNav1></SubNav1>
    <Accountregister></Accountregister>
  </div>
</template>

<script>
import SubNav1 from "../components/SubNav1";
import Accountregister from "../components/Account-register"
export default {
  name: "Register",
  components:{
    SubNav1,
    Accountregister
  }
}
</script>

<style scoped>
.Register{
  background-color: #F0F0F0;
  height:  1080px;
}
</style>