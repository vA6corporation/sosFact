(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ticket/Create.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ticket/Create.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ItemsModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/ItemsModal */ "./resources/js/components/ItemsModal.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    ItemsModal: _components_ItemsModal__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      invoice: {},
      items: [],
      item: {}
    };
  },
  computed: {
    totalItems: function totalItems() {
      return this.items.map(function (e) {
        return e.precioUnitario * e.cantidad;
      }).reduce(function (a, b) {
        return a + b;
      }, 0);
    }
  },
  methods: {
    submit: function submit() {
      console.log('enviamos');
    },
    addProduct: function addProduct() {
      this.item.precioUnitario = null;
      this.item.cantidad = null;
      this.items.push(Object.assign({}, this.item));
      this.item = {};
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ticket/Create.vue?vue&type=template&id=687fe390&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ticket/Create.vue?vue&type=template&id=687fe390& ***!
  \***********************************************************************************************************************************************************************************************************/
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
      _c("items-modal", {
        model: {
          value: _vm.items,
          callback: function($$v) {
            _vm.items = $$v
          },
          expression: "items"
        }
      }),
      _vm._v(" "),
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.submit($event)
            }
          }
        },
        [
          _c(
            "div",
            {
              staticClass:
                "d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-3 mb-3 border-bottom"
            },
            [
              _c("h1", { staticClass: "h2 mb-0" }, [_vm._v("Nueva Boleta")]),
              _vm._v(" "),
              _c("div", { staticClass: "btn-toolbar mb-2 mb-md-0" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-outline-primary",
                    attrs: { type: "submit" }
                  },
                  [
                    _c("feather", { attrs: { type: "save" } }),
                    _vm._v("\r\n        Guardar\r\n      ")
                  ],
                  1
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-8 mx-auto" }, [
              _vm._m(0),
              _vm._v(" "),
              _vm._m(1),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c(
                  "label",
                  {
                    staticClass: "col-md-3 col-form-label",
                    attrs: { for: "" }
                  },
                  [_vm._v("Productos/Servicios")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col" }, [
                  _c(
                    "form",
                    {
                      staticClass: "input-group form-group",
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.addProduct($event)
                        }
                      }
                    },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.item.nombre,
                            expression: "item.nombre"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder: "Nombre del producto o servicio",
                          required: ""
                        },
                        domProps: { value: _vm.item.nombre },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.item, "nombre", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "input-group-append" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary",
                            attrs: { type: "submit" }
                          },
                          [
                            _c("feather", { attrs: { type: "plus" } }),
                            _vm._v(
                              "\r\n                Agregar\r\n              "
                            )
                          ],
                          1
                        )
                      ])
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col" }, [
                  _vm.items.length
                    ? _c("div", { staticClass: "card shadow-sm" }, [
                        _c(
                          "ul",
                          { staticClass: "list-group list-group-flush" },
                          [
                            _vm._l(_vm.items, function(item, index) {
                              return _c(
                                "li",
                                { key: index, staticClass: "list-group-item" },
                                [
                                  _c("div", { staticClass: "row" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "col lead d-flex align-items-center text-uppercase"
                                      },
                                      [
                                        _vm._v(
                                          "\r\n                    " +
                                            _vm._s(item.nombre) +
                                            "\r\n                  "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "col-md-5" }, [
                                      _c(
                                        "div",
                                        { staticClass: "input-group" },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model.number",
                                                value: item.cantidad,
                                                expression: "item.cantidad",
                                                modifiers: { number: true }
                                              }
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                              type: "number",
                                              placeholder: "Cantidad",
                                              required: ""
                                            },
                                            domProps: { value: item.cantidad },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  item,
                                                  "cantidad",
                                                  _vm._n($event.target.value)
                                                )
                                              },
                                              blur: function($event) {
                                                return _vm.$forceUpdate()
                                              }
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model.number",
                                                value: item.precioUnitario,
                                                expression:
                                                  "item.precioUnitario",
                                                modifiers: { number: true }
                                              }
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                              type: "number",
                                              placeholder: "Precio U.",
                                              required: ""
                                            },
                                            domProps: {
                                              value: item.precioUnitario
                                            },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  item,
                                                  "precioUnitario",
                                                  _vm._n($event.target.value)
                                                )
                                              },
                                              blur: function($event) {
                                                return _vm.$forceUpdate()
                                              }
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass: "input-group-append"
                                            },
                                            [
                                              _c(
                                                "a",
                                                {
                                                  staticClass: "btn btn-danger",
                                                  attrs: { href: "#" },
                                                  on: {
                                                    click: function($event) {
                                                      $event.preventDefault()
                                                      return _vm.items.splice(
                                                        index,
                                                        1
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _c("feather", {
                                                    attrs: { type: "trash-2" }
                                                  })
                                                ],
                                                1
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ])
                                  ])
                                ]
                              )
                            }),
                            _vm._v(" "),
                            _c(
                              "li",
                              {
                                staticClass:
                                  "list-group-item list-group-item-info d-flex justify-content-between lead font-weight-bold"
                              },
                              [
                                _vm._v(
                                  "\r\n                TOTAL\r\n                "
                                ),
                                _c("span", [
                                  _vm._v(
                                    "\r\n                  S/ " +
                                      _vm._s(_vm.totalItems.toFixed(2)) +
                                      "\r\n                "
                                  )
                                ])
                              ]
                            )
                          ],
                          2
                        )
                      ])
                    : _vm._e()
                ])
              ])
            ])
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row form-group" }, [
      _c(
        "label",
        { staticClass: "col-md-3 col-form-label", attrs: { for: "" } },
        [_vm._v("Tipo de documento")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "col" }, [
        _c(
          "select",
          { staticClass: "custom-select", attrs: { name: "", id: "" } },
          [
            _c("option", { attrs: { value: "DNI" } }, [_vm._v("DNI")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "RUC" } }, [_vm._v("RUC")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "CARNETEXT" } }, [
              _vm._v("CARNET DE EXT.")
            ]),
            _vm._v(" "),
            _c("option", { attrs: { value: "OTROS" } }, [_vm._v("OTROS")])
          ]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row form-group" }, [
      _c(
        "label",
        { staticClass: "col-md-3 col-form-label", attrs: { for: "" } },
        [_vm._v("N de Documento")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "col" }, [
        _c("input", {
          staticClass: "form-control",
          attrs: {
            type: "text",
            placeholder: "N de documento del cliente",
            maxlength: "11",
            minlength: "11",
            required: ""
          }
        })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/ticket/Create.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/ticket/Create.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_687fe390___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=687fe390& */ "./resources/js/views/ticket/Create.vue?vue&type=template&id=687fe390&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/views/ticket/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_687fe390___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_687fe390___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/ticket/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/ticket/Create.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/ticket/Create.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ticket/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/ticket/Create.vue?vue&type=template&id=687fe390&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/ticket/Create.vue?vue&type=template&id=687fe390& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_687fe390___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=687fe390& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ticket/Create.vue?vue&type=template&id=687fe390&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_687fe390___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_687fe390___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);