<template>

    <div class="da"><div class="header">
		<div class="header center" >
			<div class="title">云芯问答平台</div>
            <div style="clear:both"></div>
		</div>
				<div class="sort-bar">
					<sort-bar ></sort-bar>
				</div>
			<div class="header01">
			<div class="links-1128">
			<div class="white">
				<br>
				<br>
			<div v-show = nFlag>{{this.nothing}}</div>
			<div v-for="(item,index1) in question.slice(0,4)" :key="index1">
              <div class="related-ask">
                  <p class="related-ask-text">[单选]{{item.question_Title}}</p>
                  <div class="massage">
                    <p class="include-time">收录于：2021-07-22 17:36</p>
					<p class="chack-ans" @click="question_Detail(item.catagory_id,item.question_id)">查看答案</p>
                  </div>
            </div>
             <div class="line"></div>
            </div>
		</div>
		</div>
		</div>
		
		</div>    
</div>
</template>
<script>
import SearchBar from '../components/search-bar.vue'
import SortBar from '../components/sort-bar.vue'

export default {
  name: 'Home',
    components: {
    SearchBar,
    SortBar
  },
  data(){
return {
	question:[],
	aid:"",
	cid:"",
	que_catagory:"",
	nothing:'',
	nFlag : false

}
  },
  created(){
	if(this.$route.params.catagory_id){
		var m = this.$api.index.getLikequestion(this.$route.params.keyword,this.$route.params.catagory_id)
	}else{
		var m = this.$api.index.getLikequestion(this.$route.params.keyword)
	}
	var _that = this
	 m.then(ok=>{
		console.log(ok.result);
		if(ok.result === 0){
			_that.nFlag = true
			_that.nothing = '啊哦~未查询到相关题目~'
			_that.question = []
		}else{
			 _that.question = ok.result
		}
		console.log(_that.question);
	 })
  },
  methods:{
	question_Detail(cid,bid){
	console.log(cid,bid)
	var m= this.$api.index.SearchCatagory(cid)
	m.then(ok=>{
		 this.que_catagory = ok;
	})
	var aid = this.que_catagory[0].father_cid
	this.$router.push(`/catagory/${aid}/${cid}/${bid}`);
	  }
  }
}
</script>
<style scoped long='scss'>
.related-ask{
        width:744px;
        margin:0px 24px;
    }
    .related-ask-text{
        font-size:16px;
        margin:0px 0px 16px 0px;
    }
    .include-time{
        font-size:12px;
        color: #999999;
        display:inline-block;
        margin:0px 540px 0px 0px;
    }
    .chack-ans{
        font-size: 12px;
        color:#484dc3;
        display: inline-block;
		cursor:pointer;
    }
    .massage{
        height:16px;
        line-height: 16px;
        margin:19px 0px 22px 0px;
    }

.sort-bar{
        margin-top:48px;
        background-color: #484dc3;
		padding-left: 408px;
		padding-right: 408px;
    }
.line{
        border: 1px solid rgba(72, 77, 195, 0.12);
    	margin: 54px 27px;
    }
.center{
        width: 1100px;
        margin: 0 auto;
    }
    .title{
	width: 250px;
	height: 53px;
	font-family: 江城正君体;
	font-size: 40px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 53px;
	letter-spacing: 0px;
	color: #484dc3;
    display: inline-block;
    }
    .search{
        float: right;
        height: 48px;   
    }
    .sort-bar{
        margin-top:48px;
        background-color: #484dc3;

    }
    .header{
        padding-top:30px;
		padding-bottom:30px;
        height: 26px;
        line-height: 24px;
    }
.search{
        float: right;
        height: 48px;
        
    }
  body,nav,dl,dt,dd,p,h1,h2,h3,h4,ul,ol,li,input,button,textarea,footer {
	margin: 0;
	padding: 0
}

a {
	text-decoration: none;
}

body {
	font-size: 14px;
	font-family: Source Han Serif CN;
	-webkit-text-size-adjust: none;
}

h1,h5,h6 {
	font-size: 100%;
	margin: 0;
}

form {
	display: inline
}

ul,ol {
	list-style: none
}

img {
	vertical-align: middle;
	border: 0;
	-ms-interpolation-mode: bicubic;
}

button,select,textarea {
	font-size: 100%;
	vertical-align: middle;
	outline: none;
}

textarea {
	resize: none
}

button,input[type="button"],input[type="reset"],input[type="submit"] {
	cursor: pointer;
	-webkit-appearance: button;
	-moz-appearance: button
}

input:focus:-moz-placeholder,input:focus::-webkit-input-placeholder {
	color: transparent
}

