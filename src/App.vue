<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data(){
      return {}
    },
    created(){
      let self = this
    }
  }
</script>
<style lang="less" type="text/less">
  *{
    font-family: "Microsoft YaHei";
  }
  #app{
    max-width: 1200px;
    min-height: calc(~'100vh');
    margin: 0 auto;
    min-width: 1024px;
    background: #fff;
    position: relative;
    /*padding-top: 150px;*/
    /*margin-bottom: 30px;*/
  }
</style>
