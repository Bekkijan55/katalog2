(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/pages/catalogs/vedfiles.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/views/pages/catalogs/vedfiles.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      popupActive: false,
      filename: {
        file: ""
      },
      allFiles: []
    };
  },
  mounted: function mounted() {
    this.fetchVedFiles();
  },
  methods: {
    addFile: function addFile() {
      var _this = this;

      Object(_api_katalog__WEBPACK_IMPORTED_MODULE_0__["addVedFile"])(this.filename).then(function (res) {
        console.log(res.data.data);
        _this.popupActive = false;
      }).catch(function (err) {
        return console.log(err);
      });
    },
    fetchVedFiles: function fetchVedFiles() {
      var _this2 = this;

      Object(_api_katalog__WEBPACK_IMPORTED_MODULE_0__["getVedFiles"])().then(function (res) {
        _this2.allFiles = res.data.data;
      }).catch(function (err) {
        return console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/pages/catalogs/vedfiles.vue?vue&type=template&id=03b586c3&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/views/pages/catalogs/vedfiles.vue?vue&type=template&id=03b586c3& ***!
  \******************************************************************************************************************************************************************************************************************/
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
    "div",
    [
      _c(
        "vx-card",
        [
          _c(
            "vs-button",
            {
              attrs: { color: "primary", type: "filled", size: "medium" },
              on: {
                click: function($event) {
                  _vm.popupActive = true
                }
              }
            },
            [_vm._v("New")]
          ),
          _vm._v(" "),
          _c(
            "vs-popup",
            {
              staticClass: "holamundo",
              attrs: {
                title: "Lorem ipsum dolor sit amet",
                active: _vm.popupActive
              },
              on: {
                "update:active": function($event) {
                  _vm.popupActive = $event
                }
              }
            },
            [
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.addFile($event)
                    }
                  }
                },
                [
                  _c("vs-input", {
                    staticClass: "w-full",
                    attrs: { label: "FIle Name" },
                    model: {
                      value: _vm.filename.file,
                      callback: function($$v) {
                        _vm.$set(_vm.filename, "file", $$v)
                      },
                      expression: "filename.file"
                    }
                  }),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c(
                    "vs-button",
                    {
                      attrs: {
                        color: "primary",
                        type: "filled",
                        size: "medium"
                      }
                    },
                    [_vm._v("Add")]
                  )
                ],
                1
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vx-row mt-base" },
        _vm._l(_vm.allFiles, function(val, index) {
          return _c(
            "div",
            {
              key: index,
              staticClass: "vx-col w-full sm:w-1/2 md:w-1/3 mb-base"
            },
            [
              _c("vx-card", [
                _c("h5", { staticClass: "mb-2" }, [_vm._v(_vm._s(val.name))]),
                _vm._v(" "),
                _c("p", { staticClass: "text-grey" }, [
                  _vm._v(_vm._s(val.created_at))
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "flex justify-between flex-wrap" },
                  [
                    _c(
                      "router-link",
                      {
                        attrs: { to: { name: "home", params: { id: val.id } } }
                      },
                      [
                        _c(
                          "vs-button",
                          {
                            staticClass: "mt-4 shadow-lg",
                            attrs: {
                              type: "gradient",
                              color: "#7367F0",
                              "gradient-color-secondary": "#CE9FFC"
                            }
                          },
                          [_vm._v("Check")]
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
        })
      )
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
/*! exports provided: getVedmosts, findFromKatalog, clickPassed, getAllPassed, getFiles, sendExcel, addVedFile, getVedFiles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVedmosts", function() { return getVedmosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findFromKatalog", function() { return findFromKatalog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clickPassed", function() { return clickPassed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPassed", function() { return getAllPassed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFiles", function() { return getFiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendExcel", function() { return sendExcel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addVedFile", function() { return addVedFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVedFiles", function() { return getVedFiles; });
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
function getFiles(id) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/get-files/' + id,
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
function addVedFile(data) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/add-ved-fie',
    method: 'post',
    data: data
  });
}
function getVedFiles() {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/get-ved-files',
    method: 'get'
  });
}

/***/ }),

/***/ "./resources/views/pages/catalogs/vedfiles.vue":
/*!*****************************************************!*\
  !*** ./resources/views/pages/catalogs/vedfiles.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vedfiles_vue_vue_type_template_id_03b586c3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vedfiles.vue?vue&type=template&id=03b586c3& */ "./resources/views/pages/catalogs/vedfiles.vue?vue&type=template&id=03b586c3&");
/* harmony import */ var _vedfiles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vedfiles.vue?vue&type=script&lang=js& */ "./resources/views/pages/catalogs/vedfiles.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _vedfiles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _vedfiles_vue_vue_type_template_id_03b586c3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _vedfiles_vue_vue_type_template_id_03b586c3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/views/pages/catalogs/vedfiles.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/views/pages/catalogs/vedfiles.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/views/pages/catalogs/vedfiles.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vedfiles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./vedfiles.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/pages/catalogs/vedfiles.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vedfiles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/views/pages/catalogs/vedfiles.vue?vue&type=template&id=03b586c3&":
/*!************************************************************************************!*\
  !*** ./resources/views/pages/catalogs/vedfiles.vue?vue&type=template&id=03b586c3& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vedfiles_vue_vue_type_template_id_03b586c3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./vedfiles.vue?vue&type=template&id=03b586c3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/pages/catalogs/vedfiles.vue?vue&type=template&id=03b586c3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vedfiles_vue_vue_type_template_id_03b586c3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vedfiles_vue_vue_type_template_id_03b586c3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);