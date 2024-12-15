<template>
<div style="background-color:#f7f7f7">
  <div class="admin-title">
    <p>云芯问答平台</p>
  </div> 
  <div class="aside-title">问题管理</div>
<div class="back">
    
    <backtable></backtable>
</div>
</div>
</template>

<script>
import Backtable from '../components/backtable.vue'


export default {
  name:'back',
  components: {
    Backtable,

  }
}
</script>

<style>
.back{
    padding: 10px 150px 50px 150px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    background-color: #f7f7f7;
}
.admin-title{
    width: 600px;
    margin: 60px auto;
    color:#484dc3;
    font-size: 50px;
}
.aside-title{
    margin: 20px 150px;
    color:#484dc3;
    font-size: 25px;
    font-weight:550;
}
</style>