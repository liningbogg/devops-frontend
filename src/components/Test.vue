<template>
  <div class="test">
    <h1>{{ msg }}</h1>
  </div>
</template>
import axios from "axios"
Vue.prototype.axios = axios；
<script>
export default {
  name: 'Test',
  data(){
    return{
      msg:"waiting for django"
    }
  },
  methods:{
    dateFromDjango(){
      this.axios.get('web/test/').then(
        response => {
          if(response){
            if(response.data.status==="success"){
                this.msg = response.data.message;
            }else{
                this.msg = "获取时间信息出错,原因:"+response.data.tip;
            }

          }
        }
      )
    },
    
  },
  mounted(){
    this.dateFromDjango();
  },
    
}
</script>
