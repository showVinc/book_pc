<template>
  <div class="publicTop">
    <div>
      logo
    </div>
    <div class="userTop">
      <img src="../assets/images/user/user.png">
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
    height: 44px;
    padding: 0 15px;
    background: #fff;
    .userTop{
      img{
        width: 25px;
        height: 25px;
      }
    }
  }
</style>
