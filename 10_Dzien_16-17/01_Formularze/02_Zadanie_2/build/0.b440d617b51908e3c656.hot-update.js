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
/* harmony import */ var _data_fakeAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
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


var Form = function Form() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      user: " ",
      password: " "
    }),
    _useState2 = _slicedToArray(_useState, 2),
    user = _useState2[0],
    setUSer = _useState2[1];
  var handleSubmit = function handleSubmit(e) {
    _data_fakeAPI__WEBPACK_IMPORTED_MODULE_1__["default"].login({
      username: user.user,
      password: user.password
    }).then(function (user) {
      console.log(user);
      // pod zmienną user mamy dostęp do informacji o zalogowanym użytkowniku
    })["catch"](function (err) {
      console.log(err);
      // pod zmienną err mamy dostęp do informacji o błędzie
    });

    e.preventDefault();
  };
  var handleChange = function handleChange(e) {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    setUSer(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, _defineProperty({}, name, value));
    });
  };
  var verifyLogin = function verifyLogin(login) {
    if (login.length < 3) {
      return "Login za krótki, musi mieć więcej niż 2 znaki";
    }
  };
  var verifyPassword = function verifyPassword(password) {
    if (password.length < 5) {
      return "Hasło za krótkie, musi mieć więcej niż 5 znaków";
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onClick: handleSubmit
  }, "Login:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "user",
    value: user.user,
    onChange: handleChange
  }), "Has\u0142o:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "password",
    value: user.password,
    onChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "submit",
    value: "Wy\u015Blij"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      color: "red"
    }
  }, verifyLogin(user.user)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      color: "red"
    }
  }, verifyPassword(user.password)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9994761222540c2e422a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBUSxDQUFLLENBQUMsZUFDN0ROLDBEQUFBLFdBQVEsQ0FDUCxDQUFDO0FBRWQsQ0FBQztBQUVELGlFQUFlRyxJQUFJOzs7Ozs7OztVQzlEbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMF9Eemllbl8xNi0xNy8wMV9Gb3JtdWxhcnplLzAyX1phZGFuaWVfMi9qcy9Gb3JtLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGYWtlQVBJIGZyb20gXCIuL2RhdGEvZmFrZUFQSVwiO1xuXG5jb25zdCBGb3JtID0gKCkgPT4ge1xuXG4gICAgY29uc3QgW3VzZXIsIHNldFVTZXJdID0gdXNlU3RhdGUoe1xuICAgICAgICB1c2VyOiBcIiBcIixcbiAgICAgICAgcGFzc3dvcmQ6IFwiIFwiXG4gICAgfSlcblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgICAgIEZha2VBUEkubG9naW4oe1xuICAgICAgICAgICAgdXNlcm5hbWU6IHVzZXIudXNlcixcbiAgICAgICAgICAgIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkXG4gICAgICAgIH0pLnRoZW4odXNlciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyKTtcbiAgICAgICAgICAgIC8vIHBvZCB6bWllbm7EhSB1c2VyIG1hbXkgZG9zdMSZcCBkbyBpbmZvcm1hY2ppIG8gemFsb2dvd2FueW0gdcW8eXRrb3duaWt1XG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgLy8gcG9kIHptaWVubsSFIGVyciBtYW15IGRvc3TEmXAgZG8gaW5mb3JtYWNqaSBvIGLFgsSZZHppZVxuICAgICAgICB9KTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHtuYW1lLCB2YWx1ZX0gPSBlLnRhcmdldDtcbiAgICAgICAgc2V0VVNlcigocHJldlN0YXRlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgICAgICAgICBbbmFtZV06IHZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgdmVyaWZ5TG9naW4gPSAobG9naW4pID0+IHtcbiAgICAgICAgaWYgKGxvZ2luLmxlbmd0aCA8IDMpIHtcbiAgICAgICAgICAgIHJldHVybiBcIkxvZ2luIHphIGtyw7N0a2ksIG11c2kgbWllxIcgd2nEmWNlaiBuacW8IDIgem5ha2lcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgdmVyaWZ5UGFzc3dvcmQgPSAocGFzc3dvcmQpID0+IHtcbiAgICAgICAgaWYgKHBhc3N3b3JkLmxlbmd0aCA8IDUpIHtcbiAgICAgICAgICAgIHJldHVybiBcIkhhc8WCbyB6YSBrcsOzdGtpZSwgbXVzaSBtaWXEhyB3acSZY2VqIG5pxbwgNSB6bmFrw7N3XCJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8Zm9ybSBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgIExvZ2luOlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VyXCIgdmFsdWU9e3VzZXIudXNlcn0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0vPlxuICAgICAgICAgICAgICAgIEhhc8WCbzpcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicGFzc3dvcmRcIiB2YWx1ZT17dXNlci5wYXNzd29yZH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0vPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJXecWbbGlqXCIvPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjogXCJyZWRcIn19Pnt2ZXJpZnlMb2dpbih1c2VyLnVzZXIpfTwvcD5cbiAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6IFwicmVkXCJ9fT57dmVyaWZ5UGFzc3dvcmQodXNlci5wYXNzd29yZCl9PC9wPlxuICAgICAgICAgICAgPGgxPjwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjk5OTQ3NjEyMjI1NDBjMmU0MjJhXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJGYWtlQVBJIiwiRm9ybSIsIl91c2VTdGF0ZSIsInVzZXIiLCJwYXNzd29yZCIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInNldFVTZXIiLCJoYW5kbGVTdWJtaXQiLCJlIiwibG9naW4iLCJ1c2VybmFtZSIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwiZXJyIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVDaGFuZ2UiLCJfZSR0YXJnZXQiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJwcmV2U3RhdGUiLCJfb2JqZWN0U3ByZWFkIiwiX2RlZmluZVByb3BlcnR5IiwidmVyaWZ5TG9naW4iLCJsZW5ndGgiLCJ2ZXJpZnlQYXNzd29yZCIsImNyZWF0ZUVsZW1lbnQiLCJvbkNsaWNrIiwidHlwZSIsIm9uQ2hhbmdlIiwic3R5bGUiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=