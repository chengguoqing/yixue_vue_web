<template>
<section>
<!--
<van-nav-bar title="随机练习" left-arrow fixed>
    <van-icon name="search" slot="right" />
</van-nav-bar>
-->
 
	<div class="pder dsf_derrt">
	   

        
        <section class="yj4 bgff  pt20 pm50 pr ">
            <span class="sd_jh_ddff fz14 cz">
                1/50
            </span>
            <section class="pd">
            <p class="fz13 z6 pm15">
                <span class="danh_rtt">单选</span>
                一般情况下，商业发票的金额应与（  ）一致。
            </p>
            
            <section v-for="(sd,idx) in timu_d" class="fz13 z6 sdf_ddrt">
                <span class="ls df_xddrx f_b">
                   <span v-if="idx!=0&&idx!=3"> {{sd.xz}}</span>
                    <i class="f_i gous_ddr" v-if="idx==0"></i>
                    <i class="f_i gous_ddr ab" v-if="idx==3"></i>
                </span>
                <span class="">{{sd.timu}}</span>
            </section>
            </section>
            
            <van-row class="cen mt40">
                <van-col span="12">
                    <section class="df_dff_rert">
                        正确答案 
                    </section>
                </van-col>
                <van-col span="12">
                     <section class="df_dff_rert ab">
                        答错率  
                    </section>
                </van-col>
            </van-row>
            
                  <van-row class="cen ">
                <van-col span="12">
                    <section class="dsd_jh_dr">
                        A 
                    </section>
                </van-col>
                <van-col span="12">
                    <section class="dsd_jh_dr ab">
                        60.8%
                    </section>
                </van-col>
            </van-row>
            
            <section class="pd mt20">
                <i class="f_i jiexi_dt"></i>
                <span class="fz14 ls ml10">  解析</span>
            </section>
            
            <section class="pd pt10">
            <section v-for="sd in jiexi" class="z6 fz13 df_hj_dert">
                <span class="sd_jh_ddfg fl">{{sd.xz}}</span>
                <section class="ov">
                    {{sd.neirong}}
                </section>
                <p class="qc"></p>
            </section>
                
                
                
                </section>
            
            
            
            
        </section>
        
        <section class="sd_jh_Derrt btm">
    
           <van-row>
               <van-col span="15">
                     <span @click="sd_sdff?sd_sdff='':sd_sdff='act'">
                <i class="f_i shoyh_icon " :class="sd_sdff"></i>
                <span class="fz15 z6 ml5">收藏</span>
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
                   
        <datika @close_btn="show_er=false"></datika>
        
        
                </van-popup>
        
     
	</div>
       </section>
</template>
<script>
    import datika from "../components/datika"
    export default {
        data() {
            return {
                show_er: false,
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
        onNavigationBarButtonTap(e) {
            console.log(22);
			alert(2)
		},
        mounted() {
            this.Title(this.$route.query.title)
        },
    }

</script>
<style scoped>
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

</style>
