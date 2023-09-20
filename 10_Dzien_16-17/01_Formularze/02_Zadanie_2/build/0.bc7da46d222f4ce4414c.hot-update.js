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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f5f7dc16c4a7bc0f6e75")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iYzdkYTQ2ZDIyMmY0Y2U0NDE0Yy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDRDtBQUVyQyxJQUFNRyxJQUFJLEdBQUcsU0FBUEEsSUFBSUEsQ0FBQSxFQUFTO0VBRWYsSUFBQUMsU0FBQSxHQUFzQkgsK0NBQVEsQ0FBQztNQUMzQkksSUFBSSxFQUFFLEdBQUc7TUFDVEMsUUFBUSxFQUFFO0lBQ2QsQ0FBQyxDQUFDO0lBQUFDLFVBQUEsR0FBQUMsY0FBQSxDQUFBSixTQUFBO0lBSEtDLElBQUksR0FBQUUsVUFBQTtJQUFFRSxPQUFPLEdBQUFGLFVBQUE7RUFLcEJMLDJEQUFhLENBQUM7SUFDVlMsUUFBUSxFQUFFTixJQUFJLENBQUNBLElBQUk7SUFDbkJDLFFBQVEsRUFBRUQsSUFBSSxDQUFDQztFQUNuQixDQUFDLENBQUMsQ0FBQ00sSUFBSSxDQUFDLFVBQUFQLElBQUksRUFBSTtJQUNaO0VBQUEsQ0FDSCxDQUFDLFNBQU0sQ0FBQyxVQUFBUSxHQUFHLEVBQUk7SUFDWjtFQUFBLENBQ0gsQ0FBQztFQUdGLG9CQUNJYiwwREFBQSwyQkFDSUEsMERBQUEsNEJBQ0lBLDBEQUFBLGNBQU8sQ0FBQyxlQUNSQSwwREFBQSxjQUFPLENBQUMsZUFDUkEsMERBQUEsY0FBTyxDQUNMLENBRUwsQ0FBQztBQUVkLENBQUM7QUFFRCxpRUFBZUcsSUFBSTs7Ozs7Ozs7VUNoQ25CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTBfRHppZW5fMTYtMTcvMDFfRm9ybXVsYXJ6ZS8wMl9aYWRhbmllXzIvanMvRm9ybS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRmFrZUFQSSBmcm9tIFwiLi9kYXRhL2Zha2VBUElcIjtcblxuY29uc3QgRm9ybSA9ICgpID0+IHtcblxuICAgIGNvbnN0IFt1c2VyLCBzZXRVU2VyXT11c2VTdGF0ZSh7XG4gICAgICAgIHVzZXI6IFwiIFwiLFxuICAgICAgICBwYXNzd29yZDogXCJcIlxuICAgIH0pXG5cbiAgICBGYWtlQVBJLmxvZ2luKHtcbiAgICAgICAgdXNlcm5hbWU6IHVzZXIudXNlcixcbiAgICAgICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmRcbiAgICB9KS50aGVuKHVzZXIgPT4ge1xuICAgICAgICAvLyBwb2Qgem1pZW5uxIUgdXNlciBtYW15IGRvc3TEmXAgZG8gaW5mb3JtYWNqaSBvIHphbG9nb3dhbnltIHXFvHl0a293bmlrdVxuICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIC8vIHBvZCB6bWllbm7EhSBlcnIgbWFteSBkb3N0xJlwIGRvIGluZm9ybWFjamkgbyBixYLEmWR6aWVcbiAgICB9KVxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgPGlucHV0Lz5cbiAgICAgICAgICAgICAgICA8aW5wdXQvPlxuICAgICAgICAgICAgICAgIDxpbnB1dC8+XG4gICAgICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZjVmN2RjMTZjNGE3YmMwZjZlNzVcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkZha2VBUEkiLCJGb3JtIiwiX3VzZVN0YXRlIiwidXNlciIsInBhc3N3b3JkIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic2V0VVNlciIsImxvZ2luIiwidXNlcm5hbWUiLCJ0aGVuIiwiZXJyIiwiY3JlYXRlRWxlbWVudCJdLCJzb3VyY2VSb290IjoiIn0=