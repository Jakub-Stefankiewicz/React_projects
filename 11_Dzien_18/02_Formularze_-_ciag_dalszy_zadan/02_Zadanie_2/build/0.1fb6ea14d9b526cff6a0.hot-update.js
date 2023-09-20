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



var AdultStuff = function AdultStuff() {
  var _useInput = (0,_useInput__WEBPACK_IMPORTED_MODULE_2__["default"])(0),
    _useInput2 = _slicedToArray(_useInput, 2),
    age = _useInput2[0],
    setAge = _useInput2[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
    type: "number"
  }, setAge))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, age), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AdultStuffBox__WEBPACK_IMPORTED_MODULE_1__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdultStuff);

/***/ }),

/***/ 35:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var AdultStuffBox = function AdultStuffBox(_ref) {
  var age = _ref.age;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdultStuffBox);

/***/ }),

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33);
/* harmony import */ var _AdultStuff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34);




var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AdultStuff__WEBPACK_IMPORTED_MODULE_3__["default"], null);
};
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

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
/******/ 	__webpack_require__.h = () => ("d2f8456ce3b5a5a6f653")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xZmI2ZWExNGQ5YjUyNmNmZjZhMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNrQjtBQUNWO0FBR2xDLElBQU1HLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFBLEVBQVM7RUFFckIsSUFBQUMsU0FBQSxHQUFzQkYscURBQVEsQ0FBQyxDQUFDLENBQUM7SUFBQUcsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBMUJHLEdBQUcsR0FBQUYsVUFBQTtJQUFFRyxNQUFNLEdBQUFILFVBQUE7RUFDbEIsb0JBQ0lMLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNJQSwwREFBQSw0QkFDSUEsMERBQUEsVUFBQVcsUUFBQTtJQUFPQyxJQUFJLEVBQUM7RUFBUSxHQUFLSixNQUFNLENBQUUsQ0FDL0IsQ0FBQyxlQUNQUiwwREFBQSxjQUFNTyxHQUFTLENBQUMsZUFDaEJQLDBEQUFBLENBQUNDLHNEQUFhLE1BQUMsQ0FDakIsQ0FBQztBQUVYLENBQUM7QUFFRCxpRUFBZUUsVUFBVTs7Ozs7Ozs7Ozs7OztBQ25CQztBQUUxQixJQUFNRixhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUFZLElBQUEsRUFBYztFQUFBLElBQVROLEdBQUcsR0FBQU0sSUFBQSxDQUFITixHQUFHO0VBQ3ZCLG9CQUNJUCwwREFBQSxZQUVLLENBQUM7QUFFZCxDQUFDO0FBRUQsaUVBQWVDLGFBQWE7Ozs7Ozs7Ozs7Ozs7QUNWVztBQUNOO0FBQ1c7QUFDTjtBQUV0QyxJQUFNZ0IsR0FBRyxHQUFHLFNBQU5BLEdBQUdBLENBQUE7RUFBQSxvQkFBU2pCLDBEQUFBLENBQUNHLG1EQUFVLE1BQUMsQ0FBQztBQUFBO0FBQy9CLElBQU1lLFNBQVMsR0FBQ0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQzlDLElBQU1DLElBQUksR0FBR0wsNERBQVUsQ0FBQ0UsU0FBUyxDQUFDO0FBQ2xDRyxJQUFJLENBQUNDLE1BQU0sZUFBQ3RCLDBEQUFBLENBQUNpQixHQUFHLE1BQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUm1CO0FBRXRDLElBQU1PLFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFJQyxZQUFZLEVBQUs7RUFDL0IsSUFBQUMsU0FBQSxHQUF1QkgsK0NBQVEsQ0FBQ0UsWUFBWSxDQUFDO0lBQUFFLFVBQUEsR0FBQXJCLGNBQUEsQ0FBQW9CLFNBQUE7SUFBdkNFLEtBQUssR0FBQUQsVUFBQTtJQUFFRSxRQUFRLEdBQUFGLFVBQUE7RUFDckIsT0FBTyxDQUNDQyxLQUFLLEVBQ1Q7SUFDSUEsS0FBSyxFQUFMQSxLQUFLO0lBQ0xFLFFBQVEsRUFBRSxTQUFBQSxTQUFBQyxDQUFDLEVBQUk7TUFDWEYsUUFBUSxDQUFDRSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0osS0FBSyxDQUFDO0lBQzVCO0VBQ0osQ0FBQyxDQUNBO0FBRVQsQ0FBQztBQUVELGlFQUFlSixRQUFROzs7Ozs7OztVQ2hCdkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC8wMl9Gb3JtdWxhcnplXy1fY2lhZ19kYWxzenlfemFkYW4vMDJfWmFkYW5pZV8yL2pzL0FkdWx0U3R1ZmYuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgvMDJfRm9ybXVsYXJ6ZV8tX2NpYWdfZGFsc3p5X3phZGFuLzAyX1phZGFuaWVfMi9qcy9BZHVsdFN0dWZmQm94LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LzAyX0Zvcm11bGFyemVfLV9jaWFnX2RhbHN6eV96YWRhbi8wMl9aYWRhbmllXzIvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LzAyX0Zvcm11bGFyemVfLV9jaWFnX2RhbHN6eV96YWRhbi8wMl9aYWRhbmllXzIvanMvdXNlSW5wdXQuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFkdWx0U3R1ZmZCb3ggZnJvbSBcIi4vQWR1bHRTdHVmZkJveFwiO1xuaW1wb3J0IHVzZUlucHV0IGZyb20gXCIuL3VzZUlucHV0XCI7XG5cblxuY29uc3QgQWR1bHRTdHVmZiA9ICgpID0+IHtcbiAgICBcbiAgICBjb25zdCBbYWdlLCBzZXRBZ2VdID0gdXNlSW5wdXQoMClcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiB7Li4uc2V0QWdlfS8+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8ZGl2PnthZ2V9PC9kaXY+XG4gICAgICAgICAgICA8QWR1bHRTdHVmZkJveC8+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZHVsdFN0dWZmOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEFkdWx0U3R1ZmZCb3ggPSAoe2FnZX0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZHVsdFN0dWZmQm94OyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IHtjcmVhdGVSb290fSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IEFkdWx0U3R1ZmYgZnJvbSBcIi4vQWR1bHRTdHVmZlwiO1xuXG5jb25zdCBBcHAgPSAoKSA9PiA8QWR1bHRTdHVmZi8+XG5jb25zdCBjb250YWluZXI9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xucm9vdC5yZW5kZXIoPEFwcC8+KVxuXG5cbiIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFVzZUlucHV0ID0gKHZhbHVlT25TdGFydCkgPT4ge1xuICAgIGNvbnN0W3ZhbHVlLCBzZXRWYWx1ZV09dXNlU3RhdGUodmFsdWVPblN0YXJ0KTtcbiAgICByZXR1cm4gW1xuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgb25DaGFuZ2U6IGUgPT4ge1xuICAgICAgICAgICAgICAgIHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIF1cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlSW5wdXQ7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZDJmODQ1NmNlM2I1YTVhNmY2NTNcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJBZHVsdFN0dWZmQm94IiwidXNlSW5wdXQiLCJBZHVsdFN0dWZmIiwiX3VzZUlucHV0IiwiX3VzZUlucHV0MiIsIl9zbGljZWRUb0FycmF5IiwiYWdlIiwic2V0QWdlIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiX2V4dGVuZHMiLCJ0eXBlIiwiX3JlZiIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwiY3JlYXRlUm9vdCIsIkFwcCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIiwidXNlU3RhdGUiLCJVc2VJbnB1dCIsInZhbHVlT25TdGFydCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJ2YWx1ZSIsInNldFZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==