button::-moz-focus-inner,input::-moz-focus-inner {
	padding: 0;
	border: 0
}

table {
	border-collapse: collapse;
	border-spacing: 0
}

.fl {
	float: left;
}

.fr {
	float: right;
}

.hide {
	display: none;
}

.show {
	display: block;
}

.ellipsis {
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden
}

.break {
	word-break: break-all;
	word-wrap: break-word
}

.clearfix {
	*zoom: 1;
}
.clearfix:after {
	content: "\200B";
	display: block;
	height: 0;
	clear: both;
}

header,footer,article,section,menu,hgroup {
	display: block;
	clear: all;
}
.links-1128 {
	width: 1128px;
	margin: 0 auto;
	position: relative;
}

.mt-24 {
	margin-top: 24px;
}

.mt-80 {
	margin-top: 80px;
}

.mt-10 {
	margin-top: 10px;
}
*{
	padding: 0;
	margin: 0;
}
.da{
	width: 100%;
	height: 1080px;
	background-color: #f7f7f7;
    position: relative;
}
.da .header .box{
	position: absolute;
	top: 48px;
	left: 496px;
}
.da .box h3{
	width: 200px;
    height: 53px;
	font-family: 江城正君体;
	color: #484dc3;
	font-size: 40px;
	font-weight: normal;
	padding-top: 44px;
	padding-left: 30px;
    display: inline-block;
}
.header h2{
	width: 200px;
	height: 53px;
	font-size: 40px;
	font-weight: normal;
	font-family: 江城正君体;
	padding-top: 44px;
	color: #484DC3;
	margin: 0 auto;
	
}

.lins-wrap{
	width: 100%;
	height: 48px;
	background-color: #484dc3;
	margin-top: 47px;
}
.links-1128 .nav-fr{
	line-height: 48px;
}
.links-1128 .nav-fr li{
	
	float: left;
	
	
}
.links-1128 .nav-fr li a{
	width: 64px;
	height: 16px;
	font-size: 16px;
	margin: 0 24px;
	color: #ffffff;
}
.links-1128 .nav-fr li a:hover{
    background-color: #999999;
}
.links-1128 .word{
	position: absolute;
	top: 20px;
}
.links-1128 .liarbry{
	width: 250px;
	height: 14px;
	padding-left: 24px;
	color: #333333;
	font-size: 14px;
	font-family: Source Han Sans CN;
	position: absolute;
	top: 17px;
}
.links-1128 .white{
	width: 792px;
	height: 768px;
	position: absolute;
	top:60px;
	left: 24px;
	background-color: #ffffff;
	padding-left: 24px;
	
}
.links-1128 .white .one{
	width: 744px;
	height: 72px;	
	padding-left: 24px;
	margin-top: 24px;
	overflow: hidden;
}
.links-1128 .white .one .single{
	width: 390px;
	height: 17px;
	font-size: 16px;
	font-family: Source Han Sans CN;
	color: #333333;
	font-weight: normal;
}
.links-1128 .white .answer{
	position: relative;
	
}
.links-1128 .white .answer h4{
	float: left;
	padding-top: 19px;
	
}
.links-1128 .white .answer .answer-01{
	width: 180px;
	height: 12px;
	font-family: Source Han Sans CN;
	color: #999999;
	font-weight: normal;
	
	font-size: 12px;
}
.links-1128 .white .answer .answer-02{
	position: absolute;
	left: 698px;
	width: 48px;
    height: 12px;
	color: #484dc3;
	font-size: 12px;
    font-family: Source Han Sans CN;
}


