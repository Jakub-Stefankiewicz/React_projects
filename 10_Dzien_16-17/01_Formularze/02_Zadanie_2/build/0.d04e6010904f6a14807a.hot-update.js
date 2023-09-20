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
  _data_fakeAPI__WEBPACK_IMPORTED_MODULE_1__["default"].login({
    username: user.user,
    password: user.password
  }).then(function (user) {
    // pod zmienną user mamy dostęp do informacji o zalogowanym użytkowniku
  })["catch"](function (err) {
    // pod zmienną err mamy dostęp do informacji o błędzie
  });
  var handleSubmit = function handleSubmit(e) {
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
  }, verifyPassword(user.password)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "user: ", user.user, " has\u0142o :", user.password));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b440d617b51908e3c656")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNDLFFBQWEsQ0FDL0MsQ0FBQztBQUVkLENBQUM7QUFFRCxpRUFBZUgsSUFBSTs7Ozs7Ozs7VUM3RG5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTBfRHppZW5fMTYtMTcvMDFfRm9ybXVsYXJ6ZS8wMl9aYWRhbmllXzIvanMvRm9ybS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRmFrZUFQSSBmcm9tIFwiLi9kYXRhL2Zha2VBUElcIjtcblxuY29uc3QgRm9ybSA9ICgpID0+IHtcblxuICAgIGNvbnN0IFt1c2VyLCBzZXRVU2VyXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgdXNlcjogXCIgXCIsXG4gICAgICAgIHBhc3N3b3JkOiBcIiBcIlxuICAgIH0pXG5cbiAgICBGYWtlQVBJLmxvZ2luKHtcbiAgICAgICAgdXNlcm5hbWU6IHVzZXIudXNlcixcbiAgICAgICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmRcbiAgICB9KS50aGVuKHVzZXIgPT4ge1xuICAgICAgICAvLyBwb2Qgem1pZW5uxIUgdXNlciBtYW15IGRvc3TEmXAgZG8gaW5mb3JtYWNqaSBvIHphbG9nb3dhbnltIHXFvHl0a293bmlrdVxuICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIC8vIHBvZCB6bWllbm7EhSBlcnIgbWFteSBkb3N0xJlwIGRvIGluZm9ybWFjamkgbyBixYLEmWR6aWVcbiAgICB9KVxuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHtuYW1lLCB2YWx1ZX0gPSBlLnRhcmdldDtcbiAgICAgICAgc2V0VVNlcigocHJldlN0YXRlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgICAgICAgICBbbmFtZV06IHZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgdmVyaWZ5TG9naW4gPSAobG9naW4pID0+IHtcbiAgICAgICAgaWYgKGxvZ2luLmxlbmd0aCA8IDMpIHtcbiAgICAgICAgICAgIHJldHVybiBcIkxvZ2luIHphIGtyw7N0a2ksIG11c2kgbWllxIcgd2nEmWNlaiBuacW8IDIgem5ha2lcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgdmVyaWZ5UGFzc3dvcmQgPSAocGFzc3dvcmQpID0+IHtcbiAgICAgICAgaWYgKHBhc3N3b3JkLmxlbmd0aCA8IDUpIHtcbiAgICAgICAgICAgIHJldHVybiBcIkhhc8WCbyB6YSBrcsOzdGtpZSwgbXVzaSBtaWXEhyB3acSZY2VqIG5pxbwgNSB6bmFrw7N3XCJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8Zm9ybSBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgIExvZ2luOlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VyXCIgdmFsdWU9e3VzZXIudXNlcn0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0vPlxuICAgICAgICAgICAgICAgIEhhc8WCbzpcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicGFzc3dvcmRcIiB2YWx1ZT17dXNlci5wYXNzd29yZH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0vPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJXecWbbGlqXCIvPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjogXCJyZWRcIn19Pnt2ZXJpZnlMb2dpbih1c2VyLnVzZXIpfTwvcD5cbiAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6IFwicmVkXCJ9fT57dmVyaWZ5UGFzc3dvcmQodXNlci5wYXNzd29yZCl9PC9wPlxuICAgICAgICAgICAgPGgxPnVzZXI6IHt1c2VyLnVzZXJ9IGhhc8WCbyA6e3VzZXIucGFzc3dvcmR9PC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYjQ0MGQ2MTdiNTE5MDhlM2M2NTZcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkZha2VBUEkiLCJGb3JtIiwiX3VzZVN0YXRlIiwidXNlciIsInBhc3N3b3JkIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic2V0VVNlciIsImxvZ2luIiwidXNlcm5hbWUiLCJ0aGVuIiwiZXJyIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlQ2hhbmdlIiwiX2UkdGFyZ2V0IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwicHJldlN0YXRlIiwiX29iamVjdFNwcmVhZCIsIl9kZWZpbmVQcm9wZXJ0eSIsInZlcmlmeUxvZ2luIiwibGVuZ3RoIiwidmVyaWZ5UGFzc3dvcmQiLCJjcmVhdGVFbGVtZW50Iiwib25DbGljayIsInR5cGUiLCJvbkNoYW5nZSIsInN0eWxlIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9