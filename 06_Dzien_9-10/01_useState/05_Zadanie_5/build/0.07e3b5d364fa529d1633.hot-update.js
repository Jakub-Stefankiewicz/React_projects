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

var Numbers = function Numbers() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([54, 76, 24, 63, 4, 54, 82, 36, 13, 80, 10, 69, 4, 23, 40]),
    _useState2 = _slicedToArray(_useState, 2),
    numbers = _useState2[0],
    setNumbers = _useState2[1];
  var showEven = function showEven() {
    setNumbers(function (prevState) {
      return numbers.filter(function (number) {
        if (number % 2 === 0) {
          return number;
        }
      });
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("list", null, numbers.map(function (number) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
      key: number
    }, number);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: showEven
  }, "Show even"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Numbers);

/***/ }),

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _Numbers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);



var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Numbers__WEBPACK_IMPORTED_MODULE_2__["default"], null);
};
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6cc6b4d34f8fe868067a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wN2UzYjVkMzY0ZmE1MjlkMTYzMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUV0QyxJQUFNRSxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBQSxFQUFTO0VBQ2xCLElBQUFDLFNBQUEsR0FBOEJGLCtDQUFRLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQUFHLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQTNGRyxPQUFPLEdBQUFGLFVBQUE7SUFBRUcsVUFBVSxHQUFBSCxVQUFBO0VBQzFCLElBQU1JLFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFBLEVBQVM7SUFDbkJELFVBQVUsQ0FBQyxVQUFBRSxTQUFTO01BQUEsT0FBSUgsT0FBTyxDQUFDSSxNQUFNLENBQUMsVUFBQUMsTUFBTSxFQUFJO1FBQzdDLElBQUlBLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1VBQ2xCLE9BQU9BLE1BQU07UUFDakI7TUFDSixDQUFDLENBQUM7SUFBQSxFQUFDO0VBQ1AsQ0FBQztFQUNELG9CQUNJWCwwREFBQSwyQkFDSUEsMERBQUEsZUFDS00sT0FBTyxDQUFDTyxHQUFHLENBQUMsVUFBQUYsTUFBTSxFQUFJO0lBQ25CLG9CQUFPWCwwREFBQTtNQUFJYyxHQUFHLEVBQUVIO0lBQU8sR0FBRUEsTUFBVyxDQUFDO0VBQ3pDLENBQUMsQ0FDQyxDQUFDLGVBQ1BYLDBEQUFBO0lBQVFlLE9BQU8sRUFBRVA7RUFBUyxHQUFDLFdBQWlCLENBQzNDLENBQUM7QUFFZCxDQUFDO0FBRUQsaUVBQWVOLE9BQU87Ozs7Ozs7Ozs7OztBQ3ZCSTtBQUNrQjtBQUNaO0FBRWhDLElBQU1lLEdBQUcsR0FBRyxTQUFOQSxHQUFHQSxDQUFBO0VBQUEsb0JBQVNqQiwwREFBQSxDQUFDRSxnREFBTyxNQUFDLENBQUM7QUFBQTtBQUM1QixJQUFNZ0IsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHTCw0REFBVSxDQUFDRSxTQUFTLENBQUM7QUFDbENHLElBQUksQ0FBQ0MsTUFBTSxlQUFDdEIsMERBQUEsQ0FBQ2lCLEdBQUcsTUFBQyxDQUFDLENBQUM7Ozs7Ozs7O1VDUG5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDZfRHppZW5fOS0xMC8wMV91c2VTdGF0ZS8wNV9aYWRhbmllXzUvanMvTnVtYmVycy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNl9Eemllbl85LTEwLzAxX3VzZVN0YXRlLzA1X1phZGFuaWVfNS9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBOdW1iZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IFtudW1iZXJzLCBzZXROdW1iZXJzXSA9IHVzZVN0YXRlKFs1NCwgNzYsIDI0LCA2MywgNCwgNTQsIDgyLCAzNiwgMTMsIDgwLCAxMCwgNjksIDQsIDIzLCA0MF0pXG4gICAgY29uc3Qgc2hvd0V2ZW4gPSAoKSA9PiB7XG4gICAgICAgIHNldE51bWJlcnMocHJldlN0YXRlID0+IG51bWJlcnMuZmlsdGVyKG51bWJlciA9PiB7XG4gICAgICAgICAgICBpZiAobnVtYmVyICUgMiA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudW1iZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxpc3Q+XG4gICAgICAgICAgICAgICAge251bWJlcnMubWFwKG51bWJlciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8dWwga2V5PXtudW1iZXJ9PntudW1iZXJ9PC91bD5cbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvbGlzdD5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2hvd0V2ZW59PlNob3cgZXZlbjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyczsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgTnVtYmVycyBmcm9tIFwiLi9OdW1iZXJzXCI7XG5cbmNvbnN0IEFwcCA9ICgpID0+IDxOdW1iZXJzLz5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbnJvb3QucmVuZGVyKDxBcHAvPik7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2Y2M2YjRkMzRmOGZlODY4MDY3YVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTnVtYmVycyIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsIm51bWJlcnMiLCJzZXROdW1iZXJzIiwic2hvd0V2ZW4iLCJwcmV2U3RhdGUiLCJmaWx0ZXIiLCJudW1iZXIiLCJjcmVhdGVFbGVtZW50IiwibWFwIiwia2V5Iiwib25DbGljayIsImNyZWF0ZVJvb3QiLCJBcHAiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=