self["webpackHotUpdatees6_react"](0,{

/***/ 34:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AdultStuffBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var _AdultStuffBox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_AdultStuffBox__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var AdultStuff = function AdultStuff() {
  var _useInput = (0,_useInput__WEBPACK_IMPORTED_MODULE_2__["default"])(0),
    _useInput2 = _slicedToArray(_useInput, 2),
    age = _useInput2[0],
    setAge = _useInput2[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
    type: "number"
  }, setAge))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, age), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_AdultStuffBox__WEBPACK_IMPORTED_MODULE_1___default()), {
    age: age
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdultStuff);

/***/ }),

/***/ 35:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/pannorris/WebstormProjects/ONL_FSB_E_27_React/11_Dzien_18/02_Formularze_-_ciag_dalszy_zadan/02_Zadanie_2/js/AdultStuffBox.js: Unexpected token (6:28)\n\n\u001b[0m \u001b[90m 4 |\u001b[39m     \u001b[36mreturn\u001b[39m (\u001b[0m\n\u001b[0m \u001b[90m 5 |\u001b[39m         \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 6 |\u001b[39m             {age\u001b[33m>\u001b[39m\u001b[35m17\u001b[39m \u001b[33m?\u001b[39m \u001b[32m\" \"\u001b[39m \u001b[33m:\u001b[39m }\u001b[0m\n\u001b[0m \u001b[90m   |\u001b[39m                             \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 7 |\u001b[39m         \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mdiv\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 8 |\u001b[39m     )\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 9 |\u001b[39m }\u001b[33m;\u001b[39m\u001b[0m\n    at instantiate (/home/pannorris/WebstormProjects/ONL_FSB_E_27_React/node_modules/@babel/parser/lib/index.js:60:32)\n    at constructor (/home/pannorris/WebstormProjects/ONL_FSB_E_27_React/node_modules/@babel/parser/lib/index.js:355:12)\n    at JSXParserMixin.raise (/home/pannorris/WebstormProjects/ONL_FSB_E_27_React/node_modules/@babel/parser/lib/index.js:3204:19)\n    at JSXParserMixin.unexpected (/home/pannorris/WebstormProjects/ONL_FSB_E_27_React/node_modules/@babel/parser/lib/index.js:3234:16)\n    at JSXParserMixin.parseExprAtom (/home/pannorris/WebstormProjects/ONL_FSB_E_27_React/node_modules/@babel/parser/lib/index.js:11235:16)\n    at JSXParserMixin.parseExprAtom (/home/pannorris/WebstormProjects/ONL_FSB_E_27_React/node_modules/@babel/parser/lib/index.js:6918:20)\n    at JSXParserMixin.parseExprSubscripts (/home/pannorris/WebstormProjects/ONL_FSB_E_27_React/node_modules/@babel/parser/lib/index.js:10841:23)\n    at JSXParserMixin.parseUpdate (/home/pannorris/WebstormProjects/ONL_FSB_E_27_React/node_modules/@babel/parser/lib/index.js:10824:21)\n    at JSXParserMixin.parseMaybeUnary (/home/pannorris/WebstormProjects/ONL_FSB_E_27_React/node_modules/@babel/parser/lib/index.js:10800:23)\n    at JSXParserMixin.parseMaybeUnaryOrPrivate (/home/pannorris/WebstormProjects/ONL_FSB_E_27_React/node_modules/@babel/parser/lib/index.js:10638:61)");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1403b2e3770571a0bcd1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC40NDc5ODU3ZDNjZDBlNGMzYTQwYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDa0I7QUFDVjtBQUdsQyxJQUFNRyxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBQSxFQUFTO0VBRXJCLElBQUFDLFNBQUEsR0FBc0JGLHFEQUFRLENBQUMsQ0FBQyxDQUFDO0lBQUFHLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQTFCRyxHQUFHLEdBQUFGLFVBQUE7SUFBRUcsTUFBTSxHQUFBSCxVQUFBO0VBQ2xCLG9CQUNJTCwwREFBQSxDQUFBQSx1REFBQSxxQkFDSUEsMERBQUEsNEJBQ0lBLDBEQUFBLFVBQUFXLFFBQUE7SUFBT0MsSUFBSSxFQUFDO0VBQVEsR0FBS0osTUFBTSxDQUFFLENBQy9CLENBQUMsZUFDUFIsMERBQUEsY0FBTU8sR0FBUyxDQUFDLGVBQ2hCUCwwREFBQSxDQUFDQyx1REFBYTtJQUFDTSxHQUFHLEVBQUVBO0VBQUksQ0FBQyxDQUMzQixDQUFDO0FBRVgsQ0FBQztBQUVELGlFQUFlSixVQUFVOzs7Ozs7Ozs7Ozs7Ozs7VUNuQnpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgvMDJfRm9ybXVsYXJ6ZV8tX2NpYWdfZGFsc3p5X3phZGFuLzAyX1phZGFuaWVfMi9qcy9BZHVsdFN0dWZmLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBZHVsdFN0dWZmQm94IGZyb20gXCIuL0FkdWx0U3R1ZmZCb3hcIjtcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiLi91c2VJbnB1dFwiO1xuXG5cbmNvbnN0IEFkdWx0U3R1ZmYgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbYWdlLCBzZXRBZ2VdID0gdXNlSW5wdXQoMClcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiB7Li4uc2V0QWdlfS8+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8ZGl2PnthZ2V9PC9kaXY+XG4gICAgICAgICAgICA8QWR1bHRTdHVmZkJveCBhZ2U9e2FnZX0vPlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWR1bHRTdHVmZjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxNDAzYjJlMzc3MDU3MWEwYmNkMVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkFkdWx0U3R1ZmZCb3giLCJ1c2VJbnB1dCIsIkFkdWx0U3R1ZmYiLCJfdXNlSW5wdXQiLCJfdXNlSW5wdXQyIiwiX3NsaWNlZFRvQXJyYXkiLCJhZ2UiLCJzZXRBZ2UiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJfZXh0ZW5kcyIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9