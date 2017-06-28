<template>
  <div class="message">
    <common-header></common-header>
    <common-footer></common-footer>
  </div>
</template>
<script>
  import CommonHeader from '../common/CommonHeader'
  import CommonFooter from '../common/CommonFooter'
  export default {
    data(){
      return{

      }
    },
    components:{
      CommonHeader,
      CommonFooter
    },
    mounted(){
      this.$store.dispatch('changeTitle',['消息','green','<']);
    }
  }
</script>
<style scoped>

</style>
