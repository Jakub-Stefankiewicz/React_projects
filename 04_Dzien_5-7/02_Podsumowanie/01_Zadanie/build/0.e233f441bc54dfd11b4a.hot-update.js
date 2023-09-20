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
/* harmony import */ var _ReceiptItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38);




var Receipt = function Receipt(_ref) {
  var items = _ref.items;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ReceiptHeader__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ReceiptItems__WEBPACK_IMPORTED_MODULE_3__["default"], {
    items: items
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Receipt);

/***/ }),

/***/ 39:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var sum = 0;
var ReceiptItem = function ReceiptItem(_ref) {
  var item = _ref.item;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, item.single_price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, item.qty), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    key: sum = sum + item.single_price * item.qty
  }, (item.single_price * item.qty).toFixed(2)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReceiptItem);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9cd5e9442a4d952f6d67")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lMjMzZjQ0MWJjNTRkZmQxMWI0YS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNrQjtBQUNBO0FBQ0Y7QUFHMUMsSUFBTUksT0FBTyxHQUFHLFNBQVZBLE9BQU9BLENBQUFDLElBQUEsRUFBZ0I7RUFBQSxJQUFYQyxLQUFLLEdBQUFELElBQUEsQ0FBTEMsS0FBSztFQUNuQixvQkFDSU4sMERBQUE7SUFBT1EsU0FBUyxFQUFDO0VBQU8sZ0JBQ3BCUiwwREFBQSxDQUFDQyxzREFBYSxNQUFDLENBQUMsZUFDaEJELDBEQUFBLENBQUNHLHFEQUFZO0lBQUNHLEtBQUssRUFBRUE7RUFBTSxDQUFFLENBRTFCLENBQUM7QUFFaEIsQ0FBQztBQUVELGlFQUFlRixPQUFPOzs7Ozs7Ozs7Ozs7O0FDaEJJO0FBRTFCLElBQUlLLEdBQUcsR0FBRyxDQUFDO0FBQ1gsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUFMLElBQUEsRUFBZTtFQUFBLElBQVZNLElBQUksR0FBQU4sSUFBQSxDQUFKTSxJQUFJO0VBQ3RCLG9CQUNJWCwwREFBQSwwQkFDSUEsMERBQUEsYUFBS1csSUFBSSxDQUFDQyxJQUFTLENBQUMsZUFDcEJaLDBEQUFBLGFBQUtXLElBQUksQ0FBQ0UsWUFBaUIsQ0FBQyxlQUM1QmIsMERBQUEsYUFBS1csSUFBSSxDQUFDRyxHQUFRLENBQUMsZUFDbkJkLDBEQUFBO0lBQUllLEdBQUcsRUFBRU4sR0FBRyxHQUFHQSxHQUFHLEdBQUlFLElBQUksQ0FBQ0UsWUFBWSxHQUFHRixJQUFJLENBQUNHO0VBQUssR0FBRSxDQUFDSCxJQUFJLENBQUNFLFlBQVksR0FBR0YsSUFBSSxDQUFDRyxHQUFHLEVBQUVFLE9BQU8sQ0FBQyxDQUFDLENBQU0sQ0FDcEcsQ0FBQztBQUViLENBQUM7QUFFRCxpRUFBZU4sV0FBVzs7Ozs7Ozs7VUNkMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9Eemllbl81LTcvMDJfUG9kc3Vtb3dhbmllLzAxX1phZGFuaWUvanMvZGF0YS9SZWNlaXB0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0R6aWVuXzUtNy8wMl9Qb2RzdW1vd2FuaWUvMDFfWmFkYW5pZS9qcy9kYXRhL1JlY2VpcHRJdGVtLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWNlaXB0SGVhZGVyIGZyb20gXCIuL1JlY2VpcHRIZWFkZXJcIjtcbmltcG9ydCBSZWNlaXB0Rm9vdGVyIGZyb20gXCIuL1JlY2VpcHRGb290ZXJcIjtcbmltcG9ydCBSZWNlaXB0SXRlbXMgZnJvbSBcIi4vUmVjZWlwdEl0ZW1zXCI7XG5cblxuY29uc3QgUmVjZWlwdCA9ICh7aXRlbXN9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgICAgICAgICA8UmVjZWlwdEhlYWRlci8+XG4gICAgICAgICAgICA8UmVjZWlwdEl0ZW1zIGl0ZW1zPXtpdGVtc30gLz5cbiAgICAgICAgICAgIHsvKjxSZWNlaXB0Rm9vdGVyIHN1bT17c3VtfS8+Ki99XG4gICAgICAgIDwvdGFibGU+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlY2VpcHQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxubGV0IHN1bSA9IDA7XG5jb25zdCBSZWNlaXB0SXRlbSA9ICh7aXRlbX0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+e2l0ZW0ubmFtZX08L3RkPlxuICAgICAgICAgICAgPHRkPntpdGVtLnNpbmdsZV9wcmljZX08L3RkPlxuICAgICAgICAgICAgPHRkPntpdGVtLnF0eX08L3RkPlxuICAgICAgICAgICAgPHRkIGtleT17c3VtID0gc3VtICsgKGl0ZW0uc2luZ2xlX3ByaWNlICogaXRlbS5xdHkpfT57KGl0ZW0uc2luZ2xlX3ByaWNlICogaXRlbS5xdHkpLnRvRml4ZWQoMil9PC90ZD5cbiAgICAgICAgPC90cj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVjZWlwdEl0ZW07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOWNkNWU5NDQyYTRkOTUyZjZkNjdcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJSZWNlaXB0SGVhZGVyIiwiUmVjZWlwdEZvb3RlciIsIlJlY2VpcHRJdGVtcyIsIlJlY2VpcHQiLCJfcmVmIiwiaXRlbXMiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic3VtIiwiUmVjZWlwdEl0ZW0iLCJpdGVtIiwibmFtZSIsInNpbmdsZV9wcmljZSIsInF0eSIsImtleSIsInRvRml4ZWQiXSwic291cmNlUm9vdCI6IiJ9