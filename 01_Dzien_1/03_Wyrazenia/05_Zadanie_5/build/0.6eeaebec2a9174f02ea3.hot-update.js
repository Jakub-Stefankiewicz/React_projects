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
function calc(a, b, operation) {
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
}
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, " ", calc(numberA, numberB, operation), " "));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("186d884a9104b8a11190")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42ZWVhZWJlYzJhOTE3NGYwMmVhMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDb0I7QUFFOUMsSUFBTUUsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHSiw0REFBVSxDQUFDQyxTQUFTLENBQUM7QUFFbEMsSUFBTUksT0FBTyxHQUFHQyxRQUFRLENBQUNDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ2xELElBQU1DLE9BQU8sR0FBR0YsUUFBUSxDQUFDQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUNsRCxJQUFNRSxTQUFTLEdBQUdGLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQztBQUUvQyxTQUFTRyxJQUFJQSxDQUFDQyxDQUFDLEVBQUVDLENBQUMsRUFBRUgsU0FBUyxFQUFDO0VBQzFCLFFBQVFBLFNBQVM7SUFDYixLQUFLLEdBQUc7TUFDSixvQkFBT1YsMERBQUEsYUFBSSxHQUFDLEVBQUVZLENBQUMsR0FBR0MsQ0FBTyxDQUFDO0lBQzlCLEtBQUssR0FBRztNQUNKLG9CQUFPYiwwREFBQSxhQUFJLEdBQUMsRUFBRVksQ0FBQyxHQUFHQyxDQUFPLENBQUM7SUFDOUIsS0FBSyxHQUFHO01BQ0osb0JBQU9iLDBEQUFBLGFBQUksR0FBQyxFQUFFWSxDQUFDLEdBQUdDLENBQU8sQ0FBQztJQUM5QixLQUFLLEdBQUc7TUFDSixvQkFBT2IsMERBQUEsYUFBSSxHQUFDLEVBQUVZLENBQUMsR0FBR0MsQ0FBTyxDQUFDO0lBQzlCO01BQ0ksb0JBQU9iLDBEQUFBLGFBQUksZ0VBQThDLENBQUM7RUFDbEU7QUFDSjtBQUVBSyxJQUFJLENBQUNVLE1BQU0sZUFBQ2YsMERBQUEsY0FBSyxHQUFDLEVBQUVXLElBQUksQ0FBQ0wsT0FBTyxFQUFFRyxPQUFPLEVBQUVDLFNBQVMsQ0FBQyxFQUFFLEdBQU0sQ0FBQyxDQUFDOzs7Ozs7OztVQ3pCL0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wMV9Eemllbl8xLzAzX1d5cmF6ZW5pYS8wNV9aYWRhbmllXzUvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcblxuY29uc3QgbnVtYmVyQSA9IHBhcnNlSW50KHByb21wdChcIlBvZGFqIGxpY3pixJkgQVwiKSlcbmNvbnN0IG51bWJlckIgPSBwYXJzZUludChwcm9tcHQoXCJQb2RhaiBsaWN6YsSZIEJcIikpXG5jb25zdCBvcGVyYXRpb24gPSBwcm9tcHQoXCJQb2RhaiArLCAtLCAqIGx1YiAvXCIpXG5cbmZ1bmN0aW9uIGNhbGMoYSwgYiwgb3BlcmF0aW9uKXtcbiAgICBzd2l0Y2ggKG9wZXJhdGlvbikge1xuICAgICAgICBjYXNlIFwiK1wiOlxuICAgICAgICAgICAgcmV0dXJuIDxoMT4geyBhICsgYiB9PC9oMT5cbiAgICAgICAgY2FzZSBcIi1cIjpcbiAgICAgICAgICAgIHJldHVybiA8aDI+IHsgYSAtIGIgfTwvaDI+XG4gICAgICAgIGNhc2UgXCIqXCI6XG4gICAgICAgICAgICByZXR1cm4gPGgzPiB7IGEgKiBiIH08L2gzPlxuICAgICAgICBjYXNlIFwiL1wiOlxuICAgICAgICAgICAgcmV0dXJuIDxoND4geyBhIC8gYiB9PC9oND5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiA8aDQ+cG9kYcWCZcWbIMW6bGUgY28gbWEgd3lrb25hxIcsIGRhaiArIC0gKiBsdWIgLzwvaDQ+O1xuICAgIH1cbn1cblxucm9vdC5yZW5kZXIoPGRpdj4geyBjYWxjKG51bWJlckEsIG51bWJlckIsIG9wZXJhdGlvbikgfSA8L2Rpdj4pXG5cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMTg2ZDg4NGE5MTA0YjhhMTExOTBcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVSb290IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJudW1iZXJBIiwicGFyc2VJbnQiLCJwcm9tcHQiLCJudW1iZXJCIiwib3BlcmF0aW9uIiwiY2FsYyIsImEiLCJiIiwiY3JlYXRlRWxlbWVudCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=