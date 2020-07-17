<template>
  <div class="RetrievePassword">
    <h1>{{ username }}</h1>
  </div>
</template>
import axios from "axios"
Vue.prototype.axios = axios；
<script>
export default {
  name: 'RetrievePassword',
  data(){
    return{
      username:"",
    }
  },
  methods:{
    
  },
  mounted(){
  },
    
}
</script>
