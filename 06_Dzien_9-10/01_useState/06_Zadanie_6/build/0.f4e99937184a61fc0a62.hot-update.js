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

var ToDoList = function ToDoList() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    arr = _useState2[0],
    arrUpdate = _useState2[1];
  var handleClick = function handleClick() {
    arrUpdate(function (prevState) {
      return [].concat(_toConsumableArray(prevState), ["Zadanie ".concat(prevState.length + 1)]);
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleClick
  }, "Dodaj zadanie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("list", null, arr.map(function (el, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
      key: index
    }, el);
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToDoList);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6a4619e02d8927ca023c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mNGU5OTkzNzE4NGE2MWZjMGE2Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFFdEMsSUFBTUUsUUFBUSxHQUFHLFNBQVhBLFFBQVFBLENBQUEsRUFBUztFQUNuQixJQUFBQyxTQUFBLEdBQXNCRiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBRyxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUE1QkcsR0FBRyxHQUFBRixVQUFBO0lBQUVHLFNBQVMsR0FBQUgsVUFBQTtFQUNwQixJQUFNSSxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBQSxFQUFTO0lBQ3RCRCxTQUFTLENBQUMsVUFBQUUsU0FBUztNQUFBLFVBQUFDLE1BQUEsQ0FBQUMsa0JBQUEsQ0FBUUYsU0FBUyxlQUFBQyxNQUFBLENBQWFELFNBQVMsQ0FBQ0csTUFBTSxHQUFDLENBQUM7SUFBQSxDQUFHLENBQUM7RUFDM0UsQ0FBQztFQUNELG9CQUNJWiwwREFBQSwyQkFDSUEsMERBQUE7SUFBUWMsT0FBTyxFQUFFTjtFQUFZLEdBQUMsZUFBcUIsQ0FBQyxlQUNwRFIsMERBQUEsZUFDQ00sR0FBRyxDQUFDUyxHQUFHLENBQUMsVUFBQ0MsRUFBRSxFQUFFQyxLQUFLLEVBQUs7SUFDcEIsb0JBQU9qQiwwREFBQTtNQUFJa0IsR0FBRyxFQUFFRDtJQUFNLEdBQUVELEVBQU8sQ0FBQztFQUNwQyxDQUFDLENBQ0ssQ0FDTCxDQUFDO0FBRWQsQ0FBQztBQUVELGlFQUFlZCxRQUFROzs7Ozs7OztVQ25CdkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wNl9Eemllbl85LTEwLzAxX3VzZVN0YXRlLzA2X1phZGFuaWVfNi9qcy9Ub0RvTGlzdC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFRvRG9MaXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0W2FyciwgYXJyVXBkYXRlXT11c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGFyclVwZGF0ZShwcmV2U3RhdGUgPT4gWy4uLnByZXZTdGF0ZSwgYFphZGFuaWUgJHtwcmV2U3RhdGUubGVuZ3RoKzF9YF0pXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5Eb2RhaiB6YWRhbmllPC9idXR0b24+XG4gICAgICAgICAgICA8bGlzdD5cbiAgICAgICAgICAgIHthcnIubWFwKChlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPHVsIGtleT17aW5kZXh9PntlbH08L3VsPlxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2xpc3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb0RvTGlzdDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2YTQ2MTllMDJkODkyN2NhMDIzY1wiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiVG9Eb0xpc3QiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJhcnIiLCJhcnJVcGRhdGUiLCJoYW5kbGVDbGljayIsInByZXZTdGF0ZSIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsImxlbmd0aCIsImNyZWF0ZUVsZW1lbnQiLCJvbkNsaWNrIiwibWFwIiwiZWwiLCJpbmRleCIsImtleSJdLCJzb3VyY2VSb290IjoiIn0=