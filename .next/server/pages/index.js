"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./ethereum/factory.js":
/*!*****************************!*\
  !*** ./ethereum/factory.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getFactorySigner\": () => (/* binding */ getFactorySigner)\n/* harmony export */ });\n/* harmony import */ var _walletProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./walletProvider */ \"./ethereum/walletProvider.js\");\n/* harmony import */ var _ContractData_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ContractData.json */ \"./ContractData.json\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst getFactorySigner = async ()=>{\n    const signer = await (0,_walletProvider__WEBPACK_IMPORTED_MODULE_0__.getSigner)();\n    try {\n        const contractWithSigner = new ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.Contract(_ContractData_json__WEBPACK_IMPORTED_MODULE_1__.address, _ContractData_json__WEBPACK_IMPORTED_MODULE_1__.abi, signer);\n        return contractWithSigner;\n    } catch (error) {\n        console.log(\"Contract is not found:\\n\", error);\n        return error;\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ldGhlcmV1bS9mYWN0b3J5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdGO0FBQ2hDO0FBQ2pCO0FBRXhCLE1BQU1LLGdCQUFnQixHQUFHLFVBQVk7SUFDeEMsTUFBTUMsTUFBTSxHQUFHLE1BQU1OLDBEQUFTLEVBQUU7SUFFaEMsSUFBSTtRQUNBLE1BQU1PLGtCQUFrQixHQUFHLElBQUlILG1EQUFlLENBQUNELHVEQUFvQixFQUFFQSxtREFBZ0IsRUFBRUcsTUFBTSxDQUFDO1FBQzlGLE9BQU9DLGtCQUFrQixDQUFDO0tBQzdCLENBQ0QsT0FBT0ksS0FBSyxFQUFFO1FBQ1ZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDBCQUEwQixFQUFFRixLQUFLLENBQUMsQ0FBQztRQUMvQyxPQUFPQSxLQUFLLENBQUM7S0FDaEI7Q0FFSiIsInNvdXJjZXMiOlsid2VicGFjazovLzA2LWhhcmRoYXRfa2lja3N0YXJ0ZXIvLi9ldGhlcmV1bS9mYWN0b3J5LmpzP2QyNDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U2lnbmVyLCBnZXRNZXRhbWFza1NpZ25lciwgZ2V0SW5mdXJhU2lnbmVyfSBmcm9tICcuL3dhbGxldFByb3ZpZGVyJztcclxuaW1wb3J0IENvbnRyYWN0RGF0YSBmcm9tICcuLi9Db250cmFjdERhdGEuanNvbic7XHJcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycydcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRGYWN0b3J5U2lnbmVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3Qgc2lnbmVyID0gYXdhaXQgZ2V0U2lnbmVyKCk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb250cmFjdFdpdGhTaWduZXIgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KENvbnRyYWN0RGF0YS5hZGRyZXNzLCBDb250cmFjdERhdGEuYWJpLCBzaWduZXIpO1xyXG4gICAgICAgIHJldHVybiBjb250cmFjdFdpdGhTaWduZXI7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnQ29udHJhY3QgaXMgbm90IGZvdW5kOlxcbicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4iXSwibmFtZXMiOlsiZ2V0U2lnbmVyIiwiZ2V0TWV0YW1hc2tTaWduZXIiLCJnZXRJbmZ1cmFTaWduZXIiLCJDb250cmFjdERhdGEiLCJldGhlcnMiLCJnZXRGYWN0b3J5U2lnbmVyIiwic2lnbmVyIiwiY29udHJhY3RXaXRoU2lnbmVyIiwiQ29udHJhY3QiLCJhZGRyZXNzIiwiYWJpIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./ethereum/factory.js\n");

/***/ }),

