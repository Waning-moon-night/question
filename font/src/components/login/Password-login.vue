<template>
<div class="password-login">
  <el-form class="el-form" :model="ruleForm" status-icon :rules="rules" ref="ruleForm" >
    <el-form-item prop='phone'>
      <el-input  
          v-model="ruleForm.phone"
          placeholder="请输入手机号/邮箱"  @change="putPhone()">
        <i slot="prefix" class="el-icon-user"></i>
      </el-input>
    </el-form-item>
    <el-form-item prop="pass">
      <el-input
          v-model="ruleForm.pass"
          placeholder="请输入密码"
          show-password @change="putPass()">
        <i slot="prefix" class="el-icon-lock"></i>
      </el-input>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
export default {
  name: "Password-login",
  data(){
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePhone = (rule, value, callback) => {
    if (value === '') {
      callback(new Error('请输入手机号或邮箱'));
    } else if ((/^1[3456789]\d{9}$/.test(value))) {
      callback();
    } else if ((/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(value))){
      callback();  
    } else {
      callback(new Error('手机号或邮箱有误，请重新输入'))
    }
    }

    return{
      statu:false,
        ruleForm:{
        phone:'',
        pass:'',
      },
      rules: {
        phone:[
          {validator: validatePhone,trigger: 'blur'}
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
      }
    }
  },
  methods:{
      putInfo(){
        console.log(66666666,this.ruleForm.phone);
        this.$emit('getInfo',this.ruleForm.phone,this.ruleForm.pass)
        console.log(77777777,this.ruleForm.phone);
      },
      putPhone(){
        console.log(11111,this.ruleForm.phone,this.ruleForm.pass);
        if(this.ruleForm.phone&&this.ruleForm.pass){
          this.putInfo()
          console.log(222222);
        }
      }, 
      putPass(){
        console.log(3333333,this.ruleForm.phone,this.ruleForm.pass);
        if(this.ruleForm.phone&&this.ruleForm.pass){
          this.putInfo()
          console.log(44444444);
        }
      }     
    }
}
</script>

<style scoped>
.el-form{
  width: 60%;
  margin: 0 auto;
  margin-top: 20px;
}

</style>