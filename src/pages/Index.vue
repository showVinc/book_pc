<template>
  <div class="home">
    <head-public></head-public>
    <nav-public type="0"></nav-public>
    <div class="publicMain">
      <div class="hotArticleWrap">
        <div class="hotWrapLeft">
          <div class="hotLeftTit">
            热门推荐
          </div>
          <ul class="hotArticle">
            <li v-for="item in lists.list" @click="novelClick(item)">
              <div class="hotLeft">
                <img :src="item.cover_pic">
              </div>
              <div class="hotRight">
                <div>
                  {{item.title}}
                </div>
                <p>
                  {{item.summary}}
                </p>
                <span><img :src="item.author_src">{{item.author}}</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="hotWrapRight">
          <div class="hotLeftTit">
            笔趣阁
          </div>
          <ul class="hotRecommend">
            <li v-for="item in hotList">
              {{item.catName}}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <foot-public></foot-public>
  </div>
</template>
<script>

  export default {
    data() {
      return {
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
    },
    mounted(){
      this.$http.get(`${process.env.API.API}/novellist?novel=hot&random=${Math.random()}`).then(res=>{
        if(res.data.code==0){
          this.lists.list = res.data.data;
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
