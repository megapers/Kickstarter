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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_megap_Desktop_Udemy_Blockchain_Development_06_Hardhat_Kickstarter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_megap_Desktop_Udemy_Blockchain_Development_06_Hardhat_Kickstarter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_megap_Desktop_Udemy_Blockchain_Development_06_Hardhat_Kickstarter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _store_blockchain_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/blockchain-context */ \"./store/blockchain-context.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function() {\n    var _this1 = _this;\n    var submitHandler = function submitHandler(event) {\n        event.preventDefault();\n        router.push(\"/campaigns/new\");\n    };\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), campaigns = ref[0], setCampaigns = ref[1];\n    var blockchainContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_store_blockchain_context__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n    var provider = blockchainContext.provider;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        function fetchData() {\n            return _fetchData.apply(this, arguments);\n        }\n        function _fetchData() {\n            _fetchData = _asyncToGenerator(C_Users_megap_Desktop_Udemy_Blockchain_Development_06_Hardhat_Kickstarter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var factoryWithSigner, deployedCampaigns;\n                return C_Users_megap_Desktop_Udemy_Blockchain_Development_06_Hardhat_Kickstarter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            if (!( true && typeof window.ethereum !== \"undefined\")) {\n                                _ctx.next = 7;\n                                break;\n                            }\n                            factoryWithSigner = provider;\n                            if (!factoryWithSigner) {\n                                _ctx.next = 7;\n                                break;\n                            }\n                            _ctx.next = 5;\n                            return factoryWithSigner.getDeployedCampaigns();\n                        case 5:\n                            deployedCampaigns = _ctx.sent;\n                            setCampaigns(deployedCampaigns);\n                        case 7:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return _fetchData.apply(this, arguments);\n        }\n        fetchData();\n    }, [\n        provider,\n        campaigns\n    ]);\n    var items = campaigns.map(function(address) {\n        return {\n            header: address,\n            description: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                href: \"/campaigns/\".concat(address),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                    children: \"View Campaign\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\megap\\\\Desktop\\\\Udemy\\\\Blockchain Development\\\\06-Hardhat_Kickstarter\\\\pages\\\\index.js\",\n                    lineNumber: 32,\n                    columnNumber: 21\n                }, _this1)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\megap\\\\Desktop\\\\Udemy\\\\Blockchain Development\\\\06-Hardhat_Kickstarter\\\\pages\\\\index.js\",\n                lineNumber: 31,\n                columnNumber: 17\n            }, _this1),\n            fluid: true\n        };\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: blockchainContext.isLoaded ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                    children: \"Open Campaigns\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\megap\\\\Desktop\\\\Udemy\\\\Blockchain Development\\\\06-Hardhat_Kickstarter\\\\pages\\\\index.js\",\n                    lineNumber: 49,\n                    columnNumber: 25\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                    href: \"/campaigns/new\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                            floated: \"right\",\n                            content: \"Create Campaign\",\n                            icon: \"add circle\",\n                            primary: true,\n                            onClick: submitHandler\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\megap\\\\Desktop\\\\Udemy\\\\Blockchain Development\\\\06-Hardhat_Kickstarter\\\\pages\\\\index.js\",\n                            lineNumber: 53,\n                            columnNumber: 33\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\megap\\\\Desktop\\\\Udemy\\\\Blockchain Development\\\\06-Hardhat_Kickstarter\\\\pages\\\\index.js\",\n                        lineNumber: 52,\n                        columnNumber: 29\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\megap\\\\Desktop\\\\Udemy\\\\Blockchain Development\\\\06-Hardhat_Kickstarter\\\\pages\\\\index.js\",\n                    lineNumber: 51,\n                    columnNumber: 25\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Card.Group, {\n                    items: items\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\megap\\\\Desktop\\\\Udemy\\\\Blockchain Development\\\\06-Hardhat_Kickstarter\\\\pages\\\\index.js\",\n                    lineNumber: 63,\n                    columnNumber: 25\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\megap\\\\Desktop\\\\Udemy\\\\Blockchain Development\\\\06-Hardhat_Kickstarter\\\\pages\\\\index.js\",\n            lineNumber: 48,\n            columnNumber: 21\n        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\megap\\\\Desktop\\\\Udemy\\\\Blockchain Development\\\\06-Hardhat_Kickstarter\\\\pages\\\\index.js\",\n            lineNumber: 65,\n            columnNumber: 23\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\megap\\\\Desktop\\\\Udemy\\\\Blockchain Development\\\\06-Hardhat_Kickstarter\\\\pages\\\\index.js\",\n        lineNumber: 45,\n        columnNumber: 9\n    }, _this);\n}, \"qvLq4kzENZn3NPrGe1IVGA708nM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n}));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrRTtBQUMxQjtBQUNlO0FBQ047QUFDVztBQUMvQjs7QUFFN0IsK0RBQWUsY0FBTTs7UUErQlJVLGFBQWEsR0FBdEIsU0FBU0EsYUFBYSxDQUFDQyxLQUFLLEVBQUU7UUFDMUJBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFLENBQUM7UUFDdkJDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7S0FFakM7O0lBbENELElBQU1ELE1BQU0sR0FBR1Qsc0RBQVMsRUFBRTtJQUMxQixJQUFrQ0osR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQVRsRCxTQVNvQixHQUFrQkEsR0FBWSxHQUE5QixFQVRwQixZQVNrQyxHQUFJQSxHQUFZLEdBQWhCO0lBQzlCLElBQU1pQixpQkFBaUIsR0FBR2YsaURBQVUsQ0FBQ00saUVBQWlCLENBQUM7SUFDdkQsSUFBTVUsUUFBUSxHQUFHRCxpQkFBaUIsQ0FBQ0MsUUFBUTtJQUUzQ2pCLGdEQUFTLENBQUMsV0FBTTtpQkFDR2tCLFNBQVM7bUJBQVRBLFVBQVM7O2lCQUFUQSxVQUFTO1lBQVRBLFVBQVMsR0FBeEIsME5BQTJCO29CQUViQyxpQkFBaUIsRUFFYkMsaUJBQWlCOzs7O2dDQUgzQixPQUE2QixJQUFJLE9BQU9DLE1BQU0sQ0FBQ0MsUUFBUSxLQUFLLFdBQVc7Ozs7NEJBQ2pFSCxpQkFBaUIsR0FBR0YsUUFBUSxDQUFDO2dDQUMvQkUsQ0FBQUEsaUJBQWlCOzs7OzttQ0FDZUEsaUJBQWlCLENBQUNJLG9CQUFvQixFQUFFOzs0QkFBbEVILGlCQUFpQixZQUFpRDs0QkFDeEVMLFlBQVksQ0FBQ0ssaUJBQWlCLENBQUMsQ0FBQzs7Ozs7O2FBRzNDO21CQVJjRixVQUFTOztRQVN4QkEsU0FBUyxFQUFFLENBQUM7S0FDZixFQUFFO1FBQUNELFFBQVE7UUFBRUgsU0FBUztLQUFDLENBQUMsQ0FBQztJQUUxQixJQUFNVSxLQUFLLEdBQUdWLFNBQVMsQ0FBQ1csR0FBRyxDQUFDQyxTQUFBQSxPQUFPLEVBQUk7UUFDbkMsT0FBTztZQUNIQyxNQUFNLEVBQUVELE9BQU87WUFDZkUsV0FBVyxnQkFDUCw4REFBQ3BCLGtEQUFJO2dCQUFDcUIsSUFBSSxFQUFFLGFBQVksQ0FBVSxPQUFSSCxPQUFPLENBQUU7MEJBQy9CLDRFQUFDSSxHQUFDOzhCQUFDLGVBQWE7Ozs7OzBCQUFJOzs7OztzQkFDakI7WUFFWEMsS0FBSyxFQUFFLElBQUk7U0FDZCxDQUFDO0tBQ0wsQ0FBQztJQU9GLHFCQUNJLDhEQUFDQyxLQUFHO2tCQUVJaEIsaUJBQWlCLENBQUNpQixRQUFRLGlCQUN0Qiw4REFBQy9CLDJDQUFROzs4QkFDTCw4REFBQ2dDLElBQUU7OEJBQUMsZ0JBQWM7Ozs7O3lCQUFLOzhCQUV2Qiw4REFBQzFCLGtEQUFJO29CQUFDcUIsSUFBSSxFQUFDLGdCQUFnQjs4QkFDdkIsNEVBQUNDLEdBQUM7a0NBQ0UsNEVBQUN4QixxREFBTTs0QkFDSDZCLE9BQU8sRUFBQyxPQUFPOzRCQUNmQyxPQUFPLEVBQUMsaUJBQWlCOzRCQUN6QkMsSUFBSSxFQUFDLFlBQVk7NEJBQ2pCQyxPQUFPOzRCQUNQQyxPQUFPLEVBQUU5QixhQUFhOzs7OztpQ0FDeEI7Ozs7OzZCQUNGOzs7Ozt5QkFDRDs4QkFFUCw4REFBQ0oseURBQVU7b0JBQUNtQixLQUFLLEVBQUVBLEtBQUs7Ozs7O3lCQUFJOzs7Ozs7aUJBQ3JCLGlCQUNULDhEQUFDaUIsR0FBQztzQkFBQyxZQUFVOzs7OztpQkFBSTs7Ozs7YUFFekIsQ0FDUjtDQUNMOztRQTVEa0J0QyxrREFBUzs7SUE0RDFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgZ2V0RmFjdG9yeVNpZ25lciB9IGZyb20gJy4uL2V0aGVyZXVtL2ZhY3RvcnknO1xyXG5pbXBvcnQgeyBDYXJkLCBCdXR0b24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCBCbG9ja2NoYWluQ29udGV4dCBmcm9tICcuLi9zdG9yZS9ibG9ja2NoYWluLWNvbnRleHQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBbY2FtcGFpZ25zLCBzZXRDYW1wYWlnbnNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgYmxvY2tjaGFpbkNvbnRleHQgPSB1c2VDb250ZXh0KEJsb2NrY2hhaW5Db250ZXh0KTtcclxuICAgIGNvbnN0IHByb3ZpZGVyID0gYmxvY2tjaGFpbkNvbnRleHQucHJvdmlkZXI7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiB3aW5kb3cuZXRoZXJldW0gIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZhY3RvcnlXaXRoU2lnbmVyID0gcHJvdmlkZXI7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmFjdG9yeVdpdGhTaWduZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXBsb3llZENhbXBhaWducyA9IGF3YWl0IGZhY3RvcnlXaXRoU2lnbmVyLmdldERlcGxveWVkQ2FtcGFpZ25zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q2FtcGFpZ25zKGRlcGxveWVkQ2FtcGFpZ25zKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmZXRjaERhdGEoKTtcclxuICAgIH0sIFtwcm92aWRlciwgY2FtcGFpZ25zXSk7XHJcblxyXG4gICAgY29uc3QgaXRlbXMgPSBjYW1wYWlnbnMubWFwKGFkZHJlc3MgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGhlYWRlcjogYWRkcmVzcyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IChcclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvY2FtcGFpZ25zLyR7YWRkcmVzc31gfT5cclxuICAgICAgICAgICAgICAgICAgICA8YT5WaWV3IENhbXBhaWduPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICBmbHVpZDogdHJ1ZVxyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBzdWJtaXRIYW5kbGVyKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICByb3V0ZXIucHVzaCgnL2NhbXBhaWducy9uZXcnKTtcclxuXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJsb2NrY2hhaW5Db250ZXh0LmlzTG9hZGVkID9cclxuICAgICAgICAgICAgICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5PcGVuIENhbXBhaWduczwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvY2FtcGFpZ25zL25ldyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0ZWQ9XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJDcmVhdGUgQ2FtcGFpZ25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiYWRkIGNpcmNsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c3VibWl0SGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Hcm91cCBpdGVtcz17aXRlbXN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICA6IDxwPkxvYWRpbmcuLi48L3A+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDb250ZXh0IiwiRnJhZ21lbnQiLCJ1c2VSb3V0ZXIiLCJnZXRGYWN0b3J5U2lnbmVyIiwiQ2FyZCIsIkJ1dHRvbiIsIkJsb2NrY2hhaW5Db250ZXh0IiwiTGluayIsInN1Ym1pdEhhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwicm91dGVyIiwicHVzaCIsImNhbXBhaWducyIsInNldENhbXBhaWducyIsImJsb2NrY2hhaW5Db250ZXh0IiwicHJvdmlkZXIiLCJmZXRjaERhdGEiLCJmYWN0b3J5V2l0aFNpZ25lciIsImRlcGxveWVkQ2FtcGFpZ25zIiwid2luZG93IiwiZXRoZXJldW0iLCJnZXREZXBsb3llZENhbXBhaWducyIsIml0ZW1zIiwibWFwIiwiYWRkcmVzcyIsImhlYWRlciIsImRlc2NyaXB0aW9uIiwiaHJlZiIsImEiLCJmbHVpZCIsImRpdiIsImlzTG9hZGVkIiwiaDMiLCJmbG9hdGVkIiwiY29udGVudCIsImljb24iLCJwcmltYXJ5Iiwib25DbGljayIsIkdyb3VwIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});