<template>
  <div class="publicTop">
    <div class="logo">
      <img src="../assets/images/public_img/logo.png">
    </div>
    <div class="userTop">
      <div @click="$router.push('/login')" v-if="$store.state.userInfo&&!$store.state.userInfo.username">
        <img src="../assets/images/user/user.png">
      </div>
      <div @click="$router.push('/user/setting')" v-if="$store.state.userInfo&&$store.state.userInfo.username">
        <img src="../assets/images/user/isUser.jpg">
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    padding: 0 15px;
    background: #fff;
    box-sizing: border-box;
    .logo{
      img{
        width: 40px;
      }
    }
    .userTop{
      img{
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }
    }
  }
</style>
