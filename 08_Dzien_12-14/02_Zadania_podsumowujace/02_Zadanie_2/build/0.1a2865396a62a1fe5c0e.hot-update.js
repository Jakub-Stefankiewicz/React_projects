"use strict";
self["webpackHotUpdatees6_react"](0,{

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

var MathQuestionGame = function MathQuestionGame() {
  var items = ["+", "-", "*"];
  var randMath = items[Math.floor(Math.random() * items.length)];
  var randNum1 = Math.floor(Math.random() * (10 - 1) + 1);
  var randNum2 = Math.floor(Math.random() * (10 - 1) + 1);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    result = _useState2[0],
    setResult = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setResult();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, randMath), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, randNum1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, randNum2));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MathQuestionGame);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f90aca043ccb61bb0631")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xYTI4NjUzOTZhNjJhMWZlNWMwZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpRDtBQUVqRCxJQUFNRyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQWdCQSxDQUFBLEVBQVM7RUFDM0IsSUFBTUMsS0FBSyxHQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7RUFDM0IsSUFBTUMsUUFBUSxHQUFDRCxLQUFLLENBQUNFLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLEdBQUNKLEtBQUssQ0FBQ0ssTUFBTSxDQUFDLENBQUM7RUFDNUQsSUFBTUMsUUFBUSxHQUFDSixJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxJQUFFLEVBQUUsR0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUM7RUFDakQsSUFBTUcsUUFBUSxHQUFDTCxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxJQUFFLEVBQUUsR0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUM7RUFDakQsSUFBQUksU0FBQSxHQUF5QlYsK0NBQVEsQ0FBQyxDQUFDLENBQUM7SUFBQVcsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBOUJHLE1BQU0sR0FBQUYsVUFBQTtJQUFFRyxTQUFTLEdBQUFILFVBQUE7RUFFdkJaLGdEQUFTLENBQUMsWUFBTTtJQUNaZSxTQUFTLENBQUMsQ0FBQztFQUNmLENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixvQkFDSWhCLDBEQUFBLDJCQUNJQSwwREFBQSxZQUFJSyxRQUFZLENBQUMsZUFDakJMLDBEQUFBLFlBQUlVLFFBQVksQ0FBQyxlQUNqQlYsMERBQUEsWUFBSVcsUUFBWSxDQUNmLENBQUM7QUFFZCxDQUFDO0FBRUQsaUVBQWVSLGdCQUFnQjs7Ozs7Ozs7VUN0Qi9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDhfRHppZW5fMTItMTQvMDJfWmFkYW5pYV9wb2RzdW1vd3VqYWNlLzAyX1phZGFuaWVfMi9qcy9NYXRoUXVlc3Rpb25HYW1lLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBNYXRoUXVlc3Rpb25HYW1lID0gKCkgPT4ge1xuICAgIGNvbnN0IGl0ZW1zPVtcIitcIiwgXCItXCIsIFwiKlwiXTtcbiAgICBjb25zdCByYW5kTWF0aD1pdGVtc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqaXRlbXMubGVuZ3RoKV07XG4gICAgY29uc3QgcmFuZE51bTE9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKigxMC0xKSsxKTtcbiAgICBjb25zdCByYW5kTnVtMj1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqKDEwLTEpKzEpO1xuICAgIGNvbnN0W3Jlc3VsdCwgc2V0UmVzdWx0XT11c2VTdGF0ZSgwKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldFJlc3VsdCgpXG4gICAgfSwgW10pO1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cD57cmFuZE1hdGh9PC9wPlxuICAgICAgICAgICAgPHA+e3JhbmROdW0xfTwvcD5cbiAgICAgICAgICAgIDxwPntyYW5kTnVtMn08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYXRoUXVlc3Rpb25HYW1lOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImY5MGFjYTA0M2NjYjYxYmIwNjMxXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJNYXRoUXVlc3Rpb25HYW1lIiwiaXRlbXMiLCJyYW5kTWF0aCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsInJhbmROdW0xIiwicmFuZE51bTIiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJjcmVhdGVFbGVtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==