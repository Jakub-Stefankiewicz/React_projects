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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, randMath), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, randNum1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, randNum2));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MathQuestionGame);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9d349139539455e077e1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mOTBhY2EwNDNjY2I2MWJiMDYzMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpRDtBQUVqRCxJQUFNRyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQWdCQSxDQUFBLEVBQVM7RUFDM0IsSUFBTUMsS0FBSyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7RUFDN0IsSUFBTUMsUUFBUSxHQUFHRCxLQUFLLENBQUNFLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLEdBQUdKLEtBQUssQ0FBQ0ssTUFBTSxDQUFDLENBQUM7RUFDaEUsSUFBTUMsUUFBUSxHQUFHSixJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7RUFDekQsSUFBTUcsUUFBUSxHQUFHTCxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7RUFDekQsSUFBQUksU0FBQSxHQUE0QlYsK0NBQVEsQ0FBQyxDQUFDLENBQUM7SUFBQVcsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBaENHLE1BQU0sR0FBQUYsVUFBQTtJQUFFRyxTQUFTLEdBQUFILFVBQUE7RUFFeEJaLGdEQUFTLENBQUMsWUFBTTtJQUNwQixRQUFRRyxLQUFLO01BQ1QsS0FBSyxHQUFHO1FBQUVZLFNBQVMsQ0FBQ04sUUFBUSxHQUFDQyxRQUFRLENBQUM7UUFDdEM7TUFDQSxLQUFLLEdBQUc7UUFBRUssU0FBUyxDQUFDTixRQUFRLEdBQUNDLFFBQVEsQ0FBQztRQUN0QztNQUNBLEtBQUssR0FBRztRQUFFSyxTQUFTLENBQUNOLFFBQVEsR0FBQ0MsUUFBUSxDQUFDO0lBQzFDO0VBQ0ksQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUVOLG9CQUNJWCwwREFBQSwyQkFDSUEsMERBQUEsWUFBSUssUUFBWSxDQUFDLGVBQ2pCTCwwREFBQSxZQUFJVSxRQUFZLENBQUMsZUFDakJWLDBEQUFBLFlBQUlXLFFBQVksQ0FDZixDQUFDO0FBRWQsQ0FBQztBQUVELGlFQUFlUixnQkFBZ0I7Ozs7Ozs7O1VDNUIvQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA4X0R6aWVuXzEyLTE0LzAyX1phZGFuaWFfcG9kc3Vtb3d1amFjZS8wMl9aYWRhbmllXzIvanMvTWF0aFF1ZXN0aW9uR2FtZS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgTWF0aFF1ZXN0aW9uR2FtZSA9ICgpID0+IHtcbiAgICBjb25zdCBpdGVtcyA9IFtcIitcIiwgXCItXCIsIFwiKlwiXTtcbiAgICBjb25zdCByYW5kTWF0aCA9IGl0ZW1zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGl0ZW1zLmxlbmd0aCldO1xuICAgIGNvbnN0IHJhbmROdW0xID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwIC0gMSkgKyAxKTtcbiAgICBjb25zdCByYW5kTnVtMiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMCAtIDEpICsgMSk7XG4gICAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKDApO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbnN3aXRjaCAoaXRlbXMpe1xuICAgIGNhc2UgXCIrXCI6IHNldFJlc3VsdChyYW5kTnVtMStyYW5kTnVtMik7XG4gICAgYnJlYWs7XG4gICAgY2FzZSBcIi1cIjogc2V0UmVzdWx0KHJhbmROdW0xLXJhbmROdW0yKTtcbiAgICBicmVhaztcbiAgICBjYXNlIFwiKlwiOiBzZXRSZXN1bHQocmFuZE51bTEqcmFuZE51bTIpO1xufVxuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cD57cmFuZE1hdGh9PC9wPlxuICAgICAgICAgICAgPHA+e3JhbmROdW0xfTwvcD5cbiAgICAgICAgICAgIDxwPntyYW5kTnVtMn08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYXRoUXVlc3Rpb25HYW1lOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjlkMzQ5MTM5NTM5NDU1ZTA3N2UxXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJNYXRoUXVlc3Rpb25HYW1lIiwiaXRlbXMiLCJyYW5kTWF0aCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsInJhbmROdW0xIiwicmFuZE51bTIiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJjcmVhdGVFbGVtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==