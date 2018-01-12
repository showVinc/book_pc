<template>
  <div class="home">
    <head-public></head-public>
    <div class="publicMain">
      <div class="banner">
        <mt-swipe>
          <mt-swipe-item v-for="item,index in banners" :key="index">
            <img :src="item.cover_pic">
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="homeNav">
        <div class="search">
          <img src="../assets/images/public_img/search.png">
          <input type="text" placeholder="搜索点什么">
        </div>
        <nav-public type="0"></nav-public>
      </div>
      <div class="ad">
        <img src="../assets/images/identify/1.png">
      </div>
      <div class="novelMain">
        <div class="novelWrap">
          <div class="novelTitle">
            热门
          </div>
          <ul class="listMain">
            <li v-for="item in lists.list" @click="novelClick(item)">
              <img :src="item.cover_pic">
              <div>
                {{item.title}}
              </div>
              <span>{{item.author}}</span>
            </li>
          </ul>
        </div>
        <div class="novelWrap">
          <div class="novelTitle">
            热门
          </div>
          <ul class="listMain">
            <li v-for="item in lists.list">
              <img :src="item.cover_pic">
              <div>
                {{item.title}}
              </div>
              <span>{{item.author}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--<foot-public></foot-public>-->
  </div>
</template>
<script>
  export default {
    data() {
      return {
        banners:[],
        hotList:[{
          "catId": 30020,
          "catName": "现代言情",
          "catNum": 0,
          "subCat": []
        }, {
          "catId": 30013,
          "catName": "古代言情",
          "catNum": 0,
          "subCat": []
        }, {
          "catId": 30031,
          "catName": "浪漫青春",
          "catNum": 0,
          "subCat": []
        }, {
          "catId": 30001,
          "catName": "玄幻言情",
          "catNum": 0,
          "subCat": []
        }, {
          "catId": 30008,
          "catName": "仙侠奇缘",
          "catNum": 0,
          "subCat": []
        }, {
          "catId": 30036,
          "catName": "悬疑灵异",
          "catNum": 0,
          "subCat": []
        }, {
          "catId": 30042,
          "catName": "科幻空间",
          "catNum": 0,
          "subCat": []
        }, {
          "catId": 30050,
          "catName": "游戏竞技",
          "catNum": 0,
          "subCat": []
        }, {
          "catId": 30083,
          "catName": "短篇小说",
          "catNum": 0,
          "subCat": []
        }, {
          "catId": 30055,
          "catName": "N次元",
          "catNum": 0,
          "subCat": []
        }],
        lists:{
          list:[],
          page:{
            p:1,
            total_pages:1
          }
        }
      }
    },
    methods: {
      novelClick(item){
        this.$router.push(`/novel?id=${item.ID}`)
      }
    },
    created() {
      window.scrollTo(0,0)
      if( this.$route&&this.$route.params.isOne==1){
        location.reload()
      }
    },
    mounted(){
      this.$http.get(`${process.env.API.API}/novellist?novel=hot&random=${Math.random()}`).then(res=>{
        if(res.data.code==0){
          this.lists.list = res.data.data;
        }
      }).catch(err=>{
        console.log(err)
      })

      this.$http.get(`${process.env.API.API}/banner`).then(res=>{
        if(res.data.code==0){
          this.banners = res.data.data;
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
  .publicMain{
    /*display: flex;*/
    /*flex-direction: column;*/
    .homeNav{
      background: #fff;
      padding: 10px 0 0;
      .search{
        display: flex;
        align-items: center;
        padding: 0 15px;
        border-radius: 25px;
        margin: 0 15px;
        height: 32px;
        background: #f2f2f2;
        input{
          background: #f2f2f2;
          width: 100%;
          height: 100%;
          padding-left: 10px;
          box-sizing: border-box;
        }
      }
    }
    .ad{
      padding: 15px;
      img{
        width: 100%;
        height: 32px;
        object-fit: cover;
      }
    }
    .novelMain{
      .novelWrap{
        background: #fff;
        margin-bottom: 15px;
        .novelTitle{
          font-size: 24px;
          padding: 15px 15px 0;
        }
        .listMain{
          display: flex;
          padding: 15px;
          li{
            width: 25%;
            margin-right: 15px;
            display: flex;
            flex-direction: column;
            /*align-items: center;*/
            div{
              font-size: 14px;
              width: 100%;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              margin: 5px 0;
            }
            span{
              width: 100%;
              font-size: 14px;
              color: #999;
            }
            img{
              width: 100%;
              height: 96px;
            }
          }
        }
      }
    }
  }
</style>
