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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_megap_Desktop_Udemy_Blockchain_Development_06_Hardhat_Kickstarter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_megap_Desktop_Udemy_Blockchain_Development_06_Hardhat_Kickstarter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_megap_Desktop_Udemy_Blockchain_Development_06_Hardhat_Kickstarter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _store_blockchain_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/blockchain-context */ \"./store/blockchain-context.js\");\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ethereum/factory */ \"./ethereum/factory.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar CampaignShow = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}), summary = ref[0], setSummary = ref[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var address = router.query.address;\n    var blockchainContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_store_blockchain_context__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n    var provider = blockchainContext.provider;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        _asyncToGenerator(C_Users_megap_Desktop_Udemy_Blockchain_Development_06_Hardhat_Kickstarter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var contract, contractSummary;\n            return C_Users_megap_Desktop_Udemy_Blockchain_Development_06_Hardhat_Kickstarter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_ethereum_factory__WEBPACK_IMPORTED_MODULE_5__.getContractByAddress)(address);\n                    case 2:\n                        contract = _ctx.sent;\n                        _ctx.prev = 3;\n                        _ctx.next = 6;\n                        return contract.getSummary();\n                    case 6:\n                        contractSummary = _ctx.sent;\n                        setSummary({\n                            minimumContribution: contractSummary[0].toNumber(),\n                            balance: contractSummary[1].toNumber(),\n                            requestCount: contractSummary[2].toNumber(),\n                            approversCount: contractSummary[3].toNumber(),\n                            manager: contractSummary[4]\n                        });\n                        _ctx.next = 13;\n                        break;\n                    case 10:\n                        _ctx.prev = 10;\n                        _ctx.t0 = _ctx[\"catch\"](3);\n                        console.log(\"Loading contract...\");\n                    case 13:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    3,\n                    10\n                ]\n            ]);\n        }))();\n    }, [\n        provider\n    ]);\n    var items = [\n        {\n            header: summary.manager,\n            meta: \"Address of Manager\",\n            description: \"The manager created this campaign and can create requests to withdraw money\",\n            style: {\n                overflowWrap: \"break-word\"\n            }\n        },\n        {\n            header: summary.minimumContribution,\n            meta: \"Minimum Contribution (wei)\",\n            description: \"You must contribute at least this much wei to become an approver.\"\n        },\n        {\n            header: summary.requestCount,\n            meta: \"Number of Requests\",\n            description: \"A request tries to withdraw money from the contract. Requests must be approved by approvers.\"\n        },\n        {\n            header: summary.approversCount,\n            meta: \"Number of Approvers\",\n            description: \"Number of people who have already donated to this campaign.\"\n        },\n        {\n            header: balance,\n            meta: \"Campaign Balance (ether)\",\n            description: \"The balance is how much money this campaign has left to spend.\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                children: \"Campaign show\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\megap\\\\Desktop\\\\Udemy\\\\Blockchain Development\\\\06-Hardhat_Kickstarter\\\\pages\\\\campaigns\\\\[address].js\",\n                lineNumber: 66,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Card.Group, {\n                items: items\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\megap\\\\Desktop\\\\Udemy\\\\Blockchain Development\\\\06-Hardhat_Kickstarter\\\\pages\\\\campaigns\\\\[address].js\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\megap\\\\Desktop\\\\Udemy\\\\Blockchain Development\\\\06-Hardhat_Kickstarter\\\\pages\\\\campaigns\\\\[address].js\",\n        lineNumber: 65,\n        columnNumber: 9\n    }, _this);\n};\n_s(CampaignShow, \"y+YQcEwCIlo50RFSl1lciIcswhc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = CampaignShow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CampaignShow);\nvar _c;\n$RefreshReg$(_c, \"CampaignShow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c10uanM/OGRhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IENhcmQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCBCbG9ja2NoYWluQ29udGV4dCBmcm9tICcuLi8uLi9zdG9yZS9ibG9ja2NoYWluLWNvbnRleHQnO1xyXG5pbXBvcnQgeyBnZXRDb250cmFjdEJ5QWRkcmVzcyB9IGZyb20gJy4uLy4uL2V0aGVyZXVtL2ZhY3RvcnknO1xyXG5cclxuY29uc3QgQ2FtcGFpZ25TaG93ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3N1bW1hcnksIHNldFN1bW1hcnldID0gdXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IHsgYWRkcmVzcyB9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgICBjb25zdCBibG9ja2NoYWluQ29udGV4dCA9IHVzZUNvbnRleHQoQmxvY2tjaGFpbkNvbnRleHQpO1xyXG4gICAgY29uc3QgcHJvdmlkZXIgPSBibG9ja2NoYWluQ29udGV4dC5wcm92aWRlcjtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRyYWN0ID0gYXdhaXQgZ2V0Q29udHJhY3RCeUFkZHJlc3MoYWRkcmVzcyk7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb250cmFjdFN1bW1hcnkgPSBhd2FpdCBjb250cmFjdC5nZXRTdW1tYXJ5KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0U3VtbWFyeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluaW11bUNvbnRyaWJ1dGlvbjogKGNvbnRyYWN0U3VtbWFyeVswXSkudG9OdW1iZXIoKSxcclxuICAgICAgICAgICAgICAgICAgICBiYWxhbmNlOiAoY29udHJhY3RTdW1tYXJ5WzFdKS50b051bWJlcigpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RDb3VudDogKGNvbnRyYWN0U3VtbWFyeVsyXSkudG9OdW1iZXIoKSxcclxuICAgICAgICAgICAgICAgICAgICBhcHByb3ZlcnNDb3VudDogKGNvbnRyYWN0U3VtbWFyeVszXSkudG9OdW1iZXIoKSxcclxuICAgICAgICAgICAgICAgICAgICBtYW5hZ2VyOiAoY29udHJhY3RTdW1tYXJ5WzRdKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTG9hZGluZyBjb250cmFjdC4uLicpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pKClcclxuICAgIH0sIFtwcm92aWRlcl0pO1xyXG5cclxuICAgIGNvbnN0IGl0ZW1zID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyOiBzdW1tYXJ5Lm1hbmFnZXIsXHJcbiAgICAgICAgICAgIG1ldGE6ICdBZGRyZXNzIG9mIE1hbmFnZXInLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgICAgICAgICdUaGUgbWFuYWdlciBjcmVhdGVkIHRoaXMgY2FtcGFpZ24gYW5kIGNhbiBjcmVhdGUgcmVxdWVzdHMgdG8gd2l0aGRyYXcgbW9uZXknLFxyXG4gICAgICAgICAgICBzdHlsZTogeyBvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJyB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcjogc3VtbWFyeS5taW5pbXVtQ29udHJpYnV0aW9uLFxyXG4gICAgICAgICAgICBtZXRhOiAnTWluaW11bSBDb250cmlidXRpb24gKHdlaSknLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1lvdSBtdXN0IGNvbnRyaWJ1dGUgYXQgbGVhc3QgdGhpcyBtdWNoIHdlaSB0byBiZWNvbWUgYW4gYXBwcm92ZXIuJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXI6IHN1bW1hcnkucmVxdWVzdENvdW50LFxyXG4gICAgICAgICAgICBtZXRhOiAnTnVtYmVyIG9mIFJlcXVlc3RzJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdBIHJlcXVlc3QgdHJpZXMgdG8gd2l0aGRyYXcgbW9uZXkgZnJvbSB0aGUgY29udHJhY3QuIFJlcXVlc3RzIG11c3QgYmUgYXBwcm92ZWQgYnkgYXBwcm92ZXJzLidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyOiBzdW1tYXJ5LmFwcHJvdmVyc0NvdW50LFxyXG4gICAgICAgICAgICBtZXRhOiAnTnVtYmVyIG9mIEFwcHJvdmVycycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTnVtYmVyIG9mIHBlb3BsZSB3aG8gaGF2ZSBhbHJlYWR5IGRvbmF0ZWQgdG8gdGhpcyBjYW1wYWlnbi4nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcjogYmFsYW5jZSxcclxuICAgICAgICAgICAgbWV0YTogJ0NhbXBhaWduIEJhbGFuY2UgKGV0aGVyKScsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIGJhbGFuY2UgaXMgaG93IG11Y2ggbW9uZXkgdGhpcyBjYW1wYWlnbiBoYXMgbGVmdCB0byBzcGVuZC4nXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMj5DYW1wYWlnbiBzaG93PC9oMj5cclxuICAgICAgICAgICAgPENhcmQuR3JvdXAgaXRlbXM9e2l0ZW1zfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhbXBhaWduU2hvdzsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvbnRleHQiLCJ1c2VSb3V0ZXIiLCJDYXJkIiwiQmxvY2tjaGFpbkNvbnRleHQiLCJnZXRDb250cmFjdEJ5QWRkcmVzcyIsIkNhbXBhaWduU2hvdyIsInN1bW1hcnkiLCJzZXRTdW1tYXJ5Iiwicm91dGVyIiwiYWRkcmVzcyIsInF1ZXJ5IiwiYmxvY2tjaGFpbkNvbnRleHQiLCJwcm92aWRlciIsImNvbnRyYWN0IiwiY29udHJhY3RTdW1tYXJ5IiwiZ2V0U3VtbWFyeSIsIm1pbmltdW1Db250cmlidXRpb24iLCJ0b051bWJlciIsImJhbGFuY2UiLCJyZXF1ZXN0Q291bnQiLCJhcHByb3ZlcnNDb3VudCIsIm1hbmFnZXIiLCJjb25zb2xlIiwibG9nIiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsImRpdiIsImgyIiwiR3JvdXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/campaigns/[address].js\n");

/***/ })

});