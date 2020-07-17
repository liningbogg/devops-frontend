<template>
    <div class="home">
        <div class="sidebar">
            <Sidebar />
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from '@/components/Sidebar.vue'

export default {
    name: 'Home',
    components: {
        Sidebar,
    }
}
</script>
<style scoped lang="less">
.sidebar{
    position: fixed;
    width: 20%;
    height: 80%;
}
.content{
    position:relative;
    width: 70%;
    height: 80%;
    float:right;

}
</style>
