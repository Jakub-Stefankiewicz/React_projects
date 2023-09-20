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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ReceiptFooter__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sum: sum
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

var ReceiptItem = function ReceiptItem() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReceiptItem);

/***/ }),

/***/ 38:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ReceiptItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39);


var sum = 0;
var ReceiptItems = function ReceiptItems(_ref) {
  var items = _ref.items;
  return items.map(function (el) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, el.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, el.single_price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, el.qty), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      key: sum = sum + el.single_price * el.qty
    }, (el.single_price * el.qty).toFixed(2)));
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReceiptItems);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("25e5cf28e591fc6ecfa0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mZTkwNTQwZDI1ZWFlNWFiYjY4Zi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNrQjtBQUNBO0FBQ0Y7QUFHMUMsSUFBTUksT0FBTyxHQUFHLFNBQVZBLE9BQU9BLENBQUFDLElBQUEsRUFBZ0I7RUFBQSxJQUFYQyxLQUFLLEdBQUFELElBQUEsQ0FBTEMsS0FBSztFQUNuQixvQkFDSU4sMERBQUE7SUFBT1EsU0FBUyxFQUFDO0VBQU8sZ0JBQ3BCUiwwREFBQSxDQUFDQyxzREFBYSxNQUFDLENBQUMsZUFDaEJELDBEQUFBLENBQUNHLHFEQUFZO0lBQUNHLEtBQUssRUFBRUE7RUFBTSxDQUFFLENBQUMsZUFJOUJOLDBEQUFBLENBQUNFLHNEQUFhO0lBQUNPLEdBQUcsRUFBRUE7RUFBSSxDQUFDLENBQ3RCLENBQUM7QUFFaEIsQ0FBQztBQUVELGlFQUFlTCxPQUFPOzs7Ozs7Ozs7Ozs7O0FDbkJJO0FBRTFCLElBQU1NLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFBLEVBQVM7RUFDdEIsb0JBQ0lWLDBEQUFBLFlBRUssQ0FBQztBQUVkLENBQUM7QUFFRCxpRUFBZVUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNjO0FBRXhDLElBQUlELEdBQUcsR0FBRyxDQUFDO0FBRVgsSUFBTU4sWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUFFLElBQUEsRUFBZ0I7RUFBQSxJQUFYQyxLQUFLLEdBQUFELElBQUEsQ0FBTEMsS0FBSztFQUN4QixPQUNJQSxLQUFLLENBQUNLLEdBQUcsQ0FBQyxVQUFBQyxFQUFFLEVBQUk7SUFDWixvQkFBUVosMERBQUEsMEJBQ0FBLDBEQUFBLGFBQUtZLEVBQUUsQ0FBQ0MsSUFBUyxDQUFDLGVBQ2xCYiwwREFBQSxhQUFLWSxFQUFFLENBQUNFLFlBQWlCLENBQUMsZUFDMUJkLDBEQUFBLGFBQUtZLEVBQUUsQ0FBQ0csR0FBUSxDQUFDLGVBQ2pCZiwwREFBQTtNQUFJZ0IsR0FBRyxFQUFFUCxHQUFHLEdBQUdBLEdBQUcsR0FBSUcsRUFBRSxDQUFDRSxZQUFZLEdBQUdGLEVBQUUsQ0FBQ0c7SUFBSyxHQUFFLENBQUNILEVBQUUsQ0FBQ0UsWUFBWSxHQUFHRixFQUFFLENBQUNHLEdBQUcsRUFBRUUsT0FBTyxDQUFDLENBQUMsQ0FBTSxDQUM1RixDQUFDO0VBRWIsQ0FBQyxDQUFDO0FBRVYsQ0FBQztBQUVELGlFQUFlZCxZQUFZOzs7Ozs7OztVQ25CM0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNF9Eemllbl81LTcvMDJfUG9kc3Vtb3dhbmllLzAxX1phZGFuaWUvanMvZGF0YS9SZWNlaXB0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0R6aWVuXzUtNy8wMl9Qb2RzdW1vd2FuaWUvMDFfWmFkYW5pZS9qcy9kYXRhL1JlY2VpcHRJdGVtLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzA0X0R6aWVuXzUtNy8wMl9Qb2RzdW1vd2FuaWUvMDFfWmFkYW5pZS9qcy9kYXRhL1JlY2VpcHRJdGVtcy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVjZWlwdEhlYWRlciBmcm9tIFwiLi9SZWNlaXB0SGVhZGVyXCI7XG5pbXBvcnQgUmVjZWlwdEZvb3RlciBmcm9tIFwiLi9SZWNlaXB0Rm9vdGVyXCI7XG5pbXBvcnQgUmVjZWlwdEl0ZW1zIGZyb20gXCIuL1JlY2VpcHRJdGVtc1wiO1xuXG5cbmNvbnN0IFJlY2VpcHQgPSAoe2l0ZW1zfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgPFJlY2VpcHRIZWFkZXIvPlxuICAgICAgICAgICAgPFJlY2VpcHRJdGVtcyBpdGVtcz17aXRlbXN9IC8+XG4gICAgICAgICAgICB7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDxSZWNlaXB0Rm9vdGVyIHN1bT17c3VtfS8+XG4gICAgICAgIDwvdGFibGU+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlY2VpcHQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgUmVjZWlwdEl0ZW0gPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVjZWlwdEl0ZW07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWNlaXB0SXRlbSBmcm9tIFwiLi9SZWNlaXB0SXRlbVwiO1xuXG5sZXQgc3VtID0gMDtcblxuY29uc3QgUmVjZWlwdEl0ZW1zID0gKHtpdGVtc30pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICBpdGVtcy5tYXAoZWwgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICg8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57ZWwubmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2VsLnNpbmdsZV9wcmljZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2VsLnF0eX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtzdW0gPSBzdW0gKyAoZWwuc2luZ2xlX3ByaWNlICogZWwucXR5KX0+eyhlbC5zaW5nbGVfcHJpY2UgKiBlbC5xdHkpLnRvRml4ZWQoMil9PC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKVxuICAgICAgICB9KVxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWNlaXB0SXRlbXM7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMjVlNWNmMjhlNTkxZmM2ZWNmYTBcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJSZWNlaXB0SGVhZGVyIiwiUmVjZWlwdEZvb3RlciIsIlJlY2VpcHRJdGVtcyIsIlJlY2VpcHQiLCJfcmVmIiwiaXRlbXMiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic3VtIiwiUmVjZWlwdEl0ZW0iLCJtYXAiLCJlbCIsIm5hbWUiLCJzaW5nbGVfcHJpY2UiLCJxdHkiLCJrZXkiLCJ0b0ZpeGVkIl0sInNvdXJjZVJvb3QiOiIifQ==