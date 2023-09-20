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
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      sent: false,
      verified: false,
      user: {}
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    verification = _useState4[0],
    setVerification = _useState4[1];
  var handleSubmit = function handleSubmit(e) {
    _data_fakeAPI__WEBPACK_IMPORTED_MODULE_1__["default"].login({
      username: user.user,
      password: user.password
    }).then(function (user) {
      return user;
    })["catch"](function (err) {
      return err;
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
/******/ 	__webpack_require__.h = () => ("e3d2df2f0f5e801024ba")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLO0VBQUUsR0FBRVIsV0FBVyxDQUFDMUIsSUFBSSxDQUFDQSxJQUFJLENBQUssQ0FBQyxlQUN0REwsMERBQUE7SUFBR3NDLEtBQUssRUFBRTtNQUFDQyxLQUFLLEVBQUU7SUFBSztFQUFFLEdBQUVOLGNBQWMsQ0FBQzVCLElBQUksQ0FBQ0MsUUFBUSxDQUFLLENBQUMsZUFDN0ROLDBEQUFBLFdBQVEsQ0FDUCxDQUFDO0FBRWQsQ0FBQztBQUVELGlFQUFlRyxJQUFJOzs7Ozs7OztVQ2pFbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMF9Eemllbl8xNi0xNy8wMV9Gb3JtdWxhcnplLzAyX1phZGFuaWVfMi9qcy9Gb3JtLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGYWtlQVBJIGZyb20gXCIuL2RhdGEvZmFrZUFQSVwiO1xuXG5jb25zdCBGb3JtID0gKCkgPT4ge1xuXG4gICAgY29uc3QgW3VzZXIsIHNldFVTZXJdID0gdXNlU3RhdGUoe1xuICAgICAgICB1c2VyOiBcIiBcIixcbiAgICAgICAgcGFzc3dvcmQ6IFwiIFwiXG4gICAgfSk7XG4gICAgY29uc3QgW3ZlcmlmaWNhdGlvbiwgc2V0VmVyaWZpY2F0aW9uXT11c2VTdGF0ZSh7XG4gICAgICAgIHNlbnQ6ZmFsc2UsXG4gICAgICAgIHZlcmlmaWVkOmZhbHNlLFxuICAgICAgICB1c2VyOiB7fVxuICAgIH0pO1xuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICAgICAgRmFrZUFQSS5sb2dpbih7XG4gICAgICAgICAgICB1c2VybmFtZTogdXNlci51c2VyLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmRcbiAgICAgICAgfSkudGhlbih1c2VyID0+IHtcbiAgICAgICAgICAgIHJldHVybiB1c2VyO1xuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGVycjtcbiAgICAgICAgfSk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCB7bmFtZSwgdmFsdWV9ID0gZS50YXJnZXQ7XG4gICAgICAgIHNldFVTZXIoKHByZXZTdGF0ZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgICAgICAgICAgW25hbWVdOiB2YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHZlcmlmeUxvZ2luID0gKGxvZ2luKSA9PiB7XG4gICAgICAgIGlmIChsb2dpbi5sZW5ndGggPCAzKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJMb2dpbiB6YSBrcsOzdGtpLCBtdXNpIG1pZcSHIHdpxJljZWogbmnFvCAyIHpuYWtpXCJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHZlcmlmeVBhc3N3b3JkID0gKHBhc3N3b3JkKSA9PiB7XG4gICAgICAgIGlmIChwYXNzd29yZC5sZW5ndGggPCA1KSB7XG4gICAgICAgICAgICByZXR1cm4gXCJIYXPFgm8gemEga3LDs3RraWUsIG11c2kgbWllxIcgd2nEmWNlaiBuacW8IDUgem5ha8Ozd1wiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGZvcm0gb25DbGljaz17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICBMb2dpbjpcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlclwiIHZhbHVlPXt1c2VyLnVzZXJ9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9Lz5cbiAgICAgICAgICAgICAgICBIYXPFgm86XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBhc3N3b3JkXCIgdmFsdWU9e3VzZXIucGFzc3dvcmR9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9Lz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiV3nFm2xpalwiLz5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6IFwicmVkXCJ9fT57dmVyaWZ5TG9naW4odXNlci51c2VyKX08L3A+XG4gICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOiBcInJlZFwifX0+e3ZlcmlmeVBhc3N3b3JkKHVzZXIucGFzc3dvcmQpfTwvcD5cbiAgICAgICAgICAgIDxoMT48L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlM2QyZGYyZjBmNWU4MDEwMjRiYVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRmFrZUFQSSIsIkZvcm0iLCJfdXNlU3RhdGUiLCJ1c2VyIiwicGFzc3dvcmQiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJzZXRVU2VyIiwiX3VzZVN0YXRlMyIsInNlbnQiLCJ2ZXJpZmllZCIsIl91c2VTdGF0ZTQiLCJ2ZXJpZmljYXRpb24iLCJzZXRWZXJpZmljYXRpb24iLCJoYW5kbGVTdWJtaXQiLCJlIiwibG9naW4iLCJ1c2VybmFtZSIsInRoZW4iLCJlcnIiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUNoYW5nZSIsIl9lJHRhcmdldCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInByZXZTdGF0ZSIsIl9vYmplY3RTcHJlYWQiLCJfZGVmaW5lUHJvcGVydHkiLCJ2ZXJpZnlMb2dpbiIsImxlbmd0aCIsInZlcmlmeVBhc3N3b3JkIiwiY3JlYXRlRWxlbWVudCIsIm9uQ2xpY2siLCJ0eXBlIiwib25DaGFuZ2UiLCJzdHlsZSIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==