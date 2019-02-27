<template>
<div class="pder pt20">
    
    <section class="sd_kj_ps_ed">
            <section class="sd_kjjh_deert">
    
            <van-circle
  v-model="currentRate"
  rate="80"
  speed="100"
                        size="170px"
layer-color="#78BAF2"
    color="#F4FAFF"
>
            <section >
            <p class="pt30 cf">本次得分</p>
                <p class="mt10">
                    <span class="fz50  cf">80</span>
                </p>
                <p class="cf fz12 mt5">超过80%的人</p>
        </section>    
                
    </van-circle>
                
                
            </section>
        
        <van-row class="cen mt20 cf pm20">
            <van-col span="12">
                用时 <span class="fz12">00:12</span>
            </van-col>
            <van-col span="12">
            排名 <span class="fz12">10002</span>
            </van-col>
        </van-row>
    
       
        
        
        
    </section>
    
    
     <section class="bgff">
    
         <section class="pl40 pr40 pt20">
            <i class="f_i kjh_deetr"></i>
             <span class="fz12 ml5">查看错题</span>
             <i class="f_i sd_ryibai"></i>
             
             <section>
                <van-button type="primary" class="w100  sdf_deert" @click="hf('moni_jc')">去竞赛</van-button>
            </section>
             
        </section>
         
         
         <section class="mt30 pd">
        <i class="f_i jingsia_deng"></i> <span class="fz14 ml5">竞赛指导：</span>
             
             <section class="fz12 mt10 sdf_jh_dert pm20">
              <p class="pr"><span class="sdoh_deert"></span> 根据您的竞赛情况，发现以下知识掌握薄弱，答错率较高，请加强训练！</p>
              <p class="pr"><span class="sdoh_deert"></span>  推荐训练主题：
                 <span class="sd_sdf_a"> 国际风险与保险</span>
                  
                  <span class="sd_sdf_a ab"> 国际贸易</span>
                  <span class="sd_sdf_a ac"> 商务函电</span>
                </p>
                 
                 
            </section>
        
    </section>
         
         
         
        </section>

</div>
</template>
<script>
    export default {
        data() {
            return {
                currentRate: 0
            }
        },
        components: {

        },
        methods: {

        },
        mounted() {

        },
    }

</script>
<style scoped>
    .sd_kj_ps_ed {
        border-radius: 4px;
        background: linear-gradient(to right, #7B82FF, #6177FF);
        padding-top: 60px;
    }

    .sd_kjjh_deert {
        width: 170px;
        margin: auto;
    }
    .kjh_deetr{
        width: 23px;
        height: 28px;
        background-position: -310px -91px;
    }
    .sd_ryibai{
        width: 24px;
        height: 15px;
        background-position: -14px -161px;
        position: relative;
        top: -7px;
        margin-left: 2px;
    }
    .sdf_deert{
        background: #7B82FF;
        border:1px solid #7B82FF;
        border-radius: 20px;
        height: 35px;
        line-height: 35px;
        margin-top: 30px;
    }
    .jingsia_deng{
        width: 19px;
        height: 20px;
        background-position: -62px -156px;
    }
    .sdf_jh_dert{
        line-height: 1.8;
        padding-left: 15px;
    }
    .sdoh_deert{
        position: absolute;
        width: 6px;
        height: 6px;
        background: #999999;
        border-radius: 50%;
        position: absolute;
        left: -10px;
        top: 7px;
    }
    .sd_sdf_a{
        color: #65c8d0
    }
     .sd_sdf_a.ab{
        color: #76a5ff
    }
      .sd_sdf_a.ac{
        color: #8b72ff
    }
</style>
