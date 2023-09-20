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

var DynamicLego = function DynamicLego() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState2 = _slicedToArray(_useState, 2),
    lego = _useState2[0],
    addLego = _useState2[1];
  var changeHandler = function changeHandler(e) {
    addLego(e.target.value);
    e.preventDefault();
  };
  var legoBuilder = function legoBuilder(number) {
    var arr = [];
    for (var i = 1; i <= number; i++) {
      arr.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        key: i,
        style: {
          backgroundColor: "red",
          height: "50px",
          width: "".concat(50 * i, "px")
        }
      }));
    }
    return arr;
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "number",
    onChange: function onChange(e) {
      return changeHandler(e);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, legoBuilder(lego)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DynamicLego);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5335e5e96a26a5be0954")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41MWMyMTI3YWNkZGIzNGRkZWMyYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUV0QyxJQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBQSxFQUFTO0VBQ3RCLElBQUFDLFNBQUEsR0FBd0JGLCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBQUFHLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQTVCRyxJQUFJLEdBQUFGLFVBQUE7SUFBRUcsT0FBTyxHQUFBSCxVQUFBO0VBRXBCLElBQU1JLGFBQWEsR0FBRyxTQUFoQkEsYUFBYUEsQ0FBSUMsQ0FBQyxFQUFLO0lBQ3pCRixPQUFPLENBQUNFLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUM7SUFDdkJGLENBQUMsQ0FBQ0csY0FBYyxDQUFDLENBQUM7RUFDdEIsQ0FBQztFQUVELElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFJQyxNQUFNLEVBQUs7SUFDNUIsSUFBTUMsR0FBRyxHQUFHLEVBQUU7SUFDZCxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsSUFBSUYsTUFBTSxFQUFFRSxDQUFDLEVBQUUsRUFBRTtNQUM5QkQsR0FBRyxDQUFDRSxJQUFJLGVBQ0pqQiwwREFBQTtRQUFJbUIsR0FBRyxFQUFFSCxDQUFFO1FBQUNJLEtBQUssRUFBRTtVQUNmQyxlQUFlLEVBQUUsS0FBSztVQUN0QkMsTUFBTSxFQUFFLE1BQU07VUFDZEMsS0FBSyxLQUFBQyxNQUFBLENBQUssRUFBRSxHQUFDUixDQUFDO1FBQ2xCO01BQUUsQ0FBSyxDQUNYLENBQUM7SUFDTDtJQUNBLE9BQU9ELEdBQUc7RUFDZCxDQUFDO0VBRUQsb0JBQ0lmLDBEQUFBLDJCQUNJQSwwREFBQSw0QkFDSUEsMERBQUE7SUFBT3lCLElBQUksRUFBQyxRQUFRO0lBQUNDLFFBQVEsRUFBRSxTQUFBQSxTQUFBakIsQ0FBQztNQUFBLE9BQUlELGFBQWEsQ0FBQ0MsQ0FBQyxDQUFDO0lBQUE7RUFBQyxDQUFDLENBQ3BELENBQUMsZUFDUFQsMERBQUEsYUFBS2EsV0FBVyxDQUFDUCxJQUFJLENBQU0sQ0FDMUIsQ0FBQztBQUVkLENBQUM7QUFFRCxpRUFBZUosV0FBVzs7Ozs7Ozs7VUNsQzFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTFfRHppZW5fMTgvMDJfRm9ybXVsYXJ6ZV8tX2NpYWdfZGFsc3p5X3phZGFuLzAzX1phZGFuaWVfMy9qcy9EeW5hbWljTGVnby5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IER5bmFtaWNMZWdvID0gKCkgPT4ge1xuICAgIGNvbnN0IFtsZWdvLCBhZGRMZWdvXSA9IHVzZVN0YXRlKDEpXG5cbiAgICBjb25zdCBjaGFuZ2VIYW5kbGVyID0gKGUpID0+IHtcbiAgICAgICAgYWRkTGVnbyhlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBjb25zdCBsZWdvQnVpbGRlciA9IChudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3QgYXJyID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IG51bWJlcjsgaSsrKSB7XG4gICAgICAgICAgICBhcnIucHVzaChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpfSBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmVkXCIsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI1MHB4XCIsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBgJHs1MCppfXB4YFxuICAgICAgICAgICAgICAgIH19PjwvbGk+XG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgb25DaGFuZ2U9e2UgPT4gY2hhbmdlSGFuZGxlcihlKX0vPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPHVsPntsZWdvQnVpbGRlcihsZWdvKX08L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRHluYW1pY0xlZ287IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNTMzNWU1ZTk2YTI2YTViZTA5NTRcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkR5bmFtaWNMZWdvIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwibGVnbyIsImFkZExlZ28iLCJjaGFuZ2VIYW5kbGVyIiwiZSIsInRhcmdldCIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJsZWdvQnVpbGRlciIsIm51bWJlciIsImFyciIsImkiLCJwdXNoIiwiY3JlYXRlRWxlbWVudCIsImtleSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiaGVpZ2h0Iiwid2lkdGgiLCJjb25jYXQiLCJ0eXBlIiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9