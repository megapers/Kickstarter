"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaigns/[address]",{

/***/ "./components/ContributeForm.js":
/*!**************************************!*\
  !*** ./components/ContributeForm.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_megap_Desktop_Udemy_Blockchain_Development_06_Hardhat_Kickstarter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_megap_Desktop_Udemy_Blockchain_Development_06_Hardhat_Kickstarter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_megap_Desktop_Udemy_Blockchain_Development_06_Hardhat_Kickstarter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _store_blockchain_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/blockchain-context */ \"./store/blockchain-context.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar ContributeForm = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), amountInput = ref[0], setAmountInput = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), errorMessage = ref1[0], setErrorMessage = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), loading = ref2[0], setLoading = ref2[1];\n    var blockchainContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_store_blockchain_context__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var provider = blockchainContext.provider;\n    function submitHandler(event) {\n        return _submitHandler.apply(this, arguments);\n    }\n    function _submitHandler() {\n        _submitHandler = _asyncToGenerator(C_Users_megap_Desktop_Udemy_Blockchain_Development_06_Hardhat_Kickstarter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var factoryWithSigner;\n            return C_Users_megap_Desktop_Udemy_Blockchain_Development_06_Hardhat_Kickstarter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        setLoading(true);\n                        setErrorMessage(\"\");\n                        _ctx.prev = 3;\n                        factoryWithSigner = provider;\n                        _ctx.next = 7;\n                        return factoryWithSigner.contribute(amountInput);\n                    case 7:\n                        _ctx.next = 12;\n                        break;\n                    case 9:\n                        _ctx.prev = 9;\n                        _ctx.t0 = _ctx[\"catch\"](3);\n                        setErrorMessage(_ctx.t0.message);\n                    case 12:\n                        setLoading(false);\n                    case 13:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    3,\n                    9\n                ]\n            ]);\n        //router.push('/');\n        }));\n        return _submitHandler.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Form, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Form.Field, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        children: \"Amount to Contribute\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\megap\\\\Desktop\\\\Udemy\\\\Blockchain Development\\\\06-Hardhat_Kickstarter\\\\components\\\\ContributeForm.js\",\n                        lineNumber: 32,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                        value: amountInput,\n                        label: \"ether\",\n                        labelPosition: \"right\",\n                        onChange: function(event) {\n                            return setAmountInput(event.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\megap\\\\Desktop\\\\Udemy\\\\Blockchain Development\\\\06-Hardhat_Kickstarter\\\\components\\\\ContributeForm.js\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\megap\\\\Desktop\\\\Udemy\\\\Blockchain Development\\\\06-Hardhat_Kickstarter\\\\components\\\\ContributeForm.js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                primary: true,\n                type: \"submit\",\n                onClick: submitHandler,\n                loading: loading,\n                children: \"Contribute!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\megap\\\\Desktop\\\\Udemy\\\\Blockchain Development\\\\06-Hardhat_Kickstarter\\\\components\\\\ContributeForm.js\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\megap\\\\Desktop\\\\Udemy\\\\Blockchain Development\\\\06-Hardhat_Kickstarter\\\\components\\\\ContributeForm.js\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, _this);\n};\n_s(ContributeForm, \"kkppV+hFvFKOv8Gv1Vxys1tw65A=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = ContributeForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContributeForm);\nvar _c;\n$RefreshReg$(_c, \"ContributeForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbnRyaWJ1dGVGb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWtFO0FBQzFCO0FBQ3lCO0FBQ0w7O0FBRTVELElBQU1VLGNBQWMsR0FBRyxXQUFNOztJQUN6QixJQUFzQ1YsR0FBVSxHQUFWQSwrQ0FBUSxFQUFFLEVBTnBELFdBTXNCLEdBQW9CQSxHQUFVLEdBQTlCLEVBTnRCLGNBTXNDLEdBQUlBLEdBQVUsR0FBZDtJQUNsQyxJQUF3Q0EsSUFBVSxHQUFWQSwrQ0FBUSxFQUFFLEVBUHRELFlBT3VCLEdBQXFCQSxJQUFVLEdBQS9CLEVBUHZCLGVBT3dDLEdBQUlBLElBQVUsR0FBZDtJQUNwQyxJQUE4QkEsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQVJqRCxPQVFrQixHQUFnQkEsSUFBZSxHQUEvQixFQVJsQixVQVE4QixHQUFJQSxJQUFlLEdBQW5CO0lBQzFCLElBQU1pQixpQkFBaUIsR0FBR2YsaURBQVUsQ0FBQ08saUVBQWlCLENBQUM7SUFDdkQsSUFBTVMsTUFBTSxHQUFHZCxzREFBUyxFQUFFO0lBQzFCLElBQU1lLFFBQVEsR0FBR0YsaUJBQWlCLENBQUNFLFFBQVE7YUFFNUJDLGFBQWEsQ0FBQ0MsS0FBSztlQUFuQkQsY0FBYTs7YUFBYkEsY0FBYTtRQUFiQSxjQUFhLEdBQTVCLHdOQUE2QkMsS0FBSyxFQUFFO2dCQUt0QkMsaUJBQWlCOzs7O3dCQUozQkQsS0FBSyxDQUFDRSxjQUFjLEVBQUUsQ0FBQzt3QkFDdkJQLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDakJGLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQzs7d0JBRVZRLGlCQUFpQixHQUFHSCxRQUFRLENBQUM7OytCQUM3QkcsaUJBQWlCLENBQUNFLFVBQVUsQ0FBQ2IsV0FBVyxDQUFDOzs7Ozs7O3dCQUcvQ0csZUFBZSxDQUFDVyxRQUFJQyxPQUFPLENBQUMsQ0FBQzs7d0JBRWpDVixVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7Ozs7Ozs7O1FBQ2xCLG1CQUFtQjtTQUN0QjtlQWJjSSxjQUFhOztJQWU1QixxQkFDSSw4REFBQ2IsbURBQUk7OzBCQUNELDhEQUFDQSx5REFBVTs7a0NBQ1AsOERBQUNxQixPQUFLO2tDQUFDLHNCQUFvQjs7Ozs7NkJBQVE7a0NBQ25DLDhEQUFDdkIsb0RBQUs7d0JBQ0Z3QixLQUFLLEVBQUVsQixXQUFXO3dCQUNsQmlCLEtBQUssRUFBQyxPQUFPO3dCQUNiRSxhQUFhLEVBQUMsT0FBTzt3QkFDckJDLFFBQVEsRUFBRVYsU0FBQUEsS0FBSzttQ0FBSVQsY0FBYyxDQUFDUyxLQUFLLENBQUNXLE1BQU0sQ0FBQ0gsS0FBSyxDQUFDO3lCQUFBOzs7Ozs2QkFDdkQ7Ozs7OztxQkFDTzswQkFDYiw4REFBQ3ZCLHFEQUFNO2dCQUNIMkIsT0FBTztnQkFBQ0MsSUFBSSxFQUFDLFFBQVE7Z0JBQ3JCQyxPQUFPLEVBQUVmLGFBQWE7Z0JBQ3RCTCxPQUFPLEVBQUVBLE9BQU87MEJBQ25CLGFBRUQ7Ozs7O3FCQUFTOzs7Ozs7YUFDTixDQUNWO0NBQ0o7R0EzQ0tMLGNBQWM7O1FBS0ROLGtEQUFTOzs7QUFMdEJNLEtBQUFBLGNBQWM7QUE2Q3BCLCtEQUFlQSxjQUFjLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250cmlidXRlRm9ybS5qcz9lMDU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IElucHV0LCBCdXR0b24sIEZvcm0sIE1lc3NhZ2UgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCBCbG9ja2NoYWluQ29udGV4dCBmcm9tICcuLi9zdG9yZS9ibG9ja2NoYWluLWNvbnRleHQnO1xyXG5cclxuY29uc3QgQ29udHJpYnV0ZUZvcm0gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbYW1vdW50SW5wdXQsIHNldEFtb3VudElucHV0XSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGJsb2NrY2hhaW5Db250ZXh0ID0gdXNlQ29udGV4dChCbG9ja2NoYWluQ29udGV4dCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHByb3ZpZGVyID0gYmxvY2tjaGFpbkNvbnRleHQucHJvdmlkZXI7XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gc3VibWl0SGFuZGxlcihldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICBzZXRFcnJvck1lc3NhZ2UoJycpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZhY3RvcnlXaXRoU2lnbmVyID0gcHJvdmlkZXI7XHJcbiAgICAgICAgICAgIGF3YWl0IGZhY3RvcnlXaXRoU2lnbmVyLmNvbnRyaWJ1dGUoYW1vdW50SW5wdXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIHNldEVycm9yTWVzc2FnZShlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIC8vcm91dGVyLnB1c2goJy8nKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbD5BbW91bnQgdG8gQ29udHJpYnV0ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YW1vdW50SW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9J2V0aGVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249J3JpZ2h0J1xyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBzZXRBbW91bnRJbnB1dChldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBwcmltYXJ5IHR5cGU9J3N1Ym1pdCdcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3N1Ym1pdEhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDb250cmlidXRlIVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRyaWJ1dGVGb3JtOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvbnRleHQiLCJGcmFnbWVudCIsInVzZVJvdXRlciIsIklucHV0IiwiQnV0dG9uIiwiRm9ybSIsIk1lc3NhZ2UiLCJCbG9ja2NoYWluQ29udGV4dCIsIkNvbnRyaWJ1dGVGb3JtIiwiYW1vdW50SW5wdXQiLCJzZXRBbW91bnRJbnB1dCIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiYmxvY2tjaGFpbkNvbnRleHQiLCJyb3V0ZXIiLCJwcm92aWRlciIsInN1Ym1pdEhhbmRsZXIiLCJldmVudCIsImZhY3RvcnlXaXRoU2lnbmVyIiwicHJldmVudERlZmF1bHQiLCJjb250cmlidXRlIiwiZXJyIiwibWVzc2FnZSIsIkZpZWxkIiwibGFiZWwiLCJ2YWx1ZSIsImxhYmVsUG9zaXRpb24iLCJvbkNoYW5nZSIsInRhcmdldCIsInByaW1hcnkiLCJ0eXBlIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ContributeForm.js\n");

/***/ })

});