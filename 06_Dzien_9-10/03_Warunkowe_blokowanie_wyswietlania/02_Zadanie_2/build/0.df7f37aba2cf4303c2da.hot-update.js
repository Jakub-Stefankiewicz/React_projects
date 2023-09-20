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
/* harmony import */ var _data_fakeAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var AccountData = function AccountData() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    data = _useState2[0],
    setState = _useState2[1];
  var result = _data_fakeAPI_js__WEBPACK_IMPORTED_MODULE_1__["default"].then(function (callback) {
    setState(true);
    return callback;
  });
  console.log(result);
  if (data) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Posz\u0142o", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", null));
  } else {
    return null;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccountData);

/***/ }),

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _AccountData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);



var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AccountData__WEBPACK_IMPORTED_MODULE_2__["default"], null);
};
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ }),

/***/ 35:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var data = [{
  day: "01-01-2016",
  balance: 0,
  change: 0
}, {
  day: "01-02-2016",
  balance: -2000,
  change: -2000
}, {
  day: "01-03-2016",
  balance: 6000,
  change: 8000
}, {
  day: "01-04-2016",
  balance: 3500,
  change: -2500
}, {
  day: "01-05-2016",
  balance: 25000,
  change: 21500
}, {
  day: "01-06-2016",
  balance: 38000,
  change: 16500
}, {
  day: "01-07-2016",
  balance: 17550,
  change: -20450
}, {
  day: "01-08-2016",
  balance: 16500,
  change: -1050
}, {
  day: "01-09-2016",
  balance: 16500,
  change: 0
}, {
  day: "01-10-2016",
  balance: 28000,
  change: 11500
}, {
  day: "01-11-2016",
  balance: 32000,
  change: 4000
}, {
  day: "01-12-2016",
  balance: 27500,
  change: -4500
}];

