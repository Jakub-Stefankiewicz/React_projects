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
/* harmony import */ var _ReceiptHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);
/* harmony import */ var _ReceiptFooter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37);



var sum = 0;
var Receipt = function Receipt(_ref) {
  var items = _ref.items;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ReceiptHeader__WEBPACK_IMPORTED_MODULE_1__["default"], null), items.map(function (el) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, el.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, el.single_price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, el.qty), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      key: sum = sum + el.single_price * el.qty
    }, (el.single_price * el.qty).toFixed(2)));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ReceiptFooter__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sum: sum
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Receipt);

/***/ }),

/***/ 37:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var ReceiptFooter = function ReceiptFooter(_ref) {
  var sum = _ref.sum;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "RAZEM"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "-"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "-"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, sum.toFixed(2)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReceiptFooter);

/***/ }),

/***/ 36:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var ReceiptHeader = function ReceiptHeader() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "Nazwa"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "Cena"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "Ilo\u015B\u0107"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "\u0141\u0105czna cena"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReceiptHeader);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("fe90540d25eae5abb68f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41ZTMxNWVlZDc5ZGM0Y2IyZjcxOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2tCO0FBQ0E7QUFFNUMsSUFBSUcsR0FBRyxHQUFHLENBQUM7QUFDWCxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBQUMsSUFBQSxFQUFnQjtFQUFBLElBQVhDLEtBQUssR0FBQUQsSUFBQSxDQUFMQyxLQUFLO0VBQ25CLG9CQUNJTiwwREFBQTtJQUFPUSxTQUFTLEVBQUM7RUFBTyxnQkFDcEJSLDBEQUFBLENBQUNDLHNEQUFhLE1BQUMsQ0FBQyxFQUVaSyxLQUFLLENBQUNHLEdBQUcsQ0FBQyxVQUFBQyxFQUFFLEVBQUk7SUFDWixvQkFBUVYsMERBQUEsMEJBQ0FBLDBEQUFBLGFBQUtVLEVBQUUsQ0FBQ0MsSUFBUyxDQUFDLGVBQ2xCWCwwREFBQSxhQUFLVSxFQUFFLENBQUNFLFlBQWlCLENBQUMsZUFDMUJaLDBEQUFBLGFBQUtVLEVBQUUsQ0FBQ0csR0FBUSxDQUFDLGVBQ2pCYiwwREFBQTtNQUFJYyxHQUFHLEVBQUVYLEdBQUcsR0FBR0EsR0FBRyxHQUFJTyxFQUFFLENBQUNFLFlBQVksR0FBR0YsRUFBRSxDQUFDRztJQUFLLEdBQUUsQ0FBQ0gsRUFBRSxDQUFDRSxZQUFZLEdBQUdGLEVBQUUsQ0FBQ0csR0FBRyxFQUFFRSxPQUFPLENBQUMsQ0FBQyxDQUFNLENBQzVGLENBQUM7RUFFYixDQUFDLENBQUMsZUFFTmYsMERBQUEsQ0FBQ0Usc0RBQWE7SUFBQ0MsR0FBRyxFQUFFQTtFQUFJLENBQUMsQ0FDdEIsQ0FBQztBQUVoQixDQUFDO0FBRUQsaUVBQWVDLE9BQU87Ozs7Ozs7Ozs7Ozs7QUN6Qkk7QUFFMUIsSUFBTUYsYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFBRyxJQUFBLEVBQWM7RUFBQSxJQUFURixHQUFHLEdBQUFFLElBQUEsQ0FBSEYsR0FBRztFQUN2QixvQkFDSUgsMERBQUEsMEJBQ0lBLDBEQUFBLGFBQUksT0FBUyxDQUFDLGVBQ2RBLDBEQUFBLGFBQUksR0FBSyxDQUFDLGVBQ1ZBLDBEQUFBLGFBQUksR0FBSyxDQUFDLGVBQ1ZBLDBEQUFBLGFBQUtHLEdBQUcsQ0FBQ1ksT0FBTyxDQUFDLENBQUMsQ0FBTSxDQUN4QixDQUFDO0FBRWIsQ0FBQztBQUVELGlFQUFlYixhQUFhOzs7Ozs7Ozs7Ozs7O0FDYkY7QUFFMUIsSUFBTUQsYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFBLEVBQVM7RUFDeEIsb0JBQ0lELDBEQUFBLDBCQUNJQSwwREFBQSxhQUFJLE9BQVMsQ0FBQyxlQUNkQSwwREFBQSxhQUFJLE1BQVEsQ0FBQyxlQUNiQSwwREFBQSxhQUFJLGlCQUFTLENBQUMsZUFDZEEsMERBQUEsYUFBSSx1QkFBZSxDQUNuQixDQUFDO0FBRWIsQ0FBQztBQUVELGlFQUFlQyxhQUFhOzs7Ozs7OztVQ2I1QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0R6aWVuXzUtNy8wMl9Qb2RzdW1vd2FuaWUvMDFfWmFkYW5pZS9qcy9kYXRhL1JlY2VpcHQuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRHppZW5fNS03LzAyX1BvZHN1bW93YW5pZS8wMV9aYWRhbmllL2pzL2RhdGEvUmVjZWlwdEZvb3Rlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9Eemllbl81LTcvMDJfUG9kc3Vtb3dhbmllLzAxX1phZGFuaWUvanMvZGF0YS9SZWNlaXB0SGVhZGVyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWNlaXB0SGVhZGVyIGZyb20gXCIuL1JlY2VpcHRIZWFkZXJcIjtcbmltcG9ydCBSZWNlaXB0Rm9vdGVyIGZyb20gXCIuL1JlY2VpcHRGb290ZXJcIjtcblxubGV0IHN1bSA9IDA7XG5jb25zdCBSZWNlaXB0ID0gKHtpdGVtc30pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cbiAgICAgICAgICAgIDxSZWNlaXB0SGVhZGVyLz5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpdGVtcy5tYXAoZWwgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2VsLm5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2VsLnNpbmdsZV9wcmljZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZWwucXR5fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17c3VtID0gc3VtICsgKGVsLnNpbmdsZV9wcmljZSAqIGVsLnF0eSl9PnsoZWwuc2luZ2xlX3ByaWNlICogZWwucXR5KS50b0ZpeGVkKDIpfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDxSZWNlaXB0Rm9vdGVyIHN1bT17c3VtfS8+XG4gICAgICAgIDwvdGFibGU+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlY2VpcHQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgUmVjZWlwdEZvb3RlciA9ICh7c3VtfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5SQVpFTTwvdGQ+XG4gICAgICAgICAgICA8dGQ+LTwvdGQ+XG4gICAgICAgICAgICA8dGQ+LTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e3N1bS50b0ZpeGVkKDIpfTwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlY2VpcHRGb290ZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgUmVjZWlwdEhlYWRlciA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+TmF6d2E8L3RkPlxuICAgICAgICAgICAgPHRkPkNlbmE8L3RkPlxuICAgICAgICAgICAgPHRkPklsb8WbxIc8L3RkPlxuICAgICAgICAgICAgPHRkPsWBxIVjem5hIGNlbmE8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWNlaXB0SGVhZGVyOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImZlOTA1NDBkMjVlYWU1YWJiNjhmXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiUmVjZWlwdEhlYWRlciIsIlJlY2VpcHRGb290ZXIiLCJzdW0iLCJSZWNlaXB0IiwiX3JlZiIsIml0ZW1zIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm1hcCIsImVsIiwibmFtZSIsInNpbmdsZV9wcmljZSIsInF0eSIsImtleSIsInRvRml4ZWQiXSwic291cmNlUm9vdCI6IiJ9