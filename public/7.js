(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/pages/catalogs/allpassed.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/views/pages/catalogs/allpassed.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_katalog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../api/katalog */ "./resources/api/katalog.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      allPassed: [],
      json_fields: {
        "№": "number",
        "НАИМЕНОВАНИЕ РАБОТ И РЕСУРСОВ": "good",
        "ЕД.ИЗМ": "unit",
        "НА ЕДИНИЦУ": "one_amount",
        "КОЛ-ВО": "amount",
        ЦЕНА: "price",
        ВСЕГО: "total"
      },
      json_data: [],
      json_meta: [[{
        key: "charset",
        value: "utf-8"
      }]]
    };
  },
  mounted: function mounted() {
    this.fetchPassed();
    console.log(this.json_fields);
  },
  methods: {
    fetchPassed: function fetchPassed() {
      var _this = this;

<<<<<<< HEAD
      Object(_api_katalog__WEBPACK_IMPORTED_MODULE_0__["getAllPassed"])().then(function (res) {
        _this.allPassed = res.data.data;
        _this.json_data = res.data.data;
        console.log(_this.json_data);
=======
      Object(_api_katalog__WEBPACK_IMPORTED_MODULE_2__["getVedmosts"])(this.id).then(function (res) {
        _this.vedomosts = res.data.data[0].vedomosts;
        _this.filename = res.data.data;
        _this.allpassed = [];

        _this.vedomosts.forEach(function (ved) {
          if (ved.passed) {
            _this.allpassed.push(ved);
          }
        });

        console.log(_this.allpassed);
      }).catch(function (err) {
        return console.log(err);
      });
    },
    getNameVedmost: function getNameVedmost(v) {
      var _this2 = this;

      this.selectedVedmost = v;
      Object(_api_katalog__WEBPACK_IMPORTED_MODULE_2__["findFromKatalog"])(v).then(function (res) {
        _this2.allKatItem = res.data.data;
      }).catch(function (err) {
        return console.log(err);
      });
    },
    getCheck: function getCheck(v) {
      this.flag = false;

      if (this.check.length > 0) {
        for (var i = 0; i < this.check.length; i++) {
          if (this.check[i].id == v.id) {
            this.check.splice(i, 1);
            this.flag = true;
          }
        }
      }

      if (!this.flag) {
        this.check.push(v);
      }

      console.log(this.check);
    },
    addMassive: function addMassive() {
      this.allGoods[this.selectedVedmost.id] = this.check;
      this.check = [];
      this.popupActive2 = false;
      console.log(this.allGoods);
    },
    getPass: function getPass(v) {
      // this.allpassed.push(v);
      console.log(this.allpassed);
      this.passFlag = false;

      if (this.allpassed.length > 0) {
        for (var i = 0; i < this.allpassed.length; i++) {
          if (this.allpassed[i].id == v.id) {
            this.allpassed.splice(i, 1);
            this.passFlag = true;
          }
        }
      }

      if (!this.passFlag) {
        this.allpassed.push(v);
      }
    },
    postPassed: function postPassed() {
      var _this3 = this;

      Object(_api_katalog__WEBPACK_IMPORTED_MODULE_2__["clickPassed"])(this.allpassed).then(function (res) {
        _this3.vedomosts = res.data.data;

        _this3.fetchVedomost();
>>>>>>> aad962a2c5577340c64e2ac9eadf41cd58523dae
      }).catch(function (err) {
        return console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/pages/catalogs/allpassed.vue?vue&type=template&id=4eabb760&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/views/pages/catalogs/allpassed.vue?vue&type=template&id=4eabb760& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "vx-card",
    [
      _c(
        "vs-table",
        {
          attrs: { data: _vm.allPassed },
          scopedSlots: _vm._u([
            {
<<<<<<< HEAD
              key: "default",
              fn: function(ref) {
                var data = ref.data
                return _vm._l(data, function(val, index) {
                  return _c(
                    "vs-tr",
                    { key: index },
=======
              attrs: {
                classContent: "popup-example",
                title: "",
                active: _vm.popupActive2
              },
              on: {
                "update:active": function($event) {
                  _vm.popupActive2 = $event
                }
              }
            },
            [
              _c("vs-input", {
                staticClass: "w-full mb-base",
                attrs: { "label-placeholder": "label" },
                on: {
                  input: function($event) {
                    _vm.getNameVedmost(_vm.selectedVedmost)
                  }
                },
                model: {
                  value: _vm.selectedVedmost.good,
                  callback: function($$v) {
                    _vm.$set(_vm.selectedVedmost, "good", $$v)
                  },
                  expression: "selectedVedmost.good"
                }
              }),
              _vm._v(" "),
              _vm.allKatItem != null
                ? _c(
                    "vs-list",
                    { staticClass: "mb-base" },
                    _vm._l(_vm.allKatItem, function(val, index) {
                      return _c(
                        "vs-list-item",
                        { key: index, attrs: { title: val.good } },
                        [
                          _c("vs-checkbox", {
                            attrs: { color: "success" },
                            on: {
                              click: function($event) {
                                _vm.getCheck(val)
                              }
                            }
                          })
                        ],
                        1
                      )
                    }),
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "vs-row",
                { attrs: { "vs-type": "flex", "vs-justify": "flex-end" } },
                [
                  _c(
                    "div",
                    { staticClass: "bx-row mb-10" },
>>>>>>> aad962a2c5577340c64e2ac9eadf41cd58523dae
                    [
                      _c("vs-td", [_vm._v(_vm._s(val.number))]),
                      _vm._v(" "),
                      _c("vs-td", [_vm._v(_vm._s(val.good))]),
                      _vm._v(" "),
                      _c("vs-td", [_vm._v(_vm._s(val.unit))]),
                      _vm._v(" "),
                      _c("vs-td", [_vm._v(_vm._s(val.one_amount))]),
                      _vm._v(" "),
                      _c("vs-td", [_vm._v(_vm._s(val.amount))]),
                      _vm._v(" "),
                      _c("vs-td", [_vm._v(_vm._s(val.price))]),
                      _vm._v(" "),
                      _c("vs-td", [_vm._v(_vm._s(val.total))])
                    ],
                    1
                  )
                })
              }
            }
          ])
        },
        [
          _c(
            "template",
            { slot: "thead" },
            [
              _c("vs-th", [_vm._v("№")]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("НАИМЕНОВАНИЕ РАБОТ И РЕСУРСОВ")]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("ЕД.ИЗМ")]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("НА ЕДИНИЦУ")]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("КОЛ-ВО")]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("ЦЕНА")]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("ВСЕГО")])
            ],
            1
          )
        ],
        2
      ),
      _vm._v(" "),
<<<<<<< HEAD
      _c("vs-row", { attrs: { "vs-type": "flex", "vs-justify": "flex-end" } }, [
        _c(
          "div",
          { staticClass: "bx-row mb-10" },
          [
            _c(
              "download-excel",
              {
                staticClass: "btn btn-primary",
                attrs: {
                  data: _vm.json_data,
                  fields: _vm.json_fields,
                  type: "xlsx",
                  worksheet: "My Worksheet"
=======
      _c(
        "vx-card",
        [
          _c(
            "vs-table",
            {
              attrs: { data: _vm.vedomosts },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(ref) {
                    var data = ref.data
                    return _vm._l(data, function(val, index) {
                      return _c(
                        "vs-tr",
                        {
                          key: index,
                          attrs: {
                            state: _vm.allpassed.includes(val) ? "danger" : ""
                          }
                        },
                        [
                          _c("vs-td", [_vm._v(_vm._s(val.id))]),
                          _vm._v(" "),
                          _c("vs-td", [_vm._v(_vm._s(val.good))]),
                          _vm._v(" "),
                          _c("vs-td", [_vm._v(_vm._s(val.unit))]),
                          _vm._v(" "),
                          _c("vs-td", [_vm._v(_vm._s(val.act_one))]),
                          _vm._v(" "),
                          _c("vs-td", [_vm._v(_vm._s(val.act_one_price))]),
                          _vm._v(" "),
                          _c("vs-td", [_vm._v(_vm._s(val.act_total))]),
                          _vm._v(" "),
                          _c("vs-td", [_vm._v(_vm._s(val.amount))]),
                          _vm._v(" "),
                          _c("vs-td", [_vm._v(_vm._s(val.price))]),
                          _vm._v(" "),
                          _c("vs-td", [_vm._v(_vm._s(val.total))]),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            [
                              _c(
                                "vs-button",
                                {
                                  attrs: {
                                    color: "primary",
                                    size: "small",
                                    type: "filled"
                                  },
                                  on: {
                                    click: [
                                      function($event) {
                                        _vm.popupActive2 = true
                                      },
                                      function($event) {
                                        _vm.getNameVedmost(val)
                                      }
                                    ]
                                  }
                                },
                                [_vm._v("Poisk")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            [
                              _c(
                                "vs-button",
                                {
                                  attrs: {
                                    color: "warning",
                                    size: "small",
                                    type: "filled"
                                  },
                                  on: {
                                    click: function($event) {
                                      _vm.getPass(val)
                                    }
                                  }
                                },
                                [_vm._v("Pass")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.allGoods[val.id]
                            ? _c(
                                "template",
                                {
                                  staticClass: "expand-user active",
                                  slot: "expand"
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "con-expand-users w-full" },
                                    [
                                      _c(
                                        "vs-list",
                                        _vm._l(_vm.allGoods[val.id], function(
                                          val,
                                          index
                                        ) {
                                          return _c("vs-list-item", {
                                            key: index,
                                            attrs: {
                                              title:
                                                index + " " + "--" + val.good,
                                              subtitle: val.bezndc
                                                ? val.bezndc
                                                : null
                                            }
                                          })
                                        }),
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ]
                              )
                            : _vm._e()
                        ],
                        2
                      )
                    })
                  }
>>>>>>> aad962a2c5577340c64e2ac9eadf41cd58523dae
                }
              },
              [
                _c(
                  "vs-button",
                  {
                    staticClass: "mt-8",
                    attrs: { color: "primary", type: "filled", size: "medium" }
                  },
                  [_vm._v("Download Excel")]
                )
              ],
              1
            )
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/api/katalog.js":
/*!**********************************!*\
  !*** ./resources/api/katalog.js ***!
  \**********************************/
/*! exports provided: getVedmosts, findFromKatalog, clickPassed, getAllPassed, getFiles, sendExcel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVedmosts", function() { return getVedmosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findFromKatalog", function() { return findFromKatalog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clickPassed", function() { return clickPassed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPassed", function() { return getAllPassed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFiles", function() { return getFiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendExcel", function() { return sendExcel; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/request */ "./resources/utils/request.js");

function getVedmosts(id) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/get-vedmost/' + id,
    method: 'get'
  });
}
function findFromKatalog(data) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/find-katalog',
    method: 'get',
    params: data
  });
}
function clickPassed(data) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/click-passed',
    method: 'post',
    data: data
  });
}
function getAllPassed() {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/get-all-passed',
    method: 'get'
  });
}
function getFiles() {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/get-files',
    method: 'get'
  });
}
function sendExcel(data) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/get-excel',
    method: 'post',
    data: data
  });
}

/***/ }),

