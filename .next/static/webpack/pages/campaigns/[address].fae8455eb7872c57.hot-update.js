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

/***/ "./pages/campaigns/[address].js":
/*!**************************************!*\
  !*** ./pages/campaigns/[address].js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_megap_Desktop_Udemy_Blockchain_Development_06_Hardhat_Kickstarter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_megap_Desktop_Udemy_Blockchain_Development_06_Hardhat_Kickstarter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_megap_Desktop_Udemy_Blockchain_Development_06_Hardhat_Kickstarter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_blockchain_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/blockchain-context */ \"./store/blockchain-context.js\");\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ethereum/factory */ \"./ethereum/factory.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar CampaignShow = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), summary = ref[0], setSummary = ref[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var address = router.query.address;\n    //const blockchainContext = useContext(BlockchainContext);\n    //const provider = blockchainContext.provider;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        _asyncToGenerator(C_Users_megap_Desktop_Udemy_Blockchain_Development_06_Hardhat_Kickstarter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var contract, contructSummary;\n            return C_Users_megap_Desktop_Udemy_Blockchain_Development_06_Hardhat_Kickstarter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_ethereum_factory__WEBPACK_IMPORTED_MODULE_5__.getContractByAddress)(address);\n                    case 2:\n                        contract = _ctx.sent;\n                        _ctx.next = 5;\n                        return contract.getSummary();\n                    case 5:\n                        contructSummary = _ctx.sent;\n                        setSummary({\n                            minimumContribution: contructSummary[0].toNumber()\n                        });\n                        console.log(contructSummary[0].toNumber());\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }))();\n    }, [\n        _store_blockchain_context__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        children: address\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\megap\\\\Desktop\\\\Udemy\\\\Blockchain Development\\\\06-Hardhat_Kickstarter\\\\pages\\\\campaigns\\\\[address].js\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, _this);\n};\n_s(CampaignShow, \"UokeoOKkjxzbKI00ezDLa8Engzw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = CampaignShow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CampaignShow);\nvar _c;\n$RefreshReg$(_c, \"CampaignShow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvW2FkZHJlc3NdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStEO0FBQ3hCO0FBQ3dCO0FBQ0Q7O0FBRTlELElBQU1PLFlBQVksR0FBRyxXQUFNOztJQUN2QixJQUE4Qk4sR0FBVSxHQUFWQSwrQ0FBUSxFQUFFLEVBTjVDLE9BTWtCLEdBQWdCQSxHQUFVLEdBQTFCLEVBTmxCLFVBTThCLEdBQUlBLEdBQVUsR0FBZDtJQUMxQixJQUFNUyxNQUFNLEdBQUdOLHNEQUFTLEVBQUU7SUFDMUIsSUFBTSxPQUFTLEdBQUtNLE1BQU0sQ0FBQ0UsS0FBSyxDQUF4QkQsT0FBTztJQUNmLDBEQUEwRDtJQUMxRCw4Q0FBOEM7SUFFOUNULGdEQUFTLENBQUMsV0FBTTtRQUNYLDBOQUFZO2dCQUNIVyxRQUFRLEVBQ1JDLGVBQWU7Ozs7OytCQURFUix1RUFBb0IsQ0FBQ0ssT0FBTyxDQUFDOzt3QkFBOUNFLFFBQVEsWUFBc0M7OytCQUN0QkEsUUFBUSxDQUFDRSxVQUFVLEVBQUU7O3dCQUE3Q0QsZUFBZSxZQUE4Qjt3QkFDbkRMLFVBQVUsQ0FBQzs0QkFDUE8sbUJBQW1CLEVBQUUsZUFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBRUMsUUFBUSxFQUFFO3lCQUd2RCxDQUFDLENBQUM7d0JBQ0hDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGVBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUVGLFFBQVEsRUFBRSxDQUFDLENBQUM7Ozs7OztTQUNoRCxJQUFHO0tBQ1AsRUFBRTtRQUFDWixpRUFBaUI7S0FBQyxDQUFDLENBQUM7SUFJeEIscUJBRUksOERBQUNlLEdBQUM7a0JBQUVULE9BQU87Ozs7O2FBQUssQ0FDbEI7Q0FFTDtHQTNCS0osWUFBWTs7UUFFQ0gsa0RBQVM7OztBQUZ0QkcsS0FBQUEsWUFBWTtBQTZCbEIsK0RBQWVBLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jYW1wYWlnbnMvW2FkZHJlc3NdLmpzPzhkYWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgQmxvY2tjaGFpbkNvbnRleHQgZnJvbSAnLi4vLi4vc3RvcmUvYmxvY2tjaGFpbi1jb250ZXh0JztcclxuaW1wb3J0IHsgZ2V0Q29udHJhY3RCeUFkZHJlc3MgfSBmcm9tICcuLi8uLi9ldGhlcmV1bS9mYWN0b3J5JztcclxuXHJcbmNvbnN0IENhbXBhaWduU2hvdyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtzdW1tYXJ5LCBzZXRTdW1tYXJ5XSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgeyBhZGRyZXNzIH0gPSByb3V0ZXIucXVlcnlcclxuICAgIC8vY29uc3QgYmxvY2tjaGFpbkNvbnRleHQgPSB1c2VDb250ZXh0KEJsb2NrY2hhaW5Db250ZXh0KTtcclxuICAgIC8vY29uc3QgcHJvdmlkZXIgPSBibG9ja2NoYWluQ29udGV4dC5wcm92aWRlcjtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRyYWN0ID0gYXdhaXQgZ2V0Q29udHJhY3RCeUFkZHJlc3MoYWRkcmVzcyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRydWN0U3VtbWFyeSA9IGF3YWl0IGNvbnRyYWN0LmdldFN1bW1hcnkoKTtcclxuICAgICAgICAgICAgc2V0U3VtbWFyeSh7XHJcbiAgICAgICAgICAgICAgICBtaW5pbXVtQ29udHJpYnV0aW9uOiAoY29udHJ1Y3RTdW1tYXJ5WzBdKS50b051bWJlcigpXHJcblxyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKChjb250cnVjdFN1bW1hcnlbMF0pLnRvTnVtYmVyKCkpO1xyXG4gICAgICAgIH0pKClcclxuICAgIH0sIFtCbG9ja2NoYWluQ29udGV4dF0pO1xyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPHA+e2FkZHJlc3N9PC9wPlxyXG4gICAgKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhbXBhaWduU2hvdzsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvbnRleHQiLCJ1c2VSb3V0ZXIiLCJCbG9ja2NoYWluQ29udGV4dCIsImdldENvbnRyYWN0QnlBZGRyZXNzIiwiQ2FtcGFpZ25TaG93Iiwic3VtbWFyeSIsInNldFN1bW1hcnkiLCJyb3V0ZXIiLCJhZGRyZXNzIiwicXVlcnkiLCJjb250cmFjdCIsImNvbnRydWN0U3VtbWFyeSIsImdldFN1bW1hcnkiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwidG9OdW1iZXIiLCJjb25zb2xlIiwibG9nIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/campaigns/[address].js\n");

/***/ })

});