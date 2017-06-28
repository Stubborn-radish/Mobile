<template>
  <div class="list">
    <ul>
      <li @click="next1()">
        <button >> 特别关心</button>
        <li v-for="a in mcList" v-if="f">{{a.name+a.qq}}</li>
      </li>
      <li @click="next2">
        <button>> 东方树叶</button>
        <li v-for="a in elList" v-if="b">{{a.name+a.qq}}</li>
      </li>
      <li @click="next3">
        <button>> 美汁源</button>
        <li v-for="a in mzyList" v-if="c">{{a.name+a.qq}}</li>
      </li>
      <li @click="next4">
        <button>> 苹果汁</button>
        <li v-for="a in pgzList" v-if="d">{{a.name+a.qq}}</li>
      </li>
      <li @click="next5">
        <button>> 脉动</button>
        <li v-for="a in mdList" v-if="e">{{a.name+a.qq}}</li>
      </li>
    </ul>
  </div>
</template>
<script>
  import Axios from 'axios'
  export default {
    data(){
      return{
        mcList:[],
        elList:[],
        mzyList:[],
        pgzList:[],
        mdList:[],
        f:false,
        b:false,
        c:false,
        d:false,
        e:false
      }
    },
    methods:{
      next1:function(){
         this.f=!this.f;
//         console.log(this.isShow);
//        console.log(this.mcList);

      },
      next2:function(){
        this.b = !this.b;
      },
      next3:function(){
        this.c = !this.c;
      },
      next4:function(){
        this.d = !this.d;
      },
      next5:function(){
        this.e = !this.e;
      }
    },
    mounted(){
      Axios.get('static/contact-list.json').then((res)=>{
//        console.log(res.data);
          this.mcList = res.data.morecare;
          this.elList = res.data.eastleaf;
          this.mzyList = res.data.meizhiyuan;
          this.pgzList = res.data.pingguzhi;
          this.mdList = res.data.maidong;
//          console.log(res.data.morecare);
    })
    }
  }
</script>
<style scoped>
  @import "../../assets/css/reset.css";
  *{
    margin: 0;
    padding: 0;
  }
  .list{
    /*position: fixed;*/
    /*top: 12rem;*/
    margin: 12rem 0 6rem;
    line-height: 4rem;
    width: 100%;
  }
  .list button{
    border: none;
    background: transparent;
  }
  .list ul {
    width: 100%;
  }
  .list li{
    width: 100%;
    text-align: left;
    text-indent: 1rem;
  }

</style>
