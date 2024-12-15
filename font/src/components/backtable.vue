<template>
<div>
  <el-button
              class="add-item"
              type="top"
              icon="el-icon-edit"
              @click="handleCreate"
           >增加</el-button>
  <el-table
    :data="tableData"
    style="width: 100% ">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="题目详情：">
            <span>{{ props.row.question_Title }}</span>
          </el-form-item>
          <el-form-item label="详细解答">
            <span>{{ props.row.analysis }}</span>
          </el-form-item>
          <el-form-item label="问题答案">
            <span>{{ props.row.answer }}</span>
          </el-form-item>
          <el-form-item label="问题分类">
            <span>{{  props.row.catagory_id }}</span>
          
          </el-form-item> 
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="问题详情"
      prop="questionShort">
    </el-table-column>
    <el-table-column
      label="问题答案"
      prop="answer">
    </el-table-column>
    <el-table-column
      label="解答详情"
      prop="Desc">解答见详情
    </el-table-column>
    <el-table-column
      label="操作"
      prop="desc">
           <el-button type="danger" @click="open01">删除问题</el-button>
           <el-button
              class="filter-item"
              type="primary"
              icon="el-icon-edit"
              @click="handleCreate"
           >编辑</el-button>
    </el-table-column>
  </el-table>
  <transition name='el-fade-in-linear'>
    <div v-if='dialogFormVisible' id='dialog_wrap'>
        <el-dialog :visible.sync="dialogFormVisible">
      <el-form
        :model="questionForm"
        ref="dataForm"
        label-position="left"
        label-width="90px"
        style="width: 400px; margin-left:50px;"
      >
        <el-form-item label="题目" prop="question_Title">
          <el-input type="textarea" :rows="2" v-model="questionForm.question_Title"></el-input>
        </el-form-item>
        <el-form-item label="分类" >
          <el-radio-group v-model="questionForm.catagory_id" style="margin-right:12px;">
            <el-radio v-for="(radio, index) in subjectList" :key="index" :label="radio">{{radio}}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="正确答案" prop="answer">
          <el-input v-model="questionForm.answer"/>
        </el-form-item>
        <el-form-item label="答案解析" prop="analysis">
          <el-input v-model="questionForm.otherAnswer1" />
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click=" createData() ">确定</el-button>
      </div>
    </el-dialog>
    </div>
  </transition>
</div>
</template>

<style scoped>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  .el-button--danger {
    color: #FFF!important;
    background-color: #484dc3!important;
    border-color: #484dc3!important;
}
.el-button--danger:hover {
    background: #7579da!important;
    border-color: #7579da!important;
    color: #FFF!important;
}
.el-table::before {
    height: 0px;
 }
#dialog_wrap{
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background-color: rgba(0,0,0,0.2);
}
.dialog{
  margin:160px auto;
  width:1200px;
  height:600px;
  background-color: #fff;
}
.add-item{
  margin-left: 1340px;
  margin-bottom: 10px;
}
.el-button--top {
    color: #FFF;
    background-color:rgb(116, 85, 255);
    border-color: rgb(116, 85, 255);
}
.el-button--top:focus, .el-button--top:hover{
  background: #7579da!important;
    border-color: #7579da!important;
    color: #FFF!important;
}
.el-button--primary {
    color: #FFF;
    background-color: rgb(66, 29, 201);
    border-color: rgba(62, 62, 238, 0.6);
}
.el-button--primary:focus, .el-button--primary:hover {
  background: #7579da!important;
  border-color: #7579da!important;
  color: #FFF!important;
}

</style>

<script>
  export default {
      name:'backtable',
    data() {
      return {
          tableData:[],
              subjectList: ["财经类", "资格类", "计算机","招录类","学历类","医学类"],
      input: "",

      questionForm: {
        question_Title: "",
        questionShort: "",
        answer:"",
        userGrades: [],
        catagory_id: "",
      },
      dialogFormVisible: false,
      }
      

    },
    created(){
  
      var mm = this.$api.admin.getallQuestion();
        mm.then(ok=>{
              ok.push({
       question_Title: '[单选] 下列各项中，不应通过所有者权益科目核算的是（　　）。A . 可供出售金融资产持有期间发生的非减值性公允价值变动B . 企业收到投资者出资额超出其在注册资本或股本中所占份额的部分C . 权益法下长期股权投资按持股比例享有被投资单位发生的净亏损．D . 回购股票支付的总价款低于面值总额的，所注销库存股的账面余额与所冲减股本的差额',
       questionShort:"[单选] 下列各项中，不应通过所有者权益科目核算的是",
       answer: 'C ',
       category: '初级会计职称',
          
       analysis: '本题考核所有者权益类科目的核算内容。选项C应该是通过“投资收益”核算。选项A：借：可供出售金融资产——公允价值变动贷：其他综合收益(公允价值下降做相反的处理)选项B：借：银行存款资本公积(折价)贷：实收资本资本公积(溢价)选项C：借：投资收益贷：长期股权投资——损益调整选项D：借：股本贷：库存资本公积——股本溢价 ',
     })
          this.tableData=ok
    
        for(var i=0;i<ok.length;i++)
        {
            ok[i].questionShort = ok[i].question_Title.substring(0,15);
            console.log(ok.length);
        }
       
     for(var tt=0;tt<ok.length;tt++)
     {
          
       var aaaa = "";
          
       var temp = ok[tt].answer.split(',');
          
       for(var i=0;i<temp.length;i++)
       {
          if(temp[i]==1&&i==0)
          aaaa+="A,"
          else if(temp[i]==1&&i==1)
          aaaa+="B,"
          else if(temp[i]==1&&i==2)
          aaaa+="C,"
          else if(temp[i]==1&&i==3)
          aaaa+="D,"
          else if(temp[i]==1&&i==4)
          aaaa+="E,"
        console.log(temp[i])
        }
          
         
      ok[tt].answer= aaaa.substring(0,aaaa.length-1)
        
     console.log(ok[tt].length)
          
     }
      })
           },
        methods: {
      open() {
        this.$alert('这是一段内容', '问题创建', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      },
      open01() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
      handleCreate() {
      this.questionForm = {
        question_Title: "",
        questionShort: "",
       answer:"",
        userGrades: [],
        catagory_id: "",
      };
      this.dialogFormVisible = true;
      console.log(111);
    },
       
    async createData() {
      const params = this.questionForm;
     
      this.questionForm.questionShort = this.questionForm.question_Title.substring(0,15);
       this.tableData.push(this.questionForm);
      console.log(this.questionForm)
       alert("数据传输成功！")
    },
    },
     
  }
</script>