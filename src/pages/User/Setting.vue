<template>
  <div class="setting">
    <div class="logout" @click="logout">
      退出
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{

      }
    },
    methods:{
      logout(){
        localStorage.removeItem('userInfo')
        this.$router.push('/login')
      }
    }
  }
</script>
<style lang="less" type="text/less">
  .setting{
    .logout{
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 44px;
      background: #333;
      color: #fff;
      position: fixed;
      bottom: 0;
      left: 0;
    }
  }
</style>
