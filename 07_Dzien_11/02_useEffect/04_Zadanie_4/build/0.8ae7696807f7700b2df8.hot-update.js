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
/* harmony import */ var _ClockDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var _ClockTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var Clock = function Clock() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new Date()),
    _useState2 = _slicedToArray(_useState, 2),
    date = _useState2[0],
    setDate = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var interval = setInterval(function () {
      setDate(new Date());
    }, 1000);
    return function () {
      clearInterval(interval);
    };
  }, [date]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ClockDate__WEBPACK_IMPORTED_MODULE_1__["default"], {
    date: date
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ClockTime__WEBPACK_IMPORTED_MODULE_2__["default"], {
    date: date
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Clock);

/***/ }),

/***/ 35:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var ClockDate = function ClockDate(_ref) {
  var date = _ref.date;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, date.toLocaleString()));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClockDate);

/***/ }),

/***/ 36:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var ClockTime = function ClockTime(_ref) {
  var date = _ref.date;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, date.toLocaleDateString()));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClockTime);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e13008b28f6eed1f8d14")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC44YWU3Njk2ODA3Zjc3MDBiMmRmOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlEO0FBQ2I7QUFDQTtBQUVwQyxJQUFNSyxLQUFLLEdBQUcsU0FBUkEsS0FBS0EsQ0FBQSxFQUFTO0VBQ2hCLElBQUFDLFNBQUEsR0FBcUJKLCtDQUFRLENBQUMsSUFBSUssSUFBSSxDQUFDLENBQUMsQ0FBQztJQUFBQyxVQUFBLEdBQUFDLGNBQUEsQ0FBQUgsU0FBQTtJQUFuQ0ksSUFBSSxHQUFBRixVQUFBO0lBQUVHLE9BQU8sR0FBQUgsVUFBQTtFQUVuQlAsZ0RBQVMsQ0FBQyxZQUFNO0lBQ1osSUFBTVcsUUFBUSxHQUFDQyxXQUFXLENBQUMsWUFBSTtNQUMzQkYsT0FBTyxDQUFDLElBQUlKLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdkIsQ0FBQyxFQUFFLElBQUksQ0FBQztJQUNSLE9BQU8sWUFBTTtNQUNUTyxhQUFhLENBQUNGLFFBQVEsQ0FBQztJQUMzQixDQUFDO0VBQ0wsQ0FBQyxFQUFFLENBQUNGLElBQUksQ0FBQyxDQUFDO0VBR1Ysb0JBQ0lWLDBEQUFBLDJCQUNJQSwwREFBQSxDQUFDRyxrREFBUztJQUFDTyxJQUFJLEVBQUVBO0VBQUssQ0FBQyxDQUFDLGVBQ3hCViwwREFBQSxDQUFDSSxrREFBUztJQUFDTSxJQUFJLEVBQUVBO0VBQUssQ0FBQyxDQUN0QixDQUFDO0FBRWQsQ0FBQztBQUVELGlFQUFlTCxLQUFLOzs7Ozs7Ozs7Ozs7O0FDekJNO0FBRTFCLElBQU1GLFNBQVMsR0FBRyxTQUFaQSxTQUFTQSxDQUFBYSxJQUFBLEVBQWU7RUFBQSxJQUFWTixJQUFJLEdBQUFNLElBQUEsQ0FBSk4sSUFBSTtFQUNwQixvQkFDSVYsMERBQUEsMkJBQ0lBLDBEQUFBLGFBQUtVLElBQUksQ0FBQ08sY0FBYyxDQUFDLENBQU0sQ0FDOUIsQ0FBQztBQUVkLENBQUM7QUFFRCxpRUFBZWQsU0FBUzs7Ozs7Ozs7Ozs7OztBQ1ZFO0FBRTFCLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFTQSxDQUFBWSxJQUFBLEVBQWU7RUFBQSxJQUFWTixJQUFJLEdBQUFNLElBQUEsQ0FBSk4sSUFBSTtFQUNwQixvQkFDSVYsMERBQUEsMkJBQ0lBLDBEQUFBLGFBQUtVLElBQUksQ0FBQ1Esa0JBQWtCLENBQUMsQ0FBTSxDQUNsQyxDQUFDO0FBRWQsQ0FBQztBQUVELGlFQUFlZCxTQUFTOzs7Ozs7OztVQ1Z4QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA3X0R6aWVuXzExLzAyX3VzZUVmZmVjdC8wNF9aYWRhbmllXzQvanMvQ2xvY2suanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDdfRHppZW5fMTEvMDJfdXNlRWZmZWN0LzA0X1phZGFuaWVfNC9qcy9DbG9ja0RhdGUuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDdfRHppZW5fMTEvMDJfdXNlRWZmZWN0LzA0X1phZGFuaWVfNC9qcy9DbG9ja1RpbWUuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2xvY2tEYXRlIGZyb20gXCIuL0Nsb2NrRGF0ZVwiO1xuaW1wb3J0IENsb2NrVGltZSBmcm9tIFwiLi9DbG9ja1RpbWVcIjtcblxuY29uc3QgQ2xvY2sgPSAoKSA9PiB7XG4gICAgY29uc3RbZGF0ZSwgc2V0RGF0ZV09dXNlU3RhdGUobmV3IERhdGUoKSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBpbnRlcnZhbD1zZXRJbnRlcnZhbCgoKT0+e1xuICAgICAgICAgICAgc2V0RGF0ZShuZXcgRGF0ZSgpKTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgfVxuICAgIH0sIFtkYXRlXSk7XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8Q2xvY2tEYXRlIGRhdGU9e2RhdGV9Lz5cbiAgICAgICAgICAgIDxDbG9ja1RpbWUgZGF0ZT17ZGF0ZX0vPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2xvY2s7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgQ2xvY2tEYXRlID0gKHtkYXRlfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+e2RhdGUudG9Mb2NhbGVTdHJpbmcoKX08L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2xvY2tEYXRlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IENsb2NrVGltZSA9ICh7ZGF0ZX0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPntkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygpfTwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDbG9ja1RpbWU7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZTEzMDA4YjI4ZjZlZWQxZjhkMTRcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNsb2NrRGF0ZSIsIkNsb2NrVGltZSIsIkNsb2NrIiwiX3VzZVN0YXRlIiwiRGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImRhdGUiLCJzZXREYXRlIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJjcmVhdGVFbGVtZW50IiwiX3JlZiIsInRvTG9jYWxlU3RyaW5nIiwidG9Mb2NhbGVEYXRlU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==