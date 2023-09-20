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
/* harmony import */ var _ReceiptItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39);





var Receipt = function Receipt(_ref) {
  var items = _ref.items;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ReceiptHeader__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ReceiptItems__WEBPACK_IMPORTED_MODULE_3__["default"], {
    items: items
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ReceiptFooter__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sum: _ReceiptItem__WEBPACK_IMPORTED_MODULE_4__.sum
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Receipt);

/***/ }),

/***/ 39:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "sum": () => (/* binding */ sum)
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
/******/ 	__webpack_require__.h = () => ("cfa64a23c9ba239f76ec")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zZWJkZWFlODhjZWVlZGIwNjRiNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDa0I7QUFDQTtBQUNGO0FBQ1Q7QUFFakMsSUFBTUssT0FBTyxHQUFHLFNBQVZBLE9BQU9BLENBQUFDLElBQUEsRUFBZ0I7RUFBQSxJQUFYQyxLQUFLLEdBQUFELElBQUEsQ0FBTEMsS0FBSztFQUNuQixvQkFDSVAsMERBQUE7SUFBT1MsU0FBUyxFQUFDO0VBQU8sZ0JBQ3BCVCwwREFBQSxDQUFDQyxzREFBYSxNQUFDLENBQUMsZUFDaEJELDBEQUFBLENBQUNHLHFEQUFZO0lBQUNJLEtBQUssRUFBRUE7RUFBTSxDQUFFLENBQUMsZUFDOUJQLDBEQUFBLENBQUNFLHNEQUFhO0lBQUNFLEdBQUcsRUFBRUEsNkNBQUdBO0VBQUMsQ0FBQyxDQUN0QixDQUFDO0FBRWhCLENBQUM7QUFFRCxpRUFBZUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7QUNoQkk7QUFFMUIsSUFBSUQsR0FBRyxHQUFHLENBQUM7QUFDWCxJQUFNTSxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBQUosSUFBQSxFQUFlO0VBQUEsSUFBVkssSUFBSSxHQUFBTCxJQUFBLENBQUpLLElBQUk7RUFDdEIsb0JBQ0lYLDBEQUFBLDBCQUNJQSwwREFBQSxhQUFLVyxJQUFJLENBQUNDLElBQVMsQ0FBQyxlQUNwQlosMERBQUEsYUFBS1csSUFBSSxDQUFDRSxZQUFpQixDQUFDLGVBQzVCYiwwREFBQSxhQUFLVyxJQUFJLENBQUNHLEdBQVEsQ0FBQyxlQUNuQmQsMERBQUE7SUFBSWUsR0FBRyxFQUFFWCxHQUFHLEdBQUdBLEdBQUcsR0FBSU8sSUFBSSxDQUFDRSxZQUFZLEdBQUdGLElBQUksQ0FBQ0c7RUFBSyxHQUFFLENBQUNILElBQUksQ0FBQ0UsWUFBWSxHQUFHRixJQUFJLENBQUNHLEdBQUcsRUFBRUUsT0FBTyxDQUFDLENBQUMsQ0FBTSxDQUNwRyxDQUFDO0FBRWIsQ0FBQztBQUVVO0FBQ1gsaUVBQWVOLFdBQVc7Ozs7Ozs7O1VDZjFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDRfRHppZW5fNS03LzAyX1BvZHN1bW93YW5pZS8wMV9aYWRhbmllL2pzL2RhdGEvUmVjZWlwdC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9Eemllbl81LTcvMDJfUG9kc3Vtb3dhbmllLzAxX1phZGFuaWUvanMvZGF0YS9SZWNlaXB0SXRlbS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVjZWlwdEhlYWRlciBmcm9tIFwiLi9SZWNlaXB0SGVhZGVyXCI7XG5pbXBvcnQgUmVjZWlwdEZvb3RlciBmcm9tIFwiLi9SZWNlaXB0Rm9vdGVyXCI7XG5pbXBvcnQgUmVjZWlwdEl0ZW1zIGZyb20gXCIuL1JlY2VpcHRJdGVtc1wiO1xuaW1wb3J0IHtzdW19IGZyb20gXCIuL1JlY2VpcHRJdGVtXCJcblxuY29uc3QgUmVjZWlwdCA9ICh7aXRlbXN9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgICAgICAgICA8UmVjZWlwdEhlYWRlci8+XG4gICAgICAgICAgICA8UmVjZWlwdEl0ZW1zIGl0ZW1zPXtpdGVtc30gLz5cbiAgICAgICAgICAgIDxSZWNlaXB0Rm9vdGVyIHN1bT17c3VtfS8+XG4gICAgICAgIDwvdGFibGU+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlY2VpcHQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxubGV0IHN1bSA9IDA7XG5jb25zdCBSZWNlaXB0SXRlbSA9ICh7aXRlbX0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+e2l0ZW0ubmFtZX08L3RkPlxuICAgICAgICAgICAgPHRkPntpdGVtLnNpbmdsZV9wcmljZX08L3RkPlxuICAgICAgICAgICAgPHRkPntpdGVtLnF0eX08L3RkPlxuICAgICAgICAgICAgPHRkIGtleT17c3VtID0gc3VtICsgKGl0ZW0uc2luZ2xlX3ByaWNlICogaXRlbS5xdHkpfT57KGl0ZW0uc2luZ2xlX3ByaWNlICogaXRlbS5xdHkpLnRvRml4ZWQoMil9PC90ZD5cbiAgICAgICAgPC90cj5cbiAgICApO1xufTtcblxuZXhwb3J0IHtzdW19XG5leHBvcnQgZGVmYXVsdCBSZWNlaXB0SXRlbTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjZmE2NGEyM2M5YmEyMzlmNzZlY1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIlJlY2VpcHRIZWFkZXIiLCJSZWNlaXB0Rm9vdGVyIiwiUmVjZWlwdEl0ZW1zIiwic3VtIiwiUmVjZWlwdCIsIl9yZWYiLCJpdGVtcyIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJSZWNlaXB0SXRlbSIsIml0ZW0iLCJuYW1lIiwic2luZ2xlX3ByaWNlIiwicXR5Iiwia2V5IiwidG9GaXhlZCJdLCJzb3VyY2VSb290IjoiIn0=