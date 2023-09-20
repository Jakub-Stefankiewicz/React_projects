"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);


function genNumber() {
  return Math.round(Math.random() * 9 + 1);
}
var A = genNumber();
var B = genNumber();
var result = prompt("podaj wynik dodawania ".concat(A, " i ").concat(B, " "));
var response = function response(a, b, res) {
  if (a + b === parseInt(res)) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        backgroundColor: "green"
      }
    }, "Odpowied\u017A poprawna");
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        backgroundColor: "green"
      }
    }, "Odpowied\u017A niepoprawna");
  }
};
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render(response(A, B, result));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6b42cd5a37ab1d4e4053")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41MDExY2MwM2VmN2E0NTczYjY5Ni5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDa0I7QUFFNUMsU0FBU0UsU0FBU0EsQ0FBQSxFQUFHO0VBQ2pCLE9BQU9DLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM1QztBQUVBLElBQU1DLENBQUMsR0FBR0osU0FBUyxDQUFDLENBQUM7QUFDckIsSUFBTUssQ0FBQyxHQUFHTCxTQUFTLENBQUMsQ0FBQztBQUNyQixJQUFNTSxNQUFNLEdBQUdDLE1BQU0sMEJBQUFDLE1BQUEsQ0FBMEJKLENBQUMsU0FBQUksTUFBQSxDQUFNSCxDQUFDLE1BQUcsQ0FBQztBQUUzRCxJQUFNSSxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBSUMsQ0FBQyxFQUFFQyxDQUFDLEVBQUVDLEdBQUcsRUFBSztFQUM1QixJQUFJRixDQUFDLEdBQUdDLENBQUMsS0FBS0UsUUFBUSxDQUFDRCxHQUFHLENBQUMsRUFBRTtJQUN6QixvQkFBT2QsMERBQUE7TUFBS2lCLEtBQUssRUFBRTtRQUFDQyxlQUFlLEVBQUU7TUFBTztJQUFFLEdBQUMseUJBQXVCLENBQUM7RUFDM0UsQ0FBQyxNQUFNO0lBQ0gsb0JBQU9sQiwwREFBQTtNQUFLaUIsS0FBSyxFQUFFO1FBQUNDLGVBQWUsRUFBRTtNQUFPO0lBQUUsR0FBQyw0QkFBMEIsQ0FBQztFQUM5RTtBQUNKLENBQUM7QUFFRCxJQUFNQyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUdyQiw0REFBVSxDQUFDa0IsU0FBUyxDQUFDO0FBQ2xDRyxJQUFJLENBQUNDLE1BQU0sQ0FBQ1osUUFBUSxDQUFDTCxDQUFDLEVBQUVDLENBQUMsRUFBRUMsTUFBTSxDQUFDLENBQUM7Ozs7Ozs7O1VDckJuQyIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzAyX0R6aWVuXzItMy8wMV9BdHJ5YnV0eV9lbGVtZW50b3cvMDJfWmFkYW5pZV8yL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Y3JlYXRlUm9vdH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcblxuZnVuY3Rpb24gZ2VuTnVtYmVyKCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA5ICsgMSk7XG59XG5cbmNvbnN0IEEgPSBnZW5OdW1iZXIoKTtcbmNvbnN0IEIgPSBnZW5OdW1iZXIoKTtcbmNvbnN0IHJlc3VsdCA9IHByb21wdChgcG9kYWogd3luaWsgZG9kYXdhbmlhICR7QX0gaSAke0J9IGApXG5cbmNvbnN0IHJlc3BvbnNlID0gKGEsIGIsIHJlcykgPT4ge1xuICAgIGlmIChhICsgYiA9PT0gcGFyc2VJbnQocmVzKSkge1xuICAgICAgICByZXR1cm4gPGRpdiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogXCJncmVlblwifX0+T2Rwb3dpZWTFuiBwb3ByYXduYTwvZGl2PlxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcImdyZWVuXCJ9fT5PZHBvd2llZMW6IG5pZXBvcHJhd25hPC9kaXY+XG4gICAgfVxufVxuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5yb290LnJlbmRlcihyZXNwb25zZShBLCBCLCByZXN1bHQpKTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjZiNDJjZDVhMzdhYjFkNGU0MDUzXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlUm9vdCIsImdlbk51bWJlciIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsIkEiLCJCIiwicmVzdWx0IiwicHJvbXB0IiwiY29uY2F0IiwicmVzcG9uc2UiLCJhIiwiYiIsInJlcyIsInBhcnNlSW50IiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9