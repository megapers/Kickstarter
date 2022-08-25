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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_megap_Desktop_Udemy_Blockchain_Development_06_Hardhat_Kickstarter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_megap_Desktop_Udemy_Blockchain_Development_06_Hardhat_Kickstarter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_megap_Desktop_Udemy_Blockchain_Development_06_Hardhat_Kickstarter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _store_blockchain_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/blockchain-context */ \"./store/blockchain-context.js\");\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ethereum/factory */ \"./ethereum/factory.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar CampaignShow = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}), summary = ref[0], setSummary = ref[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var address = router.query.address;\n    var blockchainContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_store_blockchain_context__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n    var provider = blockchainContext.provider;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        _asyncToGenerator(C_Users_megap_Desktop_Udemy_Blockchain_Development_06_Hardhat_Kickstarter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var contract, contractSummary;\n            return C_Users_megap_Desktop_Udemy_Blockchain_Development_06_Hardhat_Kickstarter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,_ethereum_factory__WEBPACK_IMPORTED_MODULE_5__.getContractByAddress)(address);\n                    case 2:\n                        contract = _ctx.sent;\n                        _ctx.prev = 3;\n                        _ctx.next = 6;\n                        return contract.getSummary();\n                    case 6:\n                        contractSummary = _ctx.sent;\n                        setSummary({\n                            minimumContribution: contractSummary[0].toNumber(),\n                            balance: contractSummary[1].toNumber(),\n                            requestCount: contractSummary[2].toNumber(),\n                            approversCount: contractSummary[3].toNumber(),\n                            manager: contractSummary[4]\n                        });\n                        _ctx.next = 13;\n                        break;\n                    case 10:\n                        _ctx.prev = 10;\n                        _ctx.t0 = _ctx[\"catch\"](3);\n                        console.log(\"Loading contract...\");\n                    case 13:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    3,\n                    10\n                ]\n            ]);\n        }))();\n    }, [\n        provider\n    ]);\n    var items = [\n        {\n            header: summary.manager,\n            meta: \"Address of Manager\",\n            description: \"The manager created this campaign and can create requests to withdraw money\",\n            style: {\n                overflowWrap: \"break-word\"\n            }\n        },\n        {\n            header: summary.minimumContribution,\n            meta: \"Minimum Contribution (wei)\",\n            description: \"You must contribute at least this much wei to become an approver.\"\n        },\n        {\n            header: summary.requestCount,\n            meta: \"Number of Requests\",\n            description: \"A request tries to withdraw money from the contract. Requests must be approved by approvers.\"\n        },\n        {\n            header: summary.approversCount,\n            meta: \"Number of Approvers\",\n            description: \"Number of people who have already donated to this campaign.\"\n        },\n        {\n            header: summary.balance,\n            meta: \"Campaign Balance (ether)\",\n            description: \"The balance is how much money this campaign has left to spend.\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                children: \"Campaign show\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\megap\\\\Desktop\\\\Udemy\\\\Blockchain Development\\\\06-Hardhat_Kickstarter\\\\pages\\\\campaigns\\\\[address].js\",\n                lineNumber: 66,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Card.Group, {\n                items: items\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\megap\\\\Desktop\\\\Udemy\\\\Blockchain Development\\\\06-Hardhat_Kickstarter\\\\pages\\\\campaigns\\\\[address].js\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\megap\\\\Desktop\\\\Udemy\\\\Blockchain Development\\\\06-Hardhat_Kickstarter\\\\pages\\\\campaigns\\\\[address].js\",\n        lineNumber: 65,\n        columnNumber: 9\n    }, _this);\n};\n_s(CampaignShow, \"y+YQcEwCIlo50RFSl1lciIcswhc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = CampaignShow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CampaignShow);\nvar _c;\n$RefreshReg$(_c, \"CampaignShow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWlnbnMvW2FkZHJlc3NdLmpzPzhkYWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgQmxvY2tjaGFpbkNvbnRleHQgZnJvbSAnLi4vLi4vc3RvcmUvYmxvY2tjaGFpbi1jb250ZXh0JztcclxuaW1wb3J0IHsgZ2V0Q29udHJhY3RCeUFkZHJlc3MgfSBmcm9tICcuLi8uLi9ldGhlcmV1bS9mYWN0b3J5JztcclxuXHJcbmNvbnN0IENhbXBhaWduU2hvdyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtzdW1tYXJ5LCBzZXRTdW1tYXJ5XSA9IHVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCB7IGFkZHJlc3MgfSA9IHJvdXRlci5xdWVyeVxyXG4gICAgY29uc3QgYmxvY2tjaGFpbkNvbnRleHQgPSB1c2VDb250ZXh0KEJsb2NrY2hhaW5Db250ZXh0KTtcclxuICAgIGNvbnN0IHByb3ZpZGVyID0gYmxvY2tjaGFpbkNvbnRleHQucHJvdmlkZXI7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjb250cmFjdCA9IGF3YWl0IGdldENvbnRyYWN0QnlBZGRyZXNzKGFkZHJlc3MpO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29udHJhY3RTdW1tYXJ5ID0gYXdhaXQgY29udHJhY3QuZ2V0U3VtbWFyeSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFN1bW1hcnkoe1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbmltdW1Db250cmlidXRpb246IChjb250cmFjdFN1bW1hcnlbMF0pLnRvTnVtYmVyKCksXHJcbiAgICAgICAgICAgICAgICAgICAgYmFsYW5jZTogKGNvbnRyYWN0U3VtbWFyeVsxXSkudG9OdW1iZXIoKSxcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0Q291bnQ6IChjb250cmFjdFN1bW1hcnlbMl0pLnRvTnVtYmVyKCksXHJcbiAgICAgICAgICAgICAgICAgICAgYXBwcm92ZXJzQ291bnQ6IChjb250cmFjdFN1bW1hcnlbM10pLnRvTnVtYmVyKCksXHJcbiAgICAgICAgICAgICAgICAgICAgbWFuYWdlcjogKGNvbnRyYWN0U3VtbWFyeVs0XSlcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0xvYWRpbmcgY29udHJhY3QuLi4nKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KSgpXHJcbiAgICB9LCBbcHJvdmlkZXJdKTtcclxuXHJcbiAgICBjb25zdCBpdGVtcyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcjogc3VtbWFyeS5tYW5hZ2VyLFxyXG4gICAgICAgICAgICBtZXRhOiAnQWRkcmVzcyBvZiBNYW5hZ2VyJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICAgICAgICAnVGhlIG1hbmFnZXIgY3JlYXRlZCB0aGlzIGNhbXBhaWduIGFuZCBjYW4gY3JlYXRlIHJlcXVlc3RzIHRvIHdpdGhkcmF3IG1vbmV5JyxcclxuICAgICAgICAgICAgc3R5bGU6IHsgb3ZlcmZsb3dXcmFwOiAnYnJlYWstd29yZCcgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXI6IHN1bW1hcnkubWluaW11bUNvbnRyaWJ1dGlvbixcclxuICAgICAgICAgICAgbWV0YTogJ01pbmltdW0gQ29udHJpYnV0aW9uICh3ZWkpJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdZb3UgbXVzdCBjb250cmlidXRlIGF0IGxlYXN0IHRoaXMgbXVjaCB3ZWkgdG8gYmVjb21lIGFuIGFwcHJvdmVyLidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaGVhZGVyOiBzdW1tYXJ5LnJlcXVlc3RDb3VudCxcclxuICAgICAgICAgICAgbWV0YTogJ051bWJlciBvZiBSZXF1ZXN0cycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQSByZXF1ZXN0IHRyaWVzIHRvIHdpdGhkcmF3IG1vbmV5IGZyb20gdGhlIGNvbnRyYWN0LiBSZXF1ZXN0cyBtdXN0IGJlIGFwcHJvdmVkIGJ5IGFwcHJvdmVycy4nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcjogc3VtbWFyeS5hcHByb3ZlcnNDb3VudCxcclxuICAgICAgICAgICAgbWV0YTogJ051bWJlciBvZiBBcHByb3ZlcnMnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ051bWJlciBvZiBwZW9wbGUgd2hvIGhhdmUgYWxyZWFkeSBkb25hdGVkIHRvIHRoaXMgY2FtcGFpZ24uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgey8vTWFrZSBzdXJlIGl0J3MgaW4gV2VpXHJcbiAgICAgICAgICAgIGhlYWRlcjogc3VtbWFyeS5iYWxhbmNlLFxyXG4gICAgICAgICAgICBtZXRhOiAnQ2FtcGFpZ24gQmFsYW5jZSAoZXRoZXIpJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgYmFsYW5jZSBpcyBob3cgbXVjaCBtb25leSB0aGlzIGNhbXBhaWduIGhhcyBsZWZ0IHRvIHNwZW5kLidcclxuICAgICAgICB9XHJcbiAgICBdO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgyPkNhbXBhaWduIHNob3c8L2gyPlxyXG4gICAgICAgICAgICA8Q2FyZC5Hcm91cCBpdGVtcz17aXRlbXN9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ25TaG93OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsInVzZVJvdXRlciIsIkNhcmQiLCJCbG9ja2NoYWluQ29udGV4dCIsImdldENvbnRyYWN0QnlBZGRyZXNzIiwiQ2FtcGFpZ25TaG93Iiwic3VtbWFyeSIsInNldFN1bW1hcnkiLCJyb3V0ZXIiLCJhZGRyZXNzIiwicXVlcnkiLCJibG9ja2NoYWluQ29udGV4dCIsInByb3ZpZGVyIiwiY29udHJhY3QiLCJjb250cmFjdFN1bW1hcnkiLCJnZXRTdW1tYXJ5IiwibWluaW11bUNvbnRyaWJ1dGlvbiIsInRvTnVtYmVyIiwiYmFsYW5jZSIsInJlcXVlc3RDb3VudCIsImFwcHJvdmVyc0NvdW50IiwibWFuYWdlciIsImNvbnNvbGUiLCJsb2ciLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwiZGl2IiwiaDIiLCJHcm91cCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/campaigns/[address].js\n");

/***/ })

});