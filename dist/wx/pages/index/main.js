require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonpMpvue([4],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(10);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_687a5876_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(17);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(11)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-687a5876"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_687a5876_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-687a5876", Component.options)
  } else {
    hotAPI.reload("data-v-687a5876", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var Fly = __webpack_require__(43);
var fly = new Fly();

var plugin = requirePlugin('WechatSI');
var manager = plugin.getRecordRecognitionManager();

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
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
    };
  },


  computed: {
    tabIndex: function tabIndex() {
      return __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].state.tabIndex;
    },
    recData: function recData() {
      return __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].state.dataArray;
    },
    micButtonColor: function micButtonColor() {
      return !this.recState ? 'default' : 'success';
    },
    langCode: function langCode() {
      return this.lang === '中' ? 'zh_CN' : 'en_US';
    },
    langButtonType: function langButtonType() {
      return this.lang === '中' ? 'default' : 'dark';
    },
    dayH1: function dayH1() {
      var day = new Date().getDay();
      var dayText = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
      return dayText[day];
    },
    weatherIcon: function weatherIcon() {
      if (this.srcWeather === '晴') return 'md-sunny';
      if (this.srcWeather === '阴' || this.srcWeather === '多云') return 'md-cloudy';
      if (this.srcWeather.match('雷') != null) return 'md-thunderstorm';
      if (this.srcWeather.match('雨') != null) return 'md-rainy';
      if (this.srcWeather.match('雪') != null) return 'md-snow';
    },
    timer: function timer() {
      var min = Math.floor(this.recTime / 60);
      var remainingSec = this.recTime % 60;
      return (min < 10 ? '0' : '') + min + ':' + (remainingSec < 10 ? '0' : '') + remainingSec;
    }
  },

  methods: {
    bindViewTap: function bindViewTap() {
      var url = '../logs/main';
      wx.navigateTo({ url: url });
    },
    getUserInfo: function getUserInfo() {
      var _this = this;

      // 调用登录接口
      wx.login({
        success: function success() {
          wx.getUserInfo({
            success: function success(res) {
              _this.userInfo = res.userInfo;
            }
          });
        }
      });
    },
    onTabChange: function onTabChange(index) {
      __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].commit('tabChange', index);
      switch (index) {
        case 0:
          wx.redirectTo({ url: '/pages/list/main' });
          break;
        case 1:
          break;
        case 2:
          wx.redirectTo({ url: '/pages/myhome/main' });
          break;
        default:
          break;
      }
    },

    // 处理录音逻辑的核心部分
    onRec: function onRec() {
      if (!this.recState) {
        manager.start({
          lang: this.langCode
        });
        this.recState = true;
      } else {
        manager.stop();
        this.recState = false;
      }
    },
    onPlay: function onPlay() {
      var player = wx.createInnerAudioContext();
      player.src = this.recFilePath;
      player.play();
    },
    onLangChange: function onLangChange() {
      this.lang = this.lang === '中' ? '英' : '中';
    },
    onSave: function onSave() {
      var now = new Date();
      var hours = now.getHours();
      var minutes = now.getMinutes();
      var day = now.getDay();
      var dayText = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
      var nowTime = (hours < 10 ? '0' : '') + hours + ':' + (minutes < 10 ? '0' : '') + minutes;
      var finalNow = now.toLocaleDateString() + ' ' + nowTime;
      __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].commit('addElement', {
        time: finalNow,
        day: dayText[day],
        text: this.recoText,
        weather: this.weatherIcon
      });
    }
  },

  created: function created() {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo();
    var self = this;
    manager.onRecognize = function (res) {
      self.recoText = res.result;
    };
    manager.onStop = function (res) {
      self.recoText = res.result;
      self.recoState = '识别完成';
      clearInterval(self.timerId);
    };
    manager.onStart = function (res) {
      self.recTime = 0;
      self.timerId = setInterval(function () {
        self.recTime++;
      }, 1000);
      self.recoText = '......';
      self.recoState = '识别中...';
    };
    manager.onError = function (res) {
      console.error('error msg', res.msg);
    };
    wx.getLocation({
      type: 'wgs84',
      success: function success(res) {
        self.latitude = res.latitude;
        self.longitude = res.longitude;
        fly.get('https://free-api.heweather.net/s6/weather/now', {
          location: self.latitude + ',' + self.longitude,
          key: '278135eb399f4b06a4362778c6096713'
        }).then(function (res) {
          self.srcTime = res.data.HeWeather6[0].update.loc;
          self.srcWeather = res.data.HeWeather6[0].now.cond_txt;
          self.dayH1 = self.srcTime;
        });
      }
    });
  }
});

