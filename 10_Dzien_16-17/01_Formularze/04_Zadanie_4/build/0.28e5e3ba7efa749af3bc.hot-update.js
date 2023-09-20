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
  var submitHandler = function submitHandler(e) {
    e.preventDefault();
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "toDoList"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    className: "header",
    onSubmit: submitHandler
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Twoja lista zada\u0144"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    placeholder: "np. Zrobi\u0107 zakupy"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn-add"
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
/******/ 	__webpack_require__.h = () => ("e257ace89635a10c0e88")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4yOGU1ZTNiYTdlZmE3NDlhZjNiYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUV0QyxJQUFNRSxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBQSxFQUFTO0VBQ25CLElBQUFDLFNBQUEsR0FBd0JGLCtDQUFRLENBQUMsQ0FBQztNQUMxQkcsRUFBRSxFQUFFLENBQUM7TUFDTEMsSUFBSSxFQUFFLG9CQUFvQjtNQUMxQkMsSUFBSSxFQUFFO0lBQ1YsQ0FBQyxFQUNHO01BQ0lGLEVBQUUsRUFBRSxDQUFDO01BQ0xDLElBQUksRUFBRSxzQkFBc0I7TUFDNUJDLElBQUksRUFBRTtJQUNWLENBQUMsQ0FDVCxDQUFDO0lBQUFDLFVBQUEsR0FBQUMsY0FBQSxDQUFBTCxTQUFBO0lBVk1NLElBQUksR0FBQUYsVUFBQTtJQUFFRyxPQUFPLEdBQUFILFVBQUE7RUFZcEIsSUFBTUksYUFBYSxHQUFHLFNBQWhCQSxhQUFhQSxDQUFJQyxDQUFDLEVBQUs7SUFDekJBLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7RUFFdEIsQ0FBQztFQUVELG9CQUNJYiwwREFBQTtJQUFLZSxTQUFTLEVBQUM7RUFBVSxnQkFDckJmLDBEQUFBO0lBQU1lLFNBQVMsRUFBQyxRQUFRO0lBQUNDLFFBQVEsRUFBRUw7RUFBYyxnQkFDN0NYLDBEQUFBLGFBQUksd0JBQXFCLENBQUMsZUFDMUJBLDBEQUFBO0lBQU9pQixJQUFJLEVBQUMsTUFBTTtJQUFDQyxXQUFXLEVBQUM7RUFBbUIsQ0FBQyxDQUFDLGVBQ3BEbEIsMERBQUE7SUFBUWUsU0FBUyxFQUFDO0VBQVMsR0FBQyxPQUFhLENBQ3ZDLENBQUMsZUFFUGYsMERBQUEsYUFDS1MsSUFBSSxDQUFDVSxHQUFHLENBQUMsVUFBQVYsSUFBSSxFQUFJO0lBQ2Qsb0JBQU9ULDBEQUFBO01BQUlvQixHQUFHLEVBQUVYLElBQUksQ0FBQ0wsRUFBRztNQUFDVyxTQUFTLEVBQUVOLElBQUksQ0FBQ0gsSUFBSSxHQUFHLE1BQU0sR0FBRztJQUFJLEdBQUdHLElBQUksQ0FBQ0osSUFBUyxDQUFDO0VBQ25GLENBQUMsQ0FDRCxDQUNILENBQUM7QUFHZCxDQUFDO0FBRUQsaUVBQWVILFFBQVE7Ozs7Ozs7O1VDdEN2QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzEwX0R6aWVuXzE2LTE3LzAxX0Zvcm11bGFyemUvMDRfWmFkYW5pZV80L2pzL1RvRG9MaXN0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgVG9Eb0xpc3QgPSAoKSA9PiB7XG4gICAgY29uc3QgW3Rhc2ssIGFkZFRhc2tdID0gdXNlU3RhdGUoW3tcbiAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgbmFtZTogXCJSemVjeiBkbyB6cm9iaWVuaWFcIixcbiAgICAgICAgICAgIGRvbmU6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJSemVjeiBkbyB6cm9iaWVuaWEgMlwiLFxuICAgICAgICAgICAgICAgIGRvbmU6IHRydWVcbiAgICAgICAgICAgIH1dXG4gICAgKVxuXG4gICAgY29uc3Qgc3VibWl0SGFuZGxlciA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9Eb0xpc3RcIj5cbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImhlYWRlclwiIG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfT5cbiAgICAgICAgICAgICAgICA8aDI+VHdvamEgbGlzdGEgemFkYcWEPC9oMj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIm5wLiBacm9iacSHIHpha3VweVwiLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1hZGRcIj5Eb2RhajwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge3Rhc2subWFwKHRhc2sgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17dGFzay5pZH0gY2xhc3NOYW1lPXt0YXNrLmRvbmUgPyBcImRvbmVcIiA6IFwiIFwifSA+e3Rhc2submFtZX08L2xpPlxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9Eb0xpc3Q7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZTI1N2FjZTg5NjM1YTEwYzBlODhcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlRvRG9MaXN0IiwiX3VzZVN0YXRlIiwiaWQiLCJuYW1lIiwiZG9uZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInRhc2siLCJhZGRUYXNrIiwic3VibWl0SGFuZGxlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJvblN1Ym1pdCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm1hcCIsImtleSJdLCJzb3VyY2VSb290IjoiIn0=