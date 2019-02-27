<template>
<div >

        <section class="pder pt20">
                <section class="yj4 bgff pd pt40 pm50">
                        <p class="cen">
                        <img src="../assets/img/user_tx.png" class="us_deert">
                        </p> 
                    <section class="mt40">
                    <p class="sdf_deert fz14">
                    
                        竞赛时间：100 分钟 <br>

合格标准：90 分<br>

出题规则：按“亿学杯”竞赛出题规则
                    </p>
                        
                    <p class="sdf_deert fz12 mt20 z9">
        温馨提示：模拟竞赛不能修改答案，每做错1道题扣2分，
合格标准为90分。
                </p>
                        
                          <p class="sdf_deert fz12 mt10 z9">
       竞赛无详解，当前试题可跳过，对错实时判定。
                              
                              <span class="f_b sdf_deerx">
            <van-switch v-model="checked" size="20px" />
                    </span>
                </p>
                        
                </section>
                    
                    <p class="mt40 fg_jjh_deert">
                        <van-button type="primary" @click="hf('jsz')">立即参赛</van-button>
                    </p>
                    
                    
                </section>
        </section>
    
</div>
</template>
<script>
    export default {
        data() {
            return {
                checked:false
            }
        },
        components: {

        },
        methods: {
            sd_deert(){
                console.log(2);
            }
        },
        mounted() {

        },
    }

</script>
<style scoped>
    .us_deert{
        width: 114px;
        height: 114px;
    }
    .sdf_deert{
        color: #5b64fd;
        font-size: 14px;
        line-height: 24px;
    }
    .sdf_deerx{
        position: relative;
        top: 6px;
    }
    .fg_jjh_deert{
        width: 210px;
        margin: auto;
        
    }
    .fg_jjh_deert button{
        background: #6378FF;
        border: 1px solid #6378FF;
        width: 100%;
        border-radius: 20px;
    }
</style>
