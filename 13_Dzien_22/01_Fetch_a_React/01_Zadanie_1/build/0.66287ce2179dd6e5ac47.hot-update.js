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
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    book = _useState2[0],
    setBook = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,whatwg_fetch__WEBPACK_IMPORTED_MODULE_1__.fetch)("https://www.googleapis.com/books/v1/volumes?q=isbn:".concat(isbn)).then(function (res) {
      return res.json();
    }).then(function (data) {
      setBook(data.items[0].volumeInfo.title);
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
/******/ 	__webpack_require__.h = () => ("88c90a8e1243f364a13a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42NjI4N2NlMjE3OWRkNmU1YWM0Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDZDtBQUVuQyxJQUFNSSxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBQUMsSUFBQSxFQUFlO0VBQUEsSUFBVkMsSUFBSSxHQUFBRCxJQUFBLENBQUpDLElBQUk7RUFDbkIsSUFBQUMsU0FBQSxHQUFzQk4sK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQU8sVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBM0JHLElBQUksR0FBQUYsVUFBQTtJQUFFRyxPQUFPLEdBQUFILFVBQUE7RUFFcEJOLGdEQUFTLENBQUMsWUFBTTtJQUNaQyxtREFBSyx1REFBQVMsTUFBQSxDQUF1RE4sSUFBSSxDQUFFLENBQUMsQ0FDOURPLElBQUksQ0FBQyxVQUFBQyxHQUFHO01BQUEsT0FBSUEsR0FBRyxDQUFDQyxJQUFJLENBQUMsQ0FBQztJQUFBLEVBQUMsQ0FDdkJGLElBQUksQ0FBQyxVQUFBRyxJQUFJLEVBQUk7TUFDVkwsT0FBTyxDQUFDSyxJQUFJLENBQUNDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsVUFBVSxDQUFDQyxLQUFLLENBQUM7SUFDM0MsQ0FBQyxDQUFDO0VBQ1YsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUNOLG9CQUNJbkIsMERBQUEsY0FDS1UsSUFBSSxnQkFBR1YsMERBQUEsYUFBS1UsSUFBUyxDQUFDLGdCQUFHViwwREFBQSxhQUFJLHlCQUFzQixDQUNuRCxDQUFDO0FBRWQsQ0FBQztBQUVELGlFQUFlSSxRQUFROzs7Ozs7Ozs7Ozs7QUNwQkc7QUFDb0I7QUFDWjtBQUVsQyxJQUFNa0IsR0FBRyxHQUFHLFNBQU5BLEdBQUdBLENBQUE7RUFBQSxvQkFBU3RCLDBEQUFBLENBQUNJLGlEQUFRO0lBQUNFLElBQUksRUFBQztFQUFZLENBQUUsQ0FBQztBQUFBO0FBQ2hELElBQU1pQixTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUdMLDREQUFVLENBQUNFLFNBQVMsQ0FBQztBQUNsQ0csSUFBSSxDQUFDQyxNQUFNLGVBQUMzQiwwREFBQSxDQUFDc0IsR0FBRyxNQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7VUNQbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xM19Eemllbl8yMi8wMV9GZXRjaF9hX1JlYWN0LzAxX1phZGFuaWVfMS9qcy9Cb29rSW5mby5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xM19Eemllbl8yMi8wMV9GZXRjaF9hX1JlYWN0LzAxX1phZGFuaWVfMS9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2ZldGNofSBmcm9tIFwid2hhdHdnLWZldGNoXCI7XG5cbmNvbnN0IEJvb2tJbmZvID0gKHtpc2JufSkgPT4ge1xuICAgIGNvbnN0IFtib29rLCBzZXRCb29rXT11c2VTdGF0ZShcIlwiKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoKGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9ib29rcy92MS92b2x1bWVzP3E9aXNibjoke2lzYm59YClcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0Qm9vayhkYXRhLml0ZW1zWzBdLnZvbHVtZUluZm8udGl0bGUpXG4gICAgICAgICAgICB9KTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtib29rID8gPGgxPntib29rfTwvaDE+IDogPGgyPiDFgWFkb3dhbmllIGRhbnljaCA8L2gyPn1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2tJbmZvOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IEJvb2tJbmZvIGZyb20gXCIuL0Jvb2tJbmZvXCI7XG5cbmNvbnN0IEFwcCA9ICgpID0+IDxCb29rSW5mbyBpc2JuPVwiMDc0NzUzMjY5OVwiIC8+XG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5yb290LnJlbmRlcig8QXBwLz4pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiODhjOTBhOGUxMjQzZjM2NGExM2FcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImZldGNoIiwiQm9va0luZm8iLCJfcmVmIiwiaXNibiIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImJvb2siLCJzZXRCb29rIiwiY29uY2F0IiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiaXRlbXMiLCJ2b2x1bWVJbmZvIiwidGl0bGUiLCJjcmVhdGVFbGVtZW50IiwiY3JlYXRlUm9vdCIsIkFwcCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==