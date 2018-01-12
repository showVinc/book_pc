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
      let userInfo = localStorage.getItem('userInfo')
      if(userInfo){
        self.$store.state.userInfo = JSON.parse(localStorage.getItem('userInfo'))
      }
    }
  }
</script>
<style lang="less" type="text/less">
  *{
    font-family: "Microsoft YaHei";
  }
</style>
