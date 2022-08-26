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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_megap_Desktop_Udemy_Blockchain_Development_06_Hardhat_Kickstarter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_megap_Desktop_Udemy_Blockchain_Development_06_Hardhat_Kickstarter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_megap_Desktop_Udemy_Blockchain_Development_06_Hardhat_Kickstarter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _store_blockchain_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/blockchain-context */ \"./store/blockchain-context.js\");\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var _components_ContributeForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ContributeForm */ \"./components/ContributeForm.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar CampaignShow = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}), summary = ref[0], setSummary = ref[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var address = router.query.address;\n    var blockchainContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_store_blockchain_context__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n    var provider = blockchainContext.provider;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        _asyncToGenerator(C_Users_megap_Desktop_Udemy_Blockchain_Development_06_Hardhat_Kickstarter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var contract, contractSummary;\n            return C_Users_megap_Desktop_Udemy_Blockchain_Development_06_Hardhat_Kickstarter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_ethereum_factory__WEBPACK_IMPORTED_MODULE_5__.getContractByAddress)(address);\n                    case 2:\n                        contract = _ctx.sent;\n                        _ctx.prev = 3;\n                        _ctx.next = 6;\n                        return contract.getSummary();\n                    case 6:\n                        contractSummary = _ctx.sent;\n                        setSummary({\n                            minimumContribution: contractSummary[0].toNumber(),\n                            balance: contractSummary[1].toString(),\n                            requestCount: contractSummary[2].toNumber(),\n                            approversCount: contractSummary[3].toNumber(),\n                            manager: contractSummary[4]\n                        });\n                        _ctx.next = 14;\n                        break;\n                    case 10:\n                        _ctx.prev = 10;\n                        _ctx.t0 = _ctx[\"catch\"](3);\n                        console.log(\"Loading contract...\");\n                        console.log(_ctx.t0);\n                    case 14:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    3,\n                    10\n                ]\n            ]);\n        }))();\n    }, [\n        provider\n    ]);\n    var items = [\n        {\n            header: summary.manager,\n            meta: \"Address of Manager\",\n            description: \"The manager created this campaign and can create requests to withdraw money\",\n            style: {\n                overflowWrap: \"break-word\"\n            }\n        },\n        {\n            header: summary.minimumContribution,\n            meta: \"Minimum Contribution (wei)\",\n            description: \"You must contribute at least this much wei to become an approver.\"\n        },\n        {\n            header: summary.requestCount,\n            meta: \"Number of Requests\",\n            description: \"A request tries to withdraw money from the contract. Requests must be approved by approvers.\"\n        },\n        {\n            header: summary.approversCount,\n            meta: \"Number of Approvers\",\n            description: \"Number of people who have already donated to this campaign.\"\n        },\n        {\n            header: summary.balance,\n            meta: \"Campaign Balance (ether)\",\n            description: \"The balance is how much money this campaign has left to spend.\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                children: \"Campaign show\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\megap\\\\Desktop\\\\Udemy\\\\Blockchain Development\\\\06-Hardhat_Kickstarter\\\\pages\\\\campaigns\\\\[address].js\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Grid, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Grid.Column, {\n                        width: 10,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Card.Group, {\n                            items: items\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\megap\\\\Desktop\\\\Udemy\\\\Blockchain Development\\\\06-Hardhat_Kickstarter\\\\pages\\\\campaigns\\\\[address].js\",\n                            lineNumber: 73,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\megap\\\\Desktop\\\\Udemy\\\\Blockchain Development\\\\06-Hardhat_Kickstarter\\\\pages\\\\campaigns\\\\[address].js\",\n                        lineNumber: 72,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Grid.Column, {\n                        width: 6,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_ContributeForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            contractAddress: address\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\megap\\\\Desktop\\\\Udemy\\\\Blockchain Development\\\\06-Hardhat_Kickstarter\\\\pages\\\\campaigns\\\\[address].js\",\n                            lineNumber: 77,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\megap\\\\Desktop\\\\Udemy\\\\Blockchain Development\\\\06-Hardhat_Kickstarter\\\\pages\\\\campaigns\\\\[address].js\",\n                        lineNumber: 76,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\megap\\\\Desktop\\\\Udemy\\\\Blockchain Development\\\\06-Hardhat_Kickstarter\\\\pages\\\\campaigns\\\\[address].js\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\megap\\\\Desktop\\\\Udemy\\\\Blockchain Development\\\\06-Hardhat_Kickstarter\\\\pages\\\\campaigns\\\\[address].js\",\n        lineNumber: 69,\n        columnNumber: 9\n    }, _this);\n};\n_s(CampaignShow, \"y+YQcEwCIlo50RFSl1lciIcswhc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = CampaignShow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CampaignShow);\nvar _c;\n$RefreshReg$(_c, \"CampaignShow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBQ3pCLDBEQUFXO3dCQUFDa0MsS0FBSyxFQUFFLENBQUM7a0NBQ2pCLDRFQUFDOUIsa0VBQWM7NEJBQUNnQyxlQUFlLEVBQUUzQixPQUFPOzs7OztpQ0FBSTs7Ozs7NkJBQ2xDOzs7Ozs7cUJBQ1g7Ozs7OzthQUNMLENBQ1I7Q0FFTDtHQTFFS0osWUFBWTs7UUFFQ1Asa0RBQVM7OztBQUZ0Qk8sS0FBQUEsWUFBWTtBQTRFbEIsK0RBQWVBLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jYW1wYWlnbnMvW2FkZHJlc3NdLmpzPzhkYWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBDYXJkLCBHcmlkIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tICdldGhlcnMnXHJcbmltcG9ydCBCbG9ja2NoYWluQ29udGV4dCBmcm9tICcuLi8uLi9zdG9yZS9ibG9ja2NoYWluLWNvbnRleHQnO1xyXG5pbXBvcnQgeyBnZXRDb250cmFjdEJ5QWRkcmVzcyB9IGZyb20gJy4uLy4uL2V0aGVyZXVtL2ZhY3RvcnknO1xyXG5pbXBvcnQgQ29udHJpYnV0ZUZvcm0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db250cmlidXRlRm9ybSc7XHJcblxyXG5jb25zdCBDYW1wYWlnblNob3cgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbc3VtbWFyeSwgc2V0U3VtbWFyeV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHsgYWRkcmVzcyB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgY29uc3QgYmxvY2tjaGFpbkNvbnRleHQgPSB1c2VDb250ZXh0KEJsb2NrY2hhaW5Db250ZXh0KTtcclxuICAgIGNvbnN0IHByb3ZpZGVyID0gYmxvY2tjaGFpbkNvbnRleHQucHJvdmlkZXI7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjb250cmFjdCA9IGF3YWl0IGdldENvbnRyYWN0QnlBZGRyZXNzKGFkZHJlc3MpO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29udHJhY3RTdW1tYXJ5ID0gYXdhaXQgY29udHJhY3QuZ2V0U3VtbWFyeSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFN1bW1hcnkoe1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbmltdW1Db250cmlidXRpb246IChjb250cmFjdFN1bW1hcnlbMF0pLnRvTnVtYmVyKCksXHJcbiAgICAgICAgICAgICAgICAgICAgYmFsYW5jZTogKGNvbnRyYWN0U3VtbWFyeVsxXSkudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0Q291bnQ6IChjb250cmFjdFN1bW1hcnlbMl0pLnRvTnVtYmVyKCksXHJcbiAgICAgICAgICAgICAgICAgICAgYXBwcm92ZXJzQ291bnQ6IChjb250cmFjdFN1bW1hcnlbM10pLnRvTnVtYmVyKCksXHJcbiAgICAgICAgICAgICAgICAgICAgbWFuYWdlcjogKGNvbnRyYWN0U3VtbWFyeVs0XSlcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0xvYWRpbmcgY29udHJhY3QuLi4nKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSkoKVxyXG4gICAgfSwgW3Byb3ZpZGVyXSk7XHJcblxyXG4gICAgY29uc3QgaXRlbXMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXI6IHN1bW1hcnkubWFuYWdlcixcclxuICAgICAgICAgICAgbWV0YTogJ0FkZHJlc3Mgb2YgTWFuYWdlcicsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgICAgICAgJ1RoZSBtYW5hZ2VyIGNyZWF0ZWQgdGhpcyBjYW1wYWlnbiBhbmQgY2FuIGNyZWF0ZSByZXF1ZXN0cyB0byB3aXRoZHJhdyBtb25leScsXHJcbiAgICAgICAgICAgIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyOiBzdW1tYXJ5Lm1pbmltdW1Db250cmlidXRpb24sXHJcbiAgICAgICAgICAgIG1ldGE6ICdNaW5pbXVtIENvbnRyaWJ1dGlvbiAod2VpKScsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnWW91IG11c3QgY29udHJpYnV0ZSBhdCBsZWFzdCB0aGlzIG11Y2ggd2VpIHRvIGJlY29tZSBhbiBhcHByb3Zlci4nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcjogc3VtbWFyeS5yZXF1ZXN0Q291bnQsXHJcbiAgICAgICAgICAgIG1ldGE6ICdOdW1iZXIgb2YgUmVxdWVzdHMnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0EgcmVxdWVzdCB0cmllcyB0byB3aXRoZHJhdyBtb25leSBmcm9tIHRoZSBjb250cmFjdC4gUmVxdWVzdHMgbXVzdCBiZSBhcHByb3ZlZCBieSBhcHByb3ZlcnMuJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXI6IHN1bW1hcnkuYXBwcm92ZXJzQ291bnQsXHJcbiAgICAgICAgICAgIG1ldGE6ICdOdW1iZXIgb2YgQXBwcm92ZXJzJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdOdW1iZXIgb2YgcGVvcGxlIHdobyBoYXZlIGFscmVhZHkgZG9uYXRlZCB0byB0aGlzIGNhbXBhaWduLidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsvL01ha2Ugc3VyZSBpdCdzIGluIFdlaVxyXG4gICAgICAgICAgICBoZWFkZXI6IHN1bW1hcnkuYmFsYW5jZSxcclxuICAgICAgICAgICAgbWV0YTogJ0NhbXBhaWduIEJhbGFuY2UgKGV0aGVyKScsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIGJhbGFuY2UgaXMgaG93IG11Y2ggbW9uZXkgdGhpcyBjYW1wYWlnbiBoYXMgbGVmdCB0byBzcGVuZC4nXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMz5DYW1wYWlnbiBzaG93PC9oMz5cclxuICAgICAgICAgICAgPEdyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezEwfT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Hcm91cCBpdGVtcz17aXRlbXN9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG5cclxuICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbnRyaWJ1dGVGb3JtIGNvbnRyYWN0QWRkcmVzcz17YWRkcmVzc30gLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYW1wYWlnblNob3c7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDb250ZXh0IiwidXNlUm91dGVyIiwiQ2FyZCIsIkdyaWQiLCJldGhlcnMiLCJCbG9ja2NoYWluQ29udGV4dCIsImdldENvbnRyYWN0QnlBZGRyZXNzIiwiQ29udHJpYnV0ZUZvcm0iLCJDYW1wYWlnblNob3ciLCJzdW1tYXJ5Iiwic2V0U3VtbWFyeSIsInJvdXRlciIsImFkZHJlc3MiLCJxdWVyeSIsImJsb2NrY2hhaW5Db250ZXh0IiwicHJvdmlkZXIiLCJjb250cmFjdCIsImNvbnRyYWN0U3VtbWFyeSIsImdldFN1bW1hcnkiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwidG9OdW1iZXIiLCJiYWxhbmNlIiwidG9TdHJpbmciLCJyZXF1ZXN0Q291bnQiLCJhcHByb3ZlcnNDb3VudCIsIm1hbmFnZXIiLCJjb25zb2xlIiwibG9nIiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsImRpdiIsImgzIiwiQ29sdW1uIiwid2lkdGgiLCJHcm91cCIsImNvbnRyYWN0QWRkcmVzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/campaigns/[address].js\n");

/***/ })

});