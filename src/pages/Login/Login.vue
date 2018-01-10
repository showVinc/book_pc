<template>
  <div class="login">
    <head-public></head-public>
    <div class="loginMain">
      <div class="loginTit">
        登录
      </div>
      <div class="mainWrap">
        <div class="mainLeft">
          <div class="inputShow">
            <span>用户名</span>
            <input type="text" v-model="post.user" :class="{'active':isUser}" ref="inputUser" @blur="errBlur">
            <div class="errInfo">
              <transition name="fade">
                <p v-show="isUser">{{msg}}</p>
              </transition>
            </div>
          </div>
          <div class="inputShow">
            <span>密码</span>
            <input type="password" v-model="post.password" :class="{'active':isPassword}" ref="inputPassword" @blur="errBlur">
            <div class="errInfo">
              <transition name="fade">
                <p v-show="isPassword">{{msg}}</p>
              </transition>
            </div>
          </div>
          <div class="isLogin">
            <div @click="sub">
              登录
            </div>
          </div>
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
        msg:'',
        token:'',
        sid:'',
        isUser:false,
        isPassword:false,
        post:{
          user:'',
          password:''
        }
      }
    },
    methods:{
      errBlur(){
        let self = this
        self.isUser = false
        self.isPassword = false
      },
      sub(){
        let self = this
        self.msg = ''
        if(!self.post.user){
          self.msg = '用户名不能为空'
          self.isUser = true
          this.$refs['inputUser'].focus()
        }else if(!self.post.password){
          self.msg =  '密码不能为空'
          self.isPassword = true
          this.$refs['inputPassword'].focus()
        }

        if(self.msg){
          return false
        }else{
          self.$http.post(`${process.env.API.API}/login`,self.post).then(res=>{
            if(res.data.code==0){

            }
          }).catch(err=>{
            console.log(err)
          })
        }
      }
    },
    mounted(){
      localStorage.removeItem('userId')
      setTimeout(()=>{
        this.token = sessionStorage.getItem('token')
        this.sid = sessionStorage.getItem('sid')
      },300)
    }
  }
</script>
<style type="text/less" lang="less">
  .loginMain {
    padding: 60px 50px 0;
    color: #333;
    .loginTit {
      font-size: 24px;
      margin-bottom: 40px;
    }
    .mainWrap {
      display: flex;
      justify-content: space-between;
      .mainLeft {
        max-width: 500px;
        margin-right: 70px;
        flex:1;
        .isLogin{
          display: flex;
          margin-top: 10px;
          font-size: 14px;
          div{
            min-width: 110px;
            height: 40px;
            display: flex;
            align-items: center;
            background: #212125;
            justify-content: center;
            color: #fafafa;
            border-radius:3px;
            margin-right: 50px;
          }
          span{
            display: flex;
            align-items: center;
            color: #007099;
            font-size: 13px;
            img{
              width: 6px;
              height: 10px;
              margin-right: 5px;
            }
          }
        }
      }
      .mainRight{
        width: calc(~'100% - 630px');
        margin-top: 31px;
        font-size: 14px;
        padding: 30px 25px;
        background: #fafafa;
        p{
          font-weight: bold;
        }
        div{
          width: 110px;
          background: #212125;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fafafa;
          border-radius: 3px;
          margin-top: 30px;
        }
      }
    }
  }
</style>
