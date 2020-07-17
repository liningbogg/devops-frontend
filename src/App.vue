<template>
    <div id="app">
        <div id = "up">
            <div id="title_view">
                <h2>运维自动化系统</h2>
            </div>
            <div id="nav">
                <router-link to="/">主页</router-link> |
                <span class="pull-right">
                    <span v-if="!this.$store.state.username">
                        <router-link to="/about">关于</router-link>|
                        <router-link to="/login">登录</router-link>|
                        <router-link to="/register">注册</router-link>
                    </span>
                    <span v-else>
                        <span>用户名:{{this.$store.state.username}}(已登录)</span>|
                        <router-link to="/about">关于</router-link>|
                        <router-link to="/logout">Logout</router-link>
                    </span>
                </span>
            </div>
        </div>
        <router-view/>
    </div>
</template>

<style lang="less">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
#title_view{
    height:30px;
}
#nav {
    
    padding: 30px;
    height:30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
