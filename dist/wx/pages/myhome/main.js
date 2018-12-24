require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonpMpvue([2],{

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(30);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7aef6a8e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(33);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(31)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7aef6a8e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\myhome\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7aef6a8e", Component.options)
  } else {
    hotAPI.reload("data-v-7aef6a8e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 31:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 32:
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

// Use Vuex


/* harmony default export */ __webpack_exports__["a"] = ({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  computed: {
    tabIndex: function tabIndex() {
      return __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].state.tabIndex;
    },
    recData: function recData() {
      return __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].state.dataArray;
    }
  },
  methods: {
    onTabChange: function onTabChange(index) {
      __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].commit('tabChange', index);
      switch (index) {
        case 0:
          wx.redirectTo({ url: '/pages/list/main' });
          break;
        case 1:
          wx.redirectTo({ url: '/pages/index/main' });
          break;
        case 2:
          break;
        default:
          break;
      }
    }
  },
  created: function created() {
    var _this = this;

    wx.login({
      success: function success() {
        wx.getUserInfo({
          success: function success(res) {
            _this.userInfo = res.userInfo;
          }
        });
      }
    });
  }
});

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('wux-icon', {
    attrs: {
      "wux-class": "icon",
      "type": "md-microphone",
      "size": "80",
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('h1', {
    staticStyle: {
      "font-size": "1.4em"
    }
  }, [_vm._v("SmartREC")]), _vm._v(" "), _c('h2', [_vm._v("v1.0.2")]), _vm._v(" "), _c('wux-white-space', {
    attrs: {
      "body-style": "height: 70px",
      "mpcomid": '1'
    }
  }), _vm._v(" "), _c('p', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("亲爱的 " + _vm._s(_vm.userInfo.nickName))]), _vm._v(" "), _c('p', {
    staticStyle: {
      "font-size": "1em"
    }
  }, [_vm._v("您已经使用SmartREC进行了" + _vm._s(_vm.recData.length) + "次录音")]), _vm._v(" "), _c('wux-white-space', {
    attrs: {
      "body-style": "height: 70px",
      "mpcomid": '2'
    }
  }), _vm._v(" "), _c('p', {
    staticStyle: {
      "color": "grey",
      "font-size": "0.8em"
    }
  }, [_vm._v("Source code is licensed under LGPL v3.")]), _vm._v(" "), _c('p', {
    staticStyle: {
      "color": "grey",
      "font-size": "0.8em"
    }
  }, [_vm._v("© 2018 ZENG Chen.")]), _vm._v(" "), _c('wux-tabbar', {
    attrs: {
      "controlled": "",
      "current": _vm.tabIndex,
      "position": "bottom",
      "theme": "positive",
      "mpcomid": '12'
    }
  }, [_c('wux-tabbar-item', {
    attrs: {
      "eventid": '0',
      "mpcomid": '5'
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
      "mpcomid": '3'
    },
    slot: "icon-on"
  }), _vm._v(" "), _c('wux-icon', {
    attrs: {
      "wux-class": "icon",
      "type": "md-list-box",
      "size": "28",
      "mpcomid": '4'
    },
    slot: "icon-off"
  })], 1), _vm._v(" "), _c('wux-tabbar-item', {
    attrs: {
      "eventid": '1',
      "mpcomid": '8'
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
      "mpcomid": '6'
    },
    slot: "icon-on"
  }), _vm._v(" "), _c('wux-icon', {
    attrs: {
      "wux-class": "icon",
      "type": "md-bowtie",
      "size": "28",
      "mpcomid": '7'
    },
    slot: "icon-off"
  })], 1), _vm._v(" "), _c('wux-tabbar-item', {
    attrs: {
      "eventid": '2',
      "mpcomid": '11'
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
      "mpcomid": '9'
    },
    slot: "icon-on"
  }), _vm._v(" "), _c('wux-icon', {
    attrs: {
      "wux-class": "icon",
      "type": "md-person",
      "size": "28",
      "mpcomid": '10'
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
     require("vue-hot-reload-api").rerender("data-v-7aef6a8e", esExports)
  }
}

/***/ })

},[29]);
//# sourceMappingURL=main.js.map