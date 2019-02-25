<!--答题卡-->

<template>
	<div >
	
       <p class="fz15 sd_deerrtx pder">
           答题卡
           <i class="f_i close_iconse" @click="$emit('close_btn')"></i>
        </p>
        
        <section class="box pder dsf_jh_deet">
                <section class="box_b" v-if="type==1">
                    <i class="f_i shg_dert ab"></i>
                    <span class="fz14 ml5">交卷</span>
                </section>
                <section class="box_b" v-if="type!=1">
                    <i class="f_i shg_dert"></i>
                    <span class="fz14 ml5">已收藏</span>
                </section>
            
                <section class="box_b">
                     <i class="f_i hou_ddrt"></i>
                            9
                    <span>
                  <i class="f_i hou_ddrt ab ml10"></i>
                            9
                    </span>
                </section>
            
            <section class="box_a">
                    <span class="sd_j_derttx fz12">12/50</span>
             </section>
            
             <section class="box_a fz12 tr" @click="tishi">
                    <i class="f_i laj_ddfd"></i> 
                 <span class="ml10">清空</span>
            </section>
            
        </section>
        
        <section class="pder pt10 btm cen pm20">
            <van-row>
                <van-col span="4" v-for="(sd,idx) in 50" class="ddf_jh_deret">
                    <span class="yj sd_jh_dertt">{{idx+1}}</span>
                </van-col>
            </van-row>
            
        </section>
        
         

	</div>
</template>
<script>
    export default {
        props: {
            type: ""
        },
        data() {
            return {

            }
        },
        components: {

        },
        methods: {
            tishi() {
                this.$dialog.confirm({
                    title: '提示',
                    message: '你确定清空所有题目的做题记录吗？'
                }).then(() => {
                    // on confirm
                }).catch(() => {
                    // on cancel
                });
            }
        },
        mounted() {

        },
    }

</script>
<style scoped>
    .sd_deerrtx {
        background: #6B7BFF;
        color: #fff;
        line-height: 40px;
    }

    .shg_dert {
        width: 29px;
        height: 29px;
        background-position: -14px -90px;
    }
    .shg_dert.ab{
              background-position: -162px -91px
    }

    .dsf_jh_deet {
        line-height: 40px;
    }

    .sd_j_derttx {
        background: #2FC2EB;
        color: #fff;
        display: inline-block;
        width: 51px;
        line-height: 22px;
        border-radius: 3px;
        text-align: center;
    }

    .laj_ddfd {
        width: 15px;
        height: 18px;
        background-position: -69px -101px;
    }

    .sd_jh_dertt {
        width: 27px;
        height: 27px;
        display: inline-block;
        text-align: center;
        line-height: 27px;
        border: 1px solid #999999;
        color: #999999;
        font-size: 14px;
    }

    .ddf_jh_deret {
        padding-top: 8px;
    }

    .close_iconse{
        width: 25px;
        height: 26px;
        background-position: -260px -94px;
        position: absolute;
        right: 10px;
        top: 7px;
    }
</style>
