<template>
  <div class="container">
    <wux-icon wux-class="icon" type="md-microphone" size="80" />
    <h1 style="font-size: 1.4em">SmartREC</h1>
    <h2>v1.0.2</h2>
    <wux-white-space body-style="height: 70px" />
    <p style="font-size: 1em">亲爱的 {{userInfo.nickName}}</p>
    <p style="font-size: 1em">您已经使用SmartREC进行了{{recData.length}}次录音</p>
    <wux-white-space body-style="height: 70px" />
    <p style="color: grey; font-size: 0.8em">Source code is licensed under LGPL v3.</p>
    <p style="color: grey; font-size: 0.8em">© 2018 ZENG Chen.</p>

    <wux-tabbar controlled :current="tabIndex" position="bottom" theme="positive">
      <wux-tabbar-item @click="onTabChange(0)">
        <wux-icon wux-class="icon" type="md-list-box" size="25" slot="icon-on" />
        <wux-icon wux-class="icon" type="md-list-box" size="28" slot="icon-off" />
      </wux-tabbar-item>
      <wux-tabbar-item @click="onTabChange(1)">
        <wux-icon wux-class="icon" type="md-bowtie" size="25" slot="icon-on" />
        <wux-icon wux-class="icon" type="md-bowtie" size="28" slot="icon-off" />
      </wux-tabbar-item>
      <wux-tabbar-item @click="onTabChange(2)">
        <wux-icon wux-class="icon" type="md-person" size="25" slot="icon-on" />
        <wux-icon wux-class="icon" type="md-person" size="28" slot="icon-off" />
      </wux-tabbar-item>
    </wux-tabbar>
  </div>
</template>

<script>
// Use Vuex
import store from '@/store'

export default {
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  computed: {
    tabIndex () {
      return store.state.tabIndex
    },
    recData () {
      return store.state.dataArray
    }
  },
  methods: {
    onTabChange (index) {
      store.commit('tabChange', index)
      switch (index) {
        case 0:
          wx.redirectTo({url: '/pages/list/main'})
          break
        case 1:
          wx.redirectTo({url: '/pages/index/main'})
          break
        case 2:
          break
        default:
          break
      }
    }
  },
  created () {
    wx.login({
      success: () => {
        wx.getUserInfo({
          success: (res) => {
            this.userInfo = res.userInfo
          }
        })
      }
    })
  }
}
</script>

<style>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
