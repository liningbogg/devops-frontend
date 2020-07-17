<template>
    <div>
        <el-row class="tac">
        <el-col :span="24" >   
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#00ffff" active-text-color="#ffd04b">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-s-platform"></i>
                    <span>监控面板</span>
                </template>
                <el-menu-item-group>
                    <router-link to="/Host">
                    <el-menu-item index="1-1">主机</el-menu-item>
                    </router-link>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-s-tools"></i>
                    <span>系统设置</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="1-1">权限管理</el-menu-item>
                    <el-menu-item index="1-2">角色管理</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-user-solid"></i>
                    <span>人员数据</span>
                </template>
                <el-menu-item-group>        
                    <el-menu-item index="1-1">人员数量</el-menu-item>
                    <el-menu-item index="1-2">人员位置</el-menu-item>
                </el-menu-item-group>
            </el-submenu>      
            <el-submenu index="4">
                <template slot="title">
                    <i class="el-icon-message-solid"></i>
                    <span>健康报警</span>
                </template>
                <el-menu-item-group>       
                    <el-menu-item index="1-1">心率报警</el-menu-item>
                    <el-menu-item index="1-2">血压报警</el-menu-item>
                </el-menu-item-group>
            </el-submenu>     
        </el-menu>
        </el-col>
        </el-row>
    </div>
</template>
<script>
    export default {
        name: 'Sidebar',
        data () {
            return {
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        mounted(){
        },
    }
</script>
<style scoped lang="less">
</style>