/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('wux-wing-blank', {
    attrs: {
      "size": "large",
      "mpcomid": '6'
    }
  }, [_c('wux-white-space', {
    attrs: {
      "body-style": "height: 20px",
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('wux-row', {
    staticClass: "headerInfo",
    attrs: {
      "mpcomid": '5'
    }
  }, [_c('wux-col', {
    attrs: {
      "span": "4",
      "mpcomid": '1'
    }
  }, [_vm._v(_vm._s(_vm.dayH1))]), _vm._v(" "), _c('wux-col', {
    attrs: {
      "span": "4",
      "mpcomid": '3'
    }
  }, [_c('wux-icon', {
    attrs: {
      "type": _vm.weatherIcon,
      "size": "30",
      "mpcomid": '2'
    }
  })], 1), _vm._v(" "), _c('wux-col', {
    attrs: {
      "span": "4",
      "mpcomid": '4'
    }
  }, [_vm._v(_vm._s(_vm.timer))])], 1)], 1), _vm._v(" "), _c('wux-white-space', {
    attrs: {
      "body-style": "height: 20px",
      "mpcomid": '7'
    }
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "width": "100%"
    }
  }, [_c('wux-wing-blank', {
    attrs: {
      "size": "large",
      "mpcomid": '9'
    }
  }, [_c('wux-card', {
    attrs: {
      "title": "语音识别",
      "extra": _vm.recoState,
      "bordered": "",
      "mpcomid": '8'
    }
  }, [_c('scroll-view', {
    staticClass: "recoText",
    attrs: {
      "scroll-with-animation": "",
      "enable-back-to-top": "",
      "scroll-y": ""
    },
    slot: "body"
  }, [_vm._v(_vm._s(_vm.recoText))])], 1)], 1)], 1), _vm._v(" "), _c('wux-row', {
    attrs: {
      "mpcomid": '21'
    }
  }, [_c('wux-col', {
    attrs: {
      "span": "4",
      "mpcomid": '12'
    }
  }, [_c('wux-wing-blank', {
    attrs: {
      "size": "large",
      "mpcomid": '11'
    }
  }, [_c('wux-button', {
    attrs: {
      "block": "",
      "type": _vm.langButtonType,
      "eventid": '0',
      "mpcomid": '10'
    },
    on: {
      "click": _vm.onLangChange
    }
  }, [_vm._v(_vm._s(_vm.lang))])], 1)], 1), _vm._v(" "), _c('wux-col', {
    attrs: {
      "span": "4",
      "mpcomid": '16'
    }
  }, [_c('wux-wing-blank', {
    attrs: {
      "size": "large",
      "mpcomid": '15'
    }
  }, [_c('wux-button', {
    attrs: {
      "block": "",
      "mpcomid": '14'
    }
  }, [_c('wux-icon', {
    attrs: {
      "type": "md-brush",
      "size": "22",
      "mpcomid": '13'
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('wux-col', {
    attrs: {
      "span": "4",
      "mpcomid": '20'
    }
  }, [_c('wux-wing-blank', {
    attrs: {
      "size": "large",
      "mpcomid": '19'
    }
  }, [_c('wux-button', {
    attrs: {
      "block": "",
      "eventid": '1',
      "mpcomid": '18'
    },
    on: {
      "click": _vm.onSave
    }
  }, [_c('wux-icon', {
    attrs: {
      "type": "md-save",
      "size": "22",
      "mpcomid": '17'
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c('i-button', {
    attrs: {
      "type": _vm.micButtonColor,
      "shape": "circle",
      "size": "large",
      "eventid": '2',
      "mpcomid": '23'
    },
    on: {
      "click": _vm.onRec
    }
  }, [_vm._v("\n             \n    "), _c('wux-icon', {
    attrs: {
      "type": "md-mic",
      "size": "45",
      "mpcomid": '22'
    }
  }), _vm._v("\n             \n  ")], 1), _vm._v(" "), _c('wux-tabbar', {
    attrs: {
      "controlled": "",
      "current": _vm.tabIndex,
      "position": "bottom",
      "theme": "positive",
      "mpcomid": '33'
    }
  }, [_c('wux-tabbar-item', {
    attrs: {
      "eventid": '3',
      "mpcomid": '26'
    },
    on: {
      "click": function($event) {
        _vm.onTabChange(0)
      }
    }
  }, [_c('wux-icon', {
    attrs: {
      "wux-class": "icon",
      "type": "md-list-box",
      "size": "25",
      "mpcomid": '24'
    },
    slot: "icon-on"
  }), _vm._v(" "), _c('wux-icon', {
    attrs: {
      "wux-class": "icon",
      "type": "md-list-box",
      "size": "28",
      "mpcomid": '25'
    },
    slot: "icon-off"
  })], 1), _vm._v(" "), _c('wux-tabbar-item', {
    attrs: {
      "eventid": '4',
      "mpcomid": '29'
    },
    on: {
      "click": function($event) {
        _vm.onTabChange(1)
      }
    }
  }, [_c('wux-icon', {
    attrs: {
      "wux-class": "icon",
      "type": "md-bowtie",
      "size": "25",
      "mpcomid": '27'
    },
    slot: "icon-on"
  }), _vm._v(" "), _c('wux-icon', {
    attrs: {
      "wux-class": "icon",
      "type": "md-bowtie",
      "size": "28",
      "mpcomid": '28'
    },
    slot: "icon-off"
  })], 1), _vm._v(" "), _c('wux-tabbar-item', {
    attrs: {
      "eventid": '5',
      "mpcomid": '32'
    },
    on: {
      "click": function($event) {
        _vm.onTabChange(2)
      }
    }
  }, [_c('wux-icon', {
    attrs: {
      "wux-class": "icon",
      "type": "md-person",
      "size": "25",
      "mpcomid": '30'
    },
    slot: "icon-on"
  }), _vm._v(" "), _c('wux-icon', {
    attrs: {
      "wux-class": "icon",
      "type": "md-person",
      "size": "28",
      "mpcomid": '31'
    },
    slot: "icon-off"
  })], 1)], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-687a5876", esExports)
  }
}

/***/ })
],[9]);
//# sourceMappingURL=main.js.map