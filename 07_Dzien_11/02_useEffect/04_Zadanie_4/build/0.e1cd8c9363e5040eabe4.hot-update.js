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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, date.toLocaleTimeString()));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Clock);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8ae7696807f7700b2df8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lMWNkOGM5MzYzZTUwNDBlYWJlNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpRDtBQUVqRCxJQUFNRyxLQUFLLEdBQUcsU0FBUkEsS0FBS0EsQ0FBQSxFQUFTO0VBQ2hCLElBQUFDLFNBQUEsR0FBcUJGLCtDQUFRLENBQUMsSUFBSUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUFBQyxVQUFBLEdBQUFDLGNBQUEsQ0FBQUgsU0FBQTtJQUFuQ0ksSUFBSSxHQUFBRixVQUFBO0lBQUVHLE9BQU8sR0FBQUgsVUFBQTtFQUVuQkwsZ0RBQVMsQ0FBQyxZQUFNO0lBQ1osSUFBTVMsUUFBUSxHQUFDQyxXQUFXLENBQUMsWUFBSTtNQUMzQkYsT0FBTyxDQUFDLElBQUlKLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdkIsQ0FBQyxFQUFFLElBQUksQ0FBQztJQUNSLE9BQU8sWUFBTTtNQUNUTyxhQUFhLENBQUNGLFFBQVEsQ0FBQztJQUMzQixDQUFDO0VBQ0wsQ0FBQyxFQUFFLENBQUNGLElBQUksQ0FBQyxDQUFDO0VBR1Ysb0JBQ0lSLDBEQUFBLDJCQUNJQSwwREFBQSxZQUFJUSxJQUFJLENBQUNNLGtCQUFrQixDQUFDLENBQUssQ0FDaEMsQ0FBQztBQUVkLENBQUM7QUFFRCxpRUFBZVgsS0FBSzs7Ozs7Ozs7VUN0QnBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDdfRHppZW5fMTEvMDJfdXNlRWZmZWN0LzA0X1phZGFuaWVfNC9qcy9DbG9jay5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgQ2xvY2sgPSAoKSA9PiB7XG4gICAgY29uc3RbZGF0ZSwgc2V0RGF0ZV09dXNlU3RhdGUobmV3IERhdGUoKSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBpbnRlcnZhbD1zZXRJbnRlcnZhbCgoKT0+e1xuICAgICAgICAgICAgc2V0RGF0ZShuZXcgRGF0ZSgpKTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgfVxuICAgIH0sIFtkYXRlXSk7XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cD57ZGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoKX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDbG9jazsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4YWU3Njk2ODA3Zjc3MDBiMmRmOFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ2xvY2siLCJfdXNlU3RhdGUiLCJEYXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiZGF0ZSIsInNldERhdGUiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImNyZWF0ZUVsZW1lbnQiLCJ0b0xvY2FsZVRpbWVTdHJpbmciXSwic291cmNlUm9vdCI6IiJ9