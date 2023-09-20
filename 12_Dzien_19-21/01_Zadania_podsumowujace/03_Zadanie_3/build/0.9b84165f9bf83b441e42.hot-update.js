"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 34:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var Register = function Register() {
  var _useInput = (0,_useInput__WEBPACK_IMPORTED_MODULE_1__["default"])({
      name: "",
      email: "",
      password: "",
      sex: "",
      adress: "",
      postalCode: "",
      city: ""
    }),
    _useInput2 = _slicedToArray(_useInput, 2),
    user = _useInput2[0],
    setUser = _useInput2[1];
  console.log(user);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, "Dane osobowe: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
    type: "text",
    placeholder: "Imi\u0119 i nazwisko"
  }, setUser)), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
    type: "email",
    placeholder: "email"
  }, setUser)), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
    type: "password",
    placeholder: "has\u0142o"
  }, setUser)), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
    type: "password",
    placeholder: "powt\xF3rz has\u0142o"
  }, setUser)), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "M"
  }, "M\u0119\u017Cczyzna"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    value: "K"
  }, "Kobieta")), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "Dane do wysy\u0142ki: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
    type: "text",
    placeholder: "adres"
  }, setUser)), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
    type: "kod pocztowy",
    placeholder: "kod pocztowy"
  }, setUser)), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
    type: "miasto",
    placeholder: "miasto"
  }, setUser)), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "submit",
    value: "Zapisz"
  }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Register);

/***/ }),

/***/ 35:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var UseInput = function UseInput(valueOnStart) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(valueOnStart),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  return [value, {
    value: value,
    onChange: function onChange(e) {
      setValue(e.target.value);
    }
  }];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UseInput);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("fa420e5e4e2a3503db10")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLEdBQUFJLFVBQUE7SUFBRUMsUUFBUSxHQUFBRCxVQUFBO0VBRXJCLE9BQU8sQ0FDSEosS0FBSyxFQUNMO0lBQ0lBLEtBQUssRUFBTEEsS0FBSztJQUNMTSxRQUFRLEVBQUUsU0FBQUEsU0FBQUMsQ0FBQyxFQUFJO01BQ1hGLFFBQVEsQ0FBQ0UsQ0FBQyxDQUFDQyxNQUFNLENBQUNSLEtBQUssQ0FBQztJQUM1QjtFQUNKLENBQUMsQ0FDSjtBQUVMLENBQUM7QUFFRCxpRUFBZUMsUUFBUTs7Ozs7Ozs7VUNqQnZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTJfRHppZW5fMTktMjEvMDFfWmFkYW5pYV9wb2RzdW1vd3VqYWNlLzAzX1phZGFuaWVfMy9qcy9SZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMl9Eemllbl8xOS0yMS8wMV9aYWRhbmlhX3BvZHN1bW93dWphY2UvMDNfWmFkYW5pZV8zL2pzL3VzZUlucHV0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuL3VzZUlucHV0JztcblxuY29uc3QgUmVnaXN0ZXIgPSAoKSA9PiB7XG5cbiAgICBjb25zdFt1c2VyLCBzZXRVc2VyXT11c2VJbnB1dCh7XG4gICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgIGVtYWlsOiBcIlwiLFxuICAgICAgICBwYXNzd29yZDogXCJcIixcbiAgICAgICAgc2V4OiBcIlwiLFxuICAgICAgICBhZHJlc3M6IFwiXCIsXG4gICAgICAgIHBvc3RhbENvZGU6IFwiXCIsXG4gICAgICAgIGNpdHk6IFwiXCJcbiAgICB9KVxuXG4gICAgY29uc29sZS5sb2codXNlcik7XG4gICAgXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgRGFuZSBvc29ib3dlOiA8YnIvPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiSW1pxJkgaSBuYXp3aXNrb1wiIHsuLi5zZXRVc2VyfS8+IDxici8+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiZW1haWxcIiB7Li4uc2V0VXNlcn0vPiA8YnIvPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cImhhc8WCb1wiIHsuLi5zZXRVc2VyfS8+IDxici8+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwicG93dMOzcnogaGFzxYJvXCIgey4uLnNldFVzZXJ9Lz4gPGJyLz5cbiAgICAgICAgICAgICAgICA8c2VsZWN0ID5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1cIj5NxJnFvGN6eXpuYTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiS1wiPktvYmlldGE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD4gPGJyLz5cbiAgICAgICAgICAgICAgICBEYW5lIGRvIHd5c3nFgmtpOiA8YnIvPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiYWRyZXNcIiB7Li4uc2V0VXNlcn0vPiA8YnIvPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwia29kIHBvY3p0b3d5XCIgcGxhY2Vob2xkZXI9XCJrb2QgcG9jenRvd3lcIiB7Li4uc2V0VXNlcn0vPiA8YnIvPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibWlhc3RvXCIgcGxhY2Vob2xkZXI9XCJtaWFzdG9cIiB7Li4uc2V0VXNlcn0vPiA8YnIvPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJaYXBpc3pcIi8+IDxici8+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlcjsiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBVc2VJbnB1dCA9ICh2YWx1ZU9uU3RhcnQpID0+IHtcbiAgICBjb25zdFt2YWx1ZSwgc2V0VmFsdWVdPXVzZVN0YXRlKHZhbHVlT25TdGFydCk7XG5cbiAgICByZXR1cm4gW1xuICAgICAgICB2YWx1ZSxcbiAgICAgICAge1xuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICBvbkNoYW5nZTogZSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBdXG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVzZUlucHV0OyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImZhNDIwZTVlNGUyYTM1MDNkYjEwXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VJbnB1dCIsIlJlZ2lzdGVyIiwiX3VzZUlucHV0IiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJzZXgiLCJhZHJlc3MiLCJwb3N0YWxDb2RlIiwiY2l0eSIsIl91c2VJbnB1dDIiLCJfc2xpY2VkVG9BcnJheSIsInVzZXIiLCJzZXRVc2VyIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUVsZW1lbnQiLCJfZXh0ZW5kcyIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwiVXNlSW5wdXQiLCJ2YWx1ZU9uU3RhcnQiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwic2V0VmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9