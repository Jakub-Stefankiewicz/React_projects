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
      setVerification(verification.user = user);
      console.log(user);
    })["catch"](function (err) {
      setVerification(verification.user = err);
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
  }, verifyPassword(user.password)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, _typeof(verification.user) === "object" ? "jest dobrze" : "jest źle"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0bcbf79105b2dc5c2bd1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxRQUFTO0lBQUNpQyxRQUFRLEVBQUVkO0VBQWEsQ0FBQyxDQUFDLGVBQ2xGekIsMERBQUE7SUFBT3NDLElBQUksRUFBQyxRQUFRO0lBQUNULEtBQUssRUFBQztFQUFRLENBQUMsQ0FDbEMsQ0FBQyxlQUNQN0IsMERBQUE7SUFBR3dDLEtBQUssRUFBRTtNQUFDQyxLQUFLLEVBQUU7SUFBSztFQUFFLEdBQUVSLFdBQVcsQ0FBQzVCLElBQUksQ0FBQ0EsSUFBSSxDQUFLLENBQUMsZUFDdERMLDBEQUFBO0lBQUd3QyxLQUFLLEVBQUU7TUFBQ0MsS0FBSyxFQUFFO0lBQUs7RUFBRSxHQUFFTixjQUFjLENBQUM5QixJQUFJLENBQUNDLFFBQVEsQ0FBSyxDQUFDLGVBQzdETiwwREFBQSxhQUFLMEMsT0FBQSxDQUFPNUIsWUFBWSxDQUFDVCxJQUFJLE1BQUcsUUFBUSxHQUFHLGFBQWEsR0FBRyxVQUFlLENBQ3pFLENBQUM7QUFFZCxDQUFDO0FBRUQsaUVBQWVGLElBQUk7Ozs7Ozs7O1VDckVuQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzEwX0R6aWVuXzE2LTE3LzAxX0Zvcm11bGFyemUvMDJfWmFkYW5pZV8yL2pzL0Zvcm0uanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZha2VBUEkgZnJvbSBcIi4vZGF0YS9mYWtlQVBJXCI7XG5cbmNvbnN0IEZvcm0gPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbdXNlciwgc2V0VVNlcl0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIHVzZXI6IFwiIFwiLFxuICAgICAgICBwYXNzd29yZDogXCIgXCJcbiAgICB9KTtcbiAgICBjb25zdCBbdmVyaWZpY2F0aW9uLCBzZXRWZXJpZmljYXRpb25dPXVzZVN0YXRlKHtcbiAgICAgICAgc2VudDpmYWxzZSxcbiAgICAgICAgdmVyaWZpZWQ6ZmFsc2UsXG4gICAgICAgIHVzZXI6IHt9XG4gICAgfSk7XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgICAgICBGYWtlQVBJLmxvZ2luKHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VyLnVzZXIsXG4gICAgICAgICAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZFxuICAgICAgICB9KS50aGVuKHVzZXIgPT4ge1xuICAgICAgICAgICAgLy8gcmV0dXJuIHVzZXI7XG4gICAgICAgICAgICBzZXRWZXJpZmljYXRpb24odmVyaWZpY2F0aW9uLnVzZXI9dXNlcik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyKTtcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIHNldFZlcmlmaWNhdGlvbih2ZXJpZmljYXRpb24udXNlcj1lcnIpO1xuICAgICAgICAgICAgLy8gcmV0dXJuIGVycjtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH0pO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgY29uc3Qge25hbWUsIHZhbHVlfSA9IGUudGFyZ2V0O1xuICAgICAgICBzZXRVU2VyKChwcmV2U3RhdGUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICAgICAgICAgIFtuYW1lXTogdmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCB2ZXJpZnlMb2dpbiA9IChsb2dpbikgPT4ge1xuICAgICAgICBpZiAobG9naW4ubGVuZ3RoIDwgMykge1xuICAgICAgICAgICAgcmV0dXJuIFwiTG9naW4gemEga3LDs3RraSwgbXVzaSBtaWXEhyB3acSZY2VqIG5pxbwgMiB6bmFraVwiXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB2ZXJpZnlQYXNzd29yZCA9IChwYXNzd29yZCkgPT4ge1xuICAgICAgICBpZiAocGFzc3dvcmQubGVuZ3RoIDwgNSkge1xuICAgICAgICAgICAgcmV0dXJuIFwiSGFzxYJvIHphIGtyw7N0a2llLCBtdXNpIG1pZcSHIHdpxJljZWogbmnFvCA1IHpuYWvDs3dcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxmb3JtIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgTG9naW46XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJcIiB2YWx1ZT17dXNlci51c2VyfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgSGFzxYJvOlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJwYXNzd29yZFwiIHZhbHVlPXt1c2VyLnBhc3N3b3JkfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIld5xZtsaWpcIi8+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOiBcInJlZFwifX0+e3ZlcmlmeUxvZ2luKHVzZXIudXNlcil9PC9wPlxuICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjogXCJyZWRcIn19Pnt2ZXJpZnlQYXNzd29yZCh1c2VyLnBhc3N3b3JkKX08L3A+XG4gICAgICAgICAgICA8aDE+e3R5cGVvZiB2ZXJpZmljYXRpb24udXNlcj09PVwib2JqZWN0XCIgPyBcImplc3QgZG9icnplXCIgOiBcImplc3QgxbpsZVwifTwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjBiY2JmNzkxMDViMmRjNWMyYmQxXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJGYWtlQVBJIiwiRm9ybSIsIl91c2VTdGF0ZSIsInVzZXIiLCJwYXNzd29yZCIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInNldFVTZXIiLCJfdXNlU3RhdGUzIiwic2VudCIsInZlcmlmaWVkIiwiX3VzZVN0YXRlNCIsInZlcmlmaWNhdGlvbiIsInNldFZlcmlmaWNhdGlvbiIsImhhbmRsZVN1Ym1pdCIsImUiLCJsb2dpbiIsInVzZXJuYW1lIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUNoYW5nZSIsIl9lJHRhcmdldCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInByZXZTdGF0ZSIsIl9vYmplY3RTcHJlYWQiLCJfZGVmaW5lUHJvcGVydHkiLCJ2ZXJpZnlMb2dpbiIsImxlbmd0aCIsInZlcmlmeVBhc3N3b3JkIiwiY3JlYXRlRWxlbWVudCIsIm9uQ2xpY2siLCJ0eXBlIiwib25DaGFuZ2UiLCJzdHlsZSIsImNvbG9yIiwiX3R5cGVvZiJdLCJzb3VyY2VSb290IjoiIn0=