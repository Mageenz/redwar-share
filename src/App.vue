<template>
  <div class="wrap">
    <img src="./logo.png" alt="">
    <div class="title">一张会员卡，全国都优惠</div>
    <div class="flex">
      <div class="label">手机号码</div>
      <input class="flex-1" type="text" maxlength="11" v-model='form.phone' placeholder="请输入11位手机号">
    </div>
    <div class="flex">
      <div class="label">验证码</div>
      <input class="flex-1" v-model='form.smsCode' type="text" placeholder="请输入6位验证码">
      <button class="code-btn" @click='sendCode' :disabled='disabled'>{{msg}}</button>
    </div>
    <button class="submit-btn" :disabled='disabled1' @click='register'>{{msg1}}</button>
    <div class="tip">注册即代表同意【优佳智慧用户协议】</div>
  </div>
</template>


<script>
import axios from 'axios'

export default {
  data() {
    return {
      form: {
        phone: '',
        smsCode: '',
        invitationCode: ''
      },
      disabled: true,
      disabled1: true,
      msg1: '立即注册享优惠',
      msg: '获取验证码'
    }
  },
  watch: {
    'form.phone'(val) {
      this.disabled = !/^1\d{10}$/.test(this.form.phone)
      this.disabled1 = !(/^1\d{10}$/.test(this.form.phone) && this.form.code)
    },
    'form.smsCode'(val) {
      this.disabled1 = !(/^1\d{10}$/.test(this.form.phone) && this.form.smsCode)
    }
  },
  methods: {
    register() {
      this.disabled1 = true
      this.msg1 = '注册中'
      axios.post('', {}).then(res => {
        
      })
    },
    sendCode() {
      this.disabled = true
      axios.get('/members/sms', {
        params: {
          phone: this.form.phone
        }
      }).then(res => {
        if(res.data.code === '0') {
          let time = 60
      
          this.disabled = true
          this.msg = `${time}秒`
          const timer = setInterval(() => {
            if(time > 0) {
              time--
              this.msg = `${time}秒`
            } else {
              clearInterval(timer)
              this.msg = '获取验证码'
              this.disabled = false
            }
          }, 1000)
        }
        this.this.disabled = false
      }).catch(err => {
        this.disabled = false
      })
      
    }
  },
  created() {
    this.form.invitationCode = 1
  }
}
</script>

<style>
.tip {
  font-size: 22px;
  color: #999;
  text-align: center;
}
.submit-btn {
  outline: 0;
  width: 560px;
  height: 90px;
  line-height: 90px;
  color: #fff;
  background:rgba(229,57,53,1);
  border-radius: 8px;
  font-size: 30px;
  margin: 120px auto 90px auto;
  display: block;
}
.submit-btn[disabled] {
  opacity: 0.6;
}
.code-btn {
  width: 160px;
  height: 60px;
  line-height: 60px;
  font-size: 26px;
  border: 1px #D6D6D6 solid;
  background-color: transparent;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 0;
  outline: none;
}
.code-btn[disabled] {
  color: #D6D6D6;
}
.wrap {
  font-family:PingFangSC-Regular;
}
img {
  width: 121px;
  display: block;
  margin: 150px auto 40px auto;
}
.title {
  font-size:36px;
  font-family:PingFangSC-Medium;
  font-weight:500;
  color:rgba(27,27,27,1);
  line-height:50px;
  text-align: center;
  margin-bottom: 60px;
}
.flex {
  margin: auto;
  width: 670px;
  font-size:30px;
  font-weight:400;
  color:rgba(214,214,214,1);
  height: 111px;
  display: flex;
  align-items: flex-end;
  padding-bottom: 20px;
  border-bottom:1px solid rgba(214,214,214,1);
  color: #1B1B1B;
  box-sizing: border-box;
}
.flex input {
  font-size:30px;
  font-family:PingFangSC-Regular;
  outline: none;
  line-height: 1;
  box-sizing: border-box;
  border: 0;
  padding: 0;
}
.flex .label {
  width: 120px;
  margin-right: 90px;
}
.flex-1 {
  flex: 1;
}
</style>
