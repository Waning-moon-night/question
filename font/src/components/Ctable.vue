<template>
<keep-alive>
    <div class="sort">
        <span @click="gogo()">
        </span>
    <ul v-for="(item,index1) in frClass" :key="index1">
        {{item.catagory_name}} 
                   <li v-for="(itemson,index2) in item.que_list" :key="index2" @click="seeQuestion(item.catagory_id,itemson.catagory_id)">{{itemson.catagory_name}}</li> 
             <li><a> </a></li>           
    </ul>

  </div>
  </keep-alive>
</template>

<script>
export default {
    name:'Ctable', 
    data(){
        return{
            frClass:[]
        }
    },
    created(){
       var m = this.$api.index.getallCatagory();
       let that =this;
       m.then(ok=>{
           that.frClass = ok;
           console.log(7777777777777,that.frClass)
       })
          
          
           
    },
    methods:{
        gogo(){
            console.log(this.frClass)
        },
        seeQuestion(aid,cid){
            this.$router.push({path:`/catagory/${aid}/${cid}`})
        }
    }  
}
</script>

<style scoped>
.sort ul{
    list-style-type: none;
    text-align: center;
    text-align:left;
    margin-left: 60px;
    /* margin-top: 20px; */
}
.sort ,.sort li:last-child{
    border: none;
    margin-right: 10px;
     padding: 8px 0px 8px 0px;
    background-color: #ffffff;
    color: black;
}
.sort li:first-child{
    margin-left:30px;
}
.sort li .router-link-exact-active:hover{
    color: #ffffff;
}


.sort li{
    display: inline-block;
    text-align: center;
    width: 100px;
    border: 1px solid #e2e3f6; 
    margin-right: 26px;
    position: relative; 
    z-index: 0;
    padding: 8px 12px 8px 12px;
}
li:hover{ background-color:#484dc3;
        color:#ffffff;
        cursor:pointer;}
.sort{
    background-color:#ffffff;
    margin:  20px auto;
    padding:  30px 0px 10px 40px;
    width: 1000px;
	font-family: Source Han Sans CN;
	font-size: 16px;
	font-weight: normal;
	font-stretch: normal;
	line-height: 21px;
	letter-spacing: 0px;
	color: #333333;
}


.router-link-exact-active{
   text-decoration: none;
   color: #333333;
   
}
a{
    text-decoration: none;
    color: black;
}
a:hover{
    color: #ffffff;
}
</style>