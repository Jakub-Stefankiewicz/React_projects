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
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var InteractiveDiv = function InteractiveDiv() {
  var _useInput = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_1__["default"])(0),
    _useInput2 = _slicedToArray(_useInput, 2),
    input = _useInput2[0],
    setInput = _useInput2[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _extends({
    type: "number"
  }, setInput)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      height: "100px",
      width: "".concat(input, "px"),
      backgroundColor: "red"
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InteractiveDiv);

/***/ }),

/***/ 35:
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

var useInput = function useInput(valueOnStart) {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useInput);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("65577151979155c93488")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hOGE3MWY3N2E0NmQwODRhNWU4YS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2E7QUFFdkMsSUFBTUUsY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFBLEVBQVM7RUFDekIsSUFBQUMsU0FBQSxHQUEwQkYsMkRBQVEsQ0FBQyxDQUFDLENBQUM7SUFBQUcsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBOUJHLEtBQUssR0FBQUYsVUFBQTtJQUFFRyxRQUFRLEdBQUFILFVBQUE7RUFDdEIsb0JBQ0lKLDBEQUFBLDJCQUNJQSwwREFBQSxVQUFBUyxRQUFBO0lBQU9DLElBQUksRUFBQztFQUFRLEdBQUtILFFBQVEsQ0FBRSxDQUFDLGVBQ3BDUCwwREFBQTtJQUFLVyxLQUFLLEVBQ047TUFDSUMsTUFBTSxFQUFFLE9BQU87TUFDZkMsS0FBSyxLQUFBQyxNQUFBLENBQUtSLEtBQUssT0FBSTtNQUNuQlMsZUFBZSxFQUFFO0lBQ3JCO0VBQ0gsQ0FBTSxDQUNOLENBQUM7QUFFZCxDQUFDO0FBRUQsaUVBQWViLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQlM7QUFFdEMsSUFBTUQsUUFBUSxHQUFHLFNBQVhBLFFBQVFBLENBQUlnQixZQUFZLEVBQUs7RUFDL0IsSUFBQUMsU0FBQSxHQUEwQkYsK0NBQVEsQ0FBQ0MsWUFBWSxDQUFDO0lBQUFFLFVBQUEsR0FBQWQsY0FBQSxDQUFBYSxTQUFBO0lBQXpDRSxLQUFLLEdBQUFELFVBQUE7SUFBRUUsUUFBUSxHQUFBRixVQUFBO0VBRXRCLE9BQU8sQ0FDSEMsS0FBSyxFQUNMO0lBQ0lBLEtBQUssRUFBTEEsS0FBSztJQUNMRSxRQUFRLEVBQUUsU0FBQUEsU0FBQ0MsQ0FBQyxFQUFLO01BQ2JGLFFBQVEsQ0FBQ0UsQ0FBQyxDQUFDQyxNQUFNLENBQUNKLEtBQUssQ0FBQztJQUM1QjtFQUNKLENBQUMsQ0FDSjtBQUNMLENBQUM7QUFFRCxpRUFBZW5CLFFBQVE7Ozs7Ozs7O1VDaEJ2QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzExX0R6aWVuXzE4LzAxX0N1c3RvbV9Ib29rcy8wMV9aYWRhbmllXzEvanMvSW50ZXJhY3RpdmVEaXYuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgvMDFfQ3VzdG9tX0hvb2tzLzAxX1phZGFuaWVfMS9qcy9ob29rcy91c2VJbnB1dC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4vaG9va3MvdXNlSW5wdXRcIlxuXG5jb25zdCBJbnRlcmFjdGl2ZURpdiA9ICgpID0+IHtcbiAgICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZUlucHV0KDApXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgey4uLnNldElucHV0fS8+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDBweFwiLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogYCR7aW5wdXR9cHhgLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmVkXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9PjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW50ZXJhY3RpdmVEaXY7IiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgdXNlSW5wdXQgPSAodmFsdWVPblN0YXJ0KSA9PiB7XG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSh2YWx1ZU9uU3RhcnQpO1xuXG4gICAgcmV0dXJuIFtcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgb25DaGFuZ2U6IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXVxufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlSW5wdXQ7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNjU1NzcxNTE5NzkxNTVjOTM0ODhcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VJbnB1dCIsIkludGVyYWN0aXZlRGl2IiwiX3VzZUlucHV0IiwiX3VzZUlucHV0MiIsIl9zbGljZWRUb0FycmF5IiwiaW5wdXQiLCJzZXRJbnB1dCIsImNyZWF0ZUVsZW1lbnQiLCJfZXh0ZW5kcyIsInR5cGUiLCJzdHlsZSIsImhlaWdodCIsIndpZHRoIiwiY29uY2F0IiwiYmFja2dyb3VuZENvbG9yIiwidXNlU3RhdGUiLCJ2YWx1ZU9uU3RhcnQiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwidmFsdWUiLCJzZXRWYWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=