<template>
  <div id="app">
   

    <router-view v-wechat-title="$route.meta.title"/>
  </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        components: {

        },
        methods: {

        },
        mounted() {
            this.$route.meta.title="dsfdsf"
        },
    }

</script>


<style>


</style>
