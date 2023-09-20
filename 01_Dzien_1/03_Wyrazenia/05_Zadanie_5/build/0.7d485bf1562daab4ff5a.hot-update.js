"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);


var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
var numberA = parseInt(prompt("Podaj liczbę A"));
var numberB = parseInt(prompt("Podaj liczbę B"));
var operation = prompt("Podaj +, -, * lub /");
var calc = function calc(a, b, operation) {
  switch (operation) {
    case "+":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, " ", a + b);
    case "-":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, " ", a - b);
    case "*":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, " ", a * b);
    case "/":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, " ", a / b);
    default:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "poda\u0142e\u015B \u017Ale co ma wykona\u0107, daj + - * lub /");
  }
};
root.render(calc(numberA, numberB, operation));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("bd8228d77b825f36f3c7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43ZDQ4NWJmMTU2MmRhYWI0ZmY1YS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDb0I7QUFFOUMsSUFBTUUsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHSiw0REFBVSxDQUFDQyxTQUFTLENBQUM7QUFFbEMsSUFBTUksT0FBTyxHQUFHQyxRQUFRLENBQUNDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ2xELElBQU1DLE9BQU8sR0FBR0YsUUFBUSxDQUFDQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUNsRCxJQUFNRSxTQUFTLEdBQUdGLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQztBQUUvQyxJQUFNRyxJQUFJLEdBQUcsU0FBUEEsSUFBSUEsQ0FBSUMsQ0FBQyxFQUFFQyxDQUFDLEVBQUVILFNBQVMsRUFBSztFQUM5QixRQUFRQSxTQUFTO0lBQ2IsS0FBSyxHQUFHO01BQ0osb0JBQU9WLDBEQUFBLGFBQUksR0FBQyxFQUFFWSxDQUFDLEdBQUdDLENBQU8sQ0FBQztJQUM5QixLQUFLLEdBQUc7TUFDSixvQkFBT2IsMERBQUEsYUFBSSxHQUFDLEVBQUVZLENBQUMsR0FBR0MsQ0FBTyxDQUFDO0lBQzlCLEtBQUssR0FBRztNQUNKLG9CQUFPYiwwREFBQSxhQUFJLEdBQUMsRUFBRVksQ0FBQyxHQUFHQyxDQUFPLENBQUM7SUFDOUIsS0FBSyxHQUFHO01BQ0osb0JBQU9iLDBEQUFBLGFBQUksR0FBQyxFQUFFWSxDQUFDLEdBQUdDLENBQU8sQ0FBQztJQUM5QjtNQUNJLG9CQUFPYiwwREFBQSxhQUFJLGdFQUE4QyxDQUFDO0VBQ2xFO0FBQ0osQ0FBQztBQUVESyxJQUFJLENBQUNVLE1BQU0sQ0FBQ0osSUFBSSxDQUFDTCxPQUFPLEVBQUVHLE9BQU8sRUFBRUMsU0FBUyxDQUFDLENBQUM7Ozs7Ozs7O1VDekI5QyIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzAxX0R6aWVuXzEvMDNfV3lyYXplbmlhLzA1X1phZGFuaWVfNS9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xuXG5jb25zdCBudW1iZXJBID0gcGFyc2VJbnQocHJvbXB0KFwiUG9kYWogbGljemLEmSBBXCIpKVxuY29uc3QgbnVtYmVyQiA9IHBhcnNlSW50KHByb21wdChcIlBvZGFqIGxpY3pixJkgQlwiKSlcbmNvbnN0IG9wZXJhdGlvbiA9IHByb21wdChcIlBvZGFqICssIC0sICogbHViIC9cIilcblxuY29uc3QgY2FsYyA9IChhLCBiLCBvcGVyYXRpb24pID0+IHtcbiAgICBzd2l0Y2ggKG9wZXJhdGlvbikge1xuICAgICAgICBjYXNlIFwiK1wiOlxuICAgICAgICAgICAgcmV0dXJuIDxoMT4geyBhICsgYiB9PC9oMT5cbiAgICAgICAgY2FzZSBcIi1cIjpcbiAgICAgICAgICAgIHJldHVybiA8aDI+IHsgYSAtIGIgfTwvaDI+XG4gICAgICAgIGNhc2UgXCIqXCI6XG4gICAgICAgICAgICByZXR1cm4gPGgzPiB7IGEgKiBiIH08L2gzPlxuICAgICAgICBjYXNlIFwiL1wiOlxuICAgICAgICAgICAgcmV0dXJuIDxoND4geyBhIC8gYiB9PC9oND5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiA8aDQ+cG9kYcWCZcWbIMW6bGUgY28gbWEgd3lrb25hxIcsIGRhaiArIC0gKiBsdWIgLzwvaDQ+O1xuICAgIH1cbn1cblxucm9vdC5yZW5kZXIoY2FsYyhudW1iZXJBLCBudW1iZXJCLCBvcGVyYXRpb24pKVxuXG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImJkODIyOGQ3N2I4MjVmMzZmM2M3XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlUm9vdCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwibnVtYmVyQSIsInBhcnNlSW50IiwicHJvbXB0IiwibnVtYmVyQiIsIm9wZXJhdGlvbiIsImNhbGMiLCJhIiwiYiIsImNyZWF0ZUVsZW1lbnQiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9