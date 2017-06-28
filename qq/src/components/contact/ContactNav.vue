<template>
  <div class="nav">
    <ul>
      <li>好友</li>
      <li>群</li>
      <li>多人聊天</li>
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
<style scoped>
  @import "../../assets/css/reset.css";
  *{
    margin: 0;
    padding: 0;
  }
  .nav{
    position: fixed;
    top: 5rem;
    height: 5rem;
    width: 100%;
    background: #0000ff;
    color: #ffffff;
  }
  .nav ul{
    display: flex;
  }
  .nav ul li{
    float: left;
    flex: 1;
    line-height: 5rem;
  }
</style>
