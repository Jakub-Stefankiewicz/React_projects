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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", null, "Inne")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    hidden: hidden,
    placeholder: "co\u015B do wpisania auta",
    onClick: selectHandler
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectOrType);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("aaefd8bfb91ec14c3cba")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4yZDRjZWI2YTg5YmUyMzU1ZjRiMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUV0QyxJQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBQUMsSUFBQSxFQUFnQjtFQUFBLElBQVhDLEtBQUssR0FBQUQsSUFBQSxDQUFMQyxLQUFLO0VBQ3hCLElBQUFDLFNBQUEsR0FBdUJKLCtDQUFRLENBQUNHLEtBQUssQ0FBQztJQUFBRSxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUEvQkcsSUFBSSxHQUFBRixVQUFBO0lBQUVHLE1BQU0sR0FBQUgsVUFBQTtFQUNuQixJQUFBSSxVQUFBLEdBQStCVCwrQ0FBUSxDQUFDLElBQUksQ0FBQztJQUFBVSxVQUFBLEdBQUFKLGNBQUEsQ0FBQUcsVUFBQTtJQUF0Q0UsTUFBTSxHQUFBRCxVQUFBO0lBQUVFLFlBQVksR0FBQUYsVUFBQTtFQUUzQixJQUFNRyxhQUFhLEdBQUUsU0FBZkEsYUFBYUEsQ0FBQSxFQUFPO0lBQ3RCRCxZQUFZLENBQUMsS0FBSyxDQUFDO0VBQ3ZCLENBQUM7RUFFRCxvQkFDSWIsMERBQUEsMkJBQ0lBLDBEQUFBLDRCQUNJQSwwREFBQSxpQkFDS1EsSUFBSSxDQUFDUSxHQUFHLENBQUMsVUFBQUMsRUFBRSxFQUFJO0lBQ1osb0JBQU9qQiwwREFBQTtNQUFRa0IsS0FBSyxFQUFFRDtJQUFHLEdBQUVBLEVBQVcsQ0FBQztFQUMzQyxDQUFDLENBQUMsZUFDRmpCLDBEQUFBLGlCQUFRLE1BQVksQ0FDaEIsQ0FBQyxlQUNMQSwwREFBQTtJQUFPbUIsSUFBSSxFQUFDLE1BQU07SUFBQ1AsTUFBTSxFQUFFQSxNQUFPO0lBQUNRLFdBQVcsRUFBQywyQkFBc0I7SUFBQ0MsT0FBTyxFQUFFUDtFQUFjLENBQUMsQ0FDcEcsQ0FDVCxDQUFDO0FBR04sQ0FBQztBQUVELGlFQUFlWixZQUFZOzs7Ozs7OztVQzFCM0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMF9Eemllbl8xNi0xNy8wMV9Gb3JtdWxhcnplLzAzX1phZGFuaWVfMy9qcy9TZWxlY3RPclR5cGUuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBTZWxlY3RPclR5cGUgPSAoe2l0ZW1zfSkgPT4ge1xuICAgIGNvbnN0IFtjYXJzLCBhZGRDYXJdID0gdXNlU3RhdGUoaXRlbXMpO1xuICAgIGNvbnN0IFtoaWRkZW4sIGNoYW5nZUhpZGRlbl0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICAgIGNvbnN0IHNlbGVjdEhhbmRsZXIgPSgpID0+e1xuICAgICAgICBjaGFuZ2VIaWRkZW4oZmFsc2UpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICA8c2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICB7Y2Fycy5tYXAoZWwgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxvcHRpb24gdmFsdWU9e2VsfT57ZWx9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPklubmU8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaGlkZGVuPXtoaWRkZW59IHBsYWNlaG9sZGVyPVwiY2/FmyBkbyB3cGlzYW5pYSBhdXRhXCIgb25DbGljaz17c2VsZWN0SGFuZGxlcn0vPlxuICAgICAgICA8L2Zvcm0+XG48L2Rpdj5cbilcbiAgICA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RPclR5cGU7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYWFlZmQ4YmZiOTFlYzE0YzNjYmFcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlNlbGVjdE9yVHlwZSIsIl9yZWYiLCJpdGVtcyIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImNhcnMiLCJhZGRDYXIiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImhpZGRlbiIsImNoYW5nZUhpZGRlbiIsInNlbGVjdEhhbmRsZXIiLCJjcmVhdGVFbGVtZW50IiwibWFwIiwiZWwiLCJ2YWx1ZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9