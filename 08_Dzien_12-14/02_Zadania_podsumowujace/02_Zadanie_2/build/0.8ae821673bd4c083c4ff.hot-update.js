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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, randMath), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, randNum1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, randNum2), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, result), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "7")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MathQuestionGame);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5ca4f0cf6c890222a3cb")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC44YWU4MjE2NzNiZDRjMDgzYzRmZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpRDtBQUVqRCxJQUFNRyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQWdCQSxDQUFBLEVBQVM7RUFDM0IsSUFBTUMsS0FBSyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7RUFDN0IsSUFBTUMsUUFBUSxHQUFHRCxLQUFLLENBQUNFLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLEdBQUdKLEtBQUssQ0FBQ0ssTUFBTSxDQUFDLENBQUM7RUFDaEUsSUFBTUMsUUFBUSxHQUFHSixJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7RUFDekQsSUFBTUcsUUFBUSxHQUFHTCxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7RUFDekQsSUFBQUksU0FBQSxHQUE0QlYsK0NBQVEsQ0FBQyxDQUFDLENBQUM7SUFBQVcsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBaENHLE1BQU0sR0FBQUYsVUFBQTtJQUFFRyxTQUFTLEdBQUFILFVBQUE7RUFFeEJaLGdEQUFTLENBQUMsWUFBTTtJQUNaLFFBQVFHLEtBQUs7TUFDVCxLQUFLLEdBQUc7UUFDSlksU0FBUyxDQUFDTixRQUFRLEdBQUdDLFFBQVEsQ0FBQztRQUM5QjtNQUNKLEtBQUssR0FBRztRQUNKSyxTQUFTLENBQUNOLFFBQVEsR0FBR0MsUUFBUSxDQUFDO1FBQzlCO01BQ0osS0FBSyxHQUFHO1FBQ0pLLFNBQVMsQ0FBQ04sUUFBUSxHQUFHQyxRQUFRLENBQUM7SUFDdEM7RUFDSixDQUFDLEVBQUUsRUFBRSxDQUFDO0VBRU4sb0JBQ0lYLDBEQUFBLDJCQUNJQSwwREFBQSxZQUFJSyxRQUFZLENBQUMsZUFDakJMLDBEQUFBLFlBQUlVLFFBQVksQ0FBQyxlQUNqQlYsMERBQUEsWUFBSVcsUUFBWSxDQUFDLGVBQ2pCWCwwREFBQSxZQUFJZSxNQUFVLENBQUMsZUFDZmYsMERBQUEsV0FBUSxDQUFDLGVBQ1RBLDBEQUFBLDJCQUNJQSwwREFBQSxpQkFBUSxHQUFTLENBQUMsZUFDbEJBLDBEQUFBLGlCQUFRLEdBQVMsQ0FBQyxlQUNsQkEsMERBQUEsaUJBQVEsR0FBUyxDQUFDLGVBQ2xCQSwwREFBQSxpQkFBUSxHQUFTLENBQ2hCLENBQUMsZUFDTkEsMERBQUEsV0FBUSxDQUNQLENBQUM7QUFFZCxDQUFDO0FBRUQsaUVBQWVHLGdCQUFnQjs7Ozs7Ozs7VUN4Qy9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDhfRHppZW5fMTItMTQvMDJfWmFkYW5pYV9wb2RzdW1vd3VqYWNlLzAyX1phZGFuaWVfMi9qcy9NYXRoUXVlc3Rpb25HYW1lLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBNYXRoUXVlc3Rpb25HYW1lID0gKCkgPT4ge1xuICAgIGNvbnN0IGl0ZW1zID0gW1wiK1wiLCBcIi1cIiwgXCIqXCJdO1xuICAgIGNvbnN0IHJhbmRNYXRoID0gaXRlbXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaXRlbXMubGVuZ3RoKV07XG4gICAgY29uc3QgcmFuZE51bTEgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAgLSAxKSArIDEpO1xuICAgIGNvbnN0IHJhbmROdW0yID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwIC0gMSkgKyAxKTtcbiAgICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUoMCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzd2l0Y2ggKGl0ZW1zKSB7XG4gICAgICAgICAgICBjYXNlIFwiK1wiOlxuICAgICAgICAgICAgICAgIHNldFJlc3VsdChyYW5kTnVtMSArIHJhbmROdW0yKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCItXCI6XG4gICAgICAgICAgICAgICAgc2V0UmVzdWx0KHJhbmROdW0xIC0gcmFuZE51bTIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIipcIjpcbiAgICAgICAgICAgICAgICBzZXRSZXN1bHQocmFuZE51bTEgKiByYW5kTnVtMik7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHA+e3JhbmRNYXRofTwvcD5cbiAgICAgICAgICAgIDxwPntyYW5kTnVtMX08L3A+XG4gICAgICAgICAgICA8cD57cmFuZE51bTJ9PC9wPlxuICAgICAgICAgICAgPHA+e3Jlc3VsdH08L3A+XG4gICAgICAgICAgICA8aDE+PC9oMT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbj4zPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbj42PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbj44PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbj43PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxoMz48L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWF0aFF1ZXN0aW9uR2FtZTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1Y2E0ZjBjZjZjODkwMjIyYTNjYlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTWF0aFF1ZXN0aW9uR2FtZSIsIml0ZW1zIiwicmFuZE1hdGgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJyYW5kTnVtMSIsInJhbmROdW0yIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwicmVzdWx0Iiwic2V0UmVzdWx0IiwiY3JlYXRlRWxlbWVudCJdLCJzb3VyY2VSb290IjoiIn0=