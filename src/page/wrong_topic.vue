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
           
                <p class="mt60">
                    <span class="fz50  cf">80</span>
                    <span class="fz16 cf ml5">题</span>
                </p>
              
        </section>    
                
    </van-circle>
              
                
                
            </section>
        
          <p class="cen cf fz14 mt20 pm40">多选题一片惨淡，要多多练习哇~</p>
    </section>
    
    <section class="pder bgff pt20 sdf_deeet">
    
        <van-row class="Sd_jh_Deetr">
            <van-col span="12" class="fz16">
                <span class="sd_dff_dre">1</span>
                单选题 <span class="ml5 fz12">20</span>
            </van-col>
               <van-col span="12" class="fz16">
                <span class="sd_dff_dre ab">2</span>
                多选题 <span class="ml5 fz12">20</span>
            </van-col>
               <van-col span="12" class="fz16">
                <span class="sd_dff_dre ac">3</span>
                判断题 <span class="ml5 fz12">20</span>
            </van-col>
               <van-col span="12" class="fz16">
                <span class="sd_dff_dre ad">4</span>
                翻译题 <span class="ml5 fz12">20</span>
            </van-col>
        </van-row>    
        
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
    .sd_dff_dre{
        width: 24px;
        height: 24px;
        display: inline-block;
        background: #6699FF;
        border-radius: 50%;
        text-align: center;
        line-height: 24px;
        color: #fff;
        margin-right: 5px;
        
    }
    .Sd_jh_Deetr{
        line-height: 40px;
    }
    .sd_dff_dre.ab{
        background: #99CC00
    }
 .sd_dff_dre.ac{
        background: #FFCC66
    }

     .sd_dff_dre.ad{
        background: #9999FF
    }
    .sdf_deeet{
        min-height: 200px;
    }
</style>
