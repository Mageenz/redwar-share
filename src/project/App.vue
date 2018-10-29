<template>
  <div class="container">
    <div class="test"></div>
    <div class="head">
      <div class="remaintime">
        <span class="num">1</span>
        <span>天</span>
        <span class="num">5</span>
        <span>小时</span>
        <span class="num">23</span>
        <span>分钟</span>
        <span class="num">25</span>
        <span>秒后本信息下架，抓紧机会哦~</span>
      </div>
      <div class="des">毛啊萨达是大家奥斯卡大苏打水机读卡十九大安达市大，奥术大师大所多。</div>
      <div class="time flex">
        <div class="flex-1">发布时间：1231231</div>
        <div>
          <img src="./assets/view.png" alt="">
          <span>123</span>
        </div>
      </div>
    </div>
    
    <div class="body">
      <div class="item flex">
        <div class="label">联系人</div>
        <div class="flex-1">王先森</div>
      </div>
      <div class="item flex">
        <div class="label">联系电话</div>
        <div class="flex-1">1231231313</div>
        <div>
          <img src="./assets/check.png" alt="">
          <span>号码真实性已验证</span>
        </div>
      </div>
      <div class="item flex">
        <div class="label">地址</div>
        <div class="flex-1">大叔大婶大大所大</div>
      </div>
    </div>

    <div class="project">
      <div class="title flex">
        <div class="label">项目详情</div>
        <div>
          <span class="tag">已售8次</span>
          <span class="tag">剩余2次</span>
        </div>
      </div>
      <div class="des">大街上大家打底裤骄傲的金卡的骄傲打卡大家都</div>
      <div class="photos">
        <img src="" alt="" v-for='item in 3'>
      </div>
    </div>

    <a href="" class="foot">立即查看联系方式</a>
  </div>
</template>

<script>
export default {

}
</script>

<style>
@import '../common.css';
</style>

<style lang="less">
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
