<template>
  <div class="login">
    <img src="../../assets/images/public_img/close.png" class="isClose" @click="$router.push('/')">
    <div class="loginMain">
      <div class="loginTit">
        注册
      </div>
      <div class="mainWrap">
        <div class="inputShow">
          <span>用户名</span>
          <input type="text" v-model="post.user" placeholder="请输入用户名/手机号">
        </div>
        <div class="inputShow">
          <span>密码</span>
          <input type="password" v-model="post.password" placeholder="请输入密码">
        </div>
        <div class="loginBtn">
          <p @click="sub">
            注册
          </p>
        </div>
        <div class="register" @click="$router.push('/login')">
          登录
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        msg:'',
        token:'',
        sid:'',
        post:{
          user:'',
          password:'',
          reg:1
        }
      }
    },
    methods:{
      sub(){
        let self = this
        self.msg = ''
        if(!self.post.user){
          self.msg = '用户名不能为空'
        }else if(!self.post.password){
          self.msg =  '密码不能为空'
        }

        if(self.msg){
          self.$toast(self.msg)
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
  .login{
    height: 100vh;
    background: #fff;
    position: relative;
    .isClose{
      position: absolute;
      right: 15px;
      top: 15px;
      width: 15px;
      height: 15px;
    }
  }
  .loginMain {
    padding: 60px 15px 0;
    color: #333;
    .loginTit {
      font-size: 24px;
      margin-bottom: 40px;
    }
    .register{
      margin-top: 20px;
      font-size: 12px;
      color: #333;
      display: flex;
      justify-content: flex-end;
    }
  }
</style>
