"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var C_Users_megap_Desktop_Udemy_Blockchain_Development_06_Hardhat_Kickstarter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_megap_Desktop_Udemy_Blockchain_Development_06_Hardhat_Kickstarter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_megap_Desktop_Udemy_Blockchain_Development_06_Hardhat_Kickstarter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var _ContractData_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ContractData.json */ \"./ContractData.json\");\n/* harmony import */ var _ethereum_walletProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ethereum/walletProvider */ \"./ethereum/walletProvider.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function(props) {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(props.campaigns), campaigns = ref[0], setCampaigns = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        function fetchData() {\n            return _fetchData.apply(this, arguments);\n        }\n        function _fetchData() {\n            _fetchData = _asyncToGenerator(C_Users_megap_Desktop_Udemy_Blockchain_Development_06_Hardhat_Kickstarter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var factoryWithSigner, deployedCampaigns;\n                return C_Users_megap_Desktop_Udemy_Blockchain_Development_06_Hardhat_Kickstarter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            if (!( true && typeof window.ethereum !== \"undefined\")) {\n                                _ctx.next = 9;\n                                break;\n                            }\n                            _ctx.next = 3;\n                            return (0,_ethereum_factory__WEBPACK_IMPORTED_MODULE_3__.getFactorySigner)();\n                        case 3:\n                            factoryWithSigner = _ctx.sent;\n                            if (!factoryWithSigner) {\n                                _ctx.next = 9;\n                                break;\n                            }\n                            _ctx.next = 7;\n                            return factoryWithSigner.getDeployedCampaigns();\n                        case 7:\n                            deployedCampaigns = _ctx.sent;\n                            setCampaigns(deployedCampaigns);\n                        case 9:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return _fetchData.apply(this, arguments);\n        }\n        fetchData();\n    }, []);\n    var items = campaigns.map(function(address) {\n        return {\n            header: address,\n            description: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                children: \"View Campaign\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\megap\\\\Desktop\\\\Udemy\\\\Blockchain Development\\\\06-Hardhat_Kickstarter\\\\pages\\\\index.js\",\n                lineNumber: 31,\n                columnNumber: 26\n            }, _this1),\n            fluid: true\n        };\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                children: \"Open Campaigns\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\megap\\\\Desktop\\\\Udemy\\\\Blockchain Development\\\\06-Hardhat_Kickstarter\\\\pages\\\\index.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                floated: \"right\",\n                content: \"Create Campaign\",\n                icon: \"add circle\",\n                primary: true\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\megap\\\\Desktop\\\\Udemy\\\\Blockchain Development\\\\06-Hardhat_Kickstarter\\\\pages\\\\index.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Card.Group, {\n                items: items\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\megap\\\\Desktop\\\\Udemy\\\\Blockchain Development\\\\06-Hardhat_Kickstarter\\\\pages\\\\index.js\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\megap\\\\Desktop\\\\Udemy\\\\Blockchain Development\\\\06-Hardhat_Kickstarter\\\\pages\\\\index.js\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, _this);\n}, \"2w+xmqDaDN4QPZHM7lfQOpcXlek=\"));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNYO0FBQzBDO0FBQzNCO0FBQ2hCO0FBQ3VCO0FBQ047OztBQUlqRCwrREFBZSxZQUFDVSxLQUFLLEVBQUs7OztJQUN0QixJQUFrQ1YsR0FBeUIsR0FBekJBLCtDQUFRLENBQUNVLEtBQUssQ0FBQ0MsU0FBUyxDQUFDLEVBWC9ELFNBV29CLEdBQWtCWCxHQUF5QixHQUEzQyxFQVhwQixZQVdrQyxHQUFJQSxHQUF5QixHQUE3QjtJQUU5QkMsZ0RBQVMsQ0FBQyxXQUFNO2lCQUNHWSxTQUFTO21CQUFUQSxVQUFTOztpQkFBVEEsVUFBUztZQUFUQSxVQUFTLEdBQXhCLDBOQUEyQjtvQkFFYkMsaUJBQWlCLEVBR2JDLGlCQUFpQjs7OztnQ0FKM0IsT0FBNkIsSUFBSSxPQUFPQyxNQUFNLENBQUNDLFFBQVEsS0FBSyxXQUFXOzs7OzttQ0FDdkNiLG1FQUFnQixFQUFFOzs0QkFBNUNVLGlCQUFpQixZQUEyQjtnQ0FDOUNBLENBQUFBLGlCQUFpQjs7Ozs7bUNBRWVBLGlCQUFpQixDQUFDSSxvQkFBb0IsRUFBRTs7NEJBQWxFSCxpQkFBaUIsWUFBaUQ7NEJBQ3hFSCxZQUFZLENBQUNHLGlCQUFpQixDQUFDLENBQUM7Ozs7OzthQUczQzttQkFUY0YsVUFBUzs7UUFVeEJBLFNBQVMsRUFBRSxDQUFDO0tBQ2YsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLElBQU1NLEtBQUssR0FBR1IsU0FBUyxDQUFDUyxHQUFHLENBQUNDLFNBQUFBLE9BQU8sRUFBSTtRQUNuQyxPQUFPO1lBQ0hDLE1BQU0sRUFBRUQsT0FBTztZQUNmRSxXQUFXLGdCQUFFLDhEQUFDQyxHQUFDOzBCQUFDLGVBQWE7Ozs7O3NCQUFJO1lBQ2pDQyxLQUFLLEVBQUUsSUFBSTtTQUNkLENBQUM7S0FDTCxDQUFDO0lBQ0YscUJBQ0ksOERBQUN2QiwyQ0FBUTs7MEJBQ0wsOERBQUN3QixJQUFFOzBCQUFDLGdCQUFjOzs7OztxQkFBSzswQkFDdkIsOERBQUNqQixxREFBTTtnQkFDSGtCLE9BQU8sRUFBQyxPQUFPO2dCQUNmQyxPQUFPLEVBQUMsaUJBQWlCO2dCQUN6QkMsSUFBSSxFQUFDLFlBQVk7Z0JBQ2pCQyxPQUFPOzs7OztxQkFDVDswQkFDRiw4REFBQ3RCLHlEQUFVO2dCQUFDVyxLQUFLLEVBQUVBLEtBQUs7Ozs7O3FCQUFJOzs7Ozs7YUFDckIsQ0FDYjtDQUVMLG1DQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGdldEZhY3RvcnlJbnN0YW5jZSwgZ2V0RmFjdG9yeVNpZ25lciB9IGZyb20gJy4uL2V0aGVyZXVtL2ZhY3RvcnknO1xyXG5pbXBvcnQgQ29udHJhY3REYXRhIGZyb20gJy4uL0NvbnRyYWN0RGF0YS5qc29uJztcclxuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSAnZXRoZXJzJztcclxuaW1wb3J0IHsgZ2V0U2lnbmVyIH0gZnJvbSAnLi4vZXRoZXJldW0vd2FsbGV0UHJvdmlkZXInO1xyXG5pbXBvcnQgeyBDYXJkLCBCdXR0b24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW2NhbXBhaWducywgc2V0Q2FtcGFpZ25zXSA9IHVzZVN0YXRlKHByb3BzLmNhbXBhaWducyk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiB3aW5kb3cuZXRoZXJldW0gIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZhY3RvcnlXaXRoU2lnbmVyID0gYXdhaXQgZ2V0RmFjdG9yeVNpZ25lcigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZhY3RvcnlXaXRoU2lnbmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9mYWN0b3J5V2l0aFNpZ25lci5jcmVhdGVDYW1wYWlnbignMTAwJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVwbG95ZWRDYW1wYWlnbnMgPSBhd2FpdCBmYWN0b3J5V2l0aFNpZ25lci5nZXREZXBsb3llZENhbXBhaWducygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldENhbXBhaWducyhkZXBsb3llZENhbXBhaWducyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZmV0Y2hEYXRhKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgaXRlbXMgPSBjYW1wYWlnbnMubWFwKGFkZHJlc3MgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGhlYWRlcjogYWRkcmVzcyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IDxhPlZpZXcgQ2FtcGFpZ248L2E+LFxyXG4gICAgICAgICAgICBmbHVpZDogdHJ1ZVxyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICA8aDM+T3BlbiBDYW1wYWlnbnM8L2gzPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBmbG9hdGVkPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgY29udGVudD1cIkNyZWF0ZSBDYW1wYWlnblwiXHJcbiAgICAgICAgICAgICAgICBpY29uPVwiYWRkIGNpcmNsZVwiXHJcbiAgICAgICAgICAgICAgICBwcmltYXJ5XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz5cclxuICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgKTtcclxuXHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgICBjb25zdCBmYWN0b3J5V2l0aFNpZ25lciA9IGF3YWl0IGdldEZhY3RvcnlTaWduZXIoKTtcclxuICAgIC8vZmFjdG9yeVdpdGhTaWduZXIuY3JlYXRlQ2FtcGFpZ24oJzEwMCcpO1xyXG4gICAgY29uc3QgY2FtcGFpZ25zID0gYXdhaXQgZmFjdG9yeVdpdGhTaWduZXIuZ2V0RGVwbG95ZWRDYW1wYWlnbnMoKTtcclxuICAgIGNvbnNvbGUubG9nKHByb2Nlc3MuZW52LklORlVSQV9VUkwpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBjYW1wYWlnbnMsXHJcbiAgICAgICAgICAgIGluZnVyYVVSTDogcHJvY2Vzcy5lbnYuSU5GVVJBX1VSTFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmV2YWxpZGF0ZTogMTAvL0ZldGNoZXMgZGF0YSBmcm9tIHNlcnZlciBldmVyeSAxMCBzZWNvbmRzXHJcbiAgICB9O1xyXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRnJhZ21lbnQiLCJnZXRGYWN0b3J5SW5zdGFuY2UiLCJnZXRGYWN0b3J5U2lnbmVyIiwiQ29udHJhY3REYXRhIiwiZXRoZXJzIiwiZ2V0U2lnbmVyIiwiQ2FyZCIsIkJ1dHRvbiIsInByb3BzIiwiY2FtcGFpZ25zIiwic2V0Q2FtcGFpZ25zIiwiZmV0Y2hEYXRhIiwiZmFjdG9yeVdpdGhTaWduZXIiLCJkZXBsb3llZENhbXBhaWducyIsIndpbmRvdyIsImV0aGVyZXVtIiwiZ2V0RGVwbG95ZWRDYW1wYWlnbnMiLCJpdGVtcyIsIm1hcCIsImFkZHJlc3MiLCJoZWFkZXIiLCJkZXNjcmlwdGlvbiIsImEiLCJmbHVpZCIsImgzIiwiZmxvYXRlZCIsImNvbnRlbnQiLCJpY29uIiwicHJpbWFyeSIsIkdyb3VwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});