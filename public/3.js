(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "./node_modules/core-js/library/fn/get-iterator.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "./node_modules/core-js/library/fn/object/assign.js");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/pages/users/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/views/pages/users/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_OSPanel_domains_katalog2_node_modules_babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var C_OSPanel_domains_katalog2_node_modules_babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_OSPanel_domains_katalog2_node_modules_babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_OSPanel_domains_katalog2_node_modules_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var C_OSPanel_domains_katalog2_node_modules_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_OSPanel_domains_katalog2_node_modules_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api/users */ "./resources/api/users.js");


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
      'tableList': ['vs-th: Component', 'vs-tr: Component', 'vs-td: Component', 'thread: Slot', 'tbody: Slot', 'header: Slot'],
      users: [],
      dialog: false,
      dialogStatus: '',
      temp: {
        firstname: '',
        lastname: '',
        email: '',
        status: null,
        roles: []
      },
      roles: []
    };
  },
  computed: {
    validName: function validName() {
      return this.temp.firstname.length > 0 && this.temp.email.length > 0;
    }
  },
  mounted: function mounted() {
    this.usersGet();
    this.getRoles();
  },
  methods: {
    getRoles: function getRoles() {
      var _this = this;

      Object(_api_users__WEBPACK_IMPORTED_MODULE_2__["getRole"])().then(function (response) {
        _this.roles = response.data;
      });
    },
    usersGet: function usersGet() {
      var _this2 = this;

      Object(_api_users__WEBPACK_IMPORTED_MODULE_2__["getUsers"])().then(function (response) {
        _this2.users = response.data.data;
      });
    },
    restTemp: function restTemp() {
      this.temp = {
        firstname: '',
        lastname: '',
        email: '',
        id: undefined,
        status: null,
        roles: Array,
        password: null
      };
    },
    checkRole: function checkRole(data) {
      console.log(this.temp.roles); //        this.temp.roles.push(data.id)
    },
    openDialog: function openDialog(row) {
      this.restTemp();
      this.temp = C_OSPanel_domains_katalog2_node_modules_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, row); // copy obj

      if (this.temp.roles.length) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = C_OSPanel_domains_katalog2_node_modules_babel_runtime_corejs2_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(this.temp.roles), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var val = _step.value;
            var r = [];
            r.push(val.id);
            this.temp.roles = r;
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }

      this.dialog = true;
      this.dialogStatus = 'update';
    },
    editDate: function editDate() {
      var _this3 = this;

      Object(_api_users__WEBPACK_IMPORTED_MODULE_2__["updateUser"])(this.temp, this.temp.id).then(function (response) {
        _this3.acceptAlert();
      });
    },
    // dialogs info notify
    acceptAlert: function acceptAlert() {
      this.$vs.notify({
        color: 'success',
        title: 'Accept Selected',
        text: 'Lorem ipsum dolor sit amet, consectetur'
      });
    },
    close: function close() {
      this.$vs.notify({
        color: 'danger',
        title: 'Closed',
        text: 'You close a dialog!'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/core-js/library/fn/get-iterator.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/get-iterator.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
module.exports = __webpack_require__(/*! ../modules/core.get-iterator */ "./node_modules/core-js/library/modules/core.get-iterator.js");


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/assign.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/assign.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.assign */ "./node_modules/core-js/library/modules/es6.object.assign.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.assign;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-assign.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-assign.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/library/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/library/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/library/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-gops.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-gops.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-pie.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-pie.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var get = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/library/modules/core.get-iterator-method.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js").getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.assign.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.assign.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ "./node_modules/core-js/library/modules/_object-assign.js") });


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/pages/users/index.vue?vue&type=template&id=041fdad7&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/views/pages/users/index.vue?vue&type=template&id=041fdad7& ***!
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
    "div",
    { attrs: { id: "table-demo" } },
    [
      [
        _c(
          "vx-card",
          { attrs: { title: "Users" } },
          [
            _c(
              "vs-table",
              {
                attrs: {
                  pagination: "",
                  "max-items": "3",
                  search: "",
                  data: _vm.users
                },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var data = ref.data
                      return _vm._l(data, function(val, indextr) {
                        return _c(
                          "vs-tr",
                          {
                            key: indextr,
                            attrs: {
                              state:
                                val.status == 2
                                  ? "warning"
                                  : val.status == 0
                                  ? "danger"
                                  : null,
                              data: val
                            }
                          },
                          [
                            _c(
                              "vs-td",
                              { attrs: { data: val.image } },
                              [
                                _c("vs-avatar", {
                                  attrs: { size: "45px", src: val.image }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("vs-td", { attrs: { data: val.name } }, [
                              _vm._v(
                                "\n              " +
                                  _vm._s(val.firstname) +
                                  " " +
                                  _vm._s(val.lastname) +
                                  "\n            "
                              )
                            ]),
                            _vm._v(" "),
                            _c("vs-td", { attrs: { data: val.email } }, [
                              _vm._v(
                                "\n              " +
                                  _vm._s(val.email) +
                                  "\n            "
                              )
                            ]),
                            _vm._v(" "),
                            _c("vs-td", { attrs: { data: val.status } }, [
                              _vm._v(" active\n            ")
                            ]),
                            _vm._v(" "),
                            _c(
                              "vs-td",
                              { attrs: { data: val.roles } },
                              _vm._l(data[indextr].roles, function(
                                role,
                                roleIndex
                              ) {
                                return _c(
                                  "vs-chip",
                                  {
                                    key: roleIndex,
                                    attrs: { color: "primary", data: role }
                                  },
                                  [
                                    _vm._v(
                                      "\n                " +
                                        _vm._s(role.name) +
                                        "\n              "
                                    )
                                  ]
                                )
                              }),
                              1
                            ),
                            _vm._v(" "),
                            _c("vs-td", { attrs: { data: val.roles } }, [
                              _c(
                                "div",
                                { staticClass: "pointer-events-auto flex" },
                                [
                                  _c("vs-button", {
                                    staticClass: "m-1",
                                    attrs: {
                                      color: "success",
                                      type: "border",
                                      "icon-pack": "feather",
                                      size: "small",
                                      icon: "icon-edit-2"
                                    },
                                    on: {
                                      click: function($event) {
                                        _vm.openDialog(val)
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("vs-button", {
                                    staticClass: "m-1",
                                    attrs: {
                                      color: "danger",
                                      type: "border",
                                      size: "small",
                                      icon: "delete_sweep"
                                    }
                                  })
                                ],
                                1
                              )
                            ])
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
                    _c("vs-th", { attrs: { "sort-key": "image" } }),
                    _vm._v(" "),
                    _c("vs-th", { attrs: { "sort-key": "name" } }, [
                      _vm._v("Name")
                    ]),
                    _vm._v(" "),
                    _c("vs-th", { attrs: { "sort-key": "email" } }, [
                      _vm._v("Email")
                    ]),
                    _vm._v(" "),
                    _c("vs-th", { attrs: { "sort-key": "status" } }, [
                      _vm._v("Status")
                    ]),
                    _vm._v(" "),
                    _c("vs-th", { attrs: { "sort-key": "roles" } }, [
                      _vm._v("Role")
                    ])
                  ],
                  1
                )
              ],
              2
            )
          ],
          1
        )
      ],
      _vm._v(" "),
      _c(
        "vs-prompt",
        {
          attrs: { "vs-is-valid": _vm.validName, "vs-active": _vm.dialog },
          on: {
            "vs-cancel": _vm.restTemp,
            "vs-accept": _vm.editDate,
            "vs-close": _vm.close,
            "update:vsActive": function($event) {
              _vm.dialog = $event
            }
          }
        },
        [
          _c(
            "div",
            { staticClass: "con-exemple-prompt" },
            [
              _vm._v("\n      Enter your first and last name to "),
              _c("b", [_vm._v("continue")]),
              _vm._v(".\n      "),
              _c("vs-input", {
                staticClass: "mt-4 mb-2 w-full",
                attrs: { placeholder: "Name" },
                model: {
                  value: _vm.temp.firstname,
                  callback: function($$v) {
                    _vm.$set(_vm.temp, "firstname", $$v)
                  },
                  expression: "temp.firstname"
                }
              }),
              _vm._v(" "),
              _c("vs-input", {
                staticClass: "mt-4 mb-2 w-full",
                attrs: { placeholder: "Last Name" },
                model: {
                  value: _vm.temp.lastname,
                  callback: function($$v) {
                    _vm.$set(_vm.temp, "lastname", $$v)
                  },
                  expression: "temp.lastname"
                }
              }),
              _vm._v(" "),
              _c("vs-input", {
                staticClass: "mt-4 mb-2 w-full",
                attrs: { placeholder: "Email" },
                model: {
                  value: _vm.temp.email,
                  callback: function($$v) {
                    _vm.$set(_vm.temp, "email", $$v)
                  },
                  expression: "temp.email"
                }
              }),
              _vm._v(" "),
              _c("vs-input", {
                staticClass: "mt-4 mb-2 w-full",
                attrs: { placeholder: "Status" },
                model: {
                  value: _vm.temp.status,
                  callback: function($$v) {
                    _vm.$set(_vm.temp, "status", $$v)
                  },
                  expression: "temp.status"
                }
              }),
              _vm._v(" "),
              _c("vs-input", {
                staticClass: "mt-4 mb-2 w-full",
                attrs: { placeholder: "Password", type: "password" },
                model: {
                  value: _vm.temp.password,
                  callback: function($$v) {
                    _vm.$set(_vm.temp, "password", $$v)
                  },
                  expression: "temp.password"
                }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "mt-1 font-bold" }, [_vm._v("Roles")]),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "demo-alignment" },
                _vm._l(_vm.roles, function(role) {
                  return _c(
                    "li",
                    { key: role.id, attrs: { data: role } },
                    [
                      _c(
                        "vs-checkbox",
                        {
                          attrs: { color: "success", "vs-value": role.id },
                          model: {
                            value: _vm.temp.roles,
                            callback: function($$v) {
                              _vm.$set(_vm.temp, "roles", $$v)
                            },
                            expression: "temp.roles"
                          }
                        },
                        [_vm._v(_vm._s(role.name))]
                      )
                    ],
                    1
                  )
                })
              ),
              _vm._v(" "),
              _c("span", [_vm._v("Checked names: " + _vm._s(_vm.temp.roles))])
            ],
            1
          )
        ]
      )
    ],
    2
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

/***/ "./resources/views/pages/users/index.vue":
/*!***********************************************!*\
  !*** ./resources/views/pages/users/index.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_041fdad7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=041fdad7& */ "./resources/views/pages/users/index.vue?vue&type=template&id=041fdad7&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/views/pages/users/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_041fdad7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_041fdad7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/views/pages/users/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/views/pages/users/index.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/views/pages/users/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/pages/users/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/views/pages/users/index.vue?vue&type=template&id=041fdad7&":
/*!******************************************************************************!*\
  !*** ./resources/views/pages/users/index.vue?vue&type=template&id=041fdad7& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_041fdad7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=041fdad7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/views/pages/users/index.vue?vue&type=template&id=041fdad7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_041fdad7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_041fdad7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);