/**
 * Nieco później omówimy, czym jest Promise
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Promise(function (resolve) {
  setTimeout(function () {
    resolve(data);
  }, Math.floor(Math.random() * 2000 + 3000));
}));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a2371893dddc7a458d40")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQSxpRUFBZSxJQUFJQyxPQUFPLENBQUMsVUFBQUMsT0FBTyxFQUFJO0VBQ3BDQyxVQUFVLENBQUMsWUFBTTtJQUNmRCxPQUFPLENBQUNuQixJQUFJLENBQUM7RUFDZixDQUFDLEVBQUVxQixJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQztBQUM3QyxDQUFDLENBQUM7Ozs7Ozs7O1VDdEVGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDZfRHppZW5fOS0xMC8wM19XYXJ1bmtvd2VfYmxva293YW5pZV93eXN3aWV0bGFuaWEvMDJfWmFkYW5pZV8yL2pzL0FjY291bnREYXRhLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzA2X0R6aWVuXzktMTAvMDNfV2FydW5rb3dlX2Jsb2tvd2FuaWVfd3lzd2lldGxhbmlhLzAyX1phZGFuaWVfMi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDZfRHppZW5fOS0xMC8wM19XYXJ1bmtvd2VfYmxva293YW5pZV93eXN3aWV0bGFuaWEvMDJfWmFkYW5pZV8yL2pzL2RhdGEvZmFrZUFQSS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRmFrZUFQSSBmcm9tIFwiLi9kYXRhL2Zha2VBUEkuanNcIjtcblxuY29uc3QgQWNjb3VudERhdGEgPSAoKSA9PiB7XG4gICAgY29uc3QgW2RhdGEsIHNldFN0YXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IHJlc3VsdD1GYWtlQVBJLnRoZW4oY2FsbGJhY2sgPT4ge1xuICAgICAgICBzZXRTdGF0ZSh0cnVlKTtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrO1xuICAgIH0pXG5cbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuXG4gICAgaWYgKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgUG9zesWCb1xuICAgICAgICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFjY291bnREYXRhOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IEFjY291bnREYXRhIGZyb20gXCIuL0FjY291bnREYXRhXCI7XG5cbmNvbnN0IEFwcCA9ICgpID0+IDxBY2NvdW50RGF0YS8+XG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5yb290LnJlbmRlcig8QXBwIC8+KTtcbiIsImNvbnN0IGRhdGEgPSBbXG4gIHtcbiAgICBkYXk6IFwiMDEtMDEtMjAxNlwiLFxuICAgIGJhbGFuY2U6IDAsXG4gICAgY2hhbmdlOiAwXG4gIH0sXG4gIHtcbiAgICBkYXk6IFwiMDEtMDItMjAxNlwiLFxuICAgIGJhbGFuY2U6IC0yMDAwLFxuICAgIGNoYW5nZTogLTIwMDBcbiAgfSxcbiAge1xuICAgIGRheTogXCIwMS0wMy0yMDE2XCIsXG4gICAgYmFsYW5jZTogNjAwMCxcbiAgICBjaGFuZ2U6IDgwMDBcbiAgfSxcbiAge1xuICAgIGRheTogXCIwMS0wNC0yMDE2XCIsXG4gICAgYmFsYW5jZTogMzUwMCxcbiAgICBjaGFuZ2U6IC0yNTAwXG4gIH0sXG4gIHtcbiAgICBkYXk6IFwiMDEtMDUtMjAxNlwiLFxuICAgIGJhbGFuY2U6IDI1MDAwLFxuICAgIGNoYW5nZTogMjE1MDBcbiAgfSxcbiAge1xuICAgIGRheTogXCIwMS0wNi0yMDE2XCIsXG4gICAgYmFsYW5jZTogMzgwMDAsXG4gICAgY2hhbmdlOiAxNjUwMFxuICB9LFxuICB7XG4gICAgZGF5OiBcIjAxLTA3LTIwMTZcIixcbiAgICBiYWxhbmNlOiAxNzU1MCxcbiAgICBjaGFuZ2U6IC0yMDQ1MFxuICB9LFxuICB7XG4gICAgZGF5OiBcIjAxLTA4LTIwMTZcIixcbiAgICBiYWxhbmNlOiAxNjUwMCxcbiAgICBjaGFuZ2U6IC0xMDUwXG4gIH0sXG4gIHtcbiAgICBkYXk6IFwiMDEtMDktMjAxNlwiLFxuICAgIGJhbGFuY2U6IDE2NTAwLFxuICAgIGNoYW5nZTogMFxuICB9LFxuICB7XG4gICAgZGF5OiBcIjAxLTEwLTIwMTZcIixcbiAgICBiYWxhbmNlOiAyODAwMCxcbiAgICBjaGFuZ2U6IDExNTAwXG4gIH0sXG4gIHtcbiAgICBkYXk6IFwiMDEtMTEtMjAxNlwiLFxuICAgIGJhbGFuY2U6IDMyMDAwLFxuICAgIGNoYW5nZTogNDAwMFxuICB9LFxuICB7XG4gICAgZGF5OiBcIjAxLTEyLTIwMTZcIixcbiAgICBiYWxhbmNlOiAyNzUwMCxcbiAgICBjaGFuZ2U6IC00NTAwXG4gIH1cbl07XG5cbi8qKlxuICogTmllY28gcMOzxbpuaWVqIG9tw7N3aW15LCBjenltIGplc3QgUHJvbWlzZVxuICovXG5leHBvcnQgZGVmYXVsdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgcmVzb2x2ZShkYXRhKTtcbiAgfSwgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjAwMCArIDMwMDApKTtcbn0pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYTIzNzE4OTNkZGRjN2E0NThkNDBcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkZha2VBUEkiLCJBY2NvdW50RGF0YSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImRhdGEiLCJzZXRTdGF0ZSIsInJlc3VsdCIsInRoZW4iLCJjYWxsYmFjayIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVFbGVtZW50IiwiY3JlYXRlUm9vdCIsIkFwcCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIiwiZGF5IiwiYmFsYW5jZSIsImNoYW5nZSIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSJdLCJzb3VyY2VSb290IjoiIn0=