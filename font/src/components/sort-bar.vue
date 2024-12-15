<template>
<div class="main">

<el-menu
  :default-active = this.activeIndex
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#484dc3"
  text-color="#f7f7f7"
  active-text-color="#fff">
    <el-menu-item index="1"><p @click="gogo()">返回首页</p></el-menu-item>
    <el-menu-item index="10" ><p @click="gogo(10,16)">财经类</p></el-menu-item>
    <el-menu-item index="11" ><p @click="gogo(11,21)">资格类</p></el-menu-item>
    <el-menu-item index="12" ><p @click="gogo(12,30)">计算机类</p></el-menu-item>
    <el-menu-item index="13" ><p @click="gogo(13,35)">招录类</p></el-menu-item>
    <el-menu-item index="14" ><p @click="gogo(14,40)">学历类</p></el-menu-item>
    <el-menu-item index="15"><p @click="gogo(15,46)">医学类</p></el-menu-item>
     <el-menu-item index="0" ><p @click="go(5)">其他类</p></el-menu-item>
</el-menu>    
</div>
    
</template>
<script>
export default {
     data() {
      return {
        activeIndex: '1',
      };
    },
     methods: {   
        handleSelect(key, keyPath) {
        this.activeIndex = key
      },  
      go(id){
        this.activeIndex = id
      } ,           
      gogo(id,id2){  
        if(id==null){
          this.catagory = 1
          this.$router.push("/");
        }
        else {
          this.catagory = id
          this.$router.push(`/catagory/${id}/${id2}`);   
        }    
      }
     },        
}
</script>
<style  long='scss' scoped>
    .main{
        width: 1200px;
        margin: 0 auto;
    }
    ul,li{
        height: 49px!important;
        line-height: 49px!important;
    }
</style>