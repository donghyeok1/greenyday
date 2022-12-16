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
exports.id = "pages/oauth/callback/kakao";
exports.ids = ["pages/oauth/callback/kakao"];
exports.modules = {

/***/ "./src/config/config.js":
/*!******************************!*\
  !*** ./src/config/config.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"backUrl\": () => (/* binding */ backUrl),\n/* harmony export */   \"frontUrl\": () => (/* binding */ frontUrl)\n/* harmony export */ });\nconst backUrl = \"http://localhost:8000\";\nconst frontUrl = \"http://localhost:3000\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnL2NvbmZpZy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFPLE1BQU1BLFVBQVUsd0JBQXdCO0FBQ3hDLE1BQU1DLFdBQVcsd0JBQXdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29uZmlnL2NvbmZpZy5qcz9iNGJiIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBiYWNrVXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwMDBcIjtcclxuZXhwb3J0IGNvbnN0IGZyb250VXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIjtcclxuIl0sIm5hbWVzIjpbImJhY2tVcmwiLCJmcm9udFVybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/config/config.js\n");

/***/ }),

/***/ "./src/pages/oauth/callback/kakao.js":
/*!*******************************************!*\
  !*** ./src/pages/oauth/callback/kakao.js ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config/config */ \"./src/config/config.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);\naxios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nlet mountCount = 1;\nconst Kakao = ()=>{\n    const [code, setcode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n    const [didMount, setDidMount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        setcode(new URL(window.location.href).searchParams.get(\"code\"));\n    }, []);\n    if (code && !didMount) {\n        mountCount++;\n        setDidMount(true);\n        axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(`${_config_config__WEBPACK_IMPORTED_MODULE_2__.backUrl}/accounts/login/kakao?code=${code}`, {\n            params: {\n                code: code\n            }\n        }).then((res)=>{\n            console.log(res.data);\n            return next_router__WEBPACK_IMPORTED_MODULE_3___default().push(\"/\");\n        }).catch((err)=>console.error(err.message));\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Kakao);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvb2F1dGgvY2FsbGJhY2sva2FrYW8uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNsQjtBQUN1QjtBQUNqQjtBQUVoQyxJQUFJSyxhQUFhO0FBQ2pCLE1BQU1DLFFBQVEsSUFBTTtJQUNsQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1AsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDUSxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFDLEtBQUs7SUFFOUNELGdEQUFTQSxDQUFDLElBQU07UUFDZFEsUUFBUSxJQUFJRyxJQUFJQyxPQUFPQyxRQUFRLENBQUNDLElBQUksRUFBRUMsWUFBWSxDQUFDQyxHQUFHLENBQUM7SUFDekQsR0FBRyxFQUFFO0lBRUwsSUFBSVQsUUFBUSxDQUFDRSxVQUFTO1FBQ3BCSjtRQUNBSyxZQUFZLElBQUk7UUFDaEJSLGlEQUNRLENBQUMsQ0FBQyxFQUFFQyxtREFBT0EsQ0FBQywyQkFBMkIsRUFBRUksS0FBSyxDQUFDLEVBQUM7WUFDbERVLFFBQVM7Z0JBQ1BWLE1BQU9BO1lBQ1Q7UUFDRixHQUNDVyxJQUFJLENBQUMsQ0FBQ0MsTUFBUTtZQUNiQyxRQUFRQyxHQUFHLENBQUNGLElBQUlHLElBQUk7WUFDcEIsT0FBT2xCLHVEQUFXLENBQUM7UUFDckIsR0FDQ29CLEtBQUssQ0FBQ0MsQ0FBQUEsTUFBT0wsUUFBUU0sS0FBSyxDQUFDRCxJQUFJRSxPQUFPO0lBQ3pDLENBQUM7QUFDUDtBQUVBLGlFQUFlckIsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3BhZ2VzL29hdXRoL2NhbGxiYWNrL2tha2FvLmpzPzliZGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGJhY2tVcmwgfSBmcm9tIFwiLi4vLi4vLi4vY29uZmlnL2NvbmZpZ1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiXHJcblxyXG5sZXQgbW91bnRDb3VudCA9IDE7XHJcbmNvbnN0IEtha2FvID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjb2RlLCBzZXRjb2RlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtkaWRNb3VudCwgc2V0RGlkTW91bnRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0Y29kZShuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKS5zZWFyY2hQYXJhbXMuZ2V0KFwiY29kZVwiKSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBpZiAoY29kZSAmJiAhZGlkTW91bnQpe1xyXG4gICAgbW91bnRDb3VudCsrO1xyXG4gICAgc2V0RGlkTW91bnQodHJ1ZSk7XHJcbiAgICBheGlvc1xyXG4gICAgICAgIC5nZXQoYCR7YmFja1VybH0vYWNjb3VudHMvbG9naW4va2FrYW8/Y29kZT0ke2NvZGV9YCx7XHJcbiAgICAgICAgICBwYXJhbXMgOiB7XHJcbiAgICAgICAgICAgIGNvZGUgOiBjb2RlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgICByZXR1cm4gUm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVyci5tZXNzYWdlKSk7XHJcbiAgICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEtha2FvO1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsImJhY2tVcmwiLCJSb3V0ZXIiLCJtb3VudENvdW50IiwiS2FrYW8iLCJjb2RlIiwic2V0Y29kZSIsImRpZE1vdW50Iiwic2V0RGlkTW91bnQiLCJVUkwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJzZWFyY2hQYXJhbXMiLCJnZXQiLCJwYXJhbXMiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJwdXNoIiwiY2F0Y2giLCJlcnIiLCJlcnJvciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/oauth/callback/kakao.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/oauth/callback/kakao.js"));
module.exports = __webpack_exports__;

})();