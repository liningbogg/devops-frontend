<template>
    <div>
        <div class="login-wrapper">
            <div class="login-box">
                <h2 class="g-ta-c g-f-600 g-fz-18">欢迎注册</h2>
                    <div class="g-mt-20">
                        <el-form :label-position="labelPosition" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                            <el-form-item label="用户名" prop="name">
                                <el-input v-model="ruleForm.name"></el-input>
                            </el-form-item>
                        <el-form-item label="输入密码" prop="password">
                            <el-input type="password" v-model="ruleForm.password" effect="dark" show-password></el-input>
                        </el-form-item>
                        <el-form-item label="重复密码" prop="conform">
                            <el-input type="password" v-model="ruleForm.conform" effect="dark" show-password></el-input>
                        </el-form-item>
                        <el-form-item label="验证码" >
                            <Captcha ref='Captcha' />
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" size="medium" style="width: 380px;" @click="submitForm('ruleForm')">注册</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Captcha from '@/components/Captcha.vue'

export default {
    name: "register",
    data() {
        return {
            labelPosition: 'right',//文字的对齐方式left、right、top
            ruleForm: {
                name: '',
                password: '',
                conform: '',
            },
            rules: { //验证规则
                name:[{ required: true, message: '请输入用户名', trigger: 'blur' },],
                password:[
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min:6 , max:16, message : '请输入6到16位字母、英文符号或数字',trigger : 'blur'}
                ],
                conform:[
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min:6 , max:16, message : '请输入6到16位字母、英文符号或数字',trigger : 'blur'},
                    {
                        validator:(rule,value,callback)=>{
                            if(value===''){
                                callback(new Error('请再次输入密码'))
                            }else if(value!==this.ruleForm.password){
                                callback(new Error('两次输入密码不一致'))
                            }else{
                                callback( )
                            }
                        },
                        trigger: 'blur'
                    },
                ],
            }
        }
    },
    mounted() {},
        components: {
        Captcha
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    let param = {//可能还有验证码或者其他，这里只写两个
                        username: this.ruleForm.name,
                        password: this.ruleForm.password,
                    }
                    this.axios.get('web/register?username='+param.username+'&password='+param.password+'&captcha='+this.$refs.Captcha.captcha_info.captchatext+'&uuid='+this.$refs.Captcha.elId).then(
                        response => {
                            if(response){
                                let status = response.data.status;
                                let tip = response.data.tip;
                                console.log(response.data)
                                if(status=="failure"){
                                    alert(tip);
                                }
                                if(status=="success"){
                                    alert(tip);
                                    this.$router.push('/login');
                                }
                            }
                        }
                    ) 

                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
    }
}
</script>

<style scoped lang="less">
.login-wrapper {
    position: fixed;
    width: 100%;
    height: 100%;
    background: #ffffff;
    .login-box {
        padding: 15px 20px 15px 0;
        width: 500px;
        margin: auto auto;
        background-color: #fff;
    }
}
</style>
