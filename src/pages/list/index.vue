<template>
  <div>
    <!-- 数据展示卡片 -->
    <div>
      <wux-white-space body-style="height: 50rpx" />
        <wux-wing-blank size="large" v-for="item in recData" :key="item.id">
          <wux-card :title="item.time" :extra="item.day" bordered="false" slot="content">
            <p slot="body">{{item.text}}</p>
            <wux-icon :type="item.weather" slot="footer"></wux-icon>
          </wux-card>
          <wux-white-space body-style="height: 50rpx" />
        </wux-wing-blank>        
      <wux-white-space body-style="height: 80rpx" />
    </div>
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
          break
        case 1:
          wx.redirectTo({url: '/pages/index/main'})
          break
        case 2:
          wx.redirectTo({url: '/pages/myhome/main'})
          break
        default:
          break
      }
    }
  }
}
</script>

<style>
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
