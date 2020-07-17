<template>
    <el-table :data="hosts"  ref="hostsTable">
        <el-table-column type="selection" width="55" align="center"></el-table-column>
        <el-table-column type="index" label="序号" width="60" align="center"></el-table-column>
        <el-table-column prop="hostid" label="主机id" width="100" align="center"></el-table-column>
        <el-table-column prop="host" label="主机名" width="200" align="center"></el-table-column>
        <el-table-column prop="hostip" label="主机ip地址" width="200" align="center"></el-table-column>
        <el-table-column prop="items_num" label="监控项" width="100" align="center"></el-table-column>
        <el-table-column prop="graphs_num" label="图形" width="100" align="center"></el-table-column>
        <el-table-column prop="problems_num" label="问题" width="100" align="center">
            <template slot-scope="scope">
                <a > <router-link :to="{path:'/Problems',query: {hostid: scope.row.hostid}}"> {{ scope.row.problems_num}}</router-link></a>
            </template>
        </el-table-column>
        </el-table>
</template>
import axios from "axios"
Vue.prototype.axios = axios；
<script>
export default {
  name: 'Host',
  data(){
    return{
        hosts:[],
    }
  },
  methods:{
    dateFromDjango(){
      this.axios.get('resourcemanagement/host/').then(
        response => {
          if(response){
            if(response.data.status==="success"){
                this.hosts = response.data.body;
            }else{
                this.msg = "获取主机信息出错,原因:"+response.data.tip;
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
