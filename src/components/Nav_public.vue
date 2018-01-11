<template>
  <div class="publicNav">
    <ul class="topNav">
     <li v-for="item,index in navList" :class="{'navActive':number==index}" @click="navClick(item,index)">
       <img :src="item.img" alt="">
        {{item.title}}
     </li>
    </ul>
  </div>
</template>
<script>
  export default {
    props:{
      type:String
    },
    data(){
      return {
        number:'',
        navList:[
          {
            title:'全部分类',
            img:require('../assets/images/user/user.png')
          },
          {
            title:'排行榜',
            img:require('../assets/images/user/user.png')
          },
          {
            title:'完本',
            img:require('../assets/images/user/user.png')
          },
          {
            title:'古代言情',
            img:require('../assets/images/user/user.png')
          },
          {
            title:'现在言情',
            img:require('../assets/images/user/user.png')
          }
        ],
      }
    },
    methods:{
      navClick(item,index){
        this.number = index
      }
    },
    mounted(){
      if(this.type){
        this.number = this.type
      }
    }
  }
</script>
<style lang="less" type="text/less">
  .topNav{
    display: flex;
    padding: 15px 0;
    box-sizing: border-box;
    height: 100px;
    li{
      flex:1;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      img{
        width: 45px;
        height: 45px;
        margin-bottom: 5px;
      }
    }
  }
</style>
