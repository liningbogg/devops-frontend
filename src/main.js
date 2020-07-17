import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui' //element-ui的全部组件
import 'element-ui/lib/theme-chalk/index.css'//element-ui的css
import axios from 'axios'
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/line'
Vue.use(ElementUI) //使用elementUI
Vue.prototype.axios = axios
Vue.config.productionTip = false
Vue.component('chart', ECharts)

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
        console.log(store)
        if (store.state.token) {  
            // 此处添加代码向服务端请求用户实际登录状态
            //
            if(Object.keys(from.query).length === 0){
                next();
            }else{
                let redirect = from.query.redirect;
                if(to.path === redirect){
                    next();  //避免重复循环
                }else{
                    next({path:redirect})  //跳转到目的路由
                }
            }
        } else {

            if(to.path === "/login"){
                next();
            }else{
                next({
                    path:"/login",
                    query: {redirect: to.fullPath}//将目的路由地址存入login的query中
                });
            }
        }
    } else {
        next();
    }
    return
}),


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

