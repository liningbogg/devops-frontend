<template>
    <el-table :data="problems"  ref="problemsTable">
        <el-table-column type="selection" width="55" align="center"></el-table-column>
        <el-table-column type="index" label="序号" width="60" align="center"></el-table-column>
        <el-table-column prop="date" label="时间" width="200" align="center"></el-table-column>
        <el-table-column prop="severity" label="程度" width="200" align="center"></el-table-column>
        <el-table-column prop="name" label="问题" width="400" align="center">
        </el-table-column>
    </el-table>
</template>
import axios from "axios"
Vue.prototype.axios = axios；
<script>
export default {
  name: 'Problems',
  data(){
    return{
        hostid:9999999,
        problems:[],
    }
  },
  methods:{
    dateFromDjango(){
      this.hostid = this.$route.query.hostid;
      this.axios.get('resourcemanagement/problems/?hostid='+this.hostid).then(
        response => {
          if(response){
            if(response.data.status==="success"){
                this.problems = response.data.body;
            }else{
                this.msg = "获取problem信息出错,原因:"+response.data.tip;
                console.log(this.msg);
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
