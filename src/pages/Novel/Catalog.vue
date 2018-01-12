<template>
  <div class="catalog">
    <div class="catalogTop">
      <div>
        {{novelInfo.title}}
      </div>
      <div>
        <img src="../../assets/images/public_img/search.png">
      </div>
    </div>
    <div class="publicMain">
      <div>
        {{novelInfo.title}}
      </div>
      <p>
        {{novelInfo.content}}
      </p>
      <div @click="likeClick" style="background: #333;color: #fff;margin-top: 30px">
        {{novelInfo.n_like}}
        <p>点赞按钮</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        novelInfo:{},
      }
    },
    methods: {
      likeClick(){
        this.$http.post(`${process.env.API.API}/novel`,{like:1,id:this.novelInfo.ID}).then(res=>{
          if(res.data.code==0){
            this.novelInfo.n_like = this.novelInfo.n_like+1
          }
        }).catch(err=>{
          console.log(err)
        })
      }
    },
    created() {
    },
    mounted(){
      this.$http.get(`${process.env.API.API}/novel?id=${this.$route.query.id}`).then(res=>{
        if(res.data.code==0){
          this.novelInfo = res.data.data;
        }
      }).catch(err=>{
        console.log(err)
      })
    },
    //获取底部组件
    components: {}
  }
</script>
<style lang="less" scoped type="text/less">
  .catalog{
    .catalogTop{
      background: #333;
      color: #fff;
    }
  }
</style>
