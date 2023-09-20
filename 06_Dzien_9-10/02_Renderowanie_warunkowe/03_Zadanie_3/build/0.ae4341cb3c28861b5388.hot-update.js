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

var NumberInfo = function NumberInfo(_ref) {
  var number = _ref.number;
  var isPrime = true;
  for (var i = 2; i <= number / 2; i++) {
    if (number % 2 === 0) {
      isPrime = false;
      break;
    }
  }
  var pwd = true;
  if (Math.sqrt(number) % 2 === 0) {
    pwd = true;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("list", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    key: number
  }, number), number % 2 === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, "Parzysta") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, "Nieparzysta"), isPrime && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, "Liczba pierwsza"), pwd && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, "Pot\u0119ga dw\xF3jki")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NumberInfo);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b639268229e13d5929d1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hZTQzNDFjYjNjMjg4NjFiNTM4OC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUUxQixJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBQUMsSUFBQSxFQUFpQjtFQUFBLElBQVpDLE1BQU0sR0FBQUQsSUFBQSxDQUFOQyxNQUFNO0VBQ3ZCLElBQUlDLE9BQU8sR0FBQyxJQUFJO0VBQ2hCLEtBQUksSUFBSUMsQ0FBQyxHQUFDLENBQUMsRUFBRUEsQ0FBQyxJQUFFRixNQUFNLEdBQUMsQ0FBQyxFQUFFRSxDQUFDLEVBQUUsRUFBQztJQUMxQixJQUFJRixNQUFNLEdBQUMsQ0FBQyxLQUFHLENBQUMsRUFBQztNQUNiQyxPQUFPLEdBQUMsS0FBSztNQUNiO0lBQ0o7RUFDSjtFQUNBLElBQUlFLEdBQUcsR0FBQyxJQUFJO0VBQ1osSUFBR0MsSUFBSSxDQUFDQyxJQUFJLENBQUNMLE1BQU0sQ0FBQyxHQUFDLENBQUMsS0FBRyxDQUFDLEVBQUM7SUFDdkJHLEdBQUcsR0FBQyxJQUFJO0VBQ1o7RUFDQSxvQkFDSU4sMERBQUEsMkJBQ0lBLDBEQUFBLDRCQUNJQSwwREFBQTtJQUFJVSxHQUFHLEVBQUVQO0VBQU8sR0FBRUEsTUFBVyxDQUFDLEVBQzdCQSxNQUFNLEdBQUMsQ0FBQyxLQUFHLENBQUMsZ0JBQUdILDBEQUFBLGFBQUksVUFBWSxDQUFDLGdCQUFHQSwwREFBQSxhQUFJLGFBQWUsQ0FBQyxFQUN2REksT0FBTyxpQkFBSUosMERBQUEsYUFBSSxpQkFBbUIsQ0FBQyxFQUNuQ00sR0FBRyxpQkFBSU4sMERBQUEsYUFBSSx1QkFBaUIsQ0FDM0IsQ0FDTCxDQUFDO0FBRWQsQ0FBQztBQUVELGlFQUFlQyxVQUFVOzs7Ozs7OztVQzFCekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNl9Eemllbl85LTEwLzAyX1JlbmRlcm93YW5pZV93YXJ1bmtvd2UvMDNfWmFkYW5pZV8zL2pzL051bWJlckluZm8uanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBOdW1iZXJJbmZvID0gKHtudW1iZXJ9KSA9PiB7XG4gICAgbGV0IGlzUHJpbWU9dHJ1ZTtcbiAgICBmb3IobGV0IGk9MjsgaTw9bnVtYmVyLzI7IGkrKyl7XG4gICAgICAgIGlmIChudW1iZXIlMj09PTApe1xuICAgICAgICAgICAgaXNQcmltZT1mYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxldCBwd2Q9dHJ1ZTtcbiAgICBpZihNYXRoLnNxcnQobnVtYmVyKSUyPT09MCl7XG4gICAgICAgIHB3ZD10cnVlO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxpc3Q+XG4gICAgICAgICAgICAgICAgPHVsIGtleT17bnVtYmVyfT57bnVtYmVyfTwvdWw+XG4gICAgICAgICAgICAgICAge251bWJlciUyPT09MCA/IDx1bD5QYXJ6eXN0YTwvdWw+IDogPHVsPk5pZXBhcnp5c3RhPC91bD59XG4gICAgICAgICAgICAgICAge2lzUHJpbWUgJiYgPHVsPkxpY3piYSBwaWVyd3N6YTwvdWw+fVxuICAgICAgICAgICAgICAgIHtwd2QgJiYgPHVsPlBvdMSZZ2EgZHfDs2praTwvdWw+fVxuICAgICAgICAgICAgPC9saXN0PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVySW5mbzsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJiNjM5MjY4MjI5ZTEzZDU5MjlkMVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIk51bWJlckluZm8iLCJfcmVmIiwibnVtYmVyIiwiaXNQcmltZSIsImkiLCJwd2QiLCJNYXRoIiwic3FydCIsImNyZWF0ZUVsZW1lbnQiLCJrZXkiXSwic291cmNlUm9vdCI6IiJ9