<template>
<div class="main">
    <div class="login">
        <el-form 
    size="mini"
    :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="账号" prop="loginId">
    <el-input v-model="ruleForm.loginId" autocomplete="off"></el-input>
  </el-form-item>
   <el-form-item label="密码" prop="loginPwd">
    <el-input type="password" v-model="ruleForm.loginPwd" autocomplete="off"></el-input>
  </el-form-item>
  
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
    <el-button @click="resetForm('ruleForm')">取消</el-button>
  </el-form-item>
</el-form>
    </div>
    
</div>
</template>
<script>
export default {
    data() {
        var validateloginId = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入账号'));
        }
      };
      var validateloginPwd = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }
      };
      return {
        ruleForm: {
          loginId: '',
          loginPwd: '',
        },
        rules: {
         loginId: [
            { validator: validateloginId, trigger: 'blur' }
          ],
          loginPwd: [
            { validator: validateloginPwd, trigger: 'blur' }
          ],                  
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>
<style scoped long='scss'>
    .main{
        display: flex;
        justify-content: center;
        align-items: center;
        height:100vh;
    }
    .login{
            width:460px;
            height:220px;
            border:1px solid #ccc;
        }
</style>