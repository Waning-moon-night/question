<template>
<div>
<div  class="search_wrap" >
  <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
    <el-select v-model="select" slot="prepend" placeholder="全部分类">
      <el-option label="财经类" value="10" ></el-option>
      <el-option label="资格类" value="11"></el-option>
      <el-option label="计算机类" value="12"></el-option>
      <el-option label="招录类" value="13"></el-option>
      <el-option label="学历类" value="14"></el-option>
      <el-option label="医学类" value="15"></el-option>
    </el-select>
    <el-button slot="append" icon="el-icon-search" @click="toDaohang()">搜索</el-button>
  </el-input>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      input: '',
      select: ''
    }
  },
   methods:{
      gog0(id1,id2){
        this.$router.go(-1)
        this.$router.push(`catagory/${id1}/${id2}`)
      },
      toDaohang(){
        console.log('hhhhhhh',this.input,this.select);
        this.$emit("input",[this.input,this.select])
      }
    }
}
</script>
<style  long='scss'>
    .search_wrap{
        width: 816px; 
    }
    .el-select{
        width: 120px!important;
    }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
    .el-input-group__append{
         background-color:#484dc3;
    }
    .el-input-group__append button.el-button{
        color:#fff;
    }
</style>