.links-1128 .white .one .nav-fr{
	border: 4px dashed #000;
	float: left;
	overflow: hidden;
	position: absolute;
	top: 254px;
	left: 48px;
	width: 744px;
}
.links-1128 .white .one01{
	width: 744px;
	height: 126px;
	
	padding-left: 24px;
	margin-top: 30px;
	overflow: hidden;
}
.links-1128 .white .one01 .single01{
	width: 744px;
	height: 70px;
	font-size: 16px;
	font-family: Source Han Sans CN;
	color: #333333;
	font-weight: normal;
}
.links-1128 .white .answer10{
	position: relative;
	
}
.links-1128 .white .answer10 h4{
	float: left;
	padding-top: 19px;
	
}
.links-1128 .white .answer10 .answer-011{
	width: 180px;
	height: 12px;
	font-family: Source Han Sans CN;
	color: #999999;
	font-weight: normal;
	
	font-size: 12px;
}
.links-1128 .white .answer10 .answer-022{
	position: absolute;
	left: 698px;
	
	width: 48px;
    height: 12px;
	color: #484dc3;
	font-size: 12px;
    font-family: Source Han Sans CN;
}
.links-1128 .white .one01 .nav-fr-1{
	border: 1px dashed   #000;
	width: 744px;
	float: left;
	overflow: hidden;
	position: absolute;
	top: 254px;
	left: 48px;
}
.links-1128 .white .one02{
	width: 744px;
	height: 126px;
	
	padding-left: 24px;
	margin-top: 30px;
	overflow: hidden;
}
.links-1128 .white .one02 .single010{
	width: 455px;
	height: 17px;
	font-size: 16px;
	font-family: Source Han Sans CN;
	color: #333333;
	font-weight: normal;
}
.links-1128 .white .answer100{
	position: relative;
	
}
.links-1128 .white .answer100 h4{
	float: left;
	padding-top: 19px;
	
}
.links-1128 .white .answer100 .answer-0111{
	width: 180px;
	height: 12px;
	font-family: Source Han Sans CN;
	color: #999999;
	font-weight: normal;
	
	font-size: 12px;
}
.links-1128 .white .answer100 .answer-0222{
	position: absolute;
	left: 698px;
	
	width: 48px;
    height: 12px;
	color: #484dc3;
	font-size: 12px;
    font-family: Source Han Sans CN;
}
.links-1128 .white .one02 .nav-fr-2{
	border: 1px dashed #000;
	width: 744px;
	float: left;
	overflow: hidden;
	position: absolute;
	top: 361px;
	left: 48px;
}

.links-1128{
	position: relative;
}
.links-1128 .white01{
	width: 288px;
	height: 288px;
	background-color: #ffffff;
	position: absolute;
	left: 840px;
	top: 0px;
	float: left;
}
.links-1128 .white01 .accounting{
	width: 60px;
	height: 150px;	
	padding-top: 8px;
	padding-left: 30px;
	display: inline-block;
}
.links-1128 .white01 .accounting li{
	margin: 10px 0px;
	float: right;
}
.links-1128 .white01 .accounting a{
	width: 56px;
    height: 14px;
	font-family: Source Han Sans CN;
	color: #333333;
	font-size: 14px;
	font-weight: normal;
	
}
.links-1128 .white01 .accounting a:hover{
	background-color: blue;
}
.links-1128 .white01 .accounting01{
	width: 70px;
	height: 150px;
	display: inline-block;
	padding-left: 80px;
	
}
.links-1128 .white01 .accounting01 li{
	margin: 10px 0px;
	float: left;
	}
	.links-1128 .white01 .accounting01 li a{
		width: 70px;
	    height: 14px;
		font-family: Source Han Sans CN;
		color: #333333;
		font-size: 14px;
		font-weight: normal;
	}
	.links-1128 .white01 .accounting01 li a:hover {
		background-color: bisque;
	}
	.links-1128 .white01 .vioiet .vioiet01 {
		width: 4px;
		height: 14px;
		background-color: #484DC3;
		margin-top: 24px;
		float: left;
		
	}
	.links-1128 .white01 .words h4{
		padding-left: 20px;
		padding-top: 5px;
		width: 56px;
		height: 14px;
		font-size: 14px;
		font-family: Source Han Sans CN;
	}
	.positionJudge{
		padding-top:15px;
	}
	.links-1128 .white01 .solid{
		width: 240px;
		height: 1px;
		background-color: #000000;
		margin: 0 auto;
		margin-top: 15px;
		opacity: 0.1;
	}
	.white03{
		width: 288px;
		height: 288px;
		background-color: #ffffff;
		position: absolute;
		left: 840px;
		top: 312px;
		float: left;
	}
	.links-1128 .white03 .vioiet02 .vioiet03 {
		width: 4px;
		height: 14px;
		background-color: #484DC3;
		margin-top: 24px;
		float: left;
	}
	.links-1128 .white03 .words01 h5{
		padding-left: 20px;
		padding-top: 21px;
		width: 56px;
		height: 14px;
		font-size: 14px;
		font-family: Source Han Sans CN;
	}
	.links-1128 .white03 .solid01{
		width: 240px;
		height: 1px;
		background-color: #000000;
		margin: 0 auto;
		margin-top: 15px;
		opacity: 0.1;
	}
	.links-1128 .white03 .accounting02 ul{
		margin: 20px 24px;
	}
	.links-1128 .white03 .accounting02 ul li{
		padding: 6px 0px;
	}
	.links-1128 .white03 .accounting02 ul li a{
		font-family: Source Han Sans CN;
		font-size: 14px;
		color: #333333;
	}
	.links-1128 .white03 .accounting02 ul li a:hover{
		background-color: #FFE4C4;
	}
</style>