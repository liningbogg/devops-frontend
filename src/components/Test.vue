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
      let timer= 0;
      this.axios.get('web/test/').then(
        response => {
          if(response){
            this.msg = response.data;
            console.log(response.data);
            timer = setTimeout(()=>{
              this.dateFromDjango();
            }, 100);

          }else{
            clearTimeout(timer);
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
