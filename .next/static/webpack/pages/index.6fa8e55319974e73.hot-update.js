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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_megap_Desktop_Udemy_Blockchain_Development_06_Hardhat_Kickstarter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_megap_Desktop_Udemy_Blockchain_Development_06_Hardhat_Kickstarter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_megap_Desktop_Udemy_Blockchain_Development_06_Hardhat_Kickstarter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _store_blockchain_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/blockchain-context */ \"./store/blockchain-context.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function() {\n    var _this1 = _this;\n    var submitHandler = function submitHandler(event) {\n        event.preventDefault();\n        router.push(\"/campaigns/new\");\n    };\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), campaigns = ref[0], setCampaigns = ref[1];\n    var blockchainContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_store_blockchain_context__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n    var provider = blockchainContext.provider;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        function fetchData() {\n            return _fetchData.apply(this, arguments);\n        }\n        function _fetchData() {\n            _fetchData = _asyncToGenerator(C_Users_megap_Desktop_Udemy_Blockchain_Development_06_Hardhat_Kickstarter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var factoryWithSigner, deployedCampaigns;\n                return C_Users_megap_Desktop_Udemy_Blockchain_Development_06_Hardhat_Kickstarter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            if (!( true && typeof window.ethereum !== \"undefined\")) {\n                                _ctx.next = 7;\n                                break;\n                            }\n                            factoryWithSigner = provider;\n                            if (!factoryWithSigner) {\n                                _ctx.next = 7;\n                                break;\n                            }\n                            _ctx.next = 5;\n                            return factoryWithSigner.getDeployedCampaigns();\n                        case 5:\n                            deployedCampaigns = _ctx.sent;\n                            setCampaigns(deployedCampaigns);\n                        case 7:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return _fetchData.apply(this, arguments);\n        }\n        fetchData();\n    }, [\n        provider,\n        campaigns\n    ]);\n    var items = campaigns.map(function(address) {\n        return {\n            header: address,\n            description: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                href: \"/campaigns/\".concat(address),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                    children: \"View Campaign\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\megap\\\\Desktop\\\\Udemy\\\\Blockchain Development\\\\06-Hardhat_Kickstarter\\\\pages\\\\index.js\",\n                    lineNumber: 33,\n                    columnNumber: 21\n                }, _this1)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\megap\\\\Desktop\\\\Udemy\\\\Blockchain Development\\\\06-Hardhat_Kickstarter\\\\pages\\\\index.js\",\n                lineNumber: 32,\n                columnNumber: 17\n            }, _this1),\n            fluid: true\n        };\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            blockchainContext.isLoaded ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                        children: \"Open Campaigns\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\megap\\\\Desktop\\\\Udemy\\\\Blockchain Development\\\\06-Hardhat_Kickstarter\\\\pages\\\\index.js\",\n                        lineNumber: 50,\n                        columnNumber: 25\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                        href: \"/campaigns/new\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                                floated: \"right\",\n                                content: \"Create Campaign\",\n                                icon: \"add circle\",\n                                primary: true,\n                                onClick: submitHandler\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\megap\\\\Desktop\\\\Udemy\\\\Blockchain Development\\\\06-Hardhat_Kickstarter\\\\pages\\\\index.js\",\n                                lineNumber: 54,\n                                columnNumber: 33\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\megap\\\\Desktop\\\\Udemy\\\\Blockchain Development\\\\06-Hardhat_Kickstarter\\\\pages\\\\index.js\",\n                            lineNumber: 53,\n                            columnNumber: 29\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\megap\\\\Desktop\\\\Udemy\\\\Blockchain Development\\\\06-Hardhat_Kickstarter\\\\pages\\\\index.js\",\n                        lineNumber: 52,\n                        columnNumber: 25\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Card.Group, {\n                        items: items\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\megap\\\\Desktop\\\\Udemy\\\\Blockchain Development\\\\06-Hardhat_Kickstarter\\\\pages\\\\index.js\",\n                        lineNumber: 64,\n                        columnNumber: 25\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\megap\\\\Desktop\\\\Udemy\\\\Blockchain Development\\\\06-Hardhat_Kickstarter\\\\pages\\\\index.js\",\n                lineNumber: 49,\n                columnNumber: 21\n            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\megap\\\\Desktop\\\\Udemy\\\\Blockchain Development\\\\06-Hardhat_Kickstarter\\\\pages\\\\index.js\",\n                lineNumber: 66,\n                columnNumber: 23\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    justifyContent: \"center\",\n                    alignItems: \"center\",\n                    height: \"100vh\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_8__.ConnectButton, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\megap\\\\Desktop\\\\Udemy\\\\Blockchain Development\\\\06-Hardhat_Kickstarter\\\\pages\\\\index.js\",\n                    lineNumber: 77,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\megap\\\\Desktop\\\\Udemy\\\\Blockchain Development\\\\06-Hardhat_Kickstarter\\\\pages\\\\index.js\",\n                lineNumber: 69,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\megap\\\\Desktop\\\\Udemy\\\\Blockchain Development\\\\06-Hardhat_Kickstarter\\\\pages\\\\index.js\",\n        lineNumber: 46,\n        columnNumber: 9\n    }, _this);\n}, \"qvLq4kzENZn3NPrGe1IVGA708nM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n}));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFFZjs7Ozs7O2FBQ0osQ0FDUjtDQUNMOztRQXhFa0JOLGtEQUFTOztJQXdFMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBnZXRGYWN0b3J5U2lnbmVyIH0gZnJvbSAnLi4vZXRoZXJldW0vZmFjdG9yeSc7XHJcbmltcG9ydCB7IENhcmQsIEJ1dHRvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IEJsb2NrY2hhaW5Db250ZXh0IGZyb20gJy4uL3N0b3JlL2Jsb2NrY2hhaW4tY29udGV4dCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IENvbm5lY3RCdXR0b24gfSBmcm9tICdAcmFpbmJvdy1tZS9yYWluYm93a2l0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgW2NhbXBhaWducywgc2V0Q2FtcGFpZ25zXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IGJsb2NrY2hhaW5Db250ZXh0ID0gdXNlQ29udGV4dChCbG9ja2NoYWluQ29udGV4dCk7XHJcbiAgICBjb25zdCBwcm92aWRlciA9IGJsb2NrY2hhaW5Db250ZXh0LnByb3ZpZGVyO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Ygd2luZG93LmV0aGVyZXVtICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmYWN0b3J5V2l0aFNpZ25lciA9IHByb3ZpZGVyO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZhY3RvcnlXaXRoU2lnbmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVwbG95ZWRDYW1wYWlnbnMgPSBhd2FpdCBmYWN0b3J5V2l0aFNpZ25lci5nZXREZXBsb3llZENhbXBhaWducygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldENhbXBhaWducyhkZXBsb3llZENhbXBhaWducyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZmV0Y2hEYXRhKCk7XHJcbiAgICB9LCBbcHJvdmlkZXIsIGNhbXBhaWduc10pO1xyXG5cclxuICAgIGNvbnN0IGl0ZW1zID0gY2FtcGFpZ25zLm1hcChhZGRyZXNzID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBoZWFkZXI6IGFkZHJlc3MsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAoXHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2NhbXBhaWducy8ke2FkZHJlc3N9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+VmlldyBDYW1wYWlnbjwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgZmx1aWQ6IHRydWVcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gc3VibWl0SGFuZGxlcihldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy9jYW1wYWlnbnMvbmV3Jyk7XHJcblxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBibG9ja2NoYWluQ29udGV4dC5pc0xvYWRlZCA/XHJcbiAgICAgICAgICAgICAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+T3BlbiBDYW1wYWlnbnM8L2gzPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2NhbXBhaWducy9uZXcnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdGVkPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiQ3JlYXRlIENhbXBhaWduXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImFkZCBjaXJjbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3N1Ym1pdEhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuR3JvdXAgaXRlbXM9e2l0ZW1zfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgOiA8cD5Mb2FkaW5nLi4uPC9wPlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPENvbm5lY3RCdXR0b24gLz5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvbnRleHQiLCJGcmFnbWVudCIsInVzZVJvdXRlciIsImdldEZhY3RvcnlTaWduZXIiLCJDYXJkIiwiQnV0dG9uIiwiQmxvY2tjaGFpbkNvbnRleHQiLCJMaW5rIiwiQ29ubmVjdEJ1dHRvbiIsInN1Ym1pdEhhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwicm91dGVyIiwicHVzaCIsImNhbXBhaWducyIsInNldENhbXBhaWducyIsImJsb2NrY2hhaW5Db250ZXh0IiwicHJvdmlkZXIiLCJmZXRjaERhdGEiLCJmYWN0b3J5V2l0aFNpZ25lciIsImRlcGxveWVkQ2FtcGFpZ25zIiwid2luZG93IiwiZXRoZXJldW0iLCJnZXREZXBsb3llZENhbXBhaWducyIsIml0ZW1zIiwibWFwIiwiYWRkcmVzcyIsImhlYWRlciIsImRlc2NyaXB0aW9uIiwiaHJlZiIsImEiLCJmbHVpZCIsImRpdiIsImlzTG9hZGVkIiwiaDMiLCJmbG9hdGVkIiwiY29udGVudCIsImljb24iLCJwcmltYXJ5Iiwib25DbGljayIsIkdyb3VwIiwicCIsInN0eWxlIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});