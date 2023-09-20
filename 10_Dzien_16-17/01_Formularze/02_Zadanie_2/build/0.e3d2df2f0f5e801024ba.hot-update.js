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
      // return user;
      console.log(user);
    })["catch"](function (err) {
      // return err;
      console.log(err);
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
/******/ 	__webpack_require__.h = () => ("ce8ab2fe46fd8907cfc1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQ2xDLENBQUMsZUFDUDdCLDBEQUFBO0lBQUd3QyxLQUFLLEVBQUU7TUFBQ0MsS0FBSyxFQUFFO0lBQUs7RUFBRSxHQUFFUixXQUFXLENBQUM1QixJQUFJLENBQUNBLElBQUksQ0FBSyxDQUFDLGVBQ3RETCwwREFBQTtJQUFHd0MsS0FBSyxFQUFFO01BQUNDLEtBQUssRUFBRTtJQUFLO0VBQUUsR0FBRU4sY0FBYyxDQUFDOUIsSUFBSSxDQUFDQyxRQUFRLENBQUssQ0FBQyxlQUM3RE4sMERBQUEsV0FBUSxDQUNQLENBQUM7QUFFZCxDQUFDO0FBRUQsaUVBQWVHLElBQUk7Ozs7Ozs7O1VDbkVuQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzEwX0R6aWVuXzE2LTE3LzAxX0Zvcm11bGFyemUvMDJfWmFkYW5pZV8yL2pzL0Zvcm0uanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZha2VBUEkgZnJvbSBcIi4vZGF0YS9mYWtlQVBJXCI7XG5cbmNvbnN0IEZvcm0gPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbdXNlciwgc2V0VVNlcl0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIHVzZXI6IFwiIFwiLFxuICAgICAgICBwYXNzd29yZDogXCIgXCJcbiAgICB9KTtcbiAgICBjb25zdCBbdmVyaWZpY2F0aW9uLCBzZXRWZXJpZmljYXRpb25dPXVzZVN0YXRlKHtcbiAgICAgICAgc2VudDpmYWxzZSxcbiAgICAgICAgdmVyaWZpZWQ6ZmFsc2UsXG4gICAgICAgIHVzZXI6IHt9XG4gICAgfSk7XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgICAgICBGYWtlQVBJLmxvZ2luKHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VyLnVzZXIsXG4gICAgICAgICAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZFxuICAgICAgICB9KS50aGVuKHVzZXIgPT4ge1xuICAgICAgICAgICAgLy8gcmV0dXJuIHVzZXI7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyKTtcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIC8vIHJldHVybiBlcnI7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9KTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHtuYW1lLCB2YWx1ZX0gPSBlLnRhcmdldDtcbiAgICAgICAgc2V0VVNlcigocHJldlN0YXRlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgICAgICAgICBbbmFtZV06IHZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgdmVyaWZ5TG9naW4gPSAobG9naW4pID0+IHtcbiAgICAgICAgaWYgKGxvZ2luLmxlbmd0aCA8IDMpIHtcbiAgICAgICAgICAgIHJldHVybiBcIkxvZ2luIHphIGtyw7N0a2ksIG11c2kgbWllxIcgd2nEmWNlaiBuacW8IDIgem5ha2lcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgdmVyaWZ5UGFzc3dvcmQgPSAocGFzc3dvcmQpID0+IHtcbiAgICAgICAgaWYgKHBhc3N3b3JkLmxlbmd0aCA8IDUpIHtcbiAgICAgICAgICAgIHJldHVybiBcIkhhc8WCbyB6YSBrcsOzdGtpZSwgbXVzaSBtaWXEhyB3acSZY2VqIG5pxbwgNSB6bmFrw7N3XCJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8Zm9ybSBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgIExvZ2luOlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VyXCIgdmFsdWU9e3VzZXIudXNlcn0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0vPlxuICAgICAgICAgICAgICAgIEhhc8WCbzpcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicGFzc3dvcmRcIiB2YWx1ZT17dXNlci5wYXNzd29yZH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0vPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJXecWbbGlqXCIvPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjogXCJyZWRcIn19Pnt2ZXJpZnlMb2dpbih1c2VyLnVzZXIpfTwvcD5cbiAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6IFwicmVkXCJ9fT57dmVyaWZ5UGFzc3dvcmQodXNlci5wYXNzd29yZCl9PC9wPlxuICAgICAgICAgICAgPGgxPjwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImNlOGFiMmZlNDZmZDg5MDdjZmMxXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJGYWtlQVBJIiwiRm9ybSIsIl91c2VTdGF0ZSIsInVzZXIiLCJwYXNzd29yZCIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInNldFVTZXIiLCJfdXNlU3RhdGUzIiwic2VudCIsInZlcmlmaWVkIiwiX3VzZVN0YXRlNCIsInZlcmlmaWNhdGlvbiIsInNldFZlcmlmaWNhdGlvbiIsImhhbmRsZVN1Ym1pdCIsImUiLCJsb2dpbiIsInVzZXJuYW1lIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUNoYW5nZSIsIl9lJHRhcmdldCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInByZXZTdGF0ZSIsIl9vYmplY3RTcHJlYWQiLCJfZGVmaW5lUHJvcGVydHkiLCJ2ZXJpZnlMb2dpbiIsImxlbmd0aCIsInZlcmlmeVBhc3N3b3JkIiwiY3JlYXRlRWxlbWVudCIsIm9uQ2xpY2siLCJ0eXBlIiwib25DaGFuZ2UiLCJzdHlsZSIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==