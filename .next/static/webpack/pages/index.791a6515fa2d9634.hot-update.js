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

/***/ "./ethereum/walletProvider.js":
/*!************************************!*\
  !*** ./ethereum/walletProvider.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getInfuraSigner\": function() { return /* binding */ getInfuraSigner; },\n/* harmony export */   \"getMetamaskSigner\": function() { return /* binding */ getMetamaskSigner; },\n/* harmony export */   \"getSigner\": function() { return /* binding */ getSigner; }\n/* harmony export */ });\n/* harmony import */ var C_Users_megap_Desktop_Udemy_Blockchain_Development_06_Hardhat_Kickstarter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_megap_Desktop_Udemy_Blockchain_Development_06_Hardhat_Kickstarter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_megap_Desktop_Udemy_Blockchain_Development_06_Hardhat_Kickstarter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/process/browser.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\nvar getSigner = function() {\n    var _ref = _asyncToGenerator(C_Users_megap_Desktop_Udemy_Blockchain_Development_06_Hardhat_Kickstarter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var provider, provider1, wallet, signer;\n        return C_Users_megap_Desktop_Udemy_Blockchain_Development_06_Hardhat_Kickstarter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.prev = 0;\n                    provider = new ethers__WEBPACK_IMPORTED_MODULE_1__.ethers.providers.Web3Provider(ethereum, \"any\");\n                    _ctx.next = 4;\n                    return provider.send(\"eth_requestAccounts\", []);\n                case 4:\n                    return _ctx.abrupt(\"return\", provider.getSigner());\n                case 7:\n                    _ctx.prev = 7;\n                    _ctx.t0 = _ctx[\"catch\"](0);\n                    console.log(\"Error: \", _ctx.t0.message);\n                    _ctx.prev = 10;\n                    provider1 = new ethers__WEBPACK_IMPORTED_MODULE_1__.ethers.providers.JsonRpcProvider(process.env.INFURA_URL);\n                    wallet = new ethers__WEBPACK_IMPORTED_MODULE_1__.ethers.Wallet(process.env.PRIVATE_KEY, provider1);\n                    signer = wallet.connect(provider1);\n                    return _ctx.abrupt(\"return\", signer);\n                case 17:\n                    _ctx.prev = 17;\n                    _ctx.t1 = _ctx[\"catch\"](10);\n                    console.log(\"Error connecting to Infura API:\\n\", _ctx.t1);\n                    return _ctx.abrupt(\"return\", _ctx.t1);\n                case 21:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                0,\n                7\n            ],\n            [\n                10,\n                17\n            ]\n        ]);\n    }));\n    return function getSigner() {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar getMetamaskSigner = function() {\n    var _ref = _asyncToGenerator(C_Users_megap_Desktop_Udemy_Blockchain_Development_06_Hardhat_Kickstarter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var provider;\n        return C_Users_megap_Desktop_Udemy_Blockchain_Development_06_Hardhat_Kickstarter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.prev = 0;\n                    provider = new ethers__WEBPACK_IMPORTED_MODULE_1__.ethers.providers.Web3Provider(ethereum, \"any\");\n                    _ctx.next = 4;\n                    return provider.send(\"eth_requestAccounts\", []);\n                case 4:\n                    return _ctx.abrupt(\"return\", provider.getSigner());\n                case 7:\n                    _ctx.prev = 7;\n                    _ctx.t0 = _ctx[\"catch\"](0);\n                    console.log(\"Error connecting to Metamask:\\n\", _ctx.t0.message);\n                case 10:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                0,\n                7\n            ]\n        ]);\n    }));\n    return function getMetamaskSigner() {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar getInfuraSigner = function() {\n    var _ref = _asyncToGenerator(C_Users_megap_Desktop_Udemy_Blockchain_Development_06_Hardhat_Kickstarter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var provider, wallet, signer;\n        return C_Users_megap_Desktop_Udemy_Blockchain_Development_06_Hardhat_Kickstarter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.prev = 0;\n                    provider = new ethers__WEBPACK_IMPORTED_MODULE_1__.ethers.providers.JsonRpcProvider(\"https://rinkeby.infura.io/v3/f826a5806c9c424d982e0511e7171f50\");\n                    wallet = new ethers__WEBPACK_IMPORTED_MODULE_1__.ethers.Wallet(\"ba36f7ba42feab2eefb64702d1cbb5094bc6d895c0466db9976e14d221513595\", provider);\n                    signer = wallet.connect(provider);\n                    return _ctx.abrupt(\"return\", signer);\n                case 7:\n                    _ctx.prev = 7;\n                    _ctx.t0 = _ctx[\"catch\"](0);\n                    console.log(\"Error connecting to Infura API:\\n\", _ctx.t0);\n                    return _ctx.abrupt(\"return\", _ctx.t0);\n                case 11:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                0,\n                7\n            ]\n        ]);\n    }));\n    return function getInfuraSigner() {\n        return _ref.apply(this, arguments);\n    };\n}();\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ldGhlcmV1bS93YWxsZXRQcm92aWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQUV4QixJQUFNQyxTQUFTO2VBQUcsME5BQVk7WUFHdkJDLFFBQVEsRUFPSkEsU0FBUSxFQUNSQyxNQUFNLEVBQ05DLE1BQU07Ozs7O29CQVRWRixRQUFRLEdBQUcsSUFBSUYsaUVBQTZCLENBQUNPLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQzs7MkJBQzlETCxRQUFRLENBQUNNLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxFQUFFLENBQUM7O2lEQUN2Q04sUUFBUSxDQUFDRCxTQUFTLEVBQUU7Ozs7b0JBRzNCUSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxTQUFTLEVBQUVDLFFBQU1DLE9BQU8sQ0FBQyxDQUFDOztvQkFFNUJWLFNBQVEsR0FBRyxJQUFJRixvRUFBZ0MsQ0FBQ2MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFVBQVUsQ0FBQyxDQUFDO29CQUN4RWIsTUFBTSxHQUFHLElBQUlILGlEQUFhLENBQUNjLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxXQUFXLEVBQUVoQixTQUFRLENBQUMsQ0FBQztvQkFDOURFLE1BQU0sR0FBR0QsTUFBTSxDQUFDZ0IsT0FBTyxDQUFDakIsU0FBUSxDQUFDLENBQUM7aURBQ2pDRSxNQUFNOzs7O29CQUdiSyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxtQ0FBbUMsVUFBUSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0tBSW5FO29CQXBCWVQsU0FBUzs7O0dBb0JyQjtBQUVNLElBQU1tQixpQkFBaUI7ZUFBRywwTkFBWTtZQUUvQmxCLFFBQVE7Ozs7O29CQUFSQSxRQUFRLEdBQUcsSUFBSUYsaUVBQTZCLENBQUNPLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQzs7MkJBQzlETCxRQUFRLENBQUNNLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxFQUFFLENBQUM7O2lEQUN2Q04sUUFBUSxDQUFDRCxTQUFTLEVBQUU7Ozs7b0JBRzNCUSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxpQ0FBaUMsRUFBRUMsUUFBTUMsT0FBTyxDQUFDLENBQUM7Ozs7Ozs7Ozs7O0tBRXJFO29CQVRZUSxpQkFBaUI7OztHQVM3QjtBQUVNLElBQU1DLGVBQWU7ZUFBRywwTkFBWTtZQUU3Qm5CLFFBQVEsRUFDUkMsTUFBTSxFQUNOQyxNQUFNOzs7OztvQkFGTkYsUUFBUSxHQUFHLElBQUlGLG9FQUFnQyxDQUFDLCtEQUErRCxDQUFDLENBQUM7b0JBQ2pIRyxNQUFNLEdBQUcsSUFBSUgsaURBQWEsQ0FBQyxrRUFBa0UsRUFBRUUsUUFBUSxDQUFDLENBQUM7b0JBQ3pHRSxNQUFNLEdBQUdELE1BQU0sQ0FBQ2dCLE9BQU8sQ0FBQ2pCLFFBQVEsQ0FBQyxDQUFDO2lEQUNqQ0UsTUFBTTs7OztvQkFHYkssT0FBTyxDQUFDQyxHQUFHLENBQUMsbUNBQW1DLFVBQVEsQ0FBQzs7Ozs7Ozs7Ozs7O0tBRy9EO29CQVhZVyxlQUFlOzs7R0FXM0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZXRoZXJldW0vd2FsbGV0UHJvdmlkZXIuanM/NjI5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBldGhlcnMgfSBmcm9tICdldGhlcnMnXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2lnbmVyID0gYXN5bmMgKCkgPT4ge1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoZXRoZXJldW0sIFwiYW55XCIpO1xyXG4gICAgICAgIGF3YWl0IHByb3ZpZGVyLnNlbmQoXCJldGhfcmVxdWVzdEFjY291bnRzXCIsIFtdKTtcclxuICAgICAgICByZXR1cm4gcHJvdmlkZXIuZ2V0U2lnbmVyKCk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiwgZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5Kc29uUnBjUHJvdmlkZXIocHJvY2Vzcy5lbnYuSU5GVVJBX1VSTCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHdhbGxldCA9IG5ldyBldGhlcnMuV2FsbGV0KHByb2Nlc3MuZW52LlBSSVZBVEVfS0VZLCBwcm92aWRlcik7XHJcbiAgICAgICAgICAgIGNvbnN0IHNpZ25lciA9IHdhbGxldC5jb25uZWN0KHByb3ZpZGVyKTtcclxuICAgICAgICAgICAgcmV0dXJuIHNpZ25lcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBjb25uZWN0aW5nIHRvIEluZnVyYSBBUEk6XFxuJywgZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TWV0YW1hc2tTaWduZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKGV0aGVyZXVtLCBcImFueVwiKTtcclxuICAgICAgICBhd2FpdCBwcm92aWRlci5zZW5kKFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiLCBbXSk7XHJcbiAgICAgICAgcmV0dXJuIHByb3ZpZGVyLmdldFNpZ25lcigpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBjb25uZWN0aW5nIHRvIE1ldGFtYXNrOlxcblwiLCBlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEluZnVyYVNpZ25lciA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5Kc29uUnBjUHJvdmlkZXIoJ2h0dHBzOi8vcmlua2VieS5pbmZ1cmEuaW8vdjMvZjgyNmE1ODA2YzljNDI0ZDk4MmUwNTExZTcxNzFmNTAnKTtcclxuICAgICAgICBjb25zdCB3YWxsZXQgPSBuZXcgZXRoZXJzLldhbGxldCgnYmEzNmY3YmE0MmZlYWIyZWVmYjY0NzAyZDFjYmI1MDk0YmM2ZDg5NWMwNDY2ZGI5OTc2ZTE0ZDIyMTUxMzU5NScsIHByb3ZpZGVyKTtcclxuICAgICAgICBjb25zdCBzaWduZXIgPSB3YWxsZXQuY29ubmVjdChwcm92aWRlcik7XHJcbiAgICAgICAgcmV0dXJuIHNpZ25lcjtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBjb25uZWN0aW5nIHRvIEluZnVyYSBBUEk6XFxuJywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBlcnJvcjtcclxuICAgIH1cclxufVxyXG5cclxuIl0sIm5hbWVzIjpbImV0aGVycyIsImdldFNpZ25lciIsInByb3ZpZGVyIiwid2FsbGV0Iiwic2lnbmVyIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwiZXRoZXJldW0iLCJzZW5kIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwibWVzc2FnZSIsIkpzb25ScGNQcm92aWRlciIsInByb2Nlc3MiLCJlbnYiLCJJTkZVUkFfVVJMIiwiV2FsbGV0IiwiUFJJVkFURV9LRVkiLCJjb25uZWN0IiwiZ2V0TWV0YW1hc2tTaWduZXIiLCJnZXRJbmZ1cmFTaWduZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./ethereum/walletProvider.js\n");

/***/ })

});