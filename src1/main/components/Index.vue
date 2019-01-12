<template>
  <div>
    <img src="../assets/bg.png" alt="背景图" width="100%">
    <img src="../assets/Oval 10.png" alt="" class="kai" @click='open'>
    <div class="foot flex">
      <img src="../assets/22371539650822_.pic_hd.png" alt="" class="er">
      <div class="flex-1">
        <p class="text">关注广易公众号</p>
        <p class="text">更多福利等你来拿</p>
        <p class="text bg flex">
          <img src="../assets/sb.png" alt="">
          <span>长按识别图中二维码</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {}
  },
  methods: {
    open(e) {
      const id = this.$route.query.id
      const token = this.$route.query.token

      e.target.classList.add('animate');

      axios.get('/FHADMINM/appPacketLog/takePacket', {
        params: {
          packetId: id,
          token: token
        }
      }).then(res => {
        this.$router.push({
          path: '/redWarInfo',
          query: {
            id: id,
            token: token
          }
        })
      })
    }
  }
}
</script>

<style lang="less" scoped>
.kai {
  width: 2.906667rem;
  height: 2.906667rem;
  position: absolute;
  top: 5rem;
  right: 0;
  left: 0;
  margin: auto;
  // transform: translate3d(-50%, 0, 0);
}
.foot {
  width: 100%;
  height: 3.44rem;
  background-color: #e43531;
  padding-left: 1rem;

  .er {
    width: 2.346667rem;
    height: 2.346667rem;
    margin-right: 1rem;
  }
  .text {
    height:0.53rem;
    font-size:0.37rem;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(250,250,250,1);
    line-height:0.53rem;
    margin-bottom: .266667rem;
  }
  .text:last-child {
    margin-bottom: 0;
    height: .6rem;

    img {
      width: .426667rem;
      height: .426667rem;
      margin: 0 .133333rem;
    }
  }
  .bg {
    background-image: url('../assets/Rectangle 4.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 0 0;
  }
}
</style>
