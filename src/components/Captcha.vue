<template>
    <el-form :model="captcha_info" :rules="rules">
        <el-form-item>
            <el-col :span="12">
                <el-form-item prop="captchatext" >
                    <el-input v-model="captcha_info.captchatext" auto-complete="off" placeholder="验证码, 单击图片刷新" style="width: 100%;" >
                    </el-input>
                </el-form-item>
            </el-col>
            <el-col class="line" :span="1">&nbsp;</el-col>
            <el-col :span="11">
                <el-form-item>
                    <img id="captcha" :src="imgUrl" @click="update"/>
                </el-form-item>
            </el-col>
        </el-form-item>
    </el-form>
</template>

<script>
    import { v4 as uuidv4 } from 'uuid'
    //引入uuid文件
    export default {
        data () {
            return {
                elId: '',
                imgUrl:'',
                captcha_info: {
                    captchatext: '',
                },
                rules: {
                    captchatext:[
                        { required: true, message: '请输入验证码', trigger: 'blur' },
                        { min:4 , max:4, message : '请输入4位字母或数字,不区分大小写',trigger : 'blur'}
                    ],
                },
            }
        },
        methods: {
            update(){
                this.elId = uuidv4(); //获取随机id
                this.axios.get('web/get_captcha?uuid='+this.elId).then(
                    response => {
                        if(response){
                            this.imgUrl = 'data:image/jpeg;base64,' + response.data;
                        }
                    }
                )
            }, 
        },
        mounted(){
            this.update();
        },
    }
</script>
