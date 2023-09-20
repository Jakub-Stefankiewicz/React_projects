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
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    hidden = _useState4[0],
    changeHidden = _useState4[1];
  var selectHandler = function selectHandler() {
    changeHidden(false);
  };
  var carHandler = function carHandler(e) {
    addCar(function (prev) {
      return [].concat(_toConsumableArray(prev), [e.target.value]);
    });
    e.preventDefault();
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
    value: items,
    placeholder: "wpisz mark\u0119 auta..."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "submit",
    hidden: hidden,
    value: "Dodaj auto",
    onClick: carHandler
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectOrType);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("bd0679e79b9845b85219")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC44Mzc1Y2VmZTIzNjE3NzI0M2Q5My5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFFdEMsSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUFDLElBQUEsRUFBZ0I7RUFBQSxJQUFYQyxLQUFLLEdBQUFELElBQUEsQ0FBTEMsS0FBSztFQUN4QixJQUFBQyxTQUFBLEdBQXVCSiwrQ0FBUSxDQUFDRyxLQUFLLENBQUM7SUFBQUUsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBL0JHLElBQUksR0FBQUYsVUFBQTtJQUFFRyxNQUFNLEdBQUFILFVBQUE7RUFDbkIsSUFBQUksVUFBQSxHQUErQlQsK0NBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQVUsVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBdENFLE1BQU0sR0FBQUQsVUFBQTtJQUFFRSxZQUFZLEdBQUFGLFVBQUE7RUFFM0IsSUFBTUcsYUFBYSxHQUFFLFNBQWZBLGFBQWFBLENBQUEsRUFBTztJQUN0QkQsWUFBWSxDQUFDLEtBQUssQ0FBQztFQUN2QixDQUFDO0VBRUQsSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUlDLENBQUMsRUFBSztJQUN0QlAsTUFBTSxDQUFDLFVBQUFRLElBQUksRUFBSTtNQUNYLFVBQUFDLE1BQUEsQ0FBQUMsa0JBQUEsQ0FBV0YsSUFBSSxJQUFFRCxDQUFDLENBQUNJLE1BQU0sQ0FBQ0MsS0FBSztJQUNuQyxDQUFDLENBQUM7SUFDRkwsQ0FBQyxDQUFDTSxjQUFjLENBQUMsQ0FBQztFQUN0QixDQUFDO0VBRUQsb0JBQ0l0QiwwREFBQSwyQkFDSUEsMERBQUEsNEJBQ0lBLDBEQUFBLGlCQUNLUSxJQUFJLENBQUNnQixHQUFHLENBQUMsVUFBQUMsRUFBRSxFQUFJO0lBQ1osb0JBQU96QiwwREFBQTtNQUFRcUIsS0FBSyxFQUFFSTtJQUFHLEdBQUVBLEVBQVcsQ0FBQztFQUMzQyxDQUFDLENBQUMsZUFDRnpCLDBEQUFBO0lBQVEwQixPQUFPLEVBQUVaO0VBQWMsR0FBQyxNQUFZLENBQ3hDLENBQUMsZUFDTGQsMERBQUE7SUFBTzJCLElBQUksRUFBQyxNQUFNO0lBQUNmLE1BQU0sRUFBRUEsTUFBTztJQUFDZ0IsSUFBSSxFQUFDLEtBQUs7SUFBQ1AsS0FBSyxFQUFFakIsS0FBTTtJQUFDeUIsV0FBVyxFQUFDO0VBQXFCLENBQUUsQ0FBQyxlQUNoRzdCLDBEQUFBO0lBQU8yQixJQUFJLEVBQUMsUUFBUTtJQUFDZixNQUFNLEVBQUVBLE1BQU87SUFBQ1MsS0FBSyxFQUFDLFlBQVk7SUFBQ0ssT0FBTyxFQUFFWDtFQUFXLENBQUMsQ0FDbkYsQ0FDVCxDQUFDO0FBR04sQ0FBQztBQUVELGlFQUFlYixZQUFZOzs7Ozs7OztVQ2xDM0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMF9Eemllbl8xNi0xNy8wMV9Gb3JtdWxhcnplLzAzX1phZGFuaWVfMy9qcy9TZWxlY3RPclR5cGUuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBTZWxlY3RPclR5cGUgPSAoe2l0ZW1zfSkgPT4ge1xuICAgIGNvbnN0IFtjYXJzLCBhZGRDYXJdID0gdXNlU3RhdGUoaXRlbXMpO1xuICAgIGNvbnN0IFtoaWRkZW4sIGNoYW5nZUhpZGRlbl0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICAgIGNvbnN0IHNlbGVjdEhhbmRsZXIgPSgpID0+e1xuICAgICAgICBjaGFuZ2VIaWRkZW4oZmFsc2UpO1xuICAgIH1cblxuICAgIGNvbnN0IGNhckhhbmRsZXIgPSAoZSkgPT4ge1xuICAgICAgICBhZGRDYXIocHJldiA9PiB7XG4gICAgICAgICAgICByZXR1cm4gWy4uLnByZXYsIGUudGFyZ2V0LnZhbHVlXVxuICAgICAgICB9KVxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgIDxzZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIHtjYXJzLm1hcChlbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPG9wdGlvbiB2YWx1ZT17ZWx9PntlbH08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gb25DbGljaz17c2VsZWN0SGFuZGxlcn0+SW5uZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBoaWRkZW49e2hpZGRlbn0gbmFtZT1cImNhclwiIHZhbHVlPXtpdGVtc30gcGxhY2Vob2xkZXI9XCJ3cGlzeiBtYXJrxJkgYXV0YS4uLlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgaGlkZGVuPXtoaWRkZW59IHZhbHVlPVwiRG9kYWogYXV0b1wiIG9uQ2xpY2s9e2NhckhhbmRsZXJ9Lz5cbiAgICAgICAgPC9mb3JtPlxuPC9kaXY+XG4pXG4gICAgO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0T3JUeXBlOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImJkMDY3OWU3OWI5ODQ1Yjg1MjE5XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJTZWxlY3RPclR5cGUiLCJfcmVmIiwiaXRlbXMiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJjYXJzIiwiYWRkQ2FyIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJoaWRkZW4iLCJjaGFuZ2VIaWRkZW4iLCJzZWxlY3RIYW5kbGVyIiwiY2FySGFuZGxlciIsImUiLCJwcmV2IiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5IiwidGFyZ2V0IiwidmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJtYXAiLCJlbCIsIm9uQ2xpY2siLCJ0eXBlIiwibmFtZSIsInBsYWNlaG9sZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==