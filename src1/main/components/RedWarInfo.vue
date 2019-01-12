<template>
  <div class="container">
    <div class="head">
      <img src="../assets/Rectangle Copy 11.png" alt="" class="bg">
      <img :src="info.appUser.avator" alt="" class="photo">
      <div class="rwname">{{info.appUser.nickName}}的红包</div>
      <div class="rwmoney">
        <span>{{info.takeMoney}}</span>
        <span> 元</span>
      </div>
      <div class="rwstatus">已存入我的钱包，可提现到微信零钱</div>
    </div>

    <div class="body">
      <div class="address flex block">
        <div class="flex-1 text">地址：{{info.packet.province}}{{info.packet.city}}{{info.packet.district}}{{info.packet.address}}</div>
        <span>联系ta</span>
      </div>
      <div class="people block">
        <div class="text">{{info.packet.sellerNumber}}人已领取</div>
        <div class="photos">
          <img :src="item.avator" alt="" v-for='item in packetLogList'>
        </div>
      </div>
      <div class="info block">
        <div class="text dark">{{info.packet.title}}</div>
        <div class="text">{{info.packet.detail}}</div>
        <div class="photos">
          <img :src="item" alt="" v-for='item in info.packet.imgs'>
        </div>
        <div class="text time">发布时间：{{info.packet.createTime}}</div>
      </div>
    </div>
    
    <div class="discuss">
      <div class="item flex" v-for='item in comments'>
        <img :src="item.avator" alt="" class="photo">
        <div class="flex-1">
          <div class="text flex first">
            <p class="name flex-1">{{item.nickName}}</p>
            <p class="time">{{item.createTime}}</p>
          </div>
          <p class="text des">{{item.content}}</p>
        </div>
      </div>
    </div>

    <a href="https://www.guangyi666.com/dist/download.html" class="foot">立即提现</a>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      info: {
        appUser: {},
        packet: {}
      },
      comments: [],
      packetLogList: []
    }
  },
  created() {
    const {id, token} = this.$route.query

    axios.get('/FHADMINM/appPacket/getPacket', {
      params: {
        packetId: id,
        token
      }
    }).then(res => {
      this.info = res.data
    })

    axios.get('/FHADMINM/appPacketComment/getPacketComment', {
      params: {
        packetId: id,
        token,
        showCount: 100
      }
    }).then(res => {
      this.comments = res.data.packetCommentList
    })

    axios.get('/FHADMINM/appPacketLog/getPacketLogList', {
      params: {
        packetId: id,
        token
      }
    }).then(res => {
      this.packetLogList = res.data.packetLogList
    })
  }
}
</script>

<style lang="less" scoped>
.container {
  font-size:.373333rem;
}
.text {
  font-size:.373333rem;
  font-family:PingFangSC-Regular;
  font-weight:400;
  color:rgba(103,111,115,1);
  line-height:.533333rem;
  word-wrap: break-word;
}
.text.dark {
  color: #222;
  margin-bottom: .133333rem !important;
}
.bg {
  width: 100%;
  height: 2.973333rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
}
.head {
  padding-top: 2.226667rem;
  padding-bottom: .293333rem;
  text-align: center;
  .photo {
    position: relative;
    z-index: 11;
    width: 1.533333rem;
    height: 1.533333rem;
    background-color: #ccc;
    border-radius: 5px;
    margin: 0 auto;
    margin-bottom: .333333rem;
  }
  .rwname {
    height:.493333rem;
    font-size:.346667rem;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(0,0,0,1);
    line-height:.493333rem;
  }
  .rwmoney {
    height:1.493333rem;
    font-size:1.066667rem;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(0,0,0,1);
    line-height:1.493333rem;

    span:last-child {
      font-size: .346667rem;
    }
  }
  .rwstatus {
    height:.533333rem;
    font-size:.373333rem;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(90,121,180,1);
    line-height:.533333rem;
  }
}

.body {
  background-color: #fff;
  margin-bottom: .266667rem;
  .block {
    border-bottom: .013333rem rgba(221,221,221,1) solid;
    padding: .4rem;
  }
  .address {

    span {
      width: 1.6rem;
      height: .8rem;
      line-height: .8rem;
      text-align: center;
      background:rgba(205,82,61,1);
      font-size: .346667rem;
      color: #fff;
      font-family:PingFangSC-Regular;
    }
  }

  .people {
    .text {
      margin-bottom: .4rem;
    }
    .photos {
      overflow: hidden;
    }
    .photos img {
      width: 1.2rem;
      height: 1.2rem;
      float: left;
      background-color: #ccc;
      margin-right: .266667rem;
      margin-bottom: 20px;
    }
  }

  .info {
    padding: .266667rem .4rem .146667rem .4rem;
    overflow: hidden;
    .text {
      margin-bottom: .4rem;
    }
    .photos {
      margin-bottom: .266667rem;
      overflow: hidden;
      img {
        float: left;
        width: 2.666667rem;
        height: 2.666667rem;
        margin-right: .4rem;
        background-color: #ccc;
      }
    }

    .time {
      margin-bottom: 0;
    }
  }
}

.discuss {
  background-color: #fff;
  .item {
    padding: .4rem;
  }
  .first {
    margin-bottom: .133333rem;
  }
  .photo {
    width: 1.2rem;
    height: 1.2rem;
    margin-right: .266667rem;
    border-radius: 50%;
    background-color: #ccc;
  }
  .name {
    color:rgba(105,133,186,1);
  }
  .des {
    color: #222;
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
