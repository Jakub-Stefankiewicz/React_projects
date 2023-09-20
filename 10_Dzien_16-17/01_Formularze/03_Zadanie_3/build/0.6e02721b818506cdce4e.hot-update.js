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
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    hidden = _useState4[0],
    changeHidden = _useState4[1];
  var selectHandler = function selectHandler() {
    changeHidden(false);
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
    placeholder: "wpisz mark\u0119 auta..."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "submit",
    hidden: hidden,
    value: "Dodaj auto"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectOrType);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8375cefe236177243d93")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42ZTAyNzIxYjgxODUwNmNkY2U0ZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUV0QyxJQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBQUMsSUFBQSxFQUFnQjtFQUFBLElBQVhDLEtBQUssR0FBQUQsSUFBQSxDQUFMQyxLQUFLO0VBQ3hCLElBQUFDLFNBQUEsR0FBdUJKLCtDQUFRLENBQUNHLEtBQUssQ0FBQztJQUFBRSxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUEvQkcsSUFBSSxHQUFBRixVQUFBO0lBQUVHLE1BQU0sR0FBQUgsVUFBQTtFQUNuQixJQUFBSSxVQUFBLEdBQStCVCwrQ0FBUSxDQUFDLElBQUksQ0FBQztJQUFBVSxVQUFBLEdBQUFKLGNBQUEsQ0FBQUcsVUFBQTtJQUF0Q0UsTUFBTSxHQUFBRCxVQUFBO0lBQUVFLFlBQVksR0FBQUYsVUFBQTtFQUUzQixJQUFNRyxhQUFhLEdBQUUsU0FBZkEsYUFBYUEsQ0FBQSxFQUFPO0lBQ3RCRCxZQUFZLENBQUMsS0FBSyxDQUFDO0VBQ3ZCLENBQUM7RUFFRCxvQkFDSWIsMERBQUEsMkJBQ0lBLDBEQUFBLDRCQUNJQSwwREFBQSxpQkFDS1EsSUFBSSxDQUFDUSxHQUFHLENBQUMsVUFBQUMsRUFBRSxFQUFJO0lBQ1osb0JBQU9qQiwwREFBQTtNQUFRa0IsS0FBSyxFQUFFRDtJQUFHLEdBQUVBLEVBQVcsQ0FBQztFQUMzQyxDQUFDLENBQUMsZUFDRmpCLDBEQUFBO0lBQVFtQixPQUFPLEVBQUVMO0VBQWMsR0FBQyxNQUFZLENBQ3hDLENBQUMsZUFDTGQsMERBQUE7SUFBT29CLElBQUksRUFBQyxNQUFNO0lBQUNSLE1BQU0sRUFBRUEsTUFBTztJQUFDUyxXQUFXLEVBQUM7RUFBcUIsQ0FBRSxDQUFDLGVBQ3ZFckIsMERBQUE7SUFBT29CLElBQUksRUFBQyxRQUFRO0lBQUNSLE1BQU0sRUFBRUEsTUFBTztJQUFDTSxLQUFLLEVBQUM7RUFBWSxDQUFDLENBQzlELENBQ1QsQ0FBQztBQUdOLENBQUM7QUFFRCxpRUFBZWhCLFlBQVk7Ozs7Ozs7O1VDM0IzQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzEwX0R6aWVuXzE2LTE3LzAxX0Zvcm11bGFyemUvMDNfWmFkYW5pZV8zL2pzL1NlbGVjdE9yVHlwZS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFNlbGVjdE9yVHlwZSA9ICh7aXRlbXN9KSA9PiB7XG4gICAgY29uc3QgW2NhcnMsIGFkZENhcl0gPSB1c2VTdGF0ZShpdGVtcyk7XG4gICAgY29uc3QgW2hpZGRlbiwgY2hhbmdlSGlkZGVuXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gICAgY29uc3Qgc2VsZWN0SGFuZGxlciA9KCkgPT57XG4gICAgICAgIGNoYW5nZUhpZGRlbihmYWxzZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgIDxzZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIHtjYXJzLm1hcChlbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPG9wdGlvbiB2YWx1ZT17ZWx9PntlbH08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gb25DbGljaz17c2VsZWN0SGFuZGxlcn0+SW5uZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBoaWRkZW49e2hpZGRlbn0gcGxhY2Vob2xkZXI9XCJ3cGlzeiBtYXJrxJkgYXV0YS4uLlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgaGlkZGVuPXtoaWRkZW59IHZhbHVlPVwiRG9kYWogYXV0b1wiLz5cbiAgICAgICAgPC9mb3JtPlxuPC9kaXY+XG4pXG4gICAgO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0T3JUeXBlOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjgzNzVjZWZlMjM2MTc3MjQzZDkzXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJTZWxlY3RPclR5cGUiLCJfcmVmIiwiaXRlbXMiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJjYXJzIiwiYWRkQ2FyIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJoaWRkZW4iLCJjaGFuZ2VIaWRkZW4iLCJzZWxlY3RIYW5kbGVyIiwiY3JlYXRlRWxlbWVudCIsIm1hcCIsImVsIiwidmFsdWUiLCJvbkNsaWNrIiwidHlwZSIsInBsYWNlaG9sZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==