/***/ "./resources/views/pages/catalogs/allpassed.vue":
/*!******************************************************!*\
  !*** ./resources/views/pages/catalogs/allpassed.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _allpassed_vue_vue_type_template_id_4eabb760___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allpassed.vue?vue&type=template&id=4eabb760& */ "./resources/views/pages/catalogs/allpassed.vue?vue&type=template&id=4eabb760&");
/* harmony import */ var _allpassed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allpassed.vue?vue&type=script&lang=js& */ "./resources/views/pages/catalogs/allpassed.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _allpassed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _allpassed_vue_vue_type_template_id_4eabb760___WEBPACK_IMPORTED_MODULE_0__["render"],
  _allpassed_vue_vue_type_template_id_4eabb760___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/views/pages/catalogs/allpassed.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/views/pages/catalogs/allpassed.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/views/pages/catalogs/allpassed.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_allpassed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./allpassed.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/pages/catalogs/allpassed.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_allpassed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/views/pages/catalogs/allpassed.vue?vue&type=template&id=4eabb760&":
/*!*************************************************************************************!*\
  !*** ./resources/views/pages/catalogs/allpassed.vue?vue&type=template&id=4eabb760& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_allpassed_vue_vue_type_template_id_4eabb760___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./allpassed.vue?vue&type=template&id=4eabb760& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/pages/catalogs/allpassed.vue?vue&type=template&id=4eabb760&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_allpassed_vue_vue_type_template_id_4eabb760___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_allpassed_vue_vue_type_template_id_4eabb760___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);