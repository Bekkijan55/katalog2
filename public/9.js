(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/pages/users/users.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/views/pages/users/users.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../api/users */ "./resources/api/users.js");
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
      users: [],
      popupEdit: false,
      profile: {
        profile_id: "",
        user_id: "",
        firstname: "",
        lastname: "",
        email: "",
        selectedImage: null
      }
    };
  },
  mounted: function mounted() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers: function fetchUsers() {
      var _this = this;

      Object(_api_users__WEBPACK_IMPORTED_MODULE_0__["getUsers"])().then(function (res) {
        _this.users = res.data.data;
      }).catch(function (err) {
        return console.log(err);
      });
    },
    getPhoto: function getPhoto(e) {
      var _this2 = this;

      var fileReader = new FileReader();
      fileReader.readAsDataURL(e.target.files[0]);

      fileReader.onload = function (e) {
        _this2.profile.selectedImage = e.target.result;
      };
    },
    editProfile: function editProfile() {
      var _this3 = this;

      Object(_api_users__WEBPACK_IMPORTED_MODULE_0__["updateProfile"])(this.profile).then(function (res) {
        console.log(res.data.data);
        _this3.popupEdit = false;

        _this3.fetchUsers();
      }).catch(function (err) {
        return console.log(err);
      });
    },
    putProfile: function putProfile(val) {
      if (val.profile) {
        this.profile.profile_id = val.profile.id, this.profile.lastname = val.profile.lastname;
      } else {
        this.profile.profile_id = "", this.profile.lastname = "";
      }

      this.profile.firstname = val.firstname, this.profile.email = val.email, this.profile.user_id = val.id;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/pages/users/users.vue?vue&type=template&id=4989b50d&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/views/pages/users/users.vue?vue&type=template&id=4989b50d& ***!
  \************************************************************************************************************************************************************************************************************/
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
        "vs-popup",
        {
          attrs: { active: _vm.popupEdit },
          on: {
            "update:active": function($event) {
              _vm.popupEdit = $event
            }
          }
        },
        [
          _c("div", { staticClass: "vx-col w-full mb-base" }, [
            _c(
              "form",
              {
                attrs: { enctype: "multipart/form-data" },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.editProfile($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "vx-row mb-2" }, [
                  _c(
                    "div",
                    { staticClass: "vx-col w-full" },
                    [
                      _c("vs-input", {
                        staticClass: "w-full",
                        attrs: {
                          type: "text",
                          "label-placeholder": "Firstname"
                        },
                        model: {
                          value: _vm.profile.firstname,
                          callback: function($$v) {
                            _vm.$set(_vm.profile, "firstname", $$v)
                          },
                          expression: "profile.firstname"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "vx-col w-full" },
                    [
                      _c("vs-input", {
                        staticClass: "w-full",
                        attrs: {
                          type: "text",
                          "label-placeholder": "Lastname"
                        },
                        model: {
                          value: _vm.profile.lastname,
                          callback: function($$v) {
                            _vm.$set(_vm.profile, "lastname", $$v)
                          },
                          expression: "profile.lastname"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "vx-col w-full" },
                    [
                      _c("vs-input", {
                        staticClass: "w-full",
                        attrs: { type: "text", "label-placeholder": "Email" },
                        model: {
                          value: _vm.profile.email,
                          callback: function($$v) {
                            _vm.$set(_vm.profile, "email", $$v)
                          },
                          expression: "profile.email"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "vx-col w-full mt-6 mb-4" }, [
                    _c("input", {
                      attrs: { type: "file" },
                      on: { change: _vm.getPhoto }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "vx-row" }, [
                  _c(
                    "div",
                    { staticClass: "vx-col w-full" },
                    [
                      _c("vs-button", { staticClass: "mr-3 mb-2" }, [
                        _vm._v("Submit")
                      ])
                    ],
                    1
                  )
                ])
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "vs-table",
        {
          attrs: { data: _vm.users, pagination: "", max_items: "7" },
          scopedSlots: _vm._u([
            {
              key: "default",
              fn: function(ref) {
                var data = ref.data
                return _vm._l(data, function(val, index) {
                  return _c(
                    "vs-tr",
                    { key: index },
                    [
                      val.profile
                        ? _c("vs-td", [
                            _c("img", {
                              attrs: {
                                src: val.profile.photo,
                                width: "80",
                                height: "80"
                              }
                            })
                          ])
                        : _c("vs-td"),
                      _vm._v(" "),
                      _c("vs-td", [_vm._v(_vm._s(val.firstname))]),
                      _vm._v(" "),
                      val.profile
                        ? _c("vs-td", [_vm._v(_vm._s(val.profile.lastname))])
                        : _c("vs-td"),
                      _vm._v(" "),
                      _c("vs-td", [_vm._v(_vm._s(val.email))]),
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
                                "icon-pack": "feather",
                                icon: "icon-edit"
                              },
                              on: {
                                click: [
                                  function($event) {
                                    _vm.popupEdit = true
                                  },
                                  function($event) {
                                    _vm.putProfile(val)
                                  }
                                ]
                              }
                            },
                            [_vm._v("edit")]
                          )
                        ],
                        1
                      )
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
              _c("vs-th", [_vm._v("Photo")]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("Firstname")]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("Lastname")]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("Email")]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("Action")])
            ],
            1
          )
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/api/users.js":
/*!********************************!*\
  !*** ./resources/api/users.js ***!
  \********************************/
/*! exports provided: getUsers, getUserId, createUser, updateUser, getRole, addUser, updateProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsers", function() { return getUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserId", function() { return getUserId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUser", function() { return createUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUser", function() { return updateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRole", function() { return getRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addUser", function() { return addUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateProfile", function() { return updateProfile; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/request */ "./resources/utils/request.js");

function getUsers() {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/get-users',
    method: 'get'
  });
}
function getUserId(id) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/users/' + id,
    method: 'get'
  });
}
/*export function deleteUser(id) {
  return request({
    url: '/api/users/' + id,
    method: 'delete'
  })
}*/

function createUser(data) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/users',
    method: 'post',
    data: data
  });
}
function updateUser(data, id) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/users/' + id,
    method: 'put',
    data: data
  });
}
function getRole(query) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/roles',
    method: 'get',
    params: query
  });
}
function addUser(data) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/add-user',
    method: 'post',
    data: data
  });
}
function updateProfile(data) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/update-profile',
    method: 'put',
    data: data
  });
}

/***/ }),

/***/ "./resources/views/pages/users/users.vue":
/*!***********************************************!*\
  !*** ./resources/views/pages/users/users.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _users_vue_vue_type_template_id_4989b50d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.vue?vue&type=template&id=4989b50d& */ "./resources/views/pages/users/users.vue?vue&type=template&id=4989b50d&");
/* harmony import */ var _users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.vue?vue&type=script&lang=js& */ "./resources/views/pages/users/users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _users_vue_vue_type_template_id_4989b50d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _users_vue_vue_type_template_id_4989b50d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/views/pages/users/users.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/views/pages/users/users.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/views/pages/users/users.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./users.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/pages/users/users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/views/pages/users/users.vue?vue&type=template&id=4989b50d&":
/*!******************************************************************************!*\
  !*** ./resources/views/pages/users/users.vue?vue&type=template&id=4989b50d& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_users_vue_vue_type_template_id_4989b50d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./users.vue?vue&type=template&id=4989b50d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/pages/users/users.vue?vue&type=template&id=4989b50d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_users_vue_vue_type_template_id_4989b50d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_users_vue_vue_type_template_id_4989b50d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);