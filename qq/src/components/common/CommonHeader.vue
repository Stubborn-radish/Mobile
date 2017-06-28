<template>
  <div class="header" :style="{background:$store.state.color}">
    <slot>
      <button @click="back" :style="{background:$store.state.color}">{{$store.state.nav}}</button>
    </slot>
    <h2>{{$store.state.title}}</h2>
  </div>
</template>
<script>
  export default {
    data(){
      return{

      }
    },
    methods:{
      back:function(){
        history.go(-1);
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
  .header{
    position: fixed;
    top: 0;
    height: 5rem;
    width: 100%;
    background: #00f;
    display: flex;
    color: #fff;
  }
  button{
    width: 5rem;
    height: 5rem;
    border: none;
    color: #fff;
    background: #0000ff;
  }
  h2{
    flex: 1;
    width: 5rem;
    height: 5rem;
    text-indent: -5rem;
    line-height: 5rem;
    text-align: center;
  }
</style>
