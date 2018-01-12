<template>
  <div class="login">
    <img src="../../assets/images/public_img/close.png" class="isClose" @click="$router.push('/')">
    <div class="loginMain">
      <div class="loginTit">
        登录
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
            登录
          </p>
        </div>
        <div class="register" @click="$router.push('/register')">
          手机注册
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
              self.$toast(res.data.msg)
              localStorage.setItem('userInfo',JSON.stringify(res.data.data))
              self.$store.state.userInfo = JSON.stringify(res.data.data)
              self.$router.push({name:'Index',params:{isOne:1}})
            }else{
              self.$toast(res.data.msg)
            }
          }).catch(err=>{
            console.log(err)
          })
        }
      }
    },
    created(){
      let self = this
      self.$store.state.userInfo = {}
      localStorage.removeItem('userInfo')
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
