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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ColorfulBoxes = function ColorfulBoxes() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    arr = _useState2[0],
    setState = _useState2[1];
  var handleClick = function handleClick() {
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setState(function (prevState) {
      var arr = _toConsumableArray(prevState);
      arr.push(randomColor);
      return arr;
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Dodaj boxa!"), arr.map(function (el) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("box", {
      style: {
        height: 200,
        width: 200,
        backgroundColor: el
      }
    });
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColorfulBoxes);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c1986063230750a41d82")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41MDYzY2RiNjc5MzJhZDljNmI4OC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFFdEMsSUFBTUUsYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFBLEVBQVM7RUFDeEIsSUFBQUMsU0FBQSxHQUF3QkYsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQUcsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBN0JHLEdBQUcsR0FBQUYsVUFBQTtJQUFFRyxRQUFRLEdBQUFILFVBQUE7RUFDcEIsSUFBTUksV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUEsRUFBUztJQUN0QixJQUFNQyxXQUFXLEdBQUcsR0FBRyxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxHQUFDLFFBQVEsQ0FBQyxDQUFDQyxRQUFRLENBQUMsRUFBRSxDQUFDO0lBQ3pFTixRQUFRLENBQUMsVUFBQU8sU0FBUyxFQUFJO01BQ2xCLElBQU1SLEdBQUcsR0FBQVMsa0JBQUEsQ0FBS0QsU0FBUyxDQUFDO01BQ3hCUixHQUFHLENBQUNVLElBQUksQ0FBQ1AsV0FBVyxDQUFDO01BQ3JCLE9BQU9ILEdBQUc7SUFDZCxDQUFDLENBQUM7RUFDTixDQUFDO0VBQ0Qsb0JBQ0lOLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNJQSwwREFBQSxpQkFBUSxhQUFtQixDQUFDLEVBQzNCTSxHQUFHLENBQUNhLEdBQUcsQ0FBQyxVQUFBQyxFQUFFLEVBQUk7SUFDWCxvQkFBT3BCLDBEQUFBO01BQUtxQixLQUFLLEVBQUU7UUFBRUMsTUFBTSxFQUFFLEdBQUc7UUFBRUMsS0FBSyxFQUFFLEdBQUc7UUFBRUMsZUFBZSxFQUFFSjtNQUFHO0lBQUUsQ0FBTSxDQUFDO0VBQy9FLENBQUMsQ0FDSCxDQUFDO0FBRVgsQ0FBQztBQUVELGlFQUFlbEIsYUFBYTs7Ozs7Ozs7VUN0QjVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDZfRHppZW5fOS0xMC8wMV91c2VTdGF0ZS8wMl9aYWRhbmllXzIvanMvQ29sb3JmdWxCb3hlcy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IENvbG9yZnVsQm94ZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgW2Fyciwgc2V0U3RhdGVdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByYW5kb21Db2xvciA9ICcjJyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxNjc3NzIxNSkudG9TdHJpbmcoMTYpO1xuICAgICAgICBzZXRTdGF0ZShwcmV2U3RhdGUgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXJyPVsuLi5wcmV2U3RhdGVdO1xuICAgICAgICAgICAgYXJyLnB1c2gocmFuZG9tQ29sb3IpO1xuICAgICAgICAgICAgcmV0dXJuIGFycjtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxidXR0b24+RG9kYWogYm94YSE8L2J1dHRvbj5cbiAgICAgICAgICAgIHthcnIubWFwKGVsID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPGJveCBzdHlsZT17eyBoZWlnaHQ6IDIwMCwgd2lkdGg6IDIwMCwgYmFja2dyb3VuZENvbG9yOiBlbCB9fT48L2JveD5cbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29sb3JmdWxCb3hlczsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjMTk4NjA2MzIzMDc1MGE0MWQ4MlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ29sb3JmdWxCb3hlcyIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImFyciIsInNldFN0YXRlIiwiaGFuZGxlQ2xpY2siLCJyYW5kb21Db2xvciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwicHJldlN0YXRlIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwicHVzaCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIm1hcCIsImVsIiwic3R5bGUiLCJoZWlnaHQiLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciJdLCJzb3VyY2VSb290IjoiIn0=