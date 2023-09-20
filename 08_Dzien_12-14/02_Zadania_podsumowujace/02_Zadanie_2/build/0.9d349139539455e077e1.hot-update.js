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
    switch (items) {
      case "+":
        setResult(randNum1 + randNum2);
        break;
      case "-":
        setResult(randNum1 - randNum2);
        break;
      case "*":
        setResult(randNum1 * randNum2);
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, randMath), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, randNum1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, randNum2), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, result));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MathQuestionGame);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8ae821673bd4c083c4ff")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC45ZDM0OTEzOTUzOTQ1NWUwNzdlMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpRDtBQUVqRCxJQUFNRyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQWdCQSxDQUFBLEVBQVM7RUFDM0IsSUFBTUMsS0FBSyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7RUFDN0IsSUFBTUMsUUFBUSxHQUFHRCxLQUFLLENBQUNFLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLEdBQUdKLEtBQUssQ0FBQ0ssTUFBTSxDQUFDLENBQUM7RUFDaEUsSUFBTUMsUUFBUSxHQUFHSixJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7RUFDekQsSUFBTUcsUUFBUSxHQUFHTCxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7RUFDekQsSUFBQUksU0FBQSxHQUE0QlYsK0NBQVEsQ0FBQyxDQUFDLENBQUM7SUFBQVcsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBaENHLE1BQU0sR0FBQUYsVUFBQTtJQUFFRyxTQUFTLEdBQUFILFVBQUE7RUFFeEJaLGdEQUFTLENBQUMsWUFBTTtJQUNaLFFBQVFHLEtBQUs7TUFDVCxLQUFLLEdBQUc7UUFDSlksU0FBUyxDQUFDTixRQUFRLEdBQUdDLFFBQVEsQ0FBQztRQUM5QjtNQUNKLEtBQUssR0FBRztRQUNKSyxTQUFTLENBQUNOLFFBQVEsR0FBR0MsUUFBUSxDQUFDO1FBQzlCO01BQ0osS0FBSyxHQUFHO1FBQ0pLLFNBQVMsQ0FBQ04sUUFBUSxHQUFHQyxRQUFRLENBQUM7SUFDdEM7RUFDSixDQUFDLEVBQUUsRUFBRSxDQUFDO0VBRU4sb0JBQ0lYLDBEQUFBLDJCQUNJQSwwREFBQSxZQUFJSyxRQUFZLENBQUMsZUFDakJMLDBEQUFBLFlBQUlVLFFBQVksQ0FBQyxlQUNqQlYsMERBQUEsWUFBSVcsUUFBWSxDQUFDLGVBQ2pCWCwwREFBQSxZQUFJZSxNQUFVLENBQ2IsQ0FBQztBQUVkLENBQUM7QUFFRCxpRUFBZVosZ0JBQWdCOzs7Ozs7OztVQ2hDL0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOF9Eemllbl8xMi0xNC8wMl9aYWRhbmlhX3BvZHN1bW93dWphY2UvMDJfWmFkYW5pZV8yL2pzL01hdGhRdWVzdGlvbkdhbWUuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IE1hdGhRdWVzdGlvbkdhbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgaXRlbXMgPSBbXCIrXCIsIFwiLVwiLCBcIipcIl07XG4gICAgY29uc3QgcmFuZE1hdGggPSBpdGVtc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpdGVtcy5sZW5ndGgpXTtcbiAgICBjb25zdCByYW5kTnVtMSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMCAtIDEpICsgMSk7XG4gICAgY29uc3QgcmFuZE51bTIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAgLSAxKSArIDEpO1xuICAgIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZSgwKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHN3aXRjaCAoaXRlbXMpIHtcbiAgICAgICAgICAgIGNhc2UgXCIrXCI6XG4gICAgICAgICAgICAgICAgc2V0UmVzdWx0KHJhbmROdW0xICsgcmFuZE51bTIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIi1cIjpcbiAgICAgICAgICAgICAgICBzZXRSZXN1bHQocmFuZE51bTEgLSByYW5kTnVtMik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiKlwiOlxuICAgICAgICAgICAgICAgIHNldFJlc3VsdChyYW5kTnVtMSAqIHJhbmROdW0yKTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cD57cmFuZE1hdGh9PC9wPlxuICAgICAgICAgICAgPHA+e3JhbmROdW0xfTwvcD5cbiAgICAgICAgICAgIDxwPntyYW5kTnVtMn08L3A+XG4gICAgICAgICAgICA8cD57cmVzdWx0fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1hdGhRdWVzdGlvbkdhbWU7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOGFlODIxNjczYmQ0YzA4M2M0ZmZcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk1hdGhRdWVzdGlvbkdhbWUiLCJpdGVtcyIsInJhbmRNYXRoIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwicmFuZE51bTEiLCJyYW5kTnVtMiIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInJlc3VsdCIsInNldFJlc3VsdCIsImNyZWF0ZUVsZW1lbnQiXSwic291cmNlUm9vdCI6IiJ9