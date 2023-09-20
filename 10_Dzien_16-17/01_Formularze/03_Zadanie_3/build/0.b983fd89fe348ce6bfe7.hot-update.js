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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SelectOrType = function SelectOrType(_ref) {
  var items = _ref.items;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(items),
    _useState2 = _slicedToArray(_useState, 2),
    cars = _useState2[0],
    addCar = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(" "),
    _useState4 = _slicedToArray(_useState3, 2),
    car = _useState4[0],
    newCar = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState6 = _slicedToArray(_useState5, 2),
    hidden = _useState6[0],
    changeHidden = _useState6[1];
  var selectHandler = function selectHandler() {
    changeHidden(false);
  };
  var carHandler = function carHandler(e) {
    // newCar(e.target.value);
    addCar(function (prev) {
      return [].concat(_toConsumableArray(prev), [car]);
    });
    e.preventDefault();
  };

  // const addHandler = (e) => {
  //     e.preventDefault();
  //     addCar(prev => {
  //         return [...prev, car];
  //     })
  // }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("select", null, cars.map(function (el) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
      value: el
    }, el);
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {
    onClick: selectHandler
  }, "Inne")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    hidden: hidden,
    name: "car",
    placeholder: "wpisz mark\u0119 auta...",
    onChange: carHandler
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "submit",
    hidden: hidden,
    onClick: addHandler
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectOrType);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a34d66a397d8199748dd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iOTgzZmQ4OWZlMzQ4Y2U2YmZlNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFFdEMsSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUFDLElBQUEsRUFBZ0I7RUFBQSxJQUFYQyxLQUFLLEdBQUFELElBQUEsQ0FBTEMsS0FBSztFQUN4QixJQUFBQyxTQUFBLEdBQXVCSiwrQ0FBUSxDQUFDRyxLQUFLLENBQUM7SUFBQUUsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBL0JHLElBQUksR0FBQUYsVUFBQTtJQUFFRyxNQUFNLEdBQUFILFVBQUE7RUFDbkIsSUFBQUksVUFBQSxHQUFzQlQsK0NBQVEsQ0FBQyxHQUFHLENBQUM7SUFBQVUsVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBNUJFLEdBQUcsR0FBQUQsVUFBQTtJQUFFRSxNQUFNLEdBQUFGLFVBQUE7RUFDbEIsSUFBQUcsVUFBQSxHQUErQmIsK0NBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQWMsVUFBQSxHQUFBUixjQUFBLENBQUFPLFVBQUE7SUFBdENFLE1BQU0sR0FBQUQsVUFBQTtJQUFFRSxZQUFZLEdBQUFGLFVBQUE7RUFFM0IsSUFBTUcsYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFBLEVBQVM7SUFDeEJELFlBQVksQ0FBQyxLQUFLLENBQUM7RUFDdkIsQ0FBQztFQUVELElBQU1FLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFJQyxDQUFDLEVBQUs7SUFDdEI7SUFDQVgsTUFBTSxDQUFDLFVBQUFZLElBQUksRUFBSTtNQUNYLFVBQUFDLE1BQUEsQ0FBQUMsa0JBQUEsQ0FBV0YsSUFBSSxJQUFFVCxHQUFHO0lBQ3hCLENBQUMsQ0FBQztJQUNGUSxDQUFDLENBQUNJLGNBQWMsQ0FBQyxDQUFDO0VBQ3RCLENBQUM7O0VBRUQ7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBLG9CQUNJeEIsMERBQUEsMkJBQ0lBLDBEQUFBLDRCQUNJQSwwREFBQSxpQkFDS1EsSUFBSSxDQUFDa0IsR0FBRyxDQUFDLFVBQUFDLEVBQUUsRUFBSTtJQUNaLG9CQUFPM0IsMERBQUE7TUFBUTRCLEtBQUssRUFBRUQ7SUFBRyxHQUFFQSxFQUFXLENBQUM7RUFDM0MsQ0FBQyxDQUFDLGVBQ0YzQiwwREFBQTtJQUFRNkIsT0FBTyxFQUFFWDtFQUFjLEdBQUMsTUFBWSxDQUN4QyxDQUFDLGVBQ1RsQiwwREFBQTtJQUFPOEIsSUFBSSxFQUFDLE1BQU07SUFBQ2QsTUFBTSxFQUFFQSxNQUFPO0lBQUNlLElBQUksRUFBQyxLQUFLO0lBQUNDLFdBQVcsRUFBQywwQkFBcUI7SUFBQ0MsUUFBUSxFQUFFZDtFQUFXLENBQUMsQ0FBQyxlQUN2R25CLDBEQUFBO0lBQU84QixJQUFJLEVBQUMsUUFBUTtJQUFDZCxNQUFNLEVBQUVBLE1BQU87SUFBQ2EsT0FBTyxFQUFFSztFQUFXLENBQUMsQ0FDeEQsQ0FDTCxDQUFDO0FBRWQsQ0FBQztBQUVELGlFQUFlaEMsWUFBWTs7Ozs7Ozs7VUMxQzNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMTBfRHppZW5fMTYtMTcvMDFfRm9ybXVsYXJ6ZS8wM19aYWRhbmllXzMvanMvU2VsZWN0T3JUeXBlLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgU2VsZWN0T3JUeXBlID0gKHtpdGVtc30pID0+IHtcbiAgICBjb25zdCBbY2FycywgYWRkQ2FyXSA9IHVzZVN0YXRlKGl0ZW1zKTtcbiAgICBjb25zdCBbY2FyLCBuZXdDYXJdID0gdXNlU3RhdGUoXCIgXCIpO1xuICAgIGNvbnN0IFtoaWRkZW4sIGNoYW5nZUhpZGRlbl0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICAgIGNvbnN0IHNlbGVjdEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICAgIGNoYW5nZUhpZGRlbihmYWxzZSk7XG4gICAgfVxuXG4gICAgY29uc3QgY2FySGFuZGxlciA9IChlKSA9PiB7XG4gICAgICAgIC8vIG5ld0NhcihlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIGFkZENhcihwcmV2ID0+IHtcbiAgICAgICAgICAgIHJldHVybiBbLi4ucHJldiwgY2FyXTtcbiAgICAgICAgfSlcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIC8vIGNvbnN0IGFkZEhhbmRsZXIgPSAoZSkgPT4ge1xuICAgIC8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gICAgIGFkZENhcihwcmV2ID0+IHtcbiAgICAvLyAgICAgICAgIHJldHVybiBbLi4ucHJldiwgY2FyXTtcbiAgICAvLyAgICAgfSlcbiAgICAvLyB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgPHNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAge2NhcnMubWFwKGVsID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIHZhbHVlPXtlbH0+e2VsfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBvbkNsaWNrPXtzZWxlY3RIYW5kbGVyfT5Jbm5lPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaGlkZGVuPXtoaWRkZW59IG5hbWU9XCJjYXJcIiBwbGFjZWhvbGRlcj1cIndwaXN6IG1hcmvEmSBhdXRhLi4uXCIgb25DaGFuZ2U9e2NhckhhbmRsZXJ9Lz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGhpZGRlbj17aGlkZGVufSBvbkNsaWNrPXthZGRIYW5kbGVyfS8+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RPclR5cGU7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYTM0ZDY2YTM5N2Q4MTk5NzQ4ZGRcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlNlbGVjdE9yVHlwZSIsIl9yZWYiLCJpdGVtcyIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImNhcnMiLCJhZGRDYXIiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImNhciIsIm5ld0NhciIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwiaGlkZGVuIiwiY2hhbmdlSGlkZGVuIiwic2VsZWN0SGFuZGxlciIsImNhckhhbmRsZXIiLCJlIiwicHJldiIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsInByZXZlbnREZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIm1hcCIsImVsIiwidmFsdWUiLCJvbkNsaWNrIiwidHlwZSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiYWRkSGFuZGxlciJdLCJzb3VyY2VSb290IjoiIn0=