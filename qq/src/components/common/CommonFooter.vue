<template>
  <div class="footer" :style="{background:$store.state.color}">
    <ul>
      <li><router-link to="/contact">联系人</router-link></li>
      <li><router-link to="/message">消息</router-link></li>
      <li><router-link to="/action">动态</router-link></li>
    </ul>
  </div>
</template>
<script>
  export default {
    data(){
    return{

    }
    }
  }
</script>
<style  scoped>
  @import "../../assets/css/reset.css";
  *{
    margin: 0;
    padding: 0;
  }
  .footer{
    height: 5rem;
    width: 100%;
    background: #0000ff;
    color: #fff;
    position: fixed;
    bottom: 0;
  }
  .footer ul{
    display: flex;
  }
  .footer ul li{
    float: left;
    flex: 1;
    line-height: 5rem;
    text-align: center;
    /*font-size: 20px;*/
  }
  a.router-link-active {
    color: #fff;
  }


</style>
