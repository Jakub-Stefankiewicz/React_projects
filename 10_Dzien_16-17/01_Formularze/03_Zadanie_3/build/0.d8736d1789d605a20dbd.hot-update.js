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
/******/ 	__webpack_require__.h = () => ("546f7ded465d48a7d975")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kODczNmQxNzg5ZDYwNWEyMGRiZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFFdEMsSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUFDLElBQUEsRUFBZ0I7RUFBQSxJQUFYQyxLQUFLLEdBQUFELElBQUEsQ0FBTEMsS0FBSztFQUN4QixJQUFBQyxTQUFBLEdBQXVCSiwrQ0FBUSxDQUFDRyxLQUFLLENBQUM7SUFBQUUsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBL0JHLElBQUksR0FBQUYsVUFBQTtJQUFFRyxNQUFNLEdBQUFILFVBQUE7RUFDbkIsSUFBQUksVUFBQSxHQUFvQlQsK0NBQVEsQ0FBQyxHQUFHLENBQUM7SUFBQVUsVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBMUJFLEdBQUcsR0FBQUQsVUFBQTtJQUFFRSxNQUFNLEdBQUFGLFVBQUE7RUFDbEIsSUFBQUcsVUFBQSxHQUErQmIsK0NBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQWMsVUFBQSxHQUFBUixjQUFBLENBQUFPLFVBQUE7SUFBdENFLE1BQU0sR0FBQUQsVUFBQTtJQUFFRSxZQUFZLEdBQUFGLFVBQUE7RUFFM0IsSUFBTUcsYUFBYSxHQUFFLFNBQWZBLGFBQWFBLENBQUEsRUFBTztJQUN0QkQsWUFBWSxDQUFDLEtBQUssQ0FBQztFQUN2QixDQUFDO0VBRUQsSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUlDLENBQUMsRUFBSztJQUN2QlAsTUFBTSxDQUFDTyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO0lBQ3JCRixDQUFDLENBQUNHLGNBQWMsQ0FBQyxDQUFDO0VBQ3RCLENBQUM7RUFFRCxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBSUosQ0FBQyxFQUFLO0lBQ3RCQSxDQUFDLENBQUNHLGNBQWMsQ0FBQyxDQUFDO0lBQ2xCZCxNQUFNLENBQUMsVUFBQWdCLElBQUksRUFBRTtNQUNULFVBQUFDLE1BQUEsQ0FBQUMsa0JBQUEsQ0FBV0YsSUFBSSxJQUFDYixHQUFHO0lBQ3ZCLENBQUMsQ0FBQztFQUNOLENBQUM7RUFFRCxvQkFDSVosMERBQUEsMkJBQ0lBLDBEQUFBLDRCQUNJQSwwREFBQSxpQkFDS1EsSUFBSSxDQUFDcUIsR0FBRyxDQUFDLFVBQUFDLEVBQUUsRUFBSTtJQUNaLG9CQUFPOUIsMERBQUE7TUFBUXNCLEtBQUssRUFBRVE7SUFBRyxHQUFFQSxFQUFXLENBQUM7RUFDM0MsQ0FBQyxDQUFDLGVBQ0Y5QiwwREFBQTtJQUFRK0IsT0FBTyxFQUFFYjtFQUFjLEdBQUMsTUFBWSxDQUN4QyxDQUFDLGVBQ0xsQiwwREFBQTtJQUFPZ0MsSUFBSSxFQUFDLE1BQU07SUFBQ2hCLE1BQU0sRUFBRUEsTUFBTztJQUFDaUIsSUFBSSxFQUFDLEtBQUs7SUFBQ0MsV0FBVyxFQUFDLDBCQUFxQjtJQUFDQyxRQUFRLEVBQUVoQjtFQUFXLENBQUUsQ0FBQyxlQUN4R25CLDBEQUFBO0lBQU9nQyxJQUFJLEVBQUMsUUFBUTtJQUFDaEIsTUFBTSxFQUFFQSxNQUFPO0lBQUNlLE9BQU8sRUFBRVA7RUFBVyxDQUFDLENBQ2hFLENBQ1QsQ0FBQztBQUdOLENBQUM7QUFFRCxpRUFBZXRCLFlBQVk7Ozs7Ozs7O1VDeEMzQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzEwX0R6aWVuXzE2LTE3LzAxX0Zvcm11bGFyemUvMDNfWmFkYW5pZV8zL2pzL1NlbGVjdE9yVHlwZS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFNlbGVjdE9yVHlwZSA9ICh7aXRlbXN9KSA9PiB7XG4gICAgY29uc3QgW2NhcnMsIGFkZENhcl0gPSB1c2VTdGF0ZShpdGVtcyk7XG4gICAgY29uc3QgW2NhciwgbmV3Q2FyXT11c2VTdGF0ZShcIiBcIik7XG4gICAgY29uc3QgW2hpZGRlbiwgY2hhbmdlSGlkZGVuXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gICAgY29uc3Qgc2VsZWN0SGFuZGxlciA9KCkgPT57XG4gICAgICAgIGNoYW5nZUhpZGRlbihmYWxzZSk7XG4gICAgfVxuXG4gICAgY29uc3QgY2FySGFuZGxlciA9IChlKSA9PiB7XG4gICAgICAgbmV3Q2FyKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZEhhbmRsZXIgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGFkZENhcihwcmV2PT57XG4gICAgICAgICAgICByZXR1cm4gWy4uLnByZXYsY2FyXTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgPHNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAge2NhcnMubWFwKGVsID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIHZhbHVlPXtlbH0+e2VsfTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBvbkNsaWNrPXtzZWxlY3RIYW5kbGVyfT5Jbm5lPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGhpZGRlbj17aGlkZGVufSBuYW1lPVwiY2FyXCIgcGxhY2Vob2xkZXI9XCJ3cGlzeiBtYXJrxJkgYXV0YS4uLlwiIG9uQ2hhbmdlPXtjYXJIYW5kbGVyfSAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGhpZGRlbj17aGlkZGVufSBvbkNsaWNrPXthZGRIYW5kbGVyfS8+XG4gICAgICAgIDwvZm9ybT5cbjwvZGl2PlxuKVxuICAgIDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdE9yVHlwZTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1NDZmN2RlZDQ2NWQ0OGE3ZDk3NVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiU2VsZWN0T3JUeXBlIiwiX3JlZiIsIml0ZW1zIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiY2FycyIsImFkZENhciIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwiY2FyIiwibmV3Q2FyIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJoaWRkZW4iLCJjaGFuZ2VIaWRkZW4iLCJzZWxlY3RIYW5kbGVyIiwiY2FySGFuZGxlciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwiYWRkSGFuZGxlciIsInByZXYiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJjcmVhdGVFbGVtZW50IiwibWFwIiwiZWwiLCJvbkNsaWNrIiwidHlwZSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==