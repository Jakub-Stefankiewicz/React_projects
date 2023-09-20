"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 35:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var BookInfo = function BookInfo(_ref) {
  var isbn = _ref.isbn;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    book = _useState2[0],
    setBook = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,whatwg_fetch__WEBPACK_IMPORTED_MODULE_1__.fetch)("https://www.googleapis.com/books/v1/volumes?q=isbn:".concat(isbn)).then(function (res) {
      return console.log(res);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, book ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, book) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, " \u0141adowanie danych "));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookInfo);

/***/ }),

/***/ 24:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var _BookInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35);



var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_BookInfo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isbn: "0747532699"
  });
};
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("591a33e89ed832c017a7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hMmY0NDQzMTI2ZGY3ZThmNjU3Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDZDtBQUVuQyxJQUFNSSxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBQUMsSUFBQSxFQUFlO0VBQUEsSUFBVkMsSUFBSSxHQUFBRCxJQUFBLENBQUpDLElBQUk7RUFDbkIsSUFBQUMsU0FBQSxHQUFzQk4sK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQU8sVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBOUJHLElBQUksR0FBQUYsVUFBQTtJQUFFRyxPQUFPLEdBQUFILFVBQUE7RUFDcEJOLGdEQUFTLENBQUMsWUFBTTtJQUNaQyxtREFBSyx1REFBQVMsTUFBQSxDQUF1RE4sSUFBSSxDQUFFLENBQUMsQ0FDOURPLElBQUksQ0FBQyxVQUFBQyxHQUFHO01BQUEsT0FBSUMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEdBQUcsQ0FBQztJQUFBLEVBQUM7RUFDdEMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUNOLG9CQUNJZCwwREFBQSxjQUNLVSxJQUFJLGdCQUFHViwwREFBQSxhQUFLVSxJQUFTLENBQUMsZ0JBQUdWLDBEQUFBLGFBQUkseUJBQXNCLENBQ25ELENBQUM7QUFFZCxDQUFDO0FBRUQsaUVBQWVJLFFBQVE7Ozs7Ozs7Ozs7OztBQ2hCRztBQUNvQjtBQUNaO0FBRWxDLElBQU1lLEdBQUcsR0FBRyxTQUFOQSxHQUFHQSxDQUFBO0VBQUEsb0JBQVNuQiwwREFBQSxDQUFDSSxpREFBUTtJQUFDRSxJQUFJLEVBQUM7RUFBWSxDQUFFLENBQUM7QUFBQTtBQUNoRCxJQUFNYyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUdMLDREQUFVLENBQUNFLFNBQVMsQ0FBQztBQUNsQ0csSUFBSSxDQUFDQyxNQUFNLGVBQUN4QiwwREFBQSxDQUFDbUIsR0FBRyxNQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7VUNQbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xM19Eemllbl8yMi8wMV9GZXRjaF9hX1JlYWN0LzAxX1phZGFuaWVfMS9qcy9Cb29rSW5mby5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xM19Eemllbl8yMi8wMV9GZXRjaF9hX1JlYWN0LzAxX1phZGFuaWVfMS9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2ZldGNofSBmcm9tIFwid2hhdHdnLWZldGNoXCI7XG5cbmNvbnN0IEJvb2tJbmZvID0gKHtpc2JufSkgPT4ge1xuICAgIGNvbnN0IFtib29rLCBzZXRCb29rXT11c2VTdGF0ZShmYWxzZSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmV0Y2goYGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2Jvb2tzL3YxL3ZvbHVtZXM/cT1pc2JuOiR7aXNibn1gKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IGNvbnNvbGUubG9nKHJlcykpO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge2Jvb2sgPyA8aDE+e2Jvb2t9PC9oMT4gOiA8aDI+IMWBYWRvd2FuaWUgZGFueWNoIDwvaDI+fVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQm9va0luZm87IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgQm9va0luZm8gZnJvbSBcIi4vQm9va0luZm9cIjtcblxuY29uc3QgQXBwID0gKCkgPT4gPEJvb2tJbmZvIGlzYm49XCIwNzQ3NTMyNjk5XCIgLz5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbnJvb3QucmVuZGVyKDxBcHAvPik7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1OTFhMzNlODllZDgzMmMwMTdhN1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZmV0Y2giLCJCb29rSW5mbyIsIl9yZWYiLCJpc2JuIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiYm9vayIsInNldEJvb2siLCJjb25jYXQiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUVsZW1lbnQiLCJjcmVhdGVSb290IiwiQXBwIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9