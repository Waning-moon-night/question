<template>
  <div class="form">
    <span class="iconfont-code"></span>
    <div class="white-block"></div>
    <div class="mini-header">注册</div>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
      <el-form-item class="items" prop="name">
        <el-input placeholder="请输入用户名" v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item class="items" prop="phone">
        <el-input placeholder="填写常用手机号/邮箱" v-model="ruleForm.phone" class="input-with-select">
        </el-input>
      </el-form-item>
      <el-form-item prop="pass">
        <el-input placeholder="密码（6~16个字符组成，区分大小写）" type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item prop="checkPass">
        <el-input placeholder="请再次输入密码" type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item style="margin-top: 20px">
        <el-button @click="submitForm('ruleForm')" style="background-color: #484dc3;color: white;width: 130px;margin-left: 12px">提交</el-button>
        <el-button @click="resetForm('ruleForm')" style="width: 130px;margin-left: 26px">重置</el-button>
      </el-form-item>
    </el-form>
    <el-button type="text"  style="margin-left: 240px;color: #484dc3;font-size: 12px;" @click="login">已有账号，返回登录</el-button>
  </div>
</template>

<script>
export default {
  name: "Account-register",
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
    var validatePass2 = (rule, value, callback) => {
    if (value === '') {
      callback(new Error('请再次输入密码'));
    } else if (this.ruleForm.checkPass !== this.ruleForm.pass) {
      callback(new Error('两次输入密码不一致！'))
    } else {
      callback();
    }
    }
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
        ruleForm:{
        name:'',
        phone:'',
        pass:'',
        checkPass:''
      },
      rules: {
        name:[{required: true,message: '请输入用户名',trigger: 'blur'}],
        phone:[
          {validator: validatePhone,trigger: 'blur'}
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ]

      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          var m = this.$api.index.doRegister(this.ruleForm.name,this.ruleForm.phone,this.ruleForm.pass)
	        m.then(ok=>{
            if (ok.code) {
              alert("注册成功")
              this.$router.push('/admin')
            }else{
              alert("注册失败")
            }
	        })
          
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    login() {
      this.$router.push('/admin')
    },
  }


}
</script>

<style scoped>
.mini-header{
  color: #484dc3;
  font-size: 25px;
  text-align: center;
  padding-top:63px;
}

.iconfont-code{
  color: #484dc3;
  font-size: 100px;
  position: absolute;
  z-index: 1;
  margin-left: 300px;
}

.white-block{
  width: 0;
  height: 0;
  border-bottom: 100px solid white;
  border-right: 100px solid transparent;
  position: absolute;
  z-index: 2;
  margin-left: 300px;
}
.form{
  margin: 5vh auto;
  width: 400px;
  height: 600px;
  background-color: white;
}
.demo-ruleForm{
  width: 320px;
  margin-top: 50px;
  margin-left: 50px;
}
</style>