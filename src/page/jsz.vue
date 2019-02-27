<template>
<section>
<!--
<van-nav-bar title="随机练习" left-arrow fixed>
    <van-icon name="search" slot="right" />
</van-nav-bar>
-->
 
	<div class="pder dsf_derrt">
	   

        
        <section class="yj4 bgff  pt20 pm50 pr sdf_deeert">
            <span class="sd_jh_ddff fz14 cz">
                1/50
            </span>
            
            <section class="sd_jh_deerrt">
                <i class="f_i time_icons"></i>
                <span>01：59：23</span>
            </section>
            
            <section class="pd">
            <p class="fz13 z6 pm15">
                <span class="danh_rtt">单选</span>
                一般情况下，商业发票的金额应与（  ）一致。
            </p>
            
            <section v-for="(sd,idx) in timu_d" class="fz13 z6 sdf_ddrt">
                <span class="ls df_xddrx f_b">
                   <span > {{sd.xz}}</span>
                   
                </span>
                <span class="">{{sd.timu}}</span>
            </section>
            </section>
            
         
               
     
         
            
            
            
        </section>
        
        <section class="sd_jh_Derrt btm">
    
           <van-row>
               <van-col span="15">
                     <span @click="show=true">
                <i class="f_i dsfsd_deert " ></i>
                <span class="fz15 z6 ml5">交卷</span>
            </span>
            
            
              <span class="ml20" @click="show_er=true">
                <i class="f_i shoyh_icon ab"></i>
                <span class="fz15 z6 ml5">答题卡</span>
            </span>
    
                   
                   
                </van-col>
               <van-col span="9" class="tr z6">
    
                    <van-row>
                        <van-col span="12">
                            <i class="f_i hou_ddrt"></i>
                            9
                        </van-col>
                        <van-col span="12">
                         <i class="f_i hou_ddrt ab"></i>
                            9
                        </van-col>
                    </van-row>
                </van-col>
           </van-row>
    
            </section>
        

           <van-popup v-model="show_er" position="bottom" >
                   
        <datika type="1" @close_btn="show_er=false"> </datika>
        
        
                </van-popup>
        
        
        
        
        <van-dialog
  v-model="show"
show-cancel-button
cancel-button-text="现在交卷"
confirm-button-text='继续作答'
@cancel="hf('competition_results')"
>
 
    <p class="cen fz16 z3 pt15">
        确定交卷退出竞赛吗？
    </p>        
    <section class="mt20 cen fz14 fsd_dderrt">
    您还剩   <span class="ls">48</span>   题未做 <br>
        打错     <span class="ye">3</span>    题<br>
        竞赛得分      <span class="ls">0</span>   分
    </section>        
            
</van-dialog>
        
        
        
        
                <van-dialog
  v-model="show_san"
confirm-button-text='继续挑战'
>
 
    <p class="cen fz16 z3 pt15">
        成绩不合格
    </p>        
    <section class="mt20 cen fz14 fsd_dderrt">
        您还剩  <span class="ls">48</span>      题未做<br>
        打错     <span class="ye">3</span>    题<br>
       竞赛得分 <span class="ls">&lt;9</span>       分,不合格
    </section>        
            
</van-dialog>
        
        
        
        
        
     
	</div>
       </section>
</template>
<script>
    import datika from "../components/datika"
    export default {
        data() {
            return {
                show:false,
                show_er: false,
                show_san:false,
                sd_sdff:"act",
                timu_d: [{
                    xz: "A",
                    timu: "合同金额"
                }, {
                    xz: "B",
                    timu: "信用证金额"
                }, {
                    xz: "C",
                    timu: "保险金额"
                }, {
                    xz: "D",
                    timu: "实际发货金额"
                }],
                jiexi: [{
                    xz: "A",
                    neirong: "商业发票的金额与合同金额一致，但不能超过信用证金额。"
                }, {
                    xz: "B",
                    neirong: "商业发票的金额与合同金额一致。"
                }, {
                    xz: "C",
                    neirong: "商业发票但不能超过信用证金额。"
                }, {
                    xz: "D",
                    neirong: "合同金额一致，但不能超过信用证金额。"
                }]
            }
        },
        components: {
            datika
        },
        methods: {
            teer() {
               
            }
        },
        mounted() {

        },
    }

</script>
<style scoped>
    .sd_jh_deerrt{
        position: absolute;
        right: -5px;
        top: -20px;
        font-size: 12px;
        color: #808080;
        background: #fff;
        border-radius: 20px;
        height: 28px;
        line-height: 28px;
            box-shadow: 0 0px 4px rgba(0,0,0,.2);
        padding-right: 10px;
        transform: scale(0.9)
    }
    .time_icons{
        width: 27px;
        height: 28px;
        background-position: -118px -91px;
        margin-right: 4px;
        position: relative;
        top: -1px;
    }
    
    .sdf_deeert{
        min-height: 400px
    }
    .sd_jh_ddff {
        background: #2FC2EB;
        color: #fff;
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
        width: 52px;
        text-align: center;
        line-height: 25px;
        top: -12px;
        box-shadow: 0 0px 6px rgba(0, 0, 0, .2);
        border-radius: 2px;
    }

    .danh_rtt {
        border: 1px solid #2FC2EB;
        color: #2FC2EB;
        padding: 2px 4px;
        margin-right: 4px;
        font-size: 12px;
    }

    .sdf_ddrt {
        line-height: 28px;
    }

    .df_xddrx {
        width: 25px;
        text-align: center;
        margin-right: 5px;
    }

    .gous_ddr {
        width: 20px;
        height: 20px;
        background-position: -14px -44px;
        position: relative;
        top: -2px
    }

    .gous_ddr.ab {
        background-position: -52px -44px;
    }

    .df_dff_rert {
        color: #fff;
        background: #6779FF;
        line-height: 35px;
        font-size: 13px;
    }

    .df_dff_rert.ab {
        background: #76A5FF
    }

    .dsd_jh_dr {
        color: #6779FF;
        line-height: 25px;
        border: 1px solid #6779FF;
        border-left: 0px;
        font-size: 13px;
    }

    .dsd_jh_dr.ab {
        color: #76a5ff;
        border: 1px solid #76a5ff;
        border-right: 0px;
        border-left: 0
    }

    .jiexi_dt {
        width: 19px;
        height: 17px;
        background-position: -96px -47px;
    }

    .sd_jh_ddfg {
        width: 20px;
        margin-right: 5px;
        text-align: center;
    }

    .df_hj_dert {
        line-height: 22px;
    }

    .sd_jh_Derrt {
        position: fixed;
        left: 0px;
        width: 100%;
        line-height: 50px;
        height: 50px;
        background: #fff;
        bottom: 0px;
        z-index: 100;
        padding-left: 30px;
        padding-right: 30px;
    }

    .shoyh_icon {
        width: 29px;
        height: 28px;
        background-position: -136px -36px;
    }
    .shoyh_icon.act{
           background-position: -14px -90px;
    }

    .shoyh_icon.ab {
        background-position: -193px -36px;
    }

    .dsf_derrt {
        padding-top: 30px;
    }
    
    .dsfsd_deert{
        width: 29px;
        height: 29px;
        background-position: -162px -91px
    }
    .fsd_dderrt{
        line-height: 1.5;
        padding-bottom: 20px;
    }
</style>
