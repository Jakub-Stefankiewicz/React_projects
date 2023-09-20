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
  }, [date]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, date.toLocaleTimeString()));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Clock);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e1cd8c9363e5040eabe4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC40YTAxZmUzNjA1NGNmNDBkZmQ0Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpRDtBQUVqRCxJQUFNRyxLQUFLLEdBQUcsU0FBUkEsS0FBS0EsQ0FBQSxFQUFTO0VBQ2hCLElBQUFDLFNBQUEsR0FBcUJGLCtDQUFRLENBQUMsSUFBSUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUFBQyxVQUFBLEdBQUFDLGNBQUEsQ0FBQUgsU0FBQTtJQUFuQ0ksSUFBSSxHQUFBRixVQUFBO0lBQUVHLE9BQU8sR0FBQUgsVUFBQTtFQUVuQkwsZ0RBQVMsQ0FBQyxZQUFNO0lBQ1osSUFBTVMsUUFBUSxHQUFDQyxXQUFXLENBQUMsWUFBSTtNQUMzQkYsT0FBTyxDQUFDLElBQUlKLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdkIsQ0FBQyxFQUFFLElBQUksQ0FBQztFQUNaLENBQUMsRUFBRSxDQUFDRyxJQUFJLENBQUMsQ0FBQztFQUVWLG9CQUNJUiwwREFBQSwyQkFDSUEsMERBQUEsWUFBSVEsSUFBSSxDQUFDSyxrQkFBa0IsQ0FBQyxDQUFLLENBQ2hDLENBQUM7QUFFZCxDQUFDO0FBRUQsaUVBQWVWLEtBQUs7Ozs7Ozs7O1VDbEJwQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA3X0R6aWVuXzExLzAyX3VzZUVmZmVjdC8wNF9aYWRhbmllXzQvanMvQ2xvY2suanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IENsb2NrID0gKCkgPT4ge1xuICAgIGNvbnN0W2RhdGUsIHNldERhdGVdPXVzZVN0YXRlKG5ldyBEYXRlKCkpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgaW50ZXJ2YWw9c2V0SW50ZXJ2YWwoKCk9PntcbiAgICAgICAgICAgIHNldERhdGUobmV3IERhdGUoKSk7XG4gICAgICAgIH0sIDEwMDApXG4gICAgfSwgW2RhdGVdKTtcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHA+e2RhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKCl9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2xvY2s7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZTFjZDhjOTM2M2U1MDQwZWFiZTRcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNsb2NrIiwiX3VzZVN0YXRlIiwiRGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImRhdGUiLCJzZXREYXRlIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNyZWF0ZUVsZW1lbnQiLCJ0b0xvY2FsZVRpbWVTdHJpbmciXSwic291cmNlUm9vdCI6IiJ9