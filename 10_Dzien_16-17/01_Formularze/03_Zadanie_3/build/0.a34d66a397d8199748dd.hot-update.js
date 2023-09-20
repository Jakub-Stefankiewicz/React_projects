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
    newCar(e.target.value);
    e.preventDefault();
  };
  var addHandler = function addHandler(e) {
    e.preventDefault();
    addCar(function (prev) {
      return [].concat(_toConsumableArray(prev), [car]);
    });
  };
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
/******/ 	__webpack_require__.h = () => ("541962a64dc5db449517")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hMzRkNjZhMzk3ZDgxOTk3NDhkZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFFdEMsSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUFDLElBQUEsRUFBZ0I7RUFBQSxJQUFYQyxLQUFLLEdBQUFELElBQUEsQ0FBTEMsS0FBSztFQUN4QixJQUFBQyxTQUFBLEdBQXVCSiwrQ0FBUSxDQUFDRyxLQUFLLENBQUM7SUFBQUUsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBL0JHLElBQUksR0FBQUYsVUFBQTtJQUFFRyxNQUFNLEdBQUFILFVBQUE7RUFDbkIsSUFBQUksVUFBQSxHQUFzQlQsK0NBQVEsQ0FBQyxHQUFHLENBQUM7SUFBQVUsVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBNUJFLEdBQUcsR0FBQUQsVUFBQTtJQUFFRSxNQUFNLEdBQUFGLFVBQUE7RUFDbEIsSUFBQUcsVUFBQSxHQUErQmIsK0NBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQWMsVUFBQSxHQUFBUixjQUFBLENBQUFPLFVBQUE7SUFBdENFLE1BQU0sR0FBQUQsVUFBQTtJQUFFRSxZQUFZLEdBQUFGLFVBQUE7RUFFM0IsSUFBTUcsYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFBLEVBQVM7SUFDeEJELFlBQVksQ0FBQyxLQUFLLENBQUM7RUFDdkIsQ0FBQztFQUVELElBQU1FLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFJQyxDQUFDLEVBQUs7SUFDdEJQLE1BQU0sQ0FBQ08sQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQztJQUN0QkYsQ0FBQyxDQUFDRyxjQUFjLENBQUMsQ0FBQztFQUN0QixDQUFDO0VBRUQsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUlKLENBQUMsRUFBSztJQUN0QkEsQ0FBQyxDQUFDRyxjQUFjLENBQUMsQ0FBQztJQUNsQmQsTUFBTSxDQUFDLFVBQUFnQixJQUFJLEVBQUk7TUFDWCxVQUFBQyxNQUFBLENBQUFDLGtCQUFBLENBQVdGLElBQUksSUFBRWIsR0FBRztJQUN4QixDQUFDLENBQUM7RUFDTixDQUFDO0VBRUQsb0JBQ0laLDBEQUFBLDJCQUNJQSwwREFBQSw0QkFDSUEsMERBQUEsaUJBQ0tRLElBQUksQ0FBQ3FCLEdBQUcsQ0FBQyxVQUFBQyxFQUFFLEVBQUk7SUFDWixvQkFBTzlCLDBEQUFBO01BQVFzQixLQUFLLEVBQUVRO0lBQUcsR0FBRUEsRUFBVyxDQUFDO0VBQzNDLENBQUMsQ0FBQyxlQUNGOUIsMERBQUE7SUFBUStCLE9BQU8sRUFBRWI7RUFBYyxHQUFDLE1BQVksQ0FDeEMsQ0FBQyxlQUNUbEIsMERBQUE7SUFBT2dDLElBQUksRUFBQyxNQUFNO0lBQUNoQixNQUFNLEVBQUVBLE1BQU87SUFBQ2lCLElBQUksRUFBQyxLQUFLO0lBQUNDLFdBQVcsRUFBQywwQkFBcUI7SUFBQ0MsUUFBUSxFQUFFaEI7RUFBVyxDQUFDLENBQUMsZUFDdkduQiwwREFBQTtJQUFPZ0MsSUFBSSxFQUFDLFFBQVE7SUFBQ2hCLE1BQU0sRUFBRUEsTUFBTztJQUFDZSxPQUFPLEVBQUVQO0VBQVcsQ0FBQyxDQUN4RCxDQUNMLENBQUM7QUFFZCxDQUFDO0FBRUQsaUVBQWV0QixZQUFZOzs7Ozs7OztVQ3ZDM0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMF9Eemllbl8xNi0xNy8wMV9Gb3JtdWxhcnplLzAzX1phZGFuaWVfMy9qcy9TZWxlY3RPclR5cGUuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBTZWxlY3RPclR5cGUgPSAoe2l0ZW1zfSkgPT4ge1xuICAgIGNvbnN0IFtjYXJzLCBhZGRDYXJdID0gdXNlU3RhdGUoaXRlbXMpO1xuICAgIGNvbnN0IFtjYXIsIG5ld0Nhcl0gPSB1c2VTdGF0ZShcIiBcIik7XG4gICAgY29uc3QgW2hpZGRlbiwgY2hhbmdlSGlkZGVuXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gICAgY29uc3Qgc2VsZWN0SGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgY2hhbmdlSGlkZGVuKGZhbHNlKTtcbiAgICB9XG5cbiAgICBjb25zdCBjYXJIYW5kbGVyID0gKGUpID0+IHtcbiAgICAgICAgbmV3Q2FyKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZEhhbmRsZXIgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGFkZENhcihwcmV2ID0+IHtcbiAgICAgICAgICAgIHJldHVybiBbLi4ucHJldiwgY2FyXTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgPHNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAge2NhcnMubWFwKGVsID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIHZhbHVlPXtlbH0+e2VsfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBvbkNsaWNrPXtzZWxlY3RIYW5kbGVyfT5Jbm5lPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaGlkZGVuPXtoaWRkZW59IG5hbWU9XCJjYXJcIiBwbGFjZWhvbGRlcj1cIndwaXN6IG1hcmvEmSBhdXRhLi4uXCIgb25DaGFuZ2U9e2NhckhhbmRsZXJ9Lz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGhpZGRlbj17aGlkZGVufSBvbkNsaWNrPXthZGRIYW5kbGVyfS8+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RPclR5cGU7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNTQxOTYyYTY0ZGM1ZGI0NDk1MTdcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlNlbGVjdE9yVHlwZSIsIl9yZWYiLCJpdGVtcyIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImNhcnMiLCJhZGRDYXIiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImNhciIsIm5ld0NhciIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwiaGlkZGVuIiwiY2hhbmdlSGlkZGVuIiwic2VsZWN0SGFuZGxlciIsImNhckhhbmRsZXIiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsImFkZEhhbmRsZXIiLCJwcmV2IiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiY3JlYXRlRWxlbWVudCIsIm1hcCIsImVsIiwib25DbGljayIsInR5cGUiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=