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
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
      setValue(function (prev) {
        return _objectSpread({}, prev);
      });
    }
  }];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UseInput);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("65d2e5bd8b379b950c51")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXZDSCxLQUFLLEdBQUFJLFVBQUE7SUFBRUMsUUFBUSxHQUFBRCxVQUFBO0VBRXJCLE9BQU8sQ0FDSEosS0FBSyxFQUNMO0lBQ0lBLEtBQUssRUFBTEEsS0FBSztJQUNMTSxRQUFRLEVBQUUsU0FBQUEsU0FBQUMsQ0FBQyxFQUFJO01BQ1hGLFFBQVEsQ0FBQyxVQUFBRyxJQUFJLEVBQUk7UUFDYixPQUFBQyxhQUFBLEtBQ09ELElBQUk7TUFHWCxDQUNKLENBQUM7SUFDTDtFQUNKLENBQUMsQ0FDSjtBQUVMLENBQUM7QUFFRCxpRUFBZVAsUUFBUTs7Ozs7Ozs7VUN2QnZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTJfRHppZW5fMTktMjEvMDFfWmFkYW5pYV9wb2RzdW1vd3VqYWNlLzAzX1phZGFuaWVfMy9qcy9SZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMl9Eemllbl8xOS0yMS8wMV9aYWRhbmlhX3BvZHN1bW93dWphY2UvMDNfWmFkYW5pZV8zL2pzL3VzZUlucHV0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuL3VzZUlucHV0JztcblxuY29uc3QgUmVnaXN0ZXIgPSAoKSA9PiB7XG5cbiAgICBjb25zdFt1c2VyLCBzZXRVc2VyXT11c2VJbnB1dCh7XG4gICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgIGVtYWlsOiBcIlwiLFxuICAgICAgICBwYXNzd29yZDogXCJcIixcbiAgICAgICAgc2V4OiBcIlwiLFxuICAgICAgICBhZHJlc3M6IFwiXCIsXG4gICAgICAgIHBvc3RhbENvZGU6IFwiXCIsXG4gICAgICAgIGNpdHk6IFwiXCJcbiAgICB9KVxuXG4gICAgY29uc29sZS5sb2codXNlcik7XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICBEYW5lIG9zb2Jvd2U6IDxici8+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJJbWnEmSBpIG5hendpc2tvXCIgey4uLnNldFVzZXJ9Lz4gPGJyLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJlbWFpbFwiIHsuLi5zZXRVc2VyfS8+IDxici8+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiaGFzxYJvXCIgey4uLnNldFVzZXJ9Lz4gPGJyLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJwb3d0w7NyeiBoYXPFgm9cIiB7Li4uc2V0VXNlcn0vPiA8YnIvPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTVwiPk3EmcW8Y3p5em5hPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJLXCI+S29iaWV0YTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PiA8YnIvPlxuICAgICAgICAgICAgICAgIERhbmUgZG8gd3lzecWCa2k6IDxici8+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJhZHJlc1wiIHsuLi5zZXRVc2VyfS8+IDxici8+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJrb2QgcG9jenRvd3lcIiBwbGFjZWhvbGRlcj1cImtvZCBwb2N6dG93eVwiIHsuLi5zZXRVc2VyfS8+IDxici8+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJtaWFzdG9cIiBwbGFjZWhvbGRlcj1cIm1pYXN0b1wiIHsuLi5zZXRVc2VyfS8+IDxici8+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlphcGlzelwiLz4gPGJyLz5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyOyIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFVzZUlucHV0ID0gKHZhbHVlT25TdGFydCkgPT4ge1xuICAgIGNvbnN0W3ZhbHVlLCBzZXRWYWx1ZV09dXNlU3RhdGUodmFsdWVPblN0YXJ0KTtcblxuICAgIHJldHVybiBbXG4gICAgICAgIHZhbHVlLFxuICAgICAgICB7XG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIG9uQ2hhbmdlOiBlID0+IHtcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZShwcmV2ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXVxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBVc2VJbnB1dDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2NWQyZTViZDhiMzc5Yjk1MGM1MVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlSW5wdXQiLCJSZWdpc3RlciIsIl91c2VJbnB1dCIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwic2V4IiwiYWRyZXNzIiwicG9zdGFsQ29kZSIsImNpdHkiLCJfdXNlSW5wdXQyIiwiX3NsaWNlZFRvQXJyYXkiLCJ1c2VyIiwic2V0VXNlciIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVFbGVtZW50IiwiX2V4dGVuZHMiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIlVzZUlucHV0IiwidmFsdWVPblN0YXJ0IiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsInNldFZhbHVlIiwib25DaGFuZ2UiLCJlIiwicHJldiIsIl9vYmplY3RTcHJlYWQiXSwic291cmNlUm9vdCI6IiJ9