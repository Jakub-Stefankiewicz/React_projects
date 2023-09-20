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
    type: "text",
    value: user.user,
    onChange: function onChange(e) {
      return e.target.value;
    }
  }), "Has\u0142o:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    value: user.password,
    onChange: function onChange(e) {
      return e.target.value;
    }
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
/******/ 	__webpack_require__.h = () => ("d956eff610c6bb6fe43b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lMWI3Y2IzMmI1NTUyNmRjOGU3Ni5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDRDtBQUVyQyxJQUFNRyxJQUFJLEdBQUcsU0FBUEEsSUFBSUEsQ0FBQSxFQUFTO0VBRWYsSUFBQUMsU0FBQSxHQUFzQkgsK0NBQVEsQ0FBQztNQUMzQkksSUFBSSxFQUFFLEdBQUc7TUFDVEMsUUFBUSxFQUFFO0lBQ2QsQ0FBQyxDQUFDO0lBQUFDLFVBQUEsR0FBQUMsY0FBQSxDQUFBSixTQUFBO0lBSEtDLElBQUksR0FBQUUsVUFBQTtJQUFFRSxPQUFPLEdBQUFGLFVBQUE7RUFLcEJMLDJEQUFhLENBQUM7SUFDVlMsUUFBUSxFQUFFTixJQUFJLENBQUNBLElBQUk7SUFDbkJDLFFBQVEsRUFBRUQsSUFBSSxDQUFDQztFQUNuQixDQUFDLENBQUMsQ0FBQ00sSUFBSSxDQUFDLFVBQUFQLElBQUksRUFBSTtJQUNaO0VBQUEsQ0FDSCxDQUFDLFNBQU0sQ0FBQyxVQUFBUSxHQUFHLEVBQUk7SUFDWjtFQUFBLENBQ0gsQ0FBQztFQUdGLG9CQUNJYiwwREFBQSwyQkFDSUEsMERBQUEsZUFBTSxRQUVGLGVBQUFBLDBEQUFBO0lBQU9lLElBQUksRUFBQyxNQUFNO0lBQUNDLEtBQUssRUFBRVgsSUFBSSxDQUFDQSxJQUFLO0lBQUNZLFFBQVEsRUFBRSxTQUFBQSxTQUFDQyxDQUFDO01BQUEsT0FBR0EsQ0FBQyxDQUFDQyxNQUFNLENBQUNILEtBQUs7SUFBQTtFQUFDLENBQUMsQ0FBQyxlQUVyRSxlQUFBaEIsMERBQUE7SUFBT2UsSUFBSSxFQUFDLE1BQU07SUFBQ0MsS0FBSyxFQUFFWCxJQUFJLENBQUNDLFFBQVM7SUFBQ1csUUFBUSxFQUFFLFNBQUFBLFNBQUNDLENBQUM7TUFBQSxPQUFHQSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0gsS0FBSztJQUFBO0VBQUMsQ0FBQyxDQUFDLGVBQ3pFaEIsMERBQUE7SUFBT2UsSUFBSSxFQUFDLFFBQVE7SUFBQ0MsS0FBSyxFQUFDO0VBQVEsQ0FBQyxDQUNsQyxDQUVMLENBQUM7QUFFZCxDQUFDO0FBRUQsaUVBQWViLElBQUk7Ozs7Ozs7O1VDbENuQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzEwX0R6aWVuXzE2LTE3LzAxX0Zvcm11bGFyemUvMDJfWmFkYW5pZV8yL2pzL0Zvcm0uanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZha2VBUEkgZnJvbSBcIi4vZGF0YS9mYWtlQVBJXCI7XG5cbmNvbnN0IEZvcm0gPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbdXNlciwgc2V0VVNlcl09dXNlU3RhdGUoe1xuICAgICAgICB1c2VyOiBcIiBcIixcbiAgICAgICAgcGFzc3dvcmQ6IFwiXCJcbiAgICB9KVxuXG4gICAgRmFrZUFQSS5sb2dpbih7XG4gICAgICAgIHVzZXJuYW1lOiB1c2VyLnVzZXIsXG4gICAgICAgIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkXG4gICAgfSkudGhlbih1c2VyID0+IHtcbiAgICAgICAgLy8gcG9kIHptaWVubsSFIHVzZXIgbWFteSBkb3N0xJlwIGRvIGluZm9ybWFjamkgbyB6YWxvZ293YW55bSB1xbx5dGtvd25pa3VcbiAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAvLyBwb2Qgem1pZW5uxIUgZXJyIG1hbXkgZG9zdMSZcCBkbyBpbmZvcm1hY2ppIG8gYsWCxJlkemllXG4gICAgfSlcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgIExvZ2luOlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt1c2VyLnVzZXJ9IG9uQ2hhbmdlPXsoZSk9PmUudGFyZ2V0LnZhbHVlfS8+XG4gICAgICAgICAgICAgICAgSGFzxYJvOlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt1c2VyLnBhc3N3b3JkfSBvbkNoYW5nZT17KGUpPT5lLnRhcmdldC52YWx1ZX0vPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJXecWbbGlqXCIvPlxuICAgICAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImQ5NTZlZmY2MTBjNmJiNmZlNDNiXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJGYWtlQVBJIiwiRm9ybSIsIl91c2VTdGF0ZSIsInVzZXIiLCJwYXNzd29yZCIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInNldFVTZXIiLCJsb2dpbiIsInVzZXJuYW1lIiwidGhlbiIsImVyciIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9