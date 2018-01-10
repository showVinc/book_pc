<template>
  <div class="publicNav">
    <ul class="topNav">
     <li v-for="item,index in navList" :class="{'navActive':number==index}" @click="navClick(item,index)">
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
            title:'全部分类'
          },
          {
            title:'排行榜'
          },
          {
            title:'免费'
          },
          {
            title:'完本'
          },
          {
            title:'古代言情'
          },
          {
            title:'现在言情'
          },
          {
            title:'玄幻仙侠'
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
