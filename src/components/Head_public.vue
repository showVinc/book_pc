<template>
  <div class="publicTop">
    <div class="headLeft" @click="$router.push('/')">
      Logo
    </div>
    <div class="headRight">
      <div v-if="!uid">
        <img src="../assets/images/user/user.png" @click="$router.push('/login')">
      </div>
      <div v-if="uid">
        <img src="../assets/images/user/user.png">
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        langShow: false,
        userShow: false,
        uid:'',
      }
    },
    methods:{
    }
  }
</script>
<style lang="less" type="text/less" scoped>
  .publicTop{
    width: 100%;
    margin: 0 auto;
    max-width: 1200px;
    min-width: 1024px;
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 50px;
    /*position: fixed;*/
    /*top: 0;*/
    position: relative;
    background: #fff;
    z-index: 999;
    &:before{
      content: '';
      position: absolute;
      width: calc(~'100% - 100px');
      left: 50px;
      bottom: 0;
      height: 1px;
      background: #f2f2f2;
    }
    .headRight{
      display: flex;
      align-items: center;
      justify-content: center;
      div{
        display: flex;
        align-items: center;
        justify-content: center;
        img{
          width: 50px;
          height: 50px;
          margin-left: 15px;
        }
      }
    }
  }
</style>
<style lang="less" type="text/less">
  /*.el-select-dropdown__item.selected.hover{*/
    /*background-color: #ebebeb!important;*/
    /*color: #333!important;*/
  /*}*/

  /*.el-select-dropdown__item.selected.hover{*/
    /*background-color: #ebebeb!important;*/
    /*color: #333!important;*/
  /*}*/
  /*.el-select-dropdown__item.selected{*/
    /*background-color: #ebebeb!important;*/
    /*color: #333!important;*/
  /*}*/
  /*.el-select-dropdown__list{*/
    /*padding: 0!important;*/
  /*}*/

  /*.el-input__inner{*/
    /*border:none!important;*/
    /*width: 100px;*/
    /*height: 40px;*/
    /*border-radius: 2px!important;*/
  /*}*/

  /*.el-icon-caret-top:before {*/
    /*content: "\E603";*/
  /*}*/


  /*.publicTop{*/
    /*.el-select{*/
      /*opacity: 0;*/
      /*position: absolute!important;*/
      /*top:0;*/
      /*left: 0;*/
    /*}*/
  /*}*/
</style>
