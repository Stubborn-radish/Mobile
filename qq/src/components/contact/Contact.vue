<template>
  <div class="contact">
    <common-header>
      <button>{{$store.state.nav}}</button>
    </common-header>
    <contact-nav></contact-nav>
    <contact-list></contact-list>
    <common-footer></common-footer>
  </div>
</template>
<script>
  import CommonHeader from '../common/CommonHeader'
  import CommonFooter from '../common/CommonFooter'
  import ContactNav from './ContactNav'
  import ContactList from './ContactList'
  export default {
    data(){
      return{

      }
    },
    components:{
        CommonHeader,
        CommonFooter,
        ContactNav,
        ContactList
    },
    mounted(){
      this.$store.dispatch('changeTitle',['联系人','blue','首页']);
    }
  }
</script>
<style scoped>
  @import "../../assets/css/reset.css";
</style>
