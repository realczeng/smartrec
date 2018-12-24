<template>
  <div>
    <wux-wing-blank size="large">
      <wux-white-space body-style="height: 20px" />
      <wux-row class="headerInfo">
        <wux-col span="4">{{dayH1}}</wux-col>
        <wux-col span="4">
          <wux-icon :type="weatherIcon" size="30"></wux-icon>
        </wux-col>
        <wux-col span="4">{{timer}}</wux-col>
      </wux-row>
    </wux-wing-blank>
    <wux-white-space body-style="height: 20px" />
    <div style="width: 100%">
      <wux-wing-blank size="large">
        <wux-card title="语音识别" :extra="recoState" bordered>
          <scroll-view scroll-with-animation enable-back-to-top class="recoText" scroll-y slot="body">{{recoText}}</scroll-view>
        </wux-card>
      </wux-wing-blank>
    </div>
    <wux-row>
      <wux-col span="4">
        <wux-wing-blank size="large">
          <wux-button block :type="langButtonType" @click="onLangChange">{{lang}}</wux-button>
        </wux-wing-blank>
      </wux-col>
      <wux-col span="4">
        <wux-wing-blank size="large">
          <wux-button block>
            <wux-icon type="md-brush" size="22"></wux-icon>
          </wux-button>
        </wux-wing-blank>
      </wux-col>
      <wux-col span="4">
        <wux-wing-blank size="large">
          <wux-button block @click="onSave">
            <wux-icon type="md-save" size="22"></wux-icon>
          </wux-button>
        </wux-wing-blank>
      </wux-col>
    </wux-row>
    <i-button :type="micButtonColor" shape="circle" size="large" @click="onRec">
      &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
      <wux-icon type="md-mic" size="45"></wux-icon>
      &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
    </i-button>
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
import card from '@/components/card'
import store from '@/store'

var plugin = requirePlugin('WechatSI')
let manager = plugin.getRecordRecognitionManager()

export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {},
      recState: false,
      recFilePath: '',
      recoState: '等待开始',
      recoText: '点击麦克风按钮即可开始实时语音识别。若要识别英语，请切换语言。',
      lang: '中',
      latitude: 0,
      longitude: 0,
      srcTime: '',
      srcWeather: '',
      recTime: 0,
      timerId: 0
    }
  },

  computed: {
    tabIndex () {
      return store.state.tabIndex
    },
    recData () {
      return store.state.dataArray
    },
    micButtonColor () {
      return !this.recState ? 'default' : 'success'
    },
    langCode () {
      return this.lang === '中' ? 'zh_CN' : 'en_US'
    },
    langButtonType () {
      return this.lang === '中' ? 'default' : 'dark'
    },
    dayH1 () {
      let day = new Date().getDay()
      let dayText = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
      return dayText[day]
    },
    weatherIcon () {
      if (this.srcWeather === '晴') return 'md-sunny'
      if (this.srcWeather === '阴' || this.srcWeather === '多云') return 'md-cloudy'
      if (this.srcWeather.match('雷') != null) return 'md-thunderstorm'
      if (this.srcWeather.match('雨') != null) return 'md-rainy'
      if (this.srcWeather.match('雪') != null) return 'md-snow'
    },
    timer () {
      let min = Math.floor(this.recTime / 60)
      let remainingSec = this.recTime % 60
      return (min < 10 ? '0' : '') + min + ':' + (remainingSec < 10 ? '0' : '') + remainingSec
    }
  },

  components: {
    card
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    onTabChange (index) {
      store.commit('tabChange', index)
      switch (index) {
        case 0:
          wx.redirectTo({url: '/pages/list/main'})
          break
        case 1:
          break
        case 2:
          wx.redirectTo({url: '/pages/myhome/main'})
          break
        default:
          break
      }
    },
    // 处理录音逻辑的核心部分
    onRec () {
      if (!this.recState) {
        manager.start({
          lang: this.langCode
        })
        this.recState = true
      } else {
        manager.stop()
        this.recState = false
      }
    },
    onPlay () {
      let player = wx.createInnerAudioContext()
      player.src = this.recFilePath
      player.play()
    },
    onLangChange () {
      this.lang = this.lang === '中' ? '英' : '中'
    },
    onSave () {
      let now = new Date()
      let hours = now.getHours()
      let minutes = now.getMinutes()
      let day = now.getDay()
      let dayText = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
      let nowTime = (hours < 10 ? '0' : '') + hours + ':' + (minutes < 10 ? '0' : '') + minutes
      let finalNow = now.toLocaleDateString() + ' ' + nowTime
      store.commit('addElement', {
        time: finalNow,
        day: dayText[day],
        text: this.recoText,
        weather: this.weatherIcon
      })
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
    let self = this
    manager.onRecognize = function (res) {
      self.recoText = res.result
    }
    manager.onStop = function (res) {
      self.recoText = res.result
      self.recoState = '识别完成'
      clearInterval(self.timerId)
    }
    manager.onStart = function (res) {
      self.recTime = 0
      self.timerId = setInterval(function () {
        self.recTime++
      }, 1000)
      self.recoText = '......'
      self.recoState = '识别中...'
    }
    manager.onError = function (res) {
      console.error('error msg', res.msg)
    }
    wx.getLocation({
      type: 'wgs84',
      success (res) {
        self.latitude = res.latitude
        self.longitude = res.longitude
        wx.request({
          url: 'https://free-api.heweather.net/s6/weather/now',
          data: {
            location: self.latitude + ',' + self.longitude,
            key: '278135eb399f4b06a4362778c6096713'
          },
          success: function (res) {
            self.srcTime = res.data.HeWeather6[0].update.loc
            self.srcWeather = res.data.HeWeather6[0].now.cond_txt
            self.dayH1 = self.srcTime
          }
        })
      }
    })
  }
}
</script>

<style scoped>
.headerInfo {
  text-align: center;
  font-size: 20pt
}

.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.blockBox {
  display: block;
  width: 100%;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.recoText {
  font-size: 14pt;
  height: 500rpx;
  text-align: justify;
}
</style>
