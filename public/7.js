(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemsModal.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ItemsModal.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['value'],
  data: function data() {
    return {
      item: {},
      items: []
    };
  },
  methods: {
    submit: function submit() {
      this.$emit('input', this.items);
      $('.modal').modal('hide');
    },
    addItem: function addItem() {
      this.items.push(this.item);
      this.item = {};
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemsModal.vue?vue&type=template&id=673378f8&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ItemsModal.vue?vue&type=template&id=673378f8& ***!
  \*************************************************************************************************************************************************************************************************************/
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
    "form",
    {
      staticClass: "modal fade",
      attrs: {
        id: "itemsModal",
        tabindex: "-1",
        role: "dialog",
        "aria-labelledby": "exampleModalLabel",
        "aria-hidden": "true"
      },
      on: {
        submit: function($event) {
          $event.preventDefault()
          return _vm.submit($event)
        }
      }
    },
    [
      _c("div", { staticClass: "modal-dialog modal-lg" }, [
        _c("div", { staticClass: "modal-content" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "modal-body" }, [
            _c("div", { staticClass: "row form-group" }, [
              _c("div", { staticClass: "col" }, [
                _c(
                  "form",
                  {
                    staticClass: "input-group",
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.addItem($event)
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
                        placeholder: "Nombre del Producto/Servicio",
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
                    _vm._m(1)
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col" }, [
                _c("i", { attrs: { "data-feather": "save" } }),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "list-group" },
                  _vm._l(_vm.items, function(item, index) {
                    return _c(
                      "li",
                      { key: index, staticClass: "list-group-item" },
                      [
                        _c(
                          "div",
                          { staticClass: "row d-flex align-items-center" },
                          [
                            _c("div", { staticClass: "col lead" }, [
                              _vm._v(
                                "\r\n                      " +
                                  _vm._s(item.nombre) +
                                  "\r\n                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-5" }, [
                              _c("div", { staticClass: "input-group" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: item.cantidad,
                                      expression: "item.cantidad"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "number",
                                    placeholder: "Cantidad",
                                    step: "any",
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
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: item.precioUnitario,
                                      expression: "item.precioUnitario"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "number",
                                    placeholder: "Precio U.",
                                    step: "any",
                                    required: ""
                                  },
                                  domProps: { value: item.precioUnitario },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        item,
                                        "precioUnitario",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "input-group-append" },
                                  [
                                    _c(
                                      "a",
                                      {
                                        staticClass: "btn btn-sm btn-danger",
                                        attrs: { href: "#" }
                                      },
                                      [
                                        _c("feather", {
                                          staticClass: "feather-md",
                                          attrs: { type: "trash-2" }
                                        })
                                      ],
                                      1
                                    )
                                  ]
                                )
                              ])
                            ])
                          ]
                        )
                      ]
                    )
                  }),
                  0
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "modal-footer" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-secondary",
                attrs: { type: "button", "data-dismiss": "modal" }
              },
              [
                _c("feather", {
                  staticClass: "feather-md",
                  attrs: { type: "x" }
                }),
                _vm._v("\r\n            Cancelar\r\n          ")
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "button",
              { staticClass: "btn btn-primary", attrs: { type: "submit" } },
              [
                _c("feather", {
                  staticClass: "feather-md",
                  attrs: { type: "save" }
                }),
                _vm._v("\r\n            Guardar\r\n          ")
              ],
              1
            )
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title" }, [_vm._v("Agregar Items")]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-append" }, [
      _c("button", { staticClass: "btn btn-primary" }, [
        _c("i", { attrs: { "data-feather": "plus" } }),
        _vm._v("\r\n                    Agregar\r\n                  ")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ItemsModal.vue":
/*!************************************************!*\
  !*** ./resources/js/components/ItemsModal.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ItemsModal_vue_vue_type_template_id_673378f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemsModal.vue?vue&type=template&id=673378f8& */ "./resources/js/components/ItemsModal.vue?vue&type=template&id=673378f8&");
/* harmony import */ var _ItemsModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemsModal.vue?vue&type=script&lang=js& */ "./resources/js/components/ItemsModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ItemsModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ItemsModal_vue_vue_type_template_id_673378f8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ItemsModal_vue_vue_type_template_id_673378f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ItemsModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ItemsModal.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/ItemsModal.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemsModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ItemsModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemsModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemsModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ItemsModal.vue?vue&type=template&id=673378f8&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/ItemsModal.vue?vue&type=template&id=673378f8& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemsModal_vue_vue_type_template_id_673378f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ItemsModal.vue?vue&type=template&id=673378f8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ItemsModal.vue?vue&type=template&id=673378f8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemsModal_vue_vue_type_template_id_673378f8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemsModal_vue_vue_type_template_id_673378f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);