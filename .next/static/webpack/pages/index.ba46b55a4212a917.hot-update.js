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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n// import { error } from \"console\";\n\n\nfunction HomePage() {\n    var _s = $RefreshSig$();\n    function fetchingArtPieces() {\n        _s();\n        const URL = \"https://example-apis.vercel.app/api/art\";\n        const fetcher = function() {\n            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){\n                args[_key] = arguments[_key];\n            }\n            return fetch(...args).then((res)=>res.json());\n        };\n        const { data, error, isLoading } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(URL, fetcher);\n        if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Failed to load\"\n        }, void 0, false, {\n            fileName: \"/Users/user1/Documents/spiced-academy/spiced-bootcamp/projects/gallery-art/pages/index.js\",\n            lineNumber: 11,\n            columnNumber: 23\n        }, this);\n        if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"... is loading\"\n        }, void 0, false, {\n            fileName: \"/Users/user1/Documents/spiced-academy/spiced-bootcamp/projects/gallery-art/pages/index.js\",\n            lineNumber: 12,\n            columnNumber: 27\n        }, this);\n        return data;\n    }\n    _s(fetchingArtPieces, \"3etLDUffADz62tD7g9gJKxYxEy4=\", false, function() {\n        return [\n            swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n        ];\n    });\n    const artPieces = fetchingArtPieces();\n    console.log(artPieces);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Hello from Next.js\"\n        }, void 0, false, {\n            fileName: \"/Users/user1/Documents/spiced-academy/spiced-bootcamp/projects/gallery-art/pages/index.js\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/user1/Documents/spiced-academy/spiced-bootcamp/projects/gallery-art/pages/index.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsbUNBQW1DOztBQUNWO0FBRVYsU0FBU0M7O0lBQ3RCLFNBQVNDOztRQUNQLE1BQU1DLE1BQU07UUFFWixNQUFNQyxVQUFVOzZDQUFJQztnQkFBQUE7O21CQUFTQyxTQUFTRCxNQUFNRSxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSTtRQUFFO1FBRXBFLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLFNBQVMsRUFBRSxHQUFHWiwrQ0FBTUEsQ0FBQ0csS0FBS0M7UUFDL0MsSUFBSU8sT0FBTyxxQkFBTyw4REFBQ0U7c0JBQUk7Ozs7OztRQUN2QixJQUFJRCxXQUFXLHFCQUFPLDhEQUFDQztzQkFBSTs7Ozs7O1FBQzNCLE9BQU9IO0lBQ1Q7T0FUU1I7O1lBSzRCRiwyQ0FBTUE7OztJQU0zQyxNQUFNYyxZQUFZWjtJQUNsQmEsUUFBUUMsR0FBRyxDQUFDRjtJQUVaLHFCQUNFLDhEQUFDRDtrQkFDQyw0RUFBQ0k7c0JBQUc7Ozs7Ozs7Ozs7O0FBR1Y7S0FwQndCaEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBlcnJvciB9IGZyb20gXCJjb25zb2xlXCI7XG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gIGZ1bmN0aW9uIGZldGNoaW5nQXJ0UGllY2VzKCkge1xuICAgIGNvbnN0IFVSTCA9IFwiaHR0cHM6Ly9leGFtcGxlLWFwaXMudmVyY2VsLmFwcC9hcGkvYXJ0XCI7XG5cbiAgICBjb25zdCBmZXRjaGVyID0gKC4uLmFyZ3MpID0+IGZldGNoKC4uLmFyZ3MpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG5cbiAgICBjb25zdCB7IGRhdGEsIGVycm9yLCBpc0xvYWRpbmcgfSA9IHVzZVNXUihVUkwsIGZldGNoZXIpO1xuICAgIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+RmFpbGVkIHRvIGxvYWQ8L2Rpdj47XG4gICAgaWYgKGlzTG9hZGluZykgcmV0dXJuIDxkaXY+Li4uIGlzIGxvYWRpbmc8L2Rpdj47XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBjb25zdCBhcnRQaWVjZXMgPSBmZXRjaGluZ0FydFBpZWNlcygpO1xuICBjb25zb2xlLmxvZyhhcnRQaWVjZXMpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5IZWxsbyBmcm9tIE5leHQuanM8L2gxPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVNXUiIsIkhvbWVQYWdlIiwiZmV0Y2hpbmdBcnRQaWVjZXMiLCJVUkwiLCJmZXRjaGVyIiwiYXJncyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiZXJyb3IiLCJpc0xvYWRpbmciLCJkaXYiLCJhcnRQaWVjZXMiLCJjb25zb2xlIiwibG9nIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});