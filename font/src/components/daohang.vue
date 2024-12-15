<template>
  <div class="index-header">
         <h1 class="home-center">
             云芯问答平台
         </h1>
         <a class="search_text">考研资料·注册会计师·研究生考试·会计初级·职称英语·论文撰写</a>
        <search-bar class="search_center" @input="go"></search-bar>
    
  </div>
</template>

<script>
import searchBar from './search-bar.vue'
export default {
  name:'daohang',
  components: { searchBar },
  data(){
	return{
inputa:"ahaha"
	}
},
  methods:{
	  getSonMsgFn(data){
		   
		  alert('ni');
	  },
	  go(see){
		  this.inputa = see
		  console.log(this.inputa)
		  console.log(see)
	  }
  },
  watch:{
	  inputa:function(newinputa){
   
		  this.$emit("input",newinputa)
	  }
  },
}
</script>

<style>
.home-center{
  width:1020px;
  margin:0 auto;
}
.search_center{
	width:816px;
	margin:64px auto 64px;
}
h1{
  	width: 242px;
	height: 64px;
	font-family: 江城正君体;
	font-size: 40px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 64px;
	letter-spacing: 1px;
	color: #484dc3;  
    margin: 50px 600px 0px 420px;
} 
.search_text{
    width: 384px;
	height: 19px;
	display: inline-block;
	font-family: Source Han Sans CN;
	font-size: 14px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 19px;
	letter-spacing: 0px;
	color: #333333;
	text-align: center;
    
}
.index-header{
   padding: 0 100px 0 100px;
   text-align: center;
}
</style>