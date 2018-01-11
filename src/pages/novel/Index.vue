<template>
  <div class="home">
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
  .hotArticleWrap{
    display: flex;
    justify-content: space-between;
    .hotLeftTit{
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 20px;
      border-bottom: 1px solid #f2f2f2;
      padding-bottom: 15px;
    }
    .hotWrapLeft{
      width: calc(~'100% - 230px');
      padding-right: 50px;
      box-sizing: border-box;
      .hotArticle{
        display: flex;
        justify-content: space-between;
        width: 100%;
        li{
          display: flex;
          width: 32%;
          .hotLeft{
            width: 40%;
            img{
              width: 100%;
              min-width: 80px;
              height: 96px;
              object-fit: cover;
            }
          }
          .hotRight{
            display: flex;
            flex-direction: column;
            /*width: 144px;*/
            width: 60%;

            padding-left: 15px;
            div{
              width: 100%;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              font-size: 16px;
            }
            p{
              font-size: 12px;
              margin: 10px 0;
              color: #666;
            }
            span{
              display: flex;
              align-items: center;
              font-size: 12px;
              color: #666;
              img{
                width: 20px;
                height: 20px;
                margin-right: 5px;
              }
            }
          }
        }
      }
    }
    .hotWrapRight{
      width: 230px;
      .hotRecommend{
        display: flex;
        flex-direction: column;
        li{
          height: 40px;
          display: flex;
          align-items: center;
          font-size: 14px;
          color: #333;
        }
      }
    }
  }
</style>
<style lang="less">
</style>
