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
/* harmony import */ var _AdultStuffBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var _useInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var _useInput = (0,_useInput__WEBPACK_IMPORTED_MODULE_2__["default"])(0),
  _useInput2 = _slicedToArray(_useInput, 2),
  age = _useInput2[0],
  setAge = _useInput2[1];
var AdultStuff = function AdultStuff() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
    type: "number"
  }, setAge))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, age), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AdultStuffBox__WEBPACK_IMPORTED_MODULE_1__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdultStuff);

/***/ }),

/***/ 36:
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
/******/ 	__webpack_require__.h = () => ("0c0bd873307766993e5e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zMGI2NmJjN2U3YzdhNzY5MzU2ZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNrQjtBQUNWO0FBRWxDLElBQUFHLFNBQUEsR0FBb0JELHFEQUFRLENBQUMsQ0FBQyxDQUFDO0VBQUFFLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0VBQXhCRyxHQUFHLEdBQUFGLFVBQUE7RUFBRUcsTUFBTSxHQUFBSCxVQUFBO0FBQ2xCLElBQU1JLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFBLEVBQVM7RUFFckIsb0JBQ0lSLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNJQSwwREFBQSw0QkFDSUEsMERBQUEsVUFBQVcsUUFBQTtJQUFPQyxJQUFJLEVBQUM7RUFBUSxHQUFLTCxNQUFNLENBQUUsQ0FDL0IsQ0FBQyxlQUNQUCwwREFBQSxjQUFNTSxHQUFTLENBQUMsZUFDaEJOLDBEQUFBLENBQUNDLHNEQUFhLE1BQUMsQ0FDakIsQ0FBQztBQUVYLENBQUM7QUFFRCxpRUFBZU8sVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCYTtBQUV0QyxJQUFNTSxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBSUMsWUFBWSxFQUFLO0VBQy9CLElBQUFDLFNBQUEsR0FBdUJILCtDQUFRLENBQUNFLFlBQVksQ0FBQztJQUFBRSxVQUFBLEdBQUFaLGNBQUEsQ0FBQVcsU0FBQTtJQUF2Q0UsS0FBSyxHQUFBRCxVQUFBO0lBQUVFLFFBQVEsR0FBQUYsVUFBQTtFQUNyQixPQUFPLENBQ0NDLEtBQUssRUFDVDtJQUNJQSxLQUFLLEVBQUxBLEtBQUs7SUFDTEUsUUFBUSxFQUFFLFNBQUFBLFNBQUFDLENBQUMsRUFBSTtNQUNYRixRQUFRLENBQUNFLENBQUMsQ0FBQ0MsTUFBTSxDQUFDSixLQUFLLENBQUM7SUFDNUI7RUFDSixDQUFDLENBQ0E7QUFFVCxDQUFDO0FBRUQsaUVBQWVKLFFBQVE7Ozs7Ozs7O1VDaEJ2QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LzAyX0Zvcm11bGFyemVfLV9jaWFnX2RhbHN6eV96YWRhbi8wMl9aYWRhbmllXzIvanMvQWR1bHRTdHVmZi5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC8wMl9Gb3JtdWxhcnplXy1fY2lhZ19kYWxzenlfemFkYW4vMDJfWmFkYW5pZV8yL2pzL3VzZUlucHV0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBZHVsdFN0dWZmQm94IGZyb20gXCIuL0FkdWx0U3R1ZmZCb3hcIjtcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiLi91c2VJbnB1dFwiO1xuXG5jb25zdCBbYWdlLCBzZXRBZ2VdPXVzZUlucHV0KDApXG5jb25zdCBBZHVsdFN0dWZmID0gKCkgPT4ge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgey4uLnNldEFnZX0vPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPGRpdj57YWdlfTwvZGl2PlxuICAgICAgICAgICAgPEFkdWx0U3R1ZmZCb3gvPlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWR1bHRTdHVmZjsiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBVc2VJbnB1dCA9ICh2YWx1ZU9uU3RhcnQpID0+IHtcbiAgICBjb25zdFt2YWx1ZSwgc2V0VmFsdWVdPXVzZVN0YXRlKHZhbHVlT25TdGFydCk7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICB7XG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIG9uQ2hhbmdlOiBlID0+IHtcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBdXG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVzZUlucHV0OyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjBjMGJkODczMzA3NzY2OTkzZTVlXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiQWR1bHRTdHVmZkJveCIsInVzZUlucHV0IiwiX3VzZUlucHV0IiwiX3VzZUlucHV0MiIsIl9zbGljZWRUb0FycmF5IiwiYWdlIiwic2V0QWdlIiwiQWR1bHRTdHVmZiIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIl9leHRlbmRzIiwidHlwZSIsInVzZVN0YXRlIiwiVXNlSW5wdXQiLCJ2YWx1ZU9uU3RhcnQiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwidmFsdWUiLCJzZXRWYWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=