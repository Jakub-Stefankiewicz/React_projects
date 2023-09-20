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

var ToDoList = function ToDoList() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
      id: 1,
      name: "Rzecz do zrobienia",
      done: false
    }, {
      id: 2,
      name: "Rzecz do zrobienia 2",
      done: true
    }]),
    _useState2 = _slicedToArray(_useState, 2),
    task = _useState2[0],
    addTask = _useState2[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "class": "toDoList"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    "class": "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Twoja lista zada\u0144"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    placeholder: "np. Zrobi\u0107 zakupy"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    "class": "btn-add"
  }, "Dodaj")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, task.map(function (task) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: task.id,
      className: task.done ? "done" : " "
    }, task.name);
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToDoList);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f495cf66956cb57a0eab")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5lOTVhNDZkMTIyZTMwMzQxYTQwYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUV0QyxJQUFNRSxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBQSxFQUFTO0VBQ25CLElBQUFDLFNBQUEsR0FBd0JGLCtDQUFRLENBQUMsQ0FBQztNQUMxQkcsRUFBRSxFQUFFLENBQUM7TUFDTEMsSUFBSSxFQUFFLG9CQUFvQjtNQUMxQkMsSUFBSSxFQUFFO0lBQ1YsQ0FBQyxFQUNHO01BQ0lGLEVBQUUsRUFBRSxDQUFDO01BQ0xDLElBQUksRUFBRSxzQkFBc0I7TUFDNUJDLElBQUksRUFBRTtJQUNWLENBQUMsQ0FDVCxDQUFDO0lBQUFDLFVBQUEsR0FBQUMsY0FBQSxDQUFBTCxTQUFBO0lBVk1NLElBQUksR0FBQUYsVUFBQTtJQUFFRyxPQUFPLEdBQUFILFVBQUE7RUFXcEIsb0JBQ0lQLDBEQUFBO0lBQUssU0FBTTtFQUFVLGdCQUNqQkEsMERBQUE7SUFBTSxTQUFNO0VBQVEsZ0JBQ2hCQSwwREFBQSxhQUFJLHdCQUFxQixDQUFDLGVBQzFCQSwwREFBQTtJQUFPWSxJQUFJLEVBQUMsTUFBTTtJQUFDQyxXQUFXLEVBQUM7RUFBbUIsQ0FBQyxDQUFDLGVBQ3BEYiwwREFBQTtJQUFRLFNBQU07RUFBUyxHQUFDLE9BQWEsQ0FDbkMsQ0FBQyxlQUVQQSwwREFBQSxhQUNLUyxJQUFJLENBQUNLLEdBQUcsQ0FBQyxVQUFBTCxJQUFJLEVBQUk7SUFDZCxvQkFBT1QsMERBQUE7TUFBSWUsR0FBRyxFQUFFTixJQUFJLENBQUNMLEVBQUc7TUFBQ1ksU0FBUyxFQUFFUCxJQUFJLENBQUNILElBQUksR0FBRyxNQUFNLEdBQUc7SUFBSSxHQUFHRyxJQUFJLENBQUNKLElBQVMsQ0FBQztFQUNuRixDQUFDLENBQ0QsQ0FDSCxDQUFDO0FBR2QsQ0FBQztBQUVELGlFQUFlSCxRQUFROzs7Ozs7OztVQ2hDdkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMF9Eemllbl8xNi0xNy8wMV9Gb3JtdWxhcnplLzA0X1phZGFuaWVfNC9qcy9Ub0RvTGlzdC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFRvRG9MaXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IFt0YXNrLCBhZGRUYXNrXSA9IHVzZVN0YXRlKFt7XG4gICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgIG5hbWU6IFwiUnplY3ogZG8genJvYmllbmlhXCIsXG4gICAgICAgICAgICBkb25lOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiUnplY3ogZG8genJvYmllbmlhIDJcIixcbiAgICAgICAgICAgICAgICBkb25lOiB0cnVlXG4gICAgICAgICAgICB9XVxuICAgIClcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzPVwidG9Eb0xpc3RcIj5cbiAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGgyPlR3b2phIGxpc3RhIHphZGHFhDwvaDI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJucC4gWnJvYmnEhyB6YWt1cHlcIi8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1hZGRcIj5Eb2RhajwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge3Rhc2subWFwKHRhc2sgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17dGFzay5pZH0gY2xhc3NOYW1lPXt0YXNrLmRvbmUgPyBcImRvbmVcIiA6IFwiIFwifSA+e3Rhc2submFtZX08L2xpPlxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9Eb0xpc3Q7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZjQ5NWNmNjY5NTZjYjU3YTBlYWJcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlRvRG9MaXN0IiwiX3VzZVN0YXRlIiwiaWQiLCJuYW1lIiwiZG9uZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInRhc2siLCJhZGRUYXNrIiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm1hcCIsImtleSIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=