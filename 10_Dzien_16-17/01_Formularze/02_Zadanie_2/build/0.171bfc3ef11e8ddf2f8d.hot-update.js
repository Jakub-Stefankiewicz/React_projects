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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var Form = function Form() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      user: " ",
      password: ""
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, "Login:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text"
  }), "Has\u0142o:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "submit",
    value: "Wy\u015Blij"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e1b7cb32b55526dc8e76")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xNzFiZmMzZWYxMWU4ZGRmMmY4ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDRDtBQUVyQyxJQUFNRyxJQUFJLEdBQUcsU0FBUEEsSUFBSUEsQ0FBQSxFQUFTO0VBRWYsSUFBQUMsU0FBQSxHQUFzQkgsK0NBQVEsQ0FBQztNQUMzQkksSUFBSSxFQUFFLEdBQUc7TUFDVEMsUUFBUSxFQUFFO0lBQ2QsQ0FBQyxDQUFDO0lBQUFDLFVBQUEsR0FBQUMsY0FBQSxDQUFBSixTQUFBO0lBSEtDLElBQUksR0FBQUUsVUFBQTtJQUFFRSxPQUFPLEdBQUFGLFVBQUE7RUFLcEJMLDJEQUFhLENBQUM7SUFDVlMsUUFBUSxFQUFFTixJQUFJLENBQUNBLElBQUk7SUFDbkJDLFFBQVEsRUFBRUQsSUFBSSxDQUFDQztFQUNuQixDQUFDLENBQUMsQ0FBQ00sSUFBSSxDQUFDLFVBQUFQLElBQUksRUFBSTtJQUNaO0VBQUEsQ0FDSCxDQUFDLFNBQU0sQ0FBQyxVQUFBUSxHQUFHLEVBQUk7SUFDWjtFQUFBLENBQ0gsQ0FBQztFQUdGLG9CQUNJYiwwREFBQSwyQkFDSUEsMERBQUEsZUFBTSxRQUVGLGVBQUFBLDBEQUFBO0lBQU9lLElBQUksRUFBQztFQUFNLENBQUMsQ0FBQyxlQUVwQixlQUFBZiwwREFBQTtJQUFPZSxJQUFJLEVBQUM7RUFBTSxDQUFDLENBQUMsZUFDcEJmLDBEQUFBO0lBQU9lLElBQUksRUFBQyxRQUFRO0lBQUNDLEtBQUssRUFBQztFQUFRLENBQUMsQ0FDbEMsQ0FFTCxDQUFDO0FBRWQsQ0FBQztBQUVELGlFQUFlYixJQUFJOzs7Ozs7OztVQ2xDbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMF9Eemllbl8xNi0xNy8wMV9Gb3JtdWxhcnplLzAyX1phZGFuaWVfMi9qcy9Gb3JtLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGYWtlQVBJIGZyb20gXCIuL2RhdGEvZmFrZUFQSVwiO1xuXG5jb25zdCBGb3JtID0gKCkgPT4ge1xuXG4gICAgY29uc3QgW3VzZXIsIHNldFVTZXJdPXVzZVN0YXRlKHtcbiAgICAgICAgdXNlcjogXCIgXCIsXG4gICAgICAgIHBhc3N3b3JkOiBcIlwiXG4gICAgfSlcblxuICAgIEZha2VBUEkubG9naW4oe1xuICAgICAgICB1c2VybmFtZTogdXNlci51c2VyLFxuICAgICAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZFxuICAgIH0pLnRoZW4odXNlciA9PiB7XG4gICAgICAgIC8vIHBvZCB6bWllbm7EhSB1c2VyIG1hbXkgZG9zdMSZcCBkbyBpbmZvcm1hY2ppIG8gemFsb2dvd2FueW0gdcW8eXRrb3duaWt1XG4gICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgLy8gcG9kIHptaWVubsSFIGVyciBtYW15IGRvc3TEmXAgZG8gaW5mb3JtYWNqaSBvIGLFgsSZZHppZVxuICAgIH0pXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICBMb2dpbjpcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIi8+XG4gICAgICAgICAgICAgICAgSGFzxYJvOlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiV3nFm2xpalwiLz5cbiAgICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlMWI3Y2IzMmI1NTUyNmRjOGU3NlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRmFrZUFQSSIsIkZvcm0iLCJfdXNlU3RhdGUiLCJ1c2VyIiwicGFzc3dvcmQiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJzZXRVU2VyIiwibG9naW4iLCJ1c2VybmFtZSIsInRoZW4iLCJlcnIiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==