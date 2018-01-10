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
<style lang="less" type="text/less" scoped>
  .publicNav{
    position: relative;
    background: #fff;
    /*left: 0;*/
    width: 100%;
    max-width: 1200px;
    min-width: 1024px;
    margin: 0 auto;
    ul{
      height: 60px;
      display: flex;
      align-items: center;
      padding: 0 50px;
      li{
        min-width: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 20px;
        height: 100%;
        font-size: 14px;
        &.navActive{
          position: relative;
          &:before{
            content: '';
            width: 100%;
            height: 3px;
            background: #333;
            position: absolute;
            top: 0;
            left: 0;
          }
        }
      }
    }
  }
</style>
<style lang="less" type="text/less">
  .publicNav{
    .navSelect{
      position: absolute!important;
      opacity: 0;
      width: 130px!important;
    }
    .el-icon-caret-top:before {
      content: "\E603";
      color: #333!important;
    }
    .el-input__inner{
      border:none!important;
      color: #212125;
      width: 130px!important;
    }
  }
  .el-select-dropdown__item.selected.hover{
    background-color: #ebebeb!important;
    color: #333!important;
  }
  .el-select-dropdown__item.selected{
    background-color: #ebebeb!important;
    color: #333!important;
  }
  .el-select-dropdown__list{
    padding: 0!important;
  }
</style>
