<template>
  <div class="novel">
    <div class="novelTop">
      <div>
        {{novelInfo.title}}
      </div>
      <div>
        <img src="../../assets/images/identify/search.png">
      </div>
    </div>
    <div class="novelHead">
      <div class="novelHeadWrap">
        <div class="novelHeadLeft">
          <img :src="novelInfo.cover_pic">
        </div>
        <div class="novelHeadRight">
          <div>
            {{novelInfo.title}}
          </div>
          <span>{{novelInfo.author}}</span>
        </div>
      </div>
      <div class="catalog">
        <div class="catalogBtn">
          开始阅读
        </div>
        <div class="catalogBtn" @click="likeClick">
          点赞{{novelInfo.n_like}}
        </div>
      </div>
      <div class="summary">
        {{novelInfo.summary}}
      </div>
    </div>
    <div class="publicMain">

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
  .novel{
    .novelTop{
      background: #fff;
      color: #333;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 44px;
      box-sizing: border-box;
      padding:0 15px;
    }
    .novelHead{
      padding: 15px;
      box-sizing: border-box;
      background: #fff;
      background: -webkit-linear-gradient(bottom,#fff,rgba(255,255,255,0) 108px) no-repeat center bottom;
      .novelHeadWrap{
        display: flex;
        .novelHeadLeft{
          width: 25%;
          margin-right: 2%;
          img{
            width: 100%;
            height: 100px;
            object-fit: cover;
          }
        }
        .novelHeadRight{
          width: 73%;
          display: flex;
          flex-direction: column;
          div{
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 10px;
          }
          span{
            color: #999;
            font-size: 14px;
          }
        }
      }
      .catalog{
        padding: 15px 0;
        border-bottom: 1px solid #ebebeb;
        display: flex;
        font-size: 14px;
        .catalogBtn{
          width: 80px;
          background: #333;
          color: #fff;
          text-align: center;
          height: 28px;
          line-height: 28px;
          border-radius: 25px;
          margin-right: 10px;
        }
      }
      .summary{
        font-size: 14px;
        padding-top: 15px;
      }
    }
  }
</style>
