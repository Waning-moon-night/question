<template>
  <div class="homes">
    <div class="home-center">
           <div class="header01">欢迎使用云芯问答平台</div>
          <div class="header02" @click="go()">已收录：1234条问答</div>
    </div>
      <daohang @input="getinput(record,arguments)"></daohang>
      <test-1></test-1> 
  </div>
</template>

<script>

import Daohang from '../components/daohang.vue'

import Table from '../components/Ctable.vue'

export default {
  name: 'Home',

  components: 
  {
    'test1':Table,
    'daohang':Daohang,
  },
  data(){
    return {
      catagory:"",
      input:"",
      select:''
    }
  },
  async created(){
        
  },
  methods:{
     async go(){
      console.log(1);
    },
    getinput(record,args){

      console.log('lalal',args[0][0],args[0][1]);
      if(args[0][1]){
        console.log(11111111);
        this.$router.push({name:"cha_zhao",params:{keyword:args[0][0],catagory_id:args[0][1]}})
      }else{
        this.$router.push({name:"cha_zhao",params:{keyword:args[0][0]}})
      }
    }
  }
}
</script>
<style scoped>
.home-center{
  width:1020px;
  margin:0 auto;
}
.header01{
  width: 168px;
	height: 19px;
	font-family: Source Han Sans CN;
	font-size: 14px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 19px;
	letter-spacing: 0px;
	color: #333333;
  float: left;
}
.header02{
	height: 100px;
	font-family: Source Han Sans CN;
	font-size: 14px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 19px;
	letter-spacing: 0px;
	color: #333333;
  padding:  0 0 0 850px;
}
.homes{
  margin-top: 0%;
  overflow: hidden;
  padding: 10px 150px 70px 150px;
  background-size:100% 100%;
  background-attachment:fixed;
}
.bottom0{
	font-family: Source Han Sans CN;
	font-size: 12px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 16px;
	letter-spacing: 0px;
	color: #999999;
  text-align: center;
}
</style>