/***/ "./ethereum/walletProvider.js":
/*!************************************!*\
  !*** ./ethereum/walletProvider.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getInfuraSigner\": () => (/* binding */ getInfuraSigner),\n/* harmony export */   \"getMetamaskSigner\": () => (/* binding */ getMetamaskSigner),\n/* harmony export */   \"getSigner\": () => (/* binding */ getSigner)\n/* harmony export */ });\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_0__);\n\nconst getSigner = async ()=>{\n    try {\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.providers.Web3Provider(ethereum, \"any\");\n        await provider.send(\"eth_requestAccounts\", []);\n        return provider.getSigner();\n    } catch (error) {\n        console.log(\"Error: \", error.message);\n        try {\n            const provider = new ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.providers.JsonRpcProvider(process.env.INFURA_URL);\n            const wallet = new ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.Wallet(process.env.PRIVATE_KEY, provider);\n            const signer = wallet.connect(provider);\n            return signer;\n        } catch (error) {\n            console.log(\"Error connecting to Infura API:\\n\", error);\n            return error;\n        }\n    }\n};\nconst getMetamaskSigner = async ()=>{\n    try {\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.providers.Web3Provider(ethereum, \"any\");\n        await provider.send(\"eth_requestAccounts\", []);\n        return provider.getSigner();\n    } catch (error) {\n        console.log(\"Error connecting to Metamask:\\n\", error.message);\n    }\n};\nconst getInfuraSigner = async ()=>{\n    try {\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.providers.JsonRpcProvider(process.env.INFURA_URL);\n        const wallet = new ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.Wallet(process.env.PRIVATE_KEY, provider);\n        const signer = wallet.connect(provider);\n        return signer;\n    } catch (error) {\n        console.log(\"Error connecting to Infura API:\\n\", error);\n        return error;\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ldGhlcmV1bS93YWxsZXRQcm92aWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUErQjtBQUV4QixNQUFNQyxTQUFTLEdBQUcsVUFBWTtJQUVqQyxJQUFJO1FBQ0EsTUFBTUMsUUFBUSxHQUFHLElBQUlGLGlFQUE2QixDQUFDSyxRQUFRLEVBQUUsS0FBSyxDQUFDO1FBQ25FLE1BQU1ILFFBQVEsQ0FBQ0ksSUFBSSxDQUFDLHFCQUFxQixFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQy9DLE9BQU9KLFFBQVEsQ0FBQ0QsU0FBUyxFQUFFLENBQUM7S0FDL0IsQ0FDRCxPQUFPTSxLQUFLLEVBQUU7UUFDVkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsU0FBUyxFQUFFRixLQUFLLENBQUNHLE9BQU8sQ0FBQyxDQUFDO1FBQ3RDLElBQUk7WUFDQSxNQUFNUixRQUFRLEdBQUcsSUFBSUYsb0VBQWdDLENBQUNZLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxVQUFVLENBQUM7WUFDN0UsTUFBTUMsTUFBTSxHQUFHLElBQUlmLGlEQUFhLENBQUNZLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSSxXQUFXLEVBQUVmLFFBQVEsQ0FBQztZQUNuRSxNQUFNZ0IsTUFBTSxHQUFHSCxNQUFNLENBQUNJLE9BQU8sQ0FBQ2pCLFFBQVEsQ0FBQztZQUN2QyxPQUFPZ0IsTUFBTSxDQUFDO1NBQ2pCLENBQ0QsT0FBT1gsS0FBSyxFQUFFO1lBQ1ZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG1DQUFtQyxFQUFFRixLQUFLLENBQUMsQ0FBQztZQUN4RCxPQUFPQSxLQUFLLENBQUM7U0FDaEI7S0FDSjtDQUNKO0FBRU0sTUFBTWEsaUJBQWlCLEdBQUcsVUFBWTtJQUN6QyxJQUFJO1FBQ0EsTUFBTWxCLFFBQVEsR0FBRyxJQUFJRixpRUFBNkIsQ0FBQ0ssUUFBUSxFQUFFLEtBQUssQ0FBQztRQUNuRSxNQUFNSCxRQUFRLENBQUNJLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMvQyxPQUFPSixRQUFRLENBQUNELFNBQVMsRUFBRSxDQUFDO0tBQy9CLENBQ0QsT0FBT00sS0FBSyxFQUFFO1FBQ1ZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGlDQUFpQyxFQUFFRixLQUFLLENBQUNHLE9BQU8sQ0FBQyxDQUFDO0tBQ2pFO0NBQ0o7QUFFTSxNQUFNVyxlQUFlLEdBQUcsVUFBWTtJQUN2QyxJQUFJO1FBQ0EsTUFBTW5CLFFBQVEsR0FBRyxJQUFJRixvRUFBZ0MsQ0FBQ1ksT0FBTyxDQUFDQyxHQUFHLENBQUNDLFVBQVUsQ0FBQztRQUM3RSxNQUFNQyxNQUFNLEdBQUcsSUFBSWYsaURBQWEsQ0FBQ1ksT0FBTyxDQUFDQyxHQUFHLENBQUNJLFdBQVcsRUFBRWYsUUFBUSxDQUFDO1FBQ25FLE1BQU1nQixNQUFNLEdBQUdILE1BQU0sQ0FBQ0ksT0FBTyxDQUFDakIsUUFBUSxDQUFDO1FBQ3ZDLE9BQU9nQixNQUFNLENBQUM7S0FDakIsQ0FDRCxPQUFPWCxLQUFLLEVBQUU7UUFDVkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsbUNBQW1DLEVBQUVGLEtBQUssQ0FBQyxDQUFDO1FBQ3hELE9BQU9BLEtBQUssQ0FBQztLQUNoQjtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vMDYtaGFyZGhhdF9raWNrc3RhcnRlci8uL2V0aGVyZXVtL3dhbGxldFByb3ZpZGVyLmpzPzYyOTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSAnZXRoZXJzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNpZ25lciA9IGFzeW5jICgpID0+IHtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKGV0aGVyZXVtLCBcImFueVwiKTtcclxuICAgICAgICBhd2FpdCBwcm92aWRlci5zZW5kKFwiZXRoX3JlcXVlc3RBY2NvdW50c1wiLCBbXSk7XHJcbiAgICAgICAgcmV0dXJuIHByb3ZpZGVyLmdldFNpZ25lcigpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuSnNvblJwY1Byb3ZpZGVyKHByb2Nlc3MuZW52LklORlVSQV9VUkwpO1xyXG4gICAgICAgICAgICBjb25zdCB3YWxsZXQgPSBuZXcgZXRoZXJzLldhbGxldChwcm9jZXNzLmVudi5QUklWQVRFX0tFWSwgcHJvdmlkZXIpO1xyXG4gICAgICAgICAgICBjb25zdCBzaWduZXIgPSB3YWxsZXQuY29ubmVjdChwcm92aWRlcik7XHJcbiAgICAgICAgICAgIHJldHVybiBzaWduZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgY29ubmVjdGluZyB0byBJbmZ1cmEgQVBJOlxcbicsIGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldE1ldGFtYXNrU2lnbmVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihldGhlcmV1bSwgXCJhbnlcIik7XHJcbiAgICAgICAgYXdhaXQgcHJvdmlkZXIuc2VuZChcImV0aF9yZXF1ZXN0QWNjb3VudHNcIiwgW10pO1xyXG4gICAgICAgIHJldHVybiBwcm92aWRlci5nZXRTaWduZXIoKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgY29ubmVjdGluZyB0byBNZXRhbWFzazpcXG5cIiwgZXJyb3IubWVzc2FnZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRJbmZ1cmFTaWduZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuSnNvblJwY1Byb3ZpZGVyKHByb2Nlc3MuZW52LklORlVSQV9VUkwpO1xyXG4gICAgICAgIGNvbnN0IHdhbGxldCA9IG5ldyBldGhlcnMuV2FsbGV0KHByb2Nlc3MuZW52LlBSSVZBVEVfS0VZLCBwcm92aWRlcik7XHJcbiAgICAgICAgY29uc3Qgc2lnbmVyID0gd2FsbGV0LmNvbm5lY3QocHJvdmlkZXIpO1xyXG4gICAgICAgIHJldHVybiBzaWduZXI7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgY29ubmVjdGluZyB0byBJbmZ1cmEgQVBJOlxcbicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6WyJldGhlcnMiLCJnZXRTaWduZXIiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsImV0aGVyZXVtIiwic2VuZCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJKc29uUnBjUHJvdmlkZXIiLCJwcm9jZXNzIiwiZW52IiwiSU5GVVJBX1VSTCIsIndhbGxldCIsIldhbGxldCIsIlBSSVZBVEVfS0VZIiwic2lnbmVyIiwiY29ubmVjdCIsImdldE1ldGFtYXNrU2lnbmVyIiwiZ2V0SW5mdXJhU2lnbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./ethereum/walletProvider.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props)=>{\n    const { 0: campaigns , 1: setCampaigns  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.campaigns);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function fetchData() {\n            if (false) {}\n        }\n        fetchData();\n    }, []);\n    const items = campaigns.map((address)=>{\n        return {\n            header: address,\n            description: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                children: \"View Campaign\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\megap\\\\Desktop\\\\Udemy\\\\Blockchain Development\\\\06-Hardhat_Kickstarter\\\\pages\\\\index.js\",\n                lineNumber: 26,\n                columnNumber: 26\n            }, undefined),\n            fluid: true\n        };\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Open Campaigns\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\megap\\\\Desktop\\\\Udemy\\\\Blockchain Development\\\\06-Hardhat_Kickstarter\\\\pages\\\\index.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                floated: \"right\",\n                content: \"Create Campaign\",\n                icon: \"add circle\",\n                primary: true\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\megap\\\\Desktop\\\\Udemy\\\\Blockchain Development\\\\06-Hardhat_Kickstarter\\\\pages\\\\index.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Card.Group, {\n                items: items\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\megap\\\\Desktop\\\\Udemy\\\\Blockchain Development\\\\06-Hardhat_Kickstarter\\\\pages\\\\index.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\megap\\\\Desktop\\\\Udemy\\\\Blockchain Development\\\\06-Hardhat_Kickstarter\\\\pages\\\\index.js\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, undefined);\n});\nasync function getStaticProps() {\n    const factoryWithSigner = await (0,_ethereum_factory__WEBPACK_IMPORTED_MODULE_2__.getFactorySigner)();\n    //factoryWithSigner.createCampaign('100');\n    const campaigns = await factoryWithSigner.getDeployedCampaigns();\n    return {\n        props: {\n            campaigns,\n            infuraURL: process.env.INFURA_URL\n        },\n        revalidate: 10 //Fetches data from server every 10 seconds\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUE0QztBQUNYO0FBQ3NCO0FBQ047QUFFakQsaUVBQWUsQ0FBQ00sS0FBSyxHQUFLO0lBQ3RCLE1BQU0sRUFOVixHQU1XQyxTQUFTLEdBTnBCLEdBTXNCQyxZQUFZLE1BQUlSLCtDQUFRLENBQUNNLEtBQUssQ0FBQ0MsU0FBUyxDQUFDO0lBRTNETixnREFBUyxDQUFDLElBQU07UUFDWixlQUFlUSxTQUFTLEdBQUc7WUFDdkIsSUFBSSxLQUF1RSxFQUFFLEVBTzVFO1NBQ0o7UUFDREEsU0FBUyxFQUFFLENBQUM7S0FDZixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsTUFBTU0sS0FBSyxHQUFHUixTQUFTLENBQUNTLEdBQUcsQ0FBQ0MsQ0FBQUEsT0FBTyxHQUFJO1FBQ25DLE9BQU87WUFDSEMsTUFBTSxFQUFFRCxPQUFPO1lBQ2ZFLFdBQVcsZ0JBQUUsOERBQUNDLEdBQUM7MEJBQUMsZUFBYTs7Ozs7eUJBQUk7WUFDakNDLEtBQUssRUFBRSxJQUFJO1NBQ2QsQ0FBQztLQUNMLENBQUM7SUFDRixxQkFDSSw4REFBQ25CLDJDQUFROzswQkFDTCw4REFBQ29CLElBQUU7MEJBQUMsZ0JBQWM7Ozs7O3lCQUFLOzBCQUN2Qiw4REFBQ2pCLHFEQUFNO2dCQUNIa0IsT0FBTyxFQUFDLE9BQU87Z0JBQ2ZDLE9BQU8sRUFBQyxpQkFBaUI7Z0JBQ3pCQyxJQUFJLEVBQUMsWUFBWTtnQkFDakJDLE9BQU87Ozs7O3lCQUNUOzBCQUNGLDhEQUFDdEIseURBQVU7Z0JBQUNXLEtBQUssRUFBRUEsS0FBSzs7Ozs7eUJBQUk7Ozs7OztpQkFDckIsQ0FDYjtDQUNMLEVBQUM7QUFFSyxlQUFlYSxjQUFjLEdBQUc7SUFDbkMsTUFBTWhCLGlCQUFpQixHQUFHLE1BQU1ULG1FQUFnQixFQUFFO0lBQ2xELDBDQUEwQztJQUMxQyxNQUFNSSxTQUFTLEdBQUcsTUFBTUssaUJBQWlCLENBQUNFLG9CQUFvQixFQUFFO0lBQ2hFLE9BQU87UUFDSFIsS0FBSyxFQUFFO1lBQ0hDLFNBQVM7WUFDVHNCLFNBQVMsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFVBQVU7U0FDcEM7UUFDREMsVUFBVSxFQUFFLEVBQUUsNENBQTJDO0tBQzVELENBQUM7Q0FDTCIsInNvdXJjZXMiOlsid2VicGFjazovLzA2LWhhcmRoYXRfa2lja3N0YXJ0ZXIvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBnZXRGYWN0b3J5U2lnbmVyIH0gZnJvbSAnLi4vZXRoZXJldW0vZmFjdG9yeSc7XHJcbmltcG9ydCB7IENhcmQsIEJ1dHRvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW2NhbXBhaWducywgc2V0Q2FtcGFpZ25zXSA9IHVzZVN0YXRlKHByb3BzLmNhbXBhaWducyk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiB3aW5kb3cuZXRoZXJldW0gIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZhY3RvcnlXaXRoU2lnbmVyID0gYXdhaXQgZ2V0RmFjdG9yeVNpZ25lcigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZhY3RvcnlXaXRoU2lnbmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9mYWN0b3J5V2l0aFNpZ25lci5jcmVhdGVDYW1wYWlnbignMTAwJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVwbG95ZWRDYW1wYWlnbnMgPSBhd2FpdCBmYWN0b3J5V2l0aFNpZ25lci5nZXREZXBsb3llZENhbXBhaWducygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldENhbXBhaWducyhkZXBsb3llZENhbXBhaWducyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZmV0Y2hEYXRhKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgaXRlbXMgPSBjYW1wYWlnbnMubWFwKGFkZHJlc3MgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGhlYWRlcjogYWRkcmVzcyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IDxhPlZpZXcgQ2FtcGFpZ248L2E+LFxyXG4gICAgICAgICAgICBmbHVpZDogdHJ1ZVxyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICA8aDM+T3BlbiBDYW1wYWlnbnM8L2gzPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBmbG9hdGVkPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgY29udGVudD1cIkNyZWF0ZSBDYW1wYWlnblwiXHJcbiAgICAgICAgICAgICAgICBpY29uPVwiYWRkIGNpcmNsZVwiXHJcbiAgICAgICAgICAgICAgICBwcmltYXJ5XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz5cclxuICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICAgIGNvbnN0IGZhY3RvcnlXaXRoU2lnbmVyID0gYXdhaXQgZ2V0RmFjdG9yeVNpZ25lcigpO1xyXG4gICAgLy9mYWN0b3J5V2l0aFNpZ25lci5jcmVhdGVDYW1wYWlnbignMTAwJyk7XHJcbiAgICBjb25zdCBjYW1wYWlnbnMgPSBhd2FpdCBmYWN0b3J5V2l0aFNpZ25lci5nZXREZXBsb3llZENhbXBhaWducygpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBjYW1wYWlnbnMsXHJcbiAgICAgICAgICAgIGluZnVyYVVSTDogcHJvY2Vzcy5lbnYuSU5GVVJBX1VSTFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmV2YWxpZGF0ZTogMTAvL0ZldGNoZXMgZGF0YSBmcm9tIHNlcnZlciBldmVyeSAxMCBzZWNvbmRzXHJcbiAgICB9O1xyXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRnJhZ21lbnQiLCJnZXRGYWN0b3J5U2lnbmVyIiwiQ2FyZCIsIkJ1dHRvbiIsInByb3BzIiwiY2FtcGFpZ25zIiwic2V0Q2FtcGFpZ25zIiwiZmV0Y2hEYXRhIiwid2luZG93IiwiZXRoZXJldW0iLCJmYWN0b3J5V2l0aFNpZ25lciIsImRlcGxveWVkQ2FtcGFpZ25zIiwiZ2V0RGVwbG95ZWRDYW1wYWlnbnMiLCJpdGVtcyIsIm1hcCIsImFkZHJlc3MiLCJoZWFkZXIiLCJkZXNjcmlwdGlvbiIsImEiLCJmbHVpZCIsImgzIiwiZmxvYXRlZCIsImNvbnRlbnQiLCJpY29uIiwicHJpbWFyeSIsIkdyb3VwIiwiZ2V0U3RhdGljUHJvcHMiLCJpbmZ1cmFVUkwiLCJwcm9jZXNzIiwiZW52IiwiSU5GVVJBX1VSTCIsInJldmFsaWRhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "ethers":
/*!*************************!*\
  !*** external "ethers" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("ethers");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "./ContractData.json":
/*!***************************!*\
  !*** ./ContractData.json ***!
  \***************************/
/***/ ((module) => {

module.exports = JSON.parse('{"_comment":"This file is manually created after deploying contract to Etherscan via Infura - data copied from console.log()","address":"0xdfec61213985D7169e90f5e26E98207d37c8418b","abi":[{"type":"function","name":"createCampaign","constant":false,"payable":false,"inputs":[{"type":"uint256","name":"minimum"}],"outputs":[]},{"type":"function","name":"deployedCampaigns","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"uint256"}],"outputs":[{"type":"address"}]},{"type":"function","name":"getDeployedCampaigns","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"address[]"}]}]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();