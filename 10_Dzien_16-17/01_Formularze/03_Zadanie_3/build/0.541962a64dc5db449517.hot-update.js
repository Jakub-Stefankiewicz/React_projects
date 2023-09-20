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
    addCar(function (prev) {
      return [].concat(_toConsumableArray(prev), [e.target.value]);
    });
    // newCar(e.target.value);
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
/******/ 	__webpack_require__.h = () => ("bc7998e89414a5431102")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41NDE5NjJhNjRkYzVkYjQ0OTUxNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFFdEMsSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUFDLElBQUEsRUFBZ0I7RUFBQSxJQUFYQyxLQUFLLEdBQUFELElBQUEsQ0FBTEMsS0FBSztFQUN4QixJQUFBQyxTQUFBLEdBQXVCSiwrQ0FBUSxDQUFDRyxLQUFLLENBQUM7SUFBQUUsVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBL0JHLElBQUksR0FBQUYsVUFBQTtJQUFFRyxNQUFNLEdBQUFILFVBQUE7RUFDbkIsSUFBQUksVUFBQSxHQUFzQlQsK0NBQVEsQ0FBQyxHQUFHLENBQUM7SUFBQVUsVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBNUJFLEdBQUcsR0FBQUQsVUFBQTtJQUFFRSxNQUFNLEdBQUFGLFVBQUE7RUFDbEIsSUFBQUcsVUFBQSxHQUErQmIsK0NBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQWMsVUFBQSxHQUFBUixjQUFBLENBQUFPLFVBQUE7SUFBdENFLE1BQU0sR0FBQUQsVUFBQTtJQUFFRSxZQUFZLEdBQUFGLFVBQUE7RUFFM0IsSUFBTUcsYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFBLEVBQVM7SUFDeEJELFlBQVksQ0FBQyxLQUFLLENBQUM7RUFDdkIsQ0FBQztFQUVELElBQU1FLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFJQyxDQUFDLEVBQUs7SUFDdEJYLE1BQU0sQ0FBQyxVQUFBWSxJQUFJLEVBQUk7TUFDWCxVQUFBQyxNQUFBLENBQUFDLGtCQUFBLENBQVdGLElBQUksSUFBRUQsQ0FBQyxDQUFDSSxNQUFNLENBQUNDLEtBQUs7SUFDbkMsQ0FBQyxDQUFDO0lBQ0Y7SUFDQUwsQ0FBQyxDQUFDTSxjQUFjLENBQUMsQ0FBQztFQUN0QixDQUFDO0VBRUQsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUlQLENBQUMsRUFBSztJQUN0QkEsQ0FBQyxDQUFDTSxjQUFjLENBQUMsQ0FBQztJQUNsQmpCLE1BQU0sQ0FBQyxVQUFBWSxJQUFJLEVBQUk7TUFDWCxVQUFBQyxNQUFBLENBQUFDLGtCQUFBLENBQVdGLElBQUksSUFBRVQsR0FBRztJQUN4QixDQUFDLENBQUM7RUFDTixDQUFDO0VBRUQsb0JBQ0laLDBEQUFBLDJCQUNJQSwwREFBQSw0QkFDSUEsMERBQUEsaUJBQ0tRLElBQUksQ0FBQ3FCLEdBQUcsQ0FBQyxVQUFBQyxFQUFFLEVBQUk7SUFDWixvQkFBTzlCLDBEQUFBO01BQVF5QixLQUFLLEVBQUVLO0lBQUcsR0FBRUEsRUFBVyxDQUFDO0VBQzNDLENBQUMsQ0FBQyxlQUNGOUIsMERBQUE7SUFBUStCLE9BQU8sRUFBRWI7RUFBYyxHQUFDLE1BQVksQ0FDeEMsQ0FBQyxlQUNUbEIsMERBQUE7SUFBT2dDLElBQUksRUFBQyxNQUFNO0lBQUNoQixNQUFNLEVBQUVBLE1BQU87SUFBQ2lCLElBQUksRUFBQyxLQUFLO0lBQUNDLFdBQVcsRUFBQywwQkFBcUI7SUFBQ0MsUUFBUSxFQUFFaEI7RUFBVyxDQUFDLENBQUMsZUFDdkduQiwwREFBQTtJQUFPZ0MsSUFBSSxFQUFDLFFBQVE7SUFBQ2hCLE1BQU0sRUFBRUEsTUFBTztJQUFDZSxPQUFPLEVBQUVKO0VBQVcsQ0FBQyxDQUN4RCxDQUNMLENBQUM7QUFFZCxDQUFDO0FBRUQsaUVBQWV6QixZQUFZOzs7Ozs7OztVQzFDM0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMF9Eemllbl8xNi0xNy8wMV9Gb3JtdWxhcnplLzAzX1phZGFuaWVfMy9qcy9TZWxlY3RPclR5cGUuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBTZWxlY3RPclR5cGUgPSAoe2l0ZW1zfSkgPT4ge1xuICAgIGNvbnN0IFtjYXJzLCBhZGRDYXJdID0gdXNlU3RhdGUoaXRlbXMpO1xuICAgIGNvbnN0IFtjYXIsIG5ld0Nhcl0gPSB1c2VTdGF0ZShcIiBcIik7XG4gICAgY29uc3QgW2hpZGRlbiwgY2hhbmdlSGlkZGVuXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gICAgY29uc3Qgc2VsZWN0SGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgY2hhbmdlSGlkZGVuKGZhbHNlKTtcbiAgICB9XG5cbiAgICBjb25zdCBjYXJIYW5kbGVyID0gKGUpID0+IHtcbiAgICAgICAgYWRkQ2FyKHByZXYgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIFsuLi5wcmV2LCBlLnRhcmdldC52YWx1ZV07XG4gICAgICAgIH0pXG4gICAgICAgIC8vIG5ld0NhcihlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBjb25zdCBhZGRIYW5kbGVyID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBhZGRDYXIocHJldiA9PiB7XG4gICAgICAgICAgICByZXR1cm4gWy4uLnByZXYsIGNhcl07XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgIDxzZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgIHtjYXJzLm1hcChlbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPG9wdGlvbiB2YWx1ZT17ZWx9PntlbH08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gb25DbGljaz17c2VsZWN0SGFuZGxlcn0+SW5uZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGhpZGRlbj17aGlkZGVufSBuYW1lPVwiY2FyXCIgcGxhY2Vob2xkZXI9XCJ3cGlzeiBtYXJrxJkgYXV0YS4uLlwiIG9uQ2hhbmdlPXtjYXJIYW5kbGVyfS8+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBoaWRkZW49e2hpZGRlbn0gb25DbGljaz17YWRkSGFuZGxlcn0vPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0T3JUeXBlOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImJjNzk5OGU4OTQxNGE1NDMxMTAyXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJTZWxlY3RPclR5cGUiLCJfcmVmIiwiaXRlbXMiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJjYXJzIiwiYWRkQ2FyIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJjYXIiLCJuZXdDYXIiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsImhpZGRlbiIsImNoYW5nZUhpZGRlbiIsInNlbGVjdEhhbmRsZXIiLCJjYXJIYW5kbGVyIiwiZSIsInByZXYiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJ0YXJnZXQiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwiYWRkSGFuZGxlciIsImNyZWF0ZUVsZW1lbnQiLCJtYXAiLCJlbCIsIm9uQ2xpY2siLCJ0eXBlIiwibmFtZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9