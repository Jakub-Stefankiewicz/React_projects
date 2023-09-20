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

var Counter = function Counter() {
  var _useState = useState(10),
    _useState2 = _slicedToArray(_useState, 2),
    counter = _useState2[0],
    setCounter = _useState2[1];
  var addCounter = function addCounter() {
    setCounter(function (prevState) {
      return prevState + 1;
    });
  };
  var removeCounter = function removeCounter() {
    setCounter(function (prevState) {
      return prevState - 1;
    });
  };
  var reset = function reset() {
    setCounter(10);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Liczba klikni\u0119\u0107 ", counter), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: addCounter
  }, "+"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: removeCounter
  }, "-"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: reset
  }, "Reset"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Counter);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("48bbdb4d563b3ed62837")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wODExYzU0YTc0NGZkMTJmN2Q0Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUUxQixJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBQSxFQUFTO0VBRWxCLElBQUFDLFNBQUEsR0FBOEJDLFFBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQUMsVUFBQSxHQUFBQyxjQUFBLENBQUFILFNBQUE7SUFBbkNJLE9BQU8sR0FBQUYsVUFBQTtJQUFFRyxVQUFVLEdBQUFILFVBQUE7RUFDMUIsSUFBTUksVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUEsRUFBUztJQUNyQkQsVUFBVSxDQUFDLFVBQUNFLFNBQVM7TUFBQSxPQUFLQSxTQUFTLEdBQUcsQ0FBQztJQUFBLEVBQUM7RUFDNUMsQ0FBQztFQUVELElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBYUEsQ0FBQSxFQUFTO0lBQ3hCSCxVQUFVLENBQUMsVUFBQ0UsU0FBUztNQUFBLE9BQUtBLFNBQVMsR0FBRyxDQUFDO0lBQUEsRUFBQztFQUM1QyxDQUFDO0VBRUQsSUFBTUUsS0FBSyxHQUFFLFNBQVBBLEtBQUtBLENBQUEsRUFBUTtJQUNmSixVQUFVLENBQUMsRUFBRSxDQUFDO0VBQ2xCLENBQUM7RUFFRCxvQkFDSVAsMERBQUEsMkJBQ0lBLDBEQUFBLGFBQUksNEJBQWdCLEVBQUNNLE9BQVksQ0FBQyxlQUNsQ04sMERBQUE7SUFBUWEsT0FBTyxFQUFFTDtFQUFXLEdBQUMsR0FBUyxDQUFDLGVBQ3ZDUiwwREFBQTtJQUFRYSxPQUFPLEVBQUVIO0VBQWMsR0FBQyxHQUFTLENBQUMsZUFDMUNWLDBEQUFBO0lBQVFhLE9BQU8sRUFBRUY7RUFBTSxHQUFDLE9BQWEsQ0FDcEMsQ0FBQztBQUVkLENBQUM7QUFFRCxpRUFBZVYsT0FBTzs7Ozs7Ozs7VUMzQnRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDZfRHppZW5fOS0xMC8wMV91c2VTdGF0ZS8wMV9aYWRhbmllXzEvanMvQ291bnRlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IENvdW50ZXIgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbY291bnRlciwgc2V0Q291bnRlcl0gPSB1c2VTdGF0ZSgxMCk7XG4gICAgY29uc3QgYWRkQ291bnRlciA9ICgpID0+IHtcbiAgICAgICAgc2V0Q291bnRlcigocHJldlN0YXRlKSA9PiBwcmV2U3RhdGUgKyAxKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVtb3ZlQ291bnRlciA9ICgpID0+IHtcbiAgICAgICAgc2V0Q291bnRlcigocHJldlN0YXRlKSA9PiBwcmV2U3RhdGUgLSAxKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzZXQ9ICgpID0+IHtcbiAgICAgICAgc2V0Q291bnRlcigxMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMj5MaWN6YmEga2xpa25pxJnEhyB7Y291bnRlcn08L2gyPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXthZGRDb3VudGVyfT4rPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3JlbW92ZUNvdW50ZXJ9Pi08L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cmVzZXR9PlJlc2V0PC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb3VudGVyOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjQ4YmJkYjRkNTYzYjNlZDYyODM3XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ291bnRlciIsIl91c2VTdGF0ZSIsInVzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiY291bnRlciIsInNldENvdW50ZXIiLCJhZGRDb3VudGVyIiwicHJldlN0YXRlIiwicmVtb3ZlQ291bnRlciIsInJlc2V0IiwiY3JlYXRlRWxlbWVudCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9