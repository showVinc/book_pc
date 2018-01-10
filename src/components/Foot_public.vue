<template>
  <div class="publicFoot">
    <div class="footLeft">
      圖片
      <span>
        2017
      </span>
    </div>
    <div class="footRight">

    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {

      }
    }
  }
</script>
<style lang="less" type="text/less" scoped>
  .publicFoot{
    height: 120px;
    background: #212125;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: 0;
    width: 100%;
    min-width: 1024px;
    max-width: 1200px;
    box-sizing: border-box;
    color: #ebebeb;
    font-size: 13px;
    padding: 0 50px;
    .footLeft{
      display: flex;
      flex-direction: column;
    }
    .footRight{
      ul{
        display: flex;
        li{
          position: relative;
          margin-right: 60px;
          &:before{
            content: '';
            width: 4px;
            height: 4px;
            background: #ebebeb;
            position: absolute;
            border-radius: 50%;
            right: -30px;
            top:calc(~'50% - 2px');
          }
          &:last-child{
            margin: 0;
            &:before{
              content: '';
              width: 0;
              height: 0;
            }
          }
        }
      }
    }
  }
</style>
