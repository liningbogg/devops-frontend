<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>|
            <span class="pull-right">
                <span v-if="!this.$store.state.name">
                    <router-link to="/login">Login</router-link>|
                    <router-link to="/register">Register</router-link>
                </span>
                <span v-else>
                    <span>{{this.$store.state.name}}</span>
                    <router-link to="/logout">Logout</router-link>
                    <!-- <a @click="logout">Logout</a> -->
                </span>
            </span>
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

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
