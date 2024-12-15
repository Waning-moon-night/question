<template>
  <div class="background">
    <div class="header center" >
        <div class="title">云芯问答平台</div>
        <div style="clear:both"></div>
    </div>
    <div class="sort-bar">
   <sort-bar></sort-bar>
    </div>
    <div class="little-nav center">
        位置: {{c1}}>{{c2}}>答案详情
    </div>
    <div class="container center">
        <div class="left-tab">
            <p class="tab-text">问题</p>
            <div class="question-text">       
                <p>
                   [单选] {{question[0].question_Title}}
                </p>

                 <ul class="ans" v-for="(items,index1) in check" :key="index1">

                      <span v-if="index1==0">
                            A
                      </span>
                      <span v-else-if="index1==1">
                            B
                      </span>
                      <span v-else-if="index1==2">
                            C
                      </span>
                      <span v-else-if="index1==3">
                            D
                      </span>
                      <span v-else-if="index1==4">
                            E
                    </span>.{{items.bx_Oontent}}
                </ul> 
            </div>
             <div class="line"></div>
             <div class="tab-text">答案&解析</div>
           
             <ul class="ans" v-for="(items,index1) in check" :key="index1">
                 
                    <div v-if="checkequal[index1]==1">
                        
                       <p class="real-ans">
                           <span v-if="index1==0">
                            A
                      </span>
                      <span v-else-if="index1==1">
                            B
                      </span>
                      <span v-else-if="index1==2">
                            C
                      </span>
                      <span v-else-if="index1==3">
                            D
                      </span>
                      <span v-else-if="index1==4">
                            E
                    </span>.{{items.bx_Oontent}}    
                           </p>
                    </div>
                </ul> 
             <div class="analysis">
                <p class>参考解析：</p>
                <p>
                   {{question[0].analysis}}
                </p>
             </div>
              <div class="line"></div>
              <div class="tab-text"  v-show = flag>相关问题</div>



    <ul v-for="(item,index1) in liste" :key="index1" v-show = flag>
             <div class="related-ask">	
                    <p class="related-ask-text">
                       [单选] {{item.question_Title}}
                  </p>
                    <div class="massage">
                    <p class="include-time">收录于：2021-07-22 17:36</p>
                    <p class="chack-ans" @click="goto(item.question_id )">查看答案</p>
                  </div>
				</div>       
                <div class="line2"></div>
    			</ul>
        </div>

        <div class="right-tab">
            <div class="rightTop-tab"> 
                <div class="related-title">
                    <div class="little-block"></div>
                    <div class="related-title-text">相关分类</div>
                </div>
                <div class="line"></div>
                <div class="related-list">
                    <ul class="left-list">
                        <li class="list-text" v-for="(item,index) in frClass[aid-10].que_list" :key="index" @click="seeQuestion(aid,item.catagory_id)" ><a href="">{{item.catagory_name}}</a></li>                      
                    </ul>
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
  name: 'SortBar',
  components: {
    'sort-bar':SortBar,
    SearchBar
  },
  data(){
      return{
        question:[],
        check:[],
        checkequal:[],
        aBCDE:'',
        liste:[],
        aid:'',
        bid:'',
        cid:'',
        frClass:[],
        daClass:[],
        c1:'',
        c2:'',
        flag:true
      }
  },
  created(){
    var aid = this.$route.params.aid;
    this.aid = aid;
    var cid = this.$route.params.cid;
    this.cid = cid;
    var bid = this.$route.params.bid;
    var a =  this.$api.index.SearchQuestion(aid,cid,bid);
    var m = this.$api.index.SearchcQuestion(this.$route.params.aid,this.$route.params.cid);
    
    var c = this.$api.index.SearchCatagory(aid);
       let that1 =this;   
    c.then(ok=>{
           that1.daClass = ok;
           console.log(that1.daClass)
       })

    var d = this.$api.index.getallCatagory();
    let that2 =this;
    d.then(ok=>{
        that2.frClass = ok;
        console.log(1111111,ok);
        console.log(that2.frClass[aid-10])
    })

    m.then(ok=>{
 	    this.liste = ok.final
        this.c1 = ok.c1[0].catagory_name
        this.c2 = ok.c2[0].catagory_name
    })
  
     a.then(ok=>{
         this.question = ok.question;
         this.check = ok.check;
         this.checkequal = ok.question[0].answer.split(",");
     })
     console.log(this.question);
  },
  methods:{
     goto(bid){
      this.flag = false
      this.bid = bid;
      var a =  this.$api.index.SearchQuestion(this.aid,this.cid,this.bid);
      var m = this.$api.index.SearchcQuestion(this.aid,this.cid);
	 m.then(ok=>{
		 this.liste = ok
	 })
     
    a.then(ok=>{
        this.question = ok.question;
        this.check = ok.check;
        this.checkequal = ok.question[0].answer.split(",");
        console.log(ok);
    })
        
    },
     
    seeQuestion(aid,cid){
        this.$router.push({path:`/catagory/${aid}/${cid}`})
    }
  },
  letitgo(aid,cid,bid){
      return this.$api.index.SearchQuestion(aid,cid,bid);
  }
  
}
</script>
<style scoped long='scss'>
    .background{
        background-color: #f7f7f7;
    }
    .center{
        width: 1200px;
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
        padding-top:48px;
        height: 53px;
        line-height: 53px;
    }
    .little-nav{
       
        font-size:14px;
        font-family: Source Han Sans CN;
         height: 48px;
        line-height:48px; 
    }
    .container{
        height:1068px;
        display:flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        background-color:#f7f7f7 ;
     
    }
    .left-tab{
        width:792px;
        height:1008px;
        margin-right:24px;
        background-color: #fff;
    }
    .right-tab{
        width:288px;
        height:600px;
        background-color: #f7f7f7;
    }
    .rightTop-tab{
        width:288px;
        height:288px;
        margin-bottom: 24px;
        background-color: #fff;
    }
    .rightFoot-tab{
        width:288px;
        height:288px;
        background-color: #fff;
    }
    .tab-text{
        height:18px;
        font-size: 14px;
        color: #484dc3;
        margin:22px 0px 22px 24px;
    }
    .question-text{
        width:744px;
        margin:0px 24px 55px 24px;
        font-size:16px;
    }
    .line{
        border:1px solid rgba(72, 77, 195, 0.12);
        margin:0px 24px;
    }
    .real-ans{
        margin:0px 24px 22px 24px;
        font-size:16px;
    }
    .analysis{
        font-size:16px;
        margin:0px 24px 19px 24px;
    }
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
    .line2{
        border:1px dashed rgba(72, 72, 195, 0.12);
        margin:0px 24px 24px 24px;
    }
    .related-title{
        height:20px;
        width:100px;
        padding:19px 208px 18px 0px;
    }
    .little-block{
        height:12px;
        width:4px;
        background-color: #484dc3;
        display:inline-block;
        margin:0px 24px 0px 0px;
    }
    .related-title-text{
        font-size: 14px;
        color: #484dc3;
        display:inline-block
    }
    .related-list{
        width:240px;
        margin:17px 24px 0px 24px;
    }
    .related-list li{
        width:80px;
        display:inline-block;
        margin:10px 40px 0px 0px;
    }
    .left-list{
        width:240px
        
    } 
    .right-list{
        float:right;
        margin-right: 60px;
    } 
    .list-text{
        margin-bottom: 15px;
        font-size: 14px;
        color:#333333;
    }
    .list-text a{
        width: 56px;
        height: 14px;
	    font-family: Source Han Sans CN;
	    color: #333333;
	    font-size: 14px;
	    font-weight: normal;
    }
    .list-text a:hover{
        background-color: #484dc3;
	    color:#ffffff
    }
</style>