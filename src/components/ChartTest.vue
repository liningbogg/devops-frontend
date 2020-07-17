<template>
    <span v-if="this.$store.state.username">
        <chart ref="chart_test" :options="chartOptions" :auto-resize="true"></chart>
    </span>
</template>

<script>
    export default {
        name: 'ChartTest',
        data () {
            return {
                chartOptions: {
                },
            }
        },
        methods: {
            update(){
                this.axios.get('resourcemanagement/getSnmpInfo?oid=hrSystemUptime').then(
                    response => {
                        if(response){
                            if(response.data.status==="success"){
                                let sys_time = response.data.sys_time;
                                let x_index = response.data.x_index;
                                this.chartOptions = {
                                    xAxis: {
                                        data: x_index
                                    },
                                    yAxis: {
                                        scale: 'true'
                                    },
                                    series: [
                                        {
                                            data: sys_time,
                                            type: 'line',
                                            smooth: true
                                        }
                                    ],
                                    grid:{
                                        left:"15%",
                                        right:"5%",
                                    }
                                }
                            }else{
                                clearInterval(this.timer);
                                alert("获取snmp信息测试失败，原因:"+response.data.tip);
                            }
                            //this.imgUrl = 'data:image/jpeg;base64,' + response.data;
                        }
                    }
                )
            }, 
        },
        mounted(){
            if(this.$store.state.username){
                this.timer = setInterval(this.update, 1000);
            }
        },
        beforeDestroy() {
            clearInterval(this.timer);
        }
    }
</script>
<style scoped lang="less">
</style>

