<template>
  <div class="container">
    <div class="test"></div>
    <div class="head">
      <div class="remaintime">
        <template v-if="isEnd">
          <span>已结束</span>
        </template>
        <template v-else>
          <span class="num">{{time.day}}</span>
          <span>天</span>
          <span class="num">{{time.hour}}</span>
          <span>小时</span>
          <span class="num">{{time.min}}</span>
          <span>分钟</span>
          <span class="num">{{time.sec}}</span>
          <span>秒后本信息下架，抓紧机会哦~</span>
        </template>
      </div>
      <div class="des">{{info.business.detail}}</div>
      <div class="time flex">
        <div class="flex-1">发布时间：{{info.business.createTime}}</div>
        <div>
          <img src="../assets/view.png" alt="">
          <span>{{info.business.totalLookNumber}}</span>
        </div>
      </div>
    </div>
    
    <div class="body">
      <div class="item flex">
        <div class="label">联系人</div>
        <div class="flex-1">{{info.business.contactsName}}</div>
      </div>
      <div class="item flex">
        <div class="label">联系电话</div>
        <div class="flex-1">{{info.business.phone | fPhone}}</div>
        <div>
          <img src="../assets/check.png" alt="">
          <span>号码真实性已验证</span>
        </div>
      </div>
      <div class="item flex">
        <div class="label">地址</div>
        <div class="flex-1">{{info.business.province}}{{info.business.city}}{{info.business.district}}{{info.business.address}}</div>
      </div>
    </div>

    <div class="project">
      <div class="title flex">
        <div class="label">项目详情</div>
        <div>
          <span class="tag">已售{{info.business.lookNumber}}次</span>
          <span class="tag">剩余{{info.business.totalNumber - info.business.lookNumber}}次</span>
        </div>
      </div>
      <div class="des">{{info.business.detail}}</div>
      <div class="photos">
        <img :src="item" alt="" v-for='item in info.business.imgs'>
      </div>
    </div>

    <a href="https://www.guangyi666.com/dist/download.html" class="foot">立即查看联系方式</a>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      isEnd: false,
      time: {},
      info: {
        time: {},
        business: {}
      }
    }
  },
  filters: {
    fPhone(val) {
      if(!val) {
        return
      }

      return `${val.substring(0,3)}****${val.substring(7)}`
    }
  },
  created() {
    const {id, token} = this.$route.query

    axios.get('/FHADMINM/appBusiness/business', {
      params: {
        businessId: id,
        token
      }
    }).then(res => {
      this.info = res.data

      const endTime = moment(res.data.business.endTime) / 1000
      const currentTime = new Date().setMilliseconds(0) / 1000
      
      if(endTime < currentTime) {
        this.isEnd = true
      } else {
        this.resetTime(endTime - currentTime)
      }
      
      const timer = setInterval(() => {
        const currentTime = new Date().setMilliseconds(0) / 1000
        
        if(endTime < currentTime) {
          this.isEnd = true
          clearInterval(timer)
        } else {
          this.resetTime(endTime - currentTime)
        }
      }, 1000)
    })
  },
  methods: {
    resetTime(s){
      if (s > -1) {
        let day = Math.floor(s / 86400)
        let hour = Math.floor(s / 3600) % 24
        let min = Math.floor(s / 60) % 60
        let sec = s % 60

        if (hour < 10) {
          hour = '0' + hour
        }
        if (min < 10) {
          min = '0' + min
        }
        if (sec < 10) {
          sec = '0' + sec
        }
        this.time = {day, hour, min, sec}
      }
    }
  }
}

</script>

<style lang="less" scoped>
.container {
  color: #222;
  font-size: 30px;
  font-family:PingFangSC-Regular;
}
.head {
  background-color: #fff;
  margin-bottom: .266667rem;

  .remaintime {
    color: #4D4D4D;
    font-size:.373333rem;
    font-family:PingFangSC-Regular;
    font-weight:400;
    text-align: center;
    height: .666667rem;
    line-height: .666667rem;
    background-color: #FCE7B3;
    .num {
      color: #CD523D;
    }
  }
  .des {
    margin: .28rem .4rem;
    padding-bottom: .28rem;
    border-bottom: .013333rem rgba(221,221,221,1) solid;
  }
  .time {
    padding: .266667rem .4rem;
    padding-top: 0;
    font-size: .32rem;
    color:rgba(179,179,179,1);

    img {
      display: inline-block;
      vertical-align: middle;
      margin-right: .133333rem;
    }
    span {
      vertical-align: middle;
    }
  }
}

.body {
  background-color: #fff;
  margin-bottom: .266667rem;
  .item {
    padding: .466667rem .4rem;
    border-bottom: 1px rgba(221,221,221,1) solid;
    .label {
      width: 1.6rem;
      margin-right: .8rem;
    }

    img {
      display: inline-block;
      vertical-align: middle;
      margin-right: .133333rem;
      width: .4rem;
      height: .4rem;
    }
    span {
      vertical-align: middle;
      color: #B3B3B3;
    }
  }
  .item:last-child {
    border-bottom: 0;
  }
}

.project {
  font-size: .373333rem;
  background-color: #fff;
  padding: 0 .4rem .4rem .4rem;
  .title {
    padding: .28rem 0;
    border-bottom: 1px rgba(221,221,221,1) solid;
    margin-bottom: .493333rem;

    .label {
      margin-right: .933333rem;
    }
    .tag {
      border-radius: 2px;
      padding: 0 .266667rem;
      margin-right: .266667rem;
    }
    .tag:first-child {
      background-color: #4E4F6F;
      color: #fff;
    }
    .tag:last-child {
      background-color: #FCE7B3;
      color: #4D4D4D;
    }
  }

  .des {
    color: #676F73;
    margin-bottom: .693333rem;
  }
  
  .photos {
    overflow: hidden;

    img {
      width: 2.666667rem;
      height: 2.666667rem;
      margin-right: .4rem;
      margin-bottom: .4rem;
      background-color: #ccc;
      float: left;
    }
  }
}

.foot {
  position: fixed;
  display: block;
  bottom: 0;
  left: 0;
  width: 100%;
  background:rgba(205,82,61,1);
  line-height: 1.333333rem;
  font-size: .48rem;
  text-align: center;
  color: #fff;
  text-decoration: none;
}